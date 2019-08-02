import React from 'react'

export default React.createContext()   
//单独放在一个文件内抛出，这样引用的是一个context

//Context.Provider  提供者   value来传递数据
//Context.Consumer  消费者   只能接受一个回调函数  回调函数的参数就是value