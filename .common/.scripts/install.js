import { spawnSync } from "node:child_process";

const OPTION_REGEXP = /^\-/;
const NPM_REGEXP = /[\/\\]npm[\\/]/;
const PACKAGE_REGEXP = /^((@[a-z_-]+\/)?([a-z_-]+))(@(.*))?$/;

const isNpm = NPM_REGEXP.test(process.env.npm_execpath || '');
const npmArgs = isNpm
  ? "run alliage:install -- {package}"
  : "alliage:install {package}";

if (process.env.npm_config_argv) {
  const packages = JSON.parse(process.env.npm_config_argv)
    .original.slice(1)
    .filter((arg) => !OPTION_REGEXP.test(arg))
    .map((pkg) => {
      const res = PACKAGE_REGEXP.exec(pkg);
      return res[1];
    });

  packages.forEach((pkg) => {
    spawnSync(
      process.env.npm_execpath,
      npmArgs.replace("{package}", pkg).split(" "),
      { stdio: "inherit" }
    );
  });
}
