import { FC } from "react";

type Props = {
  pageNumber: number;
  selected?: boolean;
};

export const PageNumber: FC<Props> = ({ pageNumber, selected }) => {
  return (
    <div className={`page-number ${selected ? "selected" : ""}`}>
      {pageNumber}
    </div>
  );
};
