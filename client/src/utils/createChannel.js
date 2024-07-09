const createChannelFunc = (
  client,
  createType,
  channelName,
  selectedUsers,
  setChannelName,
  setIsCreating,
  setSelectedUsers,
  setActiveChannel
) => {
  return async (e) => {
    e.preventDefault();
    try {
      const newChannel = await client.channel(createType, channelName, {
        name: channelName,
        members: selectedUsers,
      });

      await newChannel.watch();
      setChannelName("");
      setIsCreating(false);
      setSelectedUsers([client.userID]);
      setActiveChannel(newChannel);
      console.log(
        client,
        createType,
        channelName,
        selectedUsers,
        setChannelName,
        setIsCreating,
        setSelectedUsers,
        setActiveChannel
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export default createChannelFunc;
