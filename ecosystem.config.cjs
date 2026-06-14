// ecosystem.config.cjs
module.exports = {
  apps: [
    {
      name: "opencode-cowork-proxy",
      cwd: ".",
      script: "dist/index.js",

      // ✅ Single instance for this stateless proxy
      instances: 1,
      exec_mode: "fork",

      // ✅ Memory management
      max_memory_restart: "512M",
      node_args: "--max-old-space-size=512",

      // ✅ Auto restart & stability
      autorestart: true,
      watch: false,
      min_uptime: "10s",
      max_restarts: 10,

      // ✅ Log rotation
      log_date_format: "YYYY-MM-DD HH:mm:ss",
      merge_logs: true,
      out_file: "./logs/out.log",
      error_file: "./logs/error.log",

      env: {
        NODE_ENV: "production",
        PORT: "3000",
      },
    },
  ],
};
