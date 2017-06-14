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
        //子元素内部的状态
        this.state = {
            inEdit: false,
            inputValue:"",
            completed: false,
            esc: false
        }
        this.onEdit = this.onEdit.bind(this);
        this.changeValue = this.changeValue.bind(this);
        this.keyDownValue = this.keyDownValue.bind(this);
        this.blurValue = this.blurValue.bind(this);
    }

    onEdit(){
        let {todo} = this.props;
        let {inputValue} = this.state;
        inputValue = todo.value;
        this.setState({
            inputValue,
            inEdit: true
        },function(){
            //获取真是dom,在渲染之后
            console.log(this.refs);
            this.refs.inputBox.focus();
        });

    }

    changeValue(ev){
        let {todo} = this.props;//todo是一个引用变量,他的改变会影响this.props.todo的值
        let {inputValue} = this.state; //这个inputValue就是一个普通的变量,他的改变不会影响state,state改变是因为下面的setState

        let value = ev.target.value;
        inputValue = value;
        this.setState({
            inputValue
        })

    }
    keyDownValue(ev){
        let {inputValue} = this.state;
        let {todo} = this.props;
        if(ev.keyCode==13){
            todo.value= inputValue;
            this.setState({
                todo,
                inEdit: false
            })
        }else if(ev.keyCode==27){
            this.setState({
                todo,
                inEdit: false,
                esc: true
            })
        }

    }
    blurValue(ev){
        let {esc} = this.state;
        if(esc)return;
        let {inputValue} = this.state;
        let {todo} = this.props;
        todo.value= inputValue;
        this.setState({
            todo,
            inEdit: false
        })
    }

    render(){
        console.log("keyDownValue......");
        let {todo,handlerDestroy,oneCompleted} = this.props;
        let {inEdit,inputValue} = this.state;
        let {onEdit,changeValue,keyDownValue,blurValue} = this;
        let itemClassName = "";
        if(inEdit) itemClassName="editing";
        return (
            <li className={todo.completed?itemClassName+" todo completed":itemClassName+" todo"}>
                <div className="view">
                    <input className="toggle" type="checkbox" checked={todo.completed} onChange={()=>{oneCompleted(todo)}} />
                        <label onDoubleClick={onEdit}>{todo.value}</label>
                        <button className="destroy" onClick={()=>{ handlerDestroy(todo) }}></button>
                </div>
                <input ref="inputBox" className="edit" value={inputValue} onChange={changeValue} onKeyDown={keyDownValue} onBlur={blurValue}/>
            </li>

        )

    }
}

Item.propTypes = propTypes;