import React from "react";
import PropTypes from 'prop-types';


function getSidesJsx(sidesCount, sides, setSide) {
    let sidesInputs = [];
    for (let i = 0; i < sidesCount; i++) {
        sidesInputs.push(<input type="number" key={i} onChange={setSide(i)} value={sides[i]}/>)
    }
    return sidesInputs;
}

const TriangleForm = (props) => {
    // triangle sides count
    const sidesCount = 3;
    return (
        <div className="triangle-inputs">
            {getSidesJsx(sidesCount, props.sides, props.setSide)}
        </div>
    );
};

TriangleForm.propTypes = {
    setSide: PropTypes.func.isRequired,
    sides  : PropTypes.arrayOf(PropTypes.number).isRequired
};


export default TriangleForm;