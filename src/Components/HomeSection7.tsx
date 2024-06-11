import Slider from "react-slick";

export default function HomeSection7() {
  const data = [
    {
      url: "../../Images/HomeScreen/Section4/slider01.jpg",
    },
    {
      url: "../../Images/HomeScreen/Section4/slider02.jpg",
    },
    {
      url: "../../Images/HomeScreen/Section4/slider03.jpg",
    },
    {
      url: "../../Images/HomeScreen/Section4/slider04.jpg",
    },
    {
      url: "../../Images/HomeScreen/Section4/slider05.jpg",
    },
    {
      url: "../../Images/HomeScreen/Section4/slider06.jpg",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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

  return (
    <div className="p-3">
      <p className="sectio1 font-semibold text-[17px] text-center">Industries We Serve</p>
      <h2 className="font-bold text-[30px] text-center pt-2">Helping Business in All Domains</h2>
      <p className="text-center pt-3 text-[17px]">
        As an extremely successful web design agency, we have provided our
        digital solutions to businesses across various industries. Take a look: 
      </p>
      <Slider {...settings} className="pt-4">
        {data.map((x, i) => {
          return <div key={i}>{<img src={x.url} />}</div>;
        })}
      </Slider>
    </div>
  );
}
