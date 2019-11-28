import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {

  private message: string;

  constructor(private router: Router) { }

  clear(): void {
    localStorage.clear();
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('token')!=null && !this.isTokenExpired();

  }

  isTokenExpired(): boolean {
    return false;
  }

  

}
