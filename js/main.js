import React from 'react'
import ReactDom from 'react-dom'
import Work from './work.js'


var myWork = require('../data/mywork.json');

ReactDom.render(<Work work={myWork} />, document.getElementById('work'));
