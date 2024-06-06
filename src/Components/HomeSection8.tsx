import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import image from "../../Images/HomeScreen/Section4/blitz-logo-ftr.png";
import StarRateIcon from '@mui/icons-material/StarRate';

function NextArrow(props:any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'gray', padding: '10px', borderRadius: '50%', marginRight: '30px' }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props:any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'gray', padding: '10px', borderRadius: '50%', marginLeft: '30px' }}
      onClick={onClick}
    />
  );
}

export default function HomeSection8() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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

  const data = [
    {
      url: "../../Images/HomeScreen/Section4/quote.png",
      image: "Blitz Web Solution is a one-stop solution for everything an organization requires. Their skilled developers combined quality with timeliness and created an outstanding website for us. Truly amazed by their work.",
      heading: "Steve Martin",
    },
    {
      url: "../../Images/HomeScreen/Section4/quote.png",
      image: "Blitz Web Solution has been a strength for our corporation from the beginning. They have delivered high-value work every single time. I cannot recommend them highly enough. Best company to work with!",
      heading: "James Dunkin"
    },
    {
      url: "../../Images/HomeScreen/Section4/quote.png",
      image: "I am truly amazed with the abilities of Blitz Web Solution. Their services are unparalleled because of their expertise, rational charges, rapid delivery times, and improved support. Highly recommended for website design.",
      heading: "Leah Tyler"
    },
    {
      url: "../../Images/HomeScreen/Section4/quote.png",
      image: "Blitz Web Solution has a strong focus on customer satisfaction. They go above and beyond to ensure that their clients are happy with the services they receive. They provide timely updates and are always available to answer questions and provide support.",
      heading: "Bernard Martinez"
    },
    {
      url: "../../Images/HomeScreen/Section4/quote.png",
      image: "Working with Rob at blitz web solution has been an amazing experience. His team had worked really hard on my project. They did ppc marketing for my website and the results are amazing. I want to recommend them to others.",
      heading: "Javier Davis"
    },
  ];

  return (
    <div className="p-3">
      <div>
        <img src={image} alt="Blitz Logo" />
      </div>
      <p></p>
      <h2></h2>
      <Slider {...settings} className="slider-img mt-6">
        {data.map((x, i) => (
          <div key={i}>
            <div className="mt-[20px] flex justify-center items-center ">
              <img src={x.url} className="w-28" style={{ filter: 'brightness(0) invert(1)' }} alt="Quote" />
            </div>
            <p className="slider-para text-center pl-16 pr-16 pt-2 leading-7 font-semibold">{x.image}</p>
            <h2 className="text-[#dd7043] text-center font-bold text-[24px] pt-6">{x.heading}</h2>
            <div className="flex justify-center items-center pt-4">
              <StarRateIcon style={{ color: "#ffba00" }} />
              <StarRateIcon style={{ color: "#ffba00" }} />
              <StarRateIcon style={{ color: "#ffba00" }} />
              <StarRateIcon style={{ color: "#ffba00" }} />
              <StarRateIcon style={{ color: "#ffba00" }} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
