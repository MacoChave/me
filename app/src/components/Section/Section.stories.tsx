import type { Meta, StoryObj } from "@storybook/react"
import Section from "./Section"

const meta = {
    title: 'Section',
    component: Section,
    tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	argTypes: {},
} satisfies Meta<typeof Section>;

export default meta;

type Story = StoryObj<typeof Section>;

export const Default = {
    args: {
        // props
    },
} satisfies Story;
