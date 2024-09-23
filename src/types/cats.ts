export interface Cat {
  id: string;
  url: string;
  width: number;
  height: number;
  mime_type: string;
  breeds: Array<{}>;
  categories: string[];
}

export interface NewCatResponse {
  id: string;
  url: string;
  sub_id: string;
  width: number;
  height: number;
  original_filename: string;
  pending: 0 | 1;
  approved: 0 | 1;
}

export type CatsList = Cat[];
