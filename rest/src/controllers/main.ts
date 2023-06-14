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

    return {
      message: translations[lang].message(name),
    };
  }
}
