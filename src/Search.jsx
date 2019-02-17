import React, { Component } from "react";

class Search extends Component {
  token = null;
  state = {
    query: "",
    people: []
  };

  onChange = e => {
    const { value } = e.target;
    this.setState({
      query: value
    });

    this.search(value);
  };

  search = query => {
    const url = `https://swapi.co/api/people?search=${query}`;
    const token = {};
    this.token = token;

    fetch(url)
      .then(results => results.json())
      .then(data => {
        if (this.token === token) {
          this.setState({ people: data.results });
        }
      });
  };

  componentWillMount() {
    this.search("");
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            className="search-box"
            placeholder="Search for..."
            onChange={this.onChange}
          />
          {this.state.people.map(person => (
            <ul key={person.name}>
              <li>{person.name}</li>
            </ul>
          ))}
        </form>
        {this.state.people.map(person => (
          <ul key={person.name}>
            <li>{person.name}</li>
          </ul>
        ))}
      </div>
    );
  }
}

export default Search;
