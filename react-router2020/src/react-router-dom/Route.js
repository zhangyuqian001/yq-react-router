import React from 'react'
import RouterContext from './context'
import { pathToRegexp } from 'path-to-regexp'
export default class Route extends React.Component{
    static contextType = RouterContext;
    render(){
        let { pathname } = this.context.location;
        let { path = '/',component:Component,exact=false} = this.props;
        let paramNames = [];
        let regxp = pathToRegexp(path,paramNames,{end:exact});
        let result = pathname.match(regxp);
        let props = {
            location:this.context.location
        }
        if (result) {
            return <Component {...props}/>
        }
        return null
    }
}