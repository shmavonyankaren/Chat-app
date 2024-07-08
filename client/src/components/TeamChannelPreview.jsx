import React from "react";
import { useChatContext } from "stream-chat-react";
import { ChannelPreview, DirectPreview } from "./";
export default function TeamChannelPreview({ channel, type }) {
  const { channel: activeChannel, client } = useChatContext();

  return (
    <div
      className={
        channel?.id === activeChannel?.id
          ? "channel-preview__wrapper__selected"
          : "channel-preview__wrapper"
      }
      onClick={() => {
        console.log(channel.name);
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
