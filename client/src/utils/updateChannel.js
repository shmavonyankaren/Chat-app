const updateChannel = (
  channel,
  channelName,
  selectedUsers,
  setChannelName,
  setIsEditing,
  setSelectedUsers
) => {
  return async (e) => {
    e.preventDefault();

    const nameChanged =
      channelName !== (channel?.data?.name || channel?.data?.id);

    if (nameChanged) {
      await channel.update(
        { name: channelName },
        { text: `Channel name changed to ${channelName}` }
      );
    }

    if (selectedUsers.length) {
      await channel.addMembers(selectedUsers);
    }
    setChannelName(null);
    setIsEditing(false);
    setSelectedUsers([]);
  };
};

export default updateChannel;
