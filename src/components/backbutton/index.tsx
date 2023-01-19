import * as C from './styles';

type Props = {
    step: number
    value: string
    onClick: () => void
}

export const BackButton = ({step, value, onClick}: Props) => {
    return(
        <C.BackButton onClick={onClick}>
            {value}
        </C.BackButton>
    );
};