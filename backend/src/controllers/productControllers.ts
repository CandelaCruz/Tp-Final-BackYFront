import { Request, Response } from "express"
import { Product } from "../models/productModel"


const getAllProducts = async (req: Request, res: Response): Promise<any> => {
  try {
    const products = await Product.find()
    res.json({
      success: true,
      message: "recuperar todos los productos",
      data: products
    })
  } catch (error) {
    const err = error as Error
    res.status(500).json({ success: false, message: err.message })
  }
}

const searchProducts = async (req: Request, res: Response) :Promise<any> => {
  const name = typeof req.query.name === "string" ? req.query.name : ""

  if (!name) {
    return res.status(400).json({
      success: false,
      message: "Debe enviar el nombre como string"
    })
  }

  try {
    const regex = new RegExp(name, "i") // búsqueda insensible a mayúsculas
    const results = await Product.find({ name: { $regex: regex } })

    res.json({ success: true, data: results })
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Error al buscar productos",
      error: err.message
    })
  }
}

const createProduct = async (req: Request, res: Response): Promise<any> => {
  try {
    const body = req.body

    const { name, price, category } = body

    if (!name || !price || !category) {
      return res.status(400).json({
        success: false,
        message: "bad request, invalid data"
      })
    }

    const newProduct = new Product({ name, price, category })
    await newProduct.save()

    res.status(201).json({
      success: true,
      messaje: "Successfully created product",
      data: newProduct
    })
  } catch (error) {
    const err = error as Error
    res.status(500).json({ success: false, message: err.message })
  }
}

const deleteProduct = async (req: Request, res: Response): Promise<any> => {
  const id = req.params.id
  try {
    const deletedProduct = await Product.findByIdAndDelete(id)
    if (!deletedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found"
      })
    }
    res.json({
      success: true,
      message: "Successfully deleted product",
      data: deletedProduct
    })
  } catch (error) {
    const err = error as Error
    res.status(500).json({ success: false, message: err.message })
  }
}

const updateProduct = async (req: Request, res: Response): Promise<any> => {
  try {
    const id = req.params.id
    const body = req.body

    const updatedProduct = await Product.findByIdAndUpdate(id, body, { new: true })

    if (!updateProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found"
      })
    }

    res.json({
      success: true,
      message: "Successfully updated product",
      data: updatedProduct
    })
  } catch (error) {
    const err = error as Error
    res.status(500).json({ success: false, message: err.message })
  }
}

export { getAllProducts, searchProducts, createProduct, deleteProduct, updateProduct }