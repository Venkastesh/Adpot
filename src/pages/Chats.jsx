import { useContext, useEffect, useState } from "react";
import ChatProfile from "../components/ChatProfile";
import { getUsers } from "../services/getUsers";
import CHatProfileShimmer from "../shimmers/ChatProfileShimmer";
import { UsersContext } from "../utils/UsersContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Chats = () => {
  const { chatProfiles } = useContext(UsersContext);
  console.log(chatProfiles);
  return (
    <div className="chat-list">
      {[...chatProfiles]?.map((item) =>
        item ? (
          <ChatProfile
            className={"chat-profile"}
            name={item.name}
            lastMessage={item.location}
            photo={item.picture.medium}
            unReadCount={item.unReadCount}
            time={item.registered.date}
          />
        ) : (
          <CHatProfileShimmer />
        )
      )}
    </div>
  );
};

export default Chats;
