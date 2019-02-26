import React from 'react';
import { 
    InstantSearch, Hits, 
    SearchBox, Highlight,
    RefinementList,Pagination,
    CurrentRefinements,
    ClearRefinements} from 'react-instantsearch-dom';

const SearchEngine= () => (
  <InstantSearch
    appId="HFOJJ5GAUD"
    apiKey="c0f19066098ec67918997004a056065a"
    indexName="studentMarketPlace"
  >
    {/* Search widgets will go there */}
    <SearchBook/>
  </InstantSearch>
);


function SearchBook() {
    return (
      <div className="container">
        <CurrentRefinements />
        <ClearRefinements />
        <SearchBox />
        <RefinementList attribute="category" />
        <Hits hitComponent={Book}/>
        <Pagination />
      </div>
    );
  }


function Book({ hit }) {
    return(
        <div>
          <div>{hit.title}</div>
          <img src={hit.image} align="left" alt={hit.title} />
          <div className="hit-name">
            <Highlight attribute="name" hit={hit.title} />
          </div>
          <div className="hit-price">${hit.price}</div>
        </div>
        )
  }
export default SearchEngine
