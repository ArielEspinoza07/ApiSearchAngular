import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SongComponent} from './components/song/song.component';
import {VideoComponent} from './components/video/video.component';

const routes: Routes = [
  {
    path: '',
    component: SongComponent
  },
  {
    path: 'video',
    component: VideoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
