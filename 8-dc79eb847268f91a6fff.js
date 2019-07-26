(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{180:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,s=i(194),o=(n=s)&&n.__esModule?n:{default:n};t.default={CAROUSEL:function(e){return(0,o.default)({carousel:!0,"carousel-slider":e})},WRAPPER:function(e,t){return(0,o.default)({"thumbs-wrapper":!e,"slider-wrapper":e,"axis-horizontal":"horizontal"===t,"axis-vertical":"horizontal"!==t})},SLIDER:function(e,t){return(0,o.default)({thumbs:!e,slider:e,animated:!t})},ITEM:function(e,t){return(0,o.default)({thumb:!e,slide:e,selected:t})},ARROW_PREV:function(e){return(0,o.default)({"control-arrow control-prev":!0,"control-disabled":e})},ARROW_NEXT:function(e){return(0,o.default)({"control-arrow control-next":!0,"control-disabled":e})},DOT:function(e){return(0,o.default)({dot:!0,selected:e})}}},181:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return"translate3d"+("("+("horizontal"===t?[e,0,0]:[0,e,0]).join(",")+")")}},182:function(e,t,i){var n,s,o;s=[t,i(195)],void 0===(o="function"==typeof(n=function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,n=(i=t)&&i.__esModule?i:{default:i};e.default=n.default})?n.apply(t,s):n)||(e.exports=o)},183:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},s=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),o=i(0),r=f(o),a=f(i(5)),l=f(i(180)),u=i(196),d=f(i(181)),c=f(i(182));function f(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return h.call(i),i.state={selectedItem:e.selectedItem,hasMount:!1,firstItem:0,itemSize:null,visibleItems:0,lastPosition:0,showArrows:!1,images:i.getImages()},i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),s(t,[{key:"componentDidMount",value:function(e){this.setupThumbs()}},{key:"componentWillReceiveProps",value:function(e,t){e.selectedItem!==this.state.selectedItem&&this.setState({selectedItem:e.selectedItem,firstItem:this.getFirstItem(e.selectedItem)}),e.children!==this.props.children&&this.setState({images:this.getImages()})}},{key:"componentDidUpdate",value:function(e){this.props.children!==e.children&&this.updateSizes()}},{key:"componentWillUnmount",value:function(){this.destroyThumbs()}},{key:"setupThumbs",value:function(){window.addEventListener("resize",this.updateSizes),window.addEventListener("DOMContentLoaded",this.updateSizes),this.updateSizes()}},{key:"destroyThumbs",value:function(){window.removeEventListener("resize",this.updateSizes),window.removeEventListener("DOMContentLoaded",this.updateSizes)}},{key:"getImages",value:function(){var e=o.Children.map(this.props.children,function(e,t){var i=e;return"img"!==e.type&&(i=o.Children.toArray(e.props.children).filter(function(e){return"img"===e.type})[0]),i&&0!==i.length?i:null});return 0===e.filter(function(e){return null!==e}).length?(console.warn("No images found! Can't build the thumb list without images. If you don't need thumbs, set showThumbs={false} in the Carousel. Note that it's not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md"),null):e}},{key:"getFirstItem",value:function(e){var t=e;return e>=this.state.lastPosition&&(t=this.state.lastPosition),e<this.state.firstItem+this.state.visibleItems&&(t=this.state.firstItem),e<this.state.firstItem&&(t=e),t}},{key:"renderItems",value:function(){var e=this;return this.state.images.map(function(t,i){var s=l.default.ITEM(!1,i===e.state.selectedItem&&e.state.hasMount),o={key:i,ref:function(t){return e.setThumbsRef(t,i)},className:s,onClick:e.handleClickItem.bind(e,i,e.props.children[i]),onKeyDown:e.handleClickItem.bind(e,i,e.props.children[i])};return 0===i&&(t=r.default.cloneElement(t,{onLoad:e.setMountState})),r.default.createElement("li",n({},o,{role:"button",tabIndex:0}),t)})}},{key:"render",value:function(){if(!this.props.children)return null;var e,t=this.state.showArrows&&this.state.firstItem>0,i=this.state.showArrows&&this.state.firstItem<this.state.lastPosition,n=-this.state.firstItem*this.state.itemSize+"px",s=(0,d.default)(n,this.props.axis),o=this.props.transitionTime+"ms";return e={WebkitTransform:s,MozTransform:s,MsTransform:s,OTransform:s,transform:s,msTransform:s,WebkitTransitionDuration:o,MozTransitionDuration:o,MsTransitionDuration:o,OTransitionDuration:o,transitionDuration:o,msTransitionDuration:o},r.default.createElement("div",{className:l.default.CAROUSEL(!1)},r.default.createElement("div",{className:l.default.WRAPPER(!1),ref:this.setItemsWrapperRef},r.default.createElement("button",{type:"button",className:l.default.ARROW_PREV(!t),onClick:this.slideRight}),r.default.createElement(c.default,{tagName:"ul",selectedItem:this.state.selectedItem,className:l.default.SLIDER(!1,this.state.swiping),onSwipeLeft:this.slideLeft,onSwipeRight:this.slideRight,onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:e,ref:this.setItemsListRef},this.renderItems()),r.default.createElement("button",{type:"button",className:l.default.ARROW_NEXT(!i),onClick:this.slideLeft})))}}]),t}();p.displayName="Thumbs",p.propsTypes={children:a.default.element.isRequired,transitionTime:a.default.number,selectedItem:a.default.number,thumbWidth:a.default.number},p.defaultProps={selectedItem:0,transitionTime:350,axis:"horizontal"};var h=function(){var e=this;this.setItemsWrapperRef=function(t){e.itemsWrapperRef=t},this.setItemsListRef=function(t){e.itemsListRef=t},this.setThumbsRef=function(t,i){e.thumbsRef||(e.thumbsRef=[]),e.thumbsRef[i]=t},this.updateSizes=function(){if(e.props.children&&e.itemsWrapperRef){var t=e.props.children.length,i=e.itemsWrapperRef.clientWidth,n=e.props.thumbWidth?e.props.thumbWidth:(0,u.outerWidth)(e.thumbsRef[0]),s=Math.floor(i/n),o=t-s,r=s<t;e.setState(function(t,i){return{itemSize:n,visibleItems:s,firstItem:r?e.getFirstItem(i.selectedItem):0,lastPosition:o,showArrows:r}})}},this.setMountState=function(){e.setState({hasMount:!0}),e.updateSizes()},this.handleClickItem=function(t,i,n){if(!n.keyCode||"Enter"===n.key){var s=e.props.onSelectItem;"function"==typeof s&&s(t,i)}},this.onSwipeStart=function(){e.setState({swiping:!0})},this.onSwipeEnd=function(){e.setState({swiping:!1})},this.onSwipeMove=function(t){var i=-e.state.firstItem*e.state.itemSize;0===i&&t>0&&(t=0),i===-e.state.visibleItems*e.state.itemSize&&t<0&&(t=0);var n=i+100/(e.itemsWrapperRef.clientWidth/t)+"%";e.itemsListRef&&["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach(function(t){e.itemsListRef.style[t]=(0,d.default)(n,e.props.axis)})},this.slideRight=function(t){e.moveTo(e.state.firstItem-("number"==typeof t?t:1))},this.slideLeft=function(t){e.moveTo(e.state.firstItem+("number"==typeof t?t:1))},this.moveTo=function(t){t=(t=t<0?0:t)>=e.lastPosition?e.lastPosition:t,e.setState({firstItem:t,selectedItem:e.state.selectedItem})}};t.default=p},190:function(e,t,i){"use strict";var n=i(10);t.__esModule=!0,t.default=void 0;var s,o=n(i(8)),r=n(i(45)),a=n(i(104)),l=n(i(44)),u=n(i(0)),d=n(i(5)),c=function(e){var t=(0,l.default)({},e),i=t.resolutions,n=t.sizes,s=t.critical;return i&&(t.fixed=i,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),s&&(t.loading="eager"),t.fluid&&(t.fluid=b([].concat(t.fluid))),t.fixed&&(t.fixed=b([].concat(t.fixed))),t},f=function(e){var t=e.fluid,i=e.fixed;return(t&&t[0]||i&&i[0]).src},p=Object.create({}),h=function(e){var t=c(e),i=f(t);return p[i]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,y=v&&window.IntersectionObserver,g=new WeakMap;function w(e){return e.map(function(e){var t=e.src,i=e.srcSet,n=e.srcSetWebp,s=e.media,o=e.sizes;return u.default.createElement(u.default.Fragment,{key:t},n&&u.default.createElement("source",{type:"image/webp",media:s,srcSet:n,sizes:o}),u.default.createElement("source",{media:s,srcSet:i,sizes:o}))})}function b(e){var t=[],i=[];return e.forEach(function(e){return(e.media?t:i).push(e)}),t.concat(i)}function S(e){return e.map(function(e){var t=e.src,i=e.media,n=e.tracedSVG;return u.default.createElement("source",{key:t,media:i,srcSet:n})})}function I(e){return e.map(function(e){var t=e.src,i=e.media,n=e.base64;return u.default.createElement("source",{key:t,media:i,srcSet:n})})}function E(e,t){var i=e.srcSet,n=e.srcSetWebp,s=e.media,o=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(s?'media="'+s+'" ':"")+'srcset="'+(t?n:i)+'" '+(o?'sizes="'+o+'" ':"")+"/>"}var P=function(e,t){var i=(void 0===s&&"undefined"!=typeof window&&window.IntersectionObserver&&(s=new window.IntersectionObserver(function(e){e.forEach(function(e){if(g.has(e.target)){var t=g.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(s.unobserve(e.target),g.delete(e.target),t())}})},{rootMargin:"200px"})),s);return i&&(i.observe(e),g.set(e,t)),function(){i.unobserve(e),g.delete(e)}},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',i=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",s=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',r=e.width?'width="'+e.width+'" ':"",a=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",u=e.loading?'loading="'+e.loading+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?E(e,!0):"")+E(e)}).join("")+"<img "+u+r+a+i+n+t+o+s+l+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},T=function(e){var t=e.src,i=e.imageVariants,n=e.generateSources,s=e.spreadProps,o=u.default.createElement(M,(0,l.default)({src:t},s));return i.length>1?u.default.createElement("picture",null,n(i),o):o},M=u.default.forwardRef(function(e,t){var i=e.sizes,n=e.srcSet,s=e.src,o=e.style,r=e.onLoad,d=e.onError,c=e.loading,f=(0,a.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading"]);return u.default.createElement("img",(0,l.default)({sizes:i,srcSet:n,src:s},f,{onLoad:r,onError:d,ref:t,loading:c,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},o)}))});M.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var L=function(e){function t(t){var i;(i=e.call(this,t)||this).seenBefore=v&&h(t),i.addNoScript=!(t.critical&&!t.fadeIn),i.useIOSupport=!m&&y&&!t.critical&&!i.seenBefore;var n=t.critical||v&&(m||!i.useIOSupport);return i.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!i.seenBefore&&t.fadeIn},i.imageRef=u.default.createRef(),i.handleImageLoaded=i.handleImageLoaded.bind((0,r.default)((0,r.default)(i))),i.handleRef=i.handleRef.bind((0,r.default)((0,r.default)(i))),i}(0,o.default)(t,e);var i=t.prototype;return i.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},i.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},i.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=P(e,function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},i.handleImageLoaded=function(){var e,t,i;e=this.props,t=c(e),i=f(t),p[i]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},i.render=function(){var e=c(this.props),t=e.title,i=e.alt,n=e.className,s=e.style,o=void 0===s?{}:s,r=e.imgStyle,a=void 0===r?{}:r,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,h=e.fluid,m=e.fixed,v=e.backgroundColor,y=e.durationFadeIn,g=e.Tag,b=e.itemProp,E=e.loading,P=!1===this.state.fadeIn||this.state.imgLoaded,L=!0===this.state.fadeIn&&!this.state.imgCached,O=(0,l.default)({opacity:P?1:0,transition:L?"opacity "+y+"ms":"none"},a),k="boolean"==typeof v?"lightgray":v,_={transitionDelay:y+"ms"},C=(0,l.default)({opacity:this.state.imgLoaded?0:1},L&&_,a,f),z={title:t,alt:this.state.isVisible?"":i,style:C,className:p};if(h){var W=h,N=W[0];return u.default.createElement(g,{className:(n||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},o),ref:this.handleRef,key:"fluid-"+JSON.stringify(N.srcSet)},u.default.createElement(g,{style:{width:"100%",paddingBottom:100/N.aspectRatio+"%"}}),k&&u.default.createElement(g,{title:t,style:(0,l.default)({backgroundColor:k,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},L&&_)}),N.base64&&u.default.createElement(T,{src:N.base64,spreadProps:z,imageVariants:W,generateSources:I}),N.tracedSVG&&u.default.createElement(T,{src:N.tracedSVG,spreadProps:z,imageVariants:W,generateSources:S}),this.state.isVisible&&u.default.createElement("picture",null,w(W),u.default.createElement(M,{alt:i,title:t,sizes:N.sizes,src:N.src,crossOrigin:this.props.crossOrigin,srcSet:N.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:b,loading:E})),this.addNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,l.default)({alt:i,title:t,loading:E},N,{imageVariants:W}))}}))}if(m){var x=m,j=x[0],D=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:j.width,height:j.height},o);return"inherit"===o.display&&delete D.display,u.default.createElement(g,{className:(n||"")+" gatsby-image-wrapper",style:D,ref:this.handleRef,key:"fixed-"+JSON.stringify(j.srcSet)},k&&u.default.createElement(g,{title:t,style:(0,l.default)({backgroundColor:k,width:j.width,opacity:this.state.imgLoaded?0:1,height:j.height},L&&_)}),j.base64&&u.default.createElement(T,{src:j.base64,spreadProps:z,imageVariants:x,generateSources:I}),j.tracedSVG&&u.default.createElement(T,{src:j.tracedSVG,spreadProps:z,imageVariants:x,generateSources:S}),this.state.isVisible&&u.default.createElement("picture",null,w(x),u.default.createElement(M,{alt:i,title:t,width:j.width,height:j.height,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:b,loading:E})),this.addNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,l.default)({alt:i,title:t,loading:E},j,{imageVariants:x}))}}))}return null},t}(u.default.Component);L.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var O=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),k=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});L.propTypes={resolutions:O,sizes:k,fixed:d.default.oneOfType([O,d.default.arrayOf(O)]),fluid:d.default.oneOfType([k,d.default.arrayOf(k)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"])};var _=L;t.default=_},192:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Thumbs=t.Carousel=void 0;var n=o(i(193)),s=o(i(183));function o(e){return e&&e.__esModule?e:{default:e}}t.Carousel=n.default,t.Thumbs=s.default},193:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},s=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),o=i(0),r=h(o),a=h(i(63)),l=h(i(5)),u=h(i(180)),d=h(i(181)),c=h(i(182)),f=h(i(183)),p=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t}(i(197));function h(e){return e&&e.__esModule?e:{default:e}}var m=function(){},v=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return y.call(i),i.state={initialized:!1,selectedItem:e.selectedItem,hasMount:!1,isMouseEntered:!1,autoPlay:e.autoPlay},i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),s(t,[{key:"componentDidMount",value:function(){this.props.children&&this.setupCarousel()}},{key:"componentWillReceiveProps",value:function(e){var t=this;e.selectedItem!==this.state.selectedItem&&(this.updateSizes(),this.moveTo(e.selectedItem)),e.autoPlay!==this.state.autoPlay&&this.setState({autoPlay:e.autoPlay},function(){t.state.autoPlay?t.setupAutoPlay():t.destroyAutoPlay()})}},{key:"componentDidUpdate",value:function(e,t){e.children||!this.props.children||this.state.initialized||this.setupCarousel(),t.swiping&&!this.state.swiping&&this.resetPosition()}},{key:"componentWillUnmount",value:function(){this.destroyCarousel()}},{key:"setupCarousel",value:function(){this.bindEvents(),this.state.autoPlay&&o.Children.count(this.props.children)>1&&this.setupAutoPlay(),this.setState({initialized:!0});var e=this.getInitialImage();e?e.addEventListener("load",this.setMountState):this.setMountState()}},{key:"destroyCarousel",value:function(){this.state.initialized&&(this.unbindEvents(),this.destroyAutoPlay())}},{key:"setupAutoPlay",value:function(){this.autoPlay();var e=this.carouselWrapperRef;this.props.stopOnHover&&e&&(e.addEventListener("mouseenter",this.stopOnHover),e.addEventListener("mouseleave",this.startOnLeave))}},{key:"destroyAutoPlay",value:function(){this.clearAutoPlay();var e=this.carouselWrapperRef;this.props.stopOnHover&&e&&(e.removeEventListener("mouseenter",this.stopOnHover),e.removeEventListener("mouseleave",this.startOnLeave))}},{key:"bindEvents",value:function(){window.addEventListener("resize",this.updateSizes),window.addEventListener("DOMContentLoaded",this.updateSizes),this.props.useKeyboardArrows&&document.addEventListener("keydown",this.navigateWithKeyboard)}},{key:"unbindEvents",value:function(){window.removeEventListener("resize",this.updateSizes),window.removeEventListener("DOMContentLoaded",this.updateSizes);var e=this.getInitialImage();e&&e.removeEventListener("load",this.setMountState),this.props.useKeyboardArrows&&document.removeEventListener("keydown",this.navigateWithKeyboard)}},{key:"getPosition",value:function(e){this.props.infiniteLoop&&++e;var t=o.Children.count(this.props.children);if(this.props.centerMode&&"horizontal"===this.props.axis){var i=-e*this.props.centerSlidePercentage,n=t-1;return e&&(e!==n||this.props.infiniteLoop)?i+=(100-this.props.centerSlidePercentage)/2:e===n&&(i+=100-this.props.centerSlidePercentage),i}return 100*-e}},{key:"renderItems",value:function(e){var t=this;return o.Children.map(this.props.children,function(i,n){var s={ref:function(e){return t.setItemsRef(e,n)},key:"itemKey"+n+(e?"clone":""),className:u.default.ITEM(!0,n===t.state.selectedItem),onClick:t.handleClickItem.bind(t,n,i)};return t.props.centerMode&&"horizontal"===t.props.axis&&(s.style={minWidth:t.props.centerSlidePercentage+"%"}),r.default.createElement("li",s,i)})}},{key:"renderControls",value:function(){var e=this;return this.props.showIndicators?r.default.createElement("ul",{className:"control-dots"},o.Children.map(this.props.children,function(t,i){return r.default.createElement("li",{className:u.default.DOT(i===e.state.selectedItem),onClick:e.changeItem,onKeyDown:e.changeItem,value:i,key:i,role:"button",tabIndex:0})})):null}},{key:"renderStatus",value:function(){return this.props.showStatus?r.default.createElement("p",{className:"carousel-status"},this.props.statusFormatter(this.state.selectedItem+1,o.Children.count(this.props.children))):null}},{key:"renderThumbs",value:function(){return this.props.showThumbs&&0!==o.Children.count(this.props.children)?r.default.createElement(f.default,{ref:this.setThumbsRef,onSelectItem:this.handleClickThumb,selectedItem:this.state.selectedItem,transitionTime:this.props.transitionTime,thumbWidth:this.props.thumbWidth},this.props.children):null}},{key:"render",value:function(){if(!this.props.children||0===o.Children.count(this.props.children))return null;var e="horizontal"===this.props.axis,t=this.props.showArrows&&o.Children.count(this.props.children)>1,i=t&&(this.state.selectedItem>0||this.props.infiniteLoop),s=t&&(this.state.selectedItem<o.Children.count(this.props.children)-1||this.props.infiniteLoop),a={},l=this.getPosition(this.state.selectedItem),f=(0,d.default)(l+"%",this.props.axis),p=this.props.transitionTime+"ms";a={WebkitTransform:f,MozTransform:f,MsTransform:f,OTransform:f,transform:f,msTransform:f},this.state.swiping||(a=n({},a,{WebkitTransitionDuration:p,MozTransitionDuration:p,MsTransitionDuration:p,OTransitionDuration:p,transitionDuration:p,msTransitionDuration:p}));var h=this.renderItems(!0),m=h.shift(),v=h.pop(),y={selectedItem:this.state.selectedItem,className:u.default.SLIDER(!0,this.state.swiping),onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:a,tolerance:this.props.swipeScrollTolerance},g={};if(e){if(y.onSwipeLeft=this.onSwipeForward,y.onSwipeRight=this.onSwipeBackwards,this.props.dynamicHeight){var w=this.getVariableImageHeight(this.state.selectedItem);y.style.height=w||"auto",g.height=w||"auto"}}else y.onSwipeUp="natural"===this.props.verticalSwipe?this.onSwipeBackwards:this.onSwipeForward,y.onSwipeDown="natural"===this.props.verticalSwipe?this.onSwipeForward:this.onSwipeBackwards,y.style.height=this.state.itemSize,g.height=this.state.itemSize;return r.default.createElement("div",{className:this.props.className,ref:this.setCarouselWrapperRef},r.default.createElement("div",{className:u.default.CAROUSEL(!0),style:{width:this.props.width}},r.default.createElement("button",{type:"button",className:u.default.ARROW_PREV(!i),onClick:this.onClickPrev}),r.default.createElement("div",{className:u.default.WRAPPER(!0,this.props.axis),style:g,ref:this.setItemsWrapperRef},this.props.swipeable?r.default.createElement(c.default,n({tagName:"ul",ref:this.setListRef},y,{allowMouseEvents:this.props.emulateTouch}),this.props.infiniteLoop&&v,this.renderItems(),this.props.infiniteLoop&&m):r.default.createElement("ul",{className:u.default.SLIDER(!0,this.state.swiping),ref:this.setListRef,style:a},this.props.infiniteLoop&&v,this.renderItems(),this.props.infiniteLoop&&m)),r.default.createElement("button",{type:"button",className:u.default.ARROW_NEXT(!s),onClick:this.onClickNext}),this.renderControls(),this.renderStatus()),this.renderThumbs())}}]),t}();v.displayName="Carousel",v.propTypes={className:l.default.string,children:l.default.node,showArrows:l.default.bool,showStatus:l.default.bool,showIndicators:l.default.bool,infiniteLoop:l.default.bool,showThumbs:l.default.bool,thumbWidth:l.default.number,selectedItem:l.default.number,onClickItem:l.default.func.isRequired,onClickThumb:l.default.func.isRequired,onChange:l.default.func.isRequired,axis:l.default.oneOf(["horizontal","vertical"]),verticalSwipe:l.default.oneOf(["natural","standard"]),width:p.unit,useKeyboardArrows:l.default.bool,autoPlay:l.default.bool,stopOnHover:l.default.bool,interval:l.default.number,transitionTime:l.default.number,swipeScrollTolerance:l.default.number,swipeable:l.default.bool,dynamicHeight:l.default.bool,emulateTouch:l.default.bool,statusFormatter:l.default.func.isRequired,centerMode:l.default.bool,centerSlidePercentage:l.default.number},v.defaultProps={showIndicators:!0,showArrows:!0,showStatus:!0,showThumbs:!0,infiniteLoop:!1,selectedItem:0,axis:"horizontal",verticalSwipe:"standard",width:"100%",useKeyboardArrows:!1,autoPlay:!1,stopOnHover:!0,interval:3e3,transitionTime:350,swipeScrollTolerance:5,swipeable:!0,dynamicHeight:!1,emulateTouch:!1,onClickItem:m,onClickThumb:m,onChange:m,statusFormatter:function(e,t){return e+" of "+t},centerMode:!1,centerSlidePercentage:80};var y=function(){var e=this;this.setThumbsRef=function(t){e.thumbsRef=t},this.setCarouselWrapperRef=function(t){e.carouselWrapperRef=t},this.setListRef=function(t){e.listRef=t},this.setItemsWrapperRef=function(t){e.itemsWrapperRef=t},this.setItemsRef=function(t,i){e.itemsRef||(e.itemsRef=[]),e.itemsRef[i]=t},this.autoPlay=function(){!e.state.autoPlay||o.Children.count(e.props.children)<=1||(clearTimeout(e.timer),e.timer=setTimeout(function(){e.increment()},e.props.interval))},this.clearAutoPlay=function(){e.state.autoPlay&&clearTimeout(e.timer)},this.resetAutoPlay=function(){e.clearAutoPlay(),e.autoPlay()},this.stopOnHover=function(){e.setState({isMouseEntered:!0}),e.clearAutoPlay()},this.startOnLeave=function(){e.setState({isMouseEntered:!1}),e.autoPlay()},this.navigateWithKeyboard=function(t){var i="horizontal"===e.props.axis,n=i?37:38;(i?39:40)===t.keyCode?e.increment():n===t.keyCode&&e.decrement()},this.updateSizes=function(){if(e.state.initialized){var t="horizontal"===e.props.axis,i=e.itemsRef[0],n=t?i.clientWidth:i.clientHeight;e.setState(function(e,i){return{itemSize:n,wrapperSize:t?n*o.Children.count(i.children):n}}),e.thumbsRef&&e.thumbsRef.updateSizes()}},this.setMountState=function(){e.setState({hasMount:!0}),e.updateSizes()},this.handleClickItem=function(t,i){0!=o.Children.count(e.props.children)&&(e.state.cancelClick?e.setState({cancelClick:!1}):(e.props.onClickItem(t,i),t!==e.state.selectedItem&&e.setState({selectedItem:t})))},this.handleOnChange=function(t,i){o.Children.count(e.props.children)<=1||e.props.onChange(t,i)},this.handleClickThumb=function(t,i){e.props.onClickThumb(t,i),e.selectItem({selectedItem:t})},this.onSwipeStart=function(){e.setState({swiping:!0}),e.clearAutoPlay()},this.onSwipeEnd=function(){e.setState({swiping:!1}),e.autoPlay()},this.onSwipeMove=function(t){var i="horizontal"===e.props.axis,n=o.Children.count(e.props.children),s=e.getPosition(e.state.selectedItem),r=e.props.infiniteLoop?e.getPosition(n-1)-100:e.getPosition(n-1),a=i?t.x:t.y,l=a;0===s&&a>0&&(l=0),s===r&&a<0&&(l=0);var u=s+100/(e.state.itemSize/l);e.props.infiniteLoop&&(0===e.state.selectedItem&&u>-100?u-=100*n:e.state.selectedItem===n-1&&u<100*-n&&(u+=100*n)),u+="%",e.setPosition(u);var d=Math.abs(a)>e.props.swipeScrollTolerance;return d&&!e.state.cancelClick&&e.setState({cancelClick:!0}),d},this.setPosition=function(t,i){var n=a.default.findDOMNode(e.listRef);["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach(function(i){n.style[i]=(0,d.default)(t,e.props.axis)}),i&&n.offsetLeft},this.resetPosition=function(){var t=e.getPosition(e.state.selectedItem)+"%";e.setPosition(t)},this.decrement=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.moveTo(e.state.selectedItem-("number"==typeof t?t:1),i)},this.increment=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.moveTo(e.state.selectedItem+("number"==typeof t?t:1),i)},this.moveTo=function(t,i){var n=o.Children.count(e.props.children)-1,s=e.props.infiniteLoop&&!i&&(t<0||t>n),r=t;t<0&&(t=e.props.infiniteLoop?n:0),t>n&&(t=e.props.infiniteLoop?0:n),s?e.setState({swiping:!0},function(){r<0?e.props.centerMode&&"horizontal"===e.props.axis?e.setPosition("-"+((n+2)*e.props.centerSlidePercentage-(100-e.props.centerSlidePercentage)/2)+"%",!0):e.setPosition("-"+100*(n+2)+"%",!0):r>n&&e.setPosition(0,!0),e.selectItem({selectedItem:t,swiping:!1})}):e.selectItem({selectedItem:t}),e.state.autoPlay&&!1===e.state.isMouseEntered&&e.resetAutoPlay()},this.onClickNext=function(){e.increment(1,!1)},this.onClickPrev=function(){e.decrement(1,!1)},this.onSwipeForward=function(){e.increment(1,!0)},this.onSwipeBackwards=function(){e.decrement(1,!0)},this.changeItem=function(t){if(!t.key||"Enter"===t.key){var i=t.target.value;e.selectItem({selectedItem:i})}},this.selectItem=function(t,i){e.setState(t,i),e.handleOnChange(t.selectedItem,o.Children.toArray(e.props.children)[t.selectedItem])},this.getInitialImage=function(){var t=e.props.selectedItem,i=e.itemsRef&&e.itemsRef[t],n=i&&i.getElementsByTagName("img");return n&&n[t]},this.getVariableImageHeight=function(t){var i=e.itemsRef&&e.itemsRef[t],n=i&&i.getElementsByTagName("img");if(e.state.hasMount&&n.length>0){var s=n[0];if(!s.complete){s.addEventListener("load",function t(){e.forceUpdate(),s.removeEventListener("load",t)})}var o=s.clientHeight;return o>0?o:null}return null}};t.default=v},194:function(e,t,i){var n;!function(){"use strict";var i={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var r=s.apply(null,n);r&&e.push(r)}else if("object"===o)for(var a in n)i.call(n,a)&&n[a]&&e.push(a)}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(n=function(){return s}.apply(t,[]))||(e.exports=n)}()},195:function(e,t,i){var n,s,o;s=[t,i(0),i(5)],void 0===(o="function"==typeof(n=function(e,t,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.setHasSupportToCaptureOption=l;var n=o(t),s=o(i);function o(e){return e&&e.__esModule?e:{default:e}}var r=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),a=!1;function l(e){a=e}try{addEventListener("test",null,Object.defineProperty({},"capture",{get:function(){l(!0)}}))}catch(f){}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{capture:!0};return a?e:e.capture}function d(e){if("touches"in e){var t=e.touches[0],i=t.pageX,n=t.pageY;return{x:i,y:n}}var s=e.screenX,o=e.screenY;return{x:s,y:o}}var c=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,n=Array(i),s=0;s<i;s++)n[s]=arguments[s];var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(n)));return o._handleSwipeStart=o._handleSwipeStart.bind(o),o._handleSwipeMove=o._handleSwipeMove.bind(o),o._handleSwipeEnd=o._handleSwipeEnd.bind(o),o._onMouseDown=o._onMouseDown.bind(o),o._onMouseMove=o._onMouseMove.bind(o),o._onMouseUp=o._onMouseUp.bind(o),o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this.swiper&&this.swiper.addEventListener("touchmove",this._handleSwipeMove,u({capture:!0,passive:!1}))}},{key:"componentWillUnmount",value:function(){this.swiper&&this.swiper.removeEventListener("touchmove",this._handleSwipeMove,u({capture:!0,passive:!1}))}},{key:"_onMouseDown",value:function(e){this.props.allowMouseEvents&&(this.mouseDown=!0,document.addEventListener("mouseup",this._onMouseUp),document.addEventListener("mousemove",this._onMouseMove),this._handleSwipeStart(e))}},{key:"_onMouseMove",value:function(e){this.mouseDown&&this._handleSwipeMove(e)}},{key:"_onMouseUp",value:function(e){this.mouseDown=!1,document.removeEventListener("mouseup",this._onMouseUp),document.removeEventListener("mousemove",this._onMouseMove),this._handleSwipeEnd(e)}},{key:"_handleSwipeStart",value:function(e){var t=d(e),i=t.x,n=t.y;this.moveStart={x:i,y:n},this.props.onSwipeStart(e)}},{key:"_handleSwipeMove",value:function(e){if(this.moveStart){var t=d(e),i=t.x,n=t.y,s=i-this.moveStart.x,o=n-this.moveStart.y;this.moving=!0;var r=this.props.onSwipeMove({x:s,y:o},e);r&&e.preventDefault(),this.movePosition={deltaX:s,deltaY:o}}}},{key:"_handleSwipeEnd",value:function(e){this.props.onSwipeEnd(e);var t=this.props.tolerance;this.moving&&this.movePosition&&(this.movePosition.deltaX<-t?this.props.onSwipeLeft(1,e):this.movePosition.deltaX>t&&this.props.onSwipeRight(1,e),this.movePosition.deltaY<-t?this.props.onSwipeUp(1,e):this.movePosition.deltaY>t&&this.props.onSwipeDown(1,e)),this.moveStart=null,this.moving=!1,this.movePosition=null}},{key:"render",value:function(){var e=this;return n.default.createElement(this.props.tagName,{ref:function(t){return e.swiper=t},onMouseDown:this._onMouseDown,onTouchStart:this._handleSwipeStart,onTouchEnd:this._handleSwipeEnd,className:this.props.className,style:this.props.style},this.props.children)}}]),t}(t.Component);c.displayName="ReactSwipe",c.propTypes={tagName:s.default.string,className:s.default.string,style:s.default.object,children:s.default.node,allowMouseEvents:s.default.bool,onSwipeUp:s.default.func,onSwipeDown:s.default.func,onSwipeLeft:s.default.func,onSwipeRight:s.default.func,onSwipeStart:s.default.func,onSwipeMove:s.default.func,onSwipeEnd:s.default.func,tolerance:s.default.number.isRequired},c.defaultProps={tagName:"div",allowMouseEvents:!1,onSwipeUp:function(){},onSwipeDown:function(){},onSwipeLeft:function(){},onSwipeRight:function(){},onSwipeStart:function(){},onSwipeMove:function(){},onSwipeEnd:function(){},tolerance:0},e.default=c})?n.apply(t,s):n)||(e.exports=o)},196:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.outerWidth=function(e){var t=e.offsetWidth,i=getComputedStyle(e);return t+=parseInt(i.marginLeft)+parseInt(i.marginRight)}},197:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.unit=function(e,t,i){if(!/(pt|px|em|rem|vw|vh|%)$/.test(e[t]))return new Error("Invalid prop `"+t+"` supplied to `"+i+"`. Validation failed. It needs to be a size unit like pt, px, em, rem, vw, %")}}}]);
//# sourceMappingURL=8-dc79eb847268f91a6fff.js.map