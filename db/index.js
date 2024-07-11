import * as SQLite from 'expo-sqlite';

let db = null;

export const init = async () => {
  try {
    db = await SQLite.openDatabaseAsync('sessions.db');
    await db.execAsync(
      'CREATE TABLE IF NOT EXISTS sessions (localId TEXT PRIMARY KEY NOT NULL, email TEXT NOT NULL, token TEXT NOT NULL)'
    );
    console.log('Base de datos inicializada correctamente');
  } catch (error) {
    console.error('Error al inicializar la base de datos:', error);
    throw error;
  }
};

export const insertSession = async ({ email, localId, token }) => {
  try {
    if (!db) {
      throw new Error('Base de datos no inicializada');
    }
    await db.runAsync(
      'INSERT INTO sessions (localId, email, token) VALUES (?, ?, ?)',
      [localId, email, token]
    );
    console.log('Sesión insertada correctamente');
  } catch (error) {
    console.error('Error insertando sesión:', error);
    throw error;
  }
};

export const deleteSession = async () => {
  try {
    if (!db) {
      throw new Error('Base de datos no inicializada');
    }
    await db.runAsync('DELETE FROM sessions');
    console.log('Sesión eliminada correctamente');
  } catch (error) {
    console.error('Error eliminando sesión:', error);
    throw error;
  }
};

export const fetchSession = async () => {
  try {
    if (!db) {
      throw new Error('Base de datos no inicializada');
    }
    const firstRow = await db.getFirstAsync('SELECT * FROM sessions');
    return firstRow;
  } catch (error) {
    console.error('Error obteniendo sesión:', error);
    throw error;
  }
};
