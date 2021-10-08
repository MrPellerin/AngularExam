import { Evaluation } from "./evaluation.model";

export interface Restaurant{
  id: number,
  nom: string,
  adresse: string,
  evaluations: Evaluation[]
}
