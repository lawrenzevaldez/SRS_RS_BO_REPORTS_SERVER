module.exports = {
  apps: [
    {
      name: "srs_rsbo_reports",
      script: "./server.js",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
