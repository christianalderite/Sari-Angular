import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Product } from 'app/product';
import { ProductService } from 'app/product.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  product: Product;
  form: FormGroup;
  processing: boolean;
  httpStatus: boolean;

  constructor(
    private service: ProductService,
    public dialogRef: MatDialogRef<AddProductComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.product = new Product();
      this.product.detailsUserId = 11540761;
      this.form = new FormGroup({
        name: new FormControl('',[Validators.required, Validators.maxLength(255)]),
        barcode: new FormControl('',[Validators.maxLength(255)]),
        price: new FormControl(1.00,[Validators.required, Validators.max(999999.99), Validators.min(0.01)]),
        quantity: new FormControl(1,[Validators.required, Validators.max(999999), Validators.min(0)]),
      });
      this.processing = false;
      this.httpStatus = true;
    }

  ngOnInit() {
    
  }

  close(): void {
    this.dialogRef.close();
  }

  check(controlName: string, errorName: string): boolean {
    return this.form.controls[controlName].hasError(errorName);
  }

  save(): void {
    if(this.form.valid){
      this.httpStatus = true;
      this.processing = true;
      let formVal = this.form.value;
      this.product.name = formVal.name;
      this.product.barcode = formVal.barcode;
      this.product.price = formVal.price;
      this.product.quantity = formVal.quantity;
      console.log(this.product);
      this.service.save(this.product).subscribe(
        result => { 
          this.dialogRef.close(true)
        }, error=> { 
          this.processing = false, 
          this.httpStatus = false
        } 
      );
    }
  }

}
