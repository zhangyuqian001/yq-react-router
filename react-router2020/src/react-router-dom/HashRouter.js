import React from 'react'
import Context from './context'
export default class HashRouter extends React.Component{
    state = {
        location:{pathname:window.location.hash.slice(1),state:null}
    }
    locationState = null;
    componentDidMount(){
        window.location.hash = window.location.hash || '/'
        window.addEventListener('hashchage',()=>{
            this.setState({
                location:{
                    ...this.state.location,
                    pathname:window.location.hash.slice(1),
                    state:this.locationState
                }
            })
        })
    }
    render(){
        let __self = this;
        let value = {
            location:this.state.location,
            history:{
                push(to){//定义一个history对象，有一个push方法用来跳转
                    if (typeof to === 'object') {
                        let { pathname,state } = to;
                        __self.locationState = state;
                        window.location.hash = pathname;
                    }else{
                        __self.locationState = null;
                        window.location.hash = to;
                    }
                }
            }
        }
        return (
            <Context.Provider value={value}>
                {this.props.children}
            </Context.Provider>
        )
    }
}