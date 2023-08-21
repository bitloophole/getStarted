import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [],
  imports: [CommonModule],
})

export class LocalizationModule {
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'se']);
    translate.setDefaultLang('en');
    //translate.use('se')  /** To see translation in swedish language */
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|se/) ? browserLang : 'en');
  }
}
