import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Input from "components/atoms/Input";

const InputSearch = (props: any) => {
    const {
        onSubmit,
        onChange,
        value,
        className,
        placeholder
    } = props;
    return (
        <div className="position-relative search-input">
            <FontAwesomeIcon icon={faMagnifyingGlass} size="xs" />
            <Input placeholder={placeholder} className={className} onSubmit={onSubmit} onChange={onChange} value={value} />
        </div>
    )
}

export default InputSearch;