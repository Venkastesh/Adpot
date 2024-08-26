import { gsap } from "gsap";
const ChatScreen = () => {
  useGSAP(
    () => {
      gsap.fromTo(".modal", { opacity: 0 }, { opacity: 1 });
    }
  );

  return (
    <div className="modal flex-1 bg-red-500 w-full h-full">
      <div>Hello</div>
    </div>
  );
};

export default ChatScreen;
