import clsx from "clsx";
import styles from "./index.module.scss";

import RankCard from "./components/RankCard";

import FlashBronze from "../../assets/icons/rank/flash-bronze";

interface IRankProps {}

const Rank: React.FunctionComponent<IRankProps> = () => {
  return (
    <div className={clsx(styles.Rank)}>
      <RankCard icon={<FlashBronze />} />
      <RankCard icon={<FlashBronze />} />
      <RankCard icon={<FlashBronze />} />
      <RankCard icon={<FlashBronze />} />
      <RankCard icon={<FlashBronze />} />
    </div>
  );
};

export default Rank;
