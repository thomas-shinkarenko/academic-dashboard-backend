import { HttpException, HttpStatus } from '@nestjs/common';

export const BAD_REQUEST = (message: string) => {
  throw new HttpException(
    message ?? 'Internal Server Error',
    HttpStatus.BAD_REQUEST,
  );
};

export const DUPLICATED_KEY = (message: string) => {
  throw new HttpException(
    message ?? 'Internal Server Error',
    HttpStatus.CONFLICT,
  );
};
