export interface ErrorVm {
  status: number | null;
  statusText: string | null;
  internal: boolean | null;
  data: string | null;
  error: object | null;
}
