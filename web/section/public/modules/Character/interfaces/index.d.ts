export type CharacterKey = 'RICK_AND_MORTY' | 'HARRY_POTTER';
export type CharacterOptions = {
    [key in CharacterKey]: {
        label: string;
        endPoint: string;
    };
};
export interface Character {
    id: number | string;
    name: string;
    image: string;
}
