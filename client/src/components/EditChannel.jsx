import React, { useState } from "react";
import { useChatContext } from "stream-chat-react";

import { ChannelNameInputComp, UserList } from "./";
import { CloseCreateChannel } from "../assets";
import { updateChannel } from "../utils";

export default function EditChannel({ setIsEditing }) {
  const { channel } = useChatContext();
  const [channelName, setChannelName] = useState(channel?.data?.name);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const updateChannelFunction = updateChannel(
    channel,
    channelName,
    selectedUsers,
    setChannelName,
    setIsEditing,
    setSelectedUsers
  );
  return (
    <div className="edit-channel__container">
      <div className="edit-channel__header">
        <p>Edit Channel</p>
        <CloseCreateChannel setIsEditing={setIsEditing} />
      </div>
      <ChannelNameInputComp
        channnelName={channelName}
        setChannelName={setChannelName}
      />
      <UserList setSelectedUsers={setSelectedUsers} />
      <div
        className="edit-channel__button-wrapper"
        onClick={updateChannelFunction}
      >
        <p>Save Changes</p>
      </div>
    </div>
  );
}
