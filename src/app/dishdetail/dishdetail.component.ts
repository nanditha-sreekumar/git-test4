import { Component, OnInit, ViewChild} from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router'; 
import { Location } from '@angular/common';               
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service'; 
import { switchMap } from 'rxjs/operators';      
import { FormBuilder, FormGroup, Validators } from '@angular/forms';  //typein
import { Comment } from '../shared/comment';                          //typein

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  dish: Dish;  
  dishIds: string[];       
  prev: string;            
  next: string;
  
  //typein..

  commentForm: FormGroup;
  	comment: Comment;

	@ViewChild('fform') commentFormDirective;

  //typein..
	formErrors = {
	  'author': '',
	  'comment' : ''
  };

  //typein..
  validationMessages = {
	  'author': {
		  'required':'Author Name is required.',
		  'minlength': 'Author Name must be at least 2 characters long.',
		  'maxlength':'Author Name cannot be more than 25 characters long.'
	  },

	  'comment': {
		  'required':'Comment is required.'
	  }
  };

  constructor(private dishservice: DishService,          
    private route: ActivatedRoute,
    private location: Location,
    //typein..
    private fb: FormBuilder) { 
      this.createForm();
    }

  ngOnInit() { 
    this.dishservice.getDishIds()
    .subscribe(dishIds => this.dishIds = dishIds);                                          
    this.route.params.pipe(switchMap((params: Params) => this.dishservice.getDish(params['id']))) 
    .subscribe(dish => { this.dish = dish; this.setPrevNext(dish.id); }); 
  }

  //typein..
  createForm() {
    this.commentForm = this.fb.group({
      author: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      rating: 5,
      comment: ['', Validators.required],
    });
	  this.commentForm.valueChanges
	  	.subscribe(data => this.onValueChanged(data));


	  this.onValueChanged();  //reset form validation messages
  }

  setPrevNext(dishId: string) {
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }

  goBack(): void {                                       
    this.location.back();
  }

  //typein..
  onValueChanged(data?: any){
	  if (!this.commentForm){
		  return;
	  }
	  const form = this.commentForm;

	  for(const field in this.formErrors){
		  if(this.formErrors.hasOwnProperty(field)) {
			  //clear previous error message
			  this.formErrors[field]= '';
			  const control = form.get(field);

			  if(control && control.dirty && !control.valid) {
				  const messages = this.validationMessages[field];
				  for(const key in control.errors) {
					  if (control.errors.hasOwnProperty(key)) {
						this.formErrors[field] += messages[key]  + ' '; 
					  }
				  }
			  }
		  }
	  }

  }

  //typein..
  onSubmit() {
    this.comment = this.commentForm.value;
    this.comment.date = new Date().toISOString();
	this.dish.comments.push(this.comment);
	this.comment = null;
    this.commentForm.reset({
		author: '',
		rating: 5,
		comment: ''
	});
	//this.commentFormDirective.resetForm();
  }

}