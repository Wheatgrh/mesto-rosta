import { BadRequestException, ValidationError } from '@nestjs/common';

export function createValidationException(details: Record<string, string[]>) {
  return new BadRequestException({
    message: 'Неправильно заполнена форма',
    details,
  });
}

export function validationPipeExceptionFactory(opts: ValidationError[]) {
  const transformErrors = (e: ValidationError) => {
    if (e.children.length) {
      return e.children.reduce((acc, nestedE) => {
        acc[nestedE.property] = transformErrors(nestedE);
        return acc;
      }, {} as ApiErrorDetails<any>);
    } else {
      return Object.values(e.constraints);
    }
  };

  const details = opts.reduce((acc, e) => {
    acc[e.property] = transformErrors(e);
    return acc;
  }, {} as Record<string, any>);

  throw createValidationException(details);
}

type Scalar = boolean | number | string | bigint | symbol | Date;

export type ApiErrorDetails<T> = {
  [P in keyof T]: T[P] extends Scalar
    ? string[]
    : T[P] extends Array<infer U>
    ? ApiErrorDetails<U>[]
    : T[P] extends Record<string, any>
    ? ApiErrorDetails<T[P]>
    : string[];
};

export class ApiError<T = undefined> {
  statusCode: number;
  name: string;
  message: string;
  details: ApiErrorDetails<Required<T>>;

  constructor(val: Partial<ApiError>) {
    Object.assign(this, val);
  }
}
