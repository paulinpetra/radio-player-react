import Channel from "./channel";

const ChannelsList = ({ channelData }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {channelData.map((frequency) => (
        <Channel frequency={frequency} key={frequency.id}></Channel>
      ))}
    </div>
  );
};

export default ChannelsList;
