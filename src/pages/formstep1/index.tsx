import { Theme } from '../../components';
import { ButtonNext } from '../../components/buttonnext';
import * as C from './styles' ; 
import { useForm, FormActions } from '../../contexts/FormContext';
import { useNavigate } from 'react-router-dom';
import { ChangeEvent, useEffect } from 'react';

export const FormStep1 = () => {
    
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        });
    }, []);

    const handleNextStep = () => {
        if (state.name !== ''){
            navigate('/step2');
            console.log('step 2');
        } else {
            alert("Preencha os dados");
        }
        
    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value,
        });
    }
    
    return(
        <Theme>
            <C.Container>
                <p>Passo 1/4</p>
                <h1>Vamos começar com seu nome</h1>
                <p>Preencha o campo abaixo com seu nome completo.</p>
                <hr />

                <label>
                    Seu nome completo
                    <input 
                        type="text" 
                        autoFocus
                        value={state.name} 
                        onChange={handleNameChange}
                    />
                </label>

                <ButtonNext onClick={handleNextStep} value="Próximo" step={state.currentStep}/>
            </C.Container>
        </Theme>
        
    );
}