function ImageCard({
  imgUrl,
  imgAlt,
  userImg,
  userId,
  userFullname,
  username,
  imgLikes,
  onClick,
}) {
  return (
    <div className="rounded-lg shadow-lg m-4 flex flex-col items-center justify-center mx-auto bg-white w-4/5 sm:w-400 cursor-pointer transform hover:scale-105 transition-all duration-250 ease-in-out img-loading" onClick={onClick}>
      {/* Image */}
      <img src={imgUrl} alt={imgAlt} className="rounded-t-lg" />

      {/* Description */}
      <div className="w-full flex justify-between items-center py-4 px-2">
        {/* Left */}
        <div className="flex space-x-2 items-center">
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
            className="h-5 w-5 text-red-500"
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
  );
}

export default ImageCard;
