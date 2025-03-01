import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EboutComponent } from './ebout/ebout.component';
import { ContactsComponent } from './contacts/contacts.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "ebout", component: EboutComponent},
    {path: "contacts", component: ContactsComponent }
];
