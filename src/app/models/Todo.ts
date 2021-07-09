import { BaseModel } from './BaseModel';

export interface Todo extends BaseModel{
    title: string;
    description: string;
    status: string;
}
