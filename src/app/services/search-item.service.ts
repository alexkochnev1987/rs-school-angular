import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class SearchItemService {
  constructor(private httpService: HttpService, private router: Router) {}

  getSearchItems(searchInput: string): Observable<string[]> {
    return this.httpService.getData(searchInput).pipe(
      map(x => x.items.map(x => x.id.videoId)),
      catchError(this.handleError)
    );
  }

  getVideoItems(id: string[]) {
    return this.httpService.getItemById(id.join(',')).pipe(
      map(x => {
        if (x.items.length === 0) this.router.navigate(['**']);
        return x.items;
      }),
      catchError(this.handleError)
    );
  }

  getVideoItem(id: string) {
    return this.httpService.getItemById(id).pipe(
      map(x => x.items[0]),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
