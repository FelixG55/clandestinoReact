import { useEffect, useState } from "react";
import { getCategory } from "../services/categories";


export function useCategory() {
    
    const [categories, setCategories] = useState([])

    useEffect(()=>{getCategory().then(data => setCategories(data))},[])   
    return {categories}
}