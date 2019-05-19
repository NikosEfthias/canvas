"use strict";
class canvas {
	constructor(canvasId) {
		this.id = canvasId || "canvas";
		this.ctx = document.querySelector(this.id).getContext("2d");
		this.element=document.querySelector(this.id);
		this.width=this.element.width;
		this.height=this.element.height;
	};
	unique() {
		this.ctx.beginPath();
		return this;
	};
	close() {
		this.ctx.closePath();
		return this;
	};
	set(str,val){
		let ptr=str.toLowerCase();
		switch(ptr){
			case "width":
				this.element.setAttribute("width",val);
				this.width=val;
				break;
			case "height":
				this.element.setAttribute("height",val);
				this.height=val;
				break;
			default:
				throw new TypeError(`${str} is not a valid value to set`);
				break;
		};
		return this;
	};
	stroke(c,w) {
		let color=c||"black",lineWidth=w||1;
		this.ctx.strokeStyle=color;
		this.ctx.lineWidth=lineWidth;
		this.ctx.stroke();
		return this;
	};
	penTo(x,y){
		this.ctx.beginPath();
		this.ctx.moveTo(x,y);
		return this;
	}
	line(x, y) {
		this.ctx.lineTo(x,y);
		return this;
	};
	rect(x,y,w,h){
		this
			.penTo(x,y)
			.line(x,y+h)
			.line(x+w,y+h)
			.line(x+w,y)
			.close();
		return this;
	};
	fill(c){
		let color=c||"black";
		this.ctx.fillStyle=color;
		this.ctx.fill();
		return this;
	}
	squared(sw,sh,c){
		let color=c||"rgba(93, 89, 92,.5)",
			w=this.width,
			h=this.height,
			sqw=sw||10,
			sqh=sh||10,
			d=this;
		for(let i=0;i<=w;i+=sqw){
			d.unique()
				.penTo(i,0)
				.line(i,h)
				.stroke(color);
		}
		for(let i=0;i<=h;i+=sqh){
			d.unique()
				.penTo(0,i)
				.line(w,i)
				.stroke(color);
		}
	}
};
