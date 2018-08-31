import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ArticleService } from '../article.service';
import { Article } from './article';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 allArticles: Article[];
   statusCode: number;
   requestProcessing = false;
   articleIdToUpdate = null;
   processValidation = false;
  
   articleForm = new FormGroup({
       title: new FormControl('', Validators.required),
       category: new FormControl('', Validators.required),
       password: new FormControl('', Validators.required),
       address: new FormControl('', Validators.required)	   
   });
   
   constructor(private articleService: ArticleService) {
   }
   
   ngOnInit(): void {
	  // this.getAllArticles();
   }   
   
 
   
   onArticleFormSubmit() {
	  this.processValidation = true;   
	  if (this.articleForm.invalid) {
	       return;
	  }   
	  
      this.preProcessConfigurations();
	  let article = this.articleForm.value;
	  if (this.articleIdToUpdate === null) {  
	   
        this.articleService.getAllArticles()
	     .subscribe(articles => {
			 
		 	 
		   let maxIndex = articles.length - 1;
		   let articleWithMaxIndex = articles[maxIndex];
		   let articleId = articleWithMaxIndex.id + 1;
		   article.id = articleId;
		   
		   
     	   this.articleService.createArticle(article)
			  .subscribe(successCode => {
					this.statusCode = successCode;
					//this.getAllArticles();	
					this.backToCreateArticle();
				 },
				 errorCode => this.statusCode = errorCode
			   );
		 });		
	  } else {  
   	  
        article.id = this.articleIdToUpdate; 		
	    this.articleService.updateArticle(article)
	      .subscribe(successCode => {
		            this.statusCode = successCode;
				    //this.getAllArticles();	
					this.backToCreateArticle();
			    },
		        errorCode => this.statusCode = errorCode);	  
	  }
   }
   
   
 
   
   preProcessConfigurations() {
      this.statusCode = null;
	  this.requestProcessing = true;   
   }
  
   backToCreateArticle() {
      this.articleIdToUpdate = null;
      this.articleForm.reset();	  
	  this.processValidation = false;
   }
}
    