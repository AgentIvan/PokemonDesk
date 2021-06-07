export interface IQuery {
  limit?: number;
  name?: string;
  id?: string | number;
}

export type IQ = Record<string, unknown>;

export default IQuery;
