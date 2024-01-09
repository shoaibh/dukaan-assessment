export const DashboardSearch = () => {
  return (
    <div className="dashboard-search relative">
      <input
        placeholder="Search features, tutorials, etc."
        className="search-input"
      />

      <img
        src="/search.svg"
        alt="dashboard-search"
        className="h-[16px] w-[16px] absolute left-[16px]"
      />
    </div>
  );
};
