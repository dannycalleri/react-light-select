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
            label: ''
        };

        this.data = this.data.bind(this);
        this.change = this.change.bind(this);
    }

    data(cb)
    {
        var options = [
            {label:"Option A", value:"a"},
            {label:"Option B", value:"b"},
            {label:"Option C", value:"c"}
        ];

        cb(options);
    }

    change(e)
    {
        this.setState({
            label: JSON.stringify(e).replace(/"/g, '')
        });
    }

    render()
    {
        return (
            <div>
                <ReactLightSelect dataCallback={this.data} onSelectChange={this.change} />
                {
                    this.state.label !== '' ?
                        <div className="selection">
                            User selection: { this.state.label }
                        </div>
                    :
                        ''
                }
            </div>
        );
    }
}

ReactDOM.render((
    <Main />
), document.getElementById('app'));
