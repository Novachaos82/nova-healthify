declare module "react-vertical-timeline-component" {
  import React from "react";

  export interface VerticalTimelineProps {
    animate?: boolean | undefined;
    children?: React.ReactNode;
    className?: string | undefined;
    layout?:
      | "1-column"
      | "1-column-left"
      | "1-column-right"
      | "2-columns"
      | undefined;
    lineColor?: string | undefined;
  }

  export interface VerticalTimelineElementProps {
    children?: React.ReactNode;
    id?: string | undefined;
    className?: string | undefined;
    date?: React.ReactNode | undefined;
    dateClassName?: string | undefined;
    iconClassName?: string | undefined;
    iconOnClick?: (() => void) | undefined;
    iconStyle?: React.CSSProperties | undefined;
    icon?: any | undefined;
    intersectionObserverProps?: any;
    onTimelineElementClick?: (() => void) | undefined;
    position?: string | undefined;
    style?: React.CSSProperties | undefined;
    textClassName?: string | undefined;
    contentStyle?: React.CSSProperties | undefined;
    contentArrowStyle?: React.CSSProperties | undefined;
    visible?: boolean | undefined;
  }
  export class VerticalTimeline extends React.Component<VerticalTimelineProps> {}
  export const VerticalTimelineElement: React.ComponentType<VerticalTimelineElementProps>;
}
