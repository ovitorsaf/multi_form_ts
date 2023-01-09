import { Theme } from '../../components';
import * as C from './styles' ; 
import { useNavigate } from 'react-router-dom';

export const FormStep1 = () => {
    
    const navigate = useNavigate();

    const handleNextStep = () => {
        navigate('/step2');
        console.log('step 2');
    }
    
    return(
        <Theme>
            <C.Container>
                <p>Passo 1/3</p>
                <h1>Vamos começar com seu nome</h1>
                <p>Preencha o campo abaixo com seu nome completo.</p>
                <hr />

                <label>
                    Seu nome completo
                    <input type="text" autoFocus/>
                </label>

                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
        
    );
}