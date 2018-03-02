import React from "react";
import TriangleForm from "./TriangleForm";
import CheckResult from "./CheckResult";

class TriangleChecker extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sides : [],
            result: null
        }
    }


    submitForm = (e) => {
        e.preventDefault();
        // copy array to prevent mutability
        let sides = this.state.sides.slice();
        this.setState({
            ...this.state,
            result: TriangleChecker.checkTriangle(...sides)
        });
    };


    setSide = (sideNum) => (e) => {
        let sideValue = parseFloat(e.target.value);
        // if value parsed
        if (!Number.isNaN(sideValue)) {
            let currentSides = this.state.sides.slice();
            currentSides[sideNum] = sideValue;
            this.setState({
                ...this.state,
                sides: currentSides
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
                <TriangleForm submitForm={this.submitForm} sides={this.state.sides} setSide={this.setSide}/>
                <CheckResult result={this.state.result}/>
            </div>

        )
    }
}

export default TriangleChecker;