const channelTeamFilter = (channels) => {
  return channels.filter((channel) => channel.type === "team");
};

export default channelTeamFilter;
