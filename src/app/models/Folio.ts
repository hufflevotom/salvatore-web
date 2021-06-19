export interface Folio {
    _id?: string;
    numeroFolio?: string;
    ruta?: string;
    nombre?: string;
    dni?: string;
    telefono?: string;
    direccion?: string;
    fechaEntrega?: Date;
    latitud?: string;
    longitud?: string;
    distrito?: string;
    ordenEntrega?: number;
    inicioVisita?: number;
    finVisita?: number;
    descripcionPedido?: string;
    localAbastecimiento?: string;
    createdAt?: string;
    updatedAt?: string;
}