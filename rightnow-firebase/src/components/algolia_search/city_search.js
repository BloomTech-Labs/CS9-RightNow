import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InstantSearch, Configure, Index, Highlight } from 'react-instantsearch/dom';
import { connectAutoComplete } from 'react-instantsearch/connectors';
import Autosuggest from 'react-autosuggest';
import "./styles.css";
import { configs } from "../../environment";
import { UserContext } from "../../context/userContext";



export const AlgoliaCitySearch = () => (
  <InstantSearch appId={configs.ALGOLIA_APP_ID} apiKey={configs.ALGOLIA_API_KEY} indexName={configs.ALGOLIA_INDEX_NAME}>
    <AutoCompleteLocation />
    <Configure hitsPerPage={1} />
  </InstantSearch>
);



class CityInput extends Component {
  static propTypes = {
    hits: PropTypes.arrayOf(PropTypes.object).isRequired,
    currentRefinement: PropTypes.string.isRequired,
    refine: PropTypes.func.isRequired,
  };

  state = {
    value: this.props.currentRefinement,
    selection: null
  };

  onChange = (event, { newValue }) => this.setState({ value: newValue });

  onSuggestionsFetchRequested = ({ value }) => this.props.refine(value);

  onSuggestionsClearRequested = () => this.props.refine();

  getSuggestionValue = (hit, value) => {
    value.updateState({ city_query: hit.business_address });
    return hit.business_address;
  }

  renderSuggestion = hit => {
    return (
      <Highlight attribute="business_address" hit={hit} tagName="mark" />
    );
  }

  getSectionSuggestions = section => {
    console.log(section)
    return section.hits;
  }

  render() {

    const inputProps = {
      placeholder: 'Search by city',
      onChange: this.onChange,
      value: this.state.value,
    };

    return (
      <UserContext.Consumer>
        {value => {
          return (
            <Autosuggest
              suggestions={this.props.hits}
              onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
              onSuggestionsClearRequested={this.onSuggestionsClearRequested}
              getSuggestionValue={(hit) => this.getSuggestionValue(hit, value)}
              renderSuggestion={this.renderSuggestion}
              inputProps={inputProps}
              getSectionSuggestions={this.getSectionSuggestions}
              debugger={true}
            />
          )
        }}
      </UserContext.Consumer>
    );
  }
}

const AutoCompleteLocation = connectAutoComplete(CityInput);