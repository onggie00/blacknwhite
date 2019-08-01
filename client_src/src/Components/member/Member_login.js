import React, { Component } from "react";
import {
  MDBRow,
  MDBContainer,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBIcon,
  MDBModalBody,
  MDBModalFooter,
  MDBNavLink
} from "mdbreact";
import Axios from "axios";
import md5 from "md5";

export class Member_login extends Component {
  constructor(props) {
    super(props);
    this.notelp = React.createRef();
    this.password = React.createRef();
    this.state = {
      memberData: []
    };
  }

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  getMemberData() {
    Axios.get("http://localhost:3000/api/member")
      .then(response => {
        this.setState(
          {
            memberData: response.data
          },
          () => {
            //console.log(this.state);
          }
        );
      })
      .catch(err => console.log(err));
  }

  onSubmit(e) {
    const notelp = this.notelp.current.state.innerValue;
    const password = md5(this.password.current.state.innerValue);

    /*this.state.memberData.map(memberItem => (
      if (memberItem.notelp === ) {
        
      }
    ))
    this.checkData(data_member);
    //console.log(data_member);*/
    e.preventDefault();
  }

  render() {
    const { values, handleChange } = this.props;
    return (
      <div>
        <MDBModalBody>
          <MDBCard>
            <MDBCardBody>
              <MDBCardHeader className="form-header heavy-rain-gradient rounded">
                <h3 className="my-3 text-center">
                  <MDBIcon icon="lock" /> Login Member
                </h3>
              </MDBCardHeader>
              <form onSubmit={this.onSubmit.bind(this)}>
                <div className="grey-text">
                  <MDBInput
                    label="Nomor Telepon Anda"
                    icon="mobile"
                    group
                    type="text"
                    validate
                    error=""
                    success="Valid"
                  />
                  <MDBInput
                    label="Masukkan Password Anda"
                    icon="key"
                    group
                    type="password"
                    validate
                  />
                </div>

                <div className="text-center mt-4">
                  <MDBBtn color="light-blue" className="mb-3" type="submit">
                    Login
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBModalBody>
        <MDBModalFooter>
          <i>Belum Punya Akun sendiri? </i>
          <MDBNavLink color="secondary" to="/register">
            Daftar
          </MDBNavLink>
        </MDBModalFooter>
      </div>
    );
  }
}

export default Member_login;
