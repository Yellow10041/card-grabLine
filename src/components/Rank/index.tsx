import clsx from "clsx";
import styles from "./index.module.scss";

import RankCard from "./components/RankCard";

import FlashBronze from "../../assets/icons/rank/flash-bronze";
import FlashSilver from "../../assets/icons/rank/flash-silver";
import FlashGold from "../../assets/icons/rank/flash-gold";
import FlashDiamond from "../../assets/icons/rank/flash-diamond";
import FlashEmerald from "../../assets/icons/rank/flash-emerald";

interface IRankProps {
  theme?: "dark" | "light";
}

const dataRank = [
  {
    rank: "bronze",
    icon: <FlashBronze />,
    info: [
      {
        title: "7 day deposit req.",
        value: "0%",
      },
      {
        title: "Discount",
        value: "0 USD",
      },
    ],
  },
  {
    rank: "silver",
    icon: <FlashSilver />,
    info: [
      {
        title: "7 day deposit req.",
        value: "5%",
      },
      {
        title: "Discount",
        value: "700 USD",
      },
    ],
  },
  {
    rank: "gold",
    icon: <FlashGold />,
    info: [
      {
        title: "7 day deposit req.",
        value: "10%",
      },
      {
        title: "Discount",
        value: "1 323 USD",
      },
    ],
  },
  {
    active: true,
    rank: "diamond",
    icon: <FlashDiamond />,
    info: [
      {
        title: "7 day deposit req.",
        value: "15%",
      },
      {
        title: "Discount",
        value: "2 489 USD",
      },
    ],
  },
  {
    rank: "emerald",
    icon: <FlashEmerald />,
    info: [
      {
        title: "7 day deposit req.",
        value: "20%",
      },
      {
        title: "Discount",
        value: "5 445 USD",
      },
    ],
  },
];

const Rank: React.FunctionComponent<IRankProps> = ({ theme = "light" }) => {
  return (
    <div className={clsx(styles.Rank, styles[theme])}>
      {dataRank.map((e, i) => (
        <RankCard theme={theme} {...e} key={i} />
      ))}
    </div>
  );
};

export default Rank;
