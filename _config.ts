import lume from "lume/mod.ts";
import esbuild from "lume/plugins/esbuild.ts";
import inline from "lume/plugins/inline.ts";
import postcss from "lume/plugins/postcss.ts";
import nunjucks from "lume/plugins/nunjucks.ts";

const site = lume({
  src: "./src",
});

site.add("css");
site.add('/.well-known');
site.add("fonts");

site.use(esbuild());
site.use(postcss());
site.use(inline());
site.use(nunjucks());

export default site;
