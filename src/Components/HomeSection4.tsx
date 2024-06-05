export default function HomeSection4() {
  const data = [
    {
      url: "../../Images/HomeScreen/Section4/port-1-1.jpg",
    },
    {
      url: "../../Images/HomeScreen/Section4/port-2-2.jpg",
    },
    {
      url: "../../Images/HomeScreen/Section4/port-3-3.jpg",
    },
    {
      url: "../../Images/HomeScreen/Section4/port-4-4.jpg",
    },
    {
      url: "../../Images/HomeScreen/Section4/port-5-5.jpg",
    },
    {
      url: "../../Images/HomeScreen/Section4/port-6-6.jpg",
    },
  ];
  return (
    <div className="p-3">
      <p className="sectio1 font-semibold text-center text-[20px]">
        A Glimpse of Our Work!
      </p>
      <h2 className="heading text-center font-bold text-[32px]">
        Some of Our Best Work
      </h2>
      <div className="flex justify-center items-center flex-col">
        {data.map((x, i) => {
          return (
            <div key={i}  id="image-container"
            className="mt-10 mb-4 ml-2 pb-7 pl-2 pr-2 w-72 sm:w-1/4 md:w-[12rem] md:h-[14rem] cursor-pointer hover:opacity-75 rounded-md">
              <img src={x.url} alt="img" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
