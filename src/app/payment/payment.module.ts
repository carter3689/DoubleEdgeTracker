import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PaymentRoutingModule } from './payment-routing.module';
import { SubscriptionComponent } from './subscription/subscription.component';

const components = [SubscriptionComponent]

const modules = [
  SharedModule,
  CommonModule,
  PaymentRoutingModule
]


@NgModule({
  declarations: [...components],
  imports: [
    ...modules
  ]
})
export class PaymentModule { }
