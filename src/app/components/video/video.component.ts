import { Component, OnInit } from '@angular/core';

// Modules
import {NgForm} from '@angular/forms';
import {DomSanitizer} from '@angular/platform-browser';

// Services
import {SearchService} from '../../services/search.service';

// Models
import {SearchVideo} from '../../models/search-video';
import {Video} from '../../models/video';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  video: SearchVideo;
  videos: Video[];

  constructor(private searchService: SearchService, private sanitizer: DomSanitizer) {
    this.video = new SearchVideo();
  }

  ngOnInit() {
  }

  searchVideo(form?: NgForm) {
    this.searchService.getVideo(form.value)
      .subscribe(res => {
        this.videos = res.data as Video[];
      });
    console.log(this.videos);
  }

  sanitizeExecUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  sanitizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}
