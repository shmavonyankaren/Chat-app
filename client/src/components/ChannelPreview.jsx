const ChannelPreview = ({ channel }) => (
  <p className="channel-preview__item">
    #{channel?.data?.name || channel?.data?.id}
  </p>
);

export default ChannelPreview;
