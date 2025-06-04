import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { Sandbox } from "@alliage/sandbox";
import { WebserverSandbox } from "@alliage/webserver-sandbox";

describe("Main scenario", () => {
  const sandbox = new Sandbox({
    scenarioPath: __dirname,
  });

  const webserverSandbox = new WebserverSandbox(sandbox);

  beforeAll(async () => {
    try {
      await sandbox.init();
      await webserverSandbox.start();
    } catch (e) {
      console.error(e);
    }
  });

  afterAll(async () => {
    await webserverSandbox.stop();
    await sandbox.clear();
  });

  describe("Webserver", () => {
    describe("GET /", () => {
      it("should display a welcome message and the user's IP address", async () => {
        const res = await webserverSandbox.getClient().get("/");

        expect(res.status).toBe(200);
        expect(res.data).toEqual(
          "<h1>Welcome on Alliage Web</h1>\n<p>Your ip is: ::1</p>"
        );
      });
    });
  });
});
