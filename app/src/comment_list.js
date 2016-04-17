import React from 'react';
import Comment from './comment';

export default React.createClass({
  render: function(){
    let commentNodes = this.props.commentList.map(function(comment){
      return (
        <Comment key={comment.id} author={comment.author} text={comment.text}>
        </Comment>
      )
    });
    return (
      <div className='comment-list'>
        {commentNodes}
      </div>
    );
  }
});
