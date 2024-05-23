import { EsperoDB } from "esperodb";

export const slugyfy  = (name: string): string =>{
    // const randomNumber = Math.floor(Math.random() * 1000); // Générer un nombre aléatoire entre 0 et 999
    let baseSlug =  name
    .toLowerCase() // Convertir le texte en minuscules
    .replace(/\s+/g, '-') // Remplacer les espaces par des tirets
    .replace(/[^\w-]+/g, '') // Supprimer les caractères non alphanumériques et non tirets
    .replace(/--+/g, '-') // Remplacer les doubles tirets par un seul tiret
    .trim(); // Supprimer les espaces au début et à la fin

    return `${baseSlug}-895624585`;
}

// return `${baseSlug}-${randomNumber}`;


export function truncateText(text: string, maxLength: number) {
    if (text.length <= maxLength) {
        return text;
    }
    return text.substring(0, maxLength) + '...';
}

export function indexDB() {
    // Définition de la structure des données
    const dataStructure: any = [
        {
          'product': [
            { indexes: [{ 'index1': { unique: true } }], primaryKey: '_id' },
          ],
        },
        {
          'service': [
            { indexes: [{ 'index1': { unique: true } }], primaryKey: '_id' },
          ],
        },
        {
          'slider': [
            { indexes: [{ 'index1': { unique: true } }], primaryKey: '_id' },
          ],
        },
      ];
  
    // Définition de la version de la base de données
    const dbVersion = 1;
  
    // Création d'une instance de la base de données locale
    const db = new EsperoDB('afrisilo', dataStructure, dbVersion);
  
    return db;
  }
  export function addSpacesToPascalCase(str: string): string {
    if (typeof str !== 'string' || str.length === 0) {
      return str
    }
  
    const result = str.replace(/([a-z])([A-Z])/g, '$1 $2')
    return result.charAt(0).toUpperCase() + result.slice(1)
  }
  export function ucfirst(str: string): string {
    str = str.toLowerCase()
    if (typeof str !== 'string' || str.length === 0) {
      return str
    }
  
    if (str.toLowerCase().endsWith('name')) {
      return str
        .split('name')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' Name')
    }
    if (str.toLowerCase().includes('_')) {
      return str
        .split('_')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    }
  
    return addSpacesToPascalCase(str)
  }
  
 export const getHTMLContent = (data: any, name: string) => {
    if (typeof data[name] === 'string' && data[name].match(/\.(jpeg|jpg|gif|png|webp)$/) != null) {
      // Si data[name] est une URL d'image, retourne l'élément React <img>.
      return <img className="border" width="100" src={data[name]} alt="Image" />;
      // return <ImagePreview width="100" imageUrl={data[name]} altText="Image" />
    }
    if (typeof data[name] === 'string' && name === 'description') {
      
        return truncateText(data[name], 60);
         
      }
    // Si ce n'est pas une URL d'image ou un nom qui commence par 'is', retourne les données telles quelles.
    
    return  data[name];
  };
  export const validateFormModal = (values: any, columns: any[]) => {
    let errors: any = {};
    let excludeInput = ['created_at', 'updated_at','files', 'options', 'roles', 'imageurl', '__v', 'id', 'slug','icon','link']

    columns.forEach(column => {

        if (excludeInput.includes(column.name.toLowerCase()) || column.name.toLowerCase().startsWith('created')) {
            // Omitir la iteración si se cumple alguna de las condiciones
            return;
        }
        if (!values[column.name]) {
            errors = { ...errors, [column.name]: 'Required' };
        }

    });

    console.log({ errors });

    return errors;
}

export function fileToUrl(file: any) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      resolve(reader.result);
    };

    reader.onerror = () => {
      reject(reader.error);
    };

    reader.readAsDataURL(file);
  });
}











