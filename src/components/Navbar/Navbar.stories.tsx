import { ComponentStory, ComponentMeta } from '@storybook/react';
import Navbar from './Navbar';

export default {
  title: 'Navbar',
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = () => <Navbar />;

export const Primary = Template.bind({});

Primary.story = {
  parameters: {
    nextRouter: {
      path: '/',
      asPath: '/',
      query: {
        id: '/',
      },
    },
  },
};

Primary.args = {
  primary: true,
  label: 'Navbar',
};
