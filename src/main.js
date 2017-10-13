
import React from 'react';
import ReactDOM from 'react-dom'
// import Clock from './components/Clock.js';
import List from './components/List.js'
import Form from './components/Form.js'
import {Button} from 'antd'
import 'antd/dist/antd.css'

ReactDOM.render(
	[
		<List numbers={[1,2,3,4,5,6]} key="0" />,
		<Form key="1" />,
		<div key="2">{false}</div>,
		<Button type="primary">Primary</Button>,
		<Button type="primary" shape="circle" icon="search" />
	],
	document.getElementById('app')
)