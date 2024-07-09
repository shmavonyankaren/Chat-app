import React from "react";
import { useChatContext } from "stream-chat-react";
import { ChannelPreview, DirectPreview } from "./";
export default function TeamChannelPreview({
  setActiveChannel,
  channel,
  type,
  setIsCreating,
  setIsEditing,
  setToggleContainer,
}) {
  const { channel: activeChannel, client } = useChatContext();

  return (
    <div
      className={
        channel?.id === activeChannel?.id
          ? "channel-preview__wrapper__selected"
          : "channel-preview__wrapper"
      }
      onClick={() => {
        setIsCreating(false);
        setIsEditing(false);
        setActiveChannel(channel);
        if (setToggleContainer) {
          setToggleContainer((prev) => !prev);
        }
      }}
    >
      {type === "team" ? (
        <ChannelPreview channel={channel} />
      ) : (
        <DirectPreview channel={channel} client={client} />
      )}
    </div>
  );
}
