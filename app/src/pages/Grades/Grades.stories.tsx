import type { Meta, StoryObj } from "@storybook/react"
import Grades from "./Grades"

const meta = {
    title: 'Grades',
    component: Grades,
    tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	argTypes: {},
} satisfies Meta<typeof Grades>;

export default meta;

type Story = StoryObj<typeof Grades>;

export const Default = {
    args: {
        // props
    },
} satisfies Story;
