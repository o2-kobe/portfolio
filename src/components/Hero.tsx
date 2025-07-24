import HeroImages from "./HeroImages";
import HeroText from "./HeroText";

const Hero = () => {
  return (
    <div className="grid grid-cols-2 mt-20">
      <HeroText />
      <HeroImages />
    </div>
  );
};
export default Hero;
