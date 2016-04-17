import React from 'react';

export default React.createClass({
  getInitialState: function(){
    return {
      work: 'Curtis Fresh'
    }
  },
  changeJob: function(event){
    this.setState({work: event.target.value})
  },
  render: function(){
    return (
      <div className='jiangli-component'>
      <h4>Jiangli currently works at {this.state.work}</h4>
      <input type='text' onChange={this.changeJob}/>

      </div>
    )
  }
});
