import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import OrderList from "../components/orderList";
import { getAllOrders } from "../redux/slices/orderSlice";
import API_URL from "../utils/baseUrl";
const HomePage = () => {
  const dispatch = useDispatch();
  const [eventSource, setEventSource] = useState(null);

  const { error } = useSelector((state) => state?.order);

  useEffect(() => {
    let reconnectTimeout;

    const connectSSE = () => {
      // Close existing connection if any
      if (eventSource) {
        eventSource.close();
      }

      // Create new EventSource
      const newEventSource = new EventSource(`${API_URL}`, {
        withCredentials: false,
      });

      newEventSource.addEventListener("order-status-update", (event) => {
        try {
          const newOrder = JSON.parse(event.data);
          console.log("New Order Received: ", newOrder);

          //Push notification using service worker
          navigator.serviceWorker.ready.then((registration) => {
            registration.active.postMessage({
              type: "new-order",
              title: "New Order",
              message: `Proccesing New Order :  ${newOrder.id} `,
            });
          });

          dispatch(getAllOrders());
        } catch (error) {
          console.error("Error parsing order data:", error);
        }
      });

      newEventSource.onopen = () => {
        console.log("SSE connection opened successfully");
        setEventSource(newEventSource);
      };

      newEventSource.onerror = (error) => {
        console.error("SSE connection error:", error);

        // Attempt reconnection after a delay
        reconnectTimeout = setTimeout(() => {
          console.log("Attempting to reconnect...");
          connectSSE();
        }, 5000); // 5 seconds delay
      };
    };

    // Initial connection
    connectSSE();

    // Cleanup function
    return () => {
      if (eventSource) {
        eventSource.close();
      }
      if (reconnectTimeout) {
        clearTimeout(reconnectTimeout);
      }
    };
  }, [dispatch]);

  return (
    <div>
      <h1>Order Management system dashboard</h1>
      <div className="p-2 bg-slate-400">
        <p className="text-red-500">{error?.message}</p>
      </div>
      <OrderList />
    </div>
  );
};

export default HomePage;
