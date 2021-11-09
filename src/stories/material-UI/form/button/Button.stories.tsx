import React from 'react';
import { ThemeProvider } from "@mui/material";
import { MuiTheme } from '../../../../material-UI/theme';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'Material-Ui/Form/Button',
  component: Button,
  argTypes: {
    color: { control: 'color' },
  },
  decorators: [
    (Story: React.ComponentType) => (
      <ThemeProvider theme={MuiTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const MuiButton = Template.bind({});
MuiButton.args = {
  label: 'Button',
  variant: 'contained',
  color: 'primary'
};