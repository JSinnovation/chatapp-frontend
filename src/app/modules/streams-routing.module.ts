import { StreamsComponent } from './../components/streams/streams.component';
import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
  path: 'streams',
  component: StreamsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class StreamsRoutingModule { }
