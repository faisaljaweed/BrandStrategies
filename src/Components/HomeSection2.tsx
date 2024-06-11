import Buttons from "./Buttons";
import EmailIcon from "@mui/icons-material/Email";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
export default function HomeSection2() {
  return (
    <div className="p-3 md:p-1">
      <h4 className="setion2-heading1 text-[30px] text-center font-bold pt-5 md:p-2 pb-3 lg:text-[45px] lg:font-semibold lg:pl-[200px] lg:pr-[200px]">
        Unleash the DIgital Revolution: Where Innovation Meets Imagination
      </h4>
      <div className="flex justify-center items-center pt-4 pb-3">
        <Buttons
          title="Get Started"
          className="bg-black text-white rounded-full"
        />
        <Buttons title="Live Chat" />
      </div>
      <div>
        <div className="flex justify-center items-center pb-2">
          <EmailIcon />
          <span className="pl-2">sales@blitzwebsolution.com</span>
        </div>
        <div className="flex justify-center items-center">
          <PhoneInTalkIcon />
          <span className="pl-2">844-243-4219</span>
        </div>
      </div>
    </div>
  );
}
