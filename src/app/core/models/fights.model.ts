import { Boxer } from "./boxer.model";

export interface FightsResponse {
  idClashes: number;
  boxers: Boxer[];
}

export interface Fights {
  id: number;
  number_clashes: number;
  id_type_clashes: number;
  rounds: number;
  id_category: number;
  id_boxer_one: string;
  id_boxer_two: string;
  id_boxer_tree?: string;
  id_state: number;
}
