import React from "react";

const ChannelNameInputComp = ({ channnelName = "", setChannelName }) => {
  const handleChange = (e) => {
    e.preventDefault();
    setChannelName(e.target.value);
  };

  return (
    <div className="channel-name-input__wrapper">
      <p>Name</p>
      <input
        value={channnelName}
        onChange={handleChange}
        placeholder="channel-name "
      />
      <p>Add Members</p>
    </div>
  );
};
export default ChannelNameInputComp;
