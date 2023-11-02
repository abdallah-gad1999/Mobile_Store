import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { ApoutUsComponent } from './apout-us/apout-us.component';

import { FormsModule } from '@angular/forms';
const routes:Routes=[

{path:"userLogin",component:ApoutUsComponent,title:"AboutUs"}
]

@NgModule({
  declarations: [
    ApoutUsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
     FormsModule
  ]
})
export class ModProdectModule { }
