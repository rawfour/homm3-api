import { Injectable, CanActivate } from '@nestjs/common';

import { Observable } from 'rxjs';

@Injectable()
export class AuthService implements CanActivate {
  canActivate(): boolean | Promise<boolean> | Observable<boolean> {
    return process.env.NODE_ENV === 'development' ? true : false;
  }
}
