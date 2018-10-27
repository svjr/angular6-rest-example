import {SubClasse} from './subclasse.model'

export interface Material{
    id: string
    sigla: string
    descricao: string
    subClasse: SubClasse
    tipoMaterial: string
    estado: string
}