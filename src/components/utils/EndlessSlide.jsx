import React from 'react';
import PropTypes from 'prop-types';

import TimelineMax from 'gsap/TimelineMax';
import TweenMax from 'gsap/TweenMax';
import { Power3, Power0 } from 'gsap/EasePack';
import 'gsap/CSSPlugin';

class EndlessSlide extends React.PureComponent {
  static propTypes = {
    slideSpeedMultiplier: PropTypes.number,
    children: PropTypes.node.isRequired
  };

  static defaultProps = {
    slideSpeedMultiplier: 1
  };

  slideAnimation = null;

  $wrapper = null;

  componentDidMount() {
    const { slideSpeedMultiplier } = this.props;
    if (slideSpeedMultiplier > 1) {
      console.error(new Error('Slide animation acceleration is not supported')); // eslint-disable-line
    }
    const tl = new TimelineMax({ repeat: 0 });
    const restPercent = 50 * (1 - slideSpeedMultiplier);

    const slideTween = TweenMax.fromTo(
      this.$wrapper,
      4,
      { xPercent: 0 },
      {
        lazy: true,
        ease: Power3.easeIn,
        xPercent: 50 * slideSpeedMultiplier,
        onComplete: () => {
          if (restPercent <= 0) {
            tl.fromTo(
              this.$wrapper,
              1 / slideSpeedMultiplier,
              {
                xPercent: 0
              },
              {
                xPercent: 50,
                ease: Power0.easeNone,
                repeat: -1
              }
            );
          } else {
            tl.add(
              TweenMax.to(this.$wrapper, 1 / slideSpeedMultiplier / (restPercent / 50), {
                xPercent: 50,
                ease: Power0.easeNone,
                onComplete: () => {
                  tl.fromTo(
                    this.$wrapper,
                    1 / slideSpeedMultiplier,
                    {
                      xPercent: 0
                    },
                    {
                      xPercent: 50,
                      ease: Power0.easeNone,
                      repeat: -1
                    }
                  );
                }
              })
            );
          }
        }
      }
    );
    tl.delay(10);
    tl.add(slideTween);
    this.slideAnimation = tl;
  }

  render() {
    const { children } = this.props;
    return (
      <g
        ref={el => {
          this.$wrapper = el;
        }}
      >
        {children}
      </g>
    );
  }
}

export default EndlessSlide;
