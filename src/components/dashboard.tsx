import { DashboardSection } from "./dashboard-section";
import { DashboardHeader } from "./headers/dashboard-header";
import "../styles/dashboard.css";

export const Dashboard = () => {
  return (
    <div className="dashboard h-dvh flex flex-col ">
      <DashboardHeader />
      <DashboardSection />
    </div>
  );
};
