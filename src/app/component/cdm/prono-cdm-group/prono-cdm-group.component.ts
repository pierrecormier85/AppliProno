import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Group } from '../../../models/group';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-prono-cdm-group',
  templateUrl: './prono-cdm-group.component.html',
  styleUrls: ['./prono-cdm-group.component.css']
})
export class PronoCdmGroupComponent implements OnInit {
  form: FormGroup;
  groups: Group[];
  ranks: number[];
  groupPb: String[];

  constructor(private http: HttpClient, private fb: FormBuilder, private router: Router) { 
    this.ranks = [1,2,3,4];
    this.groups = [];
    this.groups.push(new Group("a",  ["Russie","Arabie Saoudite","Egypte","Uruguay"]));
    this.groups.push(new Group("b",  ["Portugal","Espagne","Maroc","Iran"]));
    this.groups.push(new Group("c",  ["France","Australie","Pérou","Danemark"]));
    this.groups.push(new Group("d",  ["Argentine","Islande","Croatie","Nigeria"]));
    this.groups.push(new Group("e",  ["Brésil","Suisse","Costa Rica","Serbie"]));
    this.groups.push(new Group("f",  ["Allemagne","Mexique","Suède","Corée du Sud"]));
    this.groups.push(new Group("g",  ["Belgique","Panama","Tunisie","Angleterre"]));
    this.groups.push(new Group("h",  ["Pologne","Sénégal","Colombie","Japon"]));

    this.form = this.fb.group({
      a1: new FormControl('', Validators.required),
      a2: new FormControl('', Validators.required),
      a3: new FormControl('', Validators.required),
      a4: new FormControl('', Validators.required),
      b1: new FormControl('', Validators.required),
      b2: new FormControl('', Validators.required),
      b3: new FormControl('', Validators.required),
      b4: new FormControl('', Validators.required),
      c1: new FormControl('', Validators.required),
      c2: new FormControl('', Validators.required),
      c3: new FormControl('', Validators.required),
      c4: new FormControl('', Validators.required),
      d1: new FormControl('', Validators.required),
      d2: new FormControl('', Validators.required),
      d3: new FormControl('', Validators.required),
      d4: new FormControl('', Validators.required),
      e1: new FormControl('', Validators.required),
      e2: new FormControl('', Validators.required),
      e3: new FormControl('', Validators.required),
      e4: new FormControl('', Validators.required),
      f1: new FormControl('', Validators.required),
      f2: new FormControl('', Validators.required),
      f3: new FormControl('', Validators.required),
      f4: new FormControl('', Validators.required),
      g1: new FormControl('', Validators.required),
      g2: new FormControl('', Validators.required),
      g3: new FormControl('', Validators.required),
      g4: new FormControl('', Validators.required),
      h1: new FormControl('', Validators.required),
      h2: new FormControl('', Validators.required),
      h3: new FormControl('', Validators.required),
      h4: new FormControl('', Validators.required),
      pseudo: new FormControl('', Validators.required)
    });

    this.groupPb = [];
    this.groupPb.push('');
    this.groupPb.push('');
    this.groupPb.push('');
    this.groupPb.push('');
    this.groupPb.push('');
    this.groupPb.push('');
    this.groupPb.push('');
    this.groupPb.push('');
  }

  ngOnInit() {
  }

  submit() {
    if (this.form.valid) {
      this.form.setValue;
      this.http.post(environment.apiUrl.concat('prono/cdm/group'), this.form.value)
    .toPromise().then(
      d => {
        //TODO redirection mais d'abord liste des participations
        this.router.navigate(['/cdm/list']); 
      }
    );
    }
  }

  optionSelected(event){
    //console.log(event);
    let id = event.srcElement.id;
    let baseId = id.substring(0, id.length - 1);
    let value = event.srcElement.value;
    let valueTab = [];
    //console.log(baseId);
    for (let i = 1; i <= 4; i ++) {
        let composedId = baseId + i.toString();
        if(composedId != baseId){
          if(this.form.controls[composedId].value != ''){
            valueTab.push(this.form.controls[composedId].value);
          }
        }
    }

    let allDifferent = true;
    if(valueTab.length == 4){
      for (let i = 0; i < 4; i ++){
        for (let j = 0; j < 4; j ++){
          if(i != j){
            if(valueTab[i] == valueTab[j]){
              allDifferent = false;
              break;
            }
          }
        }
      }
    }

    if(allDifferent){
      this.groupPb[this.mapLetterNumber(baseId)] = '';
      this.form.controls[baseId.concat('1')].setErrors(null);
    } else {
      this.groupPb[this.mapLetterNumber(baseId)] = "Tous les équipes du groupe ne sont pas différentes !";
      this.form.controls[baseId.concat('1')].setErrors({'incorrect': true});
    }
  }

  public mapLetterNumber(letter: String){
    let number = 0;
    switch(letter){
      case "a" : number = 0; break;
      case "b" : number = 1; break;
      case "c" : number = 2; break;
      case "d" : number = 3; break;
      case "e" : number = 4; break;
      case "f" : number = 5; break;
      case "g" : number = 6; break;
      case "h" : number = 7; break;
    }

    return number;
  }

}
