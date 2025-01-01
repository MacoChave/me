import type { Meta, StoryObj } from "@storybook/react"
import MainLayout from "./MainLayout"

const meta = {
    title: 'MainLayout',
    component: MainLayout,
    tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	argTypes: {},
} satisfies Meta<typeof MainLayout>;

export default meta;

type Story = StoryObj<typeof MainLayout>;

export const Default = {
    args: {
        // props
    },
} satisfies Story;
