import express, { NextFunction, Request, Response } from 'express'

const router = express.Router()

router.post(
  '/product',
  async (req: Request, res: Response, next: NextFunction) => {
    return res.send(201).json(1)
  }
)

export default router
