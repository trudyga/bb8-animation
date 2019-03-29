import React from 'react';

import TimelineMax from 'gsap/TimelineMax';
import TimelineLite from 'gsap/TimelineLite';

// Robot parts
import BodyShadow from './BodyShadow';
import BodyWheel from './BodyWheel';
import Face from './Face';

class Robot extends React.PureComponent {
  $robot = null;

  $robotShadow = null;

  state = {
    headTitlPosition: 'none'
  };

  componentDidMount() {
    const jumpTl = new TimelineLite();
    const shadowTl = new TimelineLite();

    jumpTl
      .fromTo(
        this.$robot,
        0.5,
        { y: 0 },
        {
          y: -10
        }
      )
      .to(this.$robot, 0.5, {
        y: 0
      });
    shadowTl
      .fromTo(
        this.$robotShadow,
        0.5,
        { x: 0, scale: 1 },
        {
          x: 25,
          scale: 1
        }
      )
      .to(this.$robotShadow, 0.5, {
        x: 0,
        scale: 1
      });

    const tl = new TimelineMax({ repeat: -1 });
    tl.delay(14).add([jumpTl, shadowTl]);
  }

  componentWillUnmount() {
    clearTimeout(this.titlTimeout);
  }

  titlHeadForward = () => {
    console.log('font');
    this.setState({
      headTitlPosition: 'front'
    });
  };

  titlHeadBackward = () => {
    console.log('back');
    this.setState({
      headTitlPosition: 'back'
    });
  };

  innertionHeadTitl = () => {
    this.titlHeadBackward();
    // titl head forward after 2 seconds
    clearTimeout(this.titlTimeout);
    this.titlTimeout = setTimeout(this.titlHeadForward, 2000);
  };

  render() {
    const { headTitlPosition } = this.state;
    return (
      <g>
        <g
          id="bb8"
          // style={{
          //   transform: 'translate(90%, 40%) scale(0.1, 0.1)',
          //   transition: 'transform 1s ease-in-out'
          // }}
          transform="translate(1273.000000, 1172.000000)"
        >
          <g
            ref={el => {
              this.$robotShadow = el;
            }}
          >
            <BodyShadow />
          </g>
          <g
            ref={el => {
              this.$robot = el;
            }}
          >
            <BodyWheel
              onMovementStart={this.innertionHeadTitl}
              onSpeedUpComplete={this.titlHeadForward}
            />
            <Face
              titlPosition={headTitlPosition}
              onLookBackward={this.titlHeadBackward}
              onLookBackwardEnd={this.titlHeadForward}
            />
          </g>
        </g>
      </g>
    );
  }
}

export default Robot;
