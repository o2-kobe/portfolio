const HeroImages = () => {
  return (
    <div className="hidden md:flex relative items-center justify-center">
      <div className="relative w-[80%] max-w-lg h-80">
        <div
          className="absolute w-full h-[90%] rounded-xl shadow-lg overflow-hidden
                transform rotate-20 z-10"
        >
          <img className="min-h-full" src="event3.png" alt="event app" />
        </div>

        <div
          className="absolute w-full h-[90%] rounded-xl shadow-lg overflow-hidden
                transform -rotate-10 z-20"
        >
          <img className="min-h-full" src="totsx-landing.png" alt="event app" />
        </div>

        <div
          className="absolute w-full h-[80%] rounded-xl shadow-2xl rotate-10 z-30
                overflow-hidden"
        >
          <img className="min-h-full" src="event7.png" alt="event app" />
        </div>
      </div>
    </div>
  );
};
export default HeroImages;
