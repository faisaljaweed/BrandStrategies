import { Link } from "react-router-dom"
import footerimg from "../../Images/Logos/logo.png"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import StarIcon from '@mui/icons-material/Star';
import StarsIcon from '@mui/icons-material/Stars';
import AddIcon from '@mui/icons-material/Add';
import paymentimg from "../../Images/HomeScreen/Section4/payment.png"
export default function Footer() {
  return (
    <div className="footer-bg-img">
        <div className="pl-5">
        <div>
            <img src={footerimg}/>
        </div>
        <div>
            <ul>
                <h2 className="font-extrabold text-3xl">Services</h2>
                <li className="pb-2"><Link to="" className="heading font-semibold"><ArrowRightAltIcon style={{fontSize:25}}/> Logo Design</Link></li>
                <li className="pb-2"><Link to="" className="heading font-semibold"><ArrowRightAltIcon style={{fontSize:25}}/> Website Design & Deveploment </Link></li>
                <li className="pb-2"><Link to="" className="heading font-semibold"><ArrowRightAltIcon style={{fontSize:25}}/> Ecommerce Solution</Link></li>
                <li className="pb-2"><Link to="" className="heading font-semibold"><ArrowRightAltIcon style={{fontSize:25}}/> Web Portal</Link></li>
                <li className="pb-2"><Link to="" className="heading font-semibold"><ArrowRightAltIcon style={{fontSize:25}}/> Digital Marketing</Link></li>
            </ul>
            <ul>
               <h2 className="font-extrabold text-3xl">Useful Links</h2> 
                <li className="pb-2"><Link to="" className="heading font-semibold"><ArrowRightAltIcon style={{fontSize:25}}/> Pricing </Link></li>
                <li className="pb-2"><Link to="" className="heading font-semibold"><ArrowRightAltIcon style={{fontSize:25}}/> Protfolio</Link></li>
                <li className="pb-2"><Link to="" className="heading font-semibold"><ArrowRightAltIcon style={{fontSize:25}}/> Cotact Us</Link></li>
                <li className="pb-2"><Link to="" className="heading font-semibold"><ArrowRightAltIcon style={{fontSize:25}}/> Term Conditions</Link></li>
                <li className="pb-2"><Link to="" className="heading font-semibold"><ArrowRightAltIcon style={{fontSize:25}}/> Privacy Policy</Link></li>
            </ul>
            <ul>
                <h2 className="font-extrabold text-3xl">Contact</h2>
                <li className="flex gap-3 pb-2"><PhoneInTalkIcon/>844-243-4219</li>
                <li className="flex gap-3 pb-2"><EmailIcon/>sales@blitzwebsolution.com</li>
                <li className="flex gap-3 pb-2"><FacebookIcon/><LinkedInIcon/><StarIcon/><StarsIcon/></li>
            </ul>
            <div className="flex justify-center items-center pt-12 pb-12">
                <div className="w-24 h-1 bg-black"></div>
                <div className="w-14 h-14 ml-4 mr-4 bg-white shadow-xl shadow-black rounded-full flex items-center justify-center"><AddIcon/></div>
                <div className="w-24 h-1 bg-black"></div>
            </div>
        </div>
        
    </div>
    <div className="bg-[#313131]">
            <p className="slider-para text-center pt-3">© Copyright 2023 Blitz Web Solution, All Rights Reserved</p>
          <div className="flex justify-center items-center">
            <img src={paymentimg} className="pt-4 pb-4 w-64 " />
            </div>
        </div>
    </div>
  )
}
