import { TimelineColumn } from "../components/timeline/TimelineColumn";
import { experience } from "../data/experience";
import { education } from "../data/education";
import { leadership } from "../data/leadership";
import styles from "../components/timeline/Timeline.module.css";

export function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.grid}>
        <TimelineColumn title="Experience" items={experience} />
        <div className={styles.stack}>
          <TimelineColumn title="Education" items={education} />
          <TimelineColumn title="Leadership" items={leadership} />
        </div>
      </div>
    </section>
  );
}
