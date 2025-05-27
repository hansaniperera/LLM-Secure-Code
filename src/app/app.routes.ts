import { RouterModule, Routes } from '@angular/router';
import { QueryReaderComponent } from './query-reader/query-reader.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'read-query', component: QueryReaderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

