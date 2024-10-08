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
exports.ProfesorController = void 0;
const profesor_services_1 = require("../services/profesor.services");
class ProfesorController {
    constructor(profesorService = new profesor_services_1.ProfesorService()) {
        this.profesorService = profesorService;
    }
    // Obtener todos los profesores
    getProfesors(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.profesorService.findAllProfesors();
                res.status(200).json(data);
            }
            catch (e) {
                console.error(e);
                if (e instanceof Error) {
                    res.status(500).json({ error: e.message });
                }
                else {
                    res.status(500).json({ error: "Unknown error occurred" });
                }
            }
        });
    }
    // Obtener un profesor por ID
    getProfesorById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const data = yield this.profesorService.findProfesorById(Number(id));
                res.status(200).json(data);
            }
            catch (e) {
                console.error(e);
                if (e instanceof Error) {
                    res.status(500).json({ error: e.message });
                }
                else {
                    res.status(500).json({ error: "Unknown error occurred" });
                }
            }
        });
    }
    // Crear un nuevo profesor
    createProfesor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.profesorService.createProfesor(req.body);
                res.status(200).json(data);
            }
            catch (e) {
                console.error(e);
                if (e instanceof Error) {
                    res.status(400).json({ error: e.message });
                }
                else {
                    res.status(500).json({ error: "Unknown error occurred" });
                }
            }
        });
    }
    // Modificar un profesor
    updateProfesor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const data = yield this.profesorService.updateProfesor(Number(id), req.body);
                res.status(200).json(data);
            }
            catch (e) {
                console.error(e);
                if (e instanceof Error) {
                    res.status(400).json({ error: e.message });
                }
                else {
                    res.status(500).json({ error: "Unknown error occurred" });
                }
            }
        });
    }
    // Eliminar un profesor
    deleteProfesor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const data = yield this.profesorService.deleteProfesor(Number(id));
                res.status(200).json(data);
            }
            catch (e) {
                console.error(e);
                if (e instanceof Error) {
                    res.status(500).json({ error: e.message });
                }
                else {
                    res.status(500).json({ error: "Unknown error occurred" });
                }
            }
        });
    }
}
exports.ProfesorController = ProfesorController;
