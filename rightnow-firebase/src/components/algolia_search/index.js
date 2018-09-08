import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InstantSearch, Configure, Index, Highlight } from 'react-instantsearch/dom';
import { connectAutoComplete } from 'react-instantsearch/connectors';
import Autosuggest from 'react-autosuggest';
import "./styles.css";
import { configs } from "../../environment";



export const AlgoliaSearch = () => (
  <InstantSearch
    appId={configs.ALGOLIA_APP_ID}
    apiKey={configs.ALGOLIA_API_KEY}
    indexName={configs.ALGOLIA_INDEX_NAME}
  >
    <AutoComplete />
    {/* <Configure hitsPerPage={1} /> */}
  </InstantSearch>
);



class PrimaryInput extends Component {
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

  getSuggestionValue = hit => {
    console.log(hit)
    this.setState({ selection: hit });
    return hit.service;
  }

  renderSuggestion = hit => (<Highlight attribute="service" hit={hit} tagName="mark" />);

  renderSectionTitle = section => section.index;

  getSectionSuggestions = section => section.hits;

  // handleSelection = val => {
  //   console.log(val);
  // }

  render() {

    const inputProps = {
      placeholder: 'Search for services...',
      onChange: this.onChange,
      value: this.state.value,
      style: {
        // width: "100%",
        // padding: "2.8%",
        // fontSize: "1.5em",
        // borderRadius: "5px",
        // border: "none",
      }
    };

    return (
      <Autosuggest
        suggestions={this.props.hits}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
        renderSectionTitle={this.renderSectionTitle}
        getSectionSuggestions={this.getSectionSuggestions}
        // onSelect={this.handleSelection}
      />
    );
  }
}

const AutoComplete = connectAutoComplete(PrimaryInput);
