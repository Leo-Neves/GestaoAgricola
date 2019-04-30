import { IFazenda } from 'app/shared/model/fazenda.model';
import { IPlantio } from 'app/shared/model/plantio.model';

export interface ITalhao {
    id?: number;
    nome?: string;
    geometria?: string;
    fazenda?: IFazenda;
    plantios?: IPlantio[];
}

export class Talhao implements ITalhao {
    constructor(
        public id?: number,
        public nome?: string,
        public geometria?: string,
        public fazenda?: IFazenda,
        public plantios?: IPlantio[]
    ) {}
}
