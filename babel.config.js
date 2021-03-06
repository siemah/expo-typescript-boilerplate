module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', '@babel/preset-typescript'],
    plugins: [
      [
        require.resolve('babel-plugin-module-resolver'),
        {
          alias:{
            "@local": './src',
            extentions: ['.ts', '.tsx']
          }
        }
      ]
    ]
  };
};
