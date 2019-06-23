import React from 'react'
import ReactDom from 'react-dom'
import Work from './work.js'


let myWork = require('../data/mywork.json');

ReactDom.render(<Work work={myWork} />, document.getElementById('work'));
