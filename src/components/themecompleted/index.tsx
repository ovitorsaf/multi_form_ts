import { ReactNode } from 'react';
import * as C from './styles';
import { Header } from '../header';

type Props = {
    children: ReactNode,
}

export const ThemeCompleted = ({children}: Props) => {
    
    return(
        <C.Container>
            <C.Area>
                <Header />
                    <C.Page>
                        {children}
                    </C.Page>
            </C.Area>
        </C.Container>
    )
}