import React from 'react';

class ReactLightSelect extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            options: props.data,
            selectedOption: this.getOptionFromValue(props.data, props.value)
        };

        this.onSelectChange = this.onSelectChange.bind(this);
    }

    getOptionFromValue(options, value){
        return options.find(o => o.value === value);
    }

    onSelectChange(e)
    {
        this.props.onSelectChange(e.target.value);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.value){
            this.setState({ selectedOption: this.getOptionFromValue(this.state.options, nextProps.value) });
        }
    }

    render()
    {
        const select = this.state.options.length === 0 ? null : (
            <div className={ typeof this.props.className !== 'undefined' ? this.props.className : 'react-light-select' }>
                <div className="placeholder">
                    { this.state.selectedOption ? this.state.selectedOption.label : 'Select...' }
                </div>
                <select onChange={ this.onSelectChange } value={this.state.selectedOption ? this.state.selectedOption.value : ''}>
                    <option key={'disabled'} value='' disabled>Select...</option>
                    {
                        this.state.options.map(function(o,i){
                            return (
                                <option key={i} value={o.value}>{o.label}</option>
                            )
                        })
                    }
                </select>
            </div>
        );

        return (
            <div>
                { select }
            </div>
        )
    }
}

ReactLightSelect.propTypes = {
    data: React.PropTypes.array.isRequired,
    onSelectChange: React.PropTypes.func.isRequired,
    value: React.PropTypes.string.isRequired
};

export default ReactLightSelect;
