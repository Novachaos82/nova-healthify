import { Search } from "lucide-react";
import Image from "next/image";
import graphics1 from "@/assets/searchSvg1.svg";
import graphics2 from "@/assets/searchSvg2.svg";
import laptop from "@/assets/laptop.png";
import plates from "@/assets/choose wisely.png";
import VerticalTimline from "@/components/VerticalTimline";
import knowYourFood from "@/assets/knowYourFood.png";
import LaptopFeatures from "@/assets/featuresLaptop.png";
import flask from "@/assets/flask.svg";
import cookie from "@/assets/Cookie.svg";
import article from "@/assets/Article.svg";
import { Turret_Road } from "next/font/google";

import { GitHub } from "@mui/icons-material";
import AccordionSection from "@/components/AccordionSection";
import SearchComponent from "@/components/SearchComponent";
const turret_road = Turret_Road({
  subsets: ["latin"],
  weight: ["500"],
});

async function getData() {
  const res = await fetch("http://localhost:3000/api/home");
  if (!res.ok) {
    throw new Error("Error fetching data");
  }
  return res.json();
}
export default async function Home() {
  const data = await getData();
  console.log(data);
  return (
    <main className="">
      {/* header */}
      {/*{data?.data && (
        <div className="flex flex-row max-w-[1200px] justify-between items-center mx-auto">
          <div className="flex flex-row items-center gap-4">
            <Image
              src={data.data["Image Links"]}
              alt="logo"
              width={50}
              height={50}
            />
            {data.data["Image Links"]}
          </div>
        </div>
      )}*/}
      <div className="flex flex-row max-w-[1200px] justify-between items-center mt-20 mx-auto">
        {/* search bar */}
        <div className="relative ">
          <div className="z-10 relative w-full">
            <SearchComponent />
          </div>

          <Image
            src={graphics1}
            alt="graphics"
            className="absolute -top-5 -right-3 z-2"
            width={100}
            height={100}
          />
          <Image
            src={graphics2}
            alt="graphics"
            className="absolute z-2 top-6 -left-10"
            width={100}
            height={100}
          />
        </div>
        {/* right image slider */}
        <div className="">
          <Image src={laptop} alt="lapttop" width={300} height={300} />
        </div>
      </div>

      {/* description section */}
      <div className=" mx-auto flex items-center justify-between relative  overflow-hidden min-h-[894px] 2xl:px-[300px]">
        <div className=" bg-[#747264] py-8 px-12 max-w-[600px] rounded-lg">
          <h1 className="text-[#3C3633] text-[32px]">Description</h1>
          <p className="text-[#E0CCBE] text-[18px]">
            NovaHealthify features a user-friendly search bar that allows
            individuals to effortlessly look up various food items. Through
            seamless integration with the Open Food Facts API, the application
            retrieves detailed information about the nutritional composition and
            processing level of the queried products. The focus is particularly
            on the NOVA classification, a system that categorizes foods based on
            the extent and purpose of their processing.
          </p>
        </div>

        <Image
          src={plates}
          alt="plates"
          className="absolute  -right-[24rem] "
        />
      </div>

      {/* how it works section */}
      <div className="mb-32">
        <h1 className="text-center text-[42px]  text-[#3C3633] font-semibold">
          How it works -<span className="text-[#E0CCBE]">1 easy steps</span>
        </h1>
        <VerticalTimline />
      </div>

      {/* Know your food */}

      <div
        className={`flex flex-col max-w-[1200px] justify-between items-center mx-auto bg-[#FFF1E8] p-2 py-32 rounded-xl mb-10 ${turret_road.className}`}
      >
        {/* header section */}
        <div className="flex justify-between w-full px-20">
          <Image
            src={knowYourFood}
            alt="knowYourFood"
            width={324}
            height={278}
          />
          <div>
            <h1 className=" text-[48px]">Know about your food!</h1>
            <div className="text-right flex gap-4 flex-col">
              <div className="flex items-center justify-end">
                <Image src={flask} alt="flask" />
                <span> Harmfull preservatives</span>
              </div>
              <div className="flex items-center justify-end">
                <Image src={article} alt="flask" />
                <span> Harmfull preservatives</span>
              </div>
              <div className="flex items-center justify-end">
                <Image src={cookie} alt="flask" />
                <span> Harmfull preservatives</span>
              </div>
            </div>
          </div>
        </div>

        {/* laptop section */}
        <div className="flex items-center justify-around w-full pt-20">
          <span className="text-xl">Science-Backed Information</span>
          <Image src={LaptopFeatures} alt="laptop" width={300} height={300} />
          <span className="text-xl">User-Friendly Interface</span>
        </div>

        <span className="text-xl text-center pl-10 pt-32">
          Machine Learning Integration
        </span>
      </div>

      {/* accordion */}

      <div className="hidden md:block max-w-[1200px] mx-auto mb-96 space-y-10 mt-56">
        <h1 className="text-center text-[42px]  text-[#3C3633] font-semibold">
          FAQ - Frequently Asked Questions
        </h1>
        <AccordionSection />
      </div>
    </main>
  );
}
