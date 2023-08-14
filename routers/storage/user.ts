import {Expose, Type, Transform} from 'class-transformer';


export class productos {
    @Expose({name:'id'})
    @Transform(({value})=>{
        if(Math.floor(value)&& typeof value === 'number')
        return Math.floor(value);
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly: true})
        id:number;

    @Expose({name:'nombre'})
    @Transform(({value})=>{if(/^[a-z A-Z].$/.test(value)) return value;
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly:true})
        nombre:string;

    @Expose({name:'id_responsable'})
    @Transform(({value})=>{
        if(Math.floor(value)&& typeof value === 'number')
        return Math.floor(value);
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly: true})
        id_responsable:number;   
}