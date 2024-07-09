import React, { useState } from "react";
import { useChatContext } from "stream-chat-react";

import { UserList, ChannelNameInputComp } from "./";
import { CloseCreateChannel } from "../assets";
import { createChannelFunc } from "../utils";

export default function CreateChannel({ setIsCreating, createType }) {
  const [channelName, setChannelName] = useState("");
  const { client, setActiveChannel } = useChatContext();
  const [selectedUsers, setSelectedUsers] = useState([client.userID || ""]);
  const createChannel = createChannelFunc(
    client,
    createType,
    channelName,
    selectedUsers,
    setChannelName,
    setIsCreating,
    setSelectedUsers,
    setActiveChannel
  );
  return (
    <div className="create-channel__container">
      <div className="create-channel__header">
        <p>
          {createType === "team"
            ? "Create a New Channel"
            : "Send a Direct Message"}
        </p>
        <CloseCreateChannel setIsCreating={setIsCreating} />
      </div>
      {createType === "team" && (
        <ChannelNameInputComp
          channnelName={channelName}
          setChannelName={setChannelName}
        />
      )}
      <UserList setSelectedUsers={setSelectedUsers} />
      <div className="create-channel__button-wrapper" onClick={createChannel}>
        <p>
          {createType === "team" ? "Create Channel" : "Create Message Group"}
        </p>
      </div>
    </div>
  );
}
