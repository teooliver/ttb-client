import { ComponentStory, ComponentMeta } from '@storybook/react';
import Stopwatch from './Stopwatch';

export default {
  title: 'Stopwatch',
  component: Stopwatch,
} as ComponentMeta<typeof Stopwatch>;

const Template: ComponentStory<typeof Stopwatch> = () => <Stopwatch />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Stopwatch',
};
