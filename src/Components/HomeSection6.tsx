import backgroundimage from "../../Images/HomeScreen/Section4/home-loop.mp4";
export default function HomeSection6() {
  const data = [
    {
      url: "../../Images/HomeScreen/Section4/web-sol-icon-1.png",
      heading: "Competitive Approach",
      paragraph:
        "We work for client brands’ stand to let their website win the competition. We follow a competitive approach and work for client brands to make them stand out in the competition.",
    },
    {
      url: "../../Images/HomeScreen/Section4/web-sol-icon-2.png",
      heading: "Customer-Centric",
      paragraph:
        "Our services are extremely customer-centric as we make the consumer the priority in all web-based developments.",
    },
    {
      url: "../../Images/HomeScreen/Section4/web-sol-icon-3.png",
      heading: "Quick Turnaround",
      paragraph:
        "At our professional web design agency, we try to deliver projects in the promised period as we understand the worth of customer time.",
    },
  ];
  return (
    <div className="p-3 mt-5 bg-[#5e4247] ">
      <h2 className="pt-4 text-[30px] text-center font-bold lg:font-extrabold lg:text-left">
        Maximize your Business Growth With a Results <span className="hidden lg:block"></span>-Driven Web solution Company
      </h2>
      <p className="text-center text-[18px] p-2 lg:hidden">
        Blitz Web Solutin Ensure effective web strategies and services
        cost-effectively. Our professionals generate logos, websites and digital
        solutions with visually appealing feature and a result-oriented approach
      </p>

      <div className="lg:flex lg:flex-row">
        <div className="lg:w-1/2">
        <p className="text-center text-[18px] p-2 lg:text-left">
        Blitz Web Solutin Ensure effective web strategies and services
        cost-effectively. Our professionals generate logos, websites and digital
        solutions with visually appealing feature and a result-oriented approach
      </p>
          {data.map((x, i) => {
            return (
              <div key={i} >
                <div className="lg:flex lg:flex-row lg:gap-4">
                <div className="flex justify-center items-center">
                  <img src={x.url} className="lg:w-24 lg:h-24" />
                </div>
                <div className="p-2">
                  <h2 className="text-center font-bold text-[18px] lg:text-left">
                    {x.heading}
                  </h2>
                  <p className="text-center pt-2 font-semibold text-[14px] lg:text-left lg:w-80">
                    {x.paragraph}
                  </p>
                </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="lg:w-1/2">
          <video
            src={backgroundimage}
            autoPlay
            muted
            loop
            className="w-64 md:w-[85%] pt-2 pb-2 lg:w-[80%]"
          />
          <h2 className="text-center font-bold text-[30px] lg:text-left">
            Unlock <span className="text-[#dd7043]">Limitless</span> Potential
          </h2>
          <p className="text-center font-semibold text-[14px] pt-2 lg:text-left">
            Being a professional web design agency, we offer a lot of various
            solutions that will help you unlock your business's potential
          </p>
        </div>
      </div>
    </div>
  );
}
