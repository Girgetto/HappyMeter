import React, { useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

const SuperLogin = ({ login }) => {
  const [state, setstate] = useState('');

  return (
    <MDBContainer style={{ margin: 'auto' }}>
      <MDBRow>
        <MDBCol md="6">
          <form onSubmit={e => e.preventDefault()}>
            <p className="h4 text-center mb-4">Sign in</p>
            <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
              Your email
            </label>
            <input
              type="email"
              id="defaultFormLoginEmailEx"
              className="form-control"
              onChange={e => setstate(e.target.value)}
            />
            <br />
            <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
              Your password
            </label>
            <input
              type="password"
              id="defaultFormLoginPasswordEx"
              className="form-control"
            />
            <div className="text-center mt-4">
              <MDBBtn color="indigo" type="submit" onClick={() => login({ email: state })}>Login</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default SuperLogin;
