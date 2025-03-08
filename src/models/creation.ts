export interface Creation {
    id: number;
    name: string;
    category: number;
    description: string;
    categoryId: number;
  
  
    // URL de l'image principale
    pictureUrl: string;
    videoUrl:string;
  
    // Liste d'URLs des images supplémentaires
    pictureUrls: string[];
    videoUrls: string[];
  
    // Liste de PublicIds pour les images supplémentaires
    picturePublicIds?: string[];
    videoPublicIds?: string[];
  
    // Ces champs sont potentiellement utilisés pour la gestion des fichiers dans le formulaire
    Images?: File[] | null; 
    Videos?: File[] | null;
  
  }
  