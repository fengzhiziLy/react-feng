## React 学习之Demo

### 通过TodoList演示React基础知识

> 响应式设计思想： 通过数据操作DOM

> label中的htmlFor

> dangerouslySetInnerHTML={{__html: item}}

> 声明式开发

> 单向数据流

> 视图层框架

> 函数式编程

> react只负责root部分的DOM，可以与其他框架并存

### 虚拟DOM

1. state 数据
2. JSX 模版
3. 数据 + 模版 结合，生成真实的DOM，来显示
4. state 发生改变
5. 数据 + 模版 结合，生成真实的DOM，替换原始的DOM

缺陷： 
第一次生成了一个完整的DOM片段
第二次生成了一个完整的DOM片段
第二次的DOM替换第一次的DOM，非常消耗性能

1. state 数据
2. JSX 模版
3. 数据 + 模版 结合，生成真实的DOM，来显示
4. state 发生改变
5. 数据 + 模版 结合，生成真实的DOM，并不直接替换原始的的DOM
6. 新的DOM(DocumentFragment)和原始的DOM做对比，找差异
7. 找出input发生了变化
8. 只用新的DOM中的input元素，替换老的DOM中的input元素

缺陷：
  性能的提升并不明显

1. state 数据
2. JSX 模版
3. 数据 + 模版 结合生成虚拟DOM（虚拟DOM就是一个JS对象，用它来描述真实DOM）
```js
['div', {id: 'abc'}, ['span', {}, 'hello feng']]
```
4. 用虚拟DOM的结构生成真实的DOM，来显示
```js
<div id='abc'><span>hello feng</span></div>
```
5. state 发生变化
6. 数据 + 模版 生成新的虚拟DOM（极大的提升了性能）
```js
['div', {id: 'abc'}, ['span', {}, 'fengzhizi']]
```
7. 比较原始虚拟DOM和新的虚拟DOM，区别是span中的内容
8. 直接操作DOM，改变span中的内容

优点：
1. 性能提升
2. 使得跨端应用得以实现