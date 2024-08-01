import { useEffect, useState } from "react";
import { Log } from "../../domain";
import { LogService } from "../../services/log.service";

import "./logList.css";
import { LogItem } from "./logItem";
import LogFilters from "./logFilters";
import { useFilters } from "./useFilters";

const logService = new LogService();

function LogList() {
  const [logs, setLogs] = useState<Log[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [collapseCount, setCollapseCount] = useState<number>(0);

  const { filters, handleChange, handleSelectChange } = useFilters();

  const searchLogs = async (): Promise<void> => {
    try {
      setLoading(true);
      const list = await logService.getLogs(filters);
      setLogs(list);
    } catch (error) {
      console.log(error);
      setError("Se presento un error al obtener el listado de logs");
      setLogs([]);
    } finally {
      setLoading(false);
      // setTimeout(() => {
      //   setLoading(false);
      // }, 5000)
    }
  };

  useEffect(() => {
    searchLogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <article className="main-section">
      {/* Filters */}
      <LogFilters
        filters={filters}
        handleChange={handleChange}
        handleSelectChange={handleSelectChange}
        searchLogs={searchLogs}
      />

      {/* Error */}
      {error && (
        <div className="error">
          <p>{error}</p>
          <button onClick={() => setError(null)}>close</button>
        </div>
      )}

      {/* Divider */}
      <div className="divider" />

      <button
        className="collapse"
        onClick={() => setCollapseCount(collapseCount + 1)}
      >
        Collapse all
      </button>

      {/* Loading */}
      {loading && <div className="loader"/>}

      {/* Logs list */}
      <section className="logs-list">
        {!loading && logs.map((log, i) => (
          <LogItem
            key={log.ID}
            log={log}
            index={i}
            collapseCount={collapseCount}
          />
        ))}
      </section>
    </article>
  );
}

export default LogList;
