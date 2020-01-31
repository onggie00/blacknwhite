import React, { Component } from "react";
import { MDBBtn, MDBCollapse, MDBContainer, MDBRow, MDBCol } from "mdbreact";

export default class Faq extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseID1: "",
      collapseID2: "",
      collapseID3: "",
      collapseID4: "",
      collapseID5: ""
    };
  }

  toggleCollapse1 = collapseID1 => () => {
    this.setState(prevState => ({
      collapseID1: prevState.collapseID1 !== collapseID1 ? collapseID1 : ""
    }));
  };
  toggleCollapse2 = collapseID2 => () => {
    this.setState(prevState => ({
      collapseID2: prevState.collapseID2 !== collapseID2 ? collapseID2 : ""
    }));
  };
  toggleCollapse3 = collapseID3 => () => {
    this.setState(prevState => ({
      collapseID3: prevState.collapseID3 !== collapseID3 ? collapseID3 : ""
    }));
  };
  toggleCollapse4 = collapseID4 => () => {
    this.setState(prevState => ({
      collapseID4: prevState.collapseID4 !== collapseID4 ? collapseID4 : ""
    }));
  };
  toggleCollapse5 = collapseID5 => () => {
    this.setState(prevState => ({
      collapseID5: prevState.collapseID5 !== collapseID5 ? collapseID5 : ""
    }));
  };

  render() {
    return (
      <div ref={this.props.faqRef} className="faq">
        <MDBContainer>
          <MDBRow>
            <MDBCol middle>
              <h1>FAQ</h1>
              <p className="faq_subtitle">Frequently Asked Question</p>
            </MDBCol>
          </MDBRow>
          <MDBRow center>
            <MDBCol size="10">
              <MDBBtn
                color="elegant"
                onClick={this.toggleCollapse1("basicCollapse1")}
                style={{ marginBottom: "1rem" }}
                block
              >
                Apa itu Black and White Barbershop?
              </MDBBtn>
              <MDBCollapse id="basicCollapse1" isOpen={this.state.collapseID1}>
                <p>
                  Sebuah tempat khusus untuk laki-laki atau pria dewasa untuk
                  mencukur rambut dengan model rambut yang kekinian.
                </p>
              </MDBCollapse>
            </MDBCol>
          </MDBRow>
          <MDBRow center>
            <MDBCol size="10">
              <MDBBtn
                color="elegant"
                onClick={this.toggleCollapse2("basicCollapse2")}
                style={{ marginBottom: "1rem" }}
                block
              >
                Berapa lama kira-kira proses mencukur rambut pelanggan?
              </MDBBtn>
              <MDBCollapse id="basicCollapse2" isOpen={this.state.collapseID2}>
                <p>
                  Proses mencukur rambut pelanggan tidak dapat ditentukan, namun
                  estimasi waktu rata-rata per pelanggan adalah 20-25 menit.
                </p>
              </MDBCollapse>
            </MDBCol>
          </MDBRow>
          <MDBRow center>
            <MDBCol size="10">
              <MDBBtn
                color="elegant"
                onClick={this.toggleCollapse3("basicCollapse3")}
                style={{ marginBottom: "1rem" }}
                block
              >
                Apakah saya dapat mengambil antrian meskipun belum ditempat?
              </MDBBtn>
              <MDBCollapse id="basicCollapse3" isOpen={this.state.collapseID3}>
                <p>
                  Tentu saja. Black &amp; White Barbershop sudah menggunakan
                  teknologi internet untuk mengatur antrian anda. Anda cukup
                  membuka gadget anda, dan akses bnwbarbershop.com melalui
                  browser dan lanjutkan ke bagian ambil antrian. Ambil antrian
                  ini GRATIS.
                </p>
              </MDBCollapse>
            </MDBCol>
          </MDBRow>
          <MDBRow center>
            <MDBCol size="10">
              <MDBBtn
                color="elegant"
                onClick={this.toggleCollapse4("basicCollapse4")}
                style={{ marginBottom: "1rem" }}
                block
              >
                Apa kah ada kelebihan menjadi Member?
              </MDBBtn>
              <MDBCollapse id="basicCollapse4" isOpen={this.state.collapseID4}>
                <p>
                  khusus untuk member kami, anda berhak mendapatkan notifikasi
                  dan promo-promo menarik dari kami. anda juga dapat mengganti
                  profil anda dan menyimpan model rambut favorit anda. Serta,
                  anda dapat memilih stylist kesayangan anda untuk melayani
                  rambut anda.
                </p>
              </MDBCollapse>
            </MDBCol>
          </MDBRow>
          <MDBRow center>
            <MDBCol size="10">
              <MDBBtn
                color="elegant"
                onClick={this.toggleCollapse5("basicCollapse5")}
                style={{ marginBottom: "1rem" }}
                block
              >
                Apa Syarat untuk menjadi member?
              </MDBBtn>
              <MDBCollapse id="basicCollapse5" isOpen={this.state.collapseID5}>
                <p>
                  Anda cukup mengisi form pendaftaran pada menu Login, kemudian
                  Klik Daftar, lalu isilah form pendaftaran dan selesai. Mudah
                  bukan?
                </p>
              </MDBCollapse>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}
