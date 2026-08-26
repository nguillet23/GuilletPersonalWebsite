import { TimelineColumn } from "../components/timeline/TimelineColumn";
import { experience } from "../data/experience";
import { education } from "../data/education";

export function Experience() {
  return (
    <>
      <TimelineColumn title="Experience" items={experience} />
      <TimelineColumn title="Education" items={education} />
    </>
  );
}
