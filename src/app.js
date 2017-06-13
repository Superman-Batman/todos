/**
 * Created by mahong on 17/6/12.
 */
import React,{ Component } from 'react';
import ReactDOM from  'react-dom';
import Item from 'Item';
import Footer from "Footer"
import style from 'style/index.css';
//require('style/index.css');

class App extends Component{
    render(){
        return(
            <section className="todoapp">
                <header className="header">
                    <h1>todos</h1>
                    <input className="new-todo"
                           placeholder="What needs to be done?"
                    />
                </header>
                <section className="main">
                    <input className="toggle-all" type="checkbox"/>
                        <ul className="todo-list">
                           <Item></Item>
                        </ul>
                </section>
                <Footer></Footer>
            </section>
        )
    }
}


ReactDOM.render(
    <App></App>,
    document.getElementById('root')
)