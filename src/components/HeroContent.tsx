


export default function HeroContent() {
  return (
    <div className="h-full flex justify-between items-center">
      <div className="w-1/2 flex flex-col gap-2">
        <h1 className="text-gray-200 text-7xl font-extrabold ">
          Authentic but Cool &{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Creative
          </span>{" "}
          Web designs.
        </h1>
        <p className="text-lg text-gray-400 w-[35rem] leading-relaxed">
          With our pre-made, editable templates, you can spend less time
          worrying about formatting and more time actually writing.
        </p>
        <div>
          <button className="_transition bg-indigo-500 hover:bg-blue-500 font-bold text-gray-100 px-4 py-2 rounded-md">
            Explore Products
          </button>
        </div>
      </div>
      <div className="h-[30rem] w-[30rem]">
        <picture>
          <img
            src="https://imagedelivery.net/wYoa-h6qJnlI_ip-eHGWaw/76f7f34c-ee29-4f27-1772-fde3564b3100/public"
            alt="Hero Image"
          />
        </picture>
      </div>
    </div>
  );
}
