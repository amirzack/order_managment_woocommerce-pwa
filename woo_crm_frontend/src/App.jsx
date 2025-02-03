import HomePage from "./pages/homePage";
import { Routes, Route } from "react-router";
import Page404 from "./pages/404";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "./redux/slices/orderSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state?.order?.orders);

  const requestNotificationPermission = async () => {
    if ("Notification" in window && Notification.permission !== "granted") {
      try {
        const permission = await Notification.requestPermission();
        if (permission === "granted") {
          console.log("Notification permission granted.");
        } else {
          console.error("Notification permission denied.");
        }
      } catch (error) {
        console.error("Error requesting notification permission:", error);
      }
    }
  };

  useEffect(() => {
    requestNotificationPermission();
  }, []);

  useEffect(() => {
    if (orders.length === 0) {
      dispatch(getAllOrders());
    }
  }, [dispatch, orders.length]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="*" element={<Page404 />}></Route>
    </Routes>
  );
}

export default App;
