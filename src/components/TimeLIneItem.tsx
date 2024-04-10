export const TimelineItem = ({ data }: any) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      <span className="tag">{data?.text}</span>
      <time>{data?.text}</time>
      <p>{data?.text}</p>
      <p>{data?.description}</p>

      <span className="circle" />
    </div>
  </div>
);
