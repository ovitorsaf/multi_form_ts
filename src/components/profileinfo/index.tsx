import * as C from './styles';

type Props = {
    placeholder: string;
    value: any;
}

export const ProfileInfo = ({placeholder, value}: Props) => {
    return(
        <C.Container>
            <C.Paragraf>{placeholder}</C.Paragraf>
            <C.Value>{value}</C.Value>
        </C.Container>
    );
}