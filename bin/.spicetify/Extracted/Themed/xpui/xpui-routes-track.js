(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[730],{57009:function(t,e,n){"use strict";n.r(e),n.d(e,{TrackContainer:function(){return y},mapStateToProps:function(){return f}});var i=n(65526),o=n.n(i),r=n(27378),s=n.n(r),a=(n(23615),n(28979)),l=n(65701),c=n(50906),u=n(79308),d=n(66917),p=n.n(d),h=n(1391);class y extends r.PureComponent{constructor(...t){super(...t),o()(this,"handleRedirectToAlbum",(()=>{const{uri:t,track:e,indexOfTrackInAlbum:n}=this.props;if(!e)return;const{album:{uri:i}}=e;this.playOrRedirectToContext(t,n,i)}))}componentDidMount(){const{onRequestTrack:t,uri:e,isContextPlaylist:n,context:i,onRequestPlaylist:o}=this.props;t(e),n?(o(i),this.handleRedirectToPlaylist()):this.handleRedirectToAlbum()}componentDidUpdate(){const{isContextPlaylist:t}=this.props;t?this.handleRedirectToPlaylist():this.handleRedirectToAlbum()}handleRedirectToPlaylist(){const{context:t,uri:e,indexOfTrackInContext:n}=this.props;void 0!==n&&(-1===n?this.handleRedirectToAlbum():this.playOrRedirectToContext(e,n,t))}playOrRedirectToContext(t,e,n){const{anonymous:i,player:o,onPlayTrack:r}=this.props,s=`${p().from(n).toURLPath(!0)}?highlight=${t}`;i?this.props.history.push(s):(o&&!o.paused||e>-1&&r(e,n,t),this.props.history.replace(s))}render(){return s().createElement("section",null)}}const f=(t,e)=>{const n=`spotify:track:${e.match.params.trackId.split("&")[0]}`,i=t.entities.tracks[n],o=t.playback.player,{isAnonymous:r}=(0,h.Gg)(t),s=e.location&&e.location.query&&e.location.query.context,a=p().isPlaylistV1OrV2(s);let l;if(a&&t.entities&&t.entities.all){const e=t.entities.all[s];e&&(l=e.tracks.items.findIndex((({track:t})=>t&&(t.uri===n||t.linked_from&&t.linked_from.uri===n))))}return{uri:n,indexOfTrackInAlbum:i&&(isNaN(i.indexOfTrackInAlbum)?i.track_number-1:i.indexOfTrackInAlbum),track:i,player:o,anonymous:r,context:s,isContextPlaylist:a,indexOfTrackInContext:l}};e.default=(0,u.$j)(f,(t=>(0,c.DE)({onRequestTrack:a.Kc,onPlayTrack:l.z8,onRequestPlaylist:a.fw},t)))(y)}}]);
//# sourceMappingURL=xpui-routes-track.js.map