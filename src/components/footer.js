/**
 * Created by mahong on 17/6/13.
 */
import React, { Component } from 'react';

export default class Footer extends Component{


    render(){
        let {completedDestroy} = this.props;
        return (
            <footer className="footer">
                <span className="todo-count">
                     <strong>1</strong>
                     left
                </span>
                <ul className="filters">
                    <li>
                        <a href="#" className="selected">All</a>
                    </li>
                    <li>
                        <a href="#" className="">Active</a>
                    </li>
                    <li>
                        <a href="#" className="">Complete</a>
                    </li>
                </ul>
                <button className="clear-completed" onClick={completedDestroy}>Clear completed</button>
            </footer>
        )

    }
}



