"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[445],{5445:function(s,t,e){e.r(t),e.d(t,{default:function(){return w}});var r=e(1413),i=e(5671),n=e(3144),u=e(136),o=e(5716),a=e(2791),p=e(6746),l="ProfileInfo_profileWrapper__xlfj-",c="ProfileInfo_aboutMe__95Tup",f=e(885),d=e(184),h=function(s){var t=(0,a.useState)(s.status),e=(0,f.Z)(t,2),r=e[0],i=e[1],n=(0,a.useState)(!1),u=(0,f.Z)(n,2),o=u[0],p=u[1];(0,a.useEffect)((function(){i(s.status)}),[s.status]);return(0,d.jsx)("div",{children:o?(0,d.jsx)("div",{children:(0,d.jsx)("input",{autoFocus:!0,onBlur:function(){p(!1),r&&s.updateUserStatus(r)},onChange:function(s){i(s.currentTarget.value)},value:r})}):(0,d.jsx)("div",{children:(0,d.jsx)("span",{onDoubleClick:function(){p(!0)},children:r||"--------"})})})},m=function(s){return s.profile?(0,d.jsxs)("div",{className:l,children:[(0,d.jsx)("img",{src:s.profile.photos.large,alt:"photo"}),(0,d.jsxs)("div",{className:c,children:[(0,d.jsx)("div",{children:s.profile.fullName}),(0,d.jsx)(h,{status:s.status,updateUserStatus:s.updateUserStatus})]})]}):(0,d.jsx)(p.Z,{})},x="Profile_profile_wrapper__qOh0D",j=e(8664),g="MyPosts_posts__w9DHX",_="MyPosts_button__P7ZNN",v="Post_post__fpPtC",P=function(s){return(0,d.jsxs)("div",{className:v,children:[(0,d.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCJgYe02fL4wiVJBhVyGy9_C8aBBQlViX7XQ&usqp=CAU"}),s.message,(0,d.jsxs)("div",{children:["likes ",s.likesCount]})]})},S=e(5290),y=(0,a.memo)((function(s){console.log("RENDER");var t=(0,S.cI)({mode:"onBlur"}),e=t.register,i=t.handleSubmit,n=t.reset;return(0,d.jsxs)("div",{className:g,children:["My Posts",(0,d.jsxs)("form",{onSubmit:i((function(t){var e=t.newPostText;s.addPost(e),n()})),children:[(0,d.jsx)("textarea",(0,r.Z)({},e("newPostText"))),(0,d.jsx)("div",{children:(0,d.jsx)("button",{type:"submit",className:_,children:"Send"})})]}),s.posts.map((function(s){return(0,d.jsx)(P,{message:s.message,likesCount:s.likesCount},s.id)}))]})})),C=e(364),N=(0,C.$j)((function(s){return{posts:s.profilePage.posts,profile:s.profilePage.profile}}),(function(s){return{addPost:function(t){s((0,j.Ih)(t))}}}))(y),b=function(s){return(0,d.jsxs)("div",{className:x,children:[(0,d.jsx)(m,{profile:s.profile,status:s.status,updateUserStatus:s.updateUserStatus}),(0,d.jsx)(N,{})]})},k=e(9271),U=e(7781),Z=function(s){(0,u.Z)(e,s);var t=(0,o.Z)(e);function e(){return(0,i.Z)(this,e),t.apply(this,arguments)}return(0,n.Z)(e,[{key:"componentDidMount",value:function(){var s=this.props.match.params.userId;s||(s=this.props.userId)||this.props.history.push("/login"),this.props.getUserProfile(+s),this.props.getStatus(+s)}},{key:"render",value:function(){return(0,d.jsx)(b,(0,r.Z)((0,r.Z)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateUserStatus:this.props.updateUserStatus}))}}]),e}(a.Component),w=(0,U.qC)((0,C.$j)((function(s){return{profile:s.profilePage.profile,status:s.profilePage.status,userId:s.auth.id}}),{getUserProfile:j.et,getStatus:j.lR,updateUserStatus:j.OL}),k.EN)(Z)}}]);
//# sourceMappingURL=445.2fc6d4e1.chunk.js.map