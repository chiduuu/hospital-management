export interface doctor {
    id?: string,
    name: string,
    age: number,
    gender: enumGender,
    specialist: string,
    numberOfPatients?: number
}

export enum enumGender {
    male,
    female
}