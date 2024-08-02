import clsx from "clsx";
import { Log } from "../../domain";
import "./logItem.css";
import { useEffect, useState } from "react";

interface Props {
  log: Log;
  index: number;
  collapseCount: number;
}

export const LogItem = ({ log, index, collapseCount }: Props) => {
  const [open, setOpen] = useState(false);
  const fechaRegistro = new Date(log.fechaRegistro);

  useEffect(() => {
    setOpen(false);
  }, [collapseCount]);

  return (
    <div
      className={clsx({
        "log-item": true,
        par: index % 2 === 0,
        impar: index % 2 !== 0,
      })}
    >
      <div className="log-item-title" onClick={() => setOpen(!open)}>
        <div>
          <span className="highlight">{log.idLog}</span>
          <span className="highlight">{log.severidad}</span>
          <span className="highlight">{log.tipoLog}</span>
          <span className="highlight">{fechaRegistro.toUTCString()}</span>
        </div>
        <p>{log.infoLog.log}</p>
      </div>

      {open && (
        <div className="content">
          <div className="content-log">
            <span>ID: {log.id}</span>
            <span>IdLog: {log.idLog}</span>
            <span>TipoLog: {log.tipoLog}</span>
            <span>Severidad: {log.severidad}</span>
            <span>Infraestructura: {log.infraestructura}</span>
            <span>FechaRegistro: {fechaRegistro.toUTCString()}</span>
            <span>ArchivoOrigen: {log.archivoOrigen}</span>
            <span>MetodoOrigen: {log.metodoOrigen}</span>
            <span>LineaOrigen: {log.lineaOrigen}</span>
            <span>MensajeError: {log.mensajeError}</span>
            <span>StackTrace: {log.stackTrace}</span>
          </div>
          <div className="content-log">
            <h3>Log info:</h3>

            <h4>Empresa Emisora</h4>
            <span>
              {log.infoLog.empresaEmisora.idE} -{" "}
              {log.infoLog.empresaEmisora.nombre}
            </span>

            <h4>Empresa Receptora</h4>
            <span>
              {log.infoLog.empresaReceptora.idR} -{" "}
              {log.infoLog.empresaReceptora.nombre}
            </span>

            <h4>Log - Modulo: {log.infoLog.modulo}</h4>
            <span>{log.infoLog.log}</span>
          </div>
        </div>
      )}
    </div>
  );
};
