import { Injectable } from '@angular/core';
import { TOKEN } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  setToken(token: string) {
    localStorage.setItem(TOKEN, token);
  }

  clear() {
    localStorage.clear();
  }

  getToken() {
    return localStorage.getItem(TOKEN);
  }
}
