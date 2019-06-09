import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { MedalSummary } from './models/medal-summary';
import { MedalsBySportsType } from './models/medals-by-sports-type';

@Injectable({
  providedIn: 'root'
})
export class MedalService {

  medalData: Observable<any>;

  constructor(private http: HttpClient) {
    this.medalData = this.http.get("./assets/medal-data.json");
  }

  public getSummaryByCountry(): Observable<MedalSummary[]> {
    return this.medalData.pipe(
      map((res: any) => {
        return  [{ 
          id:res.NOCMedals.NOC.n_ID,
          name: res.NOCMedals.NOC.c_Name,
          total: res.NOCMedals.Medals.n_Total,
          gold: res.NOCMedals.Medals.n_Gold,
          silver: res.NOCMedals.Medals.n_Silver,
          bronze: res.NOCMedals.Medals.n_Bronze,
        } as MedalSummary];
      })
    );
  }

  public getSportsList(): Observable<MedalsBySportsType[]> {
    return this.medalData.pipe(
      map((res: any) => {
        let sports = [];
        res.SportList.forEach((element: any) => {
          sports.push(
            {
              id: element.Sport.n_ID,
              name: element.Sport.c_Name,
              total: element.Medals.n_Total,
              gold: element.Medals.n_Gold,
              silver: element.Medals.n_Silver,
              bronze: element.Medals.n_Bronze,
            } as MedalsBySportsType);
        });
        return sports;
      })
    );
  }

  public getMedalsByParticipants(): Observable<any> {
    return this.medalData.pipe(
      map((res: any) => {
        return res.SportList;
      }),
    );
  }
}
