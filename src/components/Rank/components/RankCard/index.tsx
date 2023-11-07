import clsx from "clsx";
import styles from "./index.module.scss";
import { ReactNode } from "react";

interface IRankCardProps {
  theme?: "dark" | "light";
  active?: boolean;
  rank: string;
  icon: ReactNode;
  info: {
    title: string;
    value: string;
  }[];
}

const RankCard: React.FunctionComponent<IRankCardProps> = ({
  icon,
  rank,
  info,
  active = false,
  theme = "light",
}) => {
  return (
    <div
      className={clsx(
        styles.RankCard,
        styles[rank],
        styles[theme],
        active && styles.active
      )}
    >
      <div className={clsx(styles.RankCard_icon)}>{icon}</div>
      <div className={clsx(styles.RankCard_title)}>{rank}</div>
      <div className={clsx(styles.RankCard_info)}>
        {info.map((e, i) => (
          <div className={clsx(styles.RankCard_info_item)} key={i}>
            <div className={clsx(styles.RankCard_info_item_title)}>
              {e.title}
            </div>
            <div className={clsx(styles.RankCard_info_item_value)}>
              {e.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RankCard;
