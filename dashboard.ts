import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexStroke,
  ApexPlotOptions,
  ApexDataLabels,
  ApexMarkers,
  ApexXAxis,
  ApexLegend
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  stroke: ApexStroke;
  plotOptions: ApexPlotOptions;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  xaxis: ApexXAxis;
  legend: ApexLegend;
};

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent {

  chartOptions: Partial<ChartOptions> = {

    series: [
      {
        name: "Target",
        type: "column",
        data: [3.5,2.8,2.6,3.0,4.2,3.3,5.0,4.8,4.3,4.1,4.2,4.3]
      },
      {
        name: "Achieved",
        type: "column",
        data: [2.87,2.47,2.07,1.30]
      },
      {
        name: "Growth",
        type: "line",
        data: [2.87,1.6,0.5,0.9,-1.02,-1.0,-0.40,-1.72,-2.20,-2.16,-1.65,-0.44]
      }
    ],

    chart: {
      height: 420,
      type: "line",
      stacked: false,
      toolbar:{
        show:false
      }
    },

    stroke: {
      width: [0,0,4],
      curve: "smooth"
    },

    plotOptions: {
      bar: {
        columnWidth: "45%"
      }
    },

    dataLabels: {
      enabled: true,
      enabledOnSeries: [1],
      style:{
        fontSize:'12px'
      }
    },

    markers: {
      size: 6,
      strokeWidth: 2,
      hover:{
        size:8
      }
    },

    xaxis: {
      categories: [
        "Jan","Feb","Mar","Apr","May","Jun",
        "Jul","Aug","Sep","Oct","Nov","Dec"
      ]
    },

    legend:{
      position:"bottom"
    }

  };

}