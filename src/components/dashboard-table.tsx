import { DashboardMainTable } from "./dashboard-main-table";
import { DashboardTableSearch } from "./dashboard-table-search";
import "../styles/dashboard-table.css";

export const DashboardTable = () => {
  return (
    <div>
      <div className="table-heading">Transactions | This Month</div>

      <div className="table-and-search">
        <DashboardTableSearch />

        <DashboardMainTable />
      </div>
    </div>
  );
};
