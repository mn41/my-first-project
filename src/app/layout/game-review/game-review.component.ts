import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GameReviewService } from '../../game-review.service';
import { GameInfo } from 'src/app/game-info';
import { Review } from 'src/app/review';
import { Recommendation } from 'src/app/recommendation';
import { SUPPORTED_GAME_INFOS} from 'src/app/supported-game-infos';

@Component({
  selector: 'app-game-review',
  templateUrl: './game-review.component.html',
  styleUrls: ['./game-review.component.scss']
})
export class GameReviewComponent implements OnInit {

  gameInfo: GameInfo;
  isLoading: boolean;
  reviewText: string;
  recommendation: Recommendation;

  constructor( private route: ActivatedRoute, private gameReviewService: GameReviewService) {
    route.params.subscribe(params => {
      this.isLoading = false;
      this.recommendation = undefined;
      this.reviewText = '';
      this.gameInfo = SUPPORTED_GAME_INFOS.find(gameInfo => gameInfo.steamID === +params.steamID);
    });
   }

  evaluateReview(): void {
    this.recommendation = undefined;
    this.isLoading = true;
    const review = ({game: this.gameInfo.model, review: this.reviewText, score: 1}) as Review;
    this.gameReviewService.evaluateReview(review)
      .subscribe(recommendation => {
        this.isLoading = false;
        this.recommendation = recommendation;
      });
  }

  ngOnInit() {
  }

}
