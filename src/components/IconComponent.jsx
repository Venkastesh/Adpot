import { useContext } from "react";
import { NavigationContext } from "../NavigationContext";
import { useNavigate } from "react-router-dom";

const TabBarIcon = ({ name, children, index, active,route }) => {
  // const {set} = useContext(NavigationContext)
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(route)}
      className={`items-center flex flex-1 flex-col justify-center  `}
    >
      {children}
      <div
        className={`text-black font-roboto text-sm pt-2 ${
          active ? "font-semibold" : "font-normal"
        }`}
      >
        {name}
      </div>
    </div>
  );
};

export default TabBarIcon;
