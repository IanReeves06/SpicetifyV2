(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[499],{69231:function(e,t,a){"use strict";a.d(t,{T:function(){return u}});var r=a(27378),n=a.n(r),o=a(22117),i=a(66027),s=a(19958),l=a(58324),c="profile-editImage-imageContainer",d="profile-editImage-editImageButtonContainer";const u=function({onClick:e,name:t,images:a,canEdit:r,placeholderType:u,shape:m=i.Kc.SQUARE,dragUri:g=""}){const[f,p]=(0,i.RH)(a),b=(0,o.VO)(f,p)===o.KO.loaded,v=(0,l.O1)([g],t);return n().createElement("div",{className:c,"data-testid":`${u}-image`,draggable:!!g,onDragStart:v},n().createElement(i.Oe,{loading:"eager",name:t,images:a,placeholderType:u,shape:m}),r&&n().createElement("div",{className:d},n().createElement(s.F,{overlay:b,onClick:e,rounded:m===i.Kc.CIRCLE})))}},16033:function(e,t,a){"use strict";a.r(t),a.d(t,{UserPage:function(){return ft},default:function(){return pt}});var r=a(27378),n=a.n(r),o=a(48529),i=a(66917),s=a.n(i),l=a(79308),c=a(60042),d=a.n(c),u={xs:"(min-width: 0px)",xsOnly:"(min-width: 0px) and (max-width: 767px)",sm:"(min-width: 768px)",smOnly:"(min-width: 768px) and (max-width: 1023px)",md:"(min-width: 1024px)",mdOnly:"(min-width: 1024px) and (max-width: 1279px)",lg:"(min-width: 1280px)",lgOnly:"(min-width: 1280px) and (max-width: 1919px)",xl:"(min-width: 1920px)",buddyFeedMinWidth:"72px",buddyFeedEmptyMinWidth:"270px",buddyFeedInitialWidth:"270px",buddyFeedMaxWidth:"384px",container:"profile-userOverview-container",background:"profile-userOverview-background",overlay:"profile-userOverview-overlay",loggedOut:"profile-userOverview-loggedOut",historyButtons:"profile-userOverview-historyButtons",icon:"profile-userOverview-icon",button:"profile-userOverview-button",forward:"profile-userOverview-forward",topbarContentWrapper:"profile-userOverview-topbarContentWrapper",topbarContent:"profile-userOverview-topbarContent",UpgradeButton:"profile-userOverview-UpgradeButton",indicators:"profile-userOverview-indicators",contentArea:"profile-userOverview-contentArea",back:"profile-userOverview-back",user:"profile-userOverview-user",section:"profile-userOverview-section",subPage:"profile-userOverview-subPage",imageContainer:"profile-userOverview-imageContainer",topTrackSubPage:"profile-userOverview-topTrackSubPage",header:"profile-userOverview-header",title:"profile-userOverview-title",userVerifiedBadge:"profile-userOverview-userVerifiedBadge"},m=a(66027),g=a(90849),f=a(41805),p=a(7444),b=a(18010),v=a(35181),h=a(7487),y=a(55003),E=a(8621),k=a(88319),w=a(83509),O=a(68215),P=a(62088),I=a(18856),_=a(96816),N=a(44791);const S=e=>({owner:{display_name:e.owner_name},name:e.name,uri:e.uri,description:e.followers_count?v.ag.get("user.followers",e.followers_count):"",images:[{url:(0,N.p)({imageUriOrUrl:e.image_url}),width:300,height:300}]});function x(e){return{uri:e.uri,name:e.name,images:[{url:e.image_url}]}}function D(e=[]){return e.map(x)}function R(e){return{name:e.name,uri:e.uri,images:[{url:e.image_url}]}}var A=a(66422),C=a(9807),M=a(91188),T=a(49962),U=a(9271),j={container:"profile-userEditDetails-container",content:"profile-userEditDetails-content",header:"profile-userEditDetails-header",closeBtn:"profile-userEditDetails-closeBtn",image:"profile-userEditDetails-image",imageLoadingContainer:"profile-userEditDetails-imageLoadingContainer",textElement:"profile-userEditDetails-textElement",name:"profile-userEditDetails-name",textElementLabel:"profile-userEditDetails-textElementLabel",labelText:"profile-userEditDetails-labelText",nameInput:"profile-userEditDetails-nameInput",save:"profile-userEditDetails-save",disclaimer:"profile-userEditDetails-disclaimer"},W=a(58558),H=a(65526),J=a.n(H);function L(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function B(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?L(Object(a),!0).forEach((function(t){J()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):L(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function F(e){return{type:"setLoading",loading:e}}function $(e){return{type:"setMessage",message:e}}function K(e,t){switch(t.type){case"setName":return B(B({},e),{},{name:t.name});case"setMessage":return B(B({},e),{},{message:t.message,loading:!1});case"setLoading":return B(B({},e),{},{loading:t.loading,message:null});case"setImageData":return B(B({},e),{},{imageData:t.data,removeImage:!1});case"setImageToken":return B(B({},e),{},{imageToken:t.token,removeImage:!1});case"removeImage":return B(B({},e),{},{imageToken:void 0,imageData:void 0,image:void 0,removeImage:!0});default:return e}}var z=a(63153);const G={type:"error",get message(){return v.ag.get("user.edit-details.error.file-size-exceeded",4)}},Q={type:"error",get message(){return v.ag.get("user.edit-details.error.too-small",300,300)}},V={type:"error",get message(){return v.ag.get("user.edit-details.error.missing-name")}},X={type:"error",get message(){return v.ag.get("user.edit-details.error.failed-to-save")}},Z={type:"error",get message(){return v.ag.get("user.edit-details.error.file-upload-failed")}};var q=a(86250),Y=a(57019);function ee(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function te(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(a),!0).forEach((function(t){J()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ee(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const ae={paths:""},re={encode(e,t=Y.Writer.create()){for(const a of e.paths)t.uint32(10).string(a);return t},decode(e,t){const a=e instanceof Uint8Array?new Y.Reader(e):e;let r=void 0===t?a.len:a.pos+t;const n=te({},ae);for(n.paths=[];a.pos<r;){const e=a.uint32();switch(e>>>3){case 1:n.paths.push(a.string());break;default:a.skipType(7&e)}}return n},fromJSON(e){const t=te({},ae);if(t.paths=[],void 0!==e.paths&&null!==e.paths)for(const a of e.paths)t.paths.push(String(a));return t},fromPartial(e){const t=te({},ae);if(t.paths=[],void 0!==e.paths&&null!==e.paths)for(const a of e.paths)t.paths.push(a);return t},toJSON(e){const t={};return e.paths?t.paths=e.paths.map((e=>e)):t.paths=[],t}};var ne=a(24067),oe=a(30816).Buffer;function ie(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function se(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ie(Object(a),!0).forEach((function(t){J()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ie(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const le={value:0},ce={value:!1},de={value:""};const ue={encode:(e,t=Y.Writer.create())=>(t.uint32(8).int32(e.value),t),decode(e,t){const a=e instanceof Uint8Array?new Y.Reader(e):e;let r=void 0===t?a.len:a.pos+t;const n=se({},le);for(;a.pos<r;){const e=a.uint32();switch(e>>>3){case 1:n.value=a.int32();break;default:a.skipType(7&e)}}return n},fromJSON(e){const t=se({},le);return void 0!==e.value&&null!==e.value?t.value=Number(e.value):t.value=0,t},fromPartial(e){const t=se({},le);return void 0!==e.value&&null!==e.value?t.value=e.value:t.value=0,t},toJSON(e){const t={};return void 0!==e.value&&(t.value=e.value),t}},me={encode:(e,t=Y.Writer.create())=>(t.uint32(8).bool(e.value),t),decode(e,t){const a=e instanceof Uint8Array?new Y.Reader(e):e;let r=void 0===t?a.len:a.pos+t;const n=se({},ce);for(;a.pos<r;){const e=a.uint32();switch(e>>>3){case 1:n.value=a.bool();break;default:a.skipType(7&e)}}return n},fromJSON(e){const t=se({},ce);return void 0!==e.value&&null!==e.value?t.value=Boolean(e.value):t.value=!1,t},fromPartial(e){const t=se({},ce);return void 0!==e.value&&null!==e.value?t.value=e.value:t.value=!1,t},toJSON(e){const t={};return void 0!==e.value&&(t.value=e.value),t}},ge={encode:(e,t=Y.Writer.create())=>(t.uint32(10).string(e.value),t),decode(e,t){const a=e instanceof Uint8Array?new Y.Reader(e):e;let r=void 0===t?a.len:a.pos+t;const n=se({},de);for(;a.pos<r;){const e=a.uint32();switch(e>>>3){case 1:n.value=a.string();break;default:a.skipType(7&e)}}return n},fromJSON(e){const t=se({},de);return void 0!==e.value&&null!==e.value?t.value=String(e.value):t.value="",t},fromPartial(e){const t=se({},de);return void 0!==e.value&&null!==e.value?t.value=e.value:t.value="",t},toJSON(e){const t={};return void 0!==e.value&&(t.value=e.value),t}};Y.util.Long!==ne&&(Y.util.Long=ne,(0,Y.configure)());const fe=globalThis;fe.atob,fe.btoa;function pe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function be(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?pe(Object(a),!0).forEach((function(t){J()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):pe(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const ve={maxWidth:0,maxHeight:0,url:""},he={},ye={},Ee={encode:(e,t=Y.Writer.create())=>(t.uint32(8).int32(e.maxWidth),t.uint32(16).int32(e.maxHeight),t.uint32(26).string(e.url),t),decode(e,t){const a=e instanceof Uint8Array?new Y.Reader(e):e;let r=void 0===t?a.len:a.pos+t;const n=be({},ve);for(;a.pos<r;){const e=a.uint32();switch(e>>>3){case 1:n.maxWidth=a.int32();break;case 2:n.maxHeight=a.int32();break;case 3:n.url=a.string();break;default:a.skipType(7&e)}}return n},fromJSON(e){const t=be({},ve);return void 0!==e.maxWidth&&null!==e.maxWidth?t.maxWidth=Number(e.maxWidth):t.maxWidth=0,void 0!==e.maxHeight&&null!==e.maxHeight?t.maxHeight=Number(e.maxHeight):t.maxHeight=0,void 0!==e.url&&null!==e.url?t.url=String(e.url):t.url="",t},fromPartial(e){const t=be({},ve);return void 0!==e.maxWidth&&null!==e.maxWidth?t.maxWidth=e.maxWidth:t.maxWidth=0,void 0!==e.maxHeight&&null!==e.maxHeight?t.maxHeight=e.maxHeight:t.maxHeight=0,void 0!==e.url&&null!==e.url?t.url=e.url:t.url="",t},toJSON(e){const t={};return void 0!==e.maxWidth&&(t.maxWidth=e.maxWidth),void 0!==e.maxHeight&&(t.maxHeight=e.maxHeight),void 0!==e.url&&(t.url=e.url),t}},ke={encode(e,t=Y.Writer.create()){void 0!==e.username&&void 0!==e.username&&ge.encode({value:e.username},t.uint32(10).fork()).ldelim(),void 0!==e.name&&void 0!==e.name&&ge.encode({value:e.name},t.uint32(18).fork()).ldelim();for(const a of e.images)Ee.encode(a,t.uint32(26).fork()).ldelim();return void 0!==e.verified&&void 0!==e.verified&&me.encode({value:e.verified},t.uint32(34).fork()).ldelim(),void 0!==e.editProfileDisabled&&void 0!==e.editProfileDisabled&&me.encode({value:e.editProfileDisabled},t.uint32(42).fork()).ldelim(),void 0!==e.reportAbuseDisabled&&void 0!==e.reportAbuseDisabled&&me.encode({value:e.reportAbuseDisabled},t.uint32(50).fork()).ldelim(),void 0!==e.abuseReportedName&&void 0!==e.abuseReportedName&&me.encode({value:e.abuseReportedName},t.uint32(58).fork()).ldelim(),void 0!==e.abuseReportedImage&&void 0!==e.abuseReportedImage&&me.encode({value:e.abuseReportedImage},t.uint32(66).fork()).ldelim(),void 0!==e.hasSpotifyName&&void 0!==e.hasSpotifyName&&me.encode({value:e.hasSpotifyName},t.uint32(74).fork()).ldelim(),void 0!==e.hasSpotifyImage&&void 0!==e.hasSpotifyImage&&me.encode({value:e.hasSpotifyImage},t.uint32(82).fork()).ldelim(),void 0!==e.color&&void 0!==e.color&&ue.encode({value:e.color},t.uint32(90).fork()).ldelim(),t},decode(e,t){const a=e instanceof Uint8Array?new Y.Reader(e):e;let r=void 0===t?a.len:a.pos+t;const n=be({},he);for(n.images=[];a.pos<r;){const e=a.uint32();switch(e>>>3){case 1:n.username=ge.decode(a,a.uint32()).value;break;case 2:n.name=ge.decode(a,a.uint32()).value;break;case 3:n.images.push(Ee.decode(a,a.uint32()));break;case 4:n.verified=me.decode(a,a.uint32()).value;break;case 5:n.editProfileDisabled=me.decode(a,a.uint32()).value;break;case 6:n.reportAbuseDisabled=me.decode(a,a.uint32()).value;break;case 7:n.abuseReportedName=me.decode(a,a.uint32()).value;break;case 8:n.abuseReportedImage=me.decode(a,a.uint32()).value;break;case 9:n.hasSpotifyName=me.decode(a,a.uint32()).value;break;case 10:n.hasSpotifyImage=me.decode(a,a.uint32()).value;break;case 11:n.color=ue.decode(a,a.uint32()).value;break;default:a.skipType(7&e)}}return n},fromJSON(e){const t=be({},he);if(t.images=[],void 0!==e.username&&null!==e.username?t.username=String(e.username):t.username=void 0,void 0!==e.name&&null!==e.name?t.name=String(e.name):t.name=void 0,void 0!==e.images&&null!==e.images)for(const a of e.images)t.images.push(Ee.fromJSON(a));return void 0!==e.verified&&null!==e.verified?t.verified=Boolean(e.verified):t.verified=void 0,void 0!==e.editProfileDisabled&&null!==e.editProfileDisabled?t.editProfileDisabled=Boolean(e.editProfileDisabled):t.editProfileDisabled=void 0,void 0!==e.reportAbuseDisabled&&null!==e.reportAbuseDisabled?t.reportAbuseDisabled=Boolean(e.reportAbuseDisabled):t.reportAbuseDisabled=void 0,void 0!==e.abuseReportedName&&null!==e.abuseReportedName?t.abuseReportedName=Boolean(e.abuseReportedName):t.abuseReportedName=void 0,void 0!==e.abuseReportedImage&&null!==e.abuseReportedImage?t.abuseReportedImage=Boolean(e.abuseReportedImage):t.abuseReportedImage=void 0,void 0!==e.hasSpotifyName&&null!==e.hasSpotifyName?t.hasSpotifyName=Boolean(e.hasSpotifyName):t.hasSpotifyName=void 0,void 0!==e.hasSpotifyImage&&null!==e.hasSpotifyImage?t.hasSpotifyImage=Boolean(e.hasSpotifyImage):t.hasSpotifyImage=void 0,void 0!==e.color&&null!==e.color?t.color=Number(e.color):t.color=void 0,t},fromPartial(e){const t=be({},he);if(t.images=[],void 0!==e.username&&null!==e.username?t.username=e.username:t.username=void 0,void 0!==e.name&&null!==e.name?t.name=e.name:t.name=void 0,void 0!==e.images&&null!==e.images)for(const a of e.images)t.images.push(Ee.fromPartial(a));return void 0!==e.verified&&null!==e.verified?t.verified=e.verified:t.verified=void 0,void 0!==e.editProfileDisabled&&null!==e.editProfileDisabled?t.editProfileDisabled=e.editProfileDisabled:t.editProfileDisabled=void 0,void 0!==e.reportAbuseDisabled&&null!==e.reportAbuseDisabled?t.reportAbuseDisabled=e.reportAbuseDisabled:t.reportAbuseDisabled=void 0,void 0!==e.abuseReportedName&&null!==e.abuseReportedName?t.abuseReportedName=e.abuseReportedName:t.abuseReportedName=void 0,void 0!==e.abuseReportedImage&&null!==e.abuseReportedImage?t.abuseReportedImage=e.abuseReportedImage:t.abuseReportedImage=void 0,void 0!==e.hasSpotifyName&&null!==e.hasSpotifyName?t.hasSpotifyName=e.hasSpotifyName:t.hasSpotifyName=void 0,void 0!==e.hasSpotifyImage&&null!==e.hasSpotifyImage?t.hasSpotifyImage=e.hasSpotifyImage:t.hasSpotifyImage=void 0,void 0!==e.color&&null!==e.color?t.color=e.color:t.color=void 0,t},toJSON(e){const t={};return void 0!==e.username&&(t.username=e.username),void 0!==e.name&&(t.name=e.name),e.images?t.images=e.images.map((e=>e?Ee.toJSON(e):void 0)):t.images=[],void 0!==e.verified&&(t.verified=e.verified),void 0!==e.editProfileDisabled&&(t.editProfileDisabled=e.editProfileDisabled),void 0!==e.reportAbuseDisabled&&(t.reportAbuseDisabled=e.reportAbuseDisabled),void 0!==e.abuseReportedName&&(t.abuseReportedName=e.abuseReportedName),void 0!==e.abuseReportedImage&&(t.abuseReportedImage=e.abuseReportedImage),void 0!==e.hasSpotifyName&&(t.hasSpotifyName=e.hasSpotifyName),void 0!==e.hasSpotifyImage&&(t.hasSpotifyImage=e.hasSpotifyImage),void 0!==e.color&&(t.color=e.color),t}},we={encode:(e,t=Y.Writer.create())=>(void 0!==e.mask&&void 0!==e.mask&&re.encode(e.mask,t.uint32(10).fork()).ldelim(),void 0!==e.userProfile&&void 0!==e.userProfile&&ke.encode(e.userProfile,t.uint32(18).fork()).ldelim(),t),decode(e,t){const a=e instanceof Uint8Array?new Y.Reader(e):e;let r=void 0===t?a.len:a.pos+t;const n=be({},ye);for(;a.pos<r;){const e=a.uint32();switch(e>>>3){case 1:n.mask=re.decode(a,a.uint32());break;case 2:n.userProfile=ke.decode(a,a.uint32());break;default:a.skipType(7&e)}}return n},fromJSON(e){const t=be({},ye);return void 0!==e.mask&&null!==e.mask?t.mask=re.fromJSON(e.mask):t.mask=void 0,void 0!==e.userProfile&&null!==e.userProfile?t.userProfile=ke.fromJSON(e.userProfile):t.userProfile=void 0,t},fromPartial(e){const t=be({},ye);return void 0!==e.mask&&null!==e.mask?t.mask=re.fromPartial(e.mask):t.mask=void 0,void 0!==e.userProfile&&null!==e.userProfile?t.userProfile=ke.fromPartial(e.userProfile):t.userProfile=void 0,t},toJSON(e){const t={};return void 0!==e.mask&&(t.mask=e.mask?re.toJSON(e.mask):void 0),void 0!==e.userProfile&&(t.userProfile=e.userProfile?ke.toJSON(e.userProfile):void 0),t}},Oe=`${q.XA}/identity`;async function Pe(e,t,{name:a,imageUploadToken:r}){void 0!==a&&await async function(e,t,a){const r=we.encode(we.fromPartial({mask:{paths:["name"]},userProfile:null!==a?{name:a}:{}}));await e.build().withHost(Oe).withMethod("POST").withPath(`/v3/user/username/${encodeURIComponent(t)}`).withEndpointIdentifier("/v3/user/username/{username}").withBody(r.finish()).withoutMarket().send()}(e,t,a),void 0!==r&&(null!==r?await async function(e,t,a){await e.build().withHost(Oe).withMethod("POST").withPath(`/v3/profile-image/${encodeURIComponent(t)}/${a}`).withEndpointIdentifier("/v3/profile-image/{username}/{uploadToken}").withoutMarket().send()}(e,t,r):await async function(e,t){await e.build().withHost(Oe).withMethod("DELETE").withPath(`/v3/profile-image/${encodeURIComponent(t)}`).withEndpointIdentifier("/v3/profile-image/{username}").withoutMarket().send()}(e,t))}var Ie=a(59650);var _e=a(56387),Ne=a(32321),Se=a(22117),xe="profile-editUserImage-imageContainer",De="profile-editUserImage-buttonContainer",Re="profile-editUserImage-button",Ae="profile-editUserImage-overlay",Ce="profile-editUserImage-icon";const Me=function({onClickEdit:e,onClickRemove:t,name:a,images:r}){const[o,i]=(0,m.RH)(r),s=(0,Se.VO)(o,i)===Se.KO.loaded;return n().createElement("div",{className:xe},n().createElement(m.Oe,{loading:"eager",name:a,images:r,placeholderType:"user",shape:m.Kc.CIRCLE}),n().createElement("div",{className:d()(De,{[Ae]:s})},n().createElement("button",{className:Re,"aria-haspopup":"true",onClick:e,type:"button"},n().createElement(C.Dy,null,v.ag.get("user.edit-details.choose-photo"))),n().createElement("div",{className:d()(Ce,"icon")},n().createElement(Ne.f,{iconSize:48,"aria-hidden":!0})),n().createElement("button",{className:Re,onClick:t,type:"button"},n().createElement(C.Dy,null,v.ag.get("user.edit-details.remove-photo")))))},Te=n().memo((({userId:e,name:t,image:a,onClose:o,shouldOpenImagePicker:i})=>{const[s,l]=(0,_e.Hs)(),[c,u]=function({name:e,image:t}){return(0,r.useReducer)(K,{loading:!1,message:null,name:e,image:t})}({name:t,image:a}),m=(0,r.useMemo)((()=>{const e=c.imageData||c.image;return e?[{url:e,width:300,height:300}]:[]}),[c.image,c.imageData]);(0,r.useEffect)((()=>{i&&l()}),[l,i]);const g=(0,r.useCallback)((e=>{e===_e.Hy.FILE_TOO_BIG?u($(G)):e===_e.Hy.IMAGE_TOO_SMALL&&u($(Q))}),[u]),f=(0,r.useCallback)((()=>{u({type:"removeImage"})}),[u]),p=(0,r.useCallback)((async t=>{t.preventDefault();if(0!==c.name.trim().length){u(F(!0));try{const t=c.removeImage?null:c.imageToken;await async function(e,{name:t,imageUploadToken:a}){await Pe(Ie.b.getInstance(),e,{name:t,imageUploadToken:a})}(e,{name:c.name,imageUploadToken:t}),o({name:c.name,image:c.imageData||c.image})}catch(e){u($(X))}}else u($(V))}),[u,o,c.image,c.imageData,c.imageToken,c.name,c.removeImage,e]);return n().createElement(M.Z,{isOpen:!0,contentLabel:v.ag.get("user.edit-details.title"),onRequestClose:()=>o()},n().createElement("div",{className:j.container},n().createElement("div",{className:j.header},n().createElement(C.Dy,{as:"h1",className:j.heading,variant:C.Dy.canon},v.ag.get("user.edit-details.title")),n().createElement("button",{className:j.closeBtn,onClick:()=>o(),"aria-label":v.ag.get("close")},n().createElement(T.j,{iconSize:16}))),c.message&&n().createElement(z.X,{isErrorMessage:"error"===c.message.type,message:c.message.message}),n().createElement("form",{className:j.content,onSubmit:p},n().createElement(_e.uL,{isOpen:s,minImageWidth:300,minImageHeight:300,maxFileSizeMB:4,onChange:async function(e){if(!e)return;const{imageFile:t,imageDataUrl:a}=e;if(u($(null)),u({type:"setImageData",data:a}),t)try{u(F(!0));const e=await async function(e){const t=await Ie.b.getInstance().build().withEndpointIdentifier("image-upload/v4/user-profile").withHost("https://image-upload.spotify.com/v4").withMethod("POST").withPath("/user-profile").withBody(e).withoutGlobalHeaders().withHeaders([{key:"Content-Type",value:"image/jpeg"}]).withoutMarket().send();if(!t.body)throw new Error("No upload token recieved");return t.body.uploadToken}(t);u({type:"setImageToken",token:e}),u(F(!1))}catch{u($(Z))}},onError:g}),n().createElement("div",{className:j.image},n().createElement(Me,{name:t,images:m,onClickEdit:l,onClickRemove:f}),c.loading&&n().createElement("div",{className:j.imageLoadingContainer},n().createElement(U.T,null))),n().createElement("div",{className:j.name},n().createElement("label",{htmlFor:"user-edit-name",className:j.textElementLabel},n().createElement(C.Dy,{as:"span",variant:C.$e.finaleBold,className:j.labelText},v.ag.get("user.edit-details.name-label"))),n().createElement("input",{"data-testid":"user-edit-name-input",id:"user-edit-name",type:"text",dir:"auto",className:d()(j.textElement,j.nameInput),onChange:e=>{u(function(e){return{type:"setName",name:e}}(e.target.value))},placeholder:v.ag.get("user.edit-details.name-placeholder"),maxLength:32,value:c.name})),n().createElement(W.Y,{version:"secondary",className:j.save,onClick:p,disabled:c.loading},v.ag.get("save")),n().createElement(C.Dy,{as:"p",variant:C.$e.finaleBold,className:j.disclaimer},v.ag.get("image-upload.legal-disclaimer")))))}));var Ue=a(28314),je=a(1391),We=a(88886),He=a(22202),Je=a(27272),Le=a(69231);function Be(e,t){switch(t.type){case"OPEN_MODAL":return{isModalOpen:!0,shouldOpenImagePicker:!1};case"OPEN_MODAL_WITH_IMAGEPICKER":return{isModalOpen:!0,shouldOpenImagePicker:!0};case"CLOSE_MODAL":return{isModalOpen:!1,shouldOpenImagePicker:!1};default:return e}}var Fe=a(410),$e=a(39536),Ke=a(12275),ze=a(191),Ge=a(79378),Qe=a(50878),Ve=a(61750),Xe=a(40299),Ze=a(31645),qe=a(70685),Ye=a(64619);const et=n().memo((({tracks:e,hasHeaderRow:t=!1,nrTracksVisible:a,userId:o})=>{const i=s().userToplistURI(o,"tracks").toURI(),l=a?e.slice(0,a):e,{usePlayContextItem:c}=(0,qe.n)({uri:i,pages:[{items:e.map((e=>({type:Ye.p.TRACK,uri:e.uri,uid:null})))}]},{featureIdentifier:"profile",referrerIdentifier:"user_profile"}),d=(0,r.useCallback)(((e,t)=>{var a;const r=(0,Xe.X)(null==e||null===(a=e.album)||void 0===a?void 0:a.images,{desiredSize:40});return n().createElement(Ze.SS,{key:t+e.uri,index:t,uri:(0,Ve.$V)(e),duration_ms:e.duration_ms,name:e.name,artists:e.artists,album:e.album,isPlayable:!0,isExplicit:!!e.explicit,isMOGEFRestricted:!!e.mogef19,imgUrl:(null==r?void 0:r.url)||"",contextUri:i,usePlayContextItem:c})}),[i,c]);return n().createElement(Qe.ZP,{value:"user-top-tracks-tracklist"},n().createElement(Ge.Pv,{ariaLabel:v.ag.get("top_tracks_this_month"),renderRow:d,nrTracks:l.length,tracks:l,resolveUri:e=>e.uri,hasHeaderRow:t,columns:[Ge.QD.INDEX,Ge.QD.TITLE,Ge.QD.ALBUM,Ge.QD.DURATION]}))}),((e,t)=>e.tracks===t.tracks)),tt=n().memo((({tracks:e,title:t,tagline:a,seeAllUri:r,className:o,userId:i})=>{if(!e||0===e.length)return null;const s=e.length>4;return n().createElement("section",{className:o},n().createElement(ze.r,{title:t,tagline:a,seeAllUri:r,hasMoreElements:s}),n().createElement(et,{tracks:e,userId:i,nrTracksVisible:4}))}),((e,t)=>e.tracks===t.tracks));var at=a(69365),rt=a(16189),nt=a(33954);const ot=e=>{var t,a;const o=(0,l.v9)(je.Gf),i=(0,l.v9)(je.A$),{userId:c}=e,N=s().profileURI(c.split("&")[0]).toURI(),x=(0,l.I0)(),C=(0,r.useMemo)((()=>(0,Xe.X)(i)),[i]),[{isModalOpen:M,shouldOpenImagePicker:T},U]=function(){const[e,t]=(0,r.useReducer)(Be,{isModalOpen:!1,shouldOpenImagePicker:!1});return[e,t]}(),j=(0,k.o)(),W=!(0,w.k)(),{data:H,loading:J}=(0,O.J)(P.n5.getProfile,[{username:c,playlists:10,artists:10}]),L=null==H?void 0:H.body,B=null==L?void 0:L.public_playlists,F=null==L?void 0:L.is_following,$=null==L?void 0:L.is_verified,K=(null==L?void 0:L.is_current_user)||!1,z=null==L?void 0:L.recently_played_artists,G=K?(null==C?void 0:C.url)||"":(null==L?void 0:L.image_url)||"",Q=(0,l.v9)((e=>e.entities.follows[N])),V=(0,l.v9)(nt.C),X=(K?o:null==L?void 0:L.name)||"",Z=(0,$e.Z)((null==L?void 0:L.image_url)||null),{data:q,loading:Y}=(0,O.J)(P.n5.getFollowing,[c]),ee=null==q||null===(t=q.body)||void 0===t?void 0:t.profiles,{data:te,loading:ae}=(0,O.J)(P.n5.getFollowers,[c]),re=null==te||null===(a=te.body)||void 0===a?void 0:a.profiles,ne=(0,r.useMemo)((()=>(e=>e?P.n5.getUserTopArtists:()=>Promise.resolve({status:200,body:{items:[],offset:0,limit:0,total:0,href:"",next:null,previous:null}}))(K)),[K]),oe=(0,r.useMemo)((()=>(e=>e?P.n5.getUserTopTracks:()=>Promise.resolve({status:200,body:{items:[],offset:0,limit:0,total:0,href:"",next:null,previous:null}}))(K&&!V)),[K,V]),{data:ie,loading:se}=(0,O.J)(ne,[]),{data:le,loading:ce}=(0,O.J)(oe,[]),de=null==ie?void 0:ie.body,ue=null==le?void 0:le.body,me=(0,r.useCallback)((()=>{j({targetUri:N,intent:Q?"unfollow":"follow",type:"click"}),x(Q?(0,b.Oi)([N]):(0,b.cQ)([N]))}),[x,j,N,Q]);(0,r.useEffect)((()=>{X&&x((0,p.Dk)(X))}),[x,X]),(0,r.useEffect)((()=>{void 0===Q&&void 0!==F&&x((0,b.NU)(N,F))}),[x,Q,F,N]);const ge=(0,r.useCallback)((e=>{U({type:"CLOSE_MODAL"}),e&&(x((0,Ue.dL)(e.name)),x((0,Ue.GR)(e.image?[{url:e.image,height:null,width:null}]:[])))}),[x,U]),fe=(0,r.useCallback)((()=>U({type:"OPEN_MODAL"})),[U]),pe=(0,r.useCallback)((()=>{U({type:"OPEN_MODAL_WITH_IMAGEPICKER"})}),[U]),be=(0,r.useMemo)((()=>D(ee)),[ee]),ve=(0,r.useMemo)((()=>D(re)),[re]),he=(0,r.useMemo)((()=>(B||[]).map(S)),[B]),ye=(0,r.useMemo)((()=>(z||[]).map(R)),[z]),Ee=(0,r.useMemo)((()=>[{url:G}]),[G]);if(!L||J||Y||ae||ce||se)return n().createElement(h.h,{errorMessage:v.ag.get("error.not_found.title.page")});const ke={total:L.followers_count},we=d()("contentSpacing",u.section,u.shelf);return n().createElement("div",{className:u.user},n().createElement(m.gF,{backgroundColor:Z},n().createElement(g.W,null,n().createElement(f.i,{text:X})),n().createElement(Ke._,{menu:n().createElement(He.I,{uri:L.uri})},n().createElement("div",{className:u.imageContainer},n().createElement(Le.T,{canEdit:K,name:X,images:Ee,onClick:pe,placeholderType:"user",shape:m.Kc.CIRCLE}))),n().createElement(m.sP,null,n().createElement(m.dy,{small:!0,uppercase:!0},$&&n().createElement("span",{className:u.userVerifiedBadge},n().createElement(rt.S,null)),v.ag.get("card.tag.profile")),n().createElement(Ke._,{menu:n().createElement(He.I,{uri:L.uri})},n().createElement(m.xd,{canEdit:K,editTitle:v.ag.get("playlist.edit-details.title"),onClick:fe},X)),n().createElement(m.QS,{totalFollowers:ke.total,totalFollowing:be.length,publicPlaylists:L.total_public_playlists_count,userId:c}))),n().createElement(E.o,{backgroundColor:Z},n().createElement(E.F,null,!K&&n().createElement(at.r,null,n().createElement(y.e,{isFollowing:Boolean(Q),onClick:me,disabled:W})),n().createElement(We.y,{menu:n().createElement(He.I,{uri:L.uri,onEditProfileCallback:fe})},n().createElement(Je.z,null)))),n().createElement(_.P,{className:we,total:(null==de?void 0:de.total)||0,title:v.ag.get("top_artists_this_month"),tagline:v.ag.get("only_visible_to_you"),seeAllUri:`spotify:app:user:${c}:top:artists`},null==de?void 0:de.items.map((e=>n().createElement(Fe.I,{key:e.uri,entity:e})))),n().createElement(tt,{className:we,title:v.ag.get("top_tracks_this_month"),tagline:v.ag.get("only_visible_to_you"),seeAllUri:`spotify:app:user:${c}:top:tracks`,userId:c,tracks:null==ue?void 0:ue.items}),n().createElement(_.P,{className:we,total:L.total_public_playlists_count,title:v.ag.get("public_playlists"),seeAllUri:`spotify:app:user:${c}:playlists`},he.map((e=>n().createElement(A.Z,{key:e.uri,entity:e})))),ye.length?n().createElement(_.P,{className:we,total:ye.length,title:v.ag.get("recently_played_artists"),seeAllUri:`spotify:app:user:${c}:recently-played-artists`},ye.map((e=>n().createElement(Fe.I,{key:e.uri,entity:e})))):null,ve.length?n().createElement(_.P,{className:we,title:v.ag.get("followers"),total:ve.length,seeAllUri:`spotify:app:user:${c}:followers`},ve.map((e=>{const t=(0,I.U)(e.uri);return n().createElement(t,{key:e.uri,entity:e})}))):null,be.length?n().createElement(_.P,{className:we,title:v.ag.get("following"),total:be.length,seeAllUri:`spotify:app:user:${c}:following`},be.map((e=>{const t=(0,I.U)(e.uri);return n().createElement(t,{key:e.uri,entity:e})}))):null,K&&M?n().createElement(Te,{userId:c,name:X,image:G,onClose:ge,shouldOpenImagePicker:T}):null)},it=e=>{var t;const{userId:a}=e,{data:o,loading:i}=(0,O.J)(P.n5.getFollowing,[a]),s=null==o||null===(t=o.body)||void 0===t?void 0:t.profiles,l=(0,r.useMemo)((()=>D(s)),[s]);return i?n().createElement(h.h,{errorMessage:v.ag.get("error.not_found.title.page")}):n().createElement(_.P,{className:d()("contentSpacing",u.subPage),title:v.ag.get("following"),total:l.length,showAll:!0},l.map((e=>{const t=(0,I.U)(e.uri);return n().createElement(t,{entity:e})})))},st=e=>{var t;const{userId:a}=e,{data:o,loading:i}=(0,O.J)(P.n5.getFollowers,[a]),s=null==o||null===(t=o.body)||void 0===t?void 0:t.profiles,l=(0,r.useMemo)((()=>D(s)),[s]);return i?n().createElement(h.h,{errorMessage:v.ag.get("error.not_found.title.page")}):n().createElement(_.P,{className:d()("contentSpacing",u.subPage),title:v.ag.get("followers"),total:l.length,showAll:!0},l.map((e=>{const t=(0,I.U)(e.uri);return n().createElement(t,{entity:e})})))},lt=e=>{const{userId:t}=e,{data:a,loading:o}=(0,O.J)(P.n5.getPlaylists,[{username:t}]),i=null==a?void 0:a.body,{public_playlists:s,total_public_playlists_count:l=0}=i||{},c=(0,r.useMemo)((()=>(s||[]).map(S)),[s]);return o?n().createElement(h.h,{errorMessage:v.ag.get("error.not_found.title.page")}):n().createElement(_.P,{className:d()("contentSpacing",u.subPage),total:l,title:v.ag.get("public_playlists"),showAll:!0},c.map((e=>n().createElement(A.Z,{key:e.uri,entity:e}))))},ct=e=>{var t;const{userId:a}=e,{data:o,loading:i}=(0,O.J)(P.n5.getRecentlyPlayedArtists,[{username:a,limit:50}]),s=null==o||null===(t=o.body)||void 0===t?void 0:t.artists,l=(0,r.useMemo)((()=>(s||[]).map(R)),[s]);return i?n().createElement(h.h,{errorMessage:v.ag.get("error.not_found.title.page")}):n().createElement(_.P,{className:d()("contentSpacing",u.subPage),total:l.length,title:v.ag.get("recently_played_artists"),showAll:!0},l.map((e=>n().createElement(Fe.I,{key:e.uri,entity:e}))))},dt=({userId:e})=>{const{data:t,loading:a}=(0,O.J)(P.n5.getUserTopTracks,[{offset:0,limit:50}]),r=null==t?void 0:t.body;return a?n().createElement(h.h,{errorMessage:v.ag.get("error.not_found.title.page")}):r?n().createElement("div",{className:d()("contentSpacing",u.subPage,u.topTrackSubPage)},n().createElement("div",{className:u.header},n().createElement(C.Dy,{as:"h1",variant:C.Dy.canon,className:u.title},v.ag.get("top_tracks_this_month")),n().createElement(C.Dy,{as:"p",variant:C.Dy.mesto},v.ag.get("only_visible_to_you"))),n().createElement(et,{tracks:r.items,userId:e,hasHeaderRow:!0})):null},ut=({userId:e})=>{const{data:t,loading:a}=(0,O.J)(P.n5.getProfile,[{username:e}]),r=null==t?void 0:t.body,o=(null==r?void 0:r.is_current_user)||!1;return r&&!a&&o?n().createElement(dt,{userId:e}):n().createElement(h.h,{errorMessage:v.ag.get("error.not_found.title.page")})},mt=()=>{const{data:e,loading:t}=(0,O.J)(P.n5.getUserTopArtists),a=null==e?void 0:e.body;return t?n().createElement(h.h,{errorMessage:v.ag.get("error.not_found.title.page")}):a?n().createElement(_.P,{className:d()("contentSpacing",u.subPage),total:a.items.length,title:v.ag.get("top_artists_this_month"),tagline:v.ag.get("only_visible_to_you"),showAll:!0},a.items.map((e=>n().createElement(Fe.I,{key:e.uri,entity:e})))):null},gt=({userId:e})=>{const{data:t,loading:a}=(0,O.J)(P.n5.getProfile,[{username:e}]),r=null==t?void 0:t.body,o=(null==r?void 0:r.is_current_user)||!1;return r&&!a&&o?n().createElement(mt,null):n().createElement(h.h,{errorMessage:v.ag.get("error.not_found.title.page")})},ft=n().memo((()=>{let{userId:e}=(0,o.UO)();return e=decodeURIComponent(e),n().createElement("section",null,n().createElement(o.AW,{exact:!0,path:"/user/:userId/playlists"},n().createElement(lt,{userId:e})),n().createElement(o.AW,{exact:!0,path:"/user/:userId/top/tracks"},n().createElement(ut,{userId:e})),n().createElement(o.AW,{exact:!0,path:"/user/:userId/top/artists"},n().createElement(gt,{userId:e})),n().createElement(o.AW,{exact:!0,path:"/user/:userId/recently-played-artists"},n().createElement(ct,{userId:e})),n().createElement(o.AW,{exact:!0,path:"/user/:userId/following"},n().createElement(it,{userId:e})),n().createElement(o.AW,{exact:!0,path:"/user/:userId/followers"},n().createElement(st,{userId:e})),n().createElement(o.AW,{exact:!0,path:"/user/:userId"},n().createElement(ot,{userId:e})))}));var pt=ft},55003:function(e,t,a){"use strict";a.d(t,{e:function(){return u}});var r=a(27378),n=a.n(r),o=a(35181),i=a(60042),s=a.n(i),l="show-followButton-button",c="show-followButton-isFollowing",d="show-followButton-disabled";const u=n().memo((({isFollowing:e,onClick:t,disabled:a=!1})=>{const r=e?o.ag.get("following"):o.ag.get("follow");return n().createElement("button",{type:"button",className:s()(l,{[c]:e,[d]:a}),onClick:t},r)}))},16189:function(e,t,a){"use strict";a.d(t,{S:function(){return o}});var r=a(27378),n=a.n(r);const o=()=>n().createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n().createElement("path",{d:"M12 21.6596l-3.38079 1.8543-1.84158-3.3877-3.84662-.2679.28231-3.8456-3.09118-2.3049 2.31658-3.0825-1.3543-3.61028 3.61534-1.34071.81255-3.76935 3.76627.82672L12 0l2.7214 2.73168 3.7663-.82672.8125 3.76935 3.6154 1.34071-1.3543 3.61028 2.3166 3.0825-3.0912 2.3049.2823 3.8456-3.8466.2679-1.8416 3.3877L12 21.6596z",fill:"#2E77D0"}),n().createElement("path",{d:"M16.8637 7.41226l-6.6435 7.77824-2.80421-3.2842-.4935.5775 3.29771 3.8617 7.2135-8.44649-.57-.48675z",fill:"#fff"}))}}]);
//# sourceMappingURL=xpui-routes-profile.js.map