import logo from "../assets/Rectangle1.png";
import emailIcon from "../assets/email.svg";
import phoneIcon from "../assets/phone.svg";
import fbIcon from "../assets/fb.svg";

import waIcon from "../assets/wa.svg";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="bottom-0 w-full max-w-[1200px] flex justify-center mx-auto">
      <div className="w-full rounded-t-[32px] drop-shadow-sm shadow-footer-shadow pl-20 pr-20  pt-10 bg-white">
        <div className="flex justify-between font-[400]">
          <div className="flex flex-col gap-[56px]">
            <div className="head">
              <Image src={logo} alt="" className="max-w-[200px]" />
            </div>
            <div className="space-y-[16px]">
              <div className="head font-space-grotesk">Get in Touch</div>
              <Link href={"/contact-us"} className="FooterIcons">
                <Image src={emailIcon} alt="" /> Email
              </Link>
              <Link href={"/contact-us"} className="FooterIcons">
                <Image src={phoneIcon} alt="" />
                Phone
              </Link>
              <Link href={"/contact-us"} className="FooterIcons">
                <Image src={waIcon} alt="" />
                Whatsapp
              </Link>
            </div>
          </div>
          {/*
          <div className="space-y-[24px]">
            <Link href="/products" className="head font-space-grotesk">
              Products
            </Link>
            <div className="space-y-[10px] flex flex-col">
              <Link href={"/products"}>Bee</Link>
              <Link href={"/products"}>Beetle</Link>
              <Link href={"/products"}>Beetle+</Link>
              <Link href={"/products"}>Shark</Link>
              <Link href={"/products"}>Vajra</Link>
            </div>
          </div>*/}

          {/*<div className="space-y-[24px]">
            <Link href="/applications" className="head font-space-grotesk">
              Application
            </Link>
            <div className="space-y-[10px] flex flex-col">
              <Link href={"/applications"}>Agriculture</Link>
              <Link href={"/applications"}>Anti-terror</Link>
              <Link href={"/applications"}>Border Security</Link>
              <Link href={"/applications"}>Construction</Link>
              <Link href={"/applications"}>Defence</Link>
              <Link href={"/applications"}>Mining</Link>
              <Link href={"/applications"}>More..</Link>
            </div>
          </div>*/}

          <div className="space-y-[48px]">
            <div className="space-y-[24px]">
              <div className="head font-space-grotesk">Resources</div>
              <div className="space-y-[10px] flex flex-col">
                <Link href={"/downloads"}>Downloads</Link>
                <Link href={"/whitepapers"}>Whitepapers</Link>
              </div>
            </div>
          </div>
          <div className="space-y-[24px]">
            <Link href={"/operations"} className="head font-space-grotesk">
              Operations
            </Link>
            <div className="space-y-[10px] flex flex-col">
              <Link href={"/operations/design"}>Designs</Link>
              <Link href={"/operations/solutions"}>Solutions</Link>
              <Link href={"/operations/support"}>Support</Link>
              <Link href={"/operations/training"}>Training</Link>
            </div>
          </div>

          <div className="space-y-[24px]">
            <div className="head font-space-grotesk">About</div>
            <div className="space-y-[10px] flex flex-col">
              <Link href={"/careers"}>Careers</Link>
              <Link href={""}>Company</Link>
              <Link href={"/contact-us"}>Connect</Link>
            </div>
          </div>
        </div>

        <div className="mt-28 mb-10 flex justify-between">
          <p className="text-[12px] text-[#333]">
            Copyright ©2024 Nova Healthify. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Image src={fbIcon} alt="" />
            <Image src={fbIcon} alt="" />
            <Image src={fbIcon} alt="" />
            <Image src={fbIcon} alt="" />
            <Image src={fbIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
