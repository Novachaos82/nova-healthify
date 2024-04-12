import InfoCards from "@/components/aboutus/InfoCards";
import { FC } from "react";

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
      <div className="flex flex-col max-w-[1200px]  mt-20 mx-auto mb-20">
        <div className="flex justify-between">
          <InfoCards />
          <InfoCards />
        </div>
        <div>Why us?</div>
        <div className="flex justify-between">
          <InfoCards />
          <InfoCards />
        </div>
      </div>
    </div>
  );
};

export default page;
