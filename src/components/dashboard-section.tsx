import "../styles/dashboard-section.css";
import { DashboardFilter } from "./dashboard-filter";
import { DashboardTable } from "./dashboard-table";
import { Orders } from "./orders";

export const DashboardSection = () => {
  return (
    <div className="p-8 dashboard-section">
      {/* <DashboardHeader /> */}
      <DashboardFilter />
      <Orders />
      <DashboardTable />
    </div>
  );
};
