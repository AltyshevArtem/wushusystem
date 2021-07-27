import { IGender } from '@/models/gender';
export interface IGenderState {
    genders: Array<IGender>;
    selectedGender?: Array<string>;
    error: boolean;
}
