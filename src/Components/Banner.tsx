import Buttons from "./Buttons";
import bulb from "../../Images/BannerImage/bulb-glow.png";
export default function Banner() {
  return (
    <div className="p-3 lg:flex   ">
      <div className="md:w-1/2 lg:pl-9 lg:text-left ">
      <h3 className="heading text-center text-[10vw] md:text-[30px] lg:text-[38px] lg:text-left ">
        Englightening Brands With
      </h3>
      <h3 className="heading text-center text-[10vw] font-bold md:text-[30px] lg:text-[40px] lg:text-left ">
        Innovative Digital Services
      </h3>
      <p className="parag leading-8 pt-3 md:text-[14px] lg:text-[18px]">
        In today’s rapidly evolving digital landscape, staying ahead is crucial.
        Our innovative digital solutions empower your brand to stay on top in
        the digital realm with confidence. Blitz Web Solutions covers all the
        aspects from designing and development to digital marketing to make your
        brand stand out.
      </p>
      <ul className="pt-2 lg:grid lg:grid-cols-2">
        <li className="pt-2">Seamless Website Development</li>
        <li className="pt-2">Unique Brand Identity</li>
        <li className="pt-2">Result-oriented Digital Marketing</li>
        <li className="pt-2">Captivating Web Designs</li>
      </ul>
      <div className="flex flee-row justify-between pt-5 md:justify-center md:gap-2 lg:flex lg:justify-start">
      <Buttons title="Get Started" onClick={() => {}} className="bg-white text-[#412971] rounded-full font-bold py-2 px-4 "/>
      <Buttons title="Live Chat" onClick={() => {}} />
      </div>
      </div>
      <div className="lg:w-1/2 lg:flex lg:justify-center lg:items-center md:hidden">
      <img src={bulb} className="w-[65%]"/>
      </div>
    </div>
  );
}
