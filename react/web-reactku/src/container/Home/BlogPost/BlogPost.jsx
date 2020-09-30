import React, {Component, Fragment} from 'react';
import axios from 'axios';
import './BlogPost.css';
import Post from '../../../component/Post/Post';

class BlogPost extends Component {
    state = {
        post: [],
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1
        },
        isUpdate: false
    }

    getPostAPI = () => {
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
            .then(res => {
                this.setState({
                    post: res.data
                })
            });
    }

    postDataToAPI = () => {
        axios.post('http://localhost:3004/posts', this.state.formBlogPost)
            .then((res) => {
                console.log(res.data);
                this.getPostAPI();
                this.setState({
                    formBlogPost: {
                        id: 1,
                        title: '',
                        body: '',
                        userId: 1
                    }
        
                }); 
            }, (err) => {
                console.log('Error: ', err);
            });
    }

    putDataToAPI = () => {
        axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost)
            .then(res => console.log(res));
        this.getPostAPI();
        this.setState({
            isUpdate: false,
            formBlogPost: {
                id: 1,
                title: '',
                body: '',
                userId: 1
            }

        });   
    }

    handleRemove = (data) => {
        axios.delete(`http://localhost:3004/posts/${data}`)
            .then(res => this.getPostAPI());
    }

    handelUpdate = (data) => {
        console.log(data);
        this.setState({
            formBlogPost: data,
            isUpdate: true
        });
    }

    handleFormChange = (e) => {
        let formBlogPostNew = {...this.state.formBlogPost};
        // untuk membuat bilangan random
        let timestemp = new Date().getTime();

        // jika nilai isUpdate == false
        if(!this.state.isUpdate){
            formBlogPostNew['id'] = timestemp;
        }
        formBlogPostNew[e.target.name] = e.target.value;
        this.setState({
            formBlogPost: formBlogPostNew
        });
    }

    handleSubmit = () => {
        if(this.state.isUpdate){
            this.putDataToAPI();
        } else{
            this.postDataToAPI();
        }
    }

    handelDetail = (id) => {
        this.props.history.push(`/detail-post/${id}`);
    }

    componentDidMount(){
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     // ubah response ke bentuk json
        //     .then(response => response.json())
        //     // ubah state dengan memasukkan data yg di dapat dari API
        //     .then(json => {
        //         this.setState({
        //             post: json
        //         })
        //     });

        // axios.get('http://localhost:3004/posts')
        //     .then(res => {
        //         this.setState({
        //             post: res.data
        //         })
        //     });
        this.getPostAPI();
    }

    render(){
        return(
            <Fragment>
                <p>Blog Post :</p>
                <div className='form'>
                    <ul>
                        <li><label htmlFor='title'>Title</label></li>
                        <li><input type='title' value={this.state.formBlogPost.title} id='title' name='title' placeholder='add title' onChange={this.handleFormChange}/></li>
                        <li><label htmlFor='body'>Body Content</label></li>
                        <li><textarea name='body' value={this.state.formBlogPost.body} id='body' onChange={this.handleFormChange}/></li>
                        <li><button className='btn-simpan' onClick={this.handleSubmit}>simpan</button></li>
                    </ul>
                </div>
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handelUpdate} goDetail={this.handelDetail}/>
                    })
                }
            </Fragment>
        );
    } 
}

export default BlogPost;