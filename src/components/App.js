import React,{Component} from 'react';
import ReactDom from 'react-dom';

import Settings from './Settings';

import Image from './Image';

import Filter from './Filter'

class App extends React.Component {
    constructor(props) 
        {
        super(props);
        this.state = {
            hue:0,
            vibration:100,
            grayscale:0,
            blur:0,
            brightness:100,
            contrast:100,
            drop_shadow:0,
            invert:0,
            opacity:100,
            sepia:0,
            };
        }
        
        change(selector, data) {
        
        var v = document.getElementById(selector).value;
        var img = document.querySelector('.wallper');
        img.style.filter = 'hue-rotate(' + this.state.hue + 'deg) saturate(' + this.state.vibration + '%) grayscale('+ this.state.grayscale +'%) blur('+ this.state.blur +'px) brightness('+this.state.brightness+'%) contrast('+this.state.contrast+'%) invert('+this.state.invert+'%) opacity('+this.state.opacity+'%) sepia('+this.state.sepia+'%)';
        var a = {};
        a[data] = v;
        this.setState(a);
    }
        clear(){
        this.setState({
            hue:0,
            vibration:100,
            grayscale:0,
            blur:0,
            brightness:100,
            contrast:100,
            drop_shadow:0,
            invert:0,
            opacity:100,
            sepia:0
        });
        var img = document.querySelector('.wallper');
        img.style.filter = 'hue-rotate(0deg) saturate(100%) grayscale(0%) blur(0px) brightness(100%) contrast(100%) invert(0%) opacity(100%) sepia(0%)';
        }
    
        brannam(){
            
            console.log("works")
            this.clear;
            this.setState({
            hue:0,
            vibration:100,
            grayscale:0,
            blur:0,
            brightness:100,
            contrast:140,
            drop_shadow:0,
            invert:0,
            opacity:100,
            sepia:50
        });
            var img = document.querySelector('.wallper');
        img.style.filter = 'hue-rotate(0deg) saturate(100%) grayscale(0%) blur(0px) brightness(100%) contrast(140%) invert(0%) opacity(100%) sepia(50%)';
        }
        inkwell() {
            console.log("works")
            this.clear;
            this.setState({
            hue:0,
            vibration:100,
            grayscale:100,
            blur:0,
            brightness:110,
            contrast:110,
            drop_shadow:0,
            invert:0,
            opacity:100,
            sepia:30
        });
            var img = document.querySelector('.wallper');
        img.style.filter = 'hue-rotate(0deg) saturate(100%) grayscale(100%) blur(0px) brightness(110%) contrast(110%) invert(0%) opacity(100%) sepia(30%)';
            
        }
        lofi(){
            console.log("works")
            this.clear;
            this.setState({
            hue:0,
            vibration:110,
            grayscale:0,
            blur:0,
            brightness:110,
            contrast:150,
            drop_shadow:0,
            invert:0,
            opacity:100,
            sepia:30
        });
            var img = document.querySelector('.wallper');
        img.style.filter = 'hue-rotate(0deg) saturate(110%) grayscale(0%) blur(0px) brightness(110%) contrast(150%) invert(0%) opacity(100%) sepia(30%)';
        
        
        }
        reyes(){
            console.log("works")
            this.clear;
            this.setState({
            hue:0,
            vibration:75,
            grayscale:0,
            blur:0,
            brightness:110,
            contrast:85,
            drop_shadow:0,
            invert:0,
            opacity:100,
            sepia:22
        });
            var img = document.querySelector('.wallper');
        img.style.filter = 'hue-rotate(0deg) saturate(75%) grayscale(0%) blur(0px) brightness(110%) contrast(85%) invert(0%) opacity(100%) sepia(22%)';
        }
           
    
    
    render(){
        return(
            <div>
            <div className="flex">
                <div className="gradient-border setting">
            <Settings
            
            vibration={this.state.vibration}
            hue={this.state.hue}
            grayscale={this.state.grayscale}
            blur={this.state.blur}
            brightness={this.state.brightness}
            contrast={this.state.contrast}
            invert={this.state.invert}
            opacity={this.state.opacity}
            sepia={this.state.sepia}
            
            changeHue={this.change.bind(this,"Hue","hue")}
            changeVibration={this.change.bind(this,"Vibration","vibration")}
            changeGrayscale={this.change.bind(this,"Grayscale","grayscale")}
            changeBlur={this.change.bind(this,"Blur","blur")}
            changeBrightness={this.change.bind(this,"Brightness","brightness")}
            changeContrast={this.change.bind(this,"Contrast","contrast")}
            changeInvert={this.change.bind(this,"Invert","invert")}
            changeOpacity={this.change.bind(this,"Opacity","opacity")}
            changeSepia={this.change.bind(this,"Sepia","sepia")}

            Clear={this.clear.bind(this)}
            />
            </div>
            <Image hue={this.state.hue} />
            
            </div>
            <Filter
                brannam={this.brannam.bind(this)}
                inkwell={this.inkwell.bind(this)}
                lofi={this.lofi.bind(this)}
                reyes={this.reyes.bind(this)}
                
            />
            </div>
            )
        ;
    }
}


export default App;