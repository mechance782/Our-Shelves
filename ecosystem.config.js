module.exports = {
  apps: [
    {
      name: "backend",
      cwd: "./backend",
      script: "cmd",
      args: "/c npm run dev",
      env: {
        NODE_ENV: "development",
        PORT: 3000
      },
      env_production: {
        NODE_ENV: "production"
      }
    },
    {
      name: "frontend",
      cwd: "./frontend",
      script: "cmd",
      args: "/c npm run dev",
      env: {
        NODE_ENV: "development",
        PORT: 5173
      },
      env_production: {
        NODE_ENV: "production"
      }
    }
  ]
};
