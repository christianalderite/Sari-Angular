import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import {
  AgmCoreModule
} from '@agm/core';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { TransactionsComponent } from 'app/transactions/transactions.component';
import { NewTransactionComponent } from 'app/new-transaction/new-transaction.component';
import { ProductsComponent } from 'app/products/products.component';
import { UsersComponent } from 'app/users/users.component';
import { UserPageComponent } from 'app/user-page/user-page.component';
import { ProductPageComponent } from 'app/product-page/product-page.component';
import { TransactionPageComponent } from 'app/transaction-page/transaction-page.component';
import { AddProductComponent } from './dialogs/add-product/add-product.component';
import { HttpClientModule } from '@angular/common/http';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
  MatDialogModule,
  MatProgressBarModule
} from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    ComponentsModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatDialogModule,
    MatProgressBarModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AddProductComponent,
    DashboardComponent,
    TransactionsComponent,
    TransactionPageComponent,
    NewTransactionComponent,
    ProductsComponent,
    ProductPageComponent,
    UsersComponent,
    UserPageComponent
  ],
  entryComponents: [
    AddProductComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
