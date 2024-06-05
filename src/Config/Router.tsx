import  Home  from "../Pages/Home";
import { BrowserRouter, Routes , Route} from "react-router-dom";
import About from "../Pages/About";
import Industries from "../Pages/Industries";
import Protfolio from "../Pages/Protfolio";
import Pricing from "../Pages/Pricing";
import Contact from "../Pages/Contact";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="about" element={<About/>}/>
        {/* <Route path="services" element={<Services/>} /> */}
        <Route path="Industries" element={<Industries/>}/>
        <Route path="protfolio" element={<Protfolio/>}/>
        <Route path="pricing" element={<Pricing/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
