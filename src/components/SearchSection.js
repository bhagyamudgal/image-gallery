import { useEffect, useState } from "react";
import ImageCard from "./ImageCard";
import ImageModal from "./ImageModal";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./Loader";
function SearchSection({ searchTerm }) {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [image, setImage] = useState({});
  const [modal, setModal] = useState(false);

  async function fetchImages(first) {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?per_page=20&query=${searchTerm}&page=${page}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Accept-Version": "v1",
          Authorization: `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`,
        },
      }
    );
    const data = await response.json();
    if (first === true) {
      setImages(data.results);
    } else {
      setImages([...images, ...data.results]);
    }

    if ([...images, ...data.results].length >= data.total) {
      setHasMore(false);
    }
    setPage(page + 1);
  }

  useEffect(() => {
    setImages([]);
    setPage(1);
    fetchImages(true);
  }, [searchTerm]);

  function modalOpen(props) {
    setImage(props);
    setModal(true);
  }
  function modalClose() {
    setImage({});
    setModal(false);
  }
  return (
    <>
      <section className="p-5 max-w-7xl mx-auto">
        <h1 className="text-5xl font-medium text-center md:text-left">
          {searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1)}
        </h1>
      </section>
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={hasMore}
        loader={<Loader />}
        endMessage={
          <p className="text-center text-xl font-medium m-6">
            Yay! You have seen it all
          </p>
        }
      >
        <section className="flex justify-between items-center max-w-7xl mx-auto flex-wrap py-4">
          {images.map((image, key) => {
            return (
              <ImageCard
                key={key}
                imgUrl={image.urls.regular}
                imgAlt={image.alt_description}
                userImg={image.user.profile_image.medium}
                userId={image.user.id}
                userFullname={`${image.user.first_name} ${image.user.last_name}`}
                username={image.user.username}
                imgLikes={image.likes}
                onClick={() => {
                  modalOpen({
                    key: key,
                    imgUrl: image.urls.regular,
                    imgAlt: image.alt_description,
                    userImg: image.user.profile_image.medium,
                    userId: image.user.id,
                    userFullname: `${image.user.first_name} ${image.user.last_name}`,
                    username: image.user.username,
                    imgLikes: image.likes,
                  });
                }}
              />
            );
          })}

          {modal && (
            <ImageModal
              imgUrl={image.imgUrl}
              imgAlt={image.imgAlt}
              userImg={image.userImg}
              userId={image.userId}
              userFullname={image.userFullname}
              username={image.username}
              imgLikes={image.imgLikes}
              onClick={modalClose}
            />
          )}
        </section>
      </InfiniteScroll>
    </>
  );
}

export default SearchSection;
