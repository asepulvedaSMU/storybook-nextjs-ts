/// <reference types="react" />
import './mylabel.css';
export interface Props {
    /**
     * Text to display
     */
    label: string;
    /**
     * Label size
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Capitalize letters
     */
    allCaps?: boolean;
    /**
     * Label color
     */
    color?: 'text-primary' | 'text-secondary' | 'text-tertiary';
    /**
     * Font color
     */
    fontColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, }: Props) => import("react").JSX.Element;
