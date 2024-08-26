import {
  MdPhone,
  MdOutlinePhone,
  MdMessage,
  MdPeople,
  MdOutlineMessage,
  MdMusicNote,
  MdOutlineMusicNote,
  MdOutlinePeople,
} from "react-icons/md";
import TabBarIcon from "./IconComponent";
import { useLocation } from "react-router-dom";
const BottomBar = () => {
  const { pathname } = useLocation();
  const tabs = [
    {
      id: 1,
      Name: "Chats",
      Icon: <MdOutlineMessage size={24} />,
      activeIcon: <MdMessage size={24} />,
      pathname: "/",
    },
    {
      id: 2,
      Name: "Music",
      Icon: <MdOutlineMusicNote size={24} />,
      activeIcon: <MdMusicNote size={24} />,
      pathname: "/music",
    },
    {
      id: 3,
      Name: "Communities",
      Icon: <MdOutlinePeople size={24} />,
      activeIcon: <MdPeople size={24} />,
      pathname: "/communities",
    },
    {
      id: 4,
      Name: "Calls",
      Icon: <MdOutlinePhone size={24} />,
      activeIcon: <MdPhone size={24} />,
      pathname: "/calls",
    },
  ];
  return (
    <div className="h-[80px] shadow-[0_15px_40px_-15px_rgba(0,0,0,0.3)] w-full flex flex-row items-center justify-between">
      {tabs.map((item) => (
        <TabBarIcon
          key={item.id}
          children={pathname == item.pathname ? item.activeIcon : item.Icon}
          name={item.Name}
          index={item.id}
          active={pathname == item.pathname}
          route={item.pathname}
        />
      ))}
    </div>
  );
};

export default BottomBar;
