import { Injectable } from '@angular/core';
import { IProductListing } from '../../models/iproduct-listing';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  public inventory: IProductListing[] = [
    {
      productId: 1,
      name: 'pão',
      quantity: 620,
      price: 9,
      creator: 'Gizelle',
    },
    {
      productId: 2,
      name: 'biscoito',
      quantity: 1020,
      price: 15,
      creator: 'Gizelle',
    },
    {
      productId: 3,
      name: 'pão de queijo',
      quantity: 452,
      price: 12,
      creator: 'GIzelle',
    },
    {
      productId: 3,
      name: 'queijo',
      quantity: 200,
      price: 50,
      creator: 'Gizelle',
    },
    {
      productId: 3,
      name: 'doce de leite',
      quantity: 102,
      price: 30,
      creator: 'Gizelle',
    }, {
      productId: 3,
      name: 'kit feijoada',
      quantity: 2,
      price: 19,
      creator: 'Gizelle',
    },
    {
      productId: 3,
      name: 'linguiça',
      quantity: 32,
      price: 45,
      creator: 'Gizelle',
    }, {
      productId: 3,
      name: 'torresmo',
      quantity: 12,
      price: 33,
      creator: 'GES',
    },
    {
      productId: 3,
      name: 'amendoim',
      quantity: 25,
      price: 10,
      creator: 'GES',
    },
    {
      productId: 3,
      name: 'cangica',
      quantity: 8,
      price: 8,
      creator: 'GES',
    },
    {
      productId: 3,
      name: 'macarrão',
      quantity: 5,
      price: 7,
      creator: 'GES',
    },
  ];

  public getProduct(productId: number): IProductListing | undefined {
    return this.inventory.find((product) => productId === product.productId);
  }

  public addProduct(product: IProductListing): void {
    this.inventory.push(product);
  }

  public get inventorySize(): number {
    return this.inventory.length;
  }
}
