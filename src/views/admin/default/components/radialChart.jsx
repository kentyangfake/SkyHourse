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
              background: "#333",
              startAngle: -90,
              endAngle: 90,
            },
            dataLabels: {
              name: {
                show: false,
              },
              value: {
                fontSize: "20px",
                fontWeight: "bold",
                show: true,
              },
            },
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "horizontal",
            gradientToColors: ["#87D4F9"],
            stops: [0, 100],
          },
        },
        stroke: {
          lineCap: "round",
        },
      },
      series: [67],
    };
  }

  render() {
    return (
      <div className="flex">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="radialBar"
          colors="#20E647"
        />
      </div>
    );
  }
}

export default RadialChart;
