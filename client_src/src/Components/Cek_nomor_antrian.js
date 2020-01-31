import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBNotification,
  MDBCard,
  MDBCardBody
} from "mdbreact";
import Axios from "axios";

export default class Cek_nomor_antrian extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notelp: "",
      antrianData: [],
      isEmpty: true,
      isCheck: this.props.isCheck,
      isCheckMsg: this.props.isCheckMsg
    };
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentDidMount() {
    this.getInfoAntrian();
    if (this.props.antrianCustomer !== null) {
      this.setState({
        notelp: this.props.antrianCustomer.notelp
      });
    }
  }

  //get info antrian
  getInfoAntrian() {
    Axios.get("https://api.bnwbarbershop.com/api/antrian/get_antrian")
      .then(response => {
        //console.log(response.data.data);
        if (response.data.status === 0) {
          this.setState({
            isEmpty: true
          });
        } else {
          this.setState(
            {
              isEmpty: false,
              antrianData: response.data.data
            },
            () => {
              //console.log(this.state.antrianData.length);
            }
          );
        }
      })
      .catch(err => console.log(err));
  }

  onSubmit(e) {
    this.props.getNomorAntri(this.state.notelp);
    e.preventDefault();
  }

  render() {
    return (
      <div className="cek_antrian">
        <MDBContainer fluid className="text-center">
          <MDBRow>
            <MDBCol size="12" sm="6" md="12" lg="12">
              <div className="detail_antrian" id="detail_antrian">
                <h1>Antrian Barbershop</h1>
                <h6>Berikut adalah Informasi Antrian Saat ini.</h6>

                <MDBContainer>
                  {this.state.isEmpty === true && (
                    <div className="detail_dikerjakan">
                      <hr />
                      <MDBRow>
                        <MDBCol sm="12" md="4" lg="4">
                          <h3> Sedang Dikerjakan </h3>
                          <h2> Kosong </h2>
                        </MDBCol>
                        <MDBCol sm="12" md="4" lg="4">
                          <MDBCol className="">
                            <h3> Selanjutnya </h3>
                            <h2> - </h2>
                          </MDBCol>
                        </MDBCol>
                        <MDBCol sm="12" md="4" lg="4">
                          <MDBCol className="">
                            <h3> Nomor Antrian Saat ini </h3>
                            <h2> - </h2>
                          </MDBCol>
                        </MDBCol>
                      </MDBRow>
                    </div>
                  )}
                  {this.state.isEmpty === false &&
                    this.state.antrianData.map(InfoAntrian => (
                      <div
                        className="detail_dikerjakan"
                        key={"info" + InfoAntrian.id}
                      >
                        <hr />
                        <MDBRow>
                          <MDBCol sm="12" md="4" lg="4">
                            <h3> Sedang Dikerjakan </h3>
                            <h3> {InfoAntrian.nama_stylist}&nbsp; </h3>
                            <h2> {InfoAntrian.nomor} </h2>
                          </MDBCol>
                          <MDBCol sm="12" md="4" lg="4">
                            <MDBCol className="">
                              <h3> Selanjutnya </h3>
                              <h3>&nbsp;</h3>
                              <h2> {InfoAntrian.selanjutnya} </h2>
                            </MDBCol>
                          </MDBCol>
                          <MDBCol sm="12" md="4" lg="4">
                            <MDBCol className="">
                              <h3> Nomor Antrian Saat ini </h3>
                              <h3> &nbsp; </h3>
                              <h2> {InfoAntrian.antrian_terkini} </h2>
                            </MDBCol>
                          </MDBCol>
                        </MDBRow>
                      </div>
                    ))}

                  {this.props.isReserve === true &&
                    this.props.antrianCustomer.length > 0 &&
                    this.props.antrianCustomer.map(AntriItem => (
                      <div key={"nomor" + AntriItem.id}>
                        <MDBCard>
                          <MDBCardBody>
                            <h3>
                              {AntriItem.nama_lengkap} : {AntriItem.nomor}
                            </h3>
                            <h3> Status : {AntriItem.status_pelanggan} </h3>
                          </MDBCardBody>
                        </MDBCard>
                      </div>
                    ))}
                  {this.props.isReserve === true &&
                    this.props.antrianCustomer.length <= 0 && (
                      <div key="kosong" className="mt-5">
                        {this.props.isCheck === 0 && (
                          <MDBNotification
                            show
                            fade
                            icon="exclamation"
                            iconClassName="red-text"
                            title="Cek Gagal"
                            message={this.props.isCheckMsg}
                            text="1 detik yang lalu"
                          />
                        )}
                      </div>
                    )}
                  <h4>Cek Antrian Anda</h4>
                  <MDBContainer>
                    <form onSubmit={this.onSubmit.bind(this)}>
                      <MDBRow center className="text-center">
                        <MDBCol lg="6" md="6" sm="12">
                          <MDBInput
                            label="Nomor Telepon"
                            group
                            type="text"
                            validate
                            error=""
                            name="notelp"
                            success="Valid"
                            onInput={this.handleInput}
                          />
                        </MDBCol>
                      </MDBRow>
                      <MDBRow center>
                        <MDBCol lg="4" md="6" sm="10" className="text-center">
                          <MDBBtn color="elegant" type="submit">
                            Cek
                          </MDBBtn>
                        </MDBCol>
                      </MDBRow>
                    </form>
                  </MDBContainer>
                </MDBContainer>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}
