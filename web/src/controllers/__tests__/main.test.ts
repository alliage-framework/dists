import { describe, it, expect, vi } from "vitest";
import { AbstractRequest, AbstractResponse } from "@alliage/webserver";
import MainController from "../main";

function createDummyRequest(ip: string) {
  return {
    getIP: () => ip,
  } as AbstractRequest;
}

function createDummyResponse() {
  return {
    setBody: vi.fn() as (body: string) => AbstractResponse,
  } as AbstractResponse;
}

describe("controllers/main", () => {
  describe("MainController", () => {
    const controller = new MainController();

    describe("#main", () => {
      it("should display a welcome message and the user's IP address", () => {
        const request = createDummyRequest("127.0.0.42");
        const response = createDummyResponse();

        controller.main(request, response);

        expect(response.setBody).toHaveBeenCalledTimes(1);
        expect(response.setBody).toHaveBeenCalledWith(
          "<h1>Welcome on Alliage Web</h1>\n<p>Your ip is: 127.0.0.42</p>"
        );
      });
    });
  });
});
