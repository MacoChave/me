import type { Meta, StoryObj } from "@storybook/react"
import FlipCard from "./FlipCard"

const meta = {
    title: 'FlipCard',
    component: FlipCard,
    tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	argTypes: {},
} satisfies Meta<typeof FlipCard>;

export default meta;

type Story = StoryObj<typeof FlipCard>;

export const Default = {
    args: {
        // props
    },
} satisfies Story;
