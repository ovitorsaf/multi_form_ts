import { Theme } from '../../components/theme/';
import * as C from './styles' ; 
import { useForm, FormActions } from '../../contexts/FormContext';
import { useNavigate, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { SelectOption } from '../../components/selectoption';
import { BackButton } from '../../components/backbutton';

export const FormStep2 = () => {
    
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if (state.name === ""){
            navigate("/");
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            });
        }
    }, []);

    const handleNextStep = () => {
        if (state.name !== ''){
            navigate('/step3');
            console.log('step 3');
        } else {
            alert("Preencha os dados");
        }
    }

    const handleBackStep = () => {
        navigate('/');
        console.log('backstep');
    }
    
    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level
        });
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 2/4</p>
                <h1>Ok {state.name}, o que melhor te descreve?</h1>
                <p>Selecione abaixo o momento atual que você se encontra:</p>
                <hr />

                <SelectOption
                    title="Sou iniciante"
                    description="Comecei a programar há menos de 2 anos"
                    icon=":P"
                    selected= {state.level === 0}
                    onClick={() => setLevel(0)}
                />  

                <SelectOption
                    title="Sou programador"
                    description="Já programo a mais de 2 anos"
                    icon=":O"
                    selected= {state.level === 1}
                    onClick={() => setLevel(1)}
                />

                <BackButton step={state.currentStep} value="Voltar" onClick={handleBackStep}/>
                <button className="btnNext" onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
        
    );
}