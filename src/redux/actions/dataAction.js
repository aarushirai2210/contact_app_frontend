import axios from "axios";
export const getAllContact = () => (dispatch) => {
    console.log("hello")
  axios
    .get("/get/contact/list")
    .then((res) => {
      dispatch({ type: "SET_CONTACT", payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: "SET_LIST_ERROR", payload: err.response.data});
    });
};
export const generateNewContact = (userDetail) => (dispatch) => {
  axios
    .post("/create/new/user", {...userDetail,phone_number:parseInt(userDetail.phone_number)})
    .then((res) => {
        dispatch({type:"SET_NEW_CONTACT",payload:res.data})
        dispatch({ type: "SET_CREATE_ERROR", payload:""});
        dispatch({type:'SET_CREATE_SUCCESS',payload:"Contact added visit contact list"})
    })
    .catch((err) => {
        dispatch({ type: "SET_CREATE_ERROR", payload: err.response.data});
    });
};
