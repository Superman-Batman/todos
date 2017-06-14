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
            todosData: [],
            inputValue:"",
            left:0,
            view:"all"
        };
        this.handlerAddTodo = this.handlerAddTodo.bind(this);
        this.handlerDestroy = this.handlerDestroy.bind(this);
        this.completedDestroy = this.completedDestroy.bind(this);
        this.oneCompleted = this.oneCompleted.bind(this);
        this.changeValue = this.changeValue.bind(this);
        this.toggleAll = this.toggleAll.bind(this);
        this.changeViews = this.changeViews.bind(this);
    }
    changeValue(ev){
        let inputValue = ev.target.value;
        this.setState({
            inputValue:inputValue
        })
    }

    handlerAddTodo(ev){
        let {inputValue,left} = this.state;
        if(ev.keyCode!=13) return;
        let value = inputValue.trim();
        if(value=="") return;
        let {todosData} = this.state;
        let todo = {
            value: value,
            completed: false,
            id: new Date().getTime()
        };
        todosData.push(todo);
        left++;
        inputValue = "";//指向state.inputValue
        this.setState({
            todosData,
            inputValue,
            left
        });

    }

    handlerDestroy(todo){
        let {todosData,left} = this.state;
        todosData = todosData.filter((el, index)=>{
                if(el.id==todo.id){
                    if(todo.completed){
                    }else{
                        left--;
                    }
                }

                return el.id!=todo.id
        });
        this.setState({
            todosData,
            left
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
//map 对普通数组,不改变原数组,如果数组里是对象,会改变对象属性,一般使用是return每一个元素给一个新的数组
    // filter 过滤返回为true的元素
    oneCompleted(todo){
        let {todosData,left} = this.state;
        todosData.map((el,index)=>{
            if(el.id==todo.id){
                if(el.completed){
                    left++;
                }else{
                    left--;
                }
                el.completed = !el.completed;
            }
        });

        this.setState({
            todosData,
            left
        })
    }

    toggleAll(){
        let {todosData,left} = this.state;
        if(left>0){
            todosData.map((el,index)=>{
                el.completed = true;
            })
            left = 0;
        }else{
            todosData.map((el,index)=>{
                el.completed = false;
            })
            left = todosData.length;
        }
        this.setState({
            todosData,
            left
        })
    }
    changeViews(curview){
        let {view} = this.state;
        view = curview
        this.setState({
            view
        })
    }

    render(){
        let {handlerAddTodo,handlerDestroy,completedDestroy,oneCompleted,changeValue,toggleAll,changeViews} = this;
        let {todosData,inputValue,left,view} = this.state;
        let ItemsData = [];
        //{...el} 展开el <Item key={index}> 再<>中写的变量要加{} key 用于dom diff,单props中取不到
        todosData.map((el, index)=>{
            switch(view){
                case 'active':
                    if(!el.completed){
                        let ItemData = <Item {...{
                            todo: el,
                            //key: index,//在这写也行
                            handlerDestroy:handlerDestroy,
                            oneCompleted:oneCompleted
                        }}  key={index}/>;
                        ItemsData.push(ItemData)
                    }

                    break;
                case 'complete':
                    if(el.completed){
                        let ItemData = <Item {...{
                            todo: el,
                            //key: index,//在这写也行
                            handlerDestroy:handlerDestroy,
                            oneCompleted:oneCompleted
                        }}  key={index}/>;
                        ItemsData.push(ItemData)
                    }
                    break;
                case 'all':
                    let ItemData = <Item {...{
                        todo: el,
                        //key: index,//在这写也行
                        handlerDestroy:handlerDestroy,
                        oneCompleted:oneCompleted
                    }}  key={index}/>;
                    ItemsData.push(ItemData)
                    break;
            }

        });

        let itemsBox = null;
        let footerBox = null;

        if(todosData.length>0){
            itemsBox = (
                <section className="main">
                    <input className="toggle-all" type="checkbox" checked={left==0?'checked':''} onChange={toggleAll}/>
                    <ul className="todo-list">
                        {ItemsData}
                    </ul>
                </section>
            )

            footerBox = <Footer  {...{
                view,
                left,
                totalTodos:todosData.length,
                completedDestroy,
                changeViews
            }} ></Footer>
        }

        return(
            <div className="todoapp">
                <header className="header">
                    <h1>todos</h1>
                    <input type="text" className="new-todo"
                           value= {inputValue}
                           onChange={changeValue}
                           onKeyDown={handlerAddTodo}
                    />
                </header>
                {itemsBox}
                {footerBox}


            </div>
        )
    }
}


ReactDOM.render(
    <App></App>,
    document.getElementById('root')
)