module.exports = {
  apps: [
    {
      name: "backend",
      cwd: "./backend",
      script: "npm",
      args: "run dev",   
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
      script: "npm",
      args: "run dev -- --host 0.0.0.0",   
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
