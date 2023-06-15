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
    describe("GET /api/hello/:name", () => {
      it("return a message saying hello to the given person in the given language", async () => {
        const res = await webserverSandbox
          .getClient()
          .get("/api/hello/Jean?lang=fr");

        expect(res.status).toBe(200);
        expect(res.data).toEqual({ message: "Salut Jean !" });
      });

      it('should return a 400 error if the provided language is not "en" or "fr"', async () => {
        const res = await webserverSandbox
          .getClient()
          .get("/api/hello/Jean?lang=es", { validateStatus: () => true });

        expect(res.status).toBe(400);
        expect(res.data).toEqual([
          {
            errors: [
              {
                instancePath: "/lang",
                keyword: "enum",
                message: "must be equal to one of the allowed values",
                params: { allowedValues: ["en", "fr"] },
                schemaPath: "#/properties/lang/enum",
              },
            ],
            source: "query",
          },
        ]);
      });
    });
  });
});
