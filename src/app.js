/**
 * Created by mahong on 17/6/12.
 */
import React,{ Component } from 'react';
import ReactDOM from  'react-dom';
import Item from 'Item';
import Footer from "Footer"
import style from 'style/index.css';
//require('style/index.css');

export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            todosData: []
        }
        this.handlerAddTodo = this.handlerAddTodo.bind(this);
        this.handlerDestroy = this.handlerDestroy.bind(this);
        this.completedDestroy = this.completedDestroy.bind(this);
        this.completed = this.completed.bind(this);
    }
    handlerAddTodo(ev){
        if(ev.keyCode!=13) return;
        let value = ev.target.value.trim();
        if(value=="") return;
        let {todosData} = this.state;
        let todo = {
            value: value,
            completed: false,
            id: new Date().getTime()
        };
        todosData.push(todo);
        this.setState({
            todosData
        });
        ev.target.value = "";
    }

    handlerDestroy(todo){
        let {todosData} = this.state;
        todosData = todosData.filter((el, index)=>el.id!=todo.id);
        this.setState({
            todosData
        });
    }

    completedDestroy(){
        console.log(todosData);
        let {todosData} = this.state;
        todosData = todosData.filter((el, index)=>{
            return !el.completed;
        });
        console.log(todosData);
        this.setState({
            todosData
        })
    }

    completed(todo){
        let {todosData} = this.state;
        todosData.map((el,index)=>{
            if(el.id==todo.id){
            el.completed = !el.completed;
            }
        });
        this.setState({
            todosData
        })
    }

    render(){
        let {handlerAddTodo,handlerDestroy,completedDestroy,completed} = this;
        let {todosData} = this.state;
        let ItemsData = [];
        //{...el} 展开el <Item key={index}> 再<>中写的变量要加{} key 用于dom diff,单props中取不到
        todosData.map((el, index)=>{
            let ItemData = <Item {...{
                todo: el,
                //key: index,//在这写也行
                handlerDestroy:handlerDestroy,
                completed:completed
            }}  key={index}/>;
            ItemsData.push(ItemData)
        });

        return(
            <div className="todoapp">
                <header className="header">
                    <h1>todos</h1>
                    <input type="text" className="new-todo"
                           placeholder="What needs to be done?"
                           onKeyDown={handlerAddTodo}
                    />
                </header>
                <section className="main">
                    <input className="toggle-all" type="checkbox"/>
                        <ul className="todo-list">
                            {ItemsData}
                        </ul>
                </section>
                <Footer completedDestroy={completedDestroy}></Footer>
            </div>
        )
    }
}


ReactDOM.render(
    <App></App>,
    document.getElementById('root')
)