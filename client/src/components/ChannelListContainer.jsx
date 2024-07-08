import React from "react";
import { ChannelList, useChatContext } from "stream-chat-react";
import {
  ChannelSearch,
  TeamChannelList,
  TeamChannelPreview,
  Sidebar,
} from "./";
import Cookies from "universal-cookie";

const CompanyHeader = () => (
  <div className="channel-list__header">
    <p className="channel-list__header__text">Chat Application</p>
  </div>
);

function ChannelListContainer() {
  return (
    <>
      <Sidebar />
      <div className="channel-list__list__wrapper">
        <CompanyHeader />
      </div>
    </>
  );
}

export default ChannelListContainer;
