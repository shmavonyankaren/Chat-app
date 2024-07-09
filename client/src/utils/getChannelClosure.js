const getChannelClosure =
  (setQuery, client, setTeamChannels, setDirectChannels) => async (text) => {
    try {
      const channelResponse = client.queryChannels({
        type: "team",
        name: { $autocomplete: text },
        members: { $in: [client.userId] },
      });
      const userResponse = client.queryUsers({
        id: { $ne: client.userId },
        name: { $autocomplete: text },
      });

      const [channels, { users }] = await Promise.all([
        channelResponse,
        userResponse,
      ]);

      if (channels.length) setTeamChannels(channels);
      if (users.length) setDirectChannels(users);
    } catch (e) {
      setQuery("");
    }
  };

export default getChannelClosure;
