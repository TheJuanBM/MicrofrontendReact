import { Context } from 'react';
import { Character, CharacterKey } from '../interfaces';
export interface StatusCharactersData {
    isLoading: boolean;
    data: null | Character[];
}
export interface CharactersProviderParams {
    status: StatusCharactersData;
    handlerGetData: (characterKey: CharacterKey) => void;
}
export declare const defaultValueContext: CharactersProviderParams;
declare const CharactersProvider: Context<CharactersProviderParams>;
export default CharactersProvider;
