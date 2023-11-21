import React, { useState } from 'react';

function AdminActions() {
  const [adminVisible, setAdminVisible] = useState(false);

  const toggleAdminButtons = () => {
    setAdminVisible(!adminVisible);
  };

  return (
    <div className="adminActions">
      <input
        type="checkbox"
        name="adminToggle"
        className="adminToggle"
        onChange={toggleAdminButtons}
        checked={adminVisible}
      />
      <a className="adminButton" href="#!">
        <i className="fa fa-plus"></i>
      </a>
      <div className={`adminButtons ${adminVisible ? 'visible' : ''}`}>
        <a href="https://wa.me/+994774186033" title="WhatsApp">
          <i className="fab fa-whatsapp"></i>
        </a>
        <a href="tel:+994774186033" title="Phone">
          <i className="fa fa-phone"></i>
        </a>
        <a href="mailto:mromar.work@gmail.com" title="E-Mail">
          <i className="fa fa-envelope"></i>
        </a>
      </div>
    </div>
  );
}

export default AdminActions;
