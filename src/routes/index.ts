import { Router, Request, Response } from "express";

const router : Router = Router();


/**
 * @swagger
 * /:
 *   get:
 *     summary: Ping the API.
 *     description: Check if the API is online.
 *     tags: [Ping]
 *     responses:
 *       200:
 *         description: The API response.
 *         content:
 *           application/json:
 *             name:
 *               type: string
 *               description: A message from the API if it's online.
 *               example: API is running
 */
router.get("/", (req : Request, res : Response) => {
    return (res.status(200).json({message: "API is running"}));
});

export default router;