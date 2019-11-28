import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddProductComponent } from 'app/dialogs/add-product/add-product.component';
import { Product } from 'app/product';
import { ProductService } from 'app/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  constructor(public dialog: MatDialog, private service: ProductService) { 
  }

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.service.findAll().subscribe(data => {
      this.products = data;
    });
  }

  dialogAddProduct(): void {
    const dialogRef = this.dialog.open(AddProductComponent,  {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => { if(result) { this.getData() } });
  }

  
}


