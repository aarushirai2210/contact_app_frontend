import React from "react";

export default function Home() {
  return (
    <div className="home">
      <div className="home-tab">
        <img src="https://aviraengineering.com/svg/undraw_email_campaign_qa8y.svg" />

        <div className="home-action">
          <div>
            <h2>Access to your contacts - everywhere</h2>
            <p>
              With My Contacts you always have a backup of your contacts safely
              stored.
            </p>
          </div>
          <div>
            <button className="home-button" onClick={()=>(window.location='/contact_list')} >Contact List</button>
            <button className="home-button" onClick={()=>(window.location='/new_contact')}>New Contact</button>
          </div>
        </div>
      </div>
    </div>
  );
}
