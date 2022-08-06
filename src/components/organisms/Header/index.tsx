import Images from 'assets/images';
import H2 from 'components/atoms/H2';
import Img from 'components/atoms/Img';
import InputSearch from 'components/molecules/InputSearch';
import './header.scss';

const Header = () => {
    return (
        <div className="wrapper d-flex justify-content-between align-items-center px-4">
            <div className='d-flex flex-row justify-content-center align-items-center'>
                <Img src={Images.Logos.LogosEntropyLight} className='img-logo' />
                <H2 className='fc-white ms-4'>ENTROPY</H2>
            </div>
            <div className='col-3'>
                <InputSearch className='w-100' placeholder='Search in chorus' />
            </div>
            <div style={{width: 170}}></div>
        </div>
    )
}

export default Header;