import { FC } from "react";

type Props = {
  isSmallScreen: boolean;
};

export const ShopHeader: FC<Props> = ({ isSmallScreen }) => {
  return (
    <div className="flex shop-header">
      <img src="/logo.png" alt="logo" className="h-10 w-10 shop-logo" />

      {!isSmallScreen && (
        <div className="shop-name">
          <div className="name">Nishyan</div>
          <a className="visit">Visit Store</a>
        </div>
      )}
      {!isSmallScreen && (
        <img src="/arrow-down.svg" alt="down" className="h-5 w-5" />
      )}
    </div>
  );
};
