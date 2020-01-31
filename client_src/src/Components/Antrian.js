import React, { Component } from "react";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBBtn,
  MDBInput,
  MDBNotification
} from "mdbreact";
import Axios from "axios";
import qs from "qs";
import ls from "local-storage";

export default class Antrian extends Component {
  constructor(props) {
    super(props);
    this.notelp = React.createRef();
    this.nama_lengkap = React.createRef();
    this.style_id = React.createRef();
    this.keterangan = React.createRef();
    this.stylist = React.createRef();
    this.state = {
      memberData: [],
      antriData: [],
      member: "",
      isReserve: 0,
      nama_lengkap: "",
      stylist_id: 0,
      style_id: "",
      keterangan: "",
      isLogin: false,
      userLogin: "",
      ModelRambutData: [],
      CategoryModelData: [],
      StylistData: [],
      isCheckMsg: ""
    };
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentDidMount() {
    //this.getCategoryModelData();
    this.getModelRambutData();
    this.getStylist();
    this.setState({
      isLogin: ls.get("isLogin"),
      userLogin: ls.get("userLogin")
    });
  }

  //get kategori model rambut
  getCategoryModelData() {
    Axios.get(
      "https://api.bnwbarbershop.com/api/category_model/get_category_model"
    )
      .then(response => {
        //console.log(response.data.data);
        this.setState(
          {
            CategoryModelData: response.data.data
          },
          () => {
            //console.log(this.state);
          }
        );
      })
      .catch(err => console.log(err));
  }
  //get model rambut
  getModelRambutData() {
    Axios.get("https://api.bnwbarbershop.com/api/model_rambut/get_model_rambut")
      .then(response => {
        //console.log(response.data.data);
        this.setState(
          {
            ModelRambutData: response.data.data
          },
          () => {
            //console.log(this.state);
          }
        );
      })
      .catch(err => console.log(err));
  }
  //get Stylist
  getStylist() {
    Axios.get("https://api.bnwbarbershop.com/api/stylist/get_stylist_aktif")
      .then(response => {
        //console.log(response.data.data);
        this.setState(
          {
            StylistData: response.data.data
          },
          () => {
            //console.log(this.state);
          }
        );
      })
      .catch(err => console.log(err));
  }

  AmbilAntrian = data_antrian => {
    Axios.post(
      "https://api.bnwbarbershop.com/api/antrian/ambil_antrian",
      qs.stringify(data_antrian)
    )
      .then(response => {
        //this.props.history.goBack();
        if (response.data.status === 1) {
          //console.log(response.data.message);
          const isLoading = false;
          this.props.handleLoading(isLoading);
          this.setState({
            isReserve: 1,
            isCheckMsg: response.data.message
          });
        } else if (response.data.status === 0) {
          //console.log(response.data.message);
          const isLoading = false;
          this.props.handleLoading(isLoading);
          this.setState({
            isReserve: 2,
            isCheckMsg: response.data.message
          });
        } else {
          console.log("Gagal Mendapatkan Data");
          console.log(response);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  onSubmit(e) {
    const isLoading = true;
    this.props.handleLoading(isLoading);
    let data_antrian = [];
    if (this.props.isLogin === true) {
      data_antrian = {
        member: this.props.userLogin.id,
        style_id: this.state.style_id,
        stylist_id: this.state.stylist_id,
        keterangan: this.state.keterangan
      };
    } else {
      data_antrian = {
        notelp: this.notelp.current.state.innerValue,
        nama_lengkap: this.nama_lengkap.current.state.innerValue,
        member: "0",
        style_id: this.state.style_id,
        keterangan: this.state.keterangan
      };
    }
    this.AmbilAntrian(data_antrian);
    this.props.getNomorAntri(this.notelp.current.state.innerValue);
    e.preventDefault();
  }

  render() {
    if (this.props.isLoading === true) {
      return (
        <MDBContainer className="loader">
          <div className="spinner-grow spinner-grow-lg" role="status">
            <span className="sr-only">Tunggu sebentar...</span>
          </div>
        </MDBContainer>
      );
    }
    return (
      <div ref={this.props.antrianRef}>
        <MDBContainer fluid className="full zoom ambil_antrian">
          <MDBRow middle>
            <MDBCol size="12" sm="12" md="12">
              <p className="title_antrian">Ambil Nomor Antrian</p>
            </MDBCol>
          </MDBRow>
          <MDBRow middle>
            <MDBCol
              size="12"
              sm="12"
              md="6"
              lg="4"
              className="form_antrian offset-md-3 offset-lg-4"
            >
              {this.state.isReserve === 1 && (
                <MDBNotification
                  show
                  fade
                  icon="check-circle"
                  iconClassName="green-text"
                  title="Notifikasi"
                  message={this.state.isCheckMsg}
                  text="1 detik yang lalu"
                  className="text-black"
                />
              )}
              {this.state.isReserve === 2 && (
                <MDBNotification
                  show
                  fade
                  icon="exclamation"
                  iconClassName="red-text"
                  title="Notifikasi"
                  message={this.state.isCheckMsg}
                  text="1 detik yang lalu"
                  className="text-black"
                />
              )}
              <MDBCard>
                <MDBCardBody>
                  {this.props.isLogin === false && (
                    <form onSubmit={this.onSubmit.bind(this)}>
                      <p className="text-center mb4">
                        Silahkan Mengisi Form Berikut
                      </p>
                      <div className="grey-text">
                        <MDBInput
                          label="Nomor Telepon Anda"
                          icon="phone-square"
                          group
                          type="text"
                          validate
                          error="Format Salah"
                          success=""
                          name="notelp"
                          ref={this.notelp}
                          onInput={this.handleInput}
                        />
                        <MDBInput
                          label="Nama Anda"
                          icon="user-circle"
                          group
                          type="text"
                          validate
                          error="Format Salah"
                          success=""
                          name="nama_lengkap"
                          ref={this.nama_lengkap}
                          onInput={this.handleInput}
                        />
                        <select
                          className="browser-default custom-select"
                          onChange={this.handleInput}
                          name="style_id"
                        >
                          <option>Pilih Model Rambut</option>
                          {this.state.ModelRambutData.map(ModelRambutItem => (
                            <option
                              key={ModelRambutItem.id}
                              value={ModelRambutItem.id}
                            >
                              {ModelRambutItem.nama + " - "}
                              {ModelRambutItem.category_name}
                            </option>
                          ))}
                        </select>
                        <MDBInput
                          label="Catatan untuk Stylist dan Model Rambut"
                          icon="plus-square"
                          group
                          type="textarea"
                          validate
                          name="keterangan"
                          ref={this.keterangan}
                          onInput={this.handleInput}
                        />
                      </div>
                      <div className="text-center">
                        <MDBBtn className="mb-3" type="submit">
                          Ambil
                        </MDBBtn>
                      </div>
                    </form>
                  )}
                  {this.props.isLogin === true && (
                    <form onSubmit={this.onSubmit.bind(this)}>
                      <h2 className="ambil_title text-center text-white mb4 blue-gradient">
                        Halo Member
                      </h2>
                      <p className="text-center mb4">
                        {this.props.userLogin.notelp + " - "}
                        {this.props.userLogin.nama_lengkap}
                      </p>
                      <div className="grey-text">
                        <MDBInput
                          label="Nomor Telepon Anda"
                          icon="phone-square"
                          group
                          type="text"
                          validate
                          error="Format Salah"
                          success="Terima Kasih"
                          name="notelp"
                          ref={this.notelp}
                          value={this.props.userLogin.notelp}
                          onInput={this.handleInput}
                          disabled
                        />
                        <MDBInput
                          label="Nama Anda"
                          icon="user-circle"
                          group
                          type="text"
                          validate
                          error="Format Salah"
                          success="Terima Kasih"
                          name="nama_lengkap"
                          ref={this.nama_lengkap}
                          value={this.props.userLogin.nama_lengkap}
                          onInput={this.handleInput}
                          disabled
                        />
                        <select
                          className="browser-default custom-select"
                          onChange={this.handleInput}
                          name="style_id"
                        >
                          <option>Pilih Model Rambut</option>
                          {this.state.ModelRambutData.map(ModelRambutItem => (
                            <option
                              key={ModelRambutItem.id}
                              value={ModelRambutItem.id}
                            >
                              {ModelRambutItem.nama + " - "}
                              {ModelRambutItem.category_name}
                            </option>
                          ))}
                        </select>
                        <MDBInput
                          label="Catatan untuk Stylist dan Model Rambut"
                          icon="plus-square"
                          group
                          type="textarea"
                          validate
                          name="keterangan"
                          ref={this.keterangan}
                          onInput={this.handleInput}
                        />
                        <select
                          className="browser-default custom-select"
                          onChange={this.handleInput}
                          name="stylist_id"
                        >
                          <option value="0">Pilih Stylist</option>
                          {this.state.StylistData.map(StylistItem => (
                            <option key={StylistItem.id} value={StylistItem.id}>
                              {StylistItem.nama_lengkap}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="text-center">
                        <MDBBtn color="elegant" className="mb-3" type="submit">
                          Ambil
                        </MDBBtn>
                      </div>
                    </form>
                  )}
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}
