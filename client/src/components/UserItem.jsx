import { Avatar } from "stream-chat-react";
import { InviteIcon } from "../assets";
import { useState } from "react";
const UserItem = ({ id, user, setSelectedUsers }) => {
  const [selected, setSelected] = useState(false);

  const handleSelect = () => {
    if (selected) {
      setSelectedUsers((prevUsers) => {
        prevUsers?.filter((prevUser) => prevUser !== user?.id);
      });
    } else {
      setSelectedUsers((prevUsers) => {
        if (prevUsers) return [...prevUsers, user?.id];
      });
    }
    setSelected((prev) => !prev);
  };

  return (
    <div className="user-item__wrapper" onClick={handleSelect}>
      <div className="user-item__name-wrapper">
        <Avatar image={user.image} name={user.fullName || user.id} size={32} />
        <p className="user-item__name">{user.fullName || user.id}</p>
      </div>
      {selected ? <InviteIcon /> : <div className="user-item__invite-empty" />}
    </div>
  );
};

export default UserItem;
