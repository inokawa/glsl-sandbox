module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(glsl|vs|fs|vert|frag)$/,
    use: ['raw-loader'],
  });

  return config;
};
