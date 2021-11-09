import { ComponentStory, ComponentMeta } from '@storybook/react';
import Center from '../../../components/decorators/center/Center';
import { Button } from './Button';

export default {
  title: 'Material-Ui/Form/Button',
  component: Button,
  argTypes: {
    color: { control: 'color' },
  },
  decorators: [story => <Center>{story()}</Center>]
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const MuiButton = Template.bind({});
MuiButton.args = {
  label: 'Button',
  variant: 'text'
};