import {Expose, Type, Transform} from 'class-transformer';


export class bodegas {
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

    @Expose({name:'estado'})
    @Transform(({value})=>{if(/^[a-z A-Z].$/.test(value)) return value;
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly:true})
        estado:string;
        
    @Expose({name:'created_by'})
    @Transform(({value})=>{
        if(Math.floor(value)&& typeof value === 'number')
        return Math.floor(value);
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly: true})
        created_by:number;     

    @Expose({name:'created_at'})
    @Transform(({value})=>{
        if(/^\d{4}-\d{2}-\d{2}$/.test(value)) 
            return new Date(value);
        else 
            throw {status:400, message:`el dato no aa cumple los parametros`};
    },{toClassOnly:true})
    created_at:Date;

    constructor(data:Partial<bodegas>){
        Object.assign(this,data);

        this.id
        this.nombre
        this.id_responsable
        this.estado
        this.created_by
        this.created_at

    }
}