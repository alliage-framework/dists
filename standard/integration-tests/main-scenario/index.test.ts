import { Sandbox } from "@alliage/sandbox";

describe("Main scenario", () => {
  const sandbox = new Sandbox({
    scenarioPath: __dirname,
  });

  beforeAll(async () => {
    try {
      await sandbox.init();
    } catch (e) {
      console.error(e);
    }
  });

  afterAll(async () => {
    await sandbox.clear();
  });

  describe("Main process", () => {
    it("should say hello", async () => {
      const dataSpy = jest.fn();
      const { process: mainProcess, waitCompletion } = sandbox.run(["main"]);

      mainProcess.stdout?.on("data", dataSpy);
      await waitCompletion();

      expect(dataSpy).toHaveBeenCalledTimes(1);
      expect(dataSpy).toHaveBeenCalledWith("Hello, Alliage!\n");
    });
  });
});
