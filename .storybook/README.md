# Storybook Configuration

This directory contains the Storybook configuration for the Author Bookstore project.

## Structure

- `main.ts` - Main Storybook configuration
- `preview.ts` - Global preview configuration with Tailwind CSS support

## Component Organization

Components are organized in the following structure:

```
components/
├── ui/           # Basic UI components (Button, Card, Input, etc.)
├── layout/       # Layout components (Header, Footer, Sidebar, etc.)
├── sections/     # Page sections (Hero, Features, etc.)
└── blocks/       # Complex components (BookCard, ProductList, etc.)
```

Each component should have:
- `ComponentName.tsx` - The component implementation
- `ComponentName.stories.ts` - Storybook stories for the component

## Running Storybook

```bash
npm run storybook
```

## Building Storybook

```bash
npm run build-storybook
```

## Writing Stories

Each story file should export:
- `meta` - Component metadata and configuration
- Individual story exports (e.g., `Primary`, `Secondary`, etc.)

Example:
```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
};
```
