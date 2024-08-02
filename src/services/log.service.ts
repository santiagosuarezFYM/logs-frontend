import { GetLogsFilters, GetLogsResponse, Log } from "../domain";

export class LogService {
  constructor() {}

  public async getLogs(getLogsFilters: GetLogsFilters): Promise<Log[]> {
    console.log(getLogsFilters);

    getLogsFilters.finalDate.setHours(23);
    const fechaInicio = getLogsFilters.initialDate.toISOString();
    const fechaFin = getLogsFilters.finalDate.toISOString();

    const resp = await fetch(
      `http://localhost:37527/api/Logs/byDateRange?fechaInicio=${fechaInicio}&fechaFin=${fechaFin}&pageNumber=1&pageSize=20`
    );

    const data = (await resp.json()) as GetLogsResponse;

    console.log(data);
    const logs = data.logs as Log[];
    return logs;
  }
}
