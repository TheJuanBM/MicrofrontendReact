import { ButtonProps } from 'thejuanbm-react-library-ui';
import { CharacterKey } from './interfaces';
interface CharacterProps extends Pick<ButtonProps, 'theme'> {
    movie: CharacterKey;
}
export declare function Character({ movie, theme }: CharacterProps): import("react/jsx-runtime").JSX.Element;
export {};
