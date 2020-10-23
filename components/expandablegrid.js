import React from "react";

export default class ExpandableGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          class: 1,
          name: "One",
          nextLevel: [{ color: "green" }, { color: "yellow" }]
        },
        {
          id: 2,
          class: 2,
          name: "Two",
          nextLevel: [{ color: "green" }, { color: "yellow" }]
        },
        {
          id: 3,
          class:3,
          name: "Three",
          nextLevel: [{ color: "green" }, { color: "yellow" }]
        }
      ],
      expandedRows: []
    };
  }

  handleClick = data => {
    let expandedRowsLocal = [];
    if (this.state.expandedRows.includes(data.id)) {
      expandedRowsLocal = this.state.expandedRows.filter(x => x != data.id);
    } else {
      expandedRowsLocal = this.state.expandedRows.concat(data.id);
    }

    this.setState({ ...this.state, expandedRows: expandedRowsLocal });
  };

  validTDs(data){
    //id and nextLevel are component specific properties
    let result = [];
    this.props.properties.map(x=>{
      result.push(<td>{data[x]}</td>)
    })
      return result;
  };


  showRow = (data,skipTDs) => {
    return (
      <React.Fragment>
        <tr onClick={() => this.handleClick(data)} key={data.id}>
          {this.validTDs(data)}
        </tr>
        {this.state.expandedRows.includes(data.id) ? (
          data.nextLevel.map(x => (
            <tr key={data.id + x.color + "expanded"}>
              <td />
              <td />
              <td>{x.color}</td>
            </tr>
          ))
        ) : (
          <React.Fragment />
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
          <th style={{ width: "200px" }}>Color</th>
        </tr>
        {this.state.data.map(x => this.showRow(x,0))}
      </table>
    );
  }
}
