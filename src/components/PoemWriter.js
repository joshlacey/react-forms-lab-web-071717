import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      content: "",
      valid: false
    };
  }

  handleChange = (event) => {
    this.setState({
      content: event.target.value,
      valid: this.isValid(event.target.value)
    })
  }

  isValid = (cont) => {
    var lines =cont ? cont.split(/\r|\r\n|\n/) : ""
    //var count = lines.length;
    var firstLineArr = lines[0] ? lines[0].split(' ').filter(e => e) : ""
    var secondLineArr = lines[1] ? lines[1].split(' ').filter(e => e) : ""
    var thirdLineArr = lines[2] ? lines[2].split(' ').filter(e => e) : ""
    console.log (lines)
    if(lines.length === 3 && firstLineArr.length === 5 && secondLineArr.length === 3 && thirdLineArr.length === 5){
      return null
    } else {
      return 'This poem is not written in the right structure!'
    }

  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.content}
          onChange={this.handleChange}
        />
        <div
          id="poem-validation-error"
          style={{color: 'red'}}
        >
          {this.state.valid}
        </div>
      </div>
    );
  }
}

export default PoemWriter;
