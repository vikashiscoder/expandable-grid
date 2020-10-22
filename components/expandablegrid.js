import React from "react";

export default class ExpandableGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          class: 1,
          name: "One",
          students: [{ color: "green" }, { color: "yellow" }]
        },
        {
          class: 2,
          name: "Two",
          students: [{ color: "green" }, { color: "yellow" }]
        },
        {
          class: 3,
          name: "Three",
          students: [{ color: "green" }, { color: "yellow" }]
        }
      ],
      expandedRows: []
    };
  }

  handleClick = data => {
    let expandedRowsLocal = [];
    if (this.state.expandedRows.includes(data.class)) {
      expandedRowsLocal = this.state.expandedRows.filter(x => x != data.class);
    } else {
      expandedRowsLocal = this.state.expandedRows.concat(data.class);
    }

    this.setState({ ...this.state, expandedRows: expandedRowsLocal });
  };

  showRow = data => {
    return (
      <React.Fragment>
        <tr onClick={() => this.handleClick(data)} key={data.class}>
          <td>{data.class}</td>
          <td>{data.name}</td>
          <td />
        </tr>
        {this.state.expandedRows.includes(data.class) ? (
          data.students.map(x=>

          <tr key={data.class + x.color + "expanded"}>
            <td />
            <td />
            <td>{x.color}</td>
          </tr>
          )
          
        ) : (
          ""
        )}
      </React.Fragment>
    );
  };

  render() {
    return (
      <table style={{ tableLayout: "fixed" }}>
        <tr>
          <th>Class</th>
          <th>Name</th>
          <th style={{ width: "200px"}}>Color</th>
        </tr>
        {this.state.data.map(x => this.showRow(x))}
      </table>
    );
  }
}
