/**
 * Created by mahong on 17/6/13.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

let propTypes = {
    todo: PropTypes.object,
    handlerDestroy: PropTypes.func
};
export default class Item extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let {todo,handlerDestroy,oneCompleted} = this.props;
        return (
            <li className="todo">
                <div className="view">
                    <input className="toggle" type="checkbox" checked={todo.completed} onChange={()=>{oneCompleted(todo)}} />
                        <label>{todo.value}</label>
                        <button className="destroy" onClick={()=>{ handlerDestroy(todo) }}></button>
                </div>
                <input className="edit" />
            </li>

        )

    }
}

Item.propTypes = propTypes;