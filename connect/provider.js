import React, { Component } from 'react'
import Context from './context'
class Provider extends Component {
    state={
        title:"哈哈"
    }
    render() {
        let {children} =this.props
        return (
            <div>
                <Context.Provider value={{title:this.state.title}}>  
                    {children}
                </Context.Provider>
            </div>
        )
    }
}
export default Provider