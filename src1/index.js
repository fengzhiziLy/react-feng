import React from 'react';
import ReactDOM from 'react-dom';
// all in js --- 一种理念
import TodoList from './TodoList';
// PWA progressive web application
// https协议的服务器上，在断网的情况下可以将网页暂存到浏览器中
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TodoList />, document.getElementById('root'));
// registerServiceWorker();
