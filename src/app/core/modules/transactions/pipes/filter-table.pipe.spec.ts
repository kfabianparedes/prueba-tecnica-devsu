import { Product } from '../models/product.model';
import { FilterTablePipe } from './filter-table.pipe';

describe('Pruebas en FilterTablePipe: ', () => {
  let pipe: FilterTablePipe;

  beforeEach(() => {
    pipe = new FilterTablePipe();
  });

  test('Debe generar el pipe: ', () => {
    expect(pipe).toBeTruthy();
  });

  test('Debe filtrar productos por nombre, sean mayúsculas o minúsculas ( texto de entrada: "CARD"): ', () => {
    const products: Product[] = [
      {
        id: "trj-crd-0",
        name: "Tarjetas de Credito",
        description: "Tarjeta de consumo bajo la modalidad de credito",
        logo: "https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg",
        date_release: "2023-03-11T00:00:00.000+00:00",
        date_revision: "2024-02-01T00:00:00.000+00:00"
      },
      {
        id: "trj-crd-2",
        name: "Card 2",
        description: "Tarjeta de consumo bajo la modalidad de credito",
        logo: "https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg",
        date_release: "2023-03-11T00:00:00.000+00:00",
        date_revision: "2024-02-01T00:00:00.000+00:00"
      },
      {
        id: "prueba-01",
        name: "Producto Nuevo",
        description: "Descripción del producto",
        logo: "https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg",
        date_release: "2023-11-05T00:00:00.000+00:00",
        date_revision: "2024-11-05T00:00:00.000+00:00"
      }
    ];
    const filterValue = {
      0: 'C',
      1: 'A',
      2: 'R',
      3: 'D',
    };
    const filteredProducts = pipe.transform(products, filterValue);
    expect(filteredProducts.length).toBe(1);
    expect(filteredProducts[0].name).toBe('Card 2');
  });

  test('Debería retornar un arreglo de productos con 0 elementos: ', () => {
    const filterValue = {
      '0': 'a',
      '1': 'b',
      '2': 'c',
    };
    let filteredProducts = pipe.transform([], filterValue);
    expect(filteredProducts.length).toBe(0);
  });

});
