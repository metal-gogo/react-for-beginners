import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  /* To bind a function as custom method to the component */
  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }

  myInput = React.createRef();

  /* This syntax works to make the function as a property of the component */
  goToStore = event => {
    // 1. Stop the form from submitting
    event.preventDefault();
    // 2. get the text from the input

    // 3. Cange the page to /store/whatever-they-entered
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter a Store</h2>
        <input
          type="text"
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
          ref={this.myInput}
        />
        <button type="submit">Visit store -> </button>
      </form>
    );
  }
}

export default StorePicker;
