const mysql = require('mysql2/promise');

const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;

let connection;

async function getConnection() {
  if (!DB_HOST || !DB_USER || !DB_DATABASE) {
    return null;
  }

  if (!connection) {
    connection = await mysql.createPool({
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_DATABASE,
      waitForConnections: true,
      connectionLimit: 5,
      queueLimit: 0,
    });
  }

  return connection;
}

async function recordUsage(actionType) {
  const pool = await getConnection();
  if (!pool) {
    return;
  }

  try {
    await pool.execute(
      'INSERT INTO usage_stats (action_type, created_at) VALUES (?, NOW())',
      [actionType]
    );
  } catch (error) {
    console.warn('Falha ao registrar estatística de uso:', error.message);
  }
}

module.exports = { getConnection, recordUsage };
