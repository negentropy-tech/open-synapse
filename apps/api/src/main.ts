import { test } from "./aaa";

import { node } from "@elysia/node";
import { Elysia } from "elysia";

const app = new Elysia({ adapter: node() })
  .get("/", test)
  .listen(3000, ({ hostname, port }) => {
    console.log(`🦊 Elysia is running at ${hostname}:${port}`);
  });
