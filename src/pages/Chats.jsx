import ChatProfile from "../components/ChatProfile";
import { chatProfiles } from "../utils/Constants";

const Chats = () => {
  return [...chatProfiles,...chatProfiles,...chatProfiles,...chatProfiles]?.map((item) => (
    <ChatProfile name={item.name} lastMessage={item.lastMessage} photo={item.photo} unReadCount={item.unReadCount} time={item.time} />
  ));
};

export default Chats;
