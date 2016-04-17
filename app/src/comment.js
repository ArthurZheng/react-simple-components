import React from 'react';

export default React.createClass({
  render: function(){


    return (
        <div className='comment'>
          <h2>{this.props.author}</h2>
          <h3>{this.props.text}</h3>
        </div>
    )
  }
});
