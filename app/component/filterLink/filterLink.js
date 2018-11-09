import React from "react";
import {store} from "../../appState";

export class FilterLink extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        if(this.props.currentVisibility === this.props.filter){
            return <span>{this.props.displayFilterName}</span>
        }
        return <a href="#" onClick={(e)=>{
            e.preventDefault();
            store.dispatch({type:"SET_VISIBILITY_FILTER", filter: this.props.filter})
        }}>
            {this.props.displayFilterName}
        </a>
    }
}