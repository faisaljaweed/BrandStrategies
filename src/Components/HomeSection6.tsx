import backgroundimage  from "../../Images/HomeScreen/Section4/home-loop.mp4";
export default function HomeSection6() {
  return (
    <div className="p-3">
      <h2>
        Maximize your Business Growth Witha Results-Driven Web solutionCompany
      </h2>
      <p>
        Blitz Web Solutin Ensure effective web strategies and services
        cost-effectively. Our professionals generate logos, websites and digital
        solutions with visually appealing feature and a result-oriented approach
      </p>
      <video  src={backgroundimage}
        autoPlay
        muted
        loop 
        className="w-64"/>
      <h2>
        Unlock<span>Limitless</span> Potential
      </h2>
      <p>
        Being a professional web design agency, we offer a lot of various
        solutions that will help you unlock your business's potential
      </p>
    </div>
  );
}
