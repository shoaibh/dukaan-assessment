import { useWindowSize } from "../hooks/useWindowSize";

export const DashboardHeading = () => {
  const isSmallScreen = useWindowSize();

  return (
    <div className="dashboard-heading">
      <span>Payments</span>
      {!isSmallScreen && (
        <div className="how-it-work">
          <img
            src="/how.svg"
            alt="how it works"
            className="w-[14px] h-[14px]"
          />
          <div>How it works</div>
        </div>
      )}
    </div>
  );
};
