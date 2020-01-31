import React, { Component } from "react";
import {
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBModalBody,
  MDBNotification
} from "mdbreact";
import Axios from "axios";
import qs from "qs";
import ls from "local-storage";
//import ls from "local-storage";

export class Edit_profile extends Component {
  constructor(props) {
    super(props);
    this.notelp = React.createRef();
    this.password = React.createRef();
    this.nama_lengkap = React.createRef();
    this.alamat = React.createRef();
    this.state = {
      isLogin: this.props.isLogin,
      userLogin: this.props.userLogin,
      isCheck: "",
      isCheckMsg: "",
      nama_lengkap: this.props.nama_lengkap,
      notelp: this.props.notelp,
      alamat: this.props.alamat
    };
  }

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentDidMount() {
    if (ls.get("isLogin") !== null) {
      this.setState({
        isLogin: ls.get("isLogin"),
        userLogin: ls.get("userLogin")
      });
    }
  }

  EditBiodata = data_profile => {
    Axios.post(
      "https://api.bnwbarbershop.com/api/member/edit_profile",
      qs.stringify(data_profile)
    )
      .then(response => {
        //this.props.history.goBack();
        if (response.data.status === 1) {
          this.setState({
            isCheck: response.data.status,
            isCheckMsg: response.data.message,
            userLogin: response.data.data
          });
          ls.set("userLogin", this.state.userLogin);
          console.log("Update Profile Sukses");
        } else {
          console.log("Update Profile Gagal");
          this.setState({
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
    e.preventDefault();
    const data_profile = {
      notelp: this.notelp.current.state.innerValue,
      password: this.password.current.state.innerValue,
      alamat: this.alamat.current.state.innerValue,
      nama_lengkap: this.nama_lengkap.current.state.innerValue,
      id: this.props.userLogin.id
    };
    this.setState({
      isCheck: "",
      isCheckMsg: ""
    });
    this.EditBiodata(data_profile);

    //console.log(data_member);*/
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
                  title="Update Profile Gagal"
                  message={this.state.isCheckMsg}
                  text="1 detik yang lalu"
                  className="text-black"
                />
              )}
              {this.state.isCheck === 1 && (
                <MDBNotification
                  show
                  fade
                  icon="exclamation"
                  iconClassName="green-text"
                  title={this.state.isCheckMsg}
                  message="Silahkan Refresh Halaman untuk Login Ulang Otomatis"
                  text="1 detik yang lalu"
                  className="text-black"
                />
              )}

              <form onSubmit={this.onSubmit.bind(this)}>
                <div>
                  <MDBInput
                    label="Nomor Telepon Anda"
                    group
                    type="text"
                    validate
                    error=""
                    success=""
                    ref={this.notelp}
                    className="grey-text"
                    name="notelp"
                    value={this.state.notelp}
                    onChange={this.handleInput}
                  />
                  <MDBInput
                    label="Nama Lengkap Anda"
                    group
                    type="text"
                    validate
                    error=""
                    success=""
                    className="grey-text"
                    name="nama_lengkap"
                    ref={this.nama_lengkap}
                    value={this.state.nama_lengkap}
                    onChange={this.handleInput}
                  />
                  <MDBInput
                    label="Alamat Anda"
                    group
                    type="textarea"
                    validate
                    name="alamat"
                    className="grey-text"
                    ref={this.alamat}
                    value={this.state.alamat}
                    onChange={this.handleInput}
                  />
                  <MDBInput
                    label="Ubah Password"
                    group
                    type="password"
                    validate
                    className="grey-text"
                    ref={this.password}
                    onChange={this.handleInput}
                  />
                </div>

                <div className="text-center mt-4">
                  <MDBBtn
                    color="danger"
                    className="mb-3"
                    onClick={this.props.toggleEdit}
                  >
                    Batal
                  </MDBBtn>
                  <MDBBtn color="light-blue" className="mb-3" type="submit">
                    Update Profile
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBModalBody>
      </div>
    );
  }
}

export default Edit_profile;
