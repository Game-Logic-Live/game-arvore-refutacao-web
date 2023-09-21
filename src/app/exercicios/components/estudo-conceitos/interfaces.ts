import { BaseResponse } from 'src/app/common/interfaces/baseResponse.model';

export type Response = BaseResponse;

export interface HashInput {
  usuHash: string;
  exeHash: string;
}
