import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import { number, arrayOf } from 'prop-types';

export default class Chart extends Component {
  static propTypes = {
    chartData: arrayOf(number),
  };

  static defaultProps = {
    chartData: [],
  };

  state = {};

  render() {
    const { chartData } = this.props;
    const data = {
      labels: ['Red', 'Blue', 'Yellow', 'Green'],
      datasets: [
        {
          data: chartData,
          backgroundColor: ['#ef5777', '#4bcffa', '#FFCE56', '#0be881'],
          hoverBackgroundColor: ['#ef5777', '#4bcffa', '#FFCE56', '#0be881'],
        },
      ],
    };
    console.log(chartData);
    return (
      <Pie
        data={data}
        width={100}
        height={50}
        options={{
          maintainAspectRatio: false,
          legend: {
            display: false,
          },
          onClick(evt, item) {
            console.log(item[0]._model.label);
          },
        }}
      />
    );
  }
}
