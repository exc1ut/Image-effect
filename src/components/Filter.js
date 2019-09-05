import React,{Component} from 'react';
import ReactDom from 'react-dom';


class Filter extends React.Component {
    render(){
    
        return(
            
            <div className="gradient-border filter flex">
                <div className="item" onClick={this.props.brannam}>
                    <img
                            
                        className="brannam" src="https://newevolutiondesigns.com/images/freebies/4k-wallpaper-3.jpg" />
                    <h1 className="filterName">Brannam</h1>
                </div>
                <div className="item" onClick={this.props.inkwell}>
                    
                    <img
                            
                        className="Inkwell" src="https://newevolutiondesigns.com/images/freebies/4k-wallpaper-3.jpg" />
                    <h1 className="filterName">Inkwell</h1>
                </div>
                <div className="item" onClick={this.props.lofi}>
                    <img
                            
                        className="Lofi" src="https://newevolutiondesigns.com/images/freebies/4k-wallpaper-3.jpg" />
                    
                    <h1 className="filterName">Lofi</h1>
                </div>
                <div className="item" onClick={this.props.reyes}>
                    
                    <img
                            
                        className="Reyes" src="https://newevolutiondesigns.com/images/freebies/4k-wallpaper-3.jpg" />
                    <h1 className="filterName">Reyes</h1>
                </div> 
            </div>
            )
        ;
    }
}


export default Filter;