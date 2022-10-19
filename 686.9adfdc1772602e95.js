"use strict";(self.webpackChunkrs_school=self.webpackChunkrs_school||[]).push([[686],{1686:(Y,m,s)=>{s.r(m),s.d(m,{LoginModule:()=>O});var d=s(6895),g=s(8869),i=s(4006),w=s(7579),b=s(2722),a=s(4854),n=s(4650),L=s(3788),c=s(1135),f=s(3900),u=s(9646),h=s(1005),S=s(4004);let C=(()=>{class t{constructor(){this.isLoading$=new c.X({[a.be.login]:!1}),this.state$=new c.X(!1),this.loadingStatus=this.state$.pipe((0,f.w)(e=>e?(0,u.of)(!0).pipe((0,h.g)(500)):(0,u.of)(!0)))}requestStarted(e){this.isLoading$.next({...this.isLoading$.value,[e]:!0})}requestEnded(e){this.isLoading$.next({...this.isLoading$.value,[e]:!1})}getLoading(e){return this.isLoading$.asObservable().pipe((0,S.U)(o=>o[e]),(0,f.w)(o=>o?(0,u.of)(!0).pipe((0,h.g)(500)):(0,u.of)(!1)))}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var v=s(1572);function Z(t,r){1&t&&(n.TgZ(0,"p"),n._uU(1," Please enter a login email. "),n.qZA())}function y(t,r){1&t&&(n.TgZ(0,"p"),n._uU(1,"The login email is invalid."),n.qZA())}function _(t,r){1&t&&(n.TgZ(0,"p"),n._uU(1," Add at least 8 characters. "),n.qZA())}function A(t,r){1&t&&(n.TgZ(0,"p"),n._uU(1," Add letter in uppercase. "),n.qZA())}function x(t,r){1&t&&(n.TgZ(0,"p"),n._uU(1," Add letter in lowercase. "),n.qZA())}function T(t,r){1&t&&(n.TgZ(0,"p"),n._uU(1," Add number. "),n.qZA())}function P(t,r){if(1&t&&(n.TgZ(0,"p"),n._uU(1),n.qZA()),2&t){const e=n.oxw(2);n.xp6(1),n.hij(" Add special symbol (",e.PasswordValidatorSymbols.symbol,") ")}}function I(t,r){if(1&t&&(n.TgZ(0,"div",13)(1,"h3",14),n._uU(2,"Your password isn't strong enough."),n.qZA(),n.YNc(3,_,2,0,"p",5),n.YNc(4,A,2,0,"p",5),n.YNc(5,x,2,0,"p",5),n.YNc(6,T,2,0,"p",5),n.YNc(7,P,2,1,"p",5),n.qZA()),2&t){const e=n.oxw();n.xp6(3),n.Q6J("ngIf",null==e._password||null==e._password.errors?null:e._password.errors[e.PasswordValidatorSymbols.minLength]),n.xp6(1),n.Q6J("ngIf",null==e._password||null==e._password.errors?null:e._password.errors[e.PasswordValidatorSymbols.upperCase]),n.xp6(1),n.Q6J("ngIf",null==e._password||null==e._password.errors?null:e._password.errors[e.PasswordValidatorSymbols.lowerCase]),n.xp6(1),n.Q6J("ngIf",null==e._password||null==e._password.errors?null:e._password.errors[e.PasswordValidatorSymbols.numbers]),n.xp6(1),n.Q6J("ngIf",null==e._password||null==e._password.errors?null:e._password.errors[e.PasswordValidatorSymbols.special])}}function N(t,r){1&t&&n._UZ(0,"mat-spinner",15)}const M=[{path:"",component:(()=>{class t{constructor(e,o,p){this.authService=e,this.router=o,this.spinnerService=p,this.unsubscribe$=new w.x,this.isLoading$=this.spinnerService.getLoading(a.be.login),this.login=new i.cw({userName:new i.NI("",[i.kI.required,i.kI.email]),password:new i.NI("",[i.kI.minLength(8),i.kI.required,this.passwordValidator])}),this.PasswordValidatorSymbols=a.Ar}get _password(){return this.login.get("password")}get _user(){return this.login.get("userName")}logIn(){return this.authService.login()}logOut(){this.authService.logout(),localStorage.clear()}onSubmit(){this.spinnerService.requestStarted(a.be.login),this.logIn().pipe((0,b.R)(this.unsubscribe$)).subscribe(e=>{this.router.navigate([a.A.main]),this.spinnerService.requestEnded(a.be.login)})}ngOnDestroy(){this.unsubscribe$.next(0),this.unsubscribe$.complete()}passwordValidator(e){const o=new RegExp("[A-Z]"),p=new RegExp("[a-z]"),U=new RegExp("[0-9]"),J=new RegExp("[*@!#%&()^~{}]");let l={};return e.value.match(o)||(l[a.Ar.upperCase]=!0),e.value.match(p)||(l[a.Ar.lowerCase]=!0),e.value.match(U)||(l[a.Ar.numbers]=!0),e.value.match(J)||(l[a.Ar.special]=!0),0===Object.keys(l).length?null:l}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(L.e),n.Y36(g.F0),n.Y36(C))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-login"]],decls:22,vars:10,consts:[[1,"d-flex","align-items-center","justify-content-center"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","inputName",1,"text-muted"],["type","text","id","inputName","formControlName","userName","placeholder","Enter user name",1,"form-control"],[4,"ngIf"],["for","inputPassword",1,"text-muted"],["formControlName","password","type","password","id","inputPassword","placeholder","Password",1,"form-control"],["class","error",4,"ngIf"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"d-flex"],["class","m-0 p-0","diameter","20","color","primary",4,"ngIf"],[1,"m-0","p-0","pl-2"],[1,"error"],[1,"m-0"],["diameter","20","color","primary",1,"m-0","p-0"]],template:function(e,o){1&e&&(n.TgZ(0,"div",0)(1,"form",1),n.NdJ("ngSubmit",function(){return o.onSubmit()}),n.TgZ(2,"h2"),n._uU(3,"Login"),n.qZA(),n.TgZ(4,"div",2)(5,"label",3),n._uU(6,"Name"),n.qZA(),n._UZ(7,"input",4),n.YNc(8,Z,2,0,"p",5),n.YNc(9,y,2,0,"p",5),n.qZA(),n.TgZ(10,"div",2)(11,"label",6),n._uU(12,"Password"),n.qZA(),n._UZ(13,"input",7),n.YNc(14,I,8,5,"div",8),n.qZA(),n.TgZ(15,"button",9),n.ALo(16,"async"),n.TgZ(17,"div",10),n.YNc(18,N,1,0,"mat-spinner",11),n.ALo(19,"async"),n.TgZ(20,"p",12),n._uU(21,"Submit"),n.qZA()()()()()),2&e&&(n.xp6(1),n.Q6J("formGroup",o.login),n.xp6(7),n.Q6J("ngIf",(null==o._user?null:o._user.hasError("required"))&&(null==o._user?null:o._user.dirty)),n.xp6(1),n.Q6J("ngIf",null==o._user?null:o._user.hasError("email")),n.xp6(5),n.Q6J("ngIf",(null==o._password?null:o._password.dirty)&&(null==o._password?null:o._password.invalid)),n.xp6(1),n.Q6J("disabled",!o.login.valid||n.lcZ(16,6,o.isLoading$)),n.xp6(3),n.Q6J("ngIf",n.lcZ(19,8,o.isLoading$)))},dependencies:[d.O5,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,v.Ou,d.Ov],styles:[".ng-valid[required][_ngcontent-%COMP%], .ng-valid.required[_ngcontent-%COMP%]{border-left:5px solid #42A948}.ng-dirty.ng-invalid[_ngcontent-%COMP%]:not(form){border-left:5px solid #a94442}.alert[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{background-color:#fed3d3;color:#820000;padding:1rem;margin-bottom:1rem}.form-group[_ngcontent-%COMP%]{margin-bottom:1rem}label[_ngcontent-%COMP%]{display:block;margin-bottom:.5rem}select[_ngcontent-%COMP%]{width:100%;padding:.5rem}.error[_ngcontent-%COMP%]{color:red}.error[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}"]}),t})()}];let $=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[g.Bz.forChild(M),g.Bz]}),t})(),O=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[d.ez,$,i.u5,i.UX,v.Cq]}),t})()}}]);