import React, { Component } from 'react';
import { PieChart, Pie, Legend } from 'recharts';

export default class Chart extends Component {
  static propTypes = {};

  state = {
    camName: '',
    dayName: '',
  };

  onDaySelect = e => {
    const { selectDay } = this.props;
    this.setState({ dayName: e.name });
    selectDay(e.name);
  };

  onAllSelect = e => {
    const { dayName, camName } = this.state;
    const { selectAll } = this.props;
    this.setState({ camName: e.name });
    if (dayName) {
      selectAll(dayName, camName);
    }
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
          onClick={this.onAllSelect}
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
          onClick={this.onDaySelect}
          dataKey="value"
        />
      </PieChart>
    );
  }
}
