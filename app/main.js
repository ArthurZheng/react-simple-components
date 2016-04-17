import ReactDOM from 'react-dom';
import React from 'react';

import '../public/css/style.css';

import JunsComponent from './src/juns_component';
import JiangliComponent from './src/jianglis_component';
import CommentBox from './src/comment_box';

// tutorial8.js
// var comments = [
//   {id: 1, author: "Pete Hunt", text: "This is one comment"},
//   {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
// ];

ReactDOM.render(
  <div className='all-components'>
      <CommentBox url="http://localhost:8084/comments.json" />
  </div>,
  document.getElementById('content')
)
