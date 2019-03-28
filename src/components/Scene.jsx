import React from 'react';

// Background parts
import Cloud from './background/Cloud';
import Mountains from './background/Mountains';
import Stones from './background/Stones';

// Robot parts
import BodyShadow from './robot/BodyShadow';
import BodyWheel from './robot/BodyWheel';
import Face from './robot/Face';

import EndlessSlide from './utils/EndlessSlide';

const Scene = () => (
  <svg width="3447px" viewBox="0 0 3447 3152">
    <defs>
      <polygon id="a" points="0 0 3447 0 3447 1094 0 1094" />
      <circle id="b" cx="412" cy="412" r="412" />
      <circle id="d" cx="412" cy="412" r="412" />
      <linearGradient id="f" x1="48.662%" x2="48.662%" y1="36.666%" y2="87.375%">
        <stop offset="0%" stopOpacity="0" />
        <stop offset="100%" />
      </linearGradient>
      <circle id="g" cx="412.747" cy="412.128" r="412" />
      <path
        id="i"
        d="M264,370.683 C508.5,370.683 505.808,329.038 505.808,329.038 C505.808,329.038 519.442,326.121 520.491,321.882 C525.401,302.062 528.001,281.354 528.001,260.047 C528,116.427 409.803,0 264,0 C118.197,0 0,116.427 0,260.047 C0,281.204 2.565,301.771 7.405,321.462 C9.169,328.639 26.741,322.108 29.095,329.038 C31.45,335.968 19.499,370.683 264,370.683 Z"
      />
      <polygon id="k" points="0 0 1174 0 1174 66 0 66" />
      <rect id="m" width="42" height="12" rx="6" />
      <rect id="o" width="42" height="12" rx="6" />
      <rect id="q" width="42" height="12" rx="6" />
      <rect id="s" width="42" height="12" rx="6" />
      <polygon id="u" points="0 0 884 0 884 36 0 36" />
      <polygon id="w" points="0 0 1060 0 1060 16 0 16" />
      <linearGradient id="y" x1="50%" x2="50%" y1="0%" y2="61.269%">
        <stop offset="0%" stopColor="#7F7268" />
        <stop offset="100%" stopColor="#35240B" />
      </linearGradient>
      <path
        id="z"
        d="M97.955,0 L9.995,0 C4.485,0 0,4.475 0,9.994 L0,57.006 C0,62.526 4.475,67 9.995,67 L154.955,67 C124.455,58.622 101.409,32.242 97.955,0 Z"
      />
      <path
        id="B"
        d="M287.955,0 L9.995,0 C4.485,0 0,4.475 0,9.994 L0,57.006 C0,62.526 4.475,67 9.995,67 L344.955,67 L287.955,0 Z"
      />
      <path
        id="D"
        d="M23.244,0 L204.99,0 C210.518,0 215,4.482 215,10.003 L215,102.997 C215,108.521 210.522,113 204.99,113 L10.01,113 C4.482,113 0,108.518 0,102.997 L0,45.885 C12.396,33.933 20.856,17.925 23.244,2.84217094e-14 Z"
      />
      <path
        id="F"
        d="M23.244,0 L204.99,0 C210.518,0 215,4.482 215,10.003 L215,102.997 C215,108.521 210.522,113 204.99,113 L10.01,113 C4.482,113 0,108.518 0,102.997 L0,45.885 C12.396,33.933 20.856,17.925 23.244,2.84217094e-14 Z"
      />
      <path
        id="H"
        d="M264,370.683 C508.5,370.683 505.808,329.038 505.808,329.038 C505.808,329.038 519.442,326.121 520.491,321.882 C525.401,302.062 528.001,281.354 528.001,260.047 C528,116.427 409.803,0 264,0 C118.197,0 0,116.427 0,260.047 C0,281.204 2.565,301.771 7.405,321.462 C9.169,328.639 26.741,322.108 29.095,329.038 C31.45,335.968 19.499,370.683 264,370.683 Z"
      />
      <path
        id="J"
        d="M264,370.683 C508.5,370.683 505.808,329.038 505.808,329.038 C505.808,329.038 519.442,326.121 520.491,321.882 C525.401,302.062 528.001,281.354 528.001,260.047 C528,116.427 409.803,0 264,0 C118.197,0 0,116.427 0,260.047 C0,281.204 2.565,301.771 7.405,321.462 C9.169,328.639 26.741,322.108 29.095,329.038 C31.45,335.968 19.499,370.683 264,370.683 Z"
      />
      <linearGradient id="L" x1="50%" x2="50%" y1="13.3%" y2="100%">
        <stop offset="0%" stopOpacity="0" />
        <stop offset="100%" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#DDBE9A" xlinkHref="#a" />
      <Cloud />
      <g
        style={{
          transform: 'translate(1300px, 250px) scale(0.7, 0.5) skew(-67deg, -9deg) rotateY(2deg)'
        }}
      >
        <Cloud />
      </g>
      <Mountains />
      <EndlessSlide>
        <Stones />
        <g style={{ transform: 'translateX(-100%)' }}>
          <Stones />
        </g>
      </EndlessSlide>

      <g
        id="bb8"
        // style={{
        //   transform: 'translate(90%, 40%) scale(0.1, 0.1)',
        //   transition: 'transform 1s ease-in-out'
        // }}
        transform="translate(1273.000000, 1172.000000)"
      >
        <BodyShadow />
        <BodyWheel />
        <Face />
      </g>
    </g>
  </svg>
);

export default Scene;
