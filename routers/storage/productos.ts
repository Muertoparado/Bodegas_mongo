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

    @Expose({name:'descripcion'})
    @Transform(({value})=>{if(/^[a-z A-Z].$/.test(value)) return value;
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly:true})
        descripcion:string;


    @Expose({name:'estado'})
    @Transform(({value})=>{
        if(Math.floor(value)&& typeof value === 'number')
        return Math.floor(value);
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly: true})
        estado:number; 
    

    @Expose({name:'created_by'})
    @Transform(({value})=>{
        if(Math.floor(value)&& typeof value === 'number')
        return Math.floor(value);
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly: true})
        created_by:number; 
    

    @Expose({name:'update_by'})
    @Transform(({value})=>{
        if(Math.floor(value)&& typeof value === 'number')
        return Math.floor(value);
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly: true})
        update_by:number; 

    @Expose({name:'created_at'})
    @Transform(({value})=>{if(/^[a-z A-Z 0-9].$/.test(value)) return value;
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly:true})
        created_at:string;

    @Expose({name:'updated_at'})
    @Transform(({value})=>{if(/^[a-z A-Z 0-9].$/.test(value)) return value;
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly:true})
        updated_at:string;

    @Expose({name:'deleted_at'})
    @Transform(({value})=>{if(/^[a-z A-Z 0-9].$/.test(value)) return value;
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly:true})
        deleted_at:string;

    constructor(data:Partial<productos>) {
        Object.assign(this, data);
        this.id = 0;
        this.nombre = "Faker"
        this.descripcion 
        this.estado = 0;
        this.created_by = 0;
        this.update_by = 0;
        this.created_at = "0";
        this.updated_at = "0";
        this.deleted_at = "0";
        }

}
