function Hero() {
  return (
    <section className="min-h-[60vh] md:min-h-[80vh] flex flex-col justify-center items-center text-center px-6 md:px-8 bg-stone-100">

      <div className="flex flex-col gap-4 md:gap-10">

        <h1 className="text-3xl md:text-5xl font-bold">
          Find Skilled Tailors Near You
        </h1>

        <p className="text-gray-600 max-w-2xl text-sm md:text-base">
          Connect customers with talented tailors and create
          outfits designed exactly the way you want.
        </p>

        <div className="flex gap-4 justify-center">
          <button className="bg-amber-700 text-white px-5 py-3 rounded-lg">
            Find Tailors
          </button>

          <button className="border px-5 py-3 rounded-lg">
            Become a Tailor
          </button>
        </div>

      </div>

    </section>
  );
}

export default Hero;