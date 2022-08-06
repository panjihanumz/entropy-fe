import './styles.scss';

const ImageByFirstString = (props: any) => {
    const {
        size = 0,
        value = '',
        className
    } = props;

    const firstString = value.charAt(0);

    return (
        <div className={className}>
            <div className={"img-first-string-wrapper d-flex align-items-center justify-content-center"} style={{
                height: size,
                width: size
            }}><span className='fs-4'>{firstString}</span></div>
        </div>
    )
}

export default ImageByFirstString;