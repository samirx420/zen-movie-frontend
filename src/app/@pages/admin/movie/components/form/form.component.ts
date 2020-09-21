import { Component, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { Movie } from 'src/app/@core/models/movie.model';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'movie-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnChanges {

 
  exists = false;

  @Input() movie: Movie;
  @Input() isEdit: boolean;

  @Output() create = new EventEmitter<{movie: Movie, buffer: File}>();
  @Output() update = new EventEmitter<Movie>();
  @Output() remove = new EventEmitter<Movie>();

  form = this.fb.group({
    title       : ['', Validators.required],
    description : ['', Validators.required],
    release_date: ['', Validators.required],
    duration    : ['', Validators.required],
    budget      : ['', Validators.required],
  });

  constructor(private fb: FormBuilder) { }
  
  get f() { return this.form.controls; }

  ngOnChanges(changes: SimpleChanges) {
    if (this.movie && this.movie.id) {
      this.exists = true;
      this.form.patchValue(this.movie);
    }
    if (!this.isEdit) {
      this.form.reset();
    }
  }

  _create(form: FormGroup) {
    console.log('sdf')
    const { value, valid } = form;
    if (valid) {
      this.create.emit({movie: value, buffer: this.fileToUpload});
      this.form.reset();
    }
  }

  _update(form: FormGroup) {
    const { value, valid, touched } = form;
    if (touched && valid) {
      this.update.emit({ ...this.movie, ...value });
    }
  }

  _remove(form: FormGroup) {
    const { value } = form;
    this.remove.emit({ ...this.movie, ...value });
  }

  fileToUpload: File = null;
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

}
