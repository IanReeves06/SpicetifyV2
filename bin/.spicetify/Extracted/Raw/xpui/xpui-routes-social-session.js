(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[62],{72790:function(e,o,n){"use strict";n.r(o),n.d(o,{SocialSessionContainer:function(){return c},mapStateToProps:function(){return l}});var s=n(27378),r=n.n(s),t=(n(23615),n(50906)),i=n(79308),a=n(28979);class c extends s.PureComponent{componentDidMount(){const{sessionToken:e,onRequestSocialSessionInfo:o}=this.props;o(e)}componentDidUpdate(e){!e.socialSessionError&&this.props.socialSessionError&&this.props.history.replace("/")}render(){return r().createElement(s.Fragment,null)}}const l=({socialSession:e},o)=>({sessionToken:o.match.params.sessionToken,socialSessionError:e&&e.error});o.default=(0,i.$j)(l,(e=>(0,t.DE)({onRequestSocialSessionInfo:a.fI},e)))(c)}}]);
//# sourceMappingURL=xpui-routes-social-session.js.map