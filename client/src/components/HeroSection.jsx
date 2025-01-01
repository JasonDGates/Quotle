import quotleBanner from '../assets/quotleBanner.png';

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full mb-2">
      <img src={quotleBanner} alt="Quotle Banner" className="px-10 mb-2" />
      <h3 className="text-white">Click to show a quote!</h3>
    </div>
  );
};

export default HeroSection;
