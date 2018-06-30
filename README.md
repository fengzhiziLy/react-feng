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
  Diff, diffrence
8. 直接操作DOM，改变span中的内容

优点：
1. 性能提升
2. 使得跨端应用得以实现

### Diff算法

同层比较
![Diff](/src/images/diff.png)

### 生命周期函数

生命周期函数指在某一个时刻组件会自动调用执行的函数

```js
  // 当组件的state或者props发生改变的时候，render函数就会重新执行
  // 在组件即将被挂载到页面的时刻自动执行
  componentWillMount () {
    console.log('componentWillMount')
  } 

  // 组件在挂载到页面上自动执行
  componentDidMount () {
    console.log('componentDidMount')
  }

  // 组件被更新之前，会自动被执行
  shouldComponentUpdate () {
    console.log('shouldComponentUpdate')
    return true
  }

  // 组件被更新之前，会自动执行，但是在shouldComponentUpdate之后执行
  // 如果shouldComponentUpdate返回true才执行，如果返回false就不执行
  componentWillUpdate () {
    console.log('componentWillUpdate')
  }

  // 组件更新完成之后会被执行
  componentDidUpdate () {
    console.log('componentDidUpdate')
  }
  
  // 当一个组件从父组件接受参数
  // 只要父组件的render函数被重新执行，子组件的这个生命周期函数就被执行
  // 如果这个组件第一次存在于父组件中，不会被执行
  // 如果这个组件之前已经存在于父组件中，才会被执行
  componentWillReceiveProps () {
    console.log('child componentWillReceiveProps')
  }

  // 当这个组件即将被从页面中剔除的时候，才会被执行
  componentWillUnmount () {
    console.log('componentWillUnmount')
  }
```

#### 一些性能优化的点

1. 避免无谓组件render函数的运行

```js
shouldComponentUpdate(nextProps, nextState) {
  if (nextProps.content !== this.props.content) {
    return true
  } else {
    return false
  }
}
```

2. 
在 constructor中绑定，作用域的绑定只会执行一次，避免子组件的无谓渲染

```js
this.handleClick = this.hanldeClick.bind(this)
```

3. setState是异步的，可以将多次数据改变结合成一次来做，这样减低虚拟DOM的比对频率

4. 虚拟DOM，同层比对，还有key值


### redux

![如图](/images/redux.png)

![redux](https://camo.githubusercontent.com/5aba89b6daab934631adffc1f301d17bb273268b/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6d656469612d702e736c69642e65732f75706c6f6164732f3336343831322f696d616765732f323438343535322f415243482d5265647578322d7265616c2e676966)

state(状态)---> 状态存在于单一的对象中

action ---> 就是view发出的通知，表示state应该要发生改变了
    描述当前发生的事情，改变state的唯一方法，就是使用action
    它会运输数据到store

store --> 存储数据的公共区域，整个应用只能有一个store

reducer ---> store收到action后，必须给出一个新的state，这样view才会发生变化，这种state的计算过程就是reducer

react components --> 组件

action creators --> 获取数据的这句话，也就是说发出的通知
