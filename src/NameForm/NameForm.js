import React, { Component } from 'react';
import "./styles.css";

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactMe: "",
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      howLong: "0-1 year"
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? (target.checked ? "1" : "0") : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    console.log(this.state);
    alert('The Form was submitted, Thank you!');
    event.preventDefault();
    fetch('http://localhost:16000/user', {
      method: 'POST',
      body: JSON.stringify(this.state),
    });
  }

  render() {
    return (


    <div className="wrap-contact100">
      <div className="contact100-form-title bg">
        <span className="contact100-form-title-1">
          Truth Seekers
        </span>

        <span className="contact100-form-title-2">
          Happy Independence Day!!!
        </span>
      </div>

      <form className="contact100-form validate-form" onSubmit={this.handleSubmit}>
        <div className="wrap-input100 validate-input" data-validate="Name is required">
          <span className="label-input100">First Name:</span>
          <input className="input100" type="text" name="firstName" placeholder="Enter first name" required value={this.state.firstName} onChange={this.handleInputChange}/>
          <span className="focus-input100"></span>
        </div>

        <div className="wrap-input100 validate-input" data-validate="Name is required">
          <span className="label-input100">Last Name:</span>
          <input className="input100" type="text" name="lastName" placeholder="Enter last name" required  value={this.state.lastName} onChange={this.handleInputChange}/>
          <span className="focus-input100"></span>
        </div>

        <div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
          <span className="label-input100">Email:</span>
          <input className="input100" type="text" name="email" placeholder="Enter email addess" required  value={this.state.email} onChange={this.handleInputChange}/>
          <span className="focus-input100"></span>
        </div>

        <div className="validate-input" data-validate="Phone is required">
          <span className="label-input100">Phone:</span>
          <input className="input100" type="text" name="phone" placeholder="Enter phone number"   value={this.state.phone} onChange={this.handleInputChange}/>
          <span className="focus-input100"></span>
        </div>

        <hr/>
        <hr/>
        <hr/>
        <br/>

        <div className="wrap-input100 validate-input">
          <span className="label">I have been in the United States :</span>

          <select name="howLong" className="" value={this.state.howLong} onChange={this.handleInputChange} required>
            <option value="0-1 year">0 - 1 year</option>
            <option value="1-3 years">1-3 years</option>
            <option value="3-5 years">3-5 years</option>
            <option value="5+ years">5+ years</option>
            <option value="All my life">All my life</option>
          </select>
          <span className="focus-input100"></span>
        </div>


         <div className="validate-input">
          <span className="label">Can be contacted </span>

          <input type="checkbox" id="interest" name="contactMe" value="contacted" checked={this.state.contactMe === "1" ? true : false} onChange={this.handleInputChange}/>
          <span className="label"> Yes </span>
        </div>





        <div className="container-contact100-form-btn">
          <button className="contact100-form-btn">
            <span>
              Submit
              <i className="fa fa-long-arrow-right m-l-7" aria-hidden="true"></i>
            </span>
          </button>
        </div>
      </form>
    </div>

    );
  }
}

export default NameForm;
