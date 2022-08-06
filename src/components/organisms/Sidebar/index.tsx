import { faCubesStacked, faFileLines, faInbox } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import A from 'components/atoms/A';
import H2 from 'components/atoms/H2';
import H3 from 'components/atoms/H3';
import ImageByFirstString from 'components/molecules/ImageByFirstString';
import './sidebar.scss';

const TextIconWrapper = (props: any) => {
    const {
        value,
        icon
    } = props;

    return (
        <A className='d-flex flex-row px-4 py-3 align-items-center list-button-sidebar'>
            <FontAwesomeIcon icon={icon} size="lg" className='px-3' />
            <H3 className="fs-5 ms-1">{value}</H3>
        </A>
    )
}
const Sidebar = () => {
    return (
        <div className="sidebar-wrapper d-flex flex-column">
            <div className='d-flex flex-row align-items-center p-4'>
                <ImageByFirstString className="me-2" size={50} value="Panji" />
                <H2>Panji</H2>
            </div>
            <div className="sidebar-divider" />
            <div className='py-2'>
                <H2 className='px-4 pt-4'>Base</H2>
                <TextIconWrapper icon={faInbox} value='Inbox' />
                <TextIconWrapper icon={faFileLines} value='My work' />
            </div>
            <div className='py-2'>
                <H2 className='px-4'>Pods</H2>
                <TextIconWrapper icon={faCubesStacked} value='Create' />
            </div>
            <div className='py-2'>
                <H2 className='px-4'>Favorite</H2>
                <H3 className='mt-2 px-4'>Your favorites documents will show here</H3>
            </div>
        </div>
    )
}

export default Sidebar;