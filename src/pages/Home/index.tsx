import './styles.scss';
import profile from './img/Myproject.png';
import Button from '../../components/button';

export default function Home() {
    return (
        <div className='div-home'>
            <div className='div-menu'>
                <ul>
                    <li><a href="/">INÍCIO</a></li>
                    <li><a href="/">SERVIÇOS</a></li>
                    <li><a href="/">ATENDIMENTO</a></li>
                    <li><a href="/">SOBRE</a></li>
                </ul>
            </div>

            <div className='container'>
                <Button />
            </div>

            <div className='title'>
                <h1 className='txtHome1'>Venha conhecer</h1>
                <h2 className='txtHome2'>os nossos serviços!</h2>
            </div>

            <div className='imgBx'>
                <img src={profile} alt='profile'/>
            </div>
        </div>
        
    );
}