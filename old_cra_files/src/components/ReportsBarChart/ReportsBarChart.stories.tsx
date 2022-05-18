import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ReportsBarChart } from './ReportsBarChart';

export default {
  title: 'ReportsBarChart',
  component: ReportsBarChart,
} as ComponentMeta<typeof ReportsBarChart>;

const Template: ComponentStory<typeof ReportsBarChart> = (chartData) => (
  <ReportsBarChart {...chartData} />
);

const chartData = {
  labels: [
    '2021-12-16',
    '2021-12-15',
    '2021-12-14',
    '2021-12-13',
    '2021-12-12',
  ],
  datasets: [
    {
      label: 'Hours X days',
      data: ['03', 15, '09', '05', 12],
      backgroundColor: [
        '#61e294ff',
        '#7bcdbaff',
        '#9799caff',
        '#bd93d8ff',
        '#b47aeaff',
        '#d3d5d4ff',
        '#a2c5acff',
        '#9db5b2ff',
        '#878e99ff',
        '#7f6a93ff',
      ],
    },
  ],
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'ReportsBarChart',
  chartData: chartData,
};
