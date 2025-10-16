module.exports = {
  apps: [
    {
      name: "backend",
      cwd: "./backend",
      script: "npm",
      args: "run start",
      env: {
        NODE_ENV: "development",
        PORT: 3000,
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 3000,
      },
      watch: false,
      autorestart: true,
    },
    {
      name: "frontend",
      cwd: "./frontend",
      script: "npm",
      args: "run preview", 
      env: {
        NODE_ENV: "development",
        PORT: 5173,
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 5173,
      },
      watch: false,
      autorestart: true,
    },
  ],
};
