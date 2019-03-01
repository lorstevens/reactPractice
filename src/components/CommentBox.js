import React, { Component } from 'react';

export default class CommentBox extends Component {

    state = {
        comment: ''
    }

    handleChange = (event) => {
        this.setState({ comment: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({comment: ''})
        //call an action creator and save comment by user w/ redux
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h4>Add a Comment</h4>
                <textarea value={this.state.comment} onChange={this.handleChange} />
                <div>
                    <button >Submit</button>
                </div>
            </form>
        )
    }
}