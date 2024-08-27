import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { NavigationContext } from "../NavigationContext";

const ChatProfile = ({ name, unReadCount, time, photo, lastMessage,className }) => {
  const navigate = useNavigate();
  const handlePress = () => {
    navigate(`/chatscreen?n=${name.first}`)
  };

  return (
    <div
      onClick={handlePress}
      className={`flex items-center w-full justify-between p-4 cursor-pointer ${className}`}
    >
      <div className="flex items-center justify-between">
        {photo ? (
          <img
            src={photo}
            alt={name}
            className="h-[55px] w-[55px] rounded-full"
          />
        ) : (
          <div className="bg-gradient-to-bl from-[#f9ce34] to-[#ee2a7b] rounded-full p-[1px]">
            <div className="h-[51px] w-[51px] bg-white rounded-full flex items-center justify-center border">
              <p className="text-3xl font-medium capitalize transition-all title bg-gradient-to-tr from-[#f9ce34] to-[#ee2a7b]  bg-clip-text text-transparent">
                {name.first?.[0]}
              </p>
            </div>
          </div>
        )}

        <div className="ml-2">
          <div className="font-medium">{name.first}</div>
          <div className="text-sm text-[#313131]">{(lastMessage.city+lastMessage.state+" "+lastMessage.country).slice(0,30)+"..."}</div>
        </div>
      </div>
      <div>
        <div className="text-xs text-[#25252580]">{time?.slice(11,16)+" pm"}</div>
        {/* {unReadCount ? <div>{unReadCount}</div> : null} */}
      </div>
    </div>
  );
};

export default ChatProfile;
