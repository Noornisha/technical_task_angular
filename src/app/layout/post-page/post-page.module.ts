import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostPageRoutingModule } from './post-page-routing.module';
import { PostPageComponent } from './post-page-component/post-page.component';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'ngx-bootstrap/rating';

@NgModule({
  declarations: [
    PostPageComponent
  ],
  imports: [
    CommonModule,
    PostPageRoutingModule,
    FormsModule,
    RatingModule.forRoot()
  ]
})
export class PostPageModule { }
