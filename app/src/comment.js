import React from 'react';

export default React.createClass({
  render: function(){
    return (
        <div className='comment'>
            <h2>{this.props.author} Wrote Comment</h2>
            <p>{this.props.children}</p>
        </div>
    )
  }
});
