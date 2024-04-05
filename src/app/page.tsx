import { Search } from "lucide-react";
import Image from "next/image";
import graphics1 from "@/assets/searchSvg1.svg";
import graphics2 from "@/assets/searchSvg2.svg";
import laptop from "@/assets/laptop.png";
import plates from "@/assets/choose wisely.png";
import CustomizedTimeline from "@/components/MuiComponent";

export default function Home() {
  return (
    <main className="">
      {/* header */}
      <div className="flex flex-row max-w-[1200px] justify-between items-center mt-20 mx-auto">
        {/* search bar */}
        <div className="relative ">
          <div className="z-10 relative">
            <input
              type="text"
              placeholder="Search"
              className="bg-white rounded-full border-black border-[1px] outline-none p-4 "
            />
            <div className="bg-black w-[50px] h-[50px] rounded-full flex justify-center items-center absolute top-1 right-2 ">
              <Search stroke="white" />
            </div>
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
      <div>
        <h1 className="text-center text-[42px] mb-96 text-[#3C3633] font-semibold">
          How it works -<span className="text-[#E0CCBE]">1 easy steps</span>
        </h1>
      </div>

      <div className="mt-[40px]">
        <CustomizedTimeline />
      </div>
    </main>
  );
}
