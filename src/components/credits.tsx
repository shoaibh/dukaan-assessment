import { useWindowSize } from "../hooks/useWindowSize";

export const Credits = () => {
  const isSmallScreen = useWindowSize();

  return (
    <div className="credits">
      <div className="wallet">
        <img src="/wallet.svg" alt="wallet" className="h-6 w-6" />
      </div>

      {!isSmallScreen && (
        <div className="available-credits">
          <span className="available-credits-header">Available credits</span>
          <span className="available-credits-amount">222.10</span>
        </div>
      )}
    </div>
  );
};
