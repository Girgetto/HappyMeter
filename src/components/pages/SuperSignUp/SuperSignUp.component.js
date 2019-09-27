import React from 'react';
import { Link } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import '../test.css';


const SuperSignUp = () => (
  <div className="centerer">
    <MDBContainer >
      <MDBRow>
        <MDBCol md="3" />
        <MDBCol md="6">
          <form className="test">
            <p className="h4 text-center mb-4 test grande">Sign up</p>
            <label htmlFor="defaultFormLoginEmailEx" className="gray-text test">
              Your name
            </label>
            <input
              type="email"
              id="defaultFormLoginEmailEx"
              className="form-control"
            />
            <br />
            <label htmlFor="defaultFormLoginEmailEx" className="gray-text test">
              Your email
            </label>
            <input
              type="email"
              id="defaultFormLoginEmailEx"
              className="form-control"
            />
            <br />
            <label htmlFor="defaultFormLoginEmailEx" className="gray-text test">
              Confirm your email
            </label>
            <input
              type="email"
              id="defaultFormLoginEmailEx"
              className="form-control"
            />
            <br />
            <label htmlFor="defaultFormLoginPasswordEx" className="gray-text test">
              Your password
            </label>
            <input
              type="password"
              id="defaultFormLoginPasswordEx"
              className="form-control"
            />
            <div className="text-center mt-4">
              <button className="buttonLogin">Register</button>
            </div>
            <div className="mini text-center mt-4 test">
              <Link className="test" to="/">Already registered? <span className="bold">Log in!</span></Link>
            </div>
          </form>
        </MDBCol>
        <MDBCol md="3" />
      </MDBRow>
    </MDBContainer>
  </div>

);

export default SuperSignUp;
