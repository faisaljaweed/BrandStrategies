import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
export default function HomeSection5() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const images = [
    {
      heading: "Streamlined Operations",
      para: "As a top Web design agency we streamline your business operattions by automating tasks, improving efficiency and reducing error",
    },
    {
      heading: "Data-Driven Insights",
      para: "Blitz Web Solutions Provides valuable data and analytics alowing you to monitor the behavior of your customers and taragated audience ",
    },
    {
      heading: "Targated Marketing Campaings",
      para: "We after precise marketing campiangs where we can get personalized marketing campaings accordng to your niche and audience",
    },
    {
      heading: "Scabality adn flexibility",
      para: "We can easily scale the growth of your company, accommodating increased demands; we also offer flexibility in terms of customization",
    },
    {
      heading: "Enhanced online Presence",
      para: "Our Custom web design agency can help you establish a strong online prescence alowing you to reach a wider audience, and increase brand visibility",
    },
    {
      heading: "Improved Customer Engagement",
      para: "We enable your company to engage with customers on various platforms such as social media and live chat bulding lasting relationships",
    },
  ];
  return (
    <div className="p-3">
      <p className="sectio1 text-center font-semibold text-[22px]">
        From Vision to Victory
      </p>
      <h2 className="heading text-center font-bold text-[32px] leading-9">
        How we Propal Your Company To New Heights?
      </h2>
      <div className="HomeSectionSlider">
      <Slider {...settings}>
        {images.map((item, index) => {
          return (
            <div key={index}>
              <div className="flex justify-center items-center flex-col pt-6">
                <h2 className="heading text-center text-[22px] font-bold pb-3 ">{item.heading}</h2>
                <p className="parag text-center text-[15px] ">{item.para}</p>
              </div>
            </div>
          );
        })}
      </Slider>
      </div>
    </div>
  );
}
