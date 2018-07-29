import React, { Component } from 'react';

class Dialog extends Component {
    constructor (props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
        var len = this.props.nums;
        var newid = len > 0 ? len : 0;
        var value = this.refs.myText.value;
        if (value !== '') {
            var obj = {
                id: newid,
                name: value,
                status: 0
            };
            this.refs.myText.value = '';
            this.props.addNewTask(obj);
        }
    }

    render () {
        return (
            
            <div className="dialog">
                <div>
                    <input className='diatext' type="text" ref="myText" placeholder="你需要做什么？"/>
                </div>
                <div>
                    <input className='diabtn' type="button" value="Save Task" onClick={this.handleClick}/>
                </div>
            </div>
            
        );
    }
}

export default Dialog;