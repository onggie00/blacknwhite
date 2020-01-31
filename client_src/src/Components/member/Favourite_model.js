import React, { Component } from "react";
import {
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalBody,
  MDBNotification,
  MDBIcon
} from "mdbreact";
import Axios from "axios";
import qs from "qs";
import ls from "local-storage";
//import ls from "local-storage";

export class Favourite_model extends Component {
  constructor(props) {
    super(props);
    this.notelp = React.createRef();
    this.state = {
      isLogin: this.props.isLogin,
      userLogin: this.props.userLogin,
      isCheck: "",
      isCheckMsg: "",
      Favmodel: [],
      isEmpty: false
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
    this.getFavourite(this.props.userLogin.id);
  }

  componentDidUpdate() {
    this.getFavourite(this.props.userLogin.id);
  }

  //get model rambut favourite
  getFavourite = id => {
    Axios.get(
      "https://api.bnwbarbershop.com/api/rating_model/get_model_favourite",
      {
        params: {
          member_id: id
        }
      }
    )
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
              Favmodel: response.data.data
            },
            () => {
              //console.log(this.state.antrianData.length);
            }
          );
        }
      })
      .catch(err => console.log(err));
  };

  insertFavourite = data_favourite => {
    Axios.post(
      "https://api.bnwbarbershop.com/api/rating_model/insert_rating_model",
      qs.stringify(data_favourite)
    )
      .then(response => {
        //this.props.history.goBack();
        if (response.data.status === 1) {
          this.setState({
            isCheck: response.data.status,
            isCheckMsg: response.data.message
          });
          //console.log("Berhasil Favourite Model Rambut");
        } else {
          console.log("Gagal Favourite");
          this.setState({
            isCheck: response.data.status,
            isCheckMsg: response.data.message
          });
          //console.log(response);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteFavourite = data_favourite => {
    Axios.post(
      "https://api.bnwbarbershop.com/api/rating_model/delete_rating_model",
      qs.stringify(data_favourite)
    )
      .then(response => {
        //this.props.history.goBack();
        if (response.data.status === 1) {
          this.setState({
            isCheck: response.data.status,
            isCheckMsg: response.data.message
          });
          //console.log("Berhasil Un-Favourite Model Rambut");
        } else {
          console.log("Gagal Unfavourite");
          this.setState({
            isCheck: response.data.status,
            isCheckMsg: response.data.message
          });
          // console.log(response);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  onSubmit(e) {
    const style_id = e.target.id;
    const status = e.target.name;
    const data_hairstyle = {
      style_id: style_id,
      member_id: this.props.userLogin.id
    };
    if (status === "unfav") {
      this.deleteFavourite(data_hairstyle);
    } else if (status === "fav") {
      this.insertFavourite(data_hairstyle);
    }
    this.setState({
      isCheck: "",
      isCheckMsg: ""
    });
    this.props.handleFavouriteButton();
    console.log(this.props.isFavorit);
    //console.log(data_hairstyle);
    //this.EditBiodata(data_profile);
    e.preventDefault();
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
                  title="Pemberitahuan"
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
                  title="Pemberitahuan"
                  message={this.state.isCheckMsg}
                  text="1 detik yang lalu"
                  className="text-black"
                />
              )}
              <h4 className="text-center mb-4">Model Rambut Favoritku</h4>
              <MDBRow>
                {this.state.Favmodel.filter(
                  ModelRambutItem => ModelRambutItem.status_fav === "1"
                ).map(ModelRambutItem => (
                  <form
                    onSubmit={this.onSubmit.bind(this)}
                    key={"favmodel" + ModelRambutItem.id}
                    id={ModelRambutItem.id}
                    name="unfav"
                  >
                    <div className="favmodel mb-4">
                      <MDBCol size="12" lg="4" md="4" sm="4">
                        <img
                          src={
                            "https://admin.bnwbarbershop.com/assets/image/model_rambut/" +
                            ModelRambutItem.img_file
                          }
                          className="z-depth-1 "
                          alt={
                            ModelRambutItem.nama_kategori + ModelRambutItem.id
                          }
                          width="120px"
                          height="100px"
                        />
                        <div className="text-center">
                          <p
                            className=""
                            style={{
                              width: "120px",
                              height: "40px",
                              display: "block"
                            }}
                          >
                            {ModelRambutItem.nama}
                          </p>

                          <MDBBtn
                            className="btn btn_fav"
                            color="secondary"
                            type="submit"
                          >
                            <MDBIcon icon="thumbs-down"></MDBIcon>
                          </MDBBtn>
                        </div>
                      </MDBCol>
                    </div>
                  </form>
                ))}
              </MDBRow>
              <h4 className="text-center mb-4">Semua Model Rambut </h4>
              <MDBRow middle>
                {this.state.Favmodel.filter(
                  ModelRambutItem => ModelRambutItem.status_fav === "0"
                ).map(ModelRambutItem => (
                  <form
                    onSubmit={this.onSubmit.bind(this)}
                    key={"favmodel" + ModelRambutItem.id}
                    id={ModelRambutItem.id}
                    name="fav"
                  >
                    <div className="favmodel mb-4">
                      <MDBCol lg="4" md="4" sm="4">
                        <img
                          src={
                            "https://admin.bnwbarbershop.com/assets/image/model_rambut/" +
                            ModelRambutItem.img_file
                          }
                          className="z-depth-1"
                          width="120px"
                          height="100px"
                          alt={
                            ModelRambutItem.nama_kategori + ModelRambutItem.id
                          }
                        />
                        <div className="text-center">
                          <p
                            className=""
                            style={{
                              width: "120px",
                              height: "40px",
                              display: "block"
                            }}
                          >
                            {ModelRambutItem.nama}
                          </p>
                          <MDBBtn
                            className="btn btn_fav"
                            color="danger"
                            type="submit"
                          >
                            <MDBIcon icon="heart"></MDBIcon>
                          </MDBBtn>
                        </div>
                      </MDBCol>
                    </div>
                  </form>
                ))}
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBModalBody>
      </div>
    );
  }
}

export default Favourite_model;
