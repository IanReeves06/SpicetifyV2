(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[773],{92657:function(e,t,a){"use strict";a.d(t,{M:function(){return w}});var r=a(27378),s=a.n(r),c=a(60042),l=a.n(c),n=a(48529),o=a(66917),i=a.n(o),u=a(35181),d=a(13737),m=a(36988);const f=e=>s().createElement(m.J,e,s().createElement("path",{d:"M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z",fill:"currentColor"}));var h="x-searchInput-searchInput",p="x-searchInput-searchInputInput",y="x-searchInput-darkMode",b="x-searchInput-searchInputSearchIcon",g="x-searchInput-searchInputClearButton",E="x-searchInput-searchInputIconContainer",v="x-searchInput-searchInputIcon",k=a(79308),R=a(14286),C=a(36834),N=a(44621),I=a(44638),S=a(91421),U=a(86677);const w=s().memo((({onSearch:e=!0})=>{const t=(0,r.useRef)(null),a=(0,r.useRef)(null),c=(0,n.k6)(),o=(0,k.I0)(),m=(0,n.$B)("/search/:query?/:category?"),{query:w="",category:P=""}=(null==m?void 0:m.params)||{};let q;try{q=decodeURIComponent(w||"")}catch(e){q=w}const[O,T]=(0,r.useState)(q),L=R.categories.includes(P),{scrollNodeRef:x}=s().useContext(I.VX),D=(0,S.y)(((e,t)=>{t?c.push(`/search/${encodeURIComponent(e)}`):c.replace(`/search/${encodeURIComponent(e)}`),x.current&&(x.current.scrollTop=0),o(C.Z.searchRequest(e))}),200),M=new URLSearchParams(location.search),_=Boolean(M.get("showRecent")),A=L||_;(0,r.useEffect)((()=>{!A&&e&&t.current!==document.activeElement&&(a.current=document.activeElement,t.current&&t.current.focus())}),[c.location.key,e,A]);return s().createElement("div",{className:l()(h,{[y]:!e})},s().createElement("form",{onSubmit:e=>{e.preventDefault();const t=decodeURIComponent(O),a=i().from(t);var r,s;if(a)if(a.type===i().Type.AD){const e=i().idToHex(a.getBase62Id());if(a.getBase62Id()===e)return;o((0,N.HI)(e))}else c.push(a.toURLPath(!0));else O&&(null===(r=x.current)||void 0===r||null===(s=r.querySelector("h1, h2, h3, h4"))||void 0===s||s.focus())},role:"search"},s().createElement("input",{ref:t,className:l()(p,U.Z.mesto),value:O,maxLength:80,autoCorrect:"off",autoCapitalize:"off",spellCheck:!1,onChange:e=>{const t=e.currentTarget.value;T(t),D(t,A)},onKeyDown:e=>{"Escape"===e.key&&(O?(T(""),D("",A)):(t.current&&t.current.blur(),a.current instanceof HTMLElement&&a.current.focus()))},placeholder:e?u.ag.get("search.search-for-label"):u.ag.get("navbar.search"),onFocus:()=>{!A&&e||D(O,A)},"data-testid":"search-input"})),s().createElement("div",{className:E},s().createElement("span",{className:b},s().createElement(f,{size:24,viewBox:"0 0 512 512",className:v,"aria-hidden":!0})),O&&s().createElement("button",{className:g,onClick:()=>{t.current&&t.current.focus(),T(""),D("",A)},"aria-label":u.ag.get("search.a11y.clear-input")},s().createElement(d.T,{size:24,className:v}))))}))},14286:function(e,t,a){"use strict";a.r(t),a.d(t,{SearchPage:function(){return Je},categories:function(){return Qe},default:function(){return Ve},routes:function(){return We}});var r=a(27378),s=a.n(r),c=a(79308),l=a(36834),n=a(7444),o=a(44638),i=a(35181),u=a(48529),d="x-searchHistoryEntries-searchHistory",m="x-searchHistoryEntries-clearSearchHistory",f="x-searchHistoryEntries-clearSingleSearchHistory",h="x-searchHistoryEntries-clearSingleSearchHistoryButton",p=a(96816),y=a(18856),b=a(50878),g=(a(23615),a(13737)),E="x-removeButton-RemoveButton";class v extends s().Component{render(){const{onClick:e,size:t}=this.props;return s().createElement("button",{style:{"--size":`${t}px`},className:E,onClick:e,"aria-label":"Remove"},s().createElement(g.T,{size:t-4}))}}v.defaultProps={size:32};var k=a(18831),R=a(9807);const C=()=>{const{searchHistory:e,clearSearchHistory:t}=(0,k.ZP)(),{showRecent:a,onSearchRequest:r}=s().useContext(o.ci);return e.length>0?s().createElement("div",{className:d},s().createElement(p.P,{total:e.length,seeAllUri:"spotify:app:recent-searches",title:i.ag.get("search.title.recent-searches"),showAll:a},e.map(((e,a)=>{const r=(0,y.U)(e.uri);return s().createElement("div",{className:f,key:e.uri},s().createElement(b.ZP,{index:a,value:"search-history"},s().createElement(r,{entity:e}),s().createElement("div",{className:h},s().createElement(v,{size:28,onClick:()=>t(e.uri)}))))}))),a?s().createElement("button",{onClick:()=>{t(),r("")},className:m},s().createElement(R.Dy,{as:"span",variant:R.Dy.minuetBold},i.ag.get("search.clear-recent-searches"))):null):null};var N=a(60024),I="x-searchResults-hasHero",S="x-searchResults-topResult",U="x-searchResults-searchResults",w=a(65526),P=a.n(w);function q(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function O(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?q(Object(a),!0).forEach((function(t){P()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):q(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const T=({topHit:e,prependItemToSearchHistory:t})=>{var a;const r=e&&(0,y.U)(e.hits[0].uri),c=(null==e?void 0:e.total)||0,[l]=(null==e?void 0:e.hits)||[{}],n=null==l||null===(a=l.tags)||void 0===a?void 0:a.includes("MOGEF-19+"),o=O(O({},l),{},{isMOGEFRestricted:n});return s().createElement(p.P,{total:c,className:I,title:i.ag.get("search.title.top-result")},e&&r?[s().createElement("div",{"aria-live":"polite","data-testid":"top-result-card",key:"top-result-item",className:S},s().createElement(b.ZP,{value:"top-result-card"},s().createElement(r,{isHero:!0,onClick:()=>t(o),onPlay:()=>t(o),key:o.uri,entity:o})))]:[])};var L=a(54220),x="x-searchResultsTracks-header",D="x-searchResultsTracks-topRow",M="x-searchResultsTracks-titleWrapper",_="x-searchResultsTracks-title",A="x-searchResultsTracks-root",$="x-searchResultsTracks-tracks",H=a(11916),Z=a(79378),z=a(61750);const j=s().memo((({tracks:e})=>{const t=(0,r.useCallback)(((e,t)=>{var a;const r=(e.tags||[]).includes("MOGEF-19+"),c=!(!1===e.is_playable);return s().createElement(Z.pt,{key:e.uri,index:t,imgUrl:null===(a=e.images)||void 0===a?void 0:a[0].url,uri:(0,z.$V)(e),duration_ms:e.duration||e.duration_ms,name:e.name,album:e.album,artists:e.artists,isPlayable:c,isMOGEFRestricted:r,isExplicit:!!e.explicit})}),[]);return e&&s().createElement(b.ZP,{value:"search-results-tracklist"},s().createElement(Z.Pv,{ariaLabel:i.ag.get("search.a11y.songs-search-results"),renderRow:t,rowPlaceholder:Z.hU,nrTracks:Math.min(e.length,4),tracks:e,resolveUri:e=>e.uri,columns:[Z.QD.TITLE,Z.QD.DURATION]}))}),((e,t)=>e.tracks===t.tracks)),F=({tracks:e,query:t})=>{var a;const c=(0,r.useCallback)((()=>s().createElement(s().Fragment,null,s().createElement("div",{className:$},s().createElement(r.Suspense,{fallback:null},s().createElement(j,{tracks:e.hits}))))),[e]);if(null==e||null===(a=e.hits)||void 0===a||!a.length)return null;const l=`spotify:app:search:${encodeURIComponent(t)}:tracks`;return s().createElement("section",{className:A,"aria-label":i.ag.get("search.title.tracks"),"data-testid":"search-tracks-result"},s().createElement("div",{className:x},e.hits.length>3?s().createElement("div",{className:D},s().createElement("div",{className:M},s().createElement(R.Dy,{as:"h2",variant:R.Dy.canon},s().createElement(L.r,{to:l,className:_},i.ag.get("search.title.tracks")))),s().createElement(H.e,{link:l})):s().createElement(R.Dy,{as:"h2",variant:R.Dy.canon,className:_},i.ag.get("search.title.tracks"))),s().createElement(N.T,{render:c}))},G=({topRecommendations:e,prependItemToSearchHistory:t,query:a})=>e?s().createElement(p.P,{total:e.total,title:e.title,seeAllUri:`spotify:app:search:${encodeURIComponent(a)}:topRecommendations`},e.hits.map(((e,a)=>{const r=(0,y.U)(e.uri);return s().createElement(b.ZP,{index:a,key:e.uri,value:"top-recommendations"},s().createElement(r,{onClick:()=>t(e),onPlay:()=>t(e),entity:e}))}))):null,B=({entity:e,query:t,results:{hits:a,total:r}={},prependItemToSearchHistory:c})=>{const{title:l,category:n}=e;if(!a||0===a.length)return null;const o=(0,y.U)(a[0].uri);return s().createElement(p.P,{total:r||0,title:l,testId:"search-entity",seeAllUri:`spotify:app:search:${encodeURIComponent(t)}:${n}`},a.map(((e,t)=>s().createElement(b.ZP,{value:n,index:t,key:e.uri},s().createElement(o,{onClick:()=>c(e),onPlay:()=>c(e),entity:e})))))};var Q=a(14298);const W=()=>{const{searchHistory:e,setSearchHistory:t}=(0,k.ZP)(),{results:a,query:r,getResultEntities:c}=s().useContext(o.ci),l=a=>{t([a,...Array.isArray(e)?e:[]])},n=c();return s().createElement(N.T,{className:U,rowGap:Q.mGT,testId:"search-results",render:()=>s().createElement(b.ZP,{value:"search-results"},s().createElement(T,{topHit:a.topHit,prependItemToSearchHistory:l}),s().createElement(F,{query:r,tracks:a.tracks,prependItemToSearchHistory:l}),s().createElement(G,{query:r,topRecommendations:a.topRecommendations,prependItemToSearchHistory:l}),n.map((e=>s().createElement(B,{key:`search-shelf-${e.category}`,entity:e,query:r,results:a[e.category],prependItemToSearchHistory:l}))))})};var X="x-emptySearchResult-emptySearch",J="x-emptySearchResult-emptySearchTitle",V="x-emptySearchResult-emptySearchSubTitle";const K=()=>{const{query:e}=s().useContext(o.ci);return s().createElement("div",{className:X,"aria-live":"polite"},s().createElement(R.Dy,{as:"h1",variant:R.Dy.canon,className:J},i.ag.get("search.empty-results-title",e)),s().createElement("p",{className:V},i.ag.get("search.empty-results-text")))};var Y="x-searchCategoryResults-header",ee=a(93868),te=a(97653),ae=a(40299),re=a(90604);const se=s().memo((({nrTracks:e,query:t,ariaLabel:a})=>{(0,re.T)("search-results");const c=(0,r.useCallback)(((a,r)=>(0,te.getSearchCategoryResults)(t,"tracks",a,Math.min(r,e-a)).then((e=>{var t,a,r;return(null===(t=e.body)||void 0===t||null===(a=t.results)||void 0===a||null===(r=a.tracks)||void 0===r?void 0:r.hits)||[]}))),[t,e]),l=(0,r.useCallback)(((e,t)=>{var a;const r=(0,ae.X)(null==e||null===(a=e.album)||void 0===a?void 0:a.images,{desiredSize:40}),c=(e.tags||[]).includes("MOGEF-19+"),l=!(!1===e.is_playable);return s().createElement(Z.e9,{key:t+e.uri,index:t,uri:(0,z.$V)(e),duration_ms:e.duration_ms,name:e.name,artists:e.artists,album:e.album,isPlayable:l,isExplicit:!!e.explicit,isMOGEFRestricted:c,imgUrl:(null==r?void 0:r.url)||""})}),[]);return s().createElement(b.ZP,{value:"search-results-tracklist"},s().createElement(Z.Pv,{ariaLabel:a,key:t,hasHeaderRow:!0,columns:[Z.QD.INDEX,Z.QD.TITLE,Z.QD.ALBUM,Z.QD.DURATION],renderRow:l,resolveUri:e=>e.uri,nrTracks:e,fetchTracks:c,limit:50}))})),ce="topRecommendations";var le=(0,c.$j)(null,(e=>({dispatch:e})))((e=>{const[t,a]=(0,r.useState)(!1),c=(0,r.useRef)(),{query:n,results:u,category:d,getResultEntities:m}=s().useContext(o.ci),{title:f,onSearchRequest:h,onSearchCategoryRequest:p,onSearchCategoryLoadMore:b,results:g}=(0,r.useMemo)((({results:e,category:t,query:a,dispatch:r,getResultEntities:s})=>()=>{var c;const n=s().reduce(((e,t)=>(e[t.category]=t.title,e)),{tracks:i.ag.get("search.title.tracks")});return{results:e[t],title:t===ce?null===(c=e.topRecommendations)||void 0===c?void 0:c.title:i.ag.get("search.showing-category-query",i.ag.toLocaleLowerCase(n[t]),a),onSearchRequest:e=>{r(l.Z.searchRequest(e))},onSearchCategoryRequest:(e,t)=>{r(l.Z.searchCategoryRequest(e,t))},onSearchCategoryLoadMore:(e,t)=>{r(l.Z.searchCategoryLoadMore(e,t))}}})({results:u,category:d,query:n,dispatch:e.dispatch,getResultEntities:m}),[u,d,n]),E=(g||{}).loadMoreURI,v=(0,r.useCallback)((({loadMoreURI:e,lastLoadedURI:t,category:a,setShouldLoadMoreOnUpdate:r,onSearchCategoryLoadMore:s})=>()=>{e&&e!==t.current?(t.current=e,r(!1),s(e,a)):r(!0)})({loadMoreURI:E,lastLoadedURI:c,category:d,setShouldLoadMoreOnUpdate:a,onSearchCategoryLoadMore:b}),[E,d,a,b]);(0,r.useEffect)((({results:e,category:t,query:a,onSearchRequest:r,onSearchCategoryRequest:s,shouldLoadMoreOnUpdate:c,handleLoadMore:l})=>()=>{e&&e.loadMoreURI||!t||!a||(t===ce?r(a):s(a,t)),c&&l()})({results:g,category:d,query:n,onSearchRequest:h,onSearchCategoryRequest:p,shouldLoadMoreOnUpdate:t,handleLoadMore:v}),[JSON.stringify(g),t,d]);const{searchHistory:C,setSearchHistory:I}=(0,k.u9)(),S=e=>I([e,...C]);return s().createElement("div",null,s().createElement(R.Dy,{as:"h1",variant:R.Dy.canon,className:Y},f),g&&"tracks"===d&&s().createElement(r.Suspense,{fallback:null},s().createElement(se,{ariaLabel:f,nrTracks:Math.min(g.total,1e3),query:n})),g&&"tracks"!==d&&s().createElement(ee.C,{onReachBottom:v},s().createElement(N.T,{render:()=>g.hits.map((e=>{const t=(0,y.U)(e.uri);return s().createElement(t,{key:e.uri,entity:e,onClick:()=>S(e),onPlay:()=>S(e)})}))})))})),ne="x-categoryCard-CategoryCard",oe="x-categoryCard-title",ie="x-categoryCard-image",ue=a(95753);const de=Q.Sns,me=Q.d1r;class fe extends r.PureComponent{render(){const{title:e,imageUrl:t,viewId:a,pageId:r,color:c,href:l}=this.props;return s().createElement(L.r,{to:a&&`/genre/${a}`||l,pageId:r,className:ne,style:{backgroundColor:c}},s().createElement("div",null,t?s().createElement(ue.E,{loading:"lazy",src:t,className:ie}):s().createElement("div",{style:{backgroundColor:me},className:ie,"data-testid":"fallback"}),s().createElement("h3",{className:oe},e)))}}fe.defaultProps={color:de};var he="x-heroCategoryCard-HeroCategoryCard",pe="x-heroCategoryCard-heroTitle",ye="x-heroCategoryCard-heroImage";class be extends r.PureComponent{render(){const{title:e,imageUrl:t,viewId:a,color:r,pageId:c}=this.props;return s().createElement(L.r,{to:`/genre/${a}`,pageId:c,className:he,style:{backgroundColor:r}},s().createElement("div",null,s().createElement("h3",{className:pe},e),t?s().createElement(ue.E,{loading:"lazy",className:ye,src:t}):s().createElement("div",{className:ye,style:{backgroundColor:me},"data-testid":"fallback"})))}}be.defaultProps={color:de};var ge="x-carousel-carousel",Ee="x-carousel-gridScrollWrapper",ve="x-carousel-carouselAnchor",ke="x-carousel-title",Re="x-carousel-header",Ce="x-carousel-buttonContainer",Ne="x-carousel-rightButtonContainer",Ie="x-carousel-leftButtonContainer",Se="x-carousel-button",Ue="x-carousel-carouselGrid",we=a(90383),Pe=a(26565),qe=a(70608),Oe=a(44135),Te=a(89341),Le=a(88319),xe=a(91421);var De=(0,Oe.P)((e=>{const{title:t,children:a,seeAllUri:c,pageId:l,className:n="",childColumnSpan:o=1}=e,[u,d]=(0,r.useState)(!1),[m,f]=(0,r.useState)(!1),h=(0,r.useRef)(null),p=(0,Le.o)(),y=(0,xe.y)((()=>{!function(e,t,a,r,s){if(null===s.current)return;const{scrollLeft:c,offsetWidth:l,scrollWidth:n}=s.current,o=c>0,i=c+l<n;e!==o&&a(o),t!==i&&r(i)}(u,m,d,f,h)}),200);if(Array.isArray(a)&&0===a.length)return null;const b=Array.isArray(a)?a.length:0;return s().createElement("section",{className:`${n} ${ge}`,"aria-label":t},s().createElement("div",{className:Re},c?s().createElement(L.r,{to:c,pageId:l},s().createElement(R.Dy,{as:"h2",variant:R.Dy.canon,className:ke},t)):s().createElement(R.Dy,{as:"h2",variant:R.Dy.canon,className:ke},t)),s().createElement("div",{className:ve},s().createElement("div",{"data-testid":"scroll-wrapper",className:Ee,ref:h,onScroll:y},s().createElement(N.T,{className:Ue,columnAware:!0,fixedColumnCount:b*o,onUpdate:y,render:(e,t)=>s().createElement(s().Fragment,null,u&&s().createElement("div",{className:`${Ce} ${Ie}`},s().createElement(qe.E,{className:Se,onClick:()=>{!function(e,t,a){null!==a.current&&(a.current.scrollLeft-=e*(t+N.w))}(e,t,h),p({intent:"carousel-left",type:"click",itemIdSuffix:"carousel"})},standalone:!0,tabIndex:-1,size:40,ariaLabel:i.ag.get("playback-control.skip-back")},s().createElement(Pe.w,{size:24}))),m&&s().createElement("div",{className:`${Ce} ${Ne}`},s().createElement(qe.E,{className:Se,onClick:()=>{!function(e,t,a){null!==a.current&&(a.current.scrollLeft+=e*(t+N.w))}(e,t,h),p({intent:"carousel-right",type:"click",itemIdSuffix:"carousel"})},standalone:!0,tabIndex:-1,size:40,ariaLabel:i.ag.get("playback-control.skip-forward")},s().createElement(we.X,{size:24}))),a)}))))}),(()=>null),(e=>(0,Te.v)({from:"Carousel",error:e}))),Me="x-searchBrowse-SearchBrowse",_e="x-searchBrowse-browseAllWrapper";class Ae extends s().PureComponent{render(){const{topGenres:e,browseAll:t}=this.props;return e||t?s().createElement("div",{className:Me},e&&s().createElement(b.ZP,{value:"top-genre"},s().createElement(De,{title:e.title,childColumnSpan:2},e.items.map((({viewId:e,color:t,title:a,imageUrl:r},c)=>s().createElement(b.ZP,{key:e,index:c,value:"hero-category-card"},s().createElement(be,{title:a,viewId:e,pageId:"search",color:t,imageUrl:r})))))),t&&s().createElement("div",{className:_e,"data-testid":"browse-all"},s().createElement(p.P,{title:t.title,showAll:!0},t.items.map((({viewId:e,color:t,title:a,imageUrl:r,href:c})=>s().createElement(fe,{key:e||c,title:a,viewId:e,pageId:"search",href:c,color:t,imageUrl:r})))))):null}}var $e=(0,c.$j)((e=>({topGenres:e.browse.topGenres,browseAll:e.browse.browseAll})))(Ae),He=a(92657),Ze=a(18299),ze=a(21195),je="x-searchPage-searchPageGrid",Fe=a(47574),Ge=a(54798);const Be=()=>{const e=(0,Fe.W6)(Ge.dE),t=(0,c.I0)();return(0,r.useEffect)((()=>{t(l.Z.browseRequest(e))}),[e,t]),null},Qe=["playlists","albums","artists","tracks","shows","episodes","topRecommendations","shows","profiles","genres"],We=(e,t)=>{const a="{}"!==JSON.stringify(e),r=Object.keys(e).some((t=>Number(e[t].total)>0));return s().createElement(s().Fragment,null,s().createElement(Ze.w,null,s().createElement(He.M,null)),s().createElement(u.AW,{exact:!0,path:"/search"},s().createElement(C,null),!t&&s().createElement($e,null)),s().createElement(u.AW,{exact:!0,path:"/search/:query"},a&&r&&s().createElement(W,null),a&&!r&&s().createElement(K,null)),s().createElement(u.AW,{path:"/search/:query/:category",component:le}))},Xe=()=>[{title:i.ag.get("search.title.artists"),category:"artists"},{title:i.ag.get("search.title.albums"),category:"albums"},{title:i.ag.get("search.title.playlists"),category:"playlists"},{title:i.ag.get("search.title.shows"),category:"shows"},{title:i.ag.get("search.title.episodes"),category:"episodes"},{title:i.ag.get("search.title.profiles"),category:"profiles"},{title:i.ag.get("search.title.genres"),category:"genres"}];const Je=s().memo((()=>{const e=(0,c.I0)(),t=(0,u.k6)(),{queryFromUrl:a,category:d}=function(){const{query:e="",category:t}=(0,u.UO)();let a;try{a=decodeURIComponent(e)}catch(t){a=e}return{queryFromUrl:a,category:t}}(),m=(0,u.TH)(),f=new URLSearchParams(m.search),h=Boolean(f.get("showRecent")),p=(0,ze.g)(),y=(0,c.v9)((e=>e.fusionSearch.results)),g=(0,r.useCallback)(((a,r)=>{r?t.push(`/search/${encodeURIComponent(a)}`):t.replace(`/search/${encodeURIComponent(a)}`),e(l.Z.searchRequest(a))}),[t,e]);(0,r.useEffect)((()=>{e((0,n.Dk)(i.ag.get("search.page-title"))),p.setReferrer("search")}),[e,p]),(0,r.useEffect)((()=>{!a||d||h||g(a)}),[d,a,h,g]),(0,r.useEffect)((()=>{""===a&&e(l.Z.clearSearchResults())}),[e,a]);const E={results:y,query:a,showRecent:h,category:d,onSearchRequest:g,getResultEntities:Xe};return s().createElement(o.ci.Provider,{value:E},s().createElement(b.ZP,{value:"search-page"},s().createElement("div",{className:"contentSpacing",id:"searchPage"},s().createElement(N.T,{className:je,render:()=>We(y,h)}))),s().createElement(r.Suspense,{fallback:null},s().createElement(Be,null)))}));var Ve=Je}}]);
//# sourceMappingURL=773.js.map