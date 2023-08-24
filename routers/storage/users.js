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
import { IsDefined } from 'class-validator';
export class users {
    constructor(data) {
        Object.assign(this, data);
        this.id = 0;
        this.nombre;
        this.email;
        this.email_verified_at = new Date();
        this.estado;
        this.created_by;
        this.update_by;
        this.foto;
        this.password;
        this.created_at;
        this.updated_at;
    }
}
__decorate([
    Expose({ name: 'id' }),
    IsDefined({ message: () => { throw { status: 401, message: `el mensaje es obligatorio ` }; } }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value === 'number')
            return Math.floor(value);
        else
            throw { status: 400, message: `el dato no id cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], users.prototype, "id", void 0);
__decorate([
    Expose({ name: 'nombre' }),
    IsDefined({ message: () => { throw { status: 401, message: `el mensaje es obligatorio ` }; } }),
    Transform(({ value }) => {
        if (/^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/.test(value))
            return value;
        else
            throw { status: 400, message: `el dato no nn cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], users.prototype, "nombre", void 0);
__decorate([
    Expose({ name: 'email' }),
    Transform(({ value }) => {
        if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value))
            return value;
        else
            throw { status: 400, message: `el dato no cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], users.prototype, "email", void 0);
__decorate([
    Expose({ name: 'email_verified_at' }),
    Transform(({ value }) => {
        if (/^\d{4}-\d{2}-\d{2}$/.test(value))
            return new Date(value);
        else
            throw { status: 400, message: `el dato no aa cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Date)
], users.prototype, "email_verified_at", void 0);
__decorate([
    Expose({ name: 'estado' }),
    IsDefined({ message: () => { throw { status: 401, message: `el mensaje es obligatorio ` }; } }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value === 'number')
            return Math.floor(value);
        else
            throw { status: 400, message: `el dato no cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], users.prototype, "estado", void 0);
__decorate([
    Expose({ name: 'created_by' }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value === 'number')
            return Math.floor(value);
        else
            throw { status: 400, message: `el dato no qw cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], users.prototype, "created_by", void 0);
__decorate([
    Expose({ name: 'update_by' }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value === 'number')
            return Math.floor(value);
        else
            throw { status: 400, message: `el dato no cumple cc los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], users.prototype, "update_by", void 0);
__decorate([
    Expose({ name: 'foto' }),
    Transform(({ value }) => {
        if (/(http[s]?:\/\/)?([^\s(["<,>]*\.[^\s[",><]*)([^,>\s]*)/.test(value))
            return value;
        else
            throw { status: 400, message: `el dato no nf cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], users.prototype, "foto", void 0);
__decorate([
    Expose({ name: 'password' }),
    IsDefined({ message: () => { throw { status: 401, message: `el mensaje es obligatorio ` }; } }),
    Transform(({ value }) => {
        if (/^[A-Za-zÁÉÍÓÚáéíóúÑñÜü0-9\s]+$/.test(value))
            return value;
        else
            throw { status: 400, message: `el dato no pass cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], users.prototype, "password", void 0);
__decorate([
    Expose({ name: 'created_at' }),
    Transform(({ value }) => {
        if (/^\d{4}-\d{2}-\d{2}$/.test(value))
            return new Date(value);
        else
            throw { status: 400, message: `el dato no aa cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Date)
], users.prototype, "created_at", void 0);
__decorate([
    Expose({ name: 'updated_at' }),
    Transform(({ value }) => {
        if (/^\d{4}-\d{2}-\d{2}$/.test(value))
            return new Date(value);
        else
            throw { status: 400, message: `el dato no aa cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Date)
], users.prototype, "updated_at", void 0);
