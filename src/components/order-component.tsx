import { FC } from "react";

type Props = {
  header: string;
  numbers: string;
};

export const OrderComponent: FC<Props> = ({ header, numbers }) => {
  return (
    <div className="order-component">
      <div className="order-header">{header}</div>
      <div className="order-numbers">{numbers}</div>
    </div>
  );
};
