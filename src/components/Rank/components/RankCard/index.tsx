import clsx from "clsx";
import styles from "./index.module.scss";
import { ReactNode, useLayoutEffect, useRef } from "react";
import Blub from "../../../../assets/blub";
import gsap from "gsap";

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
  const refBlob = useRef<HTMLDivElement>(null);
  const refBlobBack = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl1 = gsap.timeline({
        defaults: {
          delay: 0,
          duration: 1.6,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true,
        },
      });

      let tl2 = gsap.timeline({
        defaults: {
          delay: 1,
          duration: 3,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true,
        },
      });

      tl1.fromTo(
        refBlob.current,
        {
          scale: 1,
          opacity: 0.5,
        },
        {
          scale: theme == "light" ? 1.2 : 1.1,
          opacity: theme == "light" ? 0.4 : 0.7,
        },
        "<10%"
      );

      tl2.fromTo(
        refBlobBack.current,
        {
          scale: 0.6,
          opacity: 0,
        },
        { scale: "light" ? 1.2 : 1.1, opacity: theme == "light" ? 0.5 : 0.4 }
      );
      // .fromTo(
      //   refBlob.current,
      //   {
      //     scale: 0.9,
      //   },
      //   { scale: 1 }
      // )
      // .fromTo(
      //   refBlobBack.current,
      //   {
      //     scale: 0.9,
      //   },
      //   { scale: 1 }
      // );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      className={clsx(styles.RankCard, active && styles.active, styles[theme])}
    >
      <div className={clsx(styles.RankCard_blubBox)}>
        <div className={clsx(styles.RankCard_blub)} ref={refBlob}>
          <Blub />
        </div>
        <div
          className={clsx(styles.RankCard_blub, styles.back)}
          ref={refBlobBack}
        >
          <Blub />
        </div>
      </div>
      <div
        className={clsx(
          styles.RankCard_inner,
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
    </div>
  );
};

export default RankCard;
