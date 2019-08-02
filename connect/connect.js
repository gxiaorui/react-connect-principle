import React, { Component } from 'react'
import Context from './context'

let connect =(cbk)=>{
    return (Wrapcomponent)=>{
        return class extends Component{
            render(){
                return (
                    <Context.Consumer>
                        {
                            (val)=>{
                                let res = cbk(val)
                                return <Wrapcomponent {...res}/>
                            }
                        }
                    </Context.Consumer>
                )
            }
        }
    }
}

export default connect