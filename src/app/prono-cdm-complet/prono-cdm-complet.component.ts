import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Group } from '../models/group';

@Component({
  selector: 'app-prono-cdm-complet',
  templateUrl: './prono-cdm-complet.component.html',
  styleUrls: ['./prono-cdm-complet.component.css']
})
export class PronoCdmCompletComponent implements OnInit {

  constructor(private fb: FormBuilder) { 
    
  }

  ngOnInit() {
  }

  submit() {
  }

}
