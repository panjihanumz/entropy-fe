import { faAtom, faCirclePlus, faCircleUser, faHome, faRocket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import A from 'components/atoms/A';
import Button from 'components/atoms/Button';
import H3 from 'components/atoms/H3';
import { useState } from 'react';
import HomeTemplate from 'templates/HomeTemplate.tsx';

const menuState = {
    HOME: 1,
    ROADMAP: 2,
    WIKI: 3,
    ROLES: 4
}

const ButtonIconWrapper = (props: any) => {
    const {
        value,
        icon,
        active,
        onClick
    } = props;

    return (
        <A onClick={onClick} className={`d-flex flex-row me-2 px-3 py-2 align-items-center list-button-sidebar ${active && ' active'}`}>
            <FontAwesomeIcon color={active ? "#915A68" : "#000000"} icon={icon} size="sm" className='pe-2' />
            <H3 className="fs-6" style={{ marginTop: 2 }}>{value}</H3>
        </A>
    )
}

const Home = () => {
    const [menu, setMenu] = useState(menuState.HOME);
    const handleInvite = () => {

    }
    return (
        <HomeTemplate>
            <div className='home-wrapper'>
                <div className='home-header d-flex flex-row justify-content-between px-4'>
                    <div className='d-flex flex-row p-4'>
                        <ButtonIconWrapper active={menu === menuState.HOME} icon={faHome} onClick={() => setMenu(menuState.HOME)} value="Home" />
                        <ButtonIconWrapper active={menu === menuState.ROADMAP} icon={faRocket} onClick={() => setMenu(menuState.ROADMAP)} value="Roadmap" />
                        <ButtonIconWrapper active={menu === menuState.WIKI} icon={faAtom} onClick={() => setMenu(menuState.WIKI)} value="Wiki" />
                        <ButtonIconWrapper active={menu === menuState.ROLES} icon={faCircleUser} onClick={() => setMenu(menuState.ROLES)} value="Roles" />
                    </div>
                    <div className='d-flex align-items-center'>
                        <Button onClick={handleInvite} className='w-100 px-3 d-flex flex-row align-items-center'>
                            <FontAwesomeIcon color={"#FFFFFF"} icon={faCirclePlus} size="sm" className='pe-2' />
                            <div className='fs-6 font-weight-normal'>Invite</div>
                        </Button>
                    </div>
                </div>
                <div className='divider' />
            </div>
        </HomeTemplate>
    )
}

export default Home;