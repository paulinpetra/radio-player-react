import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css"; //use instead of default audio player
import "./audioPlayer.scss";

const Channel = ({ frequency }) => {
  const { id, name, channeltype, image, liveaudio } = frequency;

  return (
    <div
      key={id}
      className="w-5/6 max-w-sm mx-auto bg-gray-700 rounded-xl shadow-md overflow-hidden m-5"
    >
      <img className="h-48 w-full object-cover" src={image} alt={name} />
      <div className="p-6">
        <h2 className="text-xl font-semibold text-white">{name}</h2>
        <p className="mt-1 text-white">{channeltype}</p>
      </div>
      <AudioPlayer
        src={liveaudio}
        autoPlay
        showJumpControls={false}
        customAdditionalControls={[]}
        customVolumeControls={[]}
        layout="vertical"
      />
    </div>
  );
};

export default Channel;
