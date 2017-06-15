/**
 * Created by mahong on 17/6/13.
 */
import React, { Component } from 'react';
import { Link } from "react-router-dom";
let propTypes = {
    changeViews : PT.func,
    view: PT.oneOf(["all", "active", "complete"])
}
//无状态函数式组件  数据在顶层 把数据传到底层, 最好底层只用于显示数据,都是无状态函数式组件
//export default function Footer(props){
//        //父子组件之间数据传递用props,父的state子组件获取不到
//        let {completedDestroy,left,totalTodos,view,changeViews} = props;
//        let clearBtn = null;
//        if(left!=totalTodos){
//            clearBtn = <button className="clear-completed" onClick={completedDestroy}>Clear completed</button>
//        }
//        return (
//            <footer className="footer">
//                <span className="todo-count">
//                     <strong>{left}</strong>
//                     &nbsp;left
//                </span>
//                <ul className="filters">
//                    <li>
//                        <a href="#all" className={view=='all'?'selected':''} onClick={()=>changeViews("all")}>All</a>
//                    </li>
//                    <li>
//                        <a href="#active" className={view=='active'?'selected':''} onClick={()=>changeViews("active")}>Active</a>
//                    </li>
//                    <li>
//                        <a href="#complete" className={view=='complete'?'selected':''} onClick={()=>changeViews("complete")}>Complete</a>
//                    </li>
//                </ul>
//                {clearBtn}
//            </footer>
//        );
//}

//不用Link 用a href http://localhost:8088/active 重新请求一个页面,会刷新页面
//export default function Footer(props){
//    //父子组件之间数据传递用props,父的state子组件获取不到
//    let {completedDestroy,left,totalTodos,pathname} = props;
//    let clearBtn = null;
//    if(left!=totalTodos){
//        clearBtn = <button className="clear-completed" onClick={completedDestroy}>Clear completed</button>
//    }
//    return (
//        <footer className="footer">
//                <span className="todo-count">
//                     <strong>{left}</strong>
//                    &nbsp;left
//                </span>
//            <ul className="filters">
//                <li>
//                    <a href="/" className={pathname=='/'?'selected':''}>All</a>
//                </li>
//                <li>
//                    <a href="/active" className={pathname=='/active'?'selected':''}>Active</a>
//                </li>
//                <li>
//                    <a href="/complete" className={pathname=='/complete'?'selected':''}>Complete</a>
//                </li>
//            </ul>
//            {clearBtn}
//        </footer>
//    );
//}

//用link 虽然页面生成a标签,但是运用路由,不会重新请求页面,不会刷新页面
export default function Footer(props){
    //父子组件之间数据传递用props,父的state子组件获取不到
    let {completedDestroy,left,totalTodos,pathname} = props;
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
                    <Link to="/" className={pathname=='/'?'selected':''}>All</Link>
                </li>
                <li>
                    <Link to="/active" className={pathname=='/active'?'selected':''}>Active</Link>
                </li>
                <li>
                    <Link to="/complete" className={pathname=='/complete'?'selected':''}>complete</Link>
                </li>
            </ul>
            {clearBtn}
        </footer>
    );
}

Footer.propTypes = propTypes;

