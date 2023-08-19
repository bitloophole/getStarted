import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { SquarePipe } from './shared/pipes/square.pipe';
import { PowerPipe } from './shared/pipes/power.pipe';
import { TranslateLoader, TranslateModule, TranslateStore } from '@ngx-translate/core';
import { LocalizationModule } from './shared/Modules/localization/localization.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MaterialModule } from './shared/Modules/material/material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SquarePipe,
    PowerPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LocalizationModule,
    MaterialModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: false
    }),
    NoopAnimationsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }, TranslateStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
