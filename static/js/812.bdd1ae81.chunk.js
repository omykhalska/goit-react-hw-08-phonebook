"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[812,572,173,19,57],{8349:function(n,e,r){r.d(e,{Z:function(){return p}});var t,o=r(168),a=r(2879).Z.p(t||(t=(0,o.Z)(["\n  margin: 0 0 16px 0;\n  text-align: center;\n  color: ",";\n"])),(function(n){return n.color})),i=r(3329),p=function(n){var e=n.text,r=n.color,t=void 0===r?"inherit":r;return(0,i.jsx)(a,{color:t,children:e})}},6572:function(n,e,r){r.r(e),r.d(e,{ContactsPage:function(){return rn}});var t,o,a,i,p,x,s=r(885),c=r(2791),l=r(6140),d=r(3347),g=r(1413),u=r(9195),m=r(168),h=r(2879),b=h.Z.fieldset(t||(t=(0,m.Z)(["\n  margin: 0 auto;\n  padding: 8px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  max-width: 600px;\n  background: white;\n  border-radius: 4px;\n  box-shadow: rgba(60, 66, 87, 0.12) 0px 7px 14px 0px,\n    rgba(0, 0, 0, 0.12) 0px 3px 6px 0px;\n"]))),f=h.Z.form(o||(o=(0,m.Z)(["\n  width: 100%;\n  max-width: 448px;\n  padding: 8px 0;\n"]))),Z=h.Z.label(a||(a=(0,m.Z)(["\n  font-size: 16px;\n  font-weight: 600;\n  display: block;\n  color: #121779;\n"]))),j=h.Z.input(i||(i=(0,m.Z)(["\n  margin-top: 10px;\n  margin-bottom: 20px;\n  font-size: 16px;\n  line-height: 28px;\n  padding: 8px 16px;\n  width: 100%;\n  min-height: 44px;\n  border: unset;\n  border-radius: 4px;\n  outline-color: rgb(84 105 212 / 0.5);\n  background-color: rgb(255, 255, 255);\n  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,\n    rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.16) 0px 0px 0px 1px,\n    rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,\n    rgba(0, 0, 0, 0) 0px 0px 0px 0px;\n"]))),w=h.Z.p(p||(p=(0,m.Z)(["\n  margin: -10px 0 10px;\n  color: tomato;\n"]))),v=h.Z.button(x||(x=(0,m.Z)(["\n  background-color: #2878ad;\n  border: unset;\n  border-radius: 4px;\n  outline-color: rgb(84 105 212 / 0.5);\n  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,\n    rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgb(40, 120, 173) 0px 0px 0px 1px,\n    rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,\n    rgba(60, 66, 87, 0.08) 0px 2px 5px 0px;\n  color: #fff;\n  text-transform: uppercase;\n  font-weight: 600;\n  width: 100%;\n  min-height: 44px;\n  cursor: pointer;\n\n  &[disabled] {\n    pointer-events: none;\n    background-color: #cccccc;\n    opacity: 0.5;\n  }\n"]))),y=r(3329);var k,P,C,S=function(n){var e=n.closeModal,r=(0,d.Tn)(),t=(0,s.Z)(r,1)[0],o=(0,d.wY)().data,a=(0,u.cI)({mode:"onChange"}),i=a.register,p=a.reset,x=a.formState,c=x.errors,m=x.isValid,h=a.handleSubmit;return(0,y.jsx)(b,{children:(0,y.jsxs)(f,{autoComplete:"off",onSubmit:h((function(n){var r=n.name,a=n.number;o.some((function(n){return n.name===r}))?l.ZP.error("".concat(r," is already in contacts")):(t({name:r,number:a}),e()),p()})),children:[(0,y.jsxs)(Z,{children:["Name",(0,y.jsx)(j,(0,g.Z)({type:"text"},i("name",{required:"\u274c The field cannot be empty!",pattern:{value:/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/gi,message:"\u274c Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"},minLength:{value:2,message:"\u274c Name must contain 2 letters minimum"}})))]}),(0,y.jsx)("div",{children:(null===c||void 0===c?void 0:c.name)&&(0,y.jsx)(w,{children:(null===c||void 0===c?void 0:c.name.message)||"An error has occurred..."})}),(0,y.jsxs)(Z,{children:["Phone number",(0,y.jsx)(j,(0,g.Z)({type:"tel"},i("number",{required:"\u274c The field cannot be empty!",pattern:{value:/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/g,message:"\u274c Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"},minLength:{value:5,message:"\u274c Phone number must contain 5 digits minimum"}})))]}),(0,y.jsx)("div",{children:(null===c||void 0===c?void 0:c.number)&&(0,y.jsx)(w,{children:(null===c||void 0===c?void 0:c.number.message)||"An error has occurred..."})}),(0,y.jsx)(v,{type:"submit",disabled:!m,children:"Add contact"})]})})},A=r(5048),z=r(3044);function T(n){var e,r=0;for(e=0;e<n.length;e+=1)r=n.charCodeAt(e)+((r<<5)-r);var t="#";for(e=0;e<3;e+=1){t+="00".concat((r>>8*e&255).toString(16)).slice(-2)}return t}function F(n){return{sx:{bgcolor:T(n)},children:"".concat(n.split(" ")[0][0]).concat(n.split(" ")[1][0])}}var q=h.Z.li(k||(k=(0,m.Z)(["\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  align-items: center;\n  gap: 8px;\n\n  padding: 0.5rem;\n\n  &:not(:last-of-type) {\n    margin-bottom: 0.25rem;\n  }\n\n  &:hover {\n    background-color: #f8fcfd;\n  }\n"]))),I=h.Z.div(P||(P=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n"]))),L=h.Z.p(C||(C=(0,m.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n"]))),E=r(1801),_=r(7247);var R,N=function(n){var e=n.name,r=n.number,t=n.id,o=(0,d.Nt)(),a=(0,s.Z)(o,2),i=a[0],p=a[1].isLoading,x=function(n){return n.split(" ").length<2?"".concat(n," ").concat(n.split("").slice(1,2).join()):n}(e);return(0,y.jsxs)(q,{children:[(0,y.jsxs)(I,{children:[(0,y.jsx)(z.Z,(0,g.Z)({},F("".concat(x)))),(0,y.jsxs)(L,{children:[(0,y.jsxs)("b",{children:[e,":"]})," ",r]})]}),(0,y.jsx)(E.Z,{variant:"contained",startIcon:(0,y.jsx)(_.Z,{}),sx:{bgcolor:"#2878ad"},onClick:function(){i(t),l.ZP.success("Selected contact deleted")},disabled:p,type:"submit",children:p?"Deleting...":"Delete"})]})},M=h.Z.ul(R||(R=(0,m.Z)(["\n  margin-top: 20px;\n  list-style: none;\n"]))),O=function(n){return n.filter.filter};var $,D,H=function(n){var e=n.contacts,r=(0,A.v9)(O).toLowerCase(),t=e.filter((function(n){return n.name.toLowerCase().includes(r)}));return(0,y.jsx)(M,{children:t.sort((function(n,e){return n.name.localeCompare(e.name)})).map((function(n){var e=n.id,r=n.name,t=n.number;return(0,y.jsx)(N,{name:r,number:t,id:e},e)}))})},Y=r(7657),X=h.Z.label($||($=(0,m.Z)(["\n  margin: 1rem 0;\n  padding-left: 12px;\n\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  flex-wrap: wrap;\n\n  font-weight: 500;\n"]))),B=h.Z.input(D||(D=(0,m.Z)(["\n  margin-top: 0.5rem;\n  padding: 0.25rem;\n"])));var J,V=function(){var n=(0,A.I0)();return(0,y.jsxs)(X,{children:["Find contacts by name",(0,y.jsx)(B,{type:"text",name:"filter",onChange:function(e){return n((0,Y.M)(e.currentTarget.value))}})]})},G=r(4039),K=h.Z.div(J||(J=(0,m.Z)(["\n  display: flex;\n  justify-content: center;\n"])));var Q=function(n){var e=n.config,r=e.height,t=void 0===r?"24":r,o=e.width,a=void 0===o?"24":o,i=e.color,p=void 0===i?"inherit":i;return(0,y.jsx)(K,{children:(0,y.jsx)(G.g4,{height:t,width:a,color:p})})},U=r(8349),W=r(4201),nn=r(6747),en={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:420,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4},rn=function(){var n,e=(0,d.wY)(null,{refetchOnMountOrArgChange:!0}),r=e.data,t=e.error,o=e.isFetching,a=(0,c.useState)(!1),i=(0,s.Z)(a,2),p=i[0],x=i[1],g=function(){return x(!0)},u=function(){return x(!1)};return(0,y.jsxs)("div",{children:[(0,y.jsx)("div",{children:(0,y.jsx)(l.x7,{})}),o&&(0,y.jsx)(Q,{config:{height:"48",width:"48"}}),r&&(n=r,(0,y.jsx)(y.Fragment,{children:0===n.length?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(U.Z,{text:"Your phonebook is empty. Add your first contact!",color:"red"}),(0,y.jsx)(S,{})]}):(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(E.Z,{onClick:g,children:"+ Add contact"}),(0,y.jsx)(W.Z,{open:p,onClose:u,"aria-labelledby":"contact updating","aria-describedby":"contact updating",children:(0,y.jsx)(nn.Z,{sx:en,children:(0,y.jsx)(S,{closeModal:u})})}),n.length>1?(0,y.jsx)(V,{}):null,(0,y.jsx)(H,{contacts:n})]})})),t&&(0,y.jsx)("div",{children:"Something went wrong..."})]})}},8173:function(n,e,r){r.r(e),r.d(e,{HomePage:function(){return u}});var t,o,a,i=r(168),p=r(2879),x=r(3504),s=p.Z.ul(t||(t=(0,i.Z)(["\n  margin-top: 24px;\n  display: flex;\n  align-content: center;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  gap: 40px;\n  list-style-type: none;\n"]))),c=p.Z.p(o||(o=(0,i.Z)(["\n  margin-top: 24px;\n  text-align: center;\n  font-weight: 700;\n  font-family: 'Roboto', sans-serif;\n  font-size: 20px;\n  color: #121779;\n"]))),l=(0,p.Z)(x.OL)(a||(a=(0,i.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #2878ad;\n  color: #fff;\n  font-size: 0.9rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  text-decoration: none;\n  min-width: 98px;\n  min-height: 40px;\n  cursor: pointer;\n  border: unset;\n  border-radius: 4px;\n  outline-color: rgb(84 105 212 / 0.5);\n  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,\n    rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgb(40, 120, 173) 0px 0px 0px 1px,\n    rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,\n    rgba(60, 66, 87, 0.08) 0px 2px 5px 0px;\n\n  &:hover {\n    background-color: #1565c0;\n  }\n"]))),d=r(3329),g=function(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(c,{children:["Phonebook is an application that will help you to add or remove a contact and to quickly find the desired one. ",(0,d.jsx)("br",{})," Make a managing of your phone book comfortable and easy ! Try it now !"]}),(0,d.jsxs)(s,{children:[(0,d.jsx)("li",{children:(0,d.jsx)(l,{to:"/register",children:"Register"})}),(0,d.jsx)("li",{children:(0,d.jsx)(l,{to:"/login",children:"Sign In"})})]})]})},u=function(){return(0,d.jsx)(g,{})}},1019:function(n,e,r){r.r(e),r.d(e,{LoginPage:function(){return q}});var t,o,a,i,p,x,s,c,l=r(4704),d=r(5048),g=r(1413),u=r(9195),m=r(1265),h=r(2292),b=r(3504),f=r(168),Z=r(2879),j=Z.Z.div(t||(t=(0,f.Z)(["\n  margin: 0 auto;\n  padding: 8px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  max-width: 600px;\n  background: white;\n  border-radius: 4px;\n  box-shadow: rgba(60, 66, 87, 0.12) 0px 7px 14px 0px,\n    rgba(0, 0, 0, 0.12) 0px 3px 6px 0px;\n"]))),w=Z.Z.p(o||(o=(0,f.Z)(["\n  margin: 8px 0;\n  text-align: center;\n  font-size: 20px;\n  color: #121779;\n"]))),v=Z.Z.form(a||(a=(0,f.Z)(["\n  width: 100%;\n  max-width: 448px;\n"]))),y=Z.Z.label(i||(i=(0,f.Z)(["\n  font-size: 16px;\n  font-weight: 600;\n  display: block;\n  color: #121779;\n"]))),k=Z.Z.input(p||(p=(0,f.Z)(["\n  margin-top: 10px;\n  margin-bottom: 20px;\n  font-size: 16px;\n  line-height: 28px;\n  padding: 8px 16px;\n  width: 100%;\n  min-height: 44px;\n  border: unset;\n  border-radius: 4px;\n  outline-color: rgb(84 105 212 / 0.5);\n  background-color: rgb(255, 255, 255);\n  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,\n    rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.16) 0px 0px 0px 1px,\n    rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,\n    rgba(0, 0, 0, 0) 0px 0px 0px 0px;\n"]))),P=Z.Z.button(x||(x=(0,f.Z)(["\n  background-color: #2878ad;\n  border: unset;\n  border-radius: 4px;\n  outline-color: rgb(84 105 212 / 0.5);\n  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,\n    rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgb(40, 120, 173) 0px 0px 0px 1px,\n    rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,\n    rgba(60, 66, 87, 0.08) 0px 2px 5px 0px;\n  color: #fff;\n  text-transform: uppercase;\n  font-weight: 600;\n  width: 100%;\n  min-height: 44px;\n  cursor: pointer;\n\n  &:hover {\n    background-color: #1565c0;\n  }\n"]))),C=Z.Z.nav(s||(s=(0,f.Z)(["\n  margin: 8px 0;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  color: #121779;\n"]))),S=Z.Z.p(c||(c=(0,f.Z)(["\n  margin: -10px 0 10px;\n  color: tomato;\n"]))),A=r(3329),z=h.Ry({email:h.Z_().email("\u274cEmail must be a valid email").required("\u274c The field cannot be empty!"),password:h.Z_().required("\u274c The field cannot be empty!")}).required(),T=function(){var n=(0,u.cI)({resolver:(0,m.X)(z),mode:"onTouched"}),e=n.register,r=n.formState.errors,t=n.handleSubmit,o=n.reset,a=(0,d.I0)(),i=function(){var n;return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(y,{children:["Email",(0,A.jsx)(k,(0,g.Z)({type:"email",name:"email",placeholder:"Email",required:!0},e("email")))]}),(0,A.jsx)(S,{children:null===(n=r.email)||void 0===n?void 0:n.message})]})},p=function(){var n;return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(y,{children:["Password",(0,A.jsx)(k,(0,g.Z)({type:"password",name:"password",placeholder:"Enter password",required:!0},e("password")))]}),(0,A.jsx)(S,{children:null===(n=r.password)||void 0===n?void 0:n.message})]})};return(0,A.jsxs)(j,{children:[(0,A.jsx)(w,{children:"Accessing this application requires a login, please enter your credentials below!"}),(0,A.jsxs)(v,{name:"login-form",onSubmit:t((function(n){a(l.r5.logIn(n)),o()})),children:[(0,A.jsx)(i,{}),(0,A.jsx)(p,{}),(0,A.jsx)(P,{type:"submit",children:"Sign In"})]}),(0,A.jsxs)(C,{children:["No account?",(0,A.jsx)(b.OL,{to:"/register",children:"Create one!"})]})]})},F=r(8349),q=function(){var n=(0,d.v9)(l.um.getIsError);return(0,A.jsxs)(A.Fragment,{children:[n&&(0,A.jsx)(F.Z,{text:"Something went wrong... Try again!",color:"red"}),(0,A.jsx)(T,{})]})}},57:function(n,e,r){r.r(e),r.d(e,{RegisterPage:function(){return q}});var t,o,a,i,p,x,s,c,l=r(1413),d=r(9195),g=r(1265),u=r(2292),m=r(5048),h=r(4704),b=r(3504),f=r(168),Z=r(2879),j=Z.Z.div(t||(t=(0,f.Z)(["\n  margin: 0 auto;\n  padding: 8px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  max-width: 600px;\n  background: white;\n  border-radius: 4px;\n  box-shadow: rgba(60, 66, 87, 0.12) 0px 7px 14px 0px,\n    rgba(0, 0, 0, 0.12) 0px 3px 6px 0px;\n"]))),w=Z.Z.p(o||(o=(0,f.Z)(["\n  margin: 8px 0;\n  font-size: 20px;\n  color: #121779;\n"]))),v=Z.Z.form(a||(a=(0,f.Z)(["\n  width: 100%;\n  max-width: 448px;\n"]))),y=Z.Z.label(i||(i=(0,f.Z)(["\n  font-size: 16px;\n  font-weight: 600;\n  display: block;\n  color: #121779;\n"]))),k=Z.Z.input(p||(p=(0,f.Z)(["\n  margin-top: 10px;\n  margin-bottom: 20px;\n  font-size: 16px;\n  line-height: 28px;\n  padding: 8px 16px;\n  width: 100%;\n  min-height: 44px;\n  border: unset;\n  border-radius: 4px;\n  outline-color: rgb(84 105 212 / 0.5);\n  background-color: rgb(255, 255, 255);\n  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,\n    rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.16) 0px 0px 0px 1px,\n    rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,\n    rgba(0, 0, 0, 0) 0px 0px 0px 0px;\n"]))),P=Z.Z.button(x||(x=(0,f.Z)(["\n  background-color: #2878ad;\n  border: unset;\n  border-radius: 4px;\n  outline-color: rgb(84 105 212 / 0.5);\n  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,\n    rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgb(40, 120, 173) 0px 0px 0px 1px,\n    rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,\n    rgba(60, 66, 87, 0.08) 0px 2px 5px 0px;\n  color: #fff;\n  text-transform: uppercase;\n  font-weight: 600;\n  width: 100%;\n  min-height: 44px;\n  cursor: pointer;\n\n  &:hover {\n    background-color: #1565c0;\n  }\n"]))),C=Z.Z.nav(s||(s=(0,f.Z)(["\n  margin: 8px 0;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  color: #121779;\n"]))),S=Z.Z.p(c||(c=(0,f.Z)(["\n  margin: -10px 0 10px;\n  color: tomato;\n"]))),A=r(3329),z=u.Ry({name:u.Z_().required("\u274c The field cannot be empty!").matches("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$","\u274c Name may contain only alphanumerics, at least 3 characters. The dot (.), underscore (_), or hyphen (-) must not be the first or last character").min(2),email:u.Z_().email("\u274cEmail must be a valid email").required("\u274c The field cannot be empty!"),password:u.Z_().required("\u274c The field cannot be empty!").matches("^(?=.*[0-9])(?=.*[A-Z]).{7,32}$","\u274c The password must be at least 7 characters long with one digital and one uppercase")}).required(),T=function(){var n=(0,m.I0)(),e=(0,d.cI)({resolver:(0,g.X)(z),mode:"onTouched"}),r=e.register,t=e.formState.errors,o=e.handleSubmit,a=e.reset,i=function(){var n;return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(y,{children:["Name",(0,A.jsx)(k,(0,l.Z)({type:"text",placeholder:"Name"},r("name")))]}),(0,A.jsx)(S,{children:null===(n=t.name)||void 0===n?void 0:n.message})]})},p=function(){var n;return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(y,{children:["Email",(0,A.jsx)(k,(0,l.Z)({type:"email",name:"email",placeholder:"Email"},r("email")))]}),(0,A.jsx)(S,{children:null===(n=t.email)||void 0===n?void 0:n.message})]})},x=function(){var n;return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(y,{children:["Password",(0,A.jsx)(k,(0,l.Z)({type:"password",name:"password",placeholder:"Enter password"},r("password")))]}),(0,A.jsx)(S,{children:null===(n=t.password)||void 0===n?void 0:n.message})]})};return(0,A.jsxs)(j,{children:[(0,A.jsx)(w,{children:"Don't have an account? Register one!"}),(0,A.jsxs)(v,{name:"register-form",onSubmit:o((function(e){n(h.r5.register(e)),a()})),children:[(0,A.jsx)(i,{}),(0,A.jsx)(p,{}),(0,A.jsx)(x,{}),(0,A.jsx)(P,{type:"submit",children:"Register"})]}),(0,A.jsxs)(C,{children:["Already have an account?",(0,A.jsx)(b.OL,{to:"/login",children:"Sign In"})]})]})},F=r(8349),q=function(){return(0,m.v9)(h.um.getIsError)?(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(F.Z,{text:"Something went wrong... Try again with another email!",color:"red"}),(0,A.jsx)(T,{})]}):(0,A.jsx)(T,{})}},4812:function(n,e,r){r.r(e),r.d(e,{ContactsPage:function(){return i.ContactsPage},HomePage:function(){return t.HomePage},LoginPage:function(){return o.LoginPage},RegisterPage:function(){return a.RegisterPage}});var t=r(8173),o=r(1019),a=r(57),i=r(6572)}}]);
//# sourceMappingURL=812.bdd1ae81.chunk.js.map