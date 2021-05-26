export interface IQuery {
  limit: number;
  name?: string;
}

export type IQ = Record<string, unknown>;

export default IQuery;
