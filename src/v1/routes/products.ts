import { Router, Request, Response, NextFunction } from "express";
import { NotFoundError } from "../../common/errors";

const router = Router();

/**
 * @openapi
 * /v1/products/{id}:
 *   get:
 *     summary: Get a product by ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The product ID
 *     responses:
 *       200:
 *         description: Product retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "1"
 *                 name:
 *                   type: string
 *                   example: "Sample Product"
 *                 price:
 *                   type: string
 *                   example: "99.99"
 *                 created_at:
 *                   type: string
 *                   format: date-time
 *                   example: "2025-12-15T00:00:00.000Z"
 *       404:
 *         description: Product not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "error"
 *                 message:
 *                   type: string
 *                   example: "Product is not found"
 */
router.get("/:id", (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  console.log('💡 id === "999": ', id === "999");

  if (id === "999") {
    throw new NotFoundError("Product");
  }

  const hardcodedProduct = {
    id: id,
    name: "Sample Product",
    price: "99.99",
    created_at: "2025-12-15T00:00:00.000Z",
  };

  res.status(200).json(hardcodedProduct);
});

export default router;
