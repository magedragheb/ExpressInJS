import { pinoHttp } from "pino-http";

export const mypino = pinoHttp({
  redact: {
    paths: [
      "req.headers",
      "res.headers",
      "req.remoteAddress",
      "req.remotePort",
      "hostname",
      "pid",
    ],
    remove: true,
  },
  transport: {
    targets: [
      { target: "pino-pretty" },
      {
        target: "pino/file",
        options: { destination: "./logs/app.log" },
      },
    ],
  },
});
