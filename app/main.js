import '../public/css/style.css';

import ReactDOM from 'react-dom';
import React from 'react';

import JunsComponent from './src/juns_component';
import JiangliComponent from './src/jianglis_component';


ReactDOM.render(
  <div className='all-components'>
    <JunsComponent day={'Sunday 10:21'} />
    <br />
    <JiangliComponent />
  </div>,
  document.getElementById('content')
)
