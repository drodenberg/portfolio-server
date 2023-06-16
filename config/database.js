// strapi-api/config/database.js
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-ci5qpilph6eh6mrbo48g-a.ohio-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'database_yevt'),
      user: env('DATABASE_USERNAME', 'drodenberg'),
      password: env('DATABASE_PASSWORD', 'm1WsjEBAOXz7fRC3M8jBUSS7gQWZfYbc'),
      schema: env('DATABASE_SCHEMA', 'public'), // Not required
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
      },
    },
    debug: false,
  },
});