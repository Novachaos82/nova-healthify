import { ArrowRight } from "lucide-react";
import React from "react";

function JoinNewsletter() {
  return (
    <>
      <div className="flex w-[90%] max-w-[1200px] min-h-[100px] mx-auto flex-col md:flex-row justify-between md:items-center rounded-[32px] px-10 py-8 md:py-6 my-8 gap-4 shadow-[0px_0px_72px_0px_rgba(224,204,190,0.25),0px_0px_10px_0px_rgba(60,54,51,0.25)] bg-white">
        {/* Text container */}
        <div className="space-y-4">
          <h3 className="text-[18px] lg:text-[24px] text-black font-semibold font-space-grotesk">
            Join Our Newsletter
          </h3>
          <p className="text-[12px] lg:text-[16px] text-[#1E293B]">
            Drop in your e-mail id here to get latest updates.
          </p>
        </div>

        {/* Input and button container */}
        <div className="w-full md:w-fit h-fit md:bg-[#E0CCBE] text-[#3C3633] flex flex-col md:flex-row justify-center md:items-center gap-4 md:p-2 rounded-xl">
          <input
            type="text"
            placeholder="Enter your email address..."
            className="bg-[#E0CCBE] text-[#3C3633] placeholder:text-black text-[12px] lg:text-[16px] lg:bg-transparent w-full md:min-w-[250px]   md:p-0 outline-none border-none"
          />
          <button className="w-full md:w-fit bg-[#3C3633] text-[#E0CCBE] font-semibold text-[12px] lg:text-[16px] p-2 md:p-3 rounded-lg flex items-center gap-2">
            {" "}
            Subscribe
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </>
  );
}

export default JoinNewsletter;
