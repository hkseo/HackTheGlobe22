import React, {Component} from 'react';

import Input from '../components/Input';
import Button from '../components/Button'

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        name: '',
        resource: '',
        quantity: '',
        latitude: '',
        longitude: ''
      },

      //quantityOptions: ['Male', 'Female', 'Others'],
      //skillOptions: ['Programming', 'Development', 'Design', 'Testing']

    }
    //this.handleQuantity = this.handleQuantity.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  /* This lifecycle hook gets executed when the component mounts */
/*
  handleQuantity(e) {
       let value = e.target.value;
   this.setState( prevState => ({ newUser :
        {...prevState.newUser, resource: value
        }
      }), () => console.log(this.state.newUser))
  }
*/
  handleInput(e) {
       let value = e.target.value;
       let name = e.target.name;
   this.setState( prevState => ({ newUser :
        {...prevState.newUser, [name]: value
        }
      }), () => console.log(this.state.newUser))
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newUser;
    var putdata = {"@odata.type" : "CDataAPI.Resources",
      "Latitude": userData.latitude,
      "Longitude": userData.longitude,
      "Name": userData.name,
      "Quantity": userData.quantity,
      "Resource": userData.resource};

    fetch("http://localhost:8153/api.rsc/Resources?@authtoken=4w3O7q3b7E0s9d8E9f0q",{
        method: "POST",
        mode: "cors",
        body: JSON.stringify(putdata),
        credentials: "include",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
       }).then(response => {
        response.json().then(data =>{
          console.log("Successful" + data);
        })
      })
  }

  handleClearForm(e) {

      e.preventDefault();
      this.setState({
        newUser: {
          name: '',
          resource: '',
          quantity: '',
          latitude: '',
          longitude: ''
        },
      })
  }

  render() {
    return (

        <form className="container-fluid" onSubmit={this.handleFormSubmit}>

            <Input inputType={'text'}
                   title= {'Full Name'}
                   name= {'name'}
                   value={this.state.newUser.name}
                   placeholder = {'Enter your name'}
                   handleChange = {this.handleInput}

                   /> {/* Name of the user */}

           <Input inputType={'text'}
                  title= {'Resource Type'}
                  name= {'resource'}
                  value={this.state.newUser.resource}
                  placeholder = {'Enter your desired resource type'}
                  handleChange = {this.handleInput}

                  /> {/* Desired resource type */}

          <Input inputType={'number'}
                name={'quantity'}
                title= {'Quantity'}
                value={this.state.newUser.quantity}
                placeholder = {'Enter your desired amount'}
                handleChange={this.handleInput} /> {/* quantity */}

          <Input inputType={'number'}
                name={'latitude'}
                title= {'Latitude'}
                value={this.state.newUser.latitude}
                placeholder = {'Enter your current latitude'}
                handleChange={this.handleInput} /> {/* latitude */}

          <Input inputType={'number'}
                name={'longitude'}
                title= {'Longitude'}
                value={this.state.newUser.longitude}
                placeholder = {'Enter your current longitude'}
                handleChange={this.handleInput} /> {/* longitude */}

          <Button
              action = {this.handleFormSubmit}
              type = {'primary'}
              title = {'Submit'}
            style={buttonStyle}
          /> { /*Submit */ }

          <Button
            action = {this.handleClearForm}
            type = {'secondary'}
            title = {'Clear'}
            style={buttonStyle}
          /> {/* Clear the form */}

        </form>

    );
  }
}

const buttonStyle = {
  margin : '10px 10px 10px 10px'
}

export default FormContainer;
