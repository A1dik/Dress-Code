export interface Products {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: File;

}

export interface Categories {
  id: number;
  name : string;
  description: string;
}

export interface AuthToken{
  token: string
}

export interface Register{
  username: string,
  password: string,
  email: string,
  first_name: string,
  last_name: string
}

export interface Cart{
  id: number,
  product: number,
  user_name: string,
}
