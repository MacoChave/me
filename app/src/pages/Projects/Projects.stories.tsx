import type { Meta, StoryObj } from "@storybook/react"
import Projects from "./Projects"

const meta = {
    title: 'Projects',
    component: Projects,
    tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	argTypes: {},
} satisfies Meta<typeof Projects>;

export default meta;

type Story = StoryObj<typeof Projects>;

export const Default = {
    args: {
        // props
    },
} satisfies Story;
