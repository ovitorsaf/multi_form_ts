import * as C from './styles';

type Props = {
    placeholder: string;
    value: number;
    isProfissional: boolean;
}

function eleEhPro(prop: boolean){
    const ehPro = prop;
    if (ehPro){
        return "PROFISSIONAL (+2 ANOS DE EXPERIÊNCIA)";
    }
    return "INICIANTE (MENOS DE 2 ANOS)";
}

export const ProfileLevel = ({placeholder, value, isProfissional}: Props) => {
    return(
        <C.Container>
            <C.Paragraf>{placeholder}</C.Paragraf>
            <C.Value>{eleEhPro(isProfissional)}</C.Value>
        </C.Container>
    );
}