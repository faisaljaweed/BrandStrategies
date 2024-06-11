import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Buttons from "./Buttons";
export default function HomeSection1() {
  return (
    <div className="p-3 md:flex md:flex-col md:p-0 ">
      <div className="md:flex md:flex-row lg:flex">
      <div className="md:w-1/2 ">
      <p className="sectio1 text-center text-[6vw] font-semibold leading-5 pt-5 md:text-[15px] lg:text-[20px] lg:text-left">
        Strategies That Drive Great Results
      </p>
      <h3 className="heading text-center text-[9vw] font-bold pt-4 md:text-[30px] md:pt-3 lg:text-[40px] lg:text-left lg:font-extrabold">
        Partner With Our Leading-edge Agency For Unmatched Results
      </h3>
      <p className="parag pt-4 text-center text-[5vw] leading-7 md:p-2 md:text-[14px] lg:text-[18px] lg:text-left">
        Blitz Web Solutions is a creative web design agency that works
        tirelessly to make your brand stand out among the competitors. We offer
        various services that help your brand in every way. From website design
        and development to top-tier digital marketing services, we empower your
        brand to soar.
      </p>
      </div>
      <div className="md:w-1/2 md:flex md:justify-center md:items-center">
      <div className="flex justify-center items-center">
        <table className="table-back border border-black ">
          <tr className="bg-white hover:bg-transparent row-hover border border-black ">
            <td className="pl-4 pt-4 pb-4 pr-3 text-5xl font-extrabold text-outline md:text-4xl">
              01
            </td>
            <tr>
              <ArrowForwardIcon
                fontSize="medium"
                style={{ marginTop: "40px", marginRight: "10px" }}
              />
            </tr>
            <td className="pt-4 pb-4 pr-2 text-[6vw] leading-5 font-semibold md:text-[16px] lg:text-[2vw] lg:font-bold">
              Web Design and Development
            </td>
          </tr>
          <tr className="bg-white hover:bg-transparent row-hover border border-black">
            <td className="pl-4 pt-4 pb-4 pr-3 text-5xl font-extrabold text-outline md:text-4xl">
              02
            </td>
            <tr>
              <ArrowForwardIcon
                fontSize="medium"
                style={{ marginTop: "40px", marginRight: "10px" }}
              />
            </tr>
            <td className="pt-4 pb-4 pr-2 text-[6vw] leading-5 font-semibold md:text-[16px] lg:text-[2vw] lg:font-bold">
              Logo Designing Services
            </td>
          </tr>
          <tr className="bg-white hover:bg-transparent row-hover border border-black">
            <td className="pl-4 pt-4 pb-4 pr-3 text-5xl  font-extrabold text-outline md:text-4xl ">
              03
            </td>
            <tr>
              <ArrowForwardIcon
                fontSize="medium"
                style={{ marginTop: "40px", marginRight: "10px" }}
              />
            </tr>
            <td className="pt-4 pb-4 pr-2 text-[6vw] leading-5 font-semibold md:text-[16px] lg:text-[2vw] lg:font-bold">
              Digital Marketig Services
            </td>
          </tr>
        </table>
      </div>
    </div>
    </div>
    <div className="flex justify-center items-center pt-4">
        <Buttons
          title="Get Started"
          className="bg-black text-white rounded-full"
        />
        <Buttons title="Live Chat" />
      </div>
    </div>
  );
}
