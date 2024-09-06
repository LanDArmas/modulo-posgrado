"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PosgradoService = void 0;
const base_service_1 = require("../../../config/base.service");
const posgrado_entity_1 = require("../entities/posgrado.entity");
class PosgradoService extends base_service_1.BaseService {
    constructor() {
        super(posgrado_entity_1.PosgradoEntity);
    }
    findAllPosgrados() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.execRepository)
                .find({
                relations: ['profesor'],
                select: ['profesor']
            });
        });
    }
    findPosgradoById(id_posgrado) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.execRepository).findOneBy({ id_posgrado });
        });
    }
    createPosgrado(body) {
        return __awaiter(this, void 0, void 0, function* () {
            // const posgrado = new PosgradoEntity();
            // posgrado.facultad = body.facultad;
            // posgrado.nombre = body.nombre;
            // posgrado.fecha_inicio = body.fecha_inicio;  // Asegúrate de convertir la fecha si es un string
            // posgrado.fecha_culminacion = body.fecha_culminacion;
            // posgrado.matricula_inicial = body.matricula_inicial;
            // posgrado.matricula_final = body.matricula_final;
            // posgrado.categoria_cientifica = body.categoria_cientifica;
            // posgrado.tipo_posgrado = body.tipo_posgrado;
            // posgrado.profesor = body.id_profe;
            return (yield this.execRepository).save(body);
        });
    }
    updatePosgrado(id_posgrado, infoUpdate) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.execRepository).update(id_posgrado, infoUpdate);
        });
    }
    deletePosgrado(id_posgrado) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.execRepository).delete({ id_posgrado });
        });
    }
}
exports.PosgradoService = PosgradoService;
