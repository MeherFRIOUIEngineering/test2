import React, { Component } from 'react';
import { TextField, Button } from 'react-md';

import './styles.css'

export default class Calculate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            speed: null,
            value: null,
            table: [],
            result: null
        }
    }
    addValueToTable = () => {
        const { value } = this.state
        this.setState({
            table: [...this.state.table, value],
            value: "",
            result: ""
        })
    }
    printTableOfValue = () => {
        const { table } = this.state
        let renderAllData = []
        renderAllData = table.map(t => {
            return (
                <div>
                    {t}
                    <br />
                </div>
            )
        })
        return renderAllData
    }

    resetTable = () => {
        this.setState({
            table: []
        })
    }

    NbPair = (Nb) => {
        if (Nb / 2 === Math.round(Nb / 2)) return true;
        else return false;
    }

    calculation = () => {
        const { speed, table } = this.state
        var test = 0;
        var b = 150 / speed;
        var h = b;

        for (var i = 0; i < table.length; i++) {
            if (h < table[i]) { h = h + b; console.log(h); } else {
                var k = Math.floor(h / table[i]);
                if (this.NbPair(k)) { h = h + b; } else { test = k + 1; h = test * table[i]; h = h + b; }
                console.log(h);
            }
        }
        this.setState({
            result: h
        })
    }
    render() {
        const { table, value } = this.state
        return (
            <div>
                <div className="calcul">
                    <TextField
                        id="floating-center-title"
                        label="initial speed:"
                        lineDirection="center"
                        type={"number"}
                        className="md-cell"
                        onChange={(speed) => this.setState({
                            speed
                        })}
                    />
                    <TextField
                        id="floating-center-title"
                        label="Add value to table :"
                        lineDirection="center"
                        className="md-cell"
                        type={"number"}
                        onChange={(value) => this.setState({
                            value
                        })}
                        value={value}
                    />
                    <div>

                    </div>
                    {table.length > 2 ? this.printTableOfValue() : table}
                    <div>

                        <Button flat primary swapTheming onClick={() => this.addValueToTable()}>Add to table</Button><br />
                    </div>

                    <div>

                        <Button flat secondary swapTheming onClick={() => this.resetTable()}>reset table</Button><br />
                    </div>

                    <div>

                        <Button flat primary swapTheming onClick={() => this.calculation()}>calculation</Button>
                    </div>
                    Result : {this.state.result && <h1>{this.state.result}</h1>}
                </div>

            </div >
        );
    }
}

