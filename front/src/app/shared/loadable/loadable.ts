export class Loadable<T> {
  private constructor(public data: T, public loading: boolean, public error: boolean, public errorMessages?: string[]) {}

  public static initialState<T>(data: T): Loadable<T> {
    return this.success(data);
  }

  public static loading<T>(initialState: Loadable<T>): Loadable<T> {
    return { ...initialState, loading: true };
  }

  public static error<T>(error: Error, data?: T): Loadable<T> {
    // @ts-ignore
    return new Loadable(data, false, true, (error?.message || '').split(','));
  }

  public static success<T>(data: T): Loadable<T> {
    return new Loadable(data, false, false);
  }
}
