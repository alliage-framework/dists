import { Service } from "@alliage/service-loader";
import { AbstractController, AbstractRequest, AbstractResponse, Get } from "@alliage/webserver";

@Service("main_controller")
export default class MainController extends AbstractController {
  @Get("/")
  main(request: AbstractRequest, response: AbstractResponse) {
    response.setBody(`
      <h1>Welcome on Alliage Web</h1>
      <p>Your ip is: ${request.getIP()}</p>
    `);
  }
}