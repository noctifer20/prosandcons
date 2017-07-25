import React from 'react';


export default class Table extends React.Component {

    constructor() {
        super();
        this.state = {
            order: '',
            values: []
        };
    }
    addValue(elem, focus) {
        if (!elem.value.trim()) {
            elem.value = '';
            return;
        }
        this.setState({values: [...this.state.values, elem.value], order: ''});
        let scroll =  elem.closest('.scroll');
        setTimeout(()=> scroll.scrollTop = scroll.scrollHeight,0)
        if(focus)
            elem.focus();
    }
    editValue(elem, index) {
        const {values} = this.state;
        values[index] = elem.value;
        this.setState({values});
    }
    deleteValue(index) {
        const {values} = this.state;
        values.splice(index, 1);

        this.setState({values});
    }
    render() {
        const {values} = this.state;
        const props = this.props;
        return (
            <div className="cell scroll">
                <div className="row">
                    <div className="cell cell-align-center">{props.title}</div>
                </div>
                <div className="cell">
                    {values.map((value, index) => {
                        return (
                            <div className="list-item row" key={index}>
                                <span className="cell cell-min">{index + 1}. </span>
                                <input
                                    type="text"
                                    className="cell cell-max"
                                    value={this.state.values[index]}
                                    onChange={(e) => this.editValue(e.target, index)}
                                    onBlur={(e) => !e.target.value.trim() ? this.deleteValue(index) : null }
                                />
                            </div>
                        );
                    })}
                    <div className="row">
                        <span className="cell cell-min">{values.length + 1}. </span>
                        <input
                            type="text"
                            value={this.state.order}
                            className="order cell cell-max "
                            onChange={(e) => this.setState({order: e.target.value})}
                            onKeyPress={(e) => e.key === 'Enter' ? this.addValue(e.target, false) : null}
                            onBlur={(e) => this.addValue(e.target, false)}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
