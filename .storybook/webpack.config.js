module.exports = ({ config }) => {
  config.module.rules.push(
    {
      test: /\.tsx?$/,
      loader: "ts-loader",
      options: {
        transpileOnly: true
      }
    },
    {
      test: /story\.tsx?$/,
      loaders: [
        {
          loader: require.resolve("@storybook/addon-storysource/loader"),
          options: { parser: "typescript" }
        }
      ],
      enforce: "pre"
    }
  );

  config.resolve.extensions.unshift(".ts", ".tsx");

  return config;
};
