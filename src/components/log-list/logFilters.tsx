import { ChangeEvent, FormEvent } from "react";
import { GetLogsFilters } from "../../domain";

interface Props {
  filters: GetLogsFilters;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSelectChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  searchLogs: () => Promise<void>;
}

function LogFilters({
  filters,
  handleChange,
  handleSelectChange,
  searchLogs,
}: Props) {
  const initialDateValue = filters.initialDate.toISOString().slice(0, 10);
  const finalDateValue = filters.finalDate.toISOString().slice(0, 10);

  const submitSearch = (e: FormEvent) => {
    e.preventDefault();
    searchLogs();
  };

  return (
    <form className="filters" onSubmit={submitSearch}>
      <div className="filter-item">
        <label>Id Empresa</label>
        <input
          name="idEmpresa"
          type="number"
          value={filters.idEmpresa}
          onChange={handleChange}
        />
      </div>

      <div className="filter-item">
        <label>Fecha inicial</label>
        <input
          name="initialDate"
          type="date"
          value={initialDateValue}
          onChange={handleChange}
        />
      </div>

      <div className="filter-item">
        <label>Fecha final</label>
        <input
          name="finalDate"
          type="date"
          value={finalDateValue}
          onChange={handleChange}
        />
      </div>

      <div className="filter-item">
        <label>infraestructura</label>
        <select
          name="infrastructure"
          value={filters.infrastructure}
          onChange={handleSelectChange}
        >
          <option value="FE1">FE1</option>
          <option value="FE2">FE2</option>
          <option value="FE3">FE3</option>
        </select>
      </div>

      <button type="submit">Search</button>
    </form>
  );
}

export default LogFilters;
