import React, {Component} from 'react';

import Input from './Input.jsx';
import Button2 from './Button.jsx'
import { Modal, Glyphicon, Button } from 'react-bootstrap'

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        name: '',
        resource: '',
        quantity: '',
        latitude: '',
        longitude: '',
        showModal: this.props.showModal
      },

      //quantityOptions: ['Male', 'Female', 'Others'],
      //skillOptions: ['Programming', 'Development', 'Design', 'Testing']

      }
      this.show = this.show.bind(this);
      this.close = this.close.bind(this);

      
    //this.handleQuantity = this.handleQuantity.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
    }

    show() {
        this.setState({
            showModal: true
        })
    }
    close() {
        this.setState(
            { showModal: false }
        )
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
        this.setState({name:value})
        this.setState(prevState => ({
            newUser: value
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
        <div>
            <Button onClick={this.show}><Glyphicon glyph="cog" /></Button>
            <Modal show={this.state.showModal} onHide={this.close}>
                <Modal.Header closeButton>
                    <Modal.Title>Resource Request Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="container-fluid" onSubmit={this.handleFormSubmit}>

                        <Input inputType={'text'}
                            title={'Full Name'}
                            name={'name'}
                            value={this.state.newUser.name}
                            placeholder={'Enter your name'}
                            handleChange={this.handleInput}

                        /> {/* Name of the user */}

                        <Input inputType={'text'}
                            title={'Resource Type'}
                            name={'resource'}
                            value={this.state.newUser.resource}
                            placeholder={'Enter your desired resource type'}
                            handleChange={this.handleInput}

                        /> {/* Desired resource type */}

                        <Input inputType={'number'}
                            name={'quantity'}
                            title={'Quantity'}
                            value={this.state.newUser.quantity}
                            placeholder={'Enter your desired amount'}
                            handleChange={this.handleInput} /> {/* quantity */}

                        <Input inputType={'number'}
                            name={'latitude'}
                            title={'Latitude'}
                            value={this.state.newUser.latitude}
                            placeholder={'Enter your current latitude'}
                            handleChange={this.handleInput} /> {/* latitude */}

                        <Input inputType={'number'}
                            name={'longitude'}
                            title={'Longitude'}
                            value={this.state.newUser.longitude}
                            placeholder={'Enter your current longitude'}
                            handleChange={this.handleInput} /> {/* longitude */}

                        <Button2
                            action={this.handleFormSubmit}
                            type={'primary'}
                            title={'Submit'}
                            style={buttonStyle}
                        /> { /*Submit */}

                        <Button2
                            action={this.handleClearForm}
                            type={'secondary'}
                            title={'Clear'}
                            style={buttonStyle}
                        /> {/* Clear the form */}

                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.close}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>

    );
  }
}

const buttonStyle = {
  margin : '10px 10px 10px 10px'
}

export default FormContainer;
