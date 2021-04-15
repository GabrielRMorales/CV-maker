import {React, Component} from "react";
import GeneralInfoForm from "./GeneralInfoForm";
import GeneralPreview from "./GeneralPreview";
import EducationForm from "./EducationForm";
import EducationPreview from "./EducationPreview";
import WorkForm from "./WorkForm";
import WorkPreview from "./WorkPreview";
import {connect} from "react-redux";
import {addToCV, editCV, updateCV } from "./ActionCreators";

class CVForm extends Component {
    constructor(props){
        super(props);
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleSubmit(e, data){
        e.preventDefault();
        this.props.addToCV(data, e.target.id);
        //this.props.dispatch(addToCV(data, e.target.id));
        //the above works too if you don't pass anything through mapDispatchToProps in the connect. Both will work, as long as you tweak the connect to either null or the functions you want
    
    }

    handleClick(e){
        this.props.editCV(e.target.id);
        //this.props.dispatch(editCV(e.target.id));
        //the above works too if you don't pass anything through mapDispatchToProps in the connect. Both will work, as long as you tweak the connect to either null or the functions you want
    } 
    
    handleChange(e, element){
        this.props.updateCV(element, e.target.name, e.target.value);
     //this.props.dispatch(updateCV(element, e.target.name, e.target.value));
       //the above works too if you don't pass anything through mapDispatchToProps in the connect. Both will work, as long as you tweak the connect to either null or the functions you want
    }

    render(){
        return (<main>
        <section className={this.props.generalInfoState ? "preview-container" : "form-container"}>
        {this.props.generalInfoState ? <button id="generalInfoState" className="edit" onClick={this.handleClick} >Edit</button> : null }
        {    this.props.generalInfoState ? <GeneralPreview generalInfo={this.props.generalInfo} /> :
            < GeneralInfoForm generalInfo={this.props.generalInfo} handleSubmit={this.handleSubmit}/>  }
        </section>
        <section className={this.props.educationXPState ? "preview-container" : "form-container"}>
            {this.props.educationXPState ? <button id="educationXPState" onClick={this.handleClick} >Edit</button> : null}
            {this.props.educationXPState ? <EducationPreview educationXP={this.props.educationXP} />:
                < EducationForm educationXP={this.props.educationXP}  handleSubmit={this.handleSubmit} /> }
        </section>
        <section className={this.props.workXPState ? "preview-container" : "form-container" }>
            {this.props.workXPState ? <button id="workXPState" onClick={this.handleClick} >Edit</button> : null}
            {this.props.workXPState ? <WorkPreview workXP={this.props.workXP} />:
            <WorkForm handleSubmit={this.handleSubmit} />}
        </section>
        </main>);
    }
}
//const mapDispatchToProps = {addToCV, editCV, updateCV };

function mapStateToProps(reduxState){
    return {
            generalInfo: reduxState.generalInfo,
            educationXP: reduxState.educationXP,
            workXP: reduxState.workXP,
            generalInfoState: reduxState.generalInfoState,
            educationXPState: reduxState.educationXPState,
            workXPState: reduxState.workXPState
    }
}

export default connect(mapStateToProps, {addToCV, editCV, updateCV })(CVForm);
//flows from rootReducer to MapStateToProps
//then to each component
//upon inputs, actionCreators are dispatched
//these change the state in rootReducer

//these can each be stateless functional components, pass down a submit function to save their data into state upon "Add"
//general info form (name, email, phone)
//save in state as generalInfo: {name, email, phone}
//educational xp form(school, major, dates)
//save in state as educationalXP={school, major, dates: {start, end}}
//work xp form (company name, position, dates)
//save in state as workXP = [{company, position, dates: {start, end}}]

//hitting mainForm submit button 
//needs edit and submit button