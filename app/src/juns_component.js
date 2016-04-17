import React from 'react';

export default React.createClass({
  render: function(){
    return (
      <div className='juns-component'>
        <h2>It is a nice {this.props.day}</h2>
      </div>
    )
  }
});
