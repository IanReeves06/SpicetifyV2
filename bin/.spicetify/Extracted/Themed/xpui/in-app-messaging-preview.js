(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[924],{7326:function(e,t,n){"use strict";n.r(t),n.d(t,{InAppMessagingPreviewTool:function(){return g},default:function(){return m}});var a=n(27378),l=n.n(a),s=n(79308),i=n(25645),c=n(81460),r=n(64954),o="in-app-messaging-preview-previewTool-container",p="in-app-messaging-preview-previewTool-form",d="in-app-messaging-preview-previewTool-formInput",u="in-app-messaging-preview-previewTool-errorMessage";const v=[{label:"Production",value:"prod"},{label:"Development",value:"dev"}],g=()=>{const e=(0,s.I0)(),t=(0,s.v9)((e=>e.inAppMessaging.env)),n=(0,s.v9)((e=>e.inAppMessaging.message)),[g,m]=(0,a.useState)(""),[f,E]=(0,a.useState)(""),[b,A]=(0,a.useState)(!1);(0,a.useEffect)((()=>{n&&b&&A(!1)}),[n,b]);const k=!n&&b;return l().createElement("div",{className:o},l().createElement("h1",null,"In-App Messaging Preview"),l().createElement("div",{className:p},l().createElement("div",null,l().createElement("label",{htmlFor:"desktop.settings.inAppMessagingEnv"},"Mode (endpoint):")),l().createElement(c.v,{dir:"auto",value:t,id:"desktop.settings.inAppMessagingEnv",onSelect:function(t){"prod"!==t&&"dev"!==t||e((0,i.q1)(t))}},v.map((({label:e,value:t})=>l().createElement("option",{key:t,value:t},e)))),l().createElement("div",null,l().createElement("label",{htmlFor:"desktop.settings.inAppMessagingCreativeId"},"Creative Id:")),l().createElement("div",null,l().createElement("input",{className:d,placeholder:"(eg. 12123434)",id:"desktop.settings.inAppMessagingCreativeId",name:"Creative Id",type:"text",value:g,onChange:function(e){m(e.target.value),A(!1)}})),l().createElement("div",null,l().createElement("label",{htmlFor:"desktop.settings.inAppMessagingAppUri"},"URI for Dynamic Content (optional):")),l().createElement("div",null,l().createElement("input",{className:d,placeholder:"(eg. spotify:artist:123)",id:"desktop.settings.inAppMessagingAppUri",name:"App Uri",type:"text",value:f,onChange:function(e){E(e.target.value),A(!1)}})),l().createElement("div",null),l().createElement("div",null),l().createElement("div",null,l().createElement(r.z,{version:"secondary",onClick:function(t){t.preventDefault(),e((0,i.XJ)(g,f)),A(!1),window.setTimeout((()=>{A(!0)}),1e3)}},"Get Preview")),k&&l().createElement("div",{className:u},"No Messsage found")))};var m=g}}]);
//# sourceMappingURL=in-app-messaging-preview.js.map