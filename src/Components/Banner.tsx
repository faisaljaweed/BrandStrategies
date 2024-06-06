import Buttons from "./Buttons";

export default function Banner() {
  return (
    <div className="p-3">
      <div className="md:w-1/2">
      <h3 className="heading text-center text-[10vw] md:text-[30px]">
        Englightening Brands With
      </h3>
      <h3 className="heading text-center text-[10vw] font-bold md:text-[30px]">
        Innovative Digital Services
      </h3>
      <p className="parag leading-8 pt-3 md:text-[14px]">
        In today’s rapidly evolving digital landscape, staying ahead is crucial.
        Our innovative digital solutions empower your brand to stay on top in
        the digital realm with confidence. Blitz Web Solutions covers all the
        aspects from designing and development to digital marketing to make your
        brand stand out.
      </p>
      <ul className="pt-2 ">
        <li className="pt-2">Seamless Website Development</li>
        <li className="pt-2">Unique Brand Identity</li>
        <li className="pt-2">Result-oriented Digital Marketing</li>
        <li className="pt-2">Captivating Web Designs</li>
      </ul>
      <div className="flex flee-row justify-between pt-5 md:justify-center md:gap-2">
      <Buttons title="Get Started" onClick={() => {}} className="bg-white text-[#412971] rounded-full font-bold py-2 px-4 "/>
      <Buttons title="Live Chat" onClick={() => {}} />
      </div>
      </div>
      <div className="md:w-1/2">

      </div>
    </div>
  );
}
