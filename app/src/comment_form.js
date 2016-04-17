import React from 'react';


export default React.createClass({
  getInitialState: function(){
    return {author: '', text:''};
  },

  handleAuthorChange: function(event){
    this.setState({author: event.target.value});
  },
  handleTextChange: function(event){
    this.setState({text: event.target.value});
  },
  handleSubmit: function(event){
    event.preventDefault();
    let author = this.state.author.trim();
    let text = this.state.text.trim();
    if(!text || !author) {
      return;
    }
    //TODO: send request to the server
    this.props.onCommentSubmit({author: author, text:text})
    this.setState({author: '', text: ''});
  },


  render: function(){
    return (
      <form className='comment-form' onSubmit={this.handleSubmit}>
        <input
        type='text'
        placeholder='Your Name: '
        value={this.state.author}
        onChange={this.handleAuthorChange}
        />
        <input
        type='text'
        placeholder='Your Comment Say Something: '
        value={this.state.text}
        onChange={this.handleTextChange}
        />
        <input type='submit' value='post' />
      </form>
    )
  }
})
