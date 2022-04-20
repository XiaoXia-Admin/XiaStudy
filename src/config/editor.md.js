const defaultConfig = {
  width: "98%",
  height: 440,
  path: "./static/lib/editormd/lib/",
  codeFold: true, // 代码折叠
  lineWrapping: true, // 编辑框不换行
  watch: true,// 实时预览
  saveHTMLToTextarea: true,    // 保存 HTML 到 Textarea
  searchReplace: true,
  htmlDecode: false,       // 开启 HTML 标签解析，为了安全性，默认不开启
  emoji: false,
  taskList: true,
  tocm: false,         // Using [TOCM]
  tex: true,                   // 开启科学公式TeX语言支持，默认关闭
  flowChart: true,             // 开启流程图支持，默认关闭
  sequenceDiagram: true,       // 开启时序/序列图支持，默认关闭,
  crossDomainUpload: true,
  imageUpload: true,
  imageFormats: ["jpg", "jpeg", "gif", "png", "bmp", "webp"],
  imageUploadURL: "http://1.15.188.107:8160/oss/picture/uploadPicture", // 对接后端请求

  toolbarIcons: function () {
    return ["undo", "redo", "|",
      "bold", "del", "italic", "quote", "ucwords", "uppercase", "lowercase", "image", "|",
      "h1", "h2", "h3", "h4", "h5", "h6", "|",
      "list-ul", "list-ol", "hr", "|",
      "link", "reference-link", "code", "code-block", "table", "datetime", "|",
      "goto-line", "watch", "preview", "fullscreen", "|",
      "model", "|", "markdown"
    ]
  },
  toolbarIconTexts: {
    model: `<i class="fa" style="font-size: 16px;text-align: center;display: block;font-weight: bolder;padding: 5px;" name="testIcon" unselectable="on">模板</i>`,  // 如果没有图标，则可以这样直接插入内容，可以是字符串或HTML标签
    markdown: `<i class="fa" name="layoutmd" unselectable="on"><a href="https://www.kuangstudy.com/bbs/1356475333565587458" target="_blank">MarkDown指南</a></i>`
  },
  onload: function () {
    sysncCacheToInput()
  },
  onchange: function (){
    sysnCache()
  }
}

const codeThemes = [
  {
    label: 'monokai',
    value: 'monokai.min.css',
  },
  {
    label: 'atelier-cave-dark',
    value: 'atelier-cave-dark.min.css',
  },
  {
    label: 'atelier-cave-light',
    value: 'atelier-cave-light.min.css',
  },
  {
    label: 'atelier-dune-dark',
    value: 'atelier-dune-dark.min.css',
  },
  {
    label: 'atelier-dune-light',
    value: 'atelier-dune-light.min.css',
  },
  {
    label: 'atelier-estuary-dark',
    value: 'atelier-estuary-dark.min.css',
  },
  {
    label: 'atelier-estuary-light',
    value: 'atelier-estuary-light.min.css',
  },
  {
    label: 'atelier-forest-dark',
    value: 'atelier-forest-dark.min.css',
  },
  {
    label: 'atelier-forest-light',
    value: 'atelier-forest-light.min.css',
  },
  {
    label: 'atelier-heath-dark',
    value: 'atelier-heath-dark.min.css',
  },
  {
    label: 'atelier-heath-light',
    value: 'atelier-heath-light.min.css',
  },
  {
    label: 'atelier-lakeside-dark',
    value: 'atelier-lakeside-dark.min.css',
  },
  {
    label: 'atelier-lakeside-light',
    value: 'atelier-lakeside-light.min.css',
  },
  {
    label: 'atelier-plateau-dark',
    value: 'atelier-plateau-dark.min.css',
  },
  {
    label: 'atelier-plateau-light',
    value: 'atelier-plateau-light.min.css',
  },
  {
    label: 'atelier-savanna-dark',
    value: 'atelier-savanna-dark.min.css',
  },
  {
    label: 'atelier-savanna-light',
    value: 'atelier-savanna-light.min.css',
  },
  {
    label: 'atelier-seaside-dark',
    value: 'atelier-seaside-dark.min.css',
  },
  {
    label: 'atelier-seaside-light',
    value: 'atelier-seaside-light.min.css',
  },
  {
    label: 'atelier-sulphurpool-dark',
    value: 'atelier-sulphurpool-dark.min.css',
  },
  {
    label: 'atelier-sulphurpool-light',
    value: 'atelier-sulphurpool-light.min.css',
  },
  {
    label: 'github',
    value: 'github.min.css',
  },
  {
    label: 'github-v2',
    value: 'github-v2.min.css',
  },
  {
    label: 'hemisu-dark',
    value: 'hemisu-dark.min.css',
  },
  {
    label: 'hemisu-light',
    value: 'hemisu-light.min.css',
  },
  {
    label: 'tomorrow',
    value: 'tomorrow.min.css',
  },
  {
    label: 'tomorrow-night',
    value: 'tomorrow-night.min.css',
  },
  {
    label: 'tomorrow-night-blue',
    value: 'tomorrow-night-blue.min.css',
  },
  {
    label: 'tomorrow-night-bright',
    value: 'tomorrow-night-bright.min.css',
  },
  {
    label: 'tomorrow-night-eighties',
    value: 'tomorrow-night-eighties.min.css',
  },
  {
    label: 'tranquil-heart',
    value: 'tranquil-heart.min.css',
  },
  {
    label: 'vibrant-ink',
    value: 'vibrant-ink.min.css',
  },
];

export {
  defaultConfig,
  codeThemes
};
function sysnCache() {
  // alert($("#addTitle").val())
  // alert($("#topicDescription").val())
  // alert($("#texteditor").val())
  KsdCache.setCache("bbs_title", $("#addTitle").val());
  KsdCache.setCache("topicDescription", $("#topicDescription").val());
  KsdCache.setCache("bbs_content", $("#texteditor").val());
}
let KsdCache = {
  setCache: function (key, value, flag) {
    window[flag ? 'sessionStorage' : 'localStorage'].setItem("ksd_" + key, value);
  },
  removeCache: function (key, flag) {
    window[flag ? 'sessionStorage' : 'localStorage'].removeItem("ksd_" + key);
  },
  getCache: function (key, flag) {
    return window[flag ? 'sessionStorage' : 'localStorage'].getItem("ksd_" + key);
  }
};

function sysncCacheToInput() {
  let cacheTitle = KsdCache.getCache("bbs_title");
  let cacheCategory = KsdCache.getCache("bbs_category");
  let cacheTags = KsdCache.getCache("bbs_tags");
  let topicDescription = KsdCache.getCache("topicDescription");
  let cacheContent = KsdCache.getCache("bbs_content");
  // alert(cacheTitle)
  // alert(topicDescription)
  // alert(cacheContent)
  if (cacheTitle) {
    $("#addTitle").val(cacheTitle);
  }

  if (cacheCategory) {
    $("#category").val(cacheCategory)
  }

  if (topicDescription) {
    $("#topicDescription").val(topicDescription);
  }

  // if (cacheTags) {
  //   $("#tagsinputval").val(cacheTags);
  // }

  if (cacheContent) {
    // alert('haha')
    // alert(cacheContent)
    this.editor.setMarkdown(cacheContent)
  }
}
