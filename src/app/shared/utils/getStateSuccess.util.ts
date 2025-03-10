
import { Config, ResponseRequest } from "@core/models/response-request.model";



export const getStateSuccess = <T>(config?: Config<T>): ResponseRequest<T> => {

  if (config?.pagination) {

    return {
      statusCode: config?.statusCode ? config.statusCode : 200,
      success: true,
      message: config?.message ? config.message : 'Éxito',
      pagination: config.pagination
    }
  }

  if (config?.data) {

    return {
      statusCode: config?.statusCode ? config.statusCode : 200,
      success: true,
      message: config?.message ? config.message : 'Éxito',
      data: config.data
    }

  }

  return {
    statusCode: config?.statusCode ? config.statusCode : 200,
    success: true,
    message: config?.message ? config.message : 'Éxito',

  }

}
