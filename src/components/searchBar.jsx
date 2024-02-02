import { useState } from "react";
const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="h-40 bg-gradient-to-l from-black to-gray-700 flex items-center justify-center">
      <div className="relative">
        <input
          className="rounded-md p-2 pl-10 w-full max-w-lg"
          placeholder="Search for a channel"
          type="text"
          value={input}
          onChange={handleChange}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default SearchBar;
