import { AbstractRequest, AbstractResponse } from "@alliage/webserver";
import MainController from "../main";

function createDummyRequest(query: any, params: any) {
  return {
    getQuery: () => query,
    getParams: () => params,
  } as AbstractRequest<any, any>;
}

describe("controllers/main", () => {
  describe("MainController", () => {
    const controller = new MainController();

    describe("#main", () => {
      it("should return a message in english saying hello to John", async () => {
        const request = createDummyRequest({ lang: "en" }, { name: "John" });

        const res = await controller.main(request);

        expect(res).toEqual({
          message: "Hello, John!",
        });
      });

      it("should return a message in french saying hello to Jean", async () => {
        const request = createDummyRequest({ lang: "fr" }, { name: "Jean" });

        const res = await controller.main(request);

        expect(res).toEqual({
          message: "Salut Jean !",
        });
      });

      it("should pick english by default if no language is provided", async () => {
        const request = createDummyRequest({}, { name: "Marc" });

        const res = await controller.main(request);

        expect(res).toEqual({
          message: "Hello, Marc!",
        });
      });
    });
  });
});
