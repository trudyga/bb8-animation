import React from 'react';

// Robot parts
import BodyShadow from './BodyShadow';
import BodyWheel from './BodyWheel';
import Face from './Face';

class Robot extends React.PureComponent {
  state = {
    headTitlPosition: 'none'
  };

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
    setTimeout(this.titlHeadForward, 2000);
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
          <BodyShadow />
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
    );
  }
}

export default Robot;
