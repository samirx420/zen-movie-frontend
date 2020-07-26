import { Paged } from "./paged.model";

export interface ResponseWrapper<T> {    
    data?   : T[];
    paged?  : Paged
}
