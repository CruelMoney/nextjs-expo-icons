module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["next/babel", "babel-preset-expo"],
  };
};
