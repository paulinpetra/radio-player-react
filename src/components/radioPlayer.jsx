import { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import ChannelsList from "./channelsList";
import SearchBar from "./searchBar";

const RadioPlayer = () => {
  const [channelData, setChannelData] = useState([]); //array to hold all channels from the api
  const [searchTerm, setSearchTerm] = useState(""); //statevariable for the search field
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchChannels = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://api.sr.se/api/v2/channels?format=json&size=100"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
        //The Response object contains several properties and methods.The ok property is one of them.
        //throw creates custom errors. The Error object represents runtime errors.
        // The Error constructor creates an error object
      }
      const data = await response.json();
      setChannelData(data.channels);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchChannels();
  }, []);

  //callback function for the search components onChange event
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  // Function that filter channels if there is a search input
  const filteredChannels =
    searchTerm !== ""
      ? channelData.filter((channel) =>
          channel.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : channelData;

  return (
    <div>
      {error ? (
        <div>Error: {error.message}</div> //refers to the message property of the Error object that is stored in the error state variable.
      ) : loading ? (
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "10px",
              marginTop: "150px",
            }}
          >
            {Array(20)
              .fill()
              .map((_, i) => (
                <Skeleton
                  key={i}
                  height={300}
                  width={200}
                  containerClassName="flex-1"
                />
              ))}
          </div>
        </SkeletonTheme>
      ) : (
        <div>
          <SearchBar onSearch={handleSearch} />
          <ChannelsList channelData={filteredChannels} loading={loading} />
        </div>
      )}
    </div>
  );
};

export default RadioPlayer;
