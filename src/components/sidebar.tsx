import { NAVIGATION_DATA } from "../constant/sidebar";
import { Credits } from "./credits";
import { ShopHeader } from "./headers/shop-header";
import "../styles/sidebar.css";
import { useWindowSize } from "../hooks/useWindowSize";

export const Sidebar = () => {
  const isSmallScreen = useWindowSize();
  return (
    <div className="sidebar">
      <ShopHeader isSmallScreen={isSmallScreen} />
      <div className="navigation">
        {NAVIGATION_DATA.map(
          (
            data: { icon: string; name: string; selected?: boolean },
            index: number
          ) => (
            <div
              key={index}
              className={`navigation-link ${!!data.selected ? "selected" : ""}`}
            >
              <img src={data.icon} alt="" />
              {!isSmallScreen && <span>{data.name}</span>}
            </div>
          )
        )}
      </div>

      <Credits />
    </div>
  );
};
