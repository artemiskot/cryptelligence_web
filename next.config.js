// const withTM = require("next-transpile-modules")([
//   "@mui/material",
//   "@mui/lab",
//   "@mui/system",
//   "@mui/icons-material",
// ]); // pass the modules you would like to see transpiled

/** @type {import('next').NextConfig} */
/* module.exports = {
  reactStrictMode: true,
}; */
module.exports = {
  webpack: config => {
    const alias = { ...config.resolve.alias }
    delete alias.url // alias to native-url
    config.resolve = {
      ...config.resolve,
      alias
    }
    return config
  }
}