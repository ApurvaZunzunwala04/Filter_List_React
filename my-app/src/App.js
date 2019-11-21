import React from "react";
import "./App.css";
import { Table } from "react-bootstrap";
import TableComponent from "./TableComponent";
import TableRow from "./TableRow";
import SearchBox from "./SearchBox";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      updated_data: null,
      value: null
    };
    this.filterList = this.filterList.bind(this);
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  filterList(event) {
    if (this.state.data != null) {
      let updatedList = this.state.data;
      updatedList = updatedList.filter(function(item) {
        return item.name
          .toLowerCase()
          .startsWith(event.target.value.toLowerCase());
      });
      this.setState({ updated_data: updatedList });
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBox onChange={this.filterList} />
          <Table responsive striped bordered hover size="sm">
            <TableComponent />
            <TableRow
              updated_data={this.state.updated_data}
              data={this.state.data}
            />
          </Table>
        </header>
      </div>
    );
  }
}

export default App;
