import{M as o,R as s,pa as n}from"./chunk-AXPMFD2G.js";var m=(()=>{let e=class e{constructor(t){this.element=t,this.theme="light",this.themeStorage="theme"}ngOnInit(){this.loadTheme()}loadTheme(){let t=localStorage.getItem(this.themeStorage);t!=null&&(this.theme=t)}applyTheme(){let i=this.element.nativeElement.parentElement;i?.setAttribute("data-bs-theme",this.theme)}toggleTheme(){let t="";this.theme=="light"?t="dark":t="light",localStorage.setItem(this.themeStorage,t),this.theme=t,this.applyTheme()}};e.\u0275fac=function(i){return new(i||e)(s(n))},e.\u0275prov=o({token:e,factory:e.\u0275fac,providedIn:"root"});let h=e;return h})();export{m as a};
