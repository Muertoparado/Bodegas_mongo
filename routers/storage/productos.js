var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Transform } from 'class-transformer';
export class productos {
    constructor(data) {
        Object.assign(this, data);
        this.id = 0;
        this.nombre = "Faker";
        this.descripcion;
        this.estado = 0;
        this.created_by = 0;
        this.update_by = 0;
        this.created_at = "0";
        this.updated_at = "0";
        this.deleted_at = "0";
    }
}
__decorate([
    Expose({ name: 'id' }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value === 'number')
            return Math.floor(value);
        else
            throw { status: 400, message: `el dato no cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], productos.prototype, "id", void 0);
__decorate([
    Expose({ name: 'nombre' }),
    Transform(({ value }) => {
        if (/^[a-z A-Z].$/.test(value))
            return value;
        else
            throw { status: 400, message: `el dato no cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], productos.prototype, "nombre", void 0);
__decorate([
    Expose({ name: 'descripcion' }),
    Transform(({ value }) => {
        if (/^[a-z A-Z].$/.test(value))
            return value;
        else
            throw { status: 400, message: `el dato no cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], productos.prototype, "descripcion", void 0);
__decorate([
    Expose({ name: 'estado' }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value === 'number')
            return Math.floor(value);
        else
            throw { status: 400, message: `el dato no cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], productos.prototype, "estado", void 0);
__decorate([
    Expose({ name: 'created_by' }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value === 'number')
            return Math.floor(value);
        else
            throw { status: 400, message: `el dato no cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], productos.prototype, "created_by", void 0);
__decorate([
    Expose({ name: 'update_by' }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value === 'number')
            return Math.floor(value);
        else
            throw { status: 400, message: `el dato no cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], productos.prototype, "update_by", void 0);
__decorate([
    Expose({ name: 'created_at' }),
    Transform(({ value }) => {
        if (/^[a-z A-Z 0-9].$/.test(value))
            return value;
        else
            throw { status: 400, message: `el dato no cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], productos.prototype, "created_at", void 0);
__decorate([
    Expose({ name: 'updated_at' }),
    Transform(({ value }) => {
        if (/^[a-z A-Z 0-9].$/.test(value))
            return value;
        else
            throw { status: 400, message: `el dato no cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], productos.prototype, "updated_at", void 0);
__decorate([
    Expose({ name: 'deleted_at' }),
    Transform(({ value }) => {
        if (/^[a-z A-Z 0-9].$/.test(value))
            return value;
        else
            throw { status: 400, message: `el dato no cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], productos.prototype, "deleted_at", void 0);
