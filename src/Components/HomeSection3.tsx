import Buttons from "./Buttons";

export default function HomeSection3() {
  return (
    <div className="p-3">
      <h3 className="text-[32px] text-center font-bold">
        Technology <span className="setion2-heading1">Stack</span> Redefined
      </h3>
      <p className="pt-3">
        Experience the future of innovation with our redefined technology stack.
        Unleash the power of cutting-edge tools and frameworks for enhanced
        efficiency and unparalleled performance.
      </p>

      <div className="flex justify-center items-center pt-4 pb-3">
        <Buttons
          title="Get Started"
          className="bg-black text-white rounded-full"
        />
        <Buttons title="Live Chat" />
      </div>
    </div>
  );
}
