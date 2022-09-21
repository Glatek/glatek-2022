import lume from "lume/mod.ts";
import esbuild from "lume/plugins/esbuild.ts";
import postcss from "lume/plugins/postcss.ts";

const site = lume({
  src: './src'
});

site.add("/css/main.css");
site.add('/.well-known');

site.use(esbuild());
site.use(postcss());

site.copy('fonts');

export default site;
