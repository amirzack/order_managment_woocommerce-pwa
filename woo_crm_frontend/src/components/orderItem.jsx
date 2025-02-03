import React from "react";

const OrderItem = ({ item }) => {
  const dateCreated = item.date_created;
  const formatedDate = new Date(dateCreated);
  const now = Date.now();
  const differenceInMillis = now - formatedDate.getTime();
  const differenceInMinutes = Math.floor(differenceInMillis / (1000 * 60));
  // const differenceInHours = Math.floor(differenceInMillis / (1000 * 60 * 60));

  return (
    <tr>
      <th className="p-3 m-3 border">{item.id}</th>
      <td className="p-3 m-3 border">{item.status}</td>
      <td className="p-3 m-3 border">{item.total}</td>
      <td className="p-3 m-3 border">دقیقه پیش{differenceInMinutes}</td>
      <td className="p-3 m-3 border">
        {item?.line_items.map((item) => (
          <div>{item.name}</div>
        ))}
      </td>
      <td className="p-3 m-3 border">
        <a
          href={`${PRODUCT_URL}=${item.id}`}
        >
          لینک
        </a>
      </td>
    </tr>
  );
};

export default OrderItem;
