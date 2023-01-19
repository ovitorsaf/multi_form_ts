import { Theme } from '../../components';
import * as C from './styles' ; 
import { useForm, FormActions } from '../../contexts/FormContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { BackButton } from '../../components/backbutton';
import { ProfileInfo } from '../../components/profileinfo';
import { ProfileLevel } from '../../components/profilelevel';


export const FormStep4 = () => {
    
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if (state.name === ""){
            navigate("/");
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 4
            });
        }
    }, []);

    const handleSave= () => {
        if (state.email !== "" && state.github !== ""){
            console.log(state);     
        } else {
            alert("Preencha todos os dados!");
        }
    }

    const handleBackStep = () => {
        navigate('/step3');
        console.log('backstep-3');
    }

    const checkProfissional = () => {
        if (state.level === 1){
            console.log('checkProfissional -> TRUE');
            return true;
        }
        console.log('checkProfissional -> FALSE');
        return false;
    }
    
    return(
        <Theme>
            <C.Container>
                <p>Resumo</p>
                <h1>Verifique se está tudo certo?</h1>
                <p>Revise suas informações para finalizar o cadastro.</p>
                <hr />
                
                <ProfileInfo placeholder='Nome' value={state.name}/>
                <ProfileLevel placeholder='Level' value={state.level} isProfissional={checkProfissional()}/>
                <ProfileInfo placeholder='Email' value={state.email}/>
                <ProfileInfo placeholder='Github' value={state.github}/>
                
                <BackButton step={state.currentStep} value="Voltar" onClick={handleBackStep}/>
                <button className='btnNext' onClick={handleSave}>Finalizar Cadastro</button>
            </C.Container>
        </Theme>
        
    );
}