import { IInsurance } from '@/models/sportsman';

export interface IInsuranceState {
    insurance: IInsurance | undefined;
    error: boolean;
}
