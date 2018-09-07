import React from 'react';
import { InstantSearch, Hits, SearchBox, Highlight } from 'react-instantsearch-dom';



const Product = ({ hit }) => {
  return (
    <div style={{ marginTop: '10px' }}>
      <span className="hit-name">
        <Highlight attribute="name" hit={hit} />
      </span>
    </div>
  );
}



const Search = () => {
  return (
    <div className="container">
      <SearchBox />
      <Hits hitComponent={Product} />
    </div>
  );
}



export const AlgoliaSearch = () => (
  <InstantSearch
    appId="xxx"
    apiKey="xxx"
    indexName="xxx"
  >
    <Search />
  </InstantSearch>
);
