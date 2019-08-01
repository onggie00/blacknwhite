import React, { Component } from "react";
//import { Link } from "react-router-dom";
import Axios from "axios";
import moment from "moment"; // Example for onSort prop
import Datatable from "react-bs-datatable"; // Import this package

class Admin_datatable extends Component {
  constructor() {
    super();
    this.state = {
      Admin: [],
      data: {}
    };
  }

  fetchData = () => {
    Axios.get("http://localhost:3000/api/admin/")
      .then(response => {
        let results = response.data;
        //let x = results.homeworld;

        this.setState({ data: results, isLoading: false });
        //return Axios.get(x);
        console.log(this.state);
      })

      .then(results => {
        //this.setState({ homeplanet: results.data.name });
      });
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    //console.log(this.state);
    const header = [
      { title: "Username", prop: "username", sortable: true, filterable: true },
      { title: "Name", prop: "realname", sortable: true },
      {
        title: "Name Uppercased",
        prop: "realnameuppercase",
        cell: row => row.realname.toUpperCase()
      },
      { title: "Location", prop: "location" },
      { title: "Last Updated", prop: "date", sortable: true }
    ];

    const body = [
      {
        username: "i-am-billy",
        realname: "Billy",
        location: "Mars",
        date: moment()
          .subtract(1, "days")
          .format("Do MMMM YYYY")
      },
      {
        username: "john-nhoj",
        realname: "John",
        location: "Saturn",
        date: moment()
          .subtract(2, "days")
          .format("Do MMMM YYYY")
      }
    ];

    const onSortFunction = {
      date(columnValue) {
        // Convert the string date format to UTC timestamp
        // So the table could sort it by number instead of by string
        return moment(columnValue, "Do MMMM YYYY").valueOf();
      }
    };

    const customLabels = {
      first: "<<",
      last: ">>",
      prev: "<",
      next: ">",
      show: "Display",
      entries: "rows",
      noResults: "There is no data to be displayed"
    };
    return (
      <div className="main">
        <Datatable
          tableHeader={header}
          tableBody={body}
          keyName="userTable"
          tableClass="striped hover responsive"
          rowsPerPage={5}
          rowsPerPageOption={[5, 10, 15, 20]}
          initialSort={{ prop: "username", isAscending: true }}
          onSort={onSortFunction}
          labels={customLabels}
        />
      </div>
    );
  }
}

export default Admin_datatable;
