import Search from "./Search";

function Banner({ onClick }) {
  return (
    <section className="bg-banner flex flex-col items-center justify-center h-500 px-4 shadow-md">
      <h1 className="text-4xl md:text-5xl text-white font-semibold text-center mb-4">
        Download High Quality Images By Creaters
      </h1>
      <p className="text-gray-300 text-lg md:text-xl text-center mb-10">
        Over 2.4 million stock images by our talented community
      </p>
      <Search
        mainClass="relative w-4/5 lg:w-3/5 bg-white p-1 rounded-md border-4 focus-within:border-gray-400"
        searchIconClass="h-6 w-6 absolute top-2 left-2 text-gray-500"
        inputClass="bg-transparent pl-11 pr-8 h-8 text-lg outline-none w-full"
        onClick={onClick}
      />
    </section>
  );
}

export default Banner;
