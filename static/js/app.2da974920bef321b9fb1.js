webpackJsonp([5],{"1+nO":function(t,e){},"3M1R":function(t,e){},GfZ6:function(t,e){},Jdfc:function(t,e){t.exports={baseURL:"//note-server.hunger-valley.com"}},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),r=n("zL8q"),a=n.n(r),u=(n("tvR6"),n("Dd8w")),s=n.n(u),i=n("NYxO"),c={data:function(){return{}},created:function(){this.checkLogin({})},computed:s()({},Object(i.c)(["username","slug"])),methods:s()({},Object(i.b)(["checkLogin"]))},d={render:function(){var t=this.$createElement;return(this._self._c||t)("span",{attrs:{title:this.username}},[this._v(this._s(this.slug))])},staticRenderFns:[]};var f={components:{avatar:n("VU/8")(c,d,!1,function(t){n("3M1R")},"data-v-1d064020",null).exports},methods:s()({},Object(i.b)(["logout"]),{onLogout:function(){this.logout()}})},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"sidebar"}},[e("avatar"),this._v(" "),e("div",{staticClass:"icons"},[e("router-link",{attrs:{to:"/note",title:"笔记"}},[e("i",{staticClass:"iconfont icon-note"})]),this._v(" "),e("router-link",{attrs:{to:"/notebooks",title:"笔记本"}},[e("i",{staticClass:"iconfont icon-notebook"})]),this._v(" "),e("router-link",{attrs:{to:"/trash",title:"回收站"}},[e("i",{staticClass:"iconfont icon-trash"})])],1),this._v(" "),e("div",{staticClass:"logout"},[e("i",{staticClass:"iconfont icon-logout",on:{click:this.onLogout}})])],1)},staticRenderFns:[]};var h={name:"app",components:{sidebar:n("VU/8")(f,l,!1,function(t){n("1+nO")},"data-v-78b6fc92",null).exports}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("sidebar"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var v=n("VU/8")(h,m,!1,function(t){n("GfZ6")},null,null).exports,b=n("/ocq");o.default.use(b.a);var p=new b.a({routes:[{path:"/",alias:"/notebooks",component:function(){return n.e(2).then(n.bind(null,"C3fl"))}},{path:"/login",component:function(){return n.e(3).then(n.bind(null,"xJsL"))}},{path:"/note",component:function(){return n.e(0).then(n.bind(null,"Gb2o"))}},{path:"/trash",component:function(){return n.e(1).then(n.bind(null,"WMg/"))}}]}),k=n("//Fk"),N=n.n(k),I=n("mtWM"),g=n.n(I),T=n("Jdfc"),E=n.n(T);function A(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new N.a(function(o,a){var u={url:t,method:e,validateStatus:function(t){return t>=200&&t<300||400===t}};"get"===e.toLowerCase()?u.params=n:u.data=n,g()(u).then(function(t){200===t.status?o(t.data):(r.Message.error(t.data.msg),a(t.data))}).catch(function(t){r.Message.error(t),a({msg:"网络异常"})})})}g.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",g.a.defaults.baseURL=E.a.baseURL,g.a.defaults.withCredentials=!0;var w=n("pFYg"),D=n.n(w);function L(t){var e=("object"===(void 0===t?"undefined":D()(t))?t:new Date(t)).getTime(),n=Date.now()-e,o=void 0;switch(!0){case n<6e4:o="刚刚";break;case n<36e5:o=Math.floor(n/6e4)+"分钟前";break;case n<864e5:o=Math.floor(n/36e5)+"小时前";break;default:o=Math.floor(n/864e5)+"天前"}return o}var y={GET:"/notebooks",ADD:"/notebooks",UPDATE:"/notebooks/:id",DELETE:"/notebooks/:id"},M=function(){return new N.a(function(t,e){A(y.GET).then(function(e){e.data=e.data.sort(function(t,e){return t.createdAt>e.createdAt?-1:1}),e.data.forEach(function(t){t.createdAtFriendly=L(t.createdAt),t.updatedAtFriendly=L(t.updatedAt)}),t(e)}).catch(function(t){e(t)})})},C=function(t){var e=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{title:""}).title,n=void 0===e?"":e;return A(y.UPDATE.replace(":id",t),"PATCH",{title:n})},F=function(t){return A(y.DELETE.replace(":id",t),"DELETE")},U=function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{title:""}).title,e=void 0===t?"":t;return new N.a(function(t,n){A(y.ADD,"POST",{title:e}).then(function(e){e.data.createdAtFriendly=L(e.data.createdAt),e.data.updatedAtFriendly=L(e.data.updatedAt),t(e)}).catch(function(t){n(t)})})},_={notebooks:null,currentBookId:null},R={state:_,getters:{notebooks:function(t){return t.notebooks||[]},currentBook:function(t){return Array.isArray(t.notebooks)?t.currentBookId?t.notebooks.find(function(e){return e.id==t.currentBookId})||{}:t.notebooks[0]||{}:{}}},mutations:{setCurrentBook:function(t,e){t.currentBookId=e.currentBookId},setNotebooks:function(t,e){t.notebooks=e.notebooks},addNotebook:function(t,e){t.notebooks.unshift(e.notebook)},deleteNotebook:function(t,e){t.notebooks=t.notebooks.filter(function(t){return t.id!=e.notebookId})||{}},updateNotebook:function(t,e){(t.notebooks.find(function(t){return t.id==e.notebookId})||{}).title=e.title}},actions:{getNotebooks:function(t){var e=t.commit;t.state;return M().then(function(t){e("setNotebooks",{notebooks:t.data})})},addNotebook:function(t,e){var n=t.commit;if(!_.notebooks.find(function(t){return t.title==e.title}))return U({title:e.title}).then(function(t){n("addNotebook",{notebook:t.data}),r.Message.success(t.msg)});r.Message.error("笔记本标题不能重复")},deleteNotebook:function(t,e){var n=t.commit;return F(e.notebookId).then(function(t){n("deleteNotebook",{notebookId:e.notebookId}),r.Message.success(t.msg)})},updateNotebook:function(t,e){var n=t.commit;return C(e.notebookId,{title:e.title}).then(function(t){n("updateNotebook",{notebookId:e.notebookId,title:e.title}),r.Message.success(t.data)})}}},P={GET:"/notes/from/:notebookId",ADD:"/notes/to/:notebookId",UPDATE:"/notes/:noteId",DELETE:"/notes/:noteId"},O=function(t){var e=t.notebookId;return new N.a(function(t,n){A(P.GET.replace(":notebookId",e)).then(function(e){e.data=e.data.map(function(t){return t.createdAtFriendly=L(t.createdAt),t.updatedAtFriendly=L(t.updatedAt),t}).sort(function(t,e){return t.updatedAt>e.updatedAt?-1:1}),t(e)}).catch(function(t){n(t)})})},G=function(t,e){var n=t.noteId,o=e.title,r=e.content;return A(P.UPDATE.replace(":noteId",n),"PATCH",{title:o,content:r})},x=function(t){var e=t.noteId;return A(P.DELETE.replace(":noteId",e),"DELETE")},B=function(t){var e=t.notebookId,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{title:"",content:""},o=n.title,r=void 0===o?"":o,a=n.content,u=void 0===a?"":a;return new N.a(function(t,n){A(P.ADD.replace(":notebookId",e),"POST",{title:r,content:u}).then(function(e){e.data.createdAtFriendly=L(e.data.createdAt),e.data.updatedAtFriendly=L(e.data.updatedAt),t(e)}).catch(function(t){n(t)})})},S={state:{notes:null,currentNoteId:null},getters:{notes:function(t){return t.notes||[]},currentNote:function(t){return Array.isArray(t.notes)?t.currentNoteId?t.notes.find(function(e){return e.id==t.currentNoteId})||{}:t.notes[0]||{}:{}}},mutations:{setCurrentNote:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.currentNoteId=e.currentNoteId},setNotes:function(t,e){t.notes=e.notes||[]},addNote:function(t,e){t.notes.unshift(e.note)},deleteNote:function(t,e){t.notes=t.notes.filter(function(t){return t.id!=e.noteId})},updateNote:function(t,e){var n=t.notes.find(function(t){return t.id==e.noteId})||{};n.title=e.title,n.content=e.content}},actions:{getNotes:function(t,e){var n=t.commit,o=e.notebookId;return O({notebookId:o}).then(function(t){n("setNotes",{notes:t.data})})},addNote:function(t,e){var n=t.commit,o=e.notebookId,r=e.title,a=e.content;return B({notebookId:o},{title:r,content:a}).then(function(t){n("addNote",{note:t.data})})},deleteNote:function(t,e){var n=t.commit,o=e.noteId;return x({noteId:o}).then(function(t){n("deleteNote",{noteId:o}),r.Message.success(t.msg)})},updateNote:function(t,e){var n=t.commit,o=e.noteId,r=e.title,a=e.content;return G({noteId:o},{title:r,content:a}).then(function(t){n("updateNote",{noteId:o,title:r,content:a})})}}},j="/auth/register",H="/auth/login",V="/auth/logout",J="/auth",W=function(t){var e=t.username,n=t.password;return A(j,"POST",{username:e,password:n})},$=function(t){var e=t.username,n=t.password;return A(H,"POST",{username:e,password:n})},q=function(){return A(V)},Y=function(){return A(J)},Z={state:{user:null},getters:{username:function(t){return null===t.user?"未登录":t.user.username},slug:function(t){return null===t.user?"未":t.user.username.charAt(0)}},mutations:{setUser:function(t,e){t.user=e.user}},actions:{login:function(t,e){var n=t.commit,o=e.username,r=e.password;return $({username:o,password:r}).then(function(t){n("setUser",{user:t.data})})},logout:function(t){var e=t.commit,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{path:"/login"};return q().then(function(){e("setUser",{user:null}),p.push(n).then()})},register:function(t,e){var n=t.commit,o=e.username,r=e.password;return W({username:o,password:r}).then(function(t){n("setUser",{user:t.data})})},checkLogin:function(t,e){var n=this,o=t.commit;return null!==t.state.user?N.a.resolve():Y().then(function(t){t.isLogin?(n.username=t.data.username,o("setUser",{user:t.data})):p.push(e).then(function(){})})}}},z={GET:"/notes/trash",REVERT:"/notes/:noteId/revert",DELETE:"/notes/:noteID/confirm"},K=function(){return new N.a(function(t,e){A(z.GET).then(function(e){e.data=e.data.sort(function(t,e){return t.createdAt>e.createdAt?-1:1}),e.data.forEach(function(t){t.createdAtFriendly=L(t.createdAt),t.updatedAtFriendly=L(t.updatedAt)}),t(e)}).catch(function(t){e(t)})})},Q=function(t){var e=t.noteId;return A(z.DELETE.replace(":noteID",e),"DELETE")},X=function(t){var e=t.noteId;return A(z.REVERT.replace(":noteId",e),"PATCH")},tt={state:{trashNotes:null,currentTrashNoteId:null},getters:{trashNotes:function(t){return t.trashNotes||[]},currentTrashNote:function(t,e){return t.currentTrashNoteId?t.trashNotes.find(function(e){return e.id==t.currentTrashNoteId})||{}:e.trashNotes[0]||{}},belongTo:function(t,e,n,o){return(o.notebooks.find(function(t){return t.id==e.currentTrashNote.notebookId})||{}).title||{}}},mutations:{setTrashNotes:function(t,e){t.trashNotes=e.trashNotes},addTrashNote:function(t,e){t.trashNotes.unshift(e.note)},deleteTrashNote:function(t,e){t.trashNotes=t.trashNotes.filter(function(t){return t.id!=e.noteId})},setCurrentTrashNote:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.currentTrashNoteId=e.currentTrashNoteId}},actions:{getTrashNotes:function(t){var e=t.commit;return K().then(function(t){e("setTrashNotes",{trashNotes:t.data})})},deleteTrashNote:function(t,e){var n=t.commit,o=e.noteId;return Q({noteId:o}).then(function(t){n("deleteTrashNote",{noteId:o}),r.Message.success(t.msg)})},revertTrashNote:function(t,e){var n=t.commit,o=e.noteId;return X({noteId:o}).then(function(t){n("deleteTrashNote",{noteId:o}),r.Message.success(t.msg)})}}};o.default.use(i.a);var et=new i.a.Store({modules:{notebooks:R,notes:S,user:Z,trash:tt}});o.default.use(a.a),o.default.config.productionTip=!1,window.vm=new o.default({el:"#app",router:p,store:et,components:{App:v},template:"<App/>"})},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.2da974920bef321b9fb1.js.map