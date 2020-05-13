import React from 'react'
import RouteContext from './context'
export default class Link extends React.Component{
    static contextType = RouteContext
    render(){
        console.log(this.props);
        console.log(this.context);
        return (
            //只适用hash路由
            // <a href={`#${this.props.to}`}>{ this.props.children }</a>
            <a onClick={()=>this.context.history.push(this.props.to)}>{ this.props.children }</a>

        )
    }
}