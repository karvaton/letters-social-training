import React, { Component } from 'react';
import PropTypes from 'prop-types';


class CreatePost extends Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired
    };
    
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            valid: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePostChange = this.handlePostChange.bind(this);
    }

    handleSubmit() {
        if (!this.state.valid) return;

        if (this.props.onSubmit) {
            const newPost = {
                data: Date.now(),
                content: this.state.content
            }
        
            this.props.onSubmit(newPost);
            this.setState({
                content: '',
                valid: null
            });
        }
    }

    handlePostChange(e) {
        e.preventDefault();
        const content = e.target.value;

        this.setState({ 
            content,
            valid: content.length <= 280
         });
    }

    render() {
        return <div className="create-post">
                <button onClick={this.handleSubmit}>Post</button>
                <textarea 
                    placeholder="What's on your mind..?" 
                    onChange={event => this.handlePostChange(event)} 
                    value={this.state.content}
                />
            </div>;
    }
}

export default CreatePost;