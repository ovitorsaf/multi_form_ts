import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FormStep1, FormStep2, FormStep3 } from './pages';

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FormStep1/>}/>
                <Route path="/step2" element={<FormStep2/>}/>
                <Route path="/step3" element={<FormStep3/>}/>
            </Routes>            
        </BrowserRouter>
    );
}