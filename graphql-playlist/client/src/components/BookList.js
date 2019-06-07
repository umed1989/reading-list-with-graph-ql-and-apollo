import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

class Booklist extends Component {
  displayBooks() {
    const { data } = this.props;
    if (data.loading) {
      return <div>Loading Books...</div>;
    } else {
      return data.books.map(book => {
        return <li key={book.id}>{book.name}</li>;
      });
    }
  }

  render() {
    return (
      <div>
        <ul id="book">{this.displayBooks()}</ul>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(Booklist);
