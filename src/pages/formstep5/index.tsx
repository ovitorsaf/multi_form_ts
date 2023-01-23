import { ThemeCompleted } from '../../components/themecompleted';
import * as C from './styles' ; 
import { useForm, FormActions } from '../../contexts/FormContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ButtonNext } from '../../components/buttonnext';

export const FormStep5 = () => {
    
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if (state.name === ""){
            navigate("/");
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 0
            });
        }
    }, []);

    const handleInit = () => {
        if (state.email !== "" && state.github !== ""){
            state.email = "";
            state.github = "";
            state.name = "";
            state.level = 0;
            state.currentStep = 0;
            console.log(state);
            navigate('/');     
        } else {
            alert("Preencha todos os dados!");
        }
    }

    
    return(
        <ThemeCompleted>
            <C.Container>
                <p>Cadastro Finalizado!</p>
                <h1>Perfeito {state.name}, seus dados foram salvos com sucesso.</h1>
                <h1>Em breve você receberá futuras oportunidades :)</h1>                
                <hr />
                <ButtonNext value="Novo Cadastro" onClick={handleInit}/>
            </C.Container>
        </ThemeCompleted>
        
    );
}