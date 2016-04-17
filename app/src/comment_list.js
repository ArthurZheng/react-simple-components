import React from 'react';

import Comment from './comment';

export default React.createClass({
  render: function(){
    return (
      <div className='comment-list'>
        <Comment author={'Jun Zheng'}>Nothing ventured nothing gained</Comment>
        <Comment author={'Jiangli Shi'}>Where there is a will, there is a way</Comment>
      </div>
    )
  }
});
