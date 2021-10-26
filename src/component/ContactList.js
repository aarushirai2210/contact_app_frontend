import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllContact } from "../redux/actions/dataAction";
function ContactList(props) {
  useEffect(() =>{props.getAllContact();
  }, []);
  return (
    <div className="contact-list">
      {props.contacts && props.contacts.map(data=>(
        <div className="card">
        <img src="https://srmuniversity.ac.in/wp-content/uploads/professor/user-avatar-default.jpg" />
        <div className="card-detail">
          <h6>Name: {data.first_name+" "+data.last_name}</h6>
          <h6>Phone Number: {data.phone_number}</h6>
          <h6>Email: {data.email}</h6>
        </div>
      </div>
      ))
      }
    </div>
  );
}

const MapStateWithProps = (state) => ({
  contacts: state.data.contacts,
});
const MapActionWithProps = {
  getAllContact
};
export default connect(MapStateWithProps, MapActionWithProps)(ContactList)