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
    findPosgradoWithActividades(id_posgrado) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const repository = yield this.execRepository;
                const queryBuilder = repository.createQueryBuilder('posgrado')
                    .leftJoinAndSelect('posgrado.actividades', 'actividad')
                    .where('posgrado.id_posgrado = :id_posgrado', { id_posgrado });
                const posgradoConActividades = yield queryBuilder.getMany();
                return posgradoConActividades;
            }
            catch (error) {
                console.error('Error in findPosgradoWithActividades:', error);
                throw new Error('Error executing query');
            }
        });
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
    findCountByPosgrado() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `
            SELECT
                posgrado.id_posgrado AS id_posgrado,
                posgrado.nombre AS nombre,
                posgrado.matricula_inicial AS matricula_inicial,
                posgrado.matricula_final AS matricula_final,
                COUNT(CASE WHEN estudiante.sexo = 'F' THEN 1 ELSE NULL END) AS mujeres,
                COUNT(CASE WHEN estudiante.cuadro = true THEN 1 ELSE NULL END) AS cuadros,
                COUNT(CASE WHEN estudiante.reserva = true THEN 1 ELSE NULL END) AS reservas
            FROM
                posgrado
            LEFT JOIN
                estudiante ON estudiante.id_posgrado = posgrado.id_posgrado
            GROUP BY
                posgrado.id_posgrado, posgrado.nombre, posgrado.matricula_inicial, posgrado.matricula_final;
        `;
            console.log(query);
            try {
                const results = yield (yield this.execRepository).query(query);
                return results;
            }
            catch (error) {
                console.error('Error executing query:', error);
                throw new Error('Error executing query');
            }
        });
    }
    createPosgrado(body) {
        return __awaiter(this, void 0, void 0, function* () {
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
