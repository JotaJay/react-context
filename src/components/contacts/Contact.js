import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";

const Contact = (props) => {
  const { id, name, email, phone, onDeleteClick } = props;
  const [isDisplaying, setIsDisplaying] = useState(false);

  const onClickShow = useCallback(() => {
    setIsDisplaying(!isDisplaying);
  });

  return (
    <div className="card card-body mb-3">
      <h4>
        {name}{" "}
        <i
          style={{ cursor: "pointer" }}
          onClick={onClickShow}
          className="fas fa-sort-down"
        />
        <i
          style={{ cursor: "pointer", float: "right", color: "red" }}
          onClick={() => onDeleteClick(id)}
          className="fas fa-times"
        />
      </h4>
      {isDisplaying && (
        <ul className="list-group">
          <li className="list-group-item">Email:{email}</li>
          <li className="list-group-item">Phone:{phone}</li>
        </ul>
      )}
    </div>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default Contact;
