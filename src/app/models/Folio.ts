export interface Folio {
    _id?:                   string;
    numeroFolio?:           string;
    ruta?:                  string;
    idDetalleCliente?:      IDDetalleCliente;
    idDetalleEntrega?:      IDDetalleEntrega;
    idDetallePedido?:       IDDetallePedido;
    idLocalAbastecimiento?: IDLocalAbastecimiento;
    createdAt?:             string;
    updatedAt?:             string;
}

export interface IDDetalleCliente {
    _id?:       string;
    nombre?:    string;
    dni?:       string;
    telefono?:  string;
    direccion?: string;
}

export interface IDDetalleEntrega {
    _id?:                string;
    fechaEntrega?:       string;
    idUbicacionEntrega?: IDUbicacionEntrega;
    ordenEntrega?:       number;
    idHorarioVisita?:    IDHorarioVisita;
}

export interface IDHorarioVisita {
    _id?:          string;
    inicioVisita?: number;
    finVisita?:    number;
}

export interface IDUbicacionEntrega {
    _id?:      string;
    latitud?:  string;
    longitud?: string;
    distrito?: string;
}

export interface IDDetallePedido {
    _id?:               string;
    descripcionPedido?: string;
}

export interface IDLocalAbastecimiento {
    _id?:                 string;
    localAbastecimiento?: string;
}
