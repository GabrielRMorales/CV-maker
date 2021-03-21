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
        // this.state={
        //     generalInfo: {},
        //     educationXP: {},
        //     workXP: [],
        //     generalInfoState: false,
        //     educationXPState: false,
        //     workXPState: false
        // }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleSubmit(e, data){
        e.preventDefault();
        this.props.dispatch(addToCV(data, e.target.id));
    }

    handleClick(e){
        console.log("yo");
        this.props.dispatch(editCV(e.target.id));
    }
    
    handleChange(e, element){
     this.props.dispatch(updateCV(element, e.target.name, e.target.value));
    }

    render(){
        return (<main><section className={this.props.generalInfoState ? "preview-container" : "form-container"}>
        {this.props.generalInfoState ? <button id="generalInfoState" className="edit" onClick={this.handleClick} >Edit</button> : null }
        {    this.props.generalInfoState ? <GeneralPreview generalInfo={this.props.generalInfo} /> :
            < GeneralInfoForm formData={this.props.generalInfo} onChange={this.handleChange} generalInfo={this.props.generalInfo} handleSubmit={this.handleSubmit}/>  }
        </section>
        {/*<section>
            {this.props.educationXPState ? <button id="educationXPState" onClick={this.handleClick} >Edit</button> : null}
            {this.props.educationXPState ? <EducationPreview educationXP={this.props.educationXP} />:
                < EducationForm formData={this.props.educationXP} onChange={this.handleChange} educationXP={this.props.educationXP}  handleSubmit={this.handleSubmit} /> }
        </section>
        <section>
            {this.props.workXPState ? <button id="workXPState" onClick={this.handleClick} >Edit</button> : null}
            {this.props.workXPState ? <WorkPreview workXP={this.props.workXP} />:
            <WorkForm handleSubmit={this.handleSubmit} />}
        </section>*/}
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

export default connect(mapStateToProps, null)(CVForm);
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