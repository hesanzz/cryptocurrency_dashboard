// Props for the ImgContainer component
type ImageProps = {
    src?: string;
    alt?: string;
    className?: string;
}

// ImgContainer is a reusable image wrapper component
const ImgContainer = (props: ImageProps) => {
    const { src, alt, className = "" } = props;
    return (
        <img
            src={src}
            alt={alt}
            className={className}
        />
    )
}
export default ImgContainer;