//Import React Scrit Libraray to load Google object
import React, { Component } from "react";
import { BusinessContext } from "../../context/businessContext";

export default class PlacesAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
  }

  componentDidMount() {
    console.log(this.props)
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

    // get photo urls now bc firestore cannot store functions (getUrl)
    const photosURL = place.photos ? place.photos.map(pic => pic.getUrl({ maxHeight: 350, maxWidth: 350 })) : null;

    // Check if address is valid
    if (address) {
      this.props.busnContext.updateBusiness({
        name: place.name,
        fullAddress: place.formatted_address,
        street_number: address[0].long_name,
        street_name: address[1].long_name,
        city: address[2].long_name,
        state: address[5].long_name,
        zip: address[6].long_name,
        phone: place.formatted_phone_number,
        rating: place.rating,
        photos: photosURL
      });

      this.setState({ query: place.formatted_address });
    }
  }

  render() {
    return (
      <BusinessContext.Consumer>
        {value => (
          <div>
            <input 
              id="autocomplete" 
              placeholder="Enter business location" 
              name="query"
              value={this.state.query}
              onChange={e => this.setState({ [e.target.name]: e.target.value })}
              style={{
                width: "30vw",
                padding: "1%",
                fontSize: "1em"
              }}
            />
          </div>
        )}
      </BusinessContext.Consumer>
    );
  }
}

