import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RoutingAppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { SearchModule } from './search/search.module';

@NgModule({
  declarations: [RoutingAppComponent],
  imports: [HomeModule, SearchModule, AppRoutingModule]
})
export class AppModule {}
