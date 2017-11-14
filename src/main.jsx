/**
 * Created by daniele on 13/01/16.
 */

// main.js
import React from 'react';
import ReactDOM from 'react-dom';
import ReactLightSelect from './react-light-select.jsx';

class Main extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            label: '',
            selectOption: '',
        };

        this.data = this.data.bind(this);
        this.change = this.change.bind(this);
    }

    data()
    {
        var options = [
            {label:"Option A", value:"a"},
            {label:"Option B", value:"b"},
            {label:"Option C", value:"c"}
        ];

        return options;
    }

    change(value)
    {
        this.setState({
            selectOption: value,
        });
    }

    render()
    {
        return (
            <div>
                <ReactLightSelect value={this.state.selectOption} data={this.data()} onSelectChange={this.change} />
                <pre>
                    State: {this.state.selectOption}
                </pre>
            </div>
        );
    }
}

ReactDOM.render((
    <Main />
), document.getElementById('app'));
