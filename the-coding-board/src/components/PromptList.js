import React from "react";
import PropTypes from "prop-types";
import Prompt from "./Prompt";

function PromptList(props){
  return (
    <React.Fragment>
      <hr/>
      {props.propsMasterPromptList.map(prompt =>
        <Prompt
          title={prompt.title}
          text={prompt.text}
          id={prompt.id}
          key={prompt.id}/>
      )}
    </React.Fragment>
  );
}

PromptList.propTypes = {
  propsMasterPromptList: PropTypes.array,
};

export default PromptList;