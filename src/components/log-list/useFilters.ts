import { ChangeEvent, useState } from "react";
import { GetLogsFilters } from "../../domain";

export const useFilters = () => {
  const [filters, setFilters] = useState<GetLogsFilters>({
    idEmpresa: 0,
    initialDate: new Date(),
    finalDate: new Date(),
    infrastructure: "FE1",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = name.match(/\b\w*Date\b/)
      ? new Date(e.target.value)
      : e.target.value;
    setFilters((old) => ({ ...old, [name]: value }));
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilters((old) => ({ ...old, infrastructure: e.target.value }));
  };

  return {
    filters,
    handleChange,
    handleSelectChange,
  };
};
