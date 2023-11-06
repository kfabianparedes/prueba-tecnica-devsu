import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductClientService } from './product-client.service';

const ENDPOINT = "https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products";

describe('Pruebas en ProductClientService: ', () => {
    let service: ProductClientService;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [ProductClientService],
        });
    });

    beforeEach(()=>{
        service = TestBed.inject(ProductClientService);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpTestingController.verify();
    });

    test('Debería crearse el servicio', () => {
        expect(service).toBeTruthy();
    });

    describe('1. Listar productos: ', () =>{
        test('Debería obtener los productos', () => {
            const dummyProducts = [
            {
                id: 'trj-crd-0',
                name: 'Tarjetas de Credito PARTE 0',
                description: 'Tarjeta de consumo bajo la modalidad de credito',
                logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
                date_release: '2023-03-11T00:00:00.000+00:00',
                date_revision: '2024-02-01T00:00:00.000+00:00',
            },
            {
                id: 'trj-crd-1',
                name: 'Tarjetas de Credito',
                description: 'Tarjeta de consumo bajo la modalidad de credito',
                logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
                date_release: '2023-03-11T00:00:00.000+00:00',
                date_revision: '2024-02-01T00:00:00.000+00:00',
            },
            {
                id: 'trj-crd-2',
                name: 'Card 2',
                description: 'Tarjeta de consumo bajo la modalidad de credito',
                logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
                date_release: '2023-03-11T00:00:00.000+00:00',
                date_revision: '2024-02-01T00:00:00.000+00:00',
            },
            {
                id: 'trj-crd-3',
                name: 'Tarjetas de Credito PARTE 0',
                description: 'Tarjeta de consumo bajo la modalidad de credito',
                logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
                date_release: '2023-03-11T00:00:00.000+00:00',
                date_revision: '2024-02-01T00:00:00.000+00:00',
            },
            {
                id: 'trj-crd-4',
                name: 'Tarjetas de Credito PARTE 0',
                description: 'Tarjeta de consumo bajo la modalidad de credito',
                logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
                date_release: '2023-03-11T00:00:00.000+00:00',
                date_revision: '2024-02-01T00:00:00.000+00:00',
            },
            {
                id: 'trj-crd-5',
                name: 'Tarjetas de Credito PARTE 0',
                description: 'Tarjeta de consumo bajo la modalidad de credito',
                logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
                date_release: '2023-03-11T00:00:00.000+00:00',
                date_revision: '2024-02-01T00:00:00.000+00:00',
            },
            {
                id: 'trj-crd-6',
                name: 'Tarjetas de Credito PARTE 0',
                description: 'Tarjeta de consumo bajo la modalidad de credito',
                logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
                date_release: '2023-03-11T00:00:00.000+00:00',
                date_revision: '2024-02-01T00:00:00.000+00:00',
            },
            {
                id: 'trj-crd-7',
                name: 'Tarjetas de Credito PARTE 0',
                description: 'Tarjeta de consumo bajo la modalidad de credito',
                logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
                date_release: '2023-03-11T00:00:00.000+00:00',
                date_revision: '2024-02-01T00:00:00.000+00:00',
            },
            {
                id: 'trj-crd-8',
                name: 'Tarjetas de Credito PARTE 0',
                description: 'Tarjeta de consumo bajo la modalidad de credito',
                logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
                date_release: '2023-03-11T00:00:00.000+00:00',
                date_revision: '2024-02-01T00:00:00.000+00:00',
            },
            {
                id: 'trj-crd-9',
                name: 'Tarjetas de Credito PARTE 0',
                description: 'Tarjeta de consumo bajo la modalidad de credito',
                logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
                date_release: '2023-03-11T00:00:00.000+00:00',
                date_revision: '2024-02-01T00:00:00.000+00:00',
            },
            {
                id: 'trj-crd-10',
                name: 'Tarjetas de Credito PARTE 0',
                description: 'Tarjeta de consumo bajo la modalidad de credito',
                logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
                date_release: '2023-03-11T00:00:00.000+00:00',
                date_revision: '2024-02-01T00:00:00.000+00:00',
            },
            {
                id: 'trj-crd-11',
                name: 'Tarjetas de Credito PARTE 0',
                description: 'Tarjeta de consumo bajo la modalidad de credito',
                logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
                date_release: '2023-03-11T00:00:00.000+00:00',
                date_revision: '2024-02-01T00:00:00.000+00:00',
            },
            {
                id: 'trj-crd-12',
                name: 'Tarjetas de Credito PARTE 0',
                description: 'Tarjeta de consumo bajo la modalidad de credito',
                logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
                date_release: '2023-03-11T00:00:00.000+00:00',
                date_revision: '2024-02-01T00:00:00.000+00:00',
            },
            {
                id: 'trj-crd-13',
                name: 'Tarjetas de Credito PARTE 0',
                description: 'Tarjeta de consumo bajo la modalidad de credito',
                logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
                date_release: '2023-03-11T00:00:00.000+00:00',
                date_revision: '2024-02-01T00:00:00.000+00:00',
            },
            {
                id: 'trj-crd-14',
                name: 'Tarjetas de Credito PARTE 0',
                description: 'Tarjeta de consumo bajo la modalidad de credito',
                logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
                date_release: '2023-03-11T00:00:00.000+00:00',
                date_revision: '2024-02-01T00:00:00.000+00:00',
            },
            {
                id: 'trj-crd-15',
                name: 'Tarjetas de Credito PARTE 0',
                description: 'Tarjeta de consumo bajo la modalidad de credito',
                logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
                date_release: '2023-03-11T00:00:00.000+00:00',
                date_revision: '2024-02-01T00:00:00.000+00:00',
            },
            {
                id: 'trj-crd-16',
                name: 'Tarjetas de Credito PARTE 0',
                description: 'Tarjeta de consumo bajo la modalidad de credito',
                logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
                date_release: '2023-03-11T00:00:00.000+00:00',
                date_revision: '2024-02-01T00:00:00.000+00:00',
            },
            {
                id: 'prudcto-01',
                name: 'Producto Nuevo',
                description: 'Descripción del producto',
                logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
                date_release: '2023-10-31T00:00:00.000+00:00',
                date_revision: '2023-11-11T00:00:00.000+00:00',
            },
            {
                id: 'trj-crd-17',
                name: 'Producto Nuevo',
                description: 'Descripción del producto',
                logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
                date_release: '2023-11-04T00:00:00.000+00:00',
                date_revision: '2024-11-05T00:00:00.000+00:00',
            },
            {
                id: 'prudcto-02',
                name: 'Prueba Producto',
                description: 'Descripción del producto',
                logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
                date_release: '2023-11-04T00:00:00.000+00:00',
                date_revision: '2024-11-04T00:00:00.000+00:00',
            },
            {
                id: 'prudcto-03',
                name: 'Producto Tercera Parte',
                description: 'Esto es una descripción producto 3ra parte',
                logo: 'prueba-img.jpg',
                date_release: '2023-11-05T00:00:00.000+00:00',
                date_revision: '2024-11-05T00:00:00.000+00:00',
            },
            ];
            service.getProducts$().subscribe((products) => {
            expect(products).toEqual(dummyProducts);
            });
    
            const req = httpTestingController.expectOne(ENDPOINT);
            expect(req.request.method).toBe('GET');
            req.flush(dummyProducts);
        });
    });

    describe('2. Registrar producto:',()=>{
        test('Debería crear un producto', () => {
            const product = {
                id: "prueba-producto",
                name: "Producto Jest",
                description: "Prueba del servicio con Jest",
                logo: "https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg",
                date_release: "2023-03-11",
                date_revision: "2024-02-01"
            };
            service.createProduct$(product).subscribe((createdProduct) => {
                expect(createdProduct).toBeDefined();
                expect(createdProduct.id).toEqual(product.id);
                expect(createdProduct.name).toEqual(product.name);
            });
        
            const request = httpTestingController.expectOne(ENDPOINT);
            expect(request.request.method).toBe('POST');
            request.flush(product);
        });
    
        test('No debería registrar producto por falta de campo: date_release', () => {
            const product = {
                id: "prueba-jest-01",
                name: "Producto Jest",
                description: "Prueba del servicio con Jest",
                logo: "https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg",
                date_release: "",
                date_revision: ""
            };
            service.createProduct$(product).subscribe(
                {
                    next: () => {
                        fail('La creación del producto debería ser rechazada con código 206.');
                    },
                    error: (err) => {
                        expect(err.status).toBe(206);
                        expect(err.error.date_release).toBe('must not be null');
                        expect(err.error.date_revision).toBe('must not be null');
                    }
                }
            );
            const request = httpTestingController.expectOne(ENDPOINT);
            expect(request.request.method).toBe('POST');
            request.flush({ date_release: 'must not be null', date_revision: 'must not be null' }, { status: 206, statusText: 'Partial Content' });
        });
    });
    
    describe('3. Validar ID del producto: ', ()=>{
        test('Debería validar que no exista el ID de un producto', () => {
            const productId = 'prudcto-03';
            service.validateProductID$(productId).subscribe((isValid) => {
                expect(isValid).toBe(true);
            });
            const request = httpTestingController.expectOne(`${ENDPOINT}/verification?id=${productId}`);
            expect(request.request.method).toBe('GET');
            request.flush(true);
        });
    })

});
