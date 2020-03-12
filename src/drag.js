import * as React from 'react';
import reactable from "reactablejs";
import Demo from "./Demo";

const Reactable = reactable(Demo)

const BasicDemo = () => {
    const [coordinate, setCoordinate] = React.useState({ x: 0, y: 0 });
    return(
        <Reactable
            draggable
            onDragMove={event => {
                const { dx, dy } = event
                setCoordinate(prev => ({
                    x: prev.x + dx,
                    y: prev.y + dy
                }))
                //applicationCache("DragMove")(event)
            }}
            x={coordinate.x}
            y={coordinate.y}
        />
    );
};

// const DraggableOptionsDemo = () => {
//     const [coordinate, setCoordinate] = React.useState({x: 0, y: 0})
//     return(
//         <Reactable
//             draggable={{
//                 onstart: applicationCache("DragStart"),
//                 onmove: (event) => setCoordinate(prev => ({
//                     x: prev.x + event.dx,
//                     y: prev.y + event.dy
//                 })),
//                 onend: action("DragEnd"),
//             }}
//             {...coordinate}
//         />
//     );
// };

export default BasicDemo;