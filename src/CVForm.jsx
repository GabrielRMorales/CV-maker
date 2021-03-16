import {React, Component} from "react";
import GeneralInfoForm from "./GeneralInfoForm";
import GeneralPreview from "./GeneralPreview";
import EducationForm from "./EducationForm";
import EducationPreview from "./EducationPreview";

class CVForm extends Component {
    constructor(props){
        super(props);
        this.state={
            generalInfo: {name: "", email: "", phone: ""},
            educationXP: {},
            workXP: [],
            generalInfoState: false,
            educationXPState: false,
            workXPState: false
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleClick=this.handleClick.bind(this);
        this.handleChange =this.handleChange.bind(this);
    }
    
    handleSubmit(e, data){
        e.preventDefault();
        this.setState((prevState)=>({
            [e.target.id]: data,
           [`${e.target.id}State`]: !prevState[`${e.target.id}State`]
        }), function(){
            console.log(this.state);
        });
    }

    handleClick(e){
        this.setState((prevState)=>({
            [e.target.id]: !prevState[e.target.id]
        }), function(){
            console.log(this.state);
        });
    }
    
    handleChange(e, element){
        let newState = Object.assign({}, this.state.element, {[e.target.name]: e.target.value});
        this.setState({ [element]: newState });
    }

    render(){
        return (<main><section>
        {this.state.generalInfoState ? <button id="generalInfoState" onClick={this.handleClick} >Edit</button> : null}<br/>
        {    this.state.generalInfoState ? <GeneralPreview generalInfo={this.state.generalInfo} /> :
            < GeneralInfoForm formData={this.state.generalInfo} onChange={this.handleChange} generalInfo={this.state.generalInfo} handleSubmit={this.handleSubmit}/>  }
        </section>
        <section>
            {this.state.educationXPState ? <button id="educationXPState" onClick={this.handleClick} >Edit</button> : null}<br />
            {this.state.educationXPState ? <EducationPreview educationXP={this.state.educationXP} />:
                < EducationForm formData={this.state.educationXP} onChange={this.handleChange} educationXP={this.state.educationXP}  handleSubmit={this.handleSubmit} /> }
        </section>
        </main>);
    }
}

export default CVForm;
//these can each be stateless functional components, pass down a submit function to save their data into state upon "Add"
//general info form (name, email, phone)
//save in state as generalInfo: {name, email, phone}
//educational xp form(school, major, dates)
//save in state as educationalXP={school, major, dates: {start, end}}
//work xp form (company name, position, dates)
//save in state as workXP = [{company, position, dates: {start, end}}]

//hitting mainForm submit button 
//needs edit and submit button