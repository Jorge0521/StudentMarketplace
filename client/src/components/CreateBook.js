import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'


var algoliasearch = require('algoliasearch');

var client = algoliasearch('HFOJJ5GAUD', '391f543039c8a0b3752d4296e2149507');
var index = client.initIndex('studentMarketPlace');


const BOOK_MUTATION = gql`
  mutation BookMutation($price: Float, $title: String!, $author: String!, $published: Int!, $url: String){
  createItem( data:{
   listed: true,
   price: $price,
   bookDetails:{
     create:{
      title: $title,
      author: $author,
      published: $published,
      condition: NEW,
    	genre: FICTION_FANTASY
     }
   }
  photos:{
    create:{
      url: $url
    }
  }

 })
 {
   id
   price
 }
}
`

/*
function fetchDataFromDatabase() {
  const title = ""
  return title;
}

const records = fetchDataFromDatabase();

console.log(records)
*/


function someFunc(title,author,published,url,price) {
  index.addObject({
    title: title,
    author: author,
    published: published,
    condition: "NEW",
    genre: "FICTION_FANTASY",
    image: url,
    price: price
  }, function(err, content) {
    console.log('objectID=' + content.objectID);
  });
    
}



class CreateBook extends Component {
  constructor(props){
    super(props)
    this.state = {
      price: '',
      title: '',
      author: '',
      published: '',
      url: ''
    }
  }

  render() {
    const { price, title, author, published, url } = this.state

    return (
      <div>
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={title}
            onChange={e => this.setState({ title: e.target.value })}
            type="text"
            placeholder="Name of book"
          />
          <input
            className="mb2"
            value={url}
            onChange={e => this.setState({ url: e.target.value })}
            type="text"
            placeholder="Picture URL"
          />
          <input
            className="mb2"
            value={author}
            onChange={e => this.setState({ author: e.target.value })}
            type="text"
            placeholder="Author of book"
          />
          <input
            className="mb2"
            value={price}
            onChange={e => this.setState({ price: parseFloat(e.target.value)})}
            type="number" 
            min="1" 
            step="any"
            placeholder="Price of book"
          />
          <input
            className="mb2"
            value={published}
            onChange={e => this.setState({ published: parseInt(e.target.value )})}
            type="number" 
            min="1" 
            placeholder="Published: "
          />
        </div>
        <div>
        {console.log(price)}
        {console.log(title)}
        {console.log(published)}
        {console.log(url)}
        </div>
        <Mutation
          mutation={BOOK_MUTATION}
          variables={{ price, title, author, published, url }}
        >
          {postBook => <button onClick={() => someFunc(title,author,published,url,price)}>Submit</button>}
        </Mutation>
      </div>
    )
  }
}

export default CreateBook