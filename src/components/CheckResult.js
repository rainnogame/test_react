import React from 'react';
import PropTypes from "prop-types";


const getResultMessage = (result) => {
    return result == null
        ? 'Please, submit form'
        : result
            ? 'Congratulate, its triangle!'
            : 'Its not triangle, check sides!';
};


const CheckResult = (props) => {
    return (
        <div className="result">
            {getResultMessage(props.result)}
        </div>
    );
};


CheckResult.propTypes = {
    result: PropTypes.bool
};


export default CheckResult;