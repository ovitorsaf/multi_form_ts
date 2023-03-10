import { Theme } from '../../components';
import * as C from './styles' ; 
import { useForm, FormActions } from '../../contexts/FormContext';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BackButton } from '../../components/buttonback';
import { ProfileInfo } from '../../components/profileinfo';
import { ProfileLevel } from '../../components/profilelevel';
import { SideBarItem } from '../../components/sidebaritem';
import { ButtonNext } from '../../components/buttonnext';


export const FormStep4 = () => {
    
    const navigate = useNavigate();
    const { state, dispatch } = useForm();
    
    const [sideBar, setSideBar] = useState(false);

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
            navigate('/completed');
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
                <p>Passo 4/4</p>
                <h1>Verifique se está tudo certo?</h1>
                <p>Revise suas informações para finalizar o cadastro.</p>
                <hr />
                
                <ProfileInfo placeholder='Nome' value={state.name}/>
                <ProfileLevel placeholder='Level' value={state.level} isProfissional={checkProfissional()}/>
                <ProfileInfo placeholder='Email' value={state.email}/>
                <ProfileInfo placeholder='Github' value={state.github}/>
                
                <BackButton step={state.currentStep} value="Voltar" onClick={handleBackStep}/>
                <ButtonNext step={state.currentStep} value="Finalizar Cadastro" onClick={handleSave}/>
            </C.Container>
        </Theme>
        
    );
}