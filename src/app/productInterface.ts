// import { TestBed } from '@angular/core/testing';

// import { UserserviceService } from './userservice.service';

// describe('UserserviceService', () => {
//   let service: UserserviceService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(UserserviceService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });
export interface Product {
  id: number;
  title: any;
  description: String;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: String;
  category: String;
  thumbnail: any;
  images: Array<String>;
}
