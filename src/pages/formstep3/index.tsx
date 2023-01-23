import { Theme } from '../../components';
import * as C from './styles' ; 
import { useForm, FormActions } from '../../contexts/FormContext';
import { useNavigate } from 'react-router-dom';
import { ChangeEvent, useEffect } from 'react';
import { BackButton } from '../../components/backbutton';

export const FormStep3 = () => {
    
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if (state.name === ""){
            navigate("/");
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            });
        }
    }, []);

    const handleSend = () => {
        if (state.email !== "" && state.github !== ""){
            navigate('/step4');     
        } else {
            alert("Preencha todos os dados!");
        }
    }

    const handleBackStep = () => {
        navigate('/step2');
        console.log('backstep-2');
    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value,
        });
    }

    const handleGitHubChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGitHub,
            payload: e.target.value,
        });
    }
    
    return(
        <Theme>
            <C.Container>
                <p>Passo 3/4</p>
                <h1>Legal {state.name}, onde podemos te encontrar?</h1>
                <p>Preencha o campo abaixo com seu nome completo.</p>
                <hr />

                <label>Qual é o seu e-mail?
                    <input
                        type="email"
                        value={state.email}
                        onChange={handleEmailChange}
                    />
                </label>
                
                <label>Qual é o seu GitHub?
                    <input
                        type="url"
                        value={state.github}
                        onChange={handleGitHubChange}
                    />
                </label>

                <BackButton step={state.currentStep} value="Voltar" onClick={handleBackStep}/>
                <button className='btnNext' onClick={handleSend}>Enviar</button>
            </C.Container>
        </Theme>
        
    );
}