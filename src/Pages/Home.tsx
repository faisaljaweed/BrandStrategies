import Banner from "../Components/Banner";
import Navbars from "../Components/Navbar";
import HomeSection1 from "../Components/HomeSection1";
import HomeSection2 from "../Components/HomeSection2";
import HomeSection3 from "../Components/HomeSection3";
import HomeSection4 from "../Components/HomeSection4";
import HomeSection5 from "../Components/HomeSection5";
import HomeSection6 from "../Components/HomeSection6";

export default function Home() {
  return (
    <div>
      <section id="banner-img">
      <Navbars/>
      <Banner/>
      </section>
      <HomeSection1/>
      <section className="bgimg">
        <HomeSection2/>
      </section>
      <HomeSection3/>
      <HomeSection4/>
      <HomeSection5/>

      <section className="bgimag">
        <HomeSection6/>
      </section>
    </div>
  )
}
