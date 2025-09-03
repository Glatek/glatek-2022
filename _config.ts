import lume from "lume/mod.ts";
import esbuild from "lume/plugins/esbuild.ts";
import inline from "lume/plugins/inline.ts";
import lightningCSS from "lume/plugins/lightningcss.ts";
import minifyHTML from "lume/plugins/minify_html.ts";
import sitemap from "lume/plugins/sitemap.ts";

const site = lume({
  src: "./src",
  location: new URL("https://glatek.se"),
});

site.add("css");
site.add('/.well-known');
site.add("fonts");

site.use(esbuild());
site.use(lightningCSS());
site.use(inline());
site.use(minifyHTML());
site.use(sitemap());

export default site;
