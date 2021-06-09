/* eslint-disable camelcase */
export interface IQuery {
  limit?: number;
  name?: string;
  id?: string | number;
  attack_from?: number;
  attack_to?: number;
  exp_from?: number;
  exp_to?: number;
  hp_from?: number;
  hp_to?: number;
  defense_from?: number;
  defense_to?: number;
  speed_from?: number;
  speed_to?: number;
}

export type IQ = Record<string, unknown>;

export default IQuery;
