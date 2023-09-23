import { errorLogger } from "../libs/logger";

// Middleware de manejo de errores
export function errorHandler(err: any, message?: string) {
    errorLogger.error(message ?? "Ha ocurrido un error", { error: err });
}