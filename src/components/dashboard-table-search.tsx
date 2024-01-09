import { SearchInput } from "./search/search-input";

export const DashboardTableSearch = () => {
  return (
    <div className="table-search">
      <SearchInput placeholder="Search by order ID..." />
      <div className="table-options">
        <div className="sort">
          <span>Sort</span>
          <img src="/sort.svg" alt="sort" className="h-4 w-4" />
        </div>
        <div className="download">
          <img src="download.svg" alt="download" className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
};
