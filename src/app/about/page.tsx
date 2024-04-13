import InfoCards from "@/components/aboutus/InfoCards";
import Image from "next/image";
import { FC } from "react";
import WhyUs from "@/assets/aboutus/WhyUs.png";
import humanBrain from "@/assets/aboutus/humanBrain.png";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="">
      <div className="flex flex-col max-w-[1200px]  mt-20 mx-auto font-turret-road">
        <h1 className="font-turret-road text-[96px] font-[900] text-[#747264] text-left">
          About <span className="text-[#3C3633]">Us</span>
        </h1>
        <div className="flex flex-col py-8 px-20 justify-center items-center shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] bg-white  mt-10 rounded-lg border-[1px] border-[#E0CCBE] ">
          <h2 className="text-[64px] text-[#3C3633] font-[900] tracking-[8.32px]">
            NOVA Healthify
          </h2>
          <p className="text-[22px] text-center tracking-tight ">
            Welcome to Nova Healthify, where culinary exploration meets
            cutting-edge technology! At Nova Healthify, we are passionate about
            redefining the way we understand and experience food. Our journey
            began with a vision to blend the precision of machine learning with
            the rich tapestry of culinary delights.
          </p>
        </div>
      </div>
      <div className="flex flex-col max-w-[1200px]  mt-20 mx-auto mb-20 gap-6">
        <div className="flex justify-between">
          <InfoCards />
          <InfoCards />
        </div>
        <div className="flex justify-center">
          <Image src={WhyUs} alt="whyus" />
        </div>
        <div className="flex justify-between">
          <InfoCards />
          <InfoCards />
        </div>
      </div>
      {/* mission card */}
      <div className="max-w-[1200px] flex shadow-md rounded-[24px] mx-auto bg-white mb-20 p-10">
        <div className="w-[60%] flex flex-col justify-center gap-4">
          <h1 className="text-[24px]"> Our Mission:</h1>
          <p className="text-[16px]">
            Nova Healthify is on a mission to revolutionize food classification.
            We strive to bring accuracy and efficiency to the forefront, making
            it easier for enthusiasts, chefs, and food lovers to explore and
            understand the diverse world of cuisines.
          </p>
        </div>
        <div className="w-[40%] flex flex-col items-end">
          <Image src={humanBrain} alt="humanBrain" />
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto">
        <div className="max-w-[70%] flex shadow-md rounded-[24px]  bg-white mb-20 p-10">
          <div className=" flex flex-col justify-center gap-4">
            <h1 className="text-[24px]"> What Sets Us Apart</h1>
            <p className="text-[16px]">
              Our commitment lies in the precision of our machine learning
              algorithms. We continuously adapt and evolve, ensuring that the
              classifications are not just accurate but tailored to your
              preferences. Nova Healthify is more than a platform; its your
              companion in unraveling the nuances of taste.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
