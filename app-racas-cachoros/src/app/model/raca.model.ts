export interface Raca {
    id: number;
    nome: string;
    temperamento: string;
    imagem: ImagemRaca;
    peso: Medida;
    altura: Medida;
    expectativa_vida: string;
    criado_para?: string;
    grupo_raca?: string;
    origem?: string;
  }
  
  export interface ImagemRaca {
    id: string;
    url: string;
  }
  
  export interface Medida {
    imperial: string;
    metric: string;
  }
  