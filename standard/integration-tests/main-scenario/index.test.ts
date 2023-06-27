import { describe, it, expect, beforeAll, afterAll, vi } from "vitest";
import { Sandbox } from "@alliage/sandbox";

describe("Main scenario", () => {
  const sandbox = new Sandbox({
    scenarioPath: __dirname,
  });

  beforeAll(async () => {
    await sandbox.init();
  });

  afterAll(async () => {
    await sandbox.clear();
  });

  describe("Main process", () => {
    it("should say hello", async () => {
      const dataSpy = vi.fn();
      const { process: mainProcess, waitCompletion } = sandbox.run(["main"]);

      mainProcess.stdout?.on("data", dataSpy);
      await waitCompletion();

      expect(dataSpy).toHaveBeenCalledTimes(1);
      expect(dataSpy).toHaveBeenCalledWith("Hello, Alliage!\n");
    });
  });
});
