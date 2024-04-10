import { timelineData } from "@/helper/timelineData";
import { TimelineItem } from "./TimeLIneItem";

export const Timeline = () =>
  timelineData.length > 0 && (
    <div className="timeline-container">
      {timelineData?.map((data, idx) => (
        <TimelineItem data={data} key={idx} />
      ))}
    </div>
  );
