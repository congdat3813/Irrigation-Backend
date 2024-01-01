import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { IS_PUBLIC_KEY } from 'src/auth/auth-user.decorator';

@Injectable()
export class LocalAuthenticationGuard extends AuthGuard('local') {}

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    /**
     * This is to allow some endpoints to be public by decorating the controller with @Public()
     */
    if (isPublic) {
      return true;
    }

    /**
     * This is to allow the metrics endpoint to be public
     */
    const request = context.switchToHttp().getRequest();
    const uri = request.url;
    if (uri.includes('metrics')) {
      return true;
    }

    return super.canActivate(context);
  }
}
