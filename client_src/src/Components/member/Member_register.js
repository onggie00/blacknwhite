import React, { Component } from "react";
import {
  MDBRow,
  MDBContainer,
  MDBCol,
  MDBIcon,
  MDBView,
  MDBMask,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBNotification
} from "mdbreact";
import md5 from "md5";
import Axios from "axios";

export class Member_register extends Component {
  constructor(props) {
    super(props);
    this.nama_lengkap = React.createRef();
    this.notelp = React.createRef();
    this.alamat = React.createRef();
    this.password = React.createRef();
    this.state = {
      isRegistered: 0
    };
  }
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  checkData = data_member => {
    Axios.get("http://localhost:3000/api/member/findOne", {
      params: {
        "filter[where][notelp]": data_member.notelp
      }
    })
      .then(response => {
        if (response.status === 200) {
          this.setState({
            isRegistered: 1
          });
        }
      })
      .catch(err => {
        //handle error
        if (err.response.status === 404) {
          this.setState({
            isRegistered: 2
          });
          this.props.registerData(data_member);
        }
      });
  };

  onSubmit(e) {
    const data_member = {
      nama_lengkap: this.nama_lengkap.current.state.innerValue,
      notelp: this.notelp.current.state.innerValue,
      alamat: this.alamat.current.state.innerValue,
      password: md5(this.password.current.state.innerValue),
      created_at: new Date(),
      status: "0"
    };
    this.checkData(data_member);
    //console.log(data_member);
    e.preventDefault();
  }

  render() {
    //const { values, handleChange, registerData } = this.props;
    return (
      <div name="Form_Registrasi">
        <MDBContainer fluid>
          <MDBRow center className="register-left-bg">
            <MDBCol lg="8" md="7" sm="12" className="register-left">
              <MDBContainer fluid>
                <MDBView waves className="bg-register">
                  <MDBMask overlay="black-slight" className="flex-center">
                    <MDBRow middle className="register-text">
                      <MDBCol lg="8" md="6" sm="12" />
                    </MDBRow>
                  </MDBMask>
                </MDBView>
              </MDBContainer>
            </MDBCol>
            <MDBCol lg="4" md="5" sm="12">
              <MDBContainer className="register-form">
                <MDBRow>
                  <MDBCol size="12">
                    {this.state.isRegistered === 1 && (
                      <MDBNotification
                        show
                        fade
                        icon="exclamation"
                        iconClassName="red-text"
                        title="Notifikasi"
                        message="Mohon Maaf Nomor Tersebut Sudah Terdaftar."
                        text="1 detik yang lalu"
                      />
                    )}
                    {this.state.isRegistered === 2 && (
                      <MDBNotification
                        show
                        fade
                        icon="check-circle"
                        iconClassName="green-text"
                        title="Notifikasi"
                        message="Pendaftaran Berhasil."
                        text="1 detik yang lalu"
                      />
                    )}
                    <MDBCard>
                      <MDBCardBody>
                        <form onSubmit={this.onSubmit.bind(this)}>
                          <p className="h5 text-center mb-4">
                            Form Pendaftaran Member
                          </p>
                          <div className="grey-text">
                            <MDBInput
                              label="Nama Lengkap"
                              icon="user"
                              group
                              type="text"
                              validate
                              success="Valid"
                              required
                              className="form-control"
                              ref={this.nama_lengkap}
                            />
                            <MDBInput
                              label="Nomor Telepon"
                              icon="mobile"
                              group
                              type="text"
                              validate
                              success="Valid"
                              required
                              className="form-control"
                              ref={this.notelp}
                            />
                            <MDBInput
                              label="Alamat"
                              icon="home"
                              group
                              type="text"
                              validate
                              success="Valid"
                              required
                              className="form-control"
                              ref={this.alamat}
                            />
                            <MDBInput
                              label="Password"
                              icon="lock"
                              group
                              type="password"
                              validate
                              success="Valid"
                              required
                              className="form-control"
                              ref={this.password}
                            />
                          </div>
                          <div className="text-center">
                            <MDBBtn type="submit" color="primary">
                              Daftar
                            </MDBBtn>
                            <MDBBtn
                              onClick={this.props.backtoHomepage}
                              type="button"
                              color="secondary"
                            >
                              Kembali Ke halaman Awal
                            </MDBBtn>
                          </div>
                        </form>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default Member_register;
