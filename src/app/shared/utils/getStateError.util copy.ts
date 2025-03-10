import { Config, ResponseRequest } from "@core/models/response-request.model"

export const getStateError = <T>(config?: Config<T>): ResponseRequest<T> => {
  return {
    statusCode: config?.statusCode ? config.statusCode : 500,
    success: false,
    error: config?.error instanceof Error ? config.error.message : 'Error desconocido',
    message: config?.message ? config.message : 'Error'
  }
}
