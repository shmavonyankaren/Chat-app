import React, { useState, useEffect } from "react";
import { useChatContext } from "stream-chat-react";

import { SearchIcon } from "../assets";
import { onSearchHandler } from "../handlers";
import { getChannelClosure } from "../utils";
function ChannelSearch({ setToggleContainer }) {
  const { client, setActiveChannel } = useChatContext();
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [teamChannels, setTeamChannels] = useState([]);
  const [directChannels, setDirectChannels] = useState([]);

  useEffect(() => {
    if (!query) {
      setTeamChannels([]);
      setDirectChannels([]);
    }
  }, [query]);

  const getChannels = getChannelClosure(
    setQuery,
    client,
    setTeamChannels,
    setDirectChannels
  );
  const onSearch = onSearchHandler(setQuery, getChannels, setLoading);
  const setChannels = (channel) => {
    setQuery("");
    setActiveChannel(channel);
  };

  return (
    <div className="channel-search__container">
      <div className="channel-search__input__wrapper">
        <div className="channel-search__input__icon">
          <SearchIcon />
        </div>
        <input
          className="channel-search__input__text"
          placeholder="Search"
          type="text"
          value={query}
          onChange={onSearch}
        />
      </div>
      {query && (
        <ResultsDropdown
          teamChannels={teamChannels}
          directChannels={directChannels}
          loading={loading}
          setQuery={setQuery}
          setToggleContainer={setToggleContainer}
          setChannels={setChannels}
        />
      )}
    </div>
  );
}

export default ChannelSearch;
