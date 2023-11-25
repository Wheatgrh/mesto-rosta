type Scalar = boolean | number | string | bigint | symbol | Date;

export type ApiErrorDetails<T> = {
    [P in keyof T]: T[P] extends Scalar ? string[] : T[P] extends Array<infer U> ? ApiErrorDetails<U>[]
        : T[P] extends Record<string, any> ? ApiErrorDetails<T[P]> : string[]
}

export class ApiError<T = undefined> {
    statusCode: number | undefined;
    name: string | undefined;
    message: string | undefined;
    details: ApiErrorDetails<Required<T>> | undefined;

    constructor(val: Partial<ApiError>) {
        Object.assign(this, val);
    }
}