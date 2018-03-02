import React from 'react';
import PropTypes from "prop-types";


const getResultMessage = (result) => {
    return result ? 'Congratulate! Its triangle!' : 'Its not triangle! Please, check sides!';
};


const CheckResult = (props) => {
    return (
        <div className="result">
            {getResultMessage(props.result)}
        </div>
    );
};


CheckResult.propTypes = {
    result: PropTypes.bool.isRequired
};


export default CheckResult;