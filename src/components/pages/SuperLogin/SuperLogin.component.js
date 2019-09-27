
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import '../test.css';


const SuperLogin = ({ login }) => {
  const [state, setstate] = useState('');

  return (
    <div className="centerer">
      <MDBContainer >
        <MDBRow>
          <MDBCol md="4" />
          <MDBCol md="4">
            <div className="card">
              <form onSubmit={e => e.preventDefault()} className="test">
                <p className="h4 text-center mb-4 test grande">Sign in</p>
                <label htmlFor="defaultFormLoginEmailEx" className="gray-text test">
              Your email
                </label>
                <input
                  type="email"
                  id="defaultFormLoginEmailEx"
                  className="form-control"
                  onChange={e => setstate(e.target.value)}
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
                  <button onClick={() => login({ email: state })} className="buttonLogin">Login</button>
                </div>
                <div className="mini text-center mt-4 test">
                  <Link className="test" to="/signup">Not registered? <span className="bold">Sign up!</span></Link>
                </div>
              </form>
            </div>
          </MDBCol>
          <MDBCol md="4" />
        </MDBRow>
      </MDBContainer>
    </div>

  );
};

export default SuperLogin;
