export interface Raca {
    id: number;
    name: string;
    temperament: string;
    weight: Medida;
    height: Medida;
    life_span: string;
    bred_for?: string;
    breed_group?: string;
    origin?: string;
    reference_image_id?: string;
  }
  
  export interface Medida {
    imperial: string;
    metric: string;
  }
  