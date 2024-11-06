export interface Goal {
    id: string;
    name: string;
    description: string;
    dategoal: Date;
    actualProgress: number;
    totalProgress: number;
    finished: boolean;
}
