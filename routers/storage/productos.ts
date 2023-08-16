import {Expose, Type, Transform} from 'class-transformer';
import { IsString, IsEmpty, IsDefined} from 'class-validator';


export class productos {
    @Expose({name:'id'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio `}}})
    @Transform(({value})=>{
        if(Math.floor(value)&& typeof value === 'number')
        return Math.floor(value);
        else throw {status:400, message:`el dato no eee cumple los parametros`};},{toClassOnly: true})
        id:number;

    @Expose({name:'nombre'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio `}}})
    @Transform(({value})=>{if(/^[a-zA-Z\s]+$/.test(value)) return value;
        else throw {status:400, message:`el dato no cumple nn los parametros`};},{toClassOnly:true})
        nombre:String;

    @Expose({name:'descripcion'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio `}}})
    @Transform(({value})=>{if(/^[a-zA-Z\s]+$/.test(value)) return value;
        else throw {status:400, message:`el dato no g cumple los parametros`};},{toClassOnly:true})
        descripcion:string;


    @Expose({name:'estado'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio `}}})
    @Transform(({value})=>{
        if(Math.floor(value)&& typeof value === 'number')
        return Math.floor(value);
        else throw {status:400, message:`el datogrt no cumple los parametros`};},{toClassOnly: true})
        estado:number; 
    

    @Expose({name:'created_by'})
    @Transform(({value})=>{
        if(Math.floor(value)&& typeof value === 'number')
        return Math.floor(value);
        else throw {status:400, message:`el dato hh no cumple los parametros`};},{toClassOnly: true})
        created_by:number; 
    

    @Expose({name:'update_by'})
    @Transform(({value})=>{
        if(Math.floor(value)&& typeof value === 'number')
        return Math.floor(value);
        else throw {status:400, message:`el dato no yy cumple los parametros`};},{toClassOnly: true})
        update_by:number; 

    @Expose({name:'created_at'})
    @Transform(({value})=>{if(/^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
        else throw {status:400, message:`el dato cre no cumple los parametros`};},{toClassOnly:true})
        created_at:Date;

    @Expose({name:'updated_at'})
    @Transform(({value})=>{if(/^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
        else throw {status:400, message:`el dato up no cumple los parametros`};},{toClassOnly:true})
        updated_at:Date;

    @Expose({name:'deleted_at'})
    @Transform(({value})=>{if(/^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
        else throw {status:400, message:`el dato nozz del cumple los parametros`};},{toClassOnly:true})
        deleted_at:Date;

    constructor(data:Partial<productos>) {
        Object.assign(this, data);
        this.id = 0;
        this.nombre
        this.descripcion
        this.estado = 0;
        this.created_by = 0;
        this.update_by = 0;
        this.created_at = new Date("2022-01-01");
        this.updated_at = new Date("2022-01-01");
        this.deleted_at = new Date("2022-01-01");
        }

}
