import React, { Component } from "react";
import {
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBIcon,
  MDBModalBody,
  MDBModalFooter,
  MDBNavLink,
  MDBNotification
} from "mdbreact";
import Axios from "axios";
import qs from "qs";
//import ls from "local-storage";

export class Member_login extends Component {
  constructor(props) {
    super(props);
    this.notelp = React.createRef();
    this.password = React.createRef();
    this.state = {
      memberData: [],
      isLogin: this.props.isLogin,
      userLogin: this.props.userLogin,
      isCheck: "",
      isCheckMsg: "",
      isBlocked: ""
    };
  }

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  getMemberData() {
    Axios.get("http://api.bnwbarbershop.com/api/member/get_member")
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

  LoginData = data_login => {
    Axios.post(
      "https://api.bnwbarbershop.com/api/member/login",
      qs.stringify(data_login)
    )
      .then(response => {
        //this.props.history.goBack();
        if (response.data.status === 1) {
          this.setState({
            isLogin: true,
            userLogin: response.data.data
          });
          const data_member = {
            isLogin: this.state.isLogin,
            userLogin: this.state.userLogin
          };
          console.log(response.data.data.status_block);
          if (response.data.data.status_block === "1") {
            console.log("Login Gagal");
            this.setState({
              isBlocked: response.data.data.status_block
            });
          } else {
            console.log("Login Sukses");
            this.props.HandleLoginChange(data_member);
            this.props.toggle();
          }
        } else {
          console.log("Login Gagal");
          this.setState({
            isLogin: false,
            isCheck: response.data.status,
            isCheckMsg: response.data.message
          });
          console.log(response);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  onSubmit(e) {
    const data_login = {
      notelp: this.notelp.current.state.innerValue,
      password: this.password.current.state.innerValue
    };
    this.setState({
      isCheck: 1,
      isCheckMsg: ""
    });
    this.LoginData(data_login);

    //console.log(data_member);*/
    e.preventDefault();
  }

  render() {
    //const { values, handleChange } = this.props;
    return (
      <div>
        <MDBModalBody>
          <MDBCard>
            <MDBCardBody>
              {this.state.isCheck === 0 && (
                <MDBNotification
                  show
                  fade
                  icon="exclamation"
                  iconClassName="red-text"
                  title="Login Gagal"
                  message={this.state.isCheckMsg}
                  text="1 detik yang lalu"
                  className="text-black"
                />
              )}
              {this.state.isCheck === 1 && this.state.isBlocked === "1" && (
                <MDBNotification
                  show
                  fade
                  icon="exclamation"
                  iconClassName="red-text"
                  title="Login Gagal"
                  message="Akun Member di blokir, silahkan menghubungi admin barbershop"
                  text="1 detik yang lalu"
                  className="text-black"
                />
              )}
              <MDBCardHeader className="form-header heavy-rain-gradient rounded">
                <h3 className="my-3 text-center login-title">
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
                    ref={this.notelp}
                  />
                  <MDBInput
                    label="Masukkan Password Anda"
                    icon="key"
                    group
                    type="password"
                    validate
                    ref={this.password}
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
