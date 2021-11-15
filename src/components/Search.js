import { useRef } from "react";

function Search({ mainClass, searchIconClass, inputClass, onClick }) {
  const inputRef = useRef("");

  function keyHandler(event) {
    let searchTerm = inputRef.current.value;
    if (event.key !== "Enter") {
      return;
    }
    onClick(searchTerm);
  }
  function searchHandler() {
    let searchTerm = inputRef.current.value;
    onClick(searchTerm);
  }

  return (
    <div className={mainClass}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={searchIconClass}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        className={inputClass}
        type="text"
        placeholder="Search Images Here"
        ref={inputRef}
        onKeyDown={keyHandler}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 absolute top-2 right-1 cursor-pointer transform hover:scale-110"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        onClick={searchHandler}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </div>
  );
}

export default Search;
