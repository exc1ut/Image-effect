import React,{Component} from 'react';
import ReactDom from 'react-dom';

class Inputs extends React.Component {
     
        
    render(){
    
        
        
        return(
            
            
            <div>
            <p>{this.props.id}</p>
            <i>{this.props.val}</i>
            <input 
            type="range" 
            id={this.props.id} 
            name={this.props.name}
            min="0" 
            max="100"
            onInput={this.props.onin}
            value={this.props.val}
            />
            
            </div>
            )
        ;
    }
}


export default Inputs;