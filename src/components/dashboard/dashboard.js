import React, {Component} from 'react';
import Product from '../product/product';
import axios from 'axios';

class Dashboard extends Component{
    constructor(){
        super();

        this.state={
            post: [],
            name: ''
        }
        this.deletePost=this.deletePost.bind(this);
    }
    deletePost(){
        axios.delete(`/api/delete${this.props.name}`).then(post => {
            this.props.getUpdatedPost(post.data)
        })
    }

    render(){
        return(
            <div>
            <button onClick={()=> this.deletePost()}>delete</button>
            <Product/>
            </div>
        )
    }
}

export default Dashboard;