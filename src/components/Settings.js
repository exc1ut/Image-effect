import React,{Component} from 'react';
import ReactDom from 'react-dom';

import Inputs from './Inputs';

class Settings extends React.Component {
    render(){
    
        return(
            
            <div>
            <Inputs 
                id="Hue" 
                name="Hue"
                val = {this.props.hue}
                onin = {this.props.changeHue}
                
            />
        
            <Inputs 
                id="Grayscale" 
                name="Grayscale"
                val = {this.props.grayscale}
                onin = {this.props.changeGrayscale}
                
            />
            <Inputs 
                id="Blur" 
                name="Blur"
                val = {this.props.blur}
                onin = {this.props.changeBlur}
                
            />
            <Inputs 
                id="Brightness" 
                name="Brightness"
                val = {this.props.brightness}
                onin = {this.props.changeBrightness}
                
            />
            <Inputs 
                id="Invert" 
                name="Invert"
                val = {this.props.invert}
                onin = {this.props.changeInvert}
                
            />
            <Inputs 
                id="Opacity" 
                name="Opacity"
                val = {this.props.opacity}
                onin = {this.props.changeOpacity}
                
            />
            <Inputs 
                id="Sepia" 
                name="Sepia"
                val = {this.props.sepia}
                onin = {this.props.changeSepia}
                
            />
            <div className="button">
            <a>
            <span 
            className="Clear" 
            onClick={this.props.Clear}
            >
            Clear
            </span>
            </a>
            
            </div>
            </div>
            )
        ;
    }
}


export default Settings;