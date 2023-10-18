import { StatusCharactersData } from '../context';
import { CharacterKey } from '../interfaces';
export declare function useContextCharacters(): {
    handlerGetData: (movie: CharacterKey) => Promise<void>;
    status: StatusCharactersData;
};
