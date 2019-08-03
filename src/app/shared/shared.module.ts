import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    MaterialModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [HttpClient]
      }
    }),
  ], 
  exports: [ 
    MaterialModule,
    TranslateModule,
  ]
})
export class SharedModule {
  constructor(translate: TranslateService) {
    translate.setDefaultLang(environment.locale);
    translate.use(environment.locale);
  }
}
