import Buttons from "./Buttons";
import EmailIcon from "@mui/icons-material/Email";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
export default function HomeSection2() {
  return (
    <div className="p-3">
      <h4 className="setion2-heading1 text-[32px] text-center font-bold pt-5 pb-3">
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
