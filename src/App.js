import React from 'react';
import './App.css';
import { VerticalBarChart } from './variant/VerticalBarChart';
import { HorizontalBarChart } from './variant/HorizontalBarChart';
import { StackedBarChart } from './variant/StackedBarChart';
import { GroupedBarChart } from './variant/GroupedBarChart';
import { AreaChart } from './variant/AreaChart';
import { LineChart } from './variant/LineChart';
import { MultiaxisLineChart } from './variant/MultiaxisLineChart';
import { PieChart } from './variant/PieChart';
import { DoughnutChart } from './variant/DoughnutChart';
import { PolarAreaChart } from './variant/PolarAreaChart';
import { RadarChart } from './variant/RadarChart';
import { ScatterChart } from './variant/ScatterChart';
import { BubbleChart } from './variant/BubbleChart';
import { MultitypeChart } from './variant/MultitypeChart';
import { ChartEvents } from './variant/ChartEvents';
import { GetChartRef } from './variant/GetChartRef';
import { GradientChart } from './variant/GradientChart';

function App() {
  return (
    <div className="App">

      <div className="Items">
        <div>Vertical Bar Chart</div>
        <VerticalBarChart />
      </div>

      <div className='Items'>
        <div>Horizontal Bar Chart</div>
        <HorizontalBarChart />
      </div>

      <div className='Items'>
        <div>Stacked Bar Chart</div>
        <StackedBarChart />
      </div>

      <div className='Items'>
        <div>Grouped Bar Chart</div>
        <GroupedBarChart />
      </div>

      <div className='Items'>
        <div>Vertical Bar Chart</div>
        <AreaChart />
      </div>

      <div className='Items'>
        <div>Line Chart</div>
        <LineChart />
      </div>

      <div className='Items'>
        <div> Multiaxis Line Chart</div>
        <MultiaxisLineChart />
      </div>

      <div className='Items'>
        <div>Scatter Chart</div>
        <ScatterChart />
      </div>

      <div className='Items'>
        <div> Pie Chart</div>
        <PieChart />
      </div>

      <div className='Items'>
        <div>Doughnut Chart</div>
        <DoughnutChart />
      </div>

      <div className='Items'>
        <div>Polar Area Chart</div>
        <PolarAreaChart />
      </div>

      <div className='Items'>
        <div>Radar Chart</div>
        <RadarChart />
      </div>

      <div className='Items'>
        <div>Bubble Chart</div>
        <BubbleChart />
      </div>

      <div className='Items'>
        <div>Multitype Chart</div>
        <MultitypeChart />
      </div>

      <div className='Items'>
        <div>Chart Events</div>
        <ChartEvents />
      </div>

      <div className='Items'>
        <div>Get Chart Ref</div>
        <GetChartRef />
      </div>

      <div className='Items'>
        <div>Gradient Chart</div>
        <GradientChart />
      </div>

    </div>
  );
}

export default App;
