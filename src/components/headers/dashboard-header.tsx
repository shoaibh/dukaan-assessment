import { DashboardHeading } from "../dashboard-heading";
import { DashboardOptions } from "../dashboard-options";
import { DashboardSearch } from "../dashboard-search";
import "../../styles/dashboard-header.css";

export const DashboardHeader = () => {
  return (
    <div className="flex justify-between dashboard-header">
      <DashboardHeading />
      <DashboardSearch />
      <DashboardOptions />
    </div>
  );
};
