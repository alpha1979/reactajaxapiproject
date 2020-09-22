import React,{Component} from 'react';
import axios from 'axios';
import './NewPost.css';

class NewPost extends Component{
    state={
        title:'',
        content:'',
        author:'Atit',
        error:false
    }

    
    newPostUploadHAndler =()=>{
        const data={
            title:this.state.title,
            content:this.state.content,
            author:this.state.author
        }
        axios.post('/posts/', data).then(
            response=>{
                console.log(response);
            }
        ).catch(error=>{
            // console.log("Something went wrong");
            this.setState({error:true})
        });
    }
    render(){
        // const post = <p>Something is wrong post will not be posted</p>
        // if(this.state.error){
        //     post
        // }
        return(
            
            <div className="NewPost">
                <h1>Add a Post</h1>
                <label>Title</label>
                <input 
                    type="text" 
                    value={this.state.title} 
                    onChange={ (event) => { 
                                            this.setState(
                                                        {title: event.target.value}
                                                        )
                                          }
                             } 

                />
                <label>Content</label>
                <textarea
                    row="4"
                    value={this.state.content}
                    onChange={(event)=>{
                                    this.setState({
                                        content:event.target.value
                                    })
                    }} />
                <label>Author</label>
                <select 
                        value={this.state.author}
                        onChange={(event)=>{
                            this.setState({
                                author:event.target.value
                            })
                        }}
                >
                        <option value="Atit">Atit</option>
                        <option value="Kamila">Kamila</option>
                </select>
                <button onClick={this.newPostUploadHAndler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;