import React from 'react';

class ReactLightSelect extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            options: []
        };
    }

    onSelectChange(e)
    {
        var arr = [].slice.call(e.target.children);
        var label = arr.filter(function(n){
            return n.value === e.target.value;
        })[0].innerHTML;
        this.props.onSelectChange({
            label: label,
            value: e.target.value
        });
    }

    componentDidMount()
    {
        this.props.dataCallback(function(options){
            this.setState({
                options: options
            });
        }.bind(this));
    }

    render()
    {
        var select = '';
        if(this.state.options.length > 0)
        {
            select = (
                <select className={ this.props.className } onChange={ this.onSelectChange }>
                    {
                        this.state.options.map(function(o,i){
                            return (
                                <option key={i} value={o.value}>{o.label}</option>
                            )
                        })
                    }
                </select>
            );
        }

        return (
            <div>
                { select }
            </div>
        )
    }
}

ReactLightSelect.propTypes = {
    dataCallback: React.PropTypes.func.isRequired,
    onSelectChange: React.PropTypes.func.isRequired
};

// ReactLightSelect.defaultProps = {
// };

export default ReactLightSelect;
