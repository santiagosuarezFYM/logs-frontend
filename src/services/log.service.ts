import { GetLogsFilters, Log } from "../domain";
import { seedData } from "../data/seed-data";

export class LogService {
  constructor() {}

  public async getLogs(getLogsFilters: GetLogsFilters): Promise<Log[]> {
    fetch(
      "https://3a18-186-86-32-29.ngrok-free.app/api/Logs?pageNumber=1&pageSize=2",
      {
        method: "GET",
        redirect: "follow",
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      }
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));

    // const resp = await fetch(
    //   `https://3a18-186-86-32-29.ngrok-free.app/api/Logs?pageNumber=1&pageSize=2`,
    //   {
    //     // headers: {
    //     //   "ngrok-skip-browser-warning": "true",
    //     // },
    //   }
    // );

    // console.log(resp);

    console.log(getLogsFilters);
    const logs = seedData as Log[];
    return logs;
  }
}
