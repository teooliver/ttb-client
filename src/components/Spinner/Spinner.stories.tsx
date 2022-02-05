import { ComponentStory, ComponentMeta } from '@storybook/react';
import Spinner from './Spinner';

export default {
  title: 'Spinner',
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = () => <Spinner />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Stopwatch',
};
