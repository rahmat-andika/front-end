import React, {Component, Fragment} from 'react';
import Axios from 'axios';

class DetailPost extends Component{
    state = {
        post: {
            title: '',
            body: ''
        }
    }
    componentDidMount(){
        let id = this.props.match.params.id;
        Axios.get(`http://localhost:3004/posts/${id}`)
            .then(res => {
                let title = res.data.title;
                let body = res.data.body;
                this.setState({
                    post: {
                        title: title,
                        body: body
                    }
                })
            });
    }
    render(){
        return(
            <div>
                <p>detail post :</p>
                <p>title : {this.state.post.title}</p>
                <p>body : {this.state.post.body}</p>
            </div>
        );
    }
}

export default DetailPost;
