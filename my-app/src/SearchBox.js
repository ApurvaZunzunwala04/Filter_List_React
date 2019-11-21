import React from "react";

function SearchBox(props) {
  return (
    <form>
      <fieldset className="form-group">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Search"
          onChange={props.onChange}
        />
      </fieldset>
    </form>
  );
}

export default SearchBox;
