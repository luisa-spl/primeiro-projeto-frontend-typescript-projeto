import './styles.css';
import Logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

function SignIn() {
    return (
        <div className="container container-sign-in">
            <div className='sign-in'>
                <img src={Logo} alt="logo" />

                <form>
                    <input type="text" placeholder="E-mail" />
                    <input type="password" placeholder="Password" />
                    <span>
                        Não tem cadastro?
                        <Link to=""> Clique aqui!</Link>
                    </span>
                    <button type="submit" className="btn-pink">Log In</button>
                </form>

            </div>
        </div>
    )
}

export default SignIn;