import lume from "lume/mod.ts";
import esbuild from "lume/plugins/esbuild.ts";
import postcss from "lume/plugins/postcss.ts";
import inline from "lume/plugins/inline.ts";

const site = lume({
  src: './src'
});

site.add("/css/main.css");
site.add('/.well-known');

site.use(esbuild());
site.use(postcss());
site.use(inline());

site.copy('fonts');

export default site;
