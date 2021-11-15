import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ImageCard from "./ImageCard";
import ImageModal from "./ImageModal";
import Loader from "./Loader";

function MainSection() {
  const [images, setImages] = useState([]);
  const [image, setImage] = useState({});
  const [modal, setModal] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  async function fetchImages() {
    const response = await fetch(
      `https://api.unsplash.com/photos?per_page=20&page=${page}`,
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

    setImages([...images, ...data]);

    if ([...images, ...data].length >= data.total) {
      setHasMore(false);
    }

    setPage(page + 1);
  }

  useEffect(() => {
    fetchImages();
  }, []);

  function modalOpen(props) {
    setImage(props);
    setModal(true);
  }
  function modalClose() {
    setImage({});
    setModal(false);
  }

  return (
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
        {images.map((image) => {
          return (
            <ImageCard
              key={image.id}
              imgUrl={image.urls.regular}
              imgAlt={image.alt_description}
              userImg={image.user.profile_image.medium}
              userId={image.user.id}
              userFullname={`${image.user.first_name} ${image.user.last_name}`}
              username={image.user.username}
              imgLikes={image.likes}
              onClick={() => {
                modalOpen({
                  key: image.id,
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
  );
}

export default MainSection;
