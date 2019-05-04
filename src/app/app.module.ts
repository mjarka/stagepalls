import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModules } from './material-module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { PanelComponent } from './panel/panel.component';
import { TopbarComponent } from './topbar/topbar.component';
import { LogopanelComponent } from './logopanel/logopanel.component';
@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    PanelComponent,
    TopbarComponent,
    LogopanelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModules,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
