import { Habit } from "./habit.model";
import { Settings } from "./settings.model";

export interface User {
    id: string;
    name: string;
    last_name: string;
    email: string;
    password: string; 
    age: number;
    sex: 'Masculino' | 'Femenino' | 'Otro';
    height: number;  //cm
    weight: number;    //kg
    register_date: Date;
    pfpURL: string;  //profile picture url
    configuracion: Settings; 
    habits: Habit;  
}
