import ReactDOM from 'react-dom';
import React from 'react';

import '../public/css/style.css';

import JunsComponent from './src/juns_component';
import JiangliComponent from './src/jianglis_component';
import CommentBox from './src/comment_box';

// tutorial8.js
var comments = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

ReactDOM.render(
  <div className='all-components'>
    <JunsComponent day={'Sunday 10:21'} />
    <br />
    <JiangliComponent />
    <br />
    <CommentBox url="../comments.json" pollInterval={2000} />
  </div>,
  document.getElementById('content')
)
