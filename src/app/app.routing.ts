import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { TransactionsComponent } from 'app/transactions/transactions.component';
import { NewTransactionComponent } from 'app/new-transaction/new-transaction.component';
import { TransactionPageComponent } from 'app/transaction-page/transaction-page.component';
import { ProductsComponent } from 'app/products/products.component';
import { ProductPageComponent } from 'app/product-page/product-page.component';
import { UsersComponent } from 'app/users/users.component';
import { UserPageComponent } from 'app/user-page/user-page.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'dashboard',      component: DashboardComponent },
  { path: 'new-transaction',   component: NewTransactionComponent },
  { path: 'transactions',     component: TransactionsComponent },
  { path: 'transaction-page',     component: TransactionPageComponent },
  { path: 'products',     component: ProductsComponent },
  { path: 'product-page',     component: ProductPageComponent },
  { path: 'users',     component: UsersComponent },
  { path: 'user-page',     component: UserPageComponent },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes,{ useHash: true})
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
