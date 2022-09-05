import lume from "lume/mod.ts";
import esbuild from "lume/plugins/esbuild.ts";
import postcss from "lume/plugins/postcss.ts";

const site = lume({
  src: './src'
});

site.use(esbuild());
site.use(postcss());

export default site;
