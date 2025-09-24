import type { Meta, StoryObj } from '@storybook/react';
import { Badge, type BadgeProps } from '../components/Badge';

const meta: Meta<BadgeProps> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Badge 组件用于展示小型状态或标签，支持不同的颜色和尺寸。',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'success', 'warning', 'error', 'info'],
      description: '颜色变体',
    },
    size: {
      control: { type: 'inline-radio' },
      options: ['sm', 'md', 'lg'],
      description: '尺寸',
    },
    rounded: {
      control: 'boolean',
      description: '是否为全圆角',
    },
    label: {
      control: 'text',
      description: '显示的文本',
    },
    onClick: { action: 'clicked', description: '点击事件' },
  },
  args: {
    label: 'New',
    variant: 'default',
    size: 'md',
    rounded: true,
  },
};

export default meta;
type Story = StoryObj<BadgeProps>;

export const Playground: Story = {};

export const Variants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <Badge {...args} variant="default" label="Default" />
      <Badge {...args} variant="success" label="Success" />
      <Badge {...args} variant="warning" label="Warning" />
      <Badge {...args} variant="error" label="Error" />
      <Badge {...args} variant="info" label="Info" />
    </div>
  ),
  parameters: {
    docs: {
      description: { story: '展示不同颜色变体。' },
    },
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <Badge {...args} size="sm" label="Small" />
      <Badge {...args} size="md" label="Medium" />
      <Badge {...args} size="lg" label="Large" />
    </div>
  ),
  parameters: {
    docs: {
      description: { story: '对比不同尺寸。' },
    },
  },
};

export const Clickable: Story = {
  args: {
    onClick: () => {
      // action handled via argTypes
    },
    label: 'Clickable',
  },
  parameters: {
    docs: {
      description: { story: '可点击的 Badge，支持键盘 Enter/Space 操作。' },
    },
  },
};


