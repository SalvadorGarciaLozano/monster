import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, setDoc, doc, query, where } from "firebase/firestore";
import { useFirestore } from "reactfire";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import firebaseConfig from "./firebaseConfig";
import { ICategoria } from "../interfaces/ICategoria";
import { nanoid } from 'nanoid'
import datos from './datos/datos.json'

export const app = initializeApp(firebaseConfig)
export const db = getFirestore()
export const getCategorias = async ():Promise<ICategoria[]> => {
    let Categorias: ICategoria[] = []; //array inicializado al vacio
    const categoriasRef = collection(db, "datos"); //seleccionamos la coleccion categorias
    const CategoriasDocs = await getDocs(categoriasRef) //obtengo todos los datos, es como un select *
    CategoriasDocs.forEach(doc => {
        const categoria = { ...doc.data() }
        Categorias.push(categoria as ICategoria)
    });
    console.log(Categorias);
    return Categorias;
}

export const getmonstruosvoladores = async (): Promise<ICategoria[]> => {
    let categorias: ICategoria[] = []; // array inicializado al vacío
    const categoriasRef = collection(db, "datos"); // seleccionamos la colección "Dinos"
    const q = query(categoriasRef, where("especie", "==", "volador")); // definimos la consulta con la condición de categoría igual a "Terrestre"
    const CategoriasDocs = await getDocs(q); // obtenemos los documentos que cumplen con la consulta

    CategoriasDocs.forEach((doc) => {
        const categoria = doc.data() as ICategoria; // aseguramos el tipo de datos
        categorias.push(categoria as ICategoria);
    });

    console.log(categorias);
    return categorias;
};
export const getmonstruosacuaticos = async (): Promise<ICategoria[]> => {
    let categorias: ICategoria[] = []; // array inicializado al vacío
    const categoriasRef = collection(db, "datos"); // seleccionamos la colección "Dinos"
    const q = query(categoriasRef, where("especie", "==", "acuatico")); // definimos la consulta con la condición de categoría igual a "Terrestre"
    const CategoriasDocs = await getDocs(q); // obtenemos los documentos que cumplen con la consulta

    CategoriasDocs.forEach((doc) => {
        const categoria = doc.data() as ICategoria; // aseguramos el tipo de datos
        categorias.push(categoria as ICategoria);
    });

    console.log(categorias);
    return categorias;
};
export const getmonstruosancianos = async (): Promise<ICategoria[]> => {
    let categorias: ICategoria[] = []; // array inicializado al vacío
    const categoriasRef = collection(db, "datos"); // seleccionamos la colección "Dinos"
    const q = query(categoriasRef, where("especie", "==", "dragon anciano")); // definimos la consulta con la condición de categoría igual a "Terrestre"
    const CategoriasDocs = await getDocs(q); // obtenemos los documentos que cumplen con la consulta

    CategoriasDocs.forEach((doc) => {
        const categoria = doc.data() as ICategoria; // aseguramos el tipo de datos
        categorias.push(categoria as ICategoria);
    });

    console.log(categorias);
    return categorias;
};


export const newCategoria = async (data: ICategoria) => {
    try{
        console.log('Insertando en FB el objeto', data)
        const newData = {codigo: nanoid(20), ...data}
        const docRef = doc(db, "datos", newData.codigo);
        await setDoc(docRef, newData);
    }catch(error){
        console.log(error)
    }
}



// carga masiva
export const cargarprod = async () => {
    try {
        console.log('carga de datos...');
        datos.map(async (datos) => {
            const codigo = nanoid(20);
            const docRef = doc(db, "datos", codigo);
            await setDoc(docRef, { codigo: codigo, ...datos});
            window.location.reload();
        });
    } catch (error) {
        console.log(error);
    }
};