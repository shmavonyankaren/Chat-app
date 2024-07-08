import { Avatar } from "stream-chat-react";

const DirectPreview = ({ channel, client }) => {
  const members = Object.values(channel.state.members).filter(
    ({ user }) => user.id !== client.userID
  );
  return (
    <div className="channel-preview__item single">
      <Avatar
        image={members[0]?.user?.image}
        name={members[0]?.user?.fullName}
        size={24}
      />
      <p>{members[0]?.user?.fullName}</p>
    </div>
  );
};

export default DirectPreview;
