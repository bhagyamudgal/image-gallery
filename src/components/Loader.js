import * as LottiePlayer from "@lottiefiles/lottie-player";

function Loader() {
  return (
    <div>
      <lottie-player
        autoplay
        loop
        mode="normal"
        src="https://assets8.lottiefiles.com/packages/lf20_9345yvlv.json"
        background="transparent"
        speed="1.5"
        style={{ width: "300px", height: "300px", margin: "auto" }}
      />
    </div>
  );
}

export default Loader;
