import React, { useLayoutEffect, useRef, useState } from "react";
import gsap, { TweenMax } from "gsap";
import { Draggable } from "gsap/all";
gsap.registerPlugin(Draggable);

import Flash from "./assets/flash.png";

import "./App.scss";

const App = () => {
  const refDrag = useRef<HTMLDivElement>(null);
  const tongueRef = useRef<HTMLDivElement>(null);
  const refPercent = useRef<HTMLDivElement>(null);
  const refArrow = useRef<HTMLDivElement>(null);
  const tongueBackRef = useRef<HTMLDivElement>(null);
  const refDiscount = useRef<HTMLDivElement>(null);
  const refGetIt = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      Draggable.create(tongueRef.current, {
        type: "x",
        bounds: refDrag.current,
        inertia: true,
        onDragStart: () => {
          refPercent.current && refPercent.current.classList.add("hidden");
          refDiscount.current && refDiscount.current.classList.add("hidden");
          // refGetIt.current && refGetIt.current.classList.add("hidden");
          refArrow.current && refArrow.current.classList.add("show");
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

            if (progressCur >= 1) {
              console.log("complete");
            }
          }
        },

        onDragEnd: function () {
          if (refDrag.current && tongueRef.current) {
            const progressCur =
              this.x /
              (refDrag.current.offsetWidth - tongueRef.current.offsetWidth);

            if (progressCur >= 1) {
              console.log("complete");
            } else {
              gsap.to(tongueBackRef.current, {
                width: 40,
                duration: 0.4,
                ease: "power4.inOut",
              });

              gsap.to(tongueRef.current, {
                x: 0,
                duration: 0.4,
                ease: "power4.inOut",
              });

              console.log("end");

              refPercent.current &&
                refPercent.current.classList.remove("hidden");
              refDiscount.current &&
                refDiscount.current.classList.remove("hidden");
              // refGetIt.current && refGetIt.current.classList.remove("hidden");
              refArrow.current && refArrow.current.classList.remove("show");
            }
          }
        },
      });
    });

    return () => ctx.revert();
  });

  return (
    <div className="card">
      <div className="card_img">
        <img src={Flash} alt="" />
      </div>

      <div className="card_dragBox">
        <div className="card_drag" ref={refDrag}>
          <div className="card_tongueBack" ref={tongueBackRef} />
          <div className="card_tongue" ref={tongueRef}>
            <div className="card_percent" ref={refPercent}>
              %
            </div>
            <div className="card_arrow" ref={refArrow}>
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
          <div className="card_discount" ref={refDiscount}>
            Get discount up to 30%
          </div>
          <div className="card_getIt" ref={refGetIt}>
            Get it
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;