export interface Log {
  ID: string;
  IdLog: string;
  TipoLog: string;
  Severidad: string;
  Infraestructura: string;
  FechaRegistro: string;
  ArchivoOrigen: string;
  MetodoOrigen: string;
  LineaOrigen: number;
  InfoLog: InfoLogEmisorReceptor;
  MensajeError: string;
  StackTrace: string;
}

export interface InfoLogEmisorReceptor {
  EmpresaEmisora: EmpresaEmisora;
  EmpresaReceptora: EmpresaReceptora;
  Modulo: string;
  Log: string;
}

export interface EmpresaEmisora {
  Id: number;
  Nombre: string;
}

export interface EmpresaReceptora {
  Id: number;
  Nombre: string;
}

