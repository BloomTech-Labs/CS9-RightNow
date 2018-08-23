import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import axios from "axios";


export default class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      address: '',
      place_id: ""
    };
  }

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    let placeID;
    geocodeByAddress(address)
      .then(results => {
        console.log("RESULTS ~ ", results);
        placeID = results[0].place_id;
        console.log("PLACE ID ~ ", placeID);
        return results;
      })
      .then(results => getLatLng(results[0]))
      .then(x => {
        this.setState({ place_id: placeID });
        return x;
      })
      .then(async x => {
        await this.retrieve_details();
        return x;
      })
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  };

  retrieve_details = () => {

    const invocation = new XMLHttpRequest();
    const url = "https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJc4euylRYwokRnweuR3UzKYI&key=AIzaSyCbuJKo2ljNOXG4lboej16_P133vRRF4tU";

    if (invocation) {
      invocation.open('GET', url, true);
      invocation.setRequestHeader("Access-Control-Allow-Origin", "http://localhost:3000");
      invocation.onreadystatechange = xhttp => console.log(xhttp);
      invocation.send();
    }

    // axios
    //   .get(url)
    //   .then(res => console.log("AXIOS RESPONSE ~ ", res))
    //   .catch(err => console.log("AXIOS ERROR ~ ", err));
  }

  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => {
          console.log(getInputProps)
          return (<div style={{margin: "10%", fontSize: "1.5em"}}>
            <input style={{padding: "2%", fontSize: "1.5em"}}
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}}
      </PlacesAutocomplete>
    );
  }
}