import React, { Component } from 'react'
import Backdrop from '../Navbar/Backdrop/Backdrop.js'
import './PostForm.css'
class PostForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Author: '',
            Text: ''
        }

    }
    changeHandler = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        const { Author, Text } = this.state;
        this.setState({
            Author, [name]: e.target.value
        })

    }

    render() {
        let wrapper = "postform-wrapper";
        let Back
        if (this.props.status) {
            wrapper = "postform-wrapper open"
            Back = <Backdrop />
        }
        return (
            <React.Fragment>

                <div className="postwrapper">
                    <div className = {wrapper} >
                        <h1>Create Post</h1>
                        <form>
                            <textarea className="form-control" name="Text" rows="5" placeholder="Enter Text Here.. " value={this.state.Text} onChange={this.changeHandler}></textarea>
                            <input type = 'file' className="form-control my-2"/>
                            <button className="btn btn-primary">Post</button>
                        </form>
                    </div>
                </div>
                {Back}

            </React.Fragment>
        )

    }
}
export default PostForm
