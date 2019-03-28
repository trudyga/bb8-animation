import React from 'react';
import PropTypes from 'prop-types';

import TimelineMax from 'gsap/TimelineMax';
import TweenMax from 'gsap/TweenMax';
import { Power3 } from 'gsap/EasePack';
import 'gsap/CSSPlugin';

import styles from './EndlessSlide.scss';

class EndlessSlide extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  slideAnimation = null;

  $wrapper = null;

  componentDidMount() {
    const tl = new TimelineMax({ repeat: 0 });

    setTimeout(() => {
      const slideTween = TweenMax.fromTo(
        this.$wrapper,
        4,
        { xPercent: 0 },
        {
          lazy: true,
          ease: Power3.easeIn,
          xPercent: 50,
          onComplete: () => {
            this.$wrapper.classList.add(styles.slide);
          }
        }
      );
      tl.add(slideTween);
    }, 1000);
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
