import clsx from "clsx";
import styles from "./index.module.scss";

import { MouseEventHandler, useLayoutEffect, useRef } from "react";

import gsap from "gsap";
import { Draggable } from "gsap/all";
gsap.registerPlugin(Draggable);

import Flash_dark from "../../assets/flash-dark.png";
import Flash_light from "../../assets/flash-light.png";

interface ICardGrabProps {
  theme?: "dark" | "light";
}

const CardGrab: React.FunctionComponent<ICardGrabProps> = ({
  theme = "dark",
}) => {
  const refDrag = useRef<HTMLDivElement>(null);
  const tongueRef = useRef<HTMLDivElement>(null);
  const refPercent = useRef<HTMLDivElement>(null);
  const refArrow = useRef<HTMLDivElement>(null);
  const tongueBackRef = useRef<HTMLDivElement>(null);
  const refDiscount = useRef<HTMLDivElement>(null);
  const refGetIt = useRef<HTMLButtonElement>(null);
  const refImgFront = useRef<HTMLDivElement>(null);
  const refImgBack = useRef<HTMLDivElement>(null);
  const refGetItAnimBox = useRef<HTMLDivElement>(null);
  const refGetItAnim = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const duration = 2;
      const deg = 0;
      const tl1 = gsap.timeline({
        defaults: {
          delay: 0,
          duration: duration,
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true,
          yoyoEase: "power1.inOut",
        },
      });

      const tl2 = gsap.timeline({
        defaults: {
          delay: 0,
          duration: duration,
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true,
          yoyoEase: "power1.inOut",
        },
      });

      tl1.fromTo(
        refImgFront.current,
        {
          yPercent: 0,
          rotate: 0,
        },
        {
          yPercent: -5,
          rotate: -deg,
        }
      );

      tl2.fromTo(
        refImgBack.current,
        {
          yPercent: 0,
          rotate: 0,
        },
        {
          yPercent: 10,
          rotate: -deg,
        }
      );

      const completeVal = 0.5;

      Draggable.create(tongueRef.current, {
        type: "x",
        bounds: refDrag.current,
        inertia: true,
        onDragStart: () => {
          refDiscount.current &&
            refDiscount.current.classList.add(styles.active);
          refArrow.current && refArrow.current.classList.add(styles.show);

          gsap.to(refDiscount.current, {
            opacity: 0,
            duration: 0.2,
          });
        },

        onDrag: function () {
          if (refDrag.current && tongueRef.current) {
            const progressCur =
              this.x /
              (refDrag.current.offsetWidth - tongueRef.current.offsetWidth);

            console.log(this);

            gsap.set(tongueBackRef.current, {
              width: `${this.x + 40}px`,
            });

            gsap.set(refDiscount.current, {
              opacity: progressCur,
            });

            if (progressCur >= completeVal) {
              console.log("complete");
            }
          }
        },

        onDragEnd: function () {
          if (refDrag.current && tongueRef.current) {
            const progressCur =
              this.x /
              (refDrag.current.offsetWidth - tongueRef.current.offsetWidth);

            gsap.to(refDiscount.current, {
              opacity: 1,
              duration: 0.2,
            });

            if (progressCur >= completeVal) {
              console.log("complete");

              gsap.to(tongueRef.current, {
                x: refDrag.current.offsetWidth - tongueRef.current.offsetWidth,
                zIndex: 100,
                duration: 0.4,
                ease: "power4.inOut",
              });

              gsap.to(tongueBackRef.current, {
                width: `${refDrag.current.offsetWidth}px`,
                duration: 0.4,
                ease: "power4.inOut",
              });
            } else {
              gsap.to(tongueBackRef.current, {
                width: 40,
                duration: 0.4,
                ease: "power4.inOut",
              });

              gsap.to(refDiscount.current, {
                opacity: 0,
                duration: 0.2,
              });

              gsap.to(tongueRef.current, {
                x: 0,
                zIndex: 100,
                duration: 0.4,
                ease: "power4.inOut",
                onComplete: () => {
                  refDiscount.current &&
                    refDiscount.current.classList.remove(styles.active);
                  refDiscount.current &&
                    refDiscount.current.classList.remove(styles.active);

                  gsap.to(refDiscount.current, {
                    opacity: 1,
                    duration: 0.2,
                  });
                },
              });

              console.log("end");

              refArrow.current &&
                refArrow.current.classList.remove(styles.show);
            }
          }
        },
      });
    });

    return () => ctx.revert();
  });

  const HandleButton: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (refGetIt.current) {
      console.log(e);
      const { x: buttonX, y: buttonY } =
        refGetIt.current.getBoundingClientRect();
      const { clientX: mouseX, clientY: mouseY } = e;

      console.log(buttonX, buttonY);
      console.log(mouseX, mouseY);

      const animX = mouseX - buttonX;
      const animY = mouseY - buttonY;

      console.log(animX, animY);

      gsap.set(refGetItAnimBox.current, {
        x: animX,
        y: animY,
      });

      gsap.set(refGetItAnim.current, {
        opacity: 1,
      });

      gsap.fromTo(
        refGetItAnim.current,
        {
          width: 0,
          height: 0,
          scale: 0,
        },
        {
          width: refGetIt.current.offsetWidth * 3,
          height: refGetIt.current.offsetWidth * 3,
          scale: 1,
          duration: 0.5,
          ease: "power2.inOut",
          onComplete: () => {
            gsap.set(refGetItAnim.current, {
              width: 0,
              height: 0,
              opacity: 0,
            });
          },
        }
      );
    }
  };

  return (
    <div className={clsx(styles.CardGrab, styles[theme])}>
      <div className={clsx(styles.CardGrab_img)}>
        <div className={clsx(styles.CardGrab_img_from)} ref={refImgFront}>
          {theme == "dark" ? (
            <img src={Flash_dark} alt="" />
          ) : (
            <img src={Flash_light} alt="" />
          )}
        </div>

        <div className={clsx(styles.CardGrab_img_back)} ref={refImgBack}>
          {theme == "dark" ? (
            <img src={Flash_dark} alt="" />
          ) : (
            <img src={Flash_light} alt="" />
          )}
        </div>
      </div>

      <div className={clsx(styles.CardGrab_drag)}>
        <div className={clsx(styles.CardGrab_dragBox)} ref={refDrag}>
          <div
            className={clsx(styles.CardGrab_tongueBack)}
            ref={tongueBackRef}
          />
          <div className={clsx(styles.CardGrab_percent)} ref={refPercent}>
            %
          </div>
          <div className={clsx(styles.CardGrab_tongue)} ref={tongueRef}>
            <div className={clsx(styles.CardGrab_arrow)} ref={refArrow}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="16"
                viewBox="0 0 22 16"
                fill="none"
              >
                <path
                  d="M21.7066 8.70711C22.0972 8.31658 22.0972 7.68342 21.7066 7.29289L15.3427 0.928932C14.9522 0.538408 14.319 0.538408 13.9285 0.928932C13.5379 1.31946 13.5379 1.95262 13.9285 2.34315L19.5853 8L13.9285 13.6569C13.5379 14.0474 13.5379 14.6805 13.9285 15.0711C14.319 15.4616 14.9522 15.4616 15.3427 15.0711L21.7066 8.70711ZM0.943359 9H20.9995V7H0.943359V9Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
          <div className={clsx(styles.CardGrab_discount)} ref={refDiscount}>
            Get discount up to 30%
          </div>
          <button
            className={clsx(styles.CardGrab_getIt)}
            ref={refGetIt}
            onClick={HandleButton}
          >
            <div
              className={clsx(styles.CardGrab_getIt_animBox)}
              ref={refGetItAnimBox}
            >
              <div
                className={clsx(styles.CardGrab_getIt_anim)}
                ref={refGetItAnim}
              />
            </div>
            Get it
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardGrab;
