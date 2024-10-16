import lume from "lume/mod.ts";
import esbuild from "lume/plugins/esbuild.ts";
import inline from "lume/plugins/inline.ts";
import postcss from "lume/plugins/postcss.ts";
import nunjucks from "lume/plugins/nunjucks.ts";

const site = lume({
  src: "./src",
});

site.add("/css/main.css");
site.add('/.well-known');

site.use(esbuild());
site.use(inline());
site.use(postcss());
site.use(nunjucks());

site.copy("fonts");

export default site;
