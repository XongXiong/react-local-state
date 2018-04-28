import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: 'Xong',
        city: 'Saint Paul',
        zipCode: 55117
      }
    };
  }

  // Currying
  handleChangeFor = propertyName => event => {
    this.setState({
      user: {
        ...this.state.user,
        [propertyName]: event.target.value
      }
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.user);
    this.setState({
      user: {
        name: '',
        city: '',
        zipCode: ''
      }
    });
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.user.name} onChange={this.handleChangeFor('name')}/>
          <input value={this.state.user.city} onChange={this.handleChangeFor('city')}/>
          <input
            value={this.state.user.zipCode}
            onChange={this.handleChangeFor('zipCode')}/>
          <input type="submit" value="Submit the form"/>
        </form>
        <p>
          {this.state.user.name}
          is from {this.state.user.city}, {this.state.user.zipCode}.
        </p>
      </div>
    );
  }
}

export default App;
