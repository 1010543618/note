const enableMetadata = process.env.ENABLE_REMARK_METADATA;
const metadataInit = process.env.REMARK_METADATA_INIT;

let plugins = [
  "gfm",
  "handle-local-img",
  "preset-lint-recommended",
  [
    "pangu",
    {
      inlineCode: false,
    },
  ],
];

if (enableMetadata === "true") {
  plugins = [
    ...plugins,
    ["frontmatter", ["yaml", "toml"]],
    [
      "metadata",
      {
        gitExcludeCommit: "chore:",
        metadata: {
          date({ gitCreatedTime, createdTime }) {
            if (gitCreatedTime) {
              return gitCreatedTime;
            }
            return createdTime;
          },
          updated({ gitModifiedTime, modifiedTime }) {
            if (metadataInit === "true") {
              return gitModifiedTime;
            } else {
              return modifiedTime;
            }
          },
        },
      },
    ],
  ];
}

module.exports = {
  settings: {
    bullet: "-",
    fences: true,
  },
  plugins,
};
