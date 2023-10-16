import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./routing/app-routing.module";
import { GlobalHeaderComponentModule } from "@testgen-eight/common/ui";
import { GlobalFooterModule } from "@testgen-eight/common/ui";
import { GlobalSidenavModule } from "@testgen-eight/common/ui";
import { MatListModule } from "@angular/material/list";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./routing/app-routing.module";
import { GlobalHeaderComponentModule } from "@testgen-eight/common/ui";
import { GlobalFooterModule } from "@testgen-eight/common/ui";
import { GlobalSidenavModule } from "@testgen-eight/common/ui";
import { MatListModule } from "@angular/material/list";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, GlobalHeaderComponentModule, GlobalFooterModule, GlobalSidenavModule, MatListModule, BrowserAnimationsModule, AppRoutingModule, GlobalHeaderComponentModule, GlobalFooterModule, GlobalSidenavModule, MatListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
