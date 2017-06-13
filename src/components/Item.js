/**
 * Created by mahong on 17/6/13.
 */
import React, { Component } from 'react';

export default class Item extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let {todo,handlerDestroy} = this.props;
        return (
            <li className="todo">
                <div className="view">
                    <input className="toggle" type="checkbox" />
                        <label>{todo.value}</label>
                        <button className="destroy" onClick={()=>{ handlerDestroy(todo) }}></button>
                </div>
                <input className="edit" />
            </li>

        )

    }
}

