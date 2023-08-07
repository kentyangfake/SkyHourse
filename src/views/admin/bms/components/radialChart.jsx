import { Component } from "react";
import Chart from "react-apexcharts";

class RadialChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "radial-chart",
        },
        plotOptions: {
          radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
              background: "#666",
              startAngle: -90,
              endAngle: 90,
            },
            dataLabels: {
              name: {
                show: false,
              },
              value: {
                fontSize: "25px",
                fontWeight: "bold",
                color: "#4ade80",
                show: true,
              },
            },
          },
        },
        fill: {
          colors: ["#86efac"],
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "horizontal",
            gradientToColors: ["#4ade80"],
            stops: [0, 100],
          },
        },
        stroke: {
          lineCap: "round",
        },
      },
    };
  }

  render() {
    return (
      <div className="-mt-5 -ml-10">
        <Chart
          options={this.state.options}
          series={this.props.value}
          type="radialBar"
        />
      </div>
    );
  }
}

export default RadialChart;
