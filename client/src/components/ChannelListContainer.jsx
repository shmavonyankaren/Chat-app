import React from "react";
import { ChannelList, useChatContext } from "stream-chat-react";
import {
  ChannelSearch,
  TeamChannelList,
  TeamChannelPreview,
  Sidebar,
  CompanyHeader,
} from "./";
import Cookies from "universal-cookie";

function ChannelListContainer({
  isCreatin,
  setIsCreating,
  setIsEditing,
  setCreateType,
}) {
  return (
    <>
      <Sidebar />
      <div className="channel-list__list__wrapper">
        <CompanyHeader />
        <ChannelSearch />
        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => {}}
          List={(listProps) => (
            <TeamChannelList
              {...listProps}
              type="team"
              isCreatin={isCreatin}
              setIsCreating={setIsCreating}
              setIsEditing={setIsEditing}
              setCreateType={setCreateType}
            />
          )}
          Preview={(previewProps) => (
            <TeamChannelPreview {...previewProps} type="team" />
          )}
        />
        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => {}}
          List={(listProps) => (
            <TeamChannelList
              {...listProps}
              type="messaging"
              isCreatin={isCreatin}
              setIsCreating={setIsCreating}
              setIsEditing={setIsEditing}
              setCreateType={setCreateType}
            />
          )}
          Preview={(previewProps) => (
            <TeamChannelPreview {...previewProps} type="messaging" />
          )}
        />
      </div>
    </>
  );
}

export default ChannelListContainer;
