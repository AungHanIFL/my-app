import React from 'react';

const Demo = (DemoProps) => {
    const { getRef, x, y, angle, width, height } = DemoProps
    return(
        <div ref={DemoProps.getRef}
            style={{
                position: 'relative',
                left: x,
                top: y,
                width: width,
                height: height,
                transform: `rotate(${angle}deg)`,
                border: "1px solid black",
                boxSizing: "border-box"
            }}
        >
            Reactable is a react hight-order component for interactjs.
            <ul>
              <li>left: {x}</li>
              <li>top: {y}</li>
              <li>width: {width}</li>
              <li>height: {height}</li>
            </ul>
        </div>
    );
};

Demo.defaultProps = {
    x: 0,
    y: 0,
    width: 200,
    height: 200,
    angle: 0
};

export default Demo;