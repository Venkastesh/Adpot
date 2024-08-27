import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import BottomBar from "../components/BottomBar";
import { useContext } from "react";
import { NavigationContext } from "../NavigationContext";
import ChatScreen from "../pages/ChatScreen";
import gsap from "gsap";

const Platform = () => {
  const { modalshown, setModalShown, stackScreensShown, setStackScreensShown } =
    useContext(NavigationContext);
    // gsap.registerPlugin(ScrollSmoother) 
  return (
    <div className="overflow-hidden relative bg-[#fcfcfc]">
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
        <div className="flex-1 smoothScroll w-full overflow-y-auto bg-[#fcfcfc]">
          <Outlet />
        </div>
        <BottomBar />
      </div>
    </div>
  );
};

export default Platform;
