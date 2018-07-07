import React, {Component} from 'react';
import axios from 'axios';

class Form extends Component{
    constructor(){
        super();

        this.state={
            name: '',
            price: '',
            image: '',
            post: []
        }
    }
    inputName(val){
        this.setState({
            name: val
        })
    }
    inputPrice(val){
        this.setState({
            price: val
        })
    }
    inputImage(val){
        this.setState({
            image: val
        })
    }
    newPost=()=>{
        axios.post('/api/product',{
            name: this.state.name,
            price: this.state.price,
            image: this.state.image
        }).then(posts => {
            this.props.getUpdatedPost(posts.data)
                this.setState({
                    posts: posts.data
            })
        })
    }


    render(){
        return(
            <div>
            <input onChange={(e)=> this.inputName(e.target.value)} placeholder='place name here'/>
            <input onChange={(e)=> this.inputPrice(e.target.value)} placeholder='add price here'/>
            <input onChange={(e)=> this.inputImage(e.target.value)} placeholder='add image URL here'/>
            <button type="reset" value="Reset">Cancel Post</button>
            <button onClick={()=>this.newPost()}>Add Post</button>
            form
            </div>
        )
    }
}

export default Form;