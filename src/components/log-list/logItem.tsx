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
  const fechaRegistro = new Date(log.FechaRegistro);

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
          <span className="highlight">{log.IdLog}</span>
          <span className="highlight">{log.Severidad}</span>
          <span className="highlight">{log.TipoLog}</span>
          <span className="highlight">{fechaRegistro.toUTCString()}</span>
        </div>
        <p>{log.InfoLog.Log}</p>
      </div>

      {open && (
        <div className="content">
          <div className="content-log">
            <span>ID: {log.ID}</span>
            <span>IdLog: {log.IdLog}</span>
            <span>TipoLog: {log.TipoLog}</span>
            <span>Severidad: {log.Severidad}</span>
            <span>Infraestructura: {log.Infraestructura}</span>
            <span>FechaRegistro: {fechaRegistro.toUTCString()}</span>
            <span>ArchivoOrigen: {log.ArchivoOrigen}</span>
            <span>MetodoOrigen: {log.MetodoOrigen}</span>
            <span>LineaOrigen: {log.LineaOrigen}</span>
            <span>MensajeError: {log.MensajeError}</span>
            <span>StackTrace: {log.StackTrace}</span>
          </div>
          <div className="content-log">
            <h3>Log info:</h3>

            <h4>Empresa Emisora</h4>
            <span>
              {log.InfoLog.EmpresaEmisora.Id} -{" "}
              {log.InfoLog.EmpresaEmisora.Nombre}
            </span>

            <h4>Empresa Receptora</h4>
            <span>
              {log.InfoLog.EmpresaReceptora.Id} -{" "}
              {log.InfoLog.EmpresaEmisora.Nombre}
            </span>

            <h4>Log - Modulo: {log.InfoLog.Modulo}</h4>
            <span>{log.InfoLog.Log}</span>
          </div>
        </div>
      )}
    </div>
  );
};
