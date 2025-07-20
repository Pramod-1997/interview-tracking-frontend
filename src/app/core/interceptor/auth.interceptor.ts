import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODYxMjFhOTI2MzNjM2E1ZGQwNjc3N2UiLCJyb2xlIjoidXNlciIsImlhdCI6MTc1Mjg2MzQxMiwiZXhwIjoxNzUyOTQ5ODEyfQ.ryRcYC3EKu2LwUfgqIXjIB1hzMvuxCf0s25og-yN6L0"

   const authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}` // Or `Token ${token}` depending on backend
        }
      });

  return next(authReq);
};
