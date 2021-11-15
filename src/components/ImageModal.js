import { saveAs } from "file-saver";

function ImageModal({
  imgUrl,
  imgAlt,
  userImg,
  userId,
  userFullname,
  username,
  imgLikes,
  onClick,
}) {
  function downloadHandler() {
    saveAs(imgUrl);
  }
  return (
    <>
      <div className="z-40 inset-0 fixed bg-gray-300 opacity-70"></div>
      <div className="z-50 fixed inset-0 flex items-center justify-center">
        <div className="relative bg-white h-auto img-modal w-auto rounded-lg shadow-lg m-4 flex flex-col items-center">
          {/* Close Button */}
          <div
            className="absolute -top-4 -right-4 cursor-pointer transform hover:scale-125 transition-all duration-150 ease-out"
            onClick={onClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12"
              fill="#FFFF"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          {/* Image */}
          <img
            src={imgUrl}
            alt={imgAlt}
            className="min-h-500 w-auto overflow-y-auto rounded-t-lg md:rounded-none"
          />

          {/* Image Footer */}
          <div className="bg-transparent flex flex-col md:flex-row justify-between flex-wrap p-3 w-full">
            {/* Right */}
            <div className="flex space-x-4 items-center justify-between mb-4 md:mb-0">
              <button className="p-2 border-2 border-black bg-transparent text-black rounded-md flex cursor-pointer hover:bg-black hover:text-white transition-all duration-150 ease-linear">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
                Share
              </button>
              <button className="p-2 border-2 border-black bg-transparent text-black rounded-md flex cursor-pointer hover:bg-black hover:text-white transition-all duration-150 ease-linear">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Info
              </button>
            </div>

            {/* Left */}

            <button
              className="bg-green-500 p-4 rounded-md text-white font-semibold cursor-pointer hover:bg-green-600 transition-all duration-150 ease-linear"
              onClick={downloadHandler}
            >
              Download Image
            </button>
          </div>

          {/* Description */}
          <div className="bg-transparent flex justify-between items-center p-3 w-full">
            {/* Left */}
            <div className="flex space-x-2 items-center cursor-pointer">
              {/* Profile Image */}
              <img
                src={userImg}
                alt={`user-profile-img-${userId}`}
                className="h-10 w-10 rounded-full"
              />
              <span className="-space-y-1">
                {/* Name */}
                <p className="text-sm font-bold">{userFullname}</p>
                {/* Username */}
                <p className="text-sm italic">{`@${username}`}</p>
              </span>
            </div>

            {/* Right */}
            <div className="flex items-center space-x-1">
              {/* Likes */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-red-500 cursor-pointer"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-semibold">{imgLikes}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageModal;
