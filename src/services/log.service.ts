import { GetLogsFilters, GetLogsResponse, Log } from "../domain";

export class LogService {
  constructor() {}

  public async getLogs(getLogsFilters: GetLogsFilters): Promise<Log[]> {
    console.log(getLogsFilters);

    const resp = await fetch(
      `http://localhost:37527/api/Logs?pageNumber=1&pageSize=5`
    );

    const data = (await resp.json()) as GetLogsResponse;

    console.log(data);
    const logs = data.logs as Log[];
    return logs;
  }
}
