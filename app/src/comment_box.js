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

  componentDidMount: function(){
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },

  render: function(){
    return (
      <div className='comment-box'>
        <CommentList commentList = {this.state.comments}/>
        <CommentForm />
      </div>
    )
  }
})
