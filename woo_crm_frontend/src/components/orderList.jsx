import React from "react";
import OrderItem from "./orderItem";
import { useSelector } from "react-redux";

const OrderList = () => {
  const { data } = useSelector((state) => state.order?.orders);
  return (
    <div className="m-5">
      <div className="m-5">لیست سفارشات</div>
      <table class="table-auto">
        <thead className="border-b-2 border-gray-200 mb-9 ">
          <tr>
            <th className="m-3 p-3" scope="col">
              آی دی محصول
            </th>
            <th className="m-3 p3" scope="col">
              وضعیت
            </th>
            <th className="m-3 p-3" scope="col">
              جمع فاکتور
            </th>
            <th className="m-3 p-3" scope="col">
              تاریخ
            </th>
            <th className="m-3 p-3" scope="col">
              آیتم ها
            </th>
            <th className="m-3 p-3" scope="col">
           لینک
            </th>
          </tr>
        </thead>
        <tbody>{data && data?.map((item) => <OrderItem item={item} />)}</tbody>
      </table>
    </div>
  );
};

export default OrderList;
