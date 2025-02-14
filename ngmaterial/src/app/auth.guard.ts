import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  console.log('authGuard', route, state);
  if (sessionStorage.getItem('uid')) 
    return true;
  alert('Login First');
  return false;
};
