import { NextFunction, Request, Response } from 'express';

const requireRequestHeaders = {
  'x-client-secret': process.env.CLIENT_SECRET || 'change me',
  'x-client-id': process.env.CLIENT_ID || '1234',
};

export const reqHeaders = (req: Request, res: Response, next: NextFunction) => {
  // the client app must include this headers with every request
  for (let key in requireRequestHeaders) {
    // @ts-ignore
    if (requireRequestHeaders[key] !== req.headers[key]) {
      return res.status(401).send('Client app not authorized');
    }
  }

  next();
};
