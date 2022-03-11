export class ProductDto {
  price: number;
  description: string;
  city: string;
  image: string;
  shipping: boolean;

  constructor(
    price?: number,
    description?: string,
    city?: string,
    image?: string,
    shipping?: boolean
    ) {
    this.price = (price) ? price : 0;
    this.description = (description) ? description : '';
    this.city = (city) ? city : '';
    this.image = (image) ? image : '';
    this.shipping = (shipping) ? shipping : false;
  }
}
  