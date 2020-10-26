import React, { Component } from 'react';
import './stepper-bar.css';
export default class StepperBar extends Component {
    render(){
        console.log(this.props.currentStep);
        let s1classes = "stepper-icon "; 
        s1classes = s1classes.concat(this.props.currentStep >= 1 ?"stepper-step-active":"stepper-step-inactive");
        let s1descrclasses = "stepper-desc ";
        s1descrclasses = s1descrclasses.concat(this.props.currentStep >= 1 ?"stepper-desc-active":"stepper-desc-inactive")

        let s2classes = "stepper-icon "; 
        s2classes = s2classes.concat(this.props.currentStep >= 2 ?"stepper-step-active":"stepper-step-inactive");
        let s2descrclasses = "stepper-desc ";
        s2descrclasses = s2descrclasses.concat(this.props.currentStep >= 2 ?"stepper-desc-active":"stepper-desc-inactive");

        let s3classes = "stepper-icon "; 
        s3classes = s3classes.concat(this.props.currentStep >= 3 ?"stepper-step-active":"stepper-step-inactive");
        let s3descrclasses = "stepper-desc ";
        s3descrclasses = s3descrclasses.concat(this.props.currentStep >= 3 ?"stepper-desc-active":"stepper-desc-inactive");
        
        return(<div className="stepper-component" >
            <div className="stepper-box">
                <div id="icon-step1" 
                    className={s1classes}></div>
                <div className={s1descrclasses}>ingresar rut</div>
            </div>  
            <div className="stepper-separator"></div>          
            <div id="icon-step2" className="stepper-box">
                <div className={s2classes}></div>
                <div className={s2descrclasses}>código de validación</div>
            </div>            
            <div className="stepper-separator"></div>          
            <div className="stepper-box">
                <div id="icon-step3" className={s3classes}></div>
                <div className={s3descrclasses}>seleccionar cuotas</div>
            </div>            
        </div>);
    }
}