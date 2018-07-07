import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Dashboard from '../src/components/dashboard/dashboard';
import Form from './components/form/form';
import Header from './components/header/header';
import Update from './components/update/update';

class App extends Component {
  constructor(){
    super();

    this.state = {
      post: []
    }
    this.getUpdatedPost=this.getUpdatedPost.bind(this)
  }
  componentDidMount(){
    axios.get('/api/test').then(response => {
      console.log(response)
    })
    axios.get('api/inventory').then(post => {
      this.setState({
        post: post.data
      })
      console.log('GET reading')
    })
  }
  getUpdatedPost(post){
    this.setState({
      post: post
    })
  }
  render() {
    let ProductPosts = this.state.post.map(posts=>{
      return(
        <div className='post'>
        <div>{posts.name}</div>
        <div>{posts.price}</div>
        <img src={posts.image}/>
        <Dashboard name={posts.name} getUpdatedPost={this.getUpdatedPost}/>
        </div>
      )
    })
    return (
      <div className="App">
        <Header/>
        <Dashboard/>
        <Form getUpdatedPost={this.getUpdatedPost}/>
        <Update/>
        {ProductPosts}
      </div>
    );
  }
}

export default App;
