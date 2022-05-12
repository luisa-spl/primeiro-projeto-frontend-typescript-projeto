import './styles.css';
import Logo from '../../assets/logo.svg';
import { useNavigate } from 'react-router-dom';
import ArrowBack from '../../assets/arrow_back.svg';

type Props = {
    showBackArrow?: boolean;
}

function Header({ showBackArrow }: Props) {
    const navigate = useNavigate();

    return (
        <header>
            {showBackArrow &&
                <img className='arrow-back' src={ArrowBack} alt="arrow back" onClick={() => navigate(-1)} />
            }
            <img src={Logo} alt="logo" />
        </header>
    )
}

export default Header;