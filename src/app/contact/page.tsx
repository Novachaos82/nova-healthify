import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { FC } from "react";

import admin from "@/assets/contact/admin.png";
import eyebrow from "@/assets/contact/EyebrowIcon.svg";
import mailSmall from "@/assets/contact/mail-small.png";
import mail from "@/assets/contact/mail.svg";
import phone from "@/assets/contact/phone.png";
import whatsapp from "@/assets/contact/wa.png";
import JoinNewsletter from "@/components/contact/Newsletter";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div>
      {/* head */}
      <div className="flex flex-col max-w-[1200px]  mt-20 mx-auto font-turret-road">
        <h1 className="font-turret-road text-[96px] font-[900] text-[#747264] text-left">
          Get in touch <span className="text-[#3C3633]">with Us</span>
        </h1>
      </div>
      {/* form and contact section*/}
      <div className="flex  max-w-[1200px]  my-20 mx-auto justify-between">
        {/* left form sections */}
        <div className="bg-[#3C3633] p-10 rounded-lg flex flex-col font-turret-road w-[60%] gap-4 shadow-[0px_4px_35px_0px_rgba(0,0,0,0.5)]">
          <input
            type="text"
            placeholder="Enter name"
            name="name"
            className="bg-[#747264] px-5 py-3 text-white font-bold rounded-[35px] outline-none"
          />
          <input
            type="text"
            placeholder="Enter phone number"
            name="phone"
            className="bg-[#747264] px-5 py-3 text-white font-bold rounded-[35px] outline-none"
          />{" "}
          <input
            type="email"
            placeholder="Enter email "
            name="email"
            className="bg-[#747264] px-5 py-3 text-white font-bold rounded-[35px] outline-none"
          />{" "}
          <textarea
            placeholder="Leave a message or your queries..."
            name="name"
            className="bg-[#747264] px-5 py-3 text-white font-bold rounded-[35px] outline-none "
          />
          <button className="bg-[#E0CCBE] text-black font-bold rounded-lg px-4 py-2 max-w-fit flex gap-2 font-sans mt-2 ml-2">
            Submit <ArrowRight size={20} />
          </button>
        </div>
        {/* right section */}
        <div className="space-y-8 w-[40%] max-w-sm h-fit ">
          <div className="w-full h-full bg-[#FAFAFA] flex flex-col rounded-xl p-4 gap-4">
            <div className="w-full min-w-[300px] min-h-[250px] bg-white flex flex-col justify-between rounded-md gap-6 p-6">
              <Image src={eyebrow} alt="" className="object-contain" />
              <div>
                <h3 className="text-2xl font-medium text-primary-green">
                  Connect with us
                </h3>
                <p>Our phone lines are always open for curious customers</p>
              </div>
              <div className="space-y-3">
                <p className="flex gap-3">
                  <Image src={phone} alt="" className="object-contain" /> +91
                  9433996985
                </p>
                <p className="flex gap-3">
                  <Image src={whatsapp} alt="" className="object-contain" />{" "}
                  Whatsapp
                </p>
              </div>
            </div>
            <div className="w-full min-w-[300px] min-h-[250px] flex flex-col justify-between bg-white rounded-md gap-6 p-6">
              <Image src={mail} alt="" className="object-contain" />
              <div>
                <h3 className="text-2xl font-medium text-primary-green">
                  Write to us
                </h3>
                <p>
                  If you&apos;re old fashioned like us, write us a mail. You
                  could also send a letter if you want to
                </p>
              </div>
              <div className="space-y-3">
                <p className="flex gap-3">
                  <Image src={admin} alt="" className="object-contain" />
                  admin@automicrouas.com
                </p>
                <p className="flex gap-3">
                  <Image src={mailSmall} alt="" className="object-contain" />
                  contact@automicrouas.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <JoinNewsletter />
      </div>
    </div>
  );
};

export default page;
