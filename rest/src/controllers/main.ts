import { createHttpError } from "@alliage/rest-api";
import { Service } from "@alliage/service-loader";
import { AbstractController, AbstractRequest, Get } from "@alliage/webserver";

interface Params {
  name: string;
}

interface Query {
  lang?: "en" | "fr";
}

const translations = {
  en: {
    message: (name: string) => `Hello, ${name}!`,
  },
  fr: {
    message: (name: string) => `Salut ${name} !`,
  },
} as const;

@Service("main_controller")
export default class MainController extends AbstractController {
  @Get("/api/hello/:name")
  async main(request: AbstractRequest<Params, Query>) {
    const { lang = "en" } = request.getQuery();
    const { name } = request.getParams();

    if (name === "Jon Snow") {
      /**
       * Error sent when the name is Jon Snow, because he obviously knows nothing!
       */
      throw createHttpError(400, {
        message: "You know nothing, Jon Snow !",
      });
    }

    return {
      message: translations[lang].message(name),
    };
  }
}
