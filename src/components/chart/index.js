import React, { Component } from 'react';
import { PieChart, Pie, Legend } from 'recharts';

export default class Chart extends Component {
  static propTypes = {};

  state = {};

  onSelect = e => {
    console.log(e.name);
  };

  render() {
    const { sol, cam } = this.props;

    return (
      <PieChart width={500} height={500}>
        <Legend verticalAlign="top" height={36} width={450} />
        <Pie
          data={cam}
          cx={250}
          cy={250}
          outerRadius={120}
          fill="#8884d8"
          onClick={this.onSelect}
          label
          dataKey="value"
        />
        <Pie
          data={sol}
          cx={250}
          cy={250}
          innerRadius={140}
          outerRadius={180}
          fill="#82ca9d"
          label
          onClick={this.onSelect}
          dataKey="value"
        />
      </PieChart>
    );
  }
}
