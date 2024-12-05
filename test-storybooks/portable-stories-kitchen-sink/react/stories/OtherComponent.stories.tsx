import { Meta, type StoryObj } from '@storybook/react'

declare global {
  // eslint-disable-next-line no-var
  var __vitest_browser__: boolean;
}

const Component = () => <button>test</button>

const meta = {
  title: 'Addons/Group/Other',
  component: Component,
} as Meta<typeof Component>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Passes: Story = {
};

export const Fails: Story = {
  play: async () => {
    throw new Error('Expected failure');
  },
  tags: ['fail-on-purpose'],
};
