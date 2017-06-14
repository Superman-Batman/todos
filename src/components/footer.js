/**
 * Created by mahong on 17/6/13.
 */
import React, { Component } from 'react';
let propTypes = {
    changeViews : PT.func,
    view: PT.oneOf(["all", "active", "complete"])
}
//无状态函数式组件  数据在顶层 把数据传到底层, 最好底层只用于显示数据,都是无状态函数式组件
export default function Footer(props){
        //父子组件之间数据传递用props,父的state子组件获取不到
        let {completedDestroy,left,totalTodos,view,changeViews} = props;
        let clearBtn = null;
        if(left!=totalTodos){
            clearBtn = <button className="clear-completed" onClick={completedDestroy}>Clear completed</button>
        }
        return (
            <footer className="footer">
                <span className="todo-count">
                     <strong>{left}</strong>
                     &nbsp;left
                </span>
                <ul className="filters">
                    <li>
                        <a href="javascript:void(0)" className={view=='all'?'selected':''} onClick={()=>changeViews("all")}>All</a>
                    </li>
                    <li>
                        <a href="javascript:void(0)" className={view=='active'?'selected':''} onClick={()=>changeViews("active")}>Active</a>
                    </li>
                    <li>
                        <a href="javascript:void(0)" className={view=='complete'?'selected':''} onClick={()=>changeViews("complete")}>Complete</a>
                    </li>
                </ul>
                {clearBtn}
            </footer>
        );
}

Footer.propTypes = propTypes;

