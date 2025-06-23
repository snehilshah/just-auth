import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
  host: 'project-gallery-project-gallery.a.aivencloud.com',
  user: 'avnadmin',
  database: 'just-auth',
  password: process.env.AIVEN_PASSWORD,
  port: 15464,
  ssl: {
    rejectUnauthorized: false,
  }
})

export {connection};