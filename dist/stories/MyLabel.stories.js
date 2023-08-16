import { MyLabel } from './components/MyLabel';
const meta = {
    title: 'UI/labels/MyLabel',
    component: MyLabel,
    tags: ['autodogs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        size: { control: 'select' },
        fontColor: { control: 'color' },
    },
};
export default meta;
export const Basic = {
    args: {
        label: 'Basic Label',
    },
};
export const AllCaps = {
    args: {
        label: 'Basic Label',
        allCaps: true,
    },
};
export const Secondary = {
    args: {
        label: 'Secondary Label',
        color: 'text-secondary',
    },
};
export const CustomColor = {
    args: {
        label: 'Secondary Label',
        fontColor: '#551',
    },
};
