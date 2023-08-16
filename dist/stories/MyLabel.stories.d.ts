/// <reference types="react" />
import { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ label, size, allCaps, color, fontColor, }: import("./components/MyLabel").Props) => import("react").JSX.Element;
    tags: string[];
    parameters: {
        layout: string;
    };
    argTypes: {
        size: {
            control: string;
        };
        fontColor: {
            control: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Basic: Story;
export declare const AllCaps: Story;
export declare const Secondary: Story;
export declare const CustomColor: Story;
