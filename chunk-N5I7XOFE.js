import{c as E,d as T}from"./chunk-WTUGVIOV.js";import"./chunk-YPCO5MT4.js";import{h as k,i as S,o as b}from"./chunk-RPMCEQCV.js";import{Ca as f,Ea as s,Na as a,Oa as c,Pa as g,Qa as h,Ra as v,V as l,cb as d,eb as C,jb as y,lb as F,na as p,ua as o,va as u}from"./chunk-AXPMFD2G.js";import"./chunk-5FZOKLP6.js";var x=i=>({disabled:i});function O(i,n){if(i&1&&(h(0),a(1,"a",4),g(2,"img",5),a(3,"div"),d(4),c()(),v()),i&2){let r=n.$implicit;o(),s("routerLink",r.path)("ngClass",F(6,x,r.redirect!=null)),o(),s("src",r.img,p)("alt",r.title)("border",0),o(2),C(" ",r.title," ")}}var w=(()=>{let n=class n{constructor(t){this.router=t,this.items=[]}ngOnInit(){this.autoCss()}autoCss(){this.router.config.filter(t=>t.children!=null).forEach(t=>{t.children?.forEach(e=>{this.items.push({title:e.title,img:e.data.img,path:["/",t.path,e.path],redirect:e.redirectTo})})})}track(t,e){return e}};n.\u0275fac=function(e){return new(e||n)(u(E))},n.\u0275cmp=l({type:n,selectors:[["app-home"]],standalone:!0,features:[y],decls:5,vars:2,consts:[[1,"d-grid","justify-content-center","align-items-center"],[1,"display-4"],[1,"btn-group-vertical"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"btn","btn-primary",3,"routerLink","ngClass"],["width","200px","height","auto",1,"rounded",3,"src","alt","border"]],template:function(e,m){e&1&&(a(0,"div",0)(1,"p",1),d(2,"Select Calculator"),c(),a(3,"div",2),f(4,O,5,8,"ng-container",3),c()()),e&2&&(o(4),s("ngForOf",m.items)("ngForTrackBy",m.track))},dependencies:[T,b,k,S]});let i=n;return i})();export{w as HomeComponent};
