import CtaButton from "./ctaButton";

const HeroText = () => {
  return (
    <div>
      <div className="text-7xl font-semibold mb-4">
        <h1 className="text-[#818181]">Code that</h1>
        <h1>delivers results.</h1>
      </div>
      <p>
        <span className="font-semibold">
          Engineering that drives growth and performance.
        </span>{" "}
        <span className="text-[#5e5e5e]">
          I build reliable, user-friendly web applications that help businesses
          run better, reach more people, and scale confidently.
        </span>
      </p>
      <CtaButton />
    </div>
  );
};
export default HeroText;
