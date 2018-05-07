export interface IBet {
    id: number;
    title: string;
    description: string;
    creator: string;
    dateCreation: string;
    price: string;
    bettersYes?: string[];
    bettersNo?: string[];
}