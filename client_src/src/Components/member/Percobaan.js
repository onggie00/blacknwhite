import React, { Component } from "react";
import { MDBInput, MDBBtn } from "mdbreact";

export default class Percobaan extends Component {
  render() {
    return (
      <div id="percobaan">
        <h2> Percobaan </h2>
        <MDBInput label="Tes"></MDBInput>
        <MDBBtn value="Next">Next</MDBBtn>
      </div>
    );
  }
}
