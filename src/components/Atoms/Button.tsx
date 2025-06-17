interface Props {
    onClick?: () => void;
    className: string;
    key?: string | number;
    children: React.ReactNode

}
const Button = (props: Props) => {
    // Reusable button component
    const { children, onClick, className } = props;
    return (
        // Render a button element with dynamic classes and label

        <button
            className={`${className} transition-transform duration-200`} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;