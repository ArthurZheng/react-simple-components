import '../public/css/style.css';

import ReactDOM from 'react-dom';
import React from 'react';

import JunsComponent from './src/juns_component';
import JiangliComponent from './src/jianglis_component';
import CommentBox from './src/comment_box';

ReactDOM.render(
  <div className='all-components'>
    <JunsComponent day={'Sunday 10:21'} />
    <br />
    <JiangliComponent />
    <br />
    <CommentBox />
  </div>,
  document.getElementById('content')
)
