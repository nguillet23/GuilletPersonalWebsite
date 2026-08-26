import type { TimelineItem as TimelineItemData } from "../../types/timeline";
import { TimelineItem } from "./TimelineItem";

interface TimelineColumnProps {
  title: string;
  items: TimelineItemData[];
}

export function TimelineColumn({ title, items }: TimelineColumnProps) {
  // TODO: render title + items.map(item => <TimelineItem item={item} />)
  return null;
}
