/**
 * Created by mahong on 17/6/13.
 */
import React, { Component } from 'react';

export default class Item extends Component{
    render(){
        return (
            <li className="todo completed">
                <div className="view">
                    <input className="toggle" type="checkbox" value="heheeheh" />
                        <label>1111</label>
                        <button className="destroy"></button>
                </div>
                <input className="edit" />
            </li>

        )

    }
}

