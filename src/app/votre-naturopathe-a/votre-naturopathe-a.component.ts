import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Step} from "../shared/models/step";
import {Ville} from "../shared/models/ville";
import {BreakpointObserver} from "@angular/cdk/layout";
import {distinctUntilChanged, map, Subscription, tap} from "rxjs";

type Habitant = 'nantais' | 'blinois' | 'héricois' | 'rennais';

const villes: Record<Ville, Habitant> = {
  nantes: 'nantais',
  blain: 'blinois',
  héric: 'héricois',
  rennes: 'rennais',
}

@Component({
  selector: 'app-votre-naturopathe-a',
  templateUrl: './votre-naturopathe-a.component.html',
  styleUrls: ['./votre-naturopathe-a.component.scss']
})
export class VotreNaturopatheAComponent implements OnInit, OnDestroy {
  ville: Ville = 'blain';
  habitant: Habitant = 'blinois';
  steps: Step[] = [
    {
      number: 1,
      title: 'Il prend en compte la personne dans son ensemble',
      description: 'son corps physique, son mental et ses émotions.',
    },
    {
      number: 2,
      title: 'Il cherche toujours à identifier ce qui semble être la cause',
      description: 'de la problématique amenée par la personne en a-propos. Il ne se contente pas de soulager le(s) symptôme(s).',
    },
    {
      number: 3,
      title: 'Il utilise des outils naturels, qu’il adapte à chaque situation',
      description: '<strong>individuelle</strong> : alimentation, phytothérapie, aromathérapie, nutrithérapie, réflexologie, …',
    },
  ];

  subscriptions$$: Subscription[] = []

  readonly breakpoint$ = this.breakpointObserver
    .observe(['(max-width: 768px)'])
    .pipe(
      distinctUntilChanged(),
      map(({matches}) => matches),
      tap(match => console.log(match))
    );
  buttonText = "Prendre rendez-vous"

  constructor(private router: ActivatedRoute, private breakpointObserver: BreakpointObserver) {
  }

  ngOnInit() {
    this.subscriptions$$.push(this.router.params.subscribe(params => {
        this.ville = params['ville'] as Ville || "blain";
        this.habitant = villes[this.ville]
      }),
      this.breakpoint$.subscribe((matches) => this.buttonText = matches ? 'Prendre rendez-vous' : `Prenez rendez-vous avec votre naturopathe à ${this.ville}`))
  }

  ngOnDestroy() {
    this.subscriptions$$.forEach(subscription$$ => subscription$$.unsubscribe())
  }

}
