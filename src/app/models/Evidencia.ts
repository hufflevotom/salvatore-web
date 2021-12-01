export interface Evidencia {
    _id?:                   string;
    idFolio?:               IDFolio;
    idResponsable?:         IDResponsable;
    idEstadoEvidencia?:     IDEstadoEvidencia;
    justificacion?:         string;
    latitudFinal?:          number;
    longitudFinal?:         number;
    numeroVisitas?:         number;
    createdAt?:             string;
    updatedAt?:             string;
}

export interface IDFolio {
    _id?:       string;
    nombre?:    string;
    dni?:       string;
    telefono?:  string;
    direccion?: string;
}

export interface IDResponsable {
    _id?:          string;
    inicioVisita?: number;
    finVisita?:    number;
}

export interface IDEstadoEvidencia {
    _id?:      string;
    latitud?:  string;
    longitud?: string;
    distrito?: string;
}