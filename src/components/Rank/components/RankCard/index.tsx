import clsx from "clsx";
import styles from "./index.module.scss";
import { ReactNode } from "react";

interface IRankCardProps {
  icon: ReactNode;
}

const RankCard: React.FunctionComponent<IRankCardProps> = ({ icon }) => {
  return (
    <div className={clsx(styles.RankCard)}>
      <div className={clsx(styles.RankCard_icon)}>{icon}</div>
      <div className={clsx(styles.RankCard_title)}>Bronze</div>
      <div className={clsx(styles.RankCard_info)}>
        <div className={clsx(styles.RankCard_info_item)}>
          <div className={clsx(styles.RankCard_info_item_title)}>
            7 day deposit req.
          </div>
          <div className={clsx(styles.RankCard_info_item_value)}>0%</div>
        </div>
        <div className={clsx(styles.RankCard_info_item)}>
          <div className={clsx(styles.RankCard_info_item_title)}>Discount</div>
          <div className={clsx(styles.RankCard_info_item_value)}>0 USD</div>
        </div>
      </div>
    </div>
  );
};

export default RankCard;
