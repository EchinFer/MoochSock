import { createLogger, transports, format } from "winston";
const path = require('path');

const { combine, timestamp, printf } = format;


// Define el formato de registro
const logFormat = printf(({ timestamp, level, message }) => {
    return `${timestamp} ${level}: ${message}`;
});

// Ruta completa a la carpeta "logs" en la raíz del proyecto
const logsDirectory = path.join(__dirname, '..', 'logs');

// Configura el registro de errores
const errorLogger = createLogger({
    level: 'error', // Nivel de registro de errores
    format: combine(timestamp(), logFormat),
    transports: [
        // Transporte para guardar errores en un archivo
        new transports.File({ filename: path.join(logsDirectory, 'error.log'), level: 'error' }),
    ],
});

export {
    errorLogger
}