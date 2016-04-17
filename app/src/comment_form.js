import React from 'react';


export default React.createClass({
  render: function(){
    return (
      <form className='comment-form'>
        <input type='text' placeholder='Your Name: ' />
        <input type='text' placeholder='Your Comment Say Something: ' />
        <input type='submit' value='post' />
      </form>
    )
  }
})
