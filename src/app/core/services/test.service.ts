import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  constructor(private http: HttpClient) {}

  fruit: any[] = [
    { name: 'Apple', price: 100 },
    { name: 'Orange', price: 120 },
    { name: 'Banana', price: 150 }
  ];

  vegetable: any[] = [
    { name: 'Tomato', price: 100 },
    { name: 'Potato', price: 120 },
    { name: 'Carrot', price: 150 }
  ];

  getAllFruit(): Observable<any[]>  {
    return of(this.fruit).pipe(delay(3000)); // Simulate delay
  }

  getAllVegetable(): Observable<any[]> {
    return of(this.vegetable).pipe(delay(1000)); // Simulate delay
  }
}
