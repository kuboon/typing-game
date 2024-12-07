import lume from "lume/mod.ts";
import esbuild from "lume/plugins/esbuild.ts";
// import jsx_preact from "lume/plugins/jsx_preact.ts";
import lightningCss from "lume/plugins/lightningcss.ts";
import metas from "lume/plugins/metas.ts";
import sheets from "lume/plugins/sheets.ts";
import sourceMaps from "lume/plugins/source_maps.ts";
import { isAbsolute, join } from "@std/path/posix";
import { parse } from "@std/yaml/parse";
import type { PluginBuild } from "esbuild/mod.d.ts"

export const yamlPlugin = {
  name: "yaml",
  setup(build: PluginBuild) {
    // resolve .yaml and .yml files
    build.onResolve({ filter: /\.(yml|yaml)$/ }, (args) => {
      return {
        path: isAbsolute(args.path)
          ? args.path
          : join(args.importer.replace("file:", ""), "..", args.path),
        namespace: "yaml",
      };
    });

    // load files with "yaml" namespace
    build.onLoad({ filter: /yaml$/, namespace: "yaml" }, async (args) => {
      const yamlContent = await Deno.readTextFileSync(args.path);
      const parsed = parse(yamlContent);

      return {
        contents: JSON.stringify(parsed),
        loader: "json",
      };
    });
  },
};

const site = lume({
  src: "src",
});

site.use(esbuild({
  extensions: [".ts", ".tsx"],
  options: {
    target: "es2020",
    minify: false,
    keepNames: true,
    plugins: [yamlPlugin],
  },
}));
// site.use(jsx_preact());
site.use(metas());
site.use(sheets());
site.use(lightningCss());
site.use(sourceMaps());

site.copy("index.html");
site.copy("csv");

export default site;
