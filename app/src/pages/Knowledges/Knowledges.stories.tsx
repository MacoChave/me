import type { Meta, StoryObj } from "@storybook/react"
import Knowledges from "./Knowledges"

const meta = {
    title: 'Knowledges',
    component: Knowledges,
    tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	argTypes: {},
} satisfies Meta<typeof Knowledges>;

export default meta;

type Story = StoryObj<typeof Knowledges>;

export const Default = {
    args: {
        // props
    },
} satisfies Story;
