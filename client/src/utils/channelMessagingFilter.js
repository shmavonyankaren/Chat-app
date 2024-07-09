const channelMessagingFilter = (channels) => {
  return channels.filter((channel) => channel.type === "messaging");
};

export default channelMessagingFilter;
