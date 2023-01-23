import * as C from './styles';

type Props = {
    step?: number
    value: string
    onClick: () => void
}

export const ButtonNext = ({step, value, onClick}: Props) => {
    return(
        <C.ButtonNextStyled onClick={onClick}>
            {value}
        </C.ButtonNextStyled>
    );
};