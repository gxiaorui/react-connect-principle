import React, { Component } from 'react'
import Context from './context'
export default class sun extends Component {
    render() {
        return (
            <div>
                <Context.Consumer>
                    {
                        (value)=>{
                            return <div>{value.title}</div>
                        }
                    }
                </Context.Consumer>
            </div>
        )
    }
}
