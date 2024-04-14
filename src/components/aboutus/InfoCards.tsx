import { TargetIcon } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import precision from "@/assets/aboutus/precision.svg";

interface InfoCardsProps {
  title?: string;
  description?: string;
  ImageURL: StaticImageData | string;
}

const InfoCards: FC<InfoCardsProps> = ({ title, description, ImageURL }) => {
  return (
    <div className="flex flex-col font-turret-road bg-white shadow-[0_0_2px_0px_#3C3633] rounded-[18px] gap-[24px] p-[24px] max-w-[488px]">
      <span>
        <Image src={ImageURL} alt="precision" width={40} height={40} />
      </span>
      <h2 className="text-[24px] font-semibold">{title}</h2>
      <p className="text-[16px] text-[#554336] font-[600]">{description}</p>
    </div>
  );
};

export default InfoCards;
