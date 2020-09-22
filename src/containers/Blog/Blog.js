import React, {Component} from 'react';
import axios from 'axios';
import './Blog.css';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';

import NewPost from '../../components/NewPost/NewPost';


class Blog extends Component{
    state = {
        posts: [],
        selectedPost:null,
        error:false
    }
    componentDidMount(){
        axios.get('/posts').then(
            (response)=>{
                const posts = response.data.slice(0,4);
                const updatedPosts = posts.map(post =>{
                    return {
                        ...post,
                        author:'Atit'
                    }
                })
                this.setState({posts:updatedPosts});
            }
        ).catch(error =>{
            this.setState({error:true})}
            );
    }
    selectedPostHandler(id){
        this.setState({selectedPost:id});
        
    }
    render(){
        let posts =<p>Something went wrong we will sort out soon</p>
        if(!this.state.error){
            posts = this.state.posts.map(post=>{
                return <Post 
                            key={post.id} 
                            title={post.title} 
                            author={post.author}
                            clicked={()=>this.selectedPostHandler(post.id)}
                            />;
            });
        }
         
        return(
            <div>
                <section className="Posts">
                                {posts}
                </section>
                <section><FullPost id={this.state.selectedPost}/></section>
                <section>
                    <NewPost />
                </section>
            </div>
        ) ;
    }
}
export default Blog;