import lume from "lume/mod.ts";
import esbuild from "https://raw.githubusercontent.com/kuboon/lume/fix-esbuild-plugin/plugins/esbuild.ts";
// import jsx_preact from "lume/plugins/jsx_preact.ts";
import lightningCss from "lume/plugins/lightningcss.ts";
import metas from "lume/plugins/metas.ts";
import sheets from "lume/plugins/sheets.ts";
import sourceMaps from "lume/plugins/source_maps.ts";
import { isAbsolute, join } from "deno/std/path/posix.ts";
import { parse } from "deno/std/yaml/parse.ts";

export const yamlPlugin = {
  name: "yaml",
  setup(build: any) {
    // resolve .yaml and .yml files
    build.onResolve({ filter: /\.(yml|yaml)$/ }, (args: any) => {
      return {
        path: isAbsolute(args.path)
          ? args.path
          : join(args.importer.replace("file:", ""), "..", args.path),
        namespace: "yaml",
      };
    });

    // load files with "yaml" namespace
    build.onLoad({ filter: /yaml$/, namespace: "yaml" }, async (args: any) => {
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
  dest: "dist",
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
