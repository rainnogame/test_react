import React from "react";
import PropTypes from 'prop-types';


function getSidesJsx(sidesCount, sides, setSide) {
    let sidesInputs = [];
    for (let i = 0; i < sidesCount; i++) {
        // if not - set default '0'
        let side = sides[i] || 0;
        sidesInputs.push(<input type="number" key={i} onChange={setSide(i)} value={side}/>)
    }
    return sidesInputs;
}

const TriangleForm = (props) => {
    // triangle sides count
    const sidesCount = 3;
    return (
        <form onSubmit={props.submitForm}>
            {getSidesJsx(sidesCount, props.sides, props.setSide)}
            <input type="submit" value="Submit"/>
        </form>
    );
};

TriangleForm.propTypes = {
    submitForm: PropTypes.func.isRequired,
    setSide   : PropTypes.func.isRequired,
    sides     : PropTypes.arrayOf(PropTypes.number)
};


export default TriangleForm;