type TextProps = {
    tag: React.ElementType;
    className?: string;
    children: React.ReactNode
};
const Text = (props: TextProps) => {
    const { tag: Tag = "span", className, children } = props;
    return (
        <Tag className={className}>{children}</Tag>
    )
}

export default Text;