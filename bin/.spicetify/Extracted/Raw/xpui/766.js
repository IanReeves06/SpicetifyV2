(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[766],{2028:function(e,t,n){"use strict";n.d(t,{u:function(){return T}});var r=n(27378),a=n.n(r),l=n(60042),o=n.n(l),c=n(9807),s=n(64954),i="x-emptyState-container",A="x-emptyState-renderInline",u="x-emptyState-button",E="x-emptyState-title",d="x-emptyState-subtitle",D=n(99498);const T=a().memo((e=>{const{children:t,message:n,title:r,linkTitle:l,linkTo:T,onClick:f,renderInline:C=!1}=e,{isXSOnly:_,isSMOnly:L}=(0,D.e)(),S=_||L;return a().createElement("section",{className:o()(i,{[A]:C})},t,a().createElement(c.Dy.h1,{variant:S?c.Dy.cello:c.Dy.alto,className:E},r),a().createElement(c.Dy,{variant:S?c.Dy.mesto:c.Dy.ballad,className:d},n),l&&(T||f)&&a().createElement(s.z,{version:"secondary",className:u,linkTo:T,onClick:f},l))}))},87405:function(e,t,n){"use strict";n.d(t,{K:function(){return D}});var r=n(27378),a=n.n(r),l={filterInputContainer:"x-filterBox-filterInputContainer",expanded:"x-filterBox-expanded",expandButton:"x-filterBox-expandButton",filterInput:"x-filterBox-filterInput",overlay:"x-filterBox-overlay",searchIconContainer:"x-filterBox-searchIconContainer",searchIcon:"x-filterBox-searchIcon",clearButton:"x-filterBox-clearButton"},o=n(13737),c=n(35181),s=n(84277),i=n(16582),A=n(18499),u=n(91421),E=n(60042),d=n.n(E);const D=a().memo((({alwaysExpanded:e=!1,placeholder:t,filterBoxApiRef:n,outerRef:E})=>{const{filter:D,setFilter:T}=(0,r.useContext)(A.fo),[f,C]=(0,r.useState)(e||!!D),[_,L]=(0,r.useState)(D),S=(0,r.useRef)(null),m=null!=E?E:S;(0,s.J4)(s.sN.FILTER);const R=(0,u.y)((e=>{T(e)}),200),b=(0,r.useCallback)((()=>{L(""),R("")}),[L,R]);(0,r.useImperativeHandle)(n,(()=>({clearFilter:b})));const O=(0,r.useCallback)((()=>{var e;C(!0),null===(e=m.current)||void 0===e||e.focus()}),[C,m]);(0,s.eY)(s.O4.FILTER,O);const p=(0,r.useCallback)((e=>{const t=e.currentTarget.value;L(t),R(t)}),[R,L]),I=(0,r.useCallback)((()=>{var e;null===(e=m.current)||void 0===e||e.focus(),b()}),[b,m]),N=(0,r.useCallback)((()=>{_||e||C(!1)}),[_,e,C]),h=(0,r.useCallback)((e=>{"Escape"===e.key&&_&&I()}),[_,I]);return a().createElement("div",{className:d()(l.filterInputContainer,{[l.expanded]:f}),role:"search"},a().createElement("input",{ref:m,className:d()(l.filterInput),role:"searchbox",maxLength:80,autoCorrect:"off",autoCapitalize:"off",spellCheck:!1,placeholder:t,onChange:p,onKeyDown:h,onBlur:N,value:_,"aria-hidden":!f,tabIndex:f?void 0:-1}),a().createElement("div",{className:l.overlay},a().createElement("span",{className:l.searchIconContainer},a().createElement(i.h,{iconSize:16,className:l.searchIcon,"aria-hidden":!0})),_&&a().createElement("button",{className:l.clearButton,onClick:I,"aria-label":c.ag.get("search.a11y.clear-input")},a().createElement(o.T,{size:16,className:l.filterInputIcon}))),a().createElement("button",{className:l.expandButton,onClick:O,"data-testid":"expand-button","aria-hidden":f,tabIndex:f?-1:void 0},a().createElement(i.h,{iconSize:16,className:l.searchIcon})))}))},6953:function(e,t,n){"use strict";n.d(t,{A:function(){return L}});var r=n(27378),a=n.n(r),l=n(60042),o=n.n(l),c="x-sortBox-sortDropdown",s="x-sortBox-sortDropdownChanged",i=n(9807),A=n(55256),u=n(11890),E=n(88886),d=n(34761),D=n(79744),T=n(13160),f=n(46191),C=n(79378);const _=({selected:e,onSelect:t,options:n,sortOrder:r})=>{let l;return r&&(r===C.kn.ASC||r===C.kn.SECONDARY_ASC?l=a().createElement(T.c,{iconSize:16}):r!==C.kn.DESC&&r!==C.kn.SECONDARY_DESC||(l=a().createElement(f.e,{iconSize:16}))),a().createElement(d.v,null,n.map((({key:n,value:r})=>a().createElement(D.s,{role:"menuitemradio","aria-checked":n===e.key&&!l,key:n,onClick:()=>t(n),icon:n===e.key&&l},a().createElement(i.Dy,{variant:i.Dy.mesto},r)))))};const L=({options:e,selected:t,onSelect:n,isSelectionChanged:r,sortOrder:l})=>{const[d]=e;t||(t=d);const D=r?r(t):t!==d;return a().createElement(E.y,{renderInline:!0,menu:a().createElement(_,{selected:t,options:e,onSelect:n,sortOrder:l})},((e,n,r)=>a().createElement("button",{className:o()(c,{[s]:D}),onClick:n,ref:r,type:"button"},a().createElement(i.Dy,{variant:i.Dy.mesto},t.value),e?a().createElement(A.q,{iconSize:16}):a().createElement(u.m,{iconSize:16}))))}},2315:function(e,t,n){"use strict";n.d(t,{oT:function(){return A},ei:function(){return E},MY:function(){return d},$u:function(){return D},Ru:function(){return T},Aq:function(){return C},o$:function(){return _},e3:function(){return S},a6:function(){return m},EY:function(){return b},$2:function(){return O},sv:function(){return I},_s:function(){return N},w0:function(){return h},pT:function(){return k},WQ:function(){return B},mE:function(){return P}});var r=n(23422),a=n(45875),l=n(75610),o=n(35181),c=n(83553),s=n(86452),i=n(79378);let A;!function(e){e.SHOW_ALPHABETICAL="SHOW_ALPHABETICAL",e.EPISODE_ALPHABETICAL="EPISODE_ALPHABETICAL",e.PLAYLIST_ALPHABETICAL="PLAYLIST_ALPHABETICAL",e.ALBUM_ALPHABETICAL="ALBUM_ALPHABETICAL",e.ADDED_AT="ADDED_AT",e.CREATOR_NAME="CREATOR_NAME",e.ALBUM_CREATOR_NAME="ALBUM_CREATOR_NAME",e.RECENTLY_PLAYED="RECENTLY_PLAYED",e.MOST_RELEVANT="MOST_RELEVANT",e.CUSTOM_ORDER="CUSTOM_ORDER"}(A||(A={}));const u={[a.yW.NAME]:s.hI.TITLE,[a.yW.SHOW_NAME]:s.hI.SHOW,[a.yW.ADDED_AT]:s.hI.ADDED_AT},E={"show-alphabetical":A.SHOW_ALPHABETICAL,"episode-alphabetical":A.EPISODE_ALPHABETICAL,"playlist-alphabetical":A.PLAYLIST_ALPHABETICAL,"album-alphabetical":A.ALBUM_ALPHABETICAL,"recently-added":A.ADDED_AT,"creator-name":A.CREATOR_NAME,"album-creator-name":A.ALBUM_CREATOR_NAME,"recently-played":A.RECENTLY_PLAYED,"playlist-most-relevant":A.MOST_RELEVANT,"playlist-custom-order":A.CUSTOM_ORDER},d={[A.RECENTLY_PLAYED]:{key:"recently-played",value:o.ag.get("collection.sort.recently-played")},[A.ADDED_AT]:{key:"recently-added",value:o.ag.get("collection.sort.recently-added")},[A.SHOW_ALPHABETICAL]:{key:"show-alphabetical",value:o.ag.get("collection.sort.alphabetical")},[A.EPISODE_ALPHABETICAL]:{key:"episode-alphabetical",value:o.ag.get("collection.sort.alphabetical")},[A.PLAYLIST_ALPHABETICAL]:{key:"playlist-alphabetical",value:o.ag.get("collection.sort.alphabetical")},[A.ALBUM_CREATOR_NAME]:{key:"album-creator-name",value:o.ag.get("collection.sort.creator")},[A.CREATOR_NAME]:{key:"creator-name",value:o.ag.get("collection.sort.creator")},[A.ALBUM_ALPHABETICAL]:{key:"album-alphabetical",value:o.ag.get("collection.sort.alphabetical")},[A.MOST_RELEVANT]:{key:"playlist-most-relevant",value:o.ag.get("collection.sort.most-relevant")},[A.CUSTOM_ORDER]:{key:"playlist-custom-order",value:o.ag.get("collection.sort.custom-order")}},D=e=>{if(e)return{field:r.R.TEXT,operator:r.p.CONTAINS,value:e.trim()}},T=[A.ADDED_AT,A.ALBUM_ALPHABETICAL,A.CREATOR_NAME],f={[A.ADDED_AT]:{field:a.lY.ADDED_AT,order:a.As.DESC},[A.ALBUM_ALPHABETICAL]:{field:a.lY.NAME,order:a.As.ASC},[A.CREATOR_NAME]:{field:a.lY.ARTIST_NAME,order:a.As.ASC}},C=e=>{if(T.includes(e))return f[e]},_=[A.ADDED_AT,A.CREATOR_NAME],L={[A.ADDED_AT]:{field:a.hx.ADDED_AT,order:a.As.DESC},[A.CREATOR_NAME]:{field:a.hx.NAME,order:a.As.ASC}},S=e=>{if(_.includes(e))return L[e]},m=[A.ADDED_AT,A.SHOW_ALPHABETICAL],R={[A.ADDED_AT]:{field:a.hx.ADDED_AT,order:a.As.DESC},[A.SHOW_ALPHABETICAL]:{field:a.aW.NAME,order:a.As.ASC}},b=e=>{if(m.includes(e))return R[e]},O=[A.ADDED_AT,A.CREATOR_NAME,A.EPISODE_ALPHABETICAL],p={[A.ADDED_AT]:{field:a.yW.ADDED_AT,order:a.As.DESC},[A.CREATOR_NAME]:{field:a.yW.SHOW_NAME,order:a.As.ASC},[A.EPISODE_ALPHABETICAL]:{field:a.yW.NAME,order:a.As.ASC}},I=e=>{if(O.includes(e))return p[e]},N=e=>{if(!O.includes(e))return;const t=I(e);if(null==t||!t.field)return;const n=u[t.field];if(!n)return;return s.Vd[n].map((e=>t.order?`${e} ${t.order}`:e)).join(",")},h=[A.MOST_RELEVANT,A.RECENTLY_PLAYED,A.ADDED_AT,A.PLAYLIST_ALPHABETICAL,A.CUSTOM_ORDER],y={[A.ADDED_AT]:{field:l.bD.ADDED_AT,order:l.As.DESC},[A.RECENTLY_PLAYED]:{field:l.bD.RECENTLY_PLAYED,order:l.As.ASC},[A.PLAYLIST_ALPHABETICAL]:{field:l.bD.NAME,order:l.As.ASC},[A.MOST_RELEVANT]:{field:l.bD.RELEVANCE,order:l.As.DESC},[A.CUSTOM_ORDER]:void 0},k=e=>{if(h.includes(e))return y[e]},g={"custom-order":c.I5,title:{column:i.QD.TITLE,order:i.kn.ASC},artist:{column:i.QD.TITLE,order:i.kn.SECONDARY_ASC},"added-by":{column:i.QD.ADDED_BY,order:i.kn.ASC},"added-at":{column:i.QD.ADDED_AT,order:i.kn.ASC},duration:{column:i.QD.DURATION,order:i.kn.ASC},album:{column:i.QD.ALBUM,order:i.kn.ASC},"album-or-podcast":{column:i.QD.ALBUM_OR_PODCAST,order:i.kn.ASC},"album-or-show":{column:i.QD.ALBUM_OR_SHOW,order:i.kn.ASC}},v={title:i.QD.TITLE,artist:i.QD.TITLE,"added-by":i.QD.ADDED_BY,"added-at":i.QD.ADDED_AT,duration:i.QD.DURATION,album:i.QD.ALBUM,"album-or-podcast":i.QD.ALBUM_OR_PODCAST,"album-or-show":i.QD.ALBUM_OR_SHOW},M={[i.kn.NONE]:i.kn.NONE,[i.kn.ASC]:i.kn.DESC,[i.kn.DESC]:i.kn.ASC,[i.kn.SECONDARY_ASC]:i.kn.SECONDARY_DESC,[i.kn.SECONDARY_DESC]:i.kn.SECONDARY_ASC},B=(e,t,n)=>e?t!==v[e]||"artist"===e&&[i.kn.ASC,i.kn.DESC].includes(n)||"title"===e&&[i.kn.SECONDARY_ASC,i.kn.SECONDARY_DESC].includes(n)?g[e]:{column:v[e],order:M[n]}:c.I5,P={[i.QD.INDEX]:{key:"custom-order",value:o.ag.get("sort.custom-order")},[i.QD.TITLE]:{key:"title",value:o.ag.get("sort.title")},[i.QD.ARTIST]:{key:"artist",value:o.ag.get("sort.artist")},[i.QD.ADDED_BY]:{key:"added-by",value:o.ag.get("sort.added-by")},[i.QD.ADDED_AT]:{key:"added-at",value:o.ag.get("sort.date-added")},[i.QD.DURATION]:{key:"duration",value:o.ag.get("sort.duration")},[i.QD.EVENT_DATE]:null,[i.QD.ALBUM]:{key:"album",value:o.ag.get("sort.album")},[i.QD.ALBUM_OR_PODCAST]:{key:"album-or-podcast",value:o.ag.get("sort.album-or-podcast")},[i.QD.ALBUM_OR_SHOW]:{key:"album-or-show",value:o.ag.get("sort.album-or-show")},[i.QD.PLAYS]:null,[i.QD.RELEASE_DATE]:null,[i.QD.ADD]:null,[i.QD.ACTIONS]:null}},83553:function(e,t,n){"use strict";n.d(t,{P0:function(){return s},MI:function(){return i},RJ:function(){return A},zq:function(){return u},I5:function(){return E},Gb:function(){return d},kz:function(){return D}});var r=n(27378),a=n.n(r),l=n(33496),o=n(94744),c=n(79378);const s=[c.QD.INDEX,c.QD.TITLE,c.QD.ALBUM,c.QD.ADDED_AT],i=[c.QD.INDEX,c.QD.TITLE,c.QD.ALBUM,c.QD.DURATION],A=[c.QD.INDEX,c.QD.TITLE,c.QD.ALBUM,c.QD.DURATION],u=[c.QD.INDEX,c.QD.TITLE,c.QD.ALBUM,c.QD.ALBUM_OR_PODCAST,c.QD.ALBUM_OR_SHOW,c.QD.ADDED_BY,c.QD.ADDED_AT,c.QD.DURATION],E={column:null,order:l.k.NONE},d=(0,r.createContext)({setSortState:()=>{throw new Error("setSortState must be used within a TracksSortProvider")},sortState:E}),D=a().memo((function({uri:e,children:t}){return a().createElement(o.r,{uri:e,defaultState:E,sortContext:d},t)}))},3108:function(e,t,n){"use strict";n.d(t,{r:function(){return c}});var r=n(27378),a=n(65526),l=n.n(a);class o{constructor(e={}){l()(this,"settings",void 0),l()(this,"currentRegion",void 0),this.settings={level:e.level||"polite",parent:e.parent||document.body,idPrefix:e.idPrefix||"live-region-",delay:e.delay||0},this.currentRegion=document.createElement("span")}say(e,t=this.settings.delay){this.clearNode(),this.currentRegion=document.createElement("span"),this.currentRegion.id=this.settings.idPrefix+Math.floor(1e4*Math.random());const n="assertive"!==this.settings.level?"status":"alert";this.currentRegion.setAttribute("aria-live",this.settings.level),this.currentRegion.setAttribute("role",n),this.currentRegion.setAttribute("style","clip: rect(1px, 1px, 1px, 1px); height: 1px; overflow: hidden; position: absolute; white-space: nowrap; width: 1px"),this.settings.parent.appendChild(this.currentRegion),window.setTimeout((()=>{this.currentRegion.textContent=e}),t)}clearNode(){const e=this.settings.parent.querySelector(`[id^="${this.settings.idPrefix}"]`);e&&this.settings.parent.removeChild(e)}}const c=({delay:e,idPrefix:t,level:n,parent:a}={})=>{const l=(0,r.useMemo)((()=>new o({delay:e,idPrefix:t,level:n,parent:a})),[e,t,n,a]);return(0,r.useEffect)((()=>()=>{l.clearNode()}),[l]),l}}}]);
//# sourceMappingURL=766.js.map