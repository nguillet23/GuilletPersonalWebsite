import type { TimelineItem as TimelineItemData } from "../../types/timeline";
import { TimelineItem } from "./TimelineItem";
import styles from "./Timeline.module.css";

interface TimelineColumnProps {
  title: string;
  items: TimelineItemData[];
}

export function TimelineColumn({ title, items }: TimelineColumnProps) {
  return (
    <div className={styles.column}>
      <h2 className={styles.columnTitle}>{title}</h2>
      <div className={styles.timeline}>
        {items.map((item) => (
          <TimelineItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
