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

function ChannelListContainer() {
  return (
    <>
      <Sidebar />
      <div className="channel-list__list__wrapper">
        <CompanyHeader />
        <ChannelSearch />
      </div>
    </>
  );
}

export default ChannelListContainer;
