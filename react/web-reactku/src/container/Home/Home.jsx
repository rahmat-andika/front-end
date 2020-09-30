import React, {Component, Fragment} from 'react';
import HelloComponent from '../../component/HelloComponent';
import DetailPost from './BlogPost/DetailPost/DetailPost';
import Product from '../Home/product/Product';
import BlogPost from './BlogPost/BlogPost';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './Home.css';

class Home extends Component {
    render() {
        return(
            <Router>
                <Fragment>
                    <div className="nav">
                        <Link to='/' className="btn-1">Home</Link>
                        <Link to='/product' className="btn-1">Product</Link>
                        <Link to='/hello' className="btn-1">To Do List</Link>
                    </div>
                    <Route path='/' exact component={BlogPost}/>
                    <Route path='/detail-post/:id' exact component={DetailPost}/>
                    <Route path='/product' component={Product}/>
                    <Route path='/hello' component={HelloComponent}/>
                </Fragment>
            </Router>
        );
    }
}

export default Home;
