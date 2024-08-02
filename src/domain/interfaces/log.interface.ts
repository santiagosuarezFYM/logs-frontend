export interface GetLogsResponse {
  pageSize: number
  pageNumber: number
  totalPages: number
  totalRecords: number
  logs: Log[]
}

export interface Log {
  id: string
  idLog: string
  tipoLog: string
  severidad: string
  infraestructura: string
  fechaRegistro: string
  archivoOrigen: string
  metodoOrigen: string
  lineaOrigen: number
  infoLog: InfoLog
  mensajeError: string
  stackTrace: string
}

export interface InfoLog {
  empresaEmisora: EmpresaEmisora
  empresaReceptora: EmpresaReceptora
  modulo: string
  log: string
}

export interface EmpresaEmisora {
  idR: number
  idE: number
  nombre: string
}

export interface EmpresaReceptora {
  idR: number
  idE: number
  nombre: string
}
