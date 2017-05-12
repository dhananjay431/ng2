


import { Component } from '@angular/core';
import { PostsService } from './posts.services';
 import { AppShow } from './app.show';
@Component({
  selector: 'my-main',
  template: `<p>{{name}}</p>
  	<div *ngIf="flag">
	  	<ul>
	  		<li *ngFor="let data of address">{{data.adr1}} / {{data.stret}}</li>
	  	</ul>
  	</div>
	<div>
	 <label>name: </label>
	<input [(ngModel)]="tempAddress.adr1" placeholder="address"/>
	<input [(ngModel)]="tempAddress.stret" placeholder="state"/>
	</div>
	<button (click)="show(tempAddress)">show</button>
	
	<table>
		<tr *ngFor="let data of postData">
			<td>{{data.id}}</td>
			<td>{{data.body}}</td>
			<td>{{data.userId}}</td>
			<td>{{data.title}}</td>
		</tr>
	</table>
	`,
	providers: [ PostsService ]
})
export class MainComponent  { 
	name:string;
	address:Address[];
	tempAddress:Address;
	flag:boolean;
	favoriteHero:string;
	postData:PostData[];
	constructor(private postsService: PostsService){
	this.name = 'Angular'; 	
	this.address=[{adr1:"jantanagar",stret:7304262373},{adr1:"jantanagar",stret:7304262373},{adr1:"jantanagar",stret:7304262373}];
	this.flag=true;
	this.favoriteHero="ng2";
	this.tempAddress={adr1:"",stret:0};
	this.postsService.getPost().subscribe(posts => { 
			console.log(posts);	
			this.postData=posts;
		});
	}

	show(tempAddress:Address){
		console.log("show");
		this.address.push(tempAddress);
		this.tempAddress={adr1:"",stret:0};
	}
}

interface Address{
	adr1:string,
	stret:number
}
interface PostData{
	
	body:string,
	id:number,
	title:string,
	userId:number
}

