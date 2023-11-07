interface IFlashSilverProps {}

const FlashSilver: React.FunctionComponent<IFlashSilverProps> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="103"
      height="102"
      viewBox="0 0 103 102"
      fill="none"
    >
      <g filter="url(#filter0_ii_0_2961)">
        <rect
          x="0.100098"
          width="102"
          height="102"
          rx="51"
          fill="url(#paint0_linear_0_2961)"
        />
        <rect
          x="0.100098"
          width="102"
          height="102"
          rx="51"
          fill="url(#paint1_radial_0_2961)"
          fill-opacity="0.5"
        />
        <path
          d="M51.4662 28.1021L32.3652 54.4093V57.8497H50.1142L37.7227 74.9163L37.739 74.9388H50.7215L69.8346 48.6148V45.1744H52.0856L64.4772 28.1078L64.473 28.1021L51.4662 28.1021Z"
          fill="url(#paint2_linear_0_2961)"
        />
        <rect
          x="0.850098"
          y="0.75"
          width="100.5"
          height="100.5"
          rx="50.25"
          stroke="url(#paint3_linear_0_2961)"
          stroke-width="1.5"
        />
      </g>
      <defs>
        <filter
          id="filter0_ii_0_2961"
          x="0.100098"
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
            values="0 0 0 0 0.560784 0 0 0 0 0.701961 0 0 0 0 0.831373 0 0 0 0.16 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_0_2961"
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
            values="0 0 0 0 0.117396 0 0 0 0 0.162668 0 0 0 0 0.204167 0 0 0 0.56 0"
          />
          <feBlend
            mode="overlay"
            in2="effect1_innerShadow_0_2961"
            result="effect2_innerShadow_0_2961"
          />
        </filter>
        <linearGradient
          id="paint0_linear_0_2961"
          x1="51.1001"
          y1="0"
          x2="51.1001"
          y2="102"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.322917" stop-color="#3C6A95" stop-opacity="0.11" />
          <stop offset="0.911458" stop-color="#436C93" stop-opacity="0.37" />
        </linearGradient>
        <radialGradient
          id="paint1_radial_0_2961"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(40.6919 58.2857) rotate(59.4898) scale(33.8265 92.4349)"
        >
          <stop stop-color="#6DCBFF" stop-opacity="0.66" />
          <stop offset="1" stop-color="#BCE7FF" stop-opacity="0" />
          <stop offset="1" stop-color="#78CEFF" stop-opacity="0" />
        </radialGradient>
        <linearGradient
          id="paint2_linear_0_2961"
          x1="51.0999"
          y1="28.1021"
          x2="51.0999"
          y2="74.9388"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#A9CBEB" />
          <stop offset="1" stop-color="#5794CD" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_0_2961"
          x1="51.1001"
          y1="0"
          x2="51.1001"
          y2="102"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#8EB3D4" stop-opacity="0" />
          <stop offset="1" stop-color="#8EB3D4" stop-opacity="0.17" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default FlashSilver;
