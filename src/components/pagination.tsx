import "../styles/pagination.css";
import { PageNumber } from "./page-number";

export const Pagination = () => {
  return (
    <div className="pagination-space">
      <div className="button">
        <img src="/previous.svg" alt="previous" className="w-[18px] h-[18px]" />{" "}
        <span>Previous</span>
      </div>
      <div className="pagination-number">
        <PageNumber pageNumber={1} />
        <span className="page-number-dots">...</span>
        <PageNumber pageNumber={10} selected />
        <PageNumber pageNumber={11} />
        <PageNumber pageNumber={12} />
        <PageNumber pageNumber={13} />
        <PageNumber pageNumber={14} />
        <PageNumber pageNumber={15} />
        <PageNumber pageNumber={16} />
        <PageNumber pageNumber={17} />
        <PageNumber pageNumber={18} />
      </div>
      <div className="button next">
        <span>Next</span>
        <img src="/next.svg" alt="next" className="w-[18px] h-[18px]" />
      </div>
    </div>
  );
};
