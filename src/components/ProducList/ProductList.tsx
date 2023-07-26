import React, { useContext, useEffect, useState } from 'react'
import { Button } from '..'
import { instance } from '../../axios/config'
import { ProductContext } from '../../context/ProductContext'

const ProductList = () => {

    const { state, dispatch } = useContext(ProductContext)
    useEffect(() => {
        const Fetch_Product = async () => {
            try {
                const data = await instance.get(`/products`)
                dispatch({ type: "fetch_product", payload: data })
            } catch (error) {

            }
            finally { }
        }
        Fetch_Product()
    }, [])
    const Add_Product = async (product: any) => {
        try {
            const data = await instance.post(`/products`, product)
            dispatch({ type: "add_product", payload: data })
        } catch (error) {

        }
        finally { }
    }
    const delete_Product = async (product: any) => {
        try {
            await instance.delete(`/products/${product.id}`)
            dispatch({ type: "detele_product", payload: product.id })
        } catch (error) {

        }
        finally { }
    }
    const update_Product = async (product: any) => {
        try {
            const data = await instance.put(`/products/${product.id}`, product)
            dispatch({ type: "update_product", payload: data })
        } catch (error) {

        }
        finally { }
    }



    return (
        <div>
            {state?.products?.map((item: any) => {
                return <div key={item.id}>{item.name}</div>
            })}
            <Button type="primary" onClick={() => Add_Product({ name: "Product C" })}>
                Add Product
            </Button>
            <Button type="primary" onClick={() => update_Product({ name: "Product C update", id: 3 })}>
                update Product
            </Button>
            <Button type="primary" onClick={() => delete_Product({ id: 3 })}>
                delete Product
            </Button>
        </div >
    )
}

export default ProductList