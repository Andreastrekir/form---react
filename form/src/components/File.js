import React from 'react';


class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        
      };
    }
    
    render() {
      return (
        
        <form>
          <select value={this.state.mycar}>
          <option value ="Destination">-- Please choose a destination --</option>
            <option value ="Thailand">Thailand</option>
            <option value ="Japan">Japan</option>
            <option value ="Brazil">Brazil</option>
          </select>
        </form>
      )
    }
    }

    export default NameForm;
























