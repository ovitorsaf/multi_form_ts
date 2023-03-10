import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FormStep1, FormStep2, FormStep3, FormStep4, FormStep5 } from './pages';

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FormStep1/>}/>
                <Route path="/step2" element={<FormStep2/>}/>
                <Route path="/step3" element={<FormStep3/>}/>
                <Route path="/step4" element={<FormStep4/>}/>
                <Route path="/completed" element={<FormStep5/>}/>
            </Routes>            
        </BrowserRouter>
    );
}