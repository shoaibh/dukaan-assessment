import { OrderComponent } from "./order-component";

export const Orders = () => {
  return (
    <div className="orders">
      <OrderComponent header="Online Orders" numbers="231" />
      <OrderComponent header="Amount received" numbers="₹23,92,312.19" />
    </div>
  );
};
