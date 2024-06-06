import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Buttons from "./Buttons";
export default function HomeSection1() {
  return (
    <div className="p-3 md:flex md:flex-row md:p-0">
      <div className="md:w-1/2">
      <p className="sectio1 text-center text-[6vw] font-semibold leading-5 pt-5 md:text-[15px]">
        Strategies That Drive Great Results
      </p>
      <h3 className="heading text-center text-[9vw] font-bold pt-4 md:text-[30px] md:pt-3">
        Partner With Our Leading-edge Agency For Unmatched Results
      </h3>
      <p className="parag pt-4 text-center text-[5vw] leading-7 md:text-[14px]">
        Blitz Web Solutions is a creative web design agency that works
        tirelessly to make your brand stand out among the competitors. We offer
        various services that help your brand in every way. From website design
        and development to top-tier digital marketing services, we empower your
        brand to soar.
      </p>
      </div>
      <div className="md:w-1/2">
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
            <td className="pt-4 pb-4 pr-2 text-[6vw] leading-5 font-semibold md:text-[20px]">
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
            <td className="pt-4 pb-4 pr-2 text-[6vw] leading-5 font-semibold md:text-[20px]">
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
            <td className="pt-4 pb-4 pr-2 text-[6vw] leading-5 font-semibold md:text-[20px]">
              Digital Marketig Services
            </td>
          </tr>
        </table>
      </div>
      <div className="flex justify-between items-center pt-4">
        <Buttons
          title="Get Started"
          className="bg-black text-white rounded-full"
        />
        <Buttons title="Live Chat" />
      </div>
    </div>
    </div>
  );
}
