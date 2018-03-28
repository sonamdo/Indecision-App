import React from 'react';
import AddOption from './AddOption.js';
import Header from './Header';
import Action from './Action';
import Options from './Options'

export default class IndecisionApp extends React.Component {

    state = {
        options : []
    };  

    handleDeleteOptions = () => {
        this.setState(()=>({options:[]}));
    }
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }
    handlePick = () => {
        const randomNumb = Math.floor(Math.random()*this.state.options.length);
        const option = this.state.options[randomNumb];
        alert(option)
    }
    handleAddOption = (option) => {
        if (!option){
            return 'Enter valid value to add item'
        } else if (this.state.options.indexOf(option) > -1){
            return 'This option already exists'
        }

        this.setState((prevState)=>({options: prevState.options.concat(option)}))
    }

    componentDidMount(){
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
    
            if (options){
                this.setState(() => ({options: options}))
            }
        } catch (e) {

        }
    }
    componentDidUpdate(prevProps, prevState){
        if (prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log('saving data');
        }
    }
    componentWillUnmount(){
        console.log('componentWillUnmount!');
    }

    render() {
        const subtitle = "Put your hands in the life of a computer";

        return(
            <div>
                <Header subtitle = {subtitle}/>
                <Action hasOptions={this.state.options.length > 0} 
                handlePick = {this.handlePick}
                />
                <Options 
                options = {this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                handleAddOption = {this.handleAddOption}
                />
            </div>
        )
    }
    
}