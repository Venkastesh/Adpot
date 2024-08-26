import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import BottomBar from "../components/BottomBar";
import { useContext } from "react";
import { NavigationContext } from "../NavigationContext";
import ChatScreen from "../pages/ChatScreen";

const Platform = () => {
  const { modalshown, setModalShown, stackScreensShown, setStackScreensShown } =
    useContext(NavigationContext);
  return (
    <div className="overflow-hidden relative">
      {/* /////////Modals */}
      {modalshown && (
        <div className="h-[100svh] absolute top-0 overflow-hidden bg-[#00000020] flex flex-col items-center justify-between w-full font-roboto"></div>
      )}
      {/* /////////StackScreens */}
      {stackScreensShown && (
        // <div className="h-[100svh] absolute top-0 overflow-hidden bg-[#fcfcfc] flex flex-col items-center justify-between w-full font-roboto"></div>
        <ChatScreen />
      )}
      {/* /////////Tabs */}
      <div className="h-[100svh] overflow-hidden bg-[#fcfcfc] flex flex-col items-center justify-between w-full font-roboto">
        <Header />
        <div className="flex-1 w-full overflow-y-auto">
          <Outlet />
        </div>
        <BottomBar />
      </div>
    </div>
  );
};

export default Platform;
