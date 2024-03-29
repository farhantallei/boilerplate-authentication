import { FastifyReply } from 'fastify';
import app from '../app';

export async function commitToDB<T>(prisma: Promise<T>, reply?: FastifyReply) {
  const [error, data] = await app.to(prisma);
  if (error) {
    if (reply) return reply.internalServerError(error.message) as never;
    return app.httpErrors.internalServerError(error.message) as never;
  }
  return data;
}

export async function verifyToken<VerifyPayloadType extends object | string>(
  token: string,
  reply: FastifyReply
) {
  try {
    return await app.jwt.verify<VerifyPayloadType>(token);
  } catch (err) {
    const error = err as string;
    reply.setCookie('jwt_token', '');
    return reply.badRequest(error) as never;
  }
}
