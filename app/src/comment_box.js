import React from 'react';

import CommentList from './comment_list';
import CommentForm from './comment_form';

export default React.createClass({
  render: function(){
    return (
      <div className='comment-box'>
        <CommentList commentList = {this.props.comments}/>
        <CommentForm />
      </div>
    )
  }
})
