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
export class bodegas {
    constructor(data) {
        Object.assign(this, data);
        this.id;
        this.nombre;
        this.id_responsable;
        this.estado;
        this.created_by;
        this.created_at;
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
], bodegas.prototype, "id", void 0);
__decorate([
    Expose({ name: 'nombre' }),
    Transform(({ value }) => {
        if (/^[a-z A-Z].$/.test(value))
            return value;
        else
            throw { status: 400, message: `el dato no cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], bodegas.prototype, "nombre", void 0);
__decorate([
    Expose({ name: 'id_responsable' }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value === 'number')
            return Math.floor(value);
        else
            throw { status: 400, message: `el dato no cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], bodegas.prototype, "id_responsable", void 0);
__decorate([
    Expose({ name: 'estado' }),
    Transform(({ value }) => {
        if (/^[a-z A-Z].$/.test(value))
            return value;
        else
            throw { status: 400, message: `el dato no cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], bodegas.prototype, "estado", void 0);
__decorate([
    Expose({ name: 'created_by' }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value === 'number')
            return Math.floor(value);
        else
            throw { status: 400, message: `el dato no cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], bodegas.prototype, "created_by", void 0);
__decorate([
    Expose({ name: 'created_at' }),
    Transform(({ value }) => {
        if (/^\d{4}-\d{2}-\d{2}$/.test(value))
            return new Date(value);
        else
            throw { status: 400, message: `el dato no aa cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Date)
], bodegas.prototype, "created_at", void 0);
