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
            { indexes: [{ 'index1': { unique: true } }], primaryKey: 'id' },
          ],
        },
        {
          'service': [
            { indexes: [{ 'index1': { unique: true } }], primaryKey: 'id' },
          ],
        },
        {
          'slider': [
            { indexes: [{ 'index1': { unique: true } }], primaryKey: 'id' },
          ],
        },
      ];
  
    // Définition de la version de la base de données
    const dbVersion = 1;
  
    // Création d'une instance de la base de données locale
    const db = new EsperoDB('afrisilo', dataStructure, dbVersion);
  
    return db;
  }
  
