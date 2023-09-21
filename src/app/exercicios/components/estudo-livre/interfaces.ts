import { Arvore } from 'src/app/common/interfaces/arvore/arvore.model';
import { BaseResponse } from 'src/app/common/interfaces/baseResponse.model';

export type Response = BaseResponse;

export interface ConcluirEstudoLivreInput {
  arvore: Arvore;
}
export interface ArvoreResponse extends Response {
  data?: Arvore;
}
export interface HashInput {
  usuHash: string;
  exeHash: string;
}
