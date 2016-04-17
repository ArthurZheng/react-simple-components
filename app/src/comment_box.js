import React from 'react';
import $ from 'jquery';

import CommentList from './comment_list';
import CommentForm from './comment_form';

export default React.createClass({
  getInitialState: function(){
    return {comments: []};
  },

  loadCommentsFromServer: function(){
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({comments: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  handleCommentSubmit: function(comment){
    // TODO: submit to server and refresh the list
    let comments = this.state.comments;
    comment.id = Date.now();
    let newComments = comments.concat([comment]);
    this.setState({comments: newComments}); // temporarily fake saved comments;

    $.ajax({
      url:this.props.url,
      dataType: 'json',
      type: 'POST',
      data: comment,
      success: function(data){
        this.setState({comments: data});
      }.bind(this),
      error:function(xhr, status, err){
        this.setState({comments: comments}); // if save fail, roll back to original comemnts;
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  componentDidMount: function(){
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },

  render: function(){
    return (
      <div className='comment-box'>
        <CommentList commentList = {this.state.comments}/>
        <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
      </div>
    )
  }
})
