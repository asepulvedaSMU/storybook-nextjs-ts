import './mylabel.css';
export const MyLabel = ({ label, size = 'normal', allCaps = false, color = 'text-primary', fontColor, }) => {
    return (<span className={`${size} ${color} ${fontColor}`}>
			{allCaps ? label.toUpperCase() : label}
		</span>);
};
