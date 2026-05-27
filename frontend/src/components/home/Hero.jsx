function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-8 bg-stone-100">

      <div className="flex flex-col gap-8 md:gap-12">

        <h1 className="text-5xl font-bold">
          Find Skilled Tailors Near You
        </h1>

        <p className="text-gray-600 max-w-2xl">
          Connect customers with talented tailors and create outfits designed exactly the way you want.
        </p>

        <div className="flex gap-4 justify-center">
          <button className="bg-amber-700 text-white px-6 py-3 rounded-lg">
            Find Tailors
          </button>

          <button className="border px-6 py-3 rounded-lg">
            Become a Tailor
          </button>
        </div>

      </div>

    </section>
  );
}

export default Hero;