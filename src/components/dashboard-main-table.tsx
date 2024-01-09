import { Pagination } from "./pagination";

const ORDER_DATA = {
  id: "#281209",
  date: "7 July, 2023",
  amount: "₹1,278.23",
  fee: "₹22",
};

export const DashboardMainTable = () => {
  return (
    <div className="dashboard-container">
      <div className="table-container">
        <table>
          <thead>
            <tr className="head-tr">
              <th>Order ID</th>
              <th>
                <div className="table-head">
                  <span>Order Date</span>
                  <img
                    src="/sort-down.svg"
                    alt="sort-down"
                    className="h-2 w-2"
                  />
                </div>
              </th>
              <th>Order Amount</th>
              <th>
                <div className="table-head">
                  <span>Transaction fees</span>
                  <img
                    src="/info.svg"
                    alt="info"
                    className="h-[14px] w-[14px]"
                  />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {Array(10)
              .fill({ ...ORDER_DATA })
              .map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.date}</td>
                  <td>{order.amount}</td>
                  <td>{order.fee}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <Pagination />
    </div>
  );
};
