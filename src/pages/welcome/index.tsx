import './welcome.scss';
import Images from 'assets/images';
import Img from 'components/atoms/Img';
import H3 from 'components/atoms/H3';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    const navigate = useNavigate();
    const handleContinue = () => {
        return navigate("/home");
    }
    return (
        <div className="container">
            <div className="d-flex flex-column justify-content-center align-items-center min-vh-100">
                <Img src={Images.Logos.LogosEntropy} className="img-welcome" />
                <div style={{ width: 250 }}>
                    <H3 className='mt-5'>What’s your name (or alias)</H3>
                    <Input className='fs-6 w-100 mt-2' placeholder='Your Name' />
                    <Button onClick={handleContinue} className='w-100 mt-3'>
                        <div className='fs-6'>Continue</div>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Welcome;