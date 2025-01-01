import type { Meta, StoryObj } from "@storybook/react"
import AboutMe from "./AboutMe"

const meta = {
    title: 'AboutMe',
    component: AboutMe,
    tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	argTypes: {},
} satisfies Meta<typeof AboutMe>;

export default meta;

type Story = StoryObj<typeof AboutMe>;

export const Default = {
    args: {
        // props
    },
} satisfies Story;
