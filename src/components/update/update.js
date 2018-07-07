import React, {Component} from 'react';
import axios from 'axios';

class Update extends Component{
    constructor(){
        super();

        this.state={
            post: [],
            name: '',
            price: '',
            image: ''
        }
        this.addNewChanges=this.addNewChanges.bind(this)
    }
    handleNameChange(val){
        this.setState({
            name: val
        })
    }
    handlePriceChange(val){
        this.setState({
            price: val
        })
    }
    addNewChanges(){
        axios.put(`/api/update${this.state.name}`)
    }
    render(){
        return(
            <div>
            <input placeholder='input new name here'/>
            <input placeholder='input new price here'/>
            <button onClick={()=>this.addNewChanges()}>Update Post</button>
            </div>
        )
    }
}
export default Update;