import type { TimelineItem as TimelineItemData } from "../../types/timeline";
import { Tag } from "../ui/Tag";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { asset } from "../../lib/asset";
import styles from "./Timeline.module.css";

interface TimelineItemProps {
  item: TimelineItemData;
}

export function TimelineItem({ item }: TimelineItemProps) {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={revealRef} className={`${styles.item} reveal`}>
      <div className={styles.dot} />
      <div className={styles.content}>
        <img className={styles.logo} src={asset(item.orgLogo)} alt={item.org} />
        <div className={styles.header}>
          <h3>{item.title}</h3>
          {item.location && <span className={styles.locationTag}>{item.location}</span>}
        </div>
        <div className={styles.org}>{item.org}</div>
        <div className={styles.date}>{item.date}</div>
        {item.bullets?.map((bullet) => (
          <p className={styles.bullet} key={bullet}>
            {bullet}
          </p>
        ))}
        <div className={styles.tags}>
          {item.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}
