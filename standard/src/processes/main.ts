import { AbstractProcess } from "@alliage/process-manager";
import { Service } from "@alliage/service-loader";

@Service("main_process")
export default class MainProcess extends AbstractProcess {
  getName() {
    return "main";
  }

  async execute() {
    process.stdout.write("Hello, Alliage!\n");
    return true;
  }
}
