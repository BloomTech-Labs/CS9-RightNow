//Import React Scrit Libraray to load Google object
import React, { Component } from "react";

class Search extends Component {
  state = {
    street_number: "",
    street_name: "",
    city: "",
    state: "",
    zip: "",
    query: ""
  };

  componentDidMount() {
    // Locate input element
    const input = document.getElementById("autocomplete");
    // Initialize Google Autocomplete 
    this.autocomplete = new window.google.maps.places.Autocomplete(input); 
    // Fire Event when a suggested name is selected
    this.autocomplete.addListener("place_changed", this.handlePlaceSelect); 
  }


  handlePlaceSelect = () => {
    // Extract data
    let place = this.autocomplete.getPlace();
    console.log(place);

    // Define address (array of objects)
    let address = place.address_components;
    console.log(address);

    // Check if address is valid
    if (address) {
      this.setState({ 
        street_number: address[0].long_name, 
        street_name: address[1].long_name,
        city: address[2].long_name,
        state: address[5].long_name,
        zip: address[6].long_name,
        query: place.formatted_address 
      });
    }
  }

  render() {
    return (
      <div>

        <input 
          id="autocomplete" 
          placeholder="Enter business location" 
          name="query"
          value={this.state.query}
          onChange={e => this.setState({ [e.target.name]: e.target.value })}
          style={{
            margin: '15% auto',
            width: 800,
            padding: "3%",
            fontSize: "2em"
          }}
        />

      </div>
    );
  }
}

export default Search;