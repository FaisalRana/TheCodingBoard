import React from "react";
import PropTypes from "prop-types";

function Prompt(props){
  return (
    <React.Fragment>
      
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        <p><em>{props.id}</em></p>
      <hr/>
    </React.Fragment>
  );
}

Prompt.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  id: PropTypes.string,
};

export default Prompt;