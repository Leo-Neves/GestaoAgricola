import { IProdutor } from 'app/shared/model/produtor.model';
import { ITalhao } from 'app/shared/model/talhao.model';

export interface IFazenda {
    id?: number;
    nome?: string;
    municipio?: string;
    area?: number;
    geometria?: string;
    produtor?: IProdutor;
    talhaos?: ITalhao[];
}

export class Fazenda implements IFazenda {
    constructor(
        public id?: number,
        public nome?: string,
        public municipio?: string,
        public area?: number,
        public geometria?: string,
        public produtor?: IProdutor,
        public talhaos?: ITalhao[]
    ) {}
}
