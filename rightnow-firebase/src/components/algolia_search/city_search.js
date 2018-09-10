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

  onSuggestionsFetchRequested = ({ value }) => this.props.refine(value);

  onSuggestionsClearRequested = () => this.props.refine();

  getSuggestionValue = (hit, value) => {
    value.updateState({ city_query: hit.business_address });
    return hit.business_address;
  }

  renderSuggestion = hit => <Highlight attribute="business_address" hit={hit} tagName="mark" />;

  getSectionSuggestions = section => section.hits;

  render() {
    return (
      <UserContext.Consumer>
        {value => {

          const inputProps = {
            placeholder: 'Search by city',
            onChange: (event, { newValue, method }) => {
              // if (method === "click" && value.service_query !== "") {
              //   value.updateState({ service_query: "" });
              // }
              value.updateState({ city_query: newValue })
            }, // this.onChange(event, data, value),
            value: value.city_query // this.state.value,
          };

          return (
            <Autosuggest
            id="city_boi"
              suggestions={this.props.hits}
              onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
              onSuggestionsClearRequested={this.onSuggestionsClearRequested}
              getSuggestionValue={(hit) => this.getSuggestionValue(hit, value)}
              renderSuggestion={this.renderSuggestion}
              inputProps={inputProps}
              getSectionSuggestions={this.getSectionSuggestions}
            />
          )
        }}
      </UserContext.Consumer>
    );
  }
}

const AutoCompleteLocation = connectAutoComplete(CityInput);