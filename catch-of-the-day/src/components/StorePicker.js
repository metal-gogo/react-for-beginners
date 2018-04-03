import React, { Fragment } from 'react';

class StorePicker extends React.Component {
  render() {
    return (
      <Fragment>
        { /* This is a comment in JSX */}
        <form action="" className="store-selector">
          <h2>Please Enter a Store</h2>
          <input type="text" name="" id="" required placeholder="Store Name"/>
          <button type="submit">Visit store -> </button>
        </form>
      </Fragment>
    )
  }
}

export default StorePicker;
