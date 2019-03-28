import React from 'react';
import classNames from 'classnames';

import TimelineMax from 'gsap/TimelineMax';
import { Power0 } from 'gsap/EasePack';
import Cloud from './Cloud';

import styles from './Sky.scss';

class Sky extends React.PureComponent {
  $cloud1 = null;

  componentDidMount() {
    const tl = new TimelineMax();

    tl.fromTo(
      this.$cloud1,
      70,
      {
        xPercent: 120
      },
      {
        xPercent: -120,
        ease: Power0.easeNone,
        repeat: -1
      }
    );
  }

  render() {
    console.log('styles', styles);

    return (
      <React.Fragment>
        <g className={styles.cloud}>
          <Cloud />
        </g>
        <g className={classNames(styles.cloud, styles.cloud_shifted)}>
          <Cloud />
        </g>
        <g
          ref={el => {
            this.$cloud1 = el;
          }}
          style={{
            transform: 'translateX(150%)'
          }}
        >
          <Cloud color="#e2c49f" />
          <g className={classNames(styles.cloud, styles.cloud_composed)}>
            <Cloud color="#e2c49f" />
          </g>
        </g>
      </React.Fragment>
    );
  }
}
export default Sky;
