import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlersService implements ErrorHandler {
  handleError(error: Error | HttpErrorResponse) {
    if (error instanceof HttpErrorResponse) {
      console.error('HTTP ERROR: ', error);
      // Server or connection error happened
      if (!navigator.onLine) {
        console.error('NAVIGATOR ERROR: ', error);
        // Handle offline error
      } else {
        console.error('HTTP Error: ', error);
        // Handle Http Error (error.status === 403, 404...)
      }
    } else {
      console.error('APP ERROR: ', error);
      // Handle Client Error (Angular Error, ReferenceError...)
    }
    return throwError(() => error);
  }
}
