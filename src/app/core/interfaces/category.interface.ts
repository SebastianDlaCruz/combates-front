import { Category } from "@core/models/category.model";
import { ResponseRequest } from "@core/models/response-request.model";
import { Observable } from "rxjs";
import { ICreate, IDelete, IGetAll, IUpdate } from "./crud.interface";

export interface ICategory extends ICreate<Category>, IDelete, IUpdate<Category>, IGetAll<Category[]> {
  getCategory(id: number): Observable<ResponseRequest<Category>>
}
