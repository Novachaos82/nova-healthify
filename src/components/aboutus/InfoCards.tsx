import { TargetIcon } from "lucide-react";
import Image from "next/image";
import { FC } from "react";
import precision from "@/assets/aboutus/precision.svg";

interface InfoCardsProps {}

const InfoCards: FC<InfoCardsProps> = ({}) => {
  return (
    <div className="flex flex-col font-turret-road bg-white shadow-[0_0_3.9px_2px_#3C3633] rounded-[18px] gap-[24px] p-[24px]">
      <span>
        <Image src={precision} alt="precision" width={40} height={40} />
      </span>
      <h2 className="text-[24px] font-semibold">Precision</h2>
      <p className="text-[16px] text-[#554336] font-[600]">
        {" "}
        Our algorithms guarantee accurate food classifications.
      </p>
    </div>
  );
};

export default InfoCards;
