import axios from "axios";
import './Travel.css'
import React, { Component } from "react";

class Showdata extends Component {
  state = {
  data: []
  }

  componentDidMount() {
  axios.get('http://127.0.0.1:8080/g')
    .then(response => {
      this.setState({ data: response.data });
    })
    .catch(error => {
      console.log(error);
    });
}


  render() {   
    return (
        <center>
      <table border={1}>
      <thead>
        <tr>
          <th>sno</th>
          <th>places</th>
          <th>state</th>
          <th>ratings</th>
          
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(user => (
          <tr key={user.sno}>
            <td>{user.sno}</td>
            <td>{user.places}</td>
            <td>{user.state}</td>
            <td>{user.ratings}</td>
           
          </tr>
        ))}
      </tbody>
    </table>
    </center>
    );
  }}
  
export default Showdata;