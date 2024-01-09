import { FC } from "react";
import "../../styles/search-input.css";

type Props = {
  placeholder: string;
};

export const SearchInput: FC<Props> = ({ placeholder }) => {
  return (
    <div className="search-table relative">
      <input placeholder={placeholder} className="search-table-input" />

      <img
        src="/search-grey.svg"
        alt="search"
        className="h-[16px] w-[16px] absolute left-[16px]"
      />
    </div>
  );
};
