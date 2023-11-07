interface IFlashBronzeProps {}

const FlashBronze: React.FunctionComponent<IFlashBronzeProps> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="103"
      height="102"
      viewBox="0 0 103 102"
      fill="none"
    >
      <g filter="url(#filter0_ii_201_1034)">
        <rect
          x="0.700195"
          width="102"
          height="102"
          rx="51"
          fill="url(#paint0_linear_201_1034)"
        />
        <rect
          x="0.700195"
          width="102"
          height="102"
          rx="51"
          fill="url(#paint1_radial_201_1034)"
          fill-opacity="0.5"
          // style="mix-blend-mode:overlay"
        />
        <path
          d="M52.0667 28.102L32.9658 54.4093V57.8497H50.7148L38.3232 74.9163L38.3396 74.9388H51.3221L70.4352 48.6148V45.1744H52.6862L65.0778 28.1078L65.0736 28.102L52.0667 28.102Z"
          fill="url(#paint2_linear_201_1034)"
        />
        <rect
          x="1.4502"
          y="0.75"
          width="100.5"
          height="100.5"
          rx="50.25"
          stroke="url(#paint3_linear_201_1034)"
          stroke-width="1.5"
        />
      </g>
      <defs>
        <filter
          id="filter0_ii_201_1034"
          x="0.700195"
          y="-8"
          width="102"
          height="114"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.831373 0 0 0 0 0.723137 0 0 0 0 0.560784 0 0 0 0.16 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_201_1034"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-8" />
          <feGaussianBlur stdDeviation="4.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.204167 0 0 0 0 0.159046 0 0 0 0 0.117396 0 0 0 0.56 0"
          />
          <feBlend
            mode="overlay"
            in2="effect1_innerShadow_201_1034"
            result="effect2_innerShadow_201_1034"
          />
        </filter>
        <linearGradient
          id="paint0_linear_201_1034"
          x1="51.7002"
          y1="0"
          x2="51.7002"
          y2="102"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.322917" stop-color="#8D8073" stop-opacity="0.11" />
          <stop offset="0.911458" stop-color="#8D8073" stop-opacity="0.37" />
        </linearGradient>
        <radialGradient
          id="paint1_radial_201_1034"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(41.292 58.2857) rotate(59.4898) scale(33.8265 92.4349)"
        >
          <stop stop-color="#FFDBC0" stop-opacity="0.66" />
          <stop offset="1" stop-color="#FFCCBC" stop-opacity="0" />
        </radialGradient>
        <linearGradient
          id="paint2_linear_201_1034"
          x1="51.7005"
          y1="28.102"
          x2="51.7005"
          y2="74.9388"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#DBB172" />
          <stop offset="1" stop-color="#D69B7B" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_201_1034"
          x1="51.7002"
          y1="0"
          x2="51.7002"
          y2="102"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#D4B08E" stop-opacity="0" />
          <stop offset="1" stop-color="#D4B08E" stop-opacity="0.17" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default FlashBronze;
