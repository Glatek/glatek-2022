import lumeCMS from "lume/cms/mod.ts";

const cms = lumeCMS({
  site: {
    name: "Glatek",
    url: "https://glatek.se",
  },
});

// 3. Create a document to edit the homepage (index.md file)
cms.document("hem", "src:index.md", ["title: text", "content: markdown"]);

cms.document("om oss", "src:om-oss.md", ["title: text", "content: markdown"]);

export default cms;
