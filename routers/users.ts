import {Expose, Type, Transform} from 'class-transformer';
import { IsString, IsEmpty, IsDefined} from 'class-validator';

export class users {
    @Expose({name:'id'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio `}}})
    @Transform(({value})=>{
        if(Math.floor(value)&& typeof value === 'number')
        return Math.floor(value);
        else throw {status:400, message:`el dato no id cumple los parametros`};},{toClassOnly: true})
        id:number;

    @Expose({name:'nombre'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio `}}})
    @Transform(({value})=>{if(/^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/.test(value)) return value;
        else throw {status:400, message:`el dato no nn cumple los parametros`};},{toClassOnly:true})
        nombre:string;

    @Expose({name:'email'})
    @Transform(({value})=>{if(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) return value;
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly:true})
        email:string;
        
    @Expose({name:'estado'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio `}}})
    @Transform(({value})=>{
        if(Math.floor(value)&& typeof value === 'number')
        return Math.floor(value);
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly: true})
        estado:number;

    @Expose({name:'created_by'})
    @Transform(({value})=>{
        if(Math.floor(value)&& typeof value === 'number')
        return Math.floor(value);
        else throw {status:400, message:`el dato no qw cumple los parametros`};},{toClassOnly: true})
        created_by:number;

    @Expose({name:'update_by'})
    @Transform(({value})=>{
        if(Math.floor(value)&& typeof value === 'number')
        return Math.floor(value);
        else throw {status:400, message:`el dato no cumple cc los parametros`};},{toClassOnly: true})
        update_by:number;

    @Expose({name:'foto'})
    @Transform(({value})=>{if(/(http[s]?:\/\/)?([^\s(["<,>]*\.[^\s[",><]*)([^,>\s]*)/.test(value)) return value;
        else throw {status:400, message:`el dato no nf cumple los parametros`};},{toClassOnly:true})
        foto:string;
/* https://example.com/path?query=param */
        @Expose({name:'password'})
        @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio `}}})
        @Transform(({value})=>{if(/^[A-Za-zÁÉÍÓÚáéíóúÑñÜü0-9\s]+$/.test(value)) return value;
            else throw {status:400, message:`el dato no pass cumple los parametros`};},{toClassOnly:true})
            password:string;


    @Expose({name:'created_at'})
    @Transform(({value})=>{
        if(/^\d{4}-\d{2}-\d{2}$/.test(value)) 
            return new Date(value);
        else 
            throw {status:400, message:`el dato no aa cumple los parametros`};
    },{toClassOnly:true})
    created_at:Date;

    @Expose({name:'updated_at'})
    @Transform(({value})=>{
        if(/^\d{4}-\d{2}-\d{2}$/.test(value)) 
            return new Date(value);
        else 
            throw {status:400, message:`el dato no aa cumple los parametros`};
    },{toClassOnly:true})
    updated_at:Date;

        constructor(data:Partial<users>) {
            Object.assign(this, data);
            this.id = 0;
            this.nombre
            this.email
            this.estado
            this.created_by
            this.update_by
            this.foto
            this.password
            this.created_at=new Date();
            this.updated_at=new Date();
            }
}