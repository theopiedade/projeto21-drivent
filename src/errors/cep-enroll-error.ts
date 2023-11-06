import { ApplicationError } from '@/protocols';

export function cepEnrollError(message: string): ApplicationError {
  return {
    name: 'CepEnrollError',
    message,
  };
}