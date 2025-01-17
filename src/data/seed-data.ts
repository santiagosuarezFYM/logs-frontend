export const seedData = [
  {
    id: "66abf5a6632f1c8657bb91f1",
    idLog: "51688",
    tipoLog: "Info",
    severidad: "Error",
    infraestructura: "F1",
    fechaRegistro: "2023-09-22T22:38:38.914Z",
    archivoOrigen: "/ruta/al/archivo/origen_84.py",
    metodoOrigen: "metodo_44",
    lineaOrigen: 165,
    infoLog: {
      empresaEmisora: {
        idR: 0,
        idE: 1018,
        nombre: "Empresa_26",
      },
      empresaReceptora: {
        idR: 2395,
        idE: 0,
        nombre: "Empresa_178",
      },
      modulo: "RecepcionFacturas",
      log: "TimeoutError: Se lanza si la solicitud HTTP tarda demasiado en recibir una respuesta de la DIAN.",
    },
    mensajeError: "Detalle del mensaje de error simulado.",
    stackTrace: "Detalles del stack trace simulado si aplica.",
  },
  {
    id: "66abf5a6632f1c8657bb91f2",
    idLog: "42323",
    tipoLog: "Warning",
    severidad: "Error",
    infraestructura: "F1",
    fechaRegistro: "2023-04-12T21:45:29.541Z",
    archivoOrigen: "/ruta/al/archivo/origen_44.py",
    metodoOrigen: "metodo_24",
    lineaOrigen: 119,
    infoLog: {
      empresaEmisora: {
        idR: 0,
        idE: 1451,
        nombre: "Empresa_82",
      },
      empresaReceptora: {
        idR: 2093,
        idE: 0,
        nombre: "Empresa_200",
      },
      modulo: "Contabilidad",
      log: "CertificateError: Esta excepción se puede lanzar si hay un problema con el certificado digital usado para la transacción, como que esté caducado o no sea válido.",
    },
    mensajeError: "Detalle del mensaje de error simulado.",
    stackTrace: "Detalles del stack trace simulado si aplica.",
  },
];
