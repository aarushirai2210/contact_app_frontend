import React, { useState } from "react";
import { connect } from "react-redux";
import { generateNewContact } from "../redux/actions/dataAction";
function AddContact(props) {
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
  });
  const createNewContact = (event) => {
    event.preventDefault();
    props.generateNewContact(state);
    document.getElementById("form").reset();
  };
  const handleChange = (event) => {
    setState({ ...state, [event.target.id]: event.target.value });
  };
  return (
    <div className="add-contact">
      <form id="form" onSubmit={createNewContact}>
        <img src="https://onldata.blob.core.windows.net/onlizerfiles/system_google_contacts_ico.png" />
        <input
          title="First Name"
          placeholder="First Name"
          required
          onChange={handleChange}
          id="first_name"
          type="text"
        ></input>

        <input
          title="Last Name"
          id="last_name"
          onChange={handleChange}
          placeholder="Last Name"
          type="text"
        ></input>

        <input
          title="Phone Number"
          placeholder="Phone Number"
          id="phone_number"
          required
          onChange={handleChange}
          type="number"
        ></input>

        <input
          title="Email"
          onChange={handleChange}
          id="email"
          placeholder="Email"
          type="email"
        ></input>
        {props.error?<p style={{ color: "red",textAlign:"center"}}>{props.error}</p>:''}
        {props.success?<p style={{ color: "green",textAlign:"center"}}>{props.success}</p>:''}
        <input className="title-color" type="submit" title="Add"></input>
      </form>
    </div>
  );
}
const mapStateWithProps = (state) => ({ error: state.UI.create_error, success: state.UI.create_success });
const mapActionWithProps = {
  generateNewContact,
};
export default connect(mapStateWithProps, mapActionWithProps)(AddContact);
