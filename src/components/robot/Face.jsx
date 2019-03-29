import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import TimelineMax from 'gsap/TimelineMax';

import Indicators from './Indicators';
import styles from './Face.scss';

class Face extends React.PureComponent {
  static propTypes = {
    titlPosition: PropTypes.oneOf(['none', 'front', 'back']),
    onLookBackward: PropTypes.func,
    onLookBackwardEnd: PropTypes.func
  };

  static defaultProps = {
    titlPosition: 'none',
    onLookBackward: () => {},
    onLookBackwardEnd: () => {}
  };

  state = {
    isIndicatorActive: false
  };

  $face = null;

  faceTransform = { x: -275, y: 21, maxL: { x: -575 }, midL: { x: -535 }, maxR: { x: -25 } };

  $eyes = null;

  eyesTransform = { x: 490, y: 66 };

  $head = null;

  // lens variables
  $primLensRedCircle = null;

  $primLensRedDot = null;

  $secLens = null;

  componentDidMount() {
    this.initFaceAnimation();
    this.initFaceDetailsAnimation();
  }

  initFaceAnimation = () => {
    const { onLookBackward, onLookBackwardEnd } = this.props;
    const faceTimeline = new TimelineMax({ repeat: -1 });

    const faceItems = [this.$face, this.$eyes];
    faceTimeline
      .delay(13)
      .to(faceItems, 0.5, {
        x: this.faceTransform.maxR.x,
        onStart: onLookBackward,
        delay: 3
      })
      .to(faceItems, 0.3, {
        x: this.faceTransform.x,
        onStart: onLookBackwardEnd,
        delay: 2
      })
      .to(faceItems, 0.7, {
        x: this.faceTransform.midL.x,
        delay: 3
      })
      .to(faceItems, 0.9, {
        x: this.faceTransform.maxL.x,
        delay: 1
      })
      .to(faceItems, 0.4, {
        x: this.faceTransform.midL.x,
        delay: 3
      })
      .to(faceItems, 0.6, {
        x: this.faceTransform.x,
        delay: 1.5
      });
  };

  initFaceDetailsAnimation = () => {
    const faceItems = [this.$face, this.$eyes];

    const faceDetailsTimeline = new TimelineMax({});
    faceDetailsTimeline
      .delay(1)
      .to(faceItems, 0.6, {
        x: this.faceTransform.x,
        delay: 3,
        onComplete: () => this.setState({ isIndicatorActive: true })
      })
      .to(this.$lensSwitch, 0.5, { x: 0 })
      .to(this.$primLens, 2, {
        scale: 2,
        x: 0,
        y: 0
      })
      .to(this.$lensSwitch, 0.5, {
        x: 11,
        onComplete: () => this.setState({ isIndicatorActive: false })
      })
      .to(this.$secLens, 0.4, {
        fill: 'rgb(132, 120, 69)'
      })
      .to(this.$secLens, 0.4, {
        fill: '#232323',
        onComplete: () => this.setState({ isIndicatorActive: true })
      })
      .to(this.$lensSwitch, 0.5, { x: 0 });
  };

  render() {
    const { isIndicatorActive } = this.state;
    const { titlPosition } = this.props;
    const eyesTransform = `translate(${this.eyesTransform.x}, ${this.eyesTransform.y})`;

    return (
      <g
        ref={el => {
          this.$head = el;
        }}
        className={classNames(styles.head, {
          [styles.head_tiltedFront]: titlPosition === 'front',
          [styles.head_tiltedBack]: titlPosition === 'back'
        })}
        id="bb8-head"
      >
        <g transform="translate(0.253000, 467.872000)">
          <mask id="h" fill="#fff">
            <use xlinkHref="#g" />
          </mask>
          <g fill="#000" fillRule="nonzero" mask="url(#h)">
            <g transform="translate(46.000000, -144.000000)">
              <ellipse cx="380.5" cy="180" opacity="0.108" rx="350.5" ry="119" />
              <ellipse cx="350.505" cy="119.476" opacity="0.426" rx="350.5" ry="119" />
            </g>
          </g>
        </g>
        <g transform="translate(140.000000, 0.000000)">
          <path
            fill="#EEE"
            fillRule="nonzero"
            d="M264,538.683 C508.5,538.683 505.808,497.038 505.808,497.038 C505.808,497.038 519.442,494.121 520.491,489.882 C525.401,470.062 528.001,449.354 528.001,428.047 C528,284.427 409.803,168 264,168 C118.197,168 0,284.427 0,428.047 C0,449.204 2.565,469.771 7.405,489.462 C9.169,496.639 26.741,490.108 29.095,497.038 C31.45,503.968 19.499,538.683 264,538.683 Z"
            opacity="0.01"
          />
          <g fillRule="nonzero" transform="translate(293.000000, 0.000000)">
            <polygon fill="#9B9B9B" points="21 50 28 50 28 367 21 367" />
            <polygon fill="gray" points="0 0 7 0 7 317 0 317" />
          </g>
          <g transform="translate(0.000000, 168.000000)">
            <path
              fill="#FFF"
              fillRule="nonzero"
              d="M264,370.683 C508.5,370.683 505.808,329.038 505.808,329.038 C505.808,329.038 519.442,326.121 520.491,321.882 C525.401,302.062 528.001,281.354 528.001,260.047 C528,116.427 409.803,0 264,0 C118.197,0 0,116.427 0,260.047 C0,281.204 2.565,301.771 7.405,321.462 C9.169,328.639 26.741,322.108 29.095,329.038 C31.45,335.968 19.499,370.683 264,370.683 Z"
            />
            <mask id="j" fill="#fff">
              <use xlinkHref="#i" />
            </mask>
            <g mask="url(#j)">
              <g
                ref={el => {
                  this.$face = el;
                }}
                id="bb8-face"
                transform="translate(-550.000000, 21.000000)"
              >
                <g transform="translate(30.000000, 216.000000)">
                  <g transform="translate(0.000000, 7.000000)">
                    <mask id="l" fill="#fff">
                      <use xlinkHref="#k" />
                    </mask>
                    <polygon
                      fill="#D38328"
                      fillRule="nonzero"
                      stroke="#000"
                      strokeOpacity="0.255"
                      strokeWidth="2"
                      points="0 0 1174 0 1174 66 0 66"
                      mask="url(#l)"
                    />
                  </g>
                  <Indicators isProcessing={isIndicatorActive} />
                  <polygon fill="#FFF" fillRule="nonzero" points="366 0 392 0 392 83 366 83" />
                  <polygon fill="#FFF" fillRule="nonzero" points="229 0 272 0 272 83 229 83" />
                  <polygon fill="#FFF" fillRule="nonzero" points="412 0 712 0 712 83 412 83" />
                  <polygon fill="#FFF" fillRule="nonzero" points="758 0 742 0 742 83 758 83" />
                  <polygon fill="#FFF" fillRule="nonzero" points="788 0 772 0 772 83 788 83" />
                  <polygon fill="#FFF" fillRule="nonzero" points="818 0 802 0 802 83 818 83" />
                  <polygon fill="#FFF" fillRule="nonzero" points="914 0 862 0 862 83 914 83" />
                </g>
                <g transform="translate(69.000000, 0.000000)">
                  <g transform="translate(61.000000, 0.000000)">
                    <mask id="v" fill="#fff">
                      <use xlinkHref="#u" />
                    </mask>
                    <polygon
                      fill="#7F8D93"
                      fillRule="nonzero"
                      stroke="#000"
                      strokeOpacity="0.255"
                      strokeWidth="2"
                      points="0 0 884 0 884 36 0 36"
                      mask="url(#v)"
                    />
                  </g>
                  <g transform="translate(0.000000, 51.000000)">
                    <mask id="x" fill="#fff">
                      <use xlinkHref="#w" />
                    </mask>
                    <polygon
                      fill="#D38328"
                      fillRule="nonzero"
                      stroke="#000"
                      strokeOpacity="0.255"
                      strokeWidth="2"
                      points="0 0 1060 0 1060 16 0 16"
                      mask="url(#x)"
                    />
                  </g>
                </g>
                <path
                  stroke="#BDBDBD"
                  strokeLinecap="square"
                  strokeWidth="5"
                  d="M1152.5,298.5 L237.5,298.5"
                />
                <path
                  stroke="#979797"
                  strokeLinecap="square"
                  strokeWidth="5"
                  d="M719.5,280.5 L472.5,280.5"
                />
                <polygon
                  fill="#979797"
                  fillRule="nonzero"
                  points="700 271 722 271 722 282 700 282"
                />
                <polygon
                  fill="url(#y)"
                  fillRule="nonzero"
                  points="27 306 1243 306 1243 409 27 409"
                />
                <g transform="translate(523.000000, 230.000000)">
                  <circle
                    ref={el => {
                      this.$lensSwitch = el;
                    }}
                    transform="translate(6.5 0)"
                    cx="11"
                    cy="18"
                    r="11"
                    fill="#878787"
                    fillRule="nonzero"
                  />
                  <path
                    stroke="#8F8F8F"
                    strokeWidth="3"
                    d="M18,36 C8.06,36 0,27.94 0,18 C0,8.06 8.06,0 18,0 C27.94,0 36,8.06 36,18 C36,27.94 27.94,36 18,36 Z"
                  />
                </g>
                <g transform="translate(0.000000, 48.000000)">
                  <circle
                    cx="545.72"
                    cy="78.573"
                    r="78.213"
                    fill="#EEE"
                    fillRule="nonzero"
                    stroke="#000"
                    strokeOpacity="0.046"
                    strokeWidth="1.76"
                  />
                  <g opacity="0.168" transform="translate(362.000000, 92.000000)">
                    <mask id="A" fill="#fff">
                      <use xlinkHref="#z" />
                    </mask>
                    <path
                      stroke="#563402"
                      strokeWidth="4"
                      d="M97.955,0 L9.995,0 C4.485,0 0,4.475 0,9.994 L0,57.006 C0,62.526 4.475,67 9.995,67 L154.955,67 C124.455,58.622 101.409,32.242 97.955,0 Z"
                      mask="url(#A)"
                    />
                  </g>
                  <g
                    opacity="0.168"
                    transform="translate(173.454000, 125.500000) scale(-1, 1) translate(-173.454000, -125.500000) translate(0.954000, 92.000000)"
                  >
                    <mask id="C" fill="#fff">
                      <use xlinkHref="#B" />
                    </mask>
                    <path
                      stroke="#563402"
                      strokeWidth="4"
                      d="M287.955,0 L9.995,0 C4.485,0 0,4.475 0,9.994 L0,57.006 C0,62.526 4.475,67 9.995,67 L344.955,67 L287.955,0 Z"
                      mask="url(#C)"
                    />
                  </g>
                  <path
                    stroke="#563402"
                    strokeWidth="2"
                    d="M259.868,38.692 L434.67,38.692 L434.67,51.274 L445.153,51.274 L445.153,38.1 L471.315,38.1 C471.315,38.1 461.57,49.456 461.57,75.708 L416.266,75.708 L416.266,63.28 L405.84,63.28 L405.84,75.05 L343.936,75.05 L343.936,61.68 L308.016,61.68 L308.016,72.4 L259.196,72.4 L259.868,38.692 Z"
                    opacity="0.168"
                  />
                  <path
                    stroke="#563402"
                    strokeWidth="2"
                    d="M240.644,38.692 L65.842,38.692 L65.842,51.274 L55.36,51.274 L55.36,38.1 L29.196,38.1 C29.196,38.1 38.941,49.456 38.941,75.708 L84.245,75.708 L84.245,63.28 L94.671,63.28 L94.671,75.05 L156.575,75.05 L156.575,61.68 L192.495,61.68 L192.495,72.4 L241.315,72.4 L240.643,38.692 L240.644,38.692 Z"
                    opacity="0.168"
                  />
                  <path
                    stroke="#563402"
                    strokeWidth="2"
                    d="M835.644,38.692 L660.842,38.692 L660.842,51.274 L650.36,51.274 L650.36,38.1 L624.197,38.1 C624.197,38.1 633.942,49.456 633.942,75.708 L679.246,75.708 L679.246,63.28 L689.672,63.28 L689.672,75.05 L751.576,75.05 L751.576,61.68 L787.496,61.68 L787.496,72.4 L836.316,72.4 L835.644,38.692 Z"
                    opacity="0.168"
                  />
                  <path
                    stroke="#563402"
                    strokeWidth="2"
                    d="M884.868,38.692 L1059.67,38.692 L1059.67,51.274 L1070.153,51.274 L1070.153,38.1 L1096.315,38.1 C1096.315,38.1 1086.57,49.456 1086.57,75.708 L1041.266,75.708 L1041.266,63.28 L1030.84,63.28 L1030.84,75.05 L968.936,75.05 L968.936,61.68 L933.016,61.68 L933.016,72.4 L884.196,72.4 L884.868,38.692 Z"
                    opacity="0.168"
                  />
                  <g opacity="0.168" transform="translate(610.000000, 93.000000)">
                    <mask id="E" fill="#fff">
                      <use xlinkHref="#D" />
                    </mask>
                    <path
                      stroke="#563402"
                      strokeWidth="4"
                      d="M23.244,0 L204.99,0 C210.518,0 215,4.482 215,10.003 L215,102.997 C215,108.521 210.522,113 204.99,113 L10.01,113 C4.482,113 0,108.518 0,102.997 L0,45.885 C12.396,33.933 20.856,17.925 23.244,2.84217094e-14 Z"
                      mask="url(#E)"
                    />
                  </g>
                  <g
                    opacity="0.168"
                    transform="translate(957.500000, 149.500000) scale(-1, 1) translate(-957.500000, -149.500000) translate(850.000000, 93.000000)"
                  >
                    <mask id="G" fill="#fff">
                      <use xlinkHref="#F" />
                    </mask>
                    <path
                      stroke="#563402"
                      strokeWidth="4"
                      d="M23.244,0 L204.99,0 C210.518,0 215,4.482 215,10.003 L215,102.997 C215,108.521 210.522,113 204.99,113 L10.01,113 C4.482,113 0,108.518 0,102.997 L0,45.885 C12.396,33.933 20.856,17.925 23.244,2.84217094e-14 Z"
                      mask="url(#G)"
                    />
                  </g>
                </g>
                <g transform="translate(485.000000, 66.000000)">
                  <circle
                    cx="60.72"
                    cy="74.573"
                    r="60"
                    fill="#2F2F2F"
                    fillRule="nonzero"
                    opacity="0.162"
                  />
                  <circle cx="60.72" cy="60.573" r="60" fill="#2F2F2F" fillRule="nonzero" />
                  <ellipse
                    cx="198.4"
                    cy="129.853"
                    stroke="#2F2F2F"
                    strokeWidth="8.8"
                    rx="42.18"
                    ry="40.628"
                  />
                  <ellipse
                    cx="198.4"
                    cy="139.853"
                    fill="#2E2E2E"
                    fillRule="nonzero"
                    opacity="0.147"
                    rx="28.16"
                    ry="28.209"
                  />
                  <ellipse
                    cx="198.4"
                    cy="129.853"
                    fill="#2E2E2E"
                    fillRule="nonzero"
                    rx="28.16"
                    ry="28.209"
                  />
                </g>
              </g>
            </g>
            <mask id="I" fill="#fff">
              <use xlinkHref="#H" />
            </mask>
            <path
              fill="#000"
              fillRule="nonzero"
              d="M264,370.683 C508.5,370.683 505.808,329.038 505.808,329.038 C505.808,329.038 519.442,326.121 520.491,321.882 C525.401,302.062 528.001,281.354 528.001,260.047 C528.001,232.347 523.604,205.657 515.459,180.617 C515.459,180.617 361.153,216.703 243.473,216.703 C132.33,216.703 18.823,163.433 18.823,163.433 C6.678,193.3 0,225.905 0,260.046 C0,281.203 2.565,301.77 7.405,321.461 C9.169,328.638 26.741,322.107 29.095,329.037 C31.45,335.967 19.499,370.682 264,370.682 L264,370.683 Z"
              mask="url(#I)"
              opacity="0.05"
            />
            <mask id="K" fill="#fff">
              <use xlinkHref="#J" />
            </mask>
            <path
              fill="#FFF"
              fillRule="nonzero"
              d="M229.805,-46.964 L582,-92 L582,327 L403.965,327 C403.965,327 423,211.963 403.965,137.725 C384.93,63.487 229.805,-46.965 229.805,-46.965 L229.805,-46.964 Z"
              mask="url(#K)"
              opacity="0.229"
            />
            <g fill="url(#L)" fillRule="nonzero" opacity="0.251">
              <path d="M264,370.683 C508.5,370.683 505.808,329.038 505.808,329.038 C505.808,329.038 519.442,326.121 520.491,321.882 C525.401,302.062 528.001,281.354 528.001,260.047 C528,116.427 409.803,0 264,0 C118.197,0 0,116.427 0,260.047 C0,281.204 2.565,301.771 7.405,321.462 C9.169,328.639 26.741,322.108 29.095,329.038 C31.45,335.968 19.499,370.683 264,370.683 Z" />
            </g>
            <g id="eyes-wrapper" mask="url(#j)">
              <g
                ref={el => {
                  this.$eyes = el;
                }}
                transform="translate(-550.000000, 21.000000)"
              >
                <g>
                  <g id="bb8-eyes" opacity="1" fillRule="nonzero" transform={eyesTransform}>
                    <g id="secondary-lens" transform="translate(167.000000, 103.000000)">
                      <ellipse cx="25.4" cy="25.853" fill="#484848" rx="25.38" ry="25.424" />
                      <ellipse cx="25.4" cy="25.853" fill="#333" rx="22.49" ry="22.529" />
                      <ellipse
                        ref={el => {
                          this.$secLens = el;
                        }}
                        cx="27.4"
                        cy="24.853"
                        fill="#232323"
                        rx="20.545"
                        ry="20.58"
                      />
                      <circle cx="19.5" cy="15.5" r="2.5" fill="#FFF" opacity="0.684" />
                      <circle cx="29.5" cy="12.5" r="2.5" fill="#FFF" opacity="0.684" />
                      <circle cx="40.5" cy="20.5" r="3.5" fill="#FFF" opacity="0.684" />
                    </g>
                    <circle cx="54.36" cy="54.36" r="54.36" fill="#1C1C1C" />
                    <g
                      ref={el => {
                        this.$primLens = el;
                      }}
                      transform="translate(26.000000, 26.000000)"
                    >
                      <circle cx="28.147" cy="28.147" r="28.147" fill="#411414" />
                      <circle
                        id="secondary-lens"
                        cx="28.517"
                        cy="28.517"
                        r="16.517"
                        fill="#FF0006"
                        opacity="0.319"
                      />
                      <circle cx="27.938" cy="27.938" r="8.938" fill="#FF0006" opacity="0.319" />
                      <circle cx="28.697" cy="28.697" r="2.697" fill="#EEE" opacity="0.78" />
                    </g>
                    <g transform="translate(18.000000, 9.000000)">
                      <path
                        fill="#F2F2F2"
                        d="M24.786,17.09 C38.121,13.515 50.006,10.166 48.866,5.907 C47.724,1.647 33.989,-1.908 20.654,1.665 C7.319,5.238 -0.566,14.587 0.574,18.845 C1.716,23.105 11.451,20.662 24.786,17.089 L24.786,17.09 Z"
                        opacity="0.26"
                      />
                      <circle cx="61.5" cy="23.5" r="5.5" fill="#FFF" opacity="0.582" />
                      <circle cx="62" cy="24" r="12" fill="#FFF" opacity="0.133" />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    );
  }
}

export default Face;
