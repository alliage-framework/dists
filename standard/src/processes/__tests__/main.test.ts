import { describe, it, expect, vi } from "vitest";
import MainProcess from "../main";

describe("processes/main", () => {
  describe("MainProcess", () => {
    const mainProcess = new MainProcess();

    describe("#getName", () => {
      it("should return the right name", () => {
        expect(mainProcess.getName()).toEqual("main");
      });
    });

    describe("#execute", () => {
      it("should display a welcome message and return true", async () => {
        const writeSpy = vi.spyOn(process.stdout, "write");

        const res = await mainProcess.execute();

        expect(writeSpy).toHaveBeenCalledTimes(1);
        expect(writeSpy).toHaveBeenCalledWith("Hello, Alliage!\n");
        expect(res).toBe(true);
      });
    });
  });
});
