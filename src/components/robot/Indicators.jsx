import React from 'react';
import PropTypes from 'prop-types';

import TweenLite from 'gsap/TweenLite';

class Indicators extends React.PureComponent {
  static propTypes = {
    isProcessing: PropTypes.bool
  };

  static defaultProps = {
    isProcessing: false
  };

  $indicator1 = null;

  $indicator2 = null;

  componentDidMount() {
    const { isProcessing } = this.props;

    if (isProcessing) {
      this.startIdicatorUpdateCycle();
    }
  }

  componentDidUpdate(prevProps) {
    const { isProcessing } = this.props;

    if (isProcessing !== prevProps.isProcessing) {
      if (!isProcessing) {
        clearInterval(this.indicatorUpdateInterval);
      } else {
        this.startIndicatorUpdateCycle();
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.indicatorUpdateInterval);
  }

  startIndicatorUpdateCycle() {
    clearInterval(this.indicatorUpdateInterval);

    const animTime = 0.1;

    this.indicatorUpdateInterval = setInterval(() => {
      const opacity1 = Math.random() < 0.5 ? 1 : 0;
      const opacity2 = Math.random() < 0.5 ? 1 : 0;
      const delay = Math.random() * 0.1 + 0.2;

      TweenLite.to(this.$indicator1, animTime, { opacity: opacity1, delay });
      TweenLite.to(this.$indicator2, animTime, { opacity: opacity2, delay });
    }, animTime * 1000);
  }

  render() {
    return (
      <React.Fragment>
        <g transform="translate(312.000000, 18.000000)">
          <mask id="n" fill="#fff">
            <use xlinkHref="#m" />
          </mask>
          <rect
            width="42"
            height="12"
            fill="#3291B1"
            fillRule="nonzero"
            stroke="#000"
            strokeOpacity="0.204"
            strokeWidth="2"
            mask="url(#n)"
            rx="6"
          />
        </g>
        <g transform="translate(312.000000, 36.000000)">
          <mask id="p" fill="#fff">
            <use xlinkHref="#o" />
          </mask>
          <rect
            width="42"
            height="12"
            fill="#3291B1"
            fillRule="nonzero"
            stroke="#000"
            strokeOpacity="0.204"
            strokeWidth="2"
            mask="url(#p)"
            rx="6"
          />
        </g>
        <g
          ref={el => {
            this.$indicator1 = el;
          }}
          transform="translate(312.000000, 18.000000)"
        >
          <mask id="r" fill="#fff">
            <use xlinkHref="#q" />
          </mask>
          <rect
            width="42"
            height="12"
            fill="#70DDFF"
            fillRule="nonzero"
            stroke="#000"
            strokeOpacity="0.204"
            strokeWidth="2"
            mask="url(#r)"
            rx="6"
          />
        </g>
        <g
          ref={el => {
            this.$indicator2 = el;
          }}
          transform="translate(312.000000, 36.000000)"
        >
          <mask id="t" fill="#fff">
            <use xlinkHref="#s" />
          </mask>
          <rect
            width="42"
            height="12"
            fill="#70DDFF"
            fillRule="nonzero"
            stroke="#000"
            strokeOpacity="0.204"
            strokeWidth="2"
            mask="url(#t)"
            rx="6"
          />
        </g>
      </React.Fragment>
    );
  }
}

export default Indicators;
