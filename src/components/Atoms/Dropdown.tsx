interface DropDownProps {
    // Define any props needed for the dropdown component

    options: string[]; // Array of options to display in the dropdown
    onChange?: (value: string) => void; // Optional callback when selection changes
    className?: string; // Optional additional CSS classes
    value?: string; // Optional controlled value for the dropdown
}

// Dropdown is a reusable select input component
const Dropdown = (props: DropDownProps) => {
    const { options, onChange, className, value } = props;
    // Render a select element with dynamic options and optional styling
    return (
        <select
            value={value}
            onChange={(e) => onChange && onChange(e.target.value)}
            className={`${className}focus:outline-none border-transparent rounded border-none`}
        >
            {/* Render options dynamically if provided */}
            {options?.map((option, key) => (
                <option key={key} value={option}>
                    {option}
                </option>
            ))}

        </select>
    )
}
export default Dropdown;