import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactsComponent } from '../contacts/contacts.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, ContactsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  searchText: string = '';

  public products: any[] = [
    { id: 1,
      brand: "Google",
      model: "Pixel 9 Pro",
      price: 1499,
      Images: "https://superi.ge/images/detailed/25/71uAesjXh5L._AC_SL1500_.jpg" 
    },

    { id: 2,
      brand: "iPhone",
      model: "16 Pro",
      price: 1800,
      Images: "https://dakauf.eu/wp-content/uploads/2024/09/Apple-iPhone-16-Pro-256GB-Black-Titanium.png" 
    },

    { id: 3,
      brand: "Samsung",
      model: "S24",
      price: 900,
      Images: "https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2Fd8362f08-629b-4a7a-ac46-326fee67f009_Thumb.jpeg&w=640&q=100"
     },

    { id: 4,
      brand: "Xiaomi",
      model: "14 Ultra",
      price: 1300,
      Images: "https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2Ffb67432e-9cb1-4caa-8608-aa2b65f6f650_Thumb.jpeg&w=640&q=100"
    },

    { id: 5,
      brand: "Nokia",
      model: "3310i",
      price: 9999,
      Images: "https://assets.newatlas.com/dims4/default/b3209df/2147483647/strip/true/crop/1520x1013+140+0/resize/1200x800!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Fnokia-3310-inspired-smartphone-6.jpg"
    },

    { id: 6,
      brand: "Sony",
      model: "Xperia 1V",
      price: 2100,
      Images: "https://bestmobilephone.com.au/wp-content/uploads/2024/05/Sony-1vi-khakhi.jpg"
    }
  ];

  filteredProducts: any[] = [...this.products];

  filterProducts(searchText: string) {
    this.filteredProducts = this.products.filter(item =>
      item.brand.toLowerCase().includes(searchText.toLowerCase()) ||
      item.model.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  goToDetails(item: any) {
    console.log("Going to details of:", item);
  }
}
