import React from "react";
import BookForm from "./BookForm";

export default function AddBook() {

    const handleOnSubmit = (book) => {
        console.log(book);
      };
  return (
    <div className="container">
      <React.Fragment>
        <BookForm handleOnSubmit={handleOnSubmit} />
      </React.Fragment>
    </div>
  );
}
