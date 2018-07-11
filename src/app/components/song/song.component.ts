import { Component, OnInit } from '@angular/core';

// Modules
import {NgForm} from '@angular/forms';

// Services
import {SearchService} from '../../services/search.service';

// Models
import {SearchSong} from '../../models/search-song';
import {Song} from '../../models/song';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss'],
})
export class SongComponent implements OnInit {

  song: SearchSong;
  songs: Song[];

  constructor(private searchService: SearchService) {
    this.song = new SearchSong();
  }

  ngOnInit() {
  }

  searchSong(form?: NgForm) {
    this.searchService.getSong(form.value)
      .subscribe(res => {
        this.songs = res.data as Song[];
      });
  }

}
