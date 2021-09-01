import React from 'react';
import PromptList from './PromptList';

class PromptControl extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      selectedPrompt: null,
      editing: false,
      masterPromptList: [
        {
        title: 'Find the Smallest and Biggest Numbers',
        text: 'Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.',
        id: 1
        },
        {
        title: 'Drink Sorting',
        text: 'You will be given an array of drinks, with each drink being an object with two properties: name and price. Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.',
        id: 2         
        }
      ]
    }
  }
  // handleClick = () => {
  //   if (this.state.selectedPrompt != null) {
  //     this.setState({
  //       selectedPrompt: null,
  //       editing: false
  //     });
  //   } else {
  //     const { dispatch } = this.props;
  //     const action = a.toggleForm();
  //     dispatch(action);
  //   }
  // }

  render()
  {
    // let currentlyVisible = null;
    // if (currentlyVisible != null) 
   let currentlyVisible = <PromptList propsMasterPromptList ={this.state.masterPromptList}/>;

  return(
    <React.Fragment>
      {currentlyVisible}
    </React.Fragment>
  );
  }
}

export default PromptControl;