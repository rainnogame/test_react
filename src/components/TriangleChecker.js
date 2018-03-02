import React from "react";
import TriangleForm from "./TriangleForm";
import CheckResult from "./CheckResult";
import PropTypes from "prop-types";

class TriangleChecker extends React.Component {
    static defaultProps = {
        defaultSides: [0, 0, 0]
    };

    static propTypes = {
        defaultSides: PropTypes.arrayOf(PropTypes.number)
    };

    constructor(props) {
        super(props);

        let defaultSides = this.props.defaultSides;
        this.state = {
            sides : defaultSides,
            result: TriangleChecker.checkTriangle(...defaultSides)
        }
    }

    setSide = (sideNum) => (e) => {
        let sideValue = parseFloat(e.target.value);
        // if value parsed
        if (!Number.isNaN(sideValue)) {
            // copy array to prevent mutability
            let currentSides = this.state.sides.slice();
            currentSides[sideNum] = sideValue;
            this.setState({
                result: TriangleChecker.checkTriangle(...currentSides),
                sides : currentSides
            });
        }
    };

    // check, that triangle can be built
    static checkTriangle(side1, side2, side3) {
        return side1 < side2 + side3 && side2 < side1 + side3 && side3 < side2 + side1;
    }

    render() {
        return (
            <div>
                <TriangleForm sides={this.state.sides} setSide={this.setSide}/>
                <CheckResult result={this.state.result}/>
            </div>

        )
    }

}

export default TriangleChecker;