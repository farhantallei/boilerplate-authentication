import { FastifyPluginAsync } from 'fastify';
import { authRoutes } from '../modules/guru/auth/auth.routes';

export const guruRoutes: FastifyPluginAsync = async (route) => {
  route.register(authRoutes, { prefix: 'auth' });
};
