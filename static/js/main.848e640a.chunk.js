(this["webpackJsonpregion-selector"]=this["webpackJsonpregion-selector"]||[]).push([[0],{12:function(e,t,n){e.exports={ordN:"Crop_ordN__F6Lkk",ordNe:"Crop_ordNe__3yQCN",ordNw:"Crop_ordNw__3FA7M",ordS:"Crop_ordS__3XH0n",ordSe:"Crop_ordSe__1UAa4",ordSw:"Crop_ordSw__3NCyA",ordE:"Crop_ordE__1HdlK",ordW:"Crop_ordW__3q7pb","ord-n":"Crop_ord-n__d_Xqz","ord-e":"Crop_ord-e__177ep","ord-s":"Crop_ord-s__2Z2QJ","ord-w":"Crop_ord-w__87J-t"}},50:function(e,t,n){},51:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),i=n(42),a=n.n(i),c=(n(50),n(43)),s=n(5),d=(n.p,n(51),n(15)),u=n(1),A={padding:"10px"};var p=function(e){var t=e.crop,n=(e.img,function(e,t){var n=e.crop,r=e.img,i=Object(o.useRef)(null),a=Object(o.useRef)(null);return a.current=r,Object(o.useEffect)((function(){var e=a.current,n=i.current,o=n.getContext("2d");t([n,o,e])}),[n]),i}(e,(function(e){var n=Object(d.a)(e,3),o=n[0],r=n[1],i=n[2],a=i.naturalWidth/i.width,c=i.naturalHeight/i.height,s=window.devicePixelRatio;o.width=t.width*s,o.height=t.height*s,r.setTransform(s,0,0,s,0,0),r.imageSmoothingQuality="high",r.drawImage(i,t.x*a,t.y*c,t.width*a,t.height*c,0,0,t.width,t.height)})));return Object(u.jsx)("canvas",{ref:n,style:A,onClick:function(){return function(e,t){t&&e&&e.toBlob((function(e){var n=window.URL.createObjectURL(e),o=document.createElement("a");o.download="crop_".concat(t.id,".png"),o.href=URL.createObjectURL(e),o.click(),window.URL.revokeObjectURL(n)}),"image/png",1)}(n.current,t)}})},l=n(11),h=n(28),b=n(29),g=n(30),f=n(35),j=n(33),v=n(74),O=n(67),C=n(76),y=n(72),m=n(69),w=n(32),x=n(75),M=n(7),I=n.n(M),D=n(22),R=n.n(D),E=n(45),k=n(73),B=n(68),U=n(25),N=n.n(U),S=function(e){var t=e.number;return Object(u.jsxs)("div",{className:"rmc-number",children:[t,Object(u.jsx)("style",{jsx:!0,children:"\n      .rmc-number {\n        width: 15px;\n        height: 15px;\n        float: left;\n        font-size: 12px;\n        text-align: center;\n        line-height: 15px;\n        color: white;\n        opacity: 0.8;\n      }\n    "})]})};I.a.number;S.defaultProps={number:""};var L=n(12),T=n.n(L),z=function(e){Object(f.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(h.a)(this,n);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).prevCoordinate={},e.prevCoordinates=[],e.isLeftBtnActive=!1,e.isRightBtnActive=!1,e.actionTrigger=function(e,t,n,o,r,i){return t.type,t.type,n},e.handleChange=function(t){var n=e.props,o=n.index,r=n.coordinate,i=n.coordinate,a=i.x,c=i.y,s=n.coordinates,d=n.onResize,u=(n.onRestore,n.onDrag),A=n.onChange,p=t.dx,h=t.dy,b={};if("resizemove"===t.type){var g=t.rect,f=g.width,j=g.height,v=t.deltaRect,C=v.left,y=v.top;b=Object(l.a)(Object(l.a)({},r),{},{x:a+C,y:c+y,width:f,height:j})}"dragmove"===t.type&&(b=Object(l.a)(Object(l.a)({},r),{},{x:a+p,y:c+h}));var m=Object(k.a)(o,b)(s);Object(O.a)(Function,d)&&"resizemove"===t.type&&d(b,o,m),Object(O.a)(Function,A)&&["dragmove","resizemove"].includes(t.type)&&A(b,o,m),Object(O.a)(Function,u)&&"dragmove"===t.type&&u(b,o,m)},e.changeStartPosition=function(t){var n=e.props,o=n.index,r=n.coordinate,i=n.coordinates;["dragstart","resizestart"].includes(t.type)&&(e.prevCoordinate=Object(l.a)({},r),e.prevCoordinates=Object(E.a)(i),e.prevCoordinates=Object(k.a)(o,e.prevCoordinate,i))},e.handleRestore=function(t){var n=e.props,o=n.index,r=n.onRestore;Object(O.a)(Function,r)&&r(e.prevCoordinate,o,e.prevCoordinates)},e.handleDelete=function(t){var n=e.props,o=n.index,r=n.coordinate,i=n.onDelete,a=n.coordinates,c=Object(B.a)(o,1)(a);Object(O.a)(Function,i)&&i(r,o,c)},e.onContextMenu=function(t){t.preventDefault(),t.stopPropagation(),2===t.button&&(!1===e.isLeftBtnActive&&e.handleDelete(),!0===e.isLeftBtnActive&&(e.handleRestore(),e.isLeftBtnActive=!1))},e.onMouseDown=function(t){0===t.button&&(e.isLeftBtnActive=!0),2===t.button&&(e.isRightBtnActive=!0)},e.onMouseUp=function(t){0===t.button&&(e.isLeftBtnActive=!1),2===t.button&&(e.isRightBtnActive=!1)},e.onKeyDown=function(t){t.preventDefault(),t.stopPropagation(),"Escape"===t.code&&(e.handleRestore(),e.isLeftBtnActive=!1)},e.onKeyUp=function(e){e.preventDefault(),e.stopPropagation()},e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){N()(this.crop).draggable({modifiers:[N.a.modifiers.restrictRect({restriction:"parent"})]}).resizable({edges:{left:!0,right:!0,bottom:!0,top:!0},modifiers:[N.a.modifiers.restrictRect({restriction:"parent"})]}).on(["dragstart","resizestart"],this.changeStartPosition).on(["dragmove","dragend","resizemove","resizeend"],this.handleChange).actionChecker(this.actionTrigger)}},{key:"shouldComponentUpdate",value:function(e){return!Object(y.a)(e.coordinate,this.props.coordinate)||e.index!==this.props.index}},{key:"componentWillUnmount",value:function(){N()(this.crop).unset()}},{key:"render",value:function(){var e=this,t=this.props,o=t.coordinate,r=t.index;return Object(u.jsxs)("div",{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onContextMenu:this.onContextMenu,style:n.cropStyle(o),ref:function(t){return e.crop=t},onKeyDown:this.onKeyDown,onKeyUp:this.onKeyUp,tabIndex:"0",children:[Object(u.jsx)(S,{number:r+1}),[T.a.ordN,T.a.ordNe,T.a.ordNw,T.a.ordS,T.a.ordSe,T.a.ordSw,T.a.ordE,T.a.ordW].map((function(e,t){return Object(u.jsx)("div",{className:e},t)}))]})}}]),n}(o.Component);z.cropStyle=function(e){var t=e.x,n=e.y;return{display:"inline-block",position:"absolute",transform:"translate3d(0, 0, 0)",boxSizing:"border-box",cursor:"move",width:e.width,height:e.height,top:n,left:t,border:"1px solid",borderImageSource:'url("data:image/gif;base64,R0lGODlhCgAKAJECAAAAAP///////wAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEI5RDc5MTFDNkE2MTFFM0JCMDZEODI2QTI4MzJBOTIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEI5RDc5MTBDNkE2MTFFM0JCMDZEODI2QTI4MzJBOTIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuZGlkOjAyODAxMTc0MDcyMDY4MTE4MDgzQzNDMjA5MzREQ0ZDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjAyODAxMTc0MDcyMDY4MTE4MDgzQzNDMjA5MzREQ0ZDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEBQoAAgAsAAAAAAoACgAAAhWEERkn7W3ei7KlagMWF/dKgYeyGAUAIfkEBQoAAgAsAAAAAAoACgAAAg+UYwLJ7RnQm7QmsCyVKhUAIfkEBQoAAgAsAAAAAAoACgAAAhCUYgLJHdiinNSAVfOEKoUCACH5BAUKAAIALAAAAAAKAAoAAAIRVISAdusPo3RAzYtjaMIaUQAAIfkEBQoAAgAsAAAAAAoACgAAAg+MDiem7Q8bSLFaG5il6xQAIfkEBQoAAgAsAAAAAAoACgAAAg+UYRLJ7QnQm7SmsCyVKhUAIfkEBQoAAgAsAAAAAAoACgAAAhCUYBLJDdiinNSEVfOEKoECACH5BAUKAAIALAAAAAAKAAoAAAIRFISBdusPo3RBzYsjaMIaUQAAOw==")',borderImageSlice:"1",borderImageRepeat:"repeat",msTouchAction:"manipulation",touchAction:"manipulation",userSelect:"manipulation"}};I.a.shape({x:I.a.number.isRequired,y:I.a.number.isRequired,width:I.a.number.isRequired,height:I.a.number.isRequired});var Y=z,Q=n(70),_=n(71),F=(Object(w.a)(Object(Q.a)("id",R.a.generate())),Object(w.a)(Object(_.a)(["id"])),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=function(e){return Object(v.a)(Object(O.a)(Number),Object(C.a)(Object(y.a)(NaN)))(e)};return t(e.x)&&t(e.y)}),J=function(e){Object(f.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(h.a)(this,n);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).drawingIndex=-1,e.pointA={},e.id=R.a.generate(),e.prevCoordinate={},e.prevCoordinates=[],e.isEscBtnTarget=!1,e.isNewCrop=!1,e.coorList=[],e.isLeftBtnTarget=!1,e.renderCrops=function(e){return Object(m.a)(w.a)((function(t,n){return Object(u.jsx)(Y,Object(l.a)({index:n,coordinate:t},e),t.id||n)}))(e.coordinates)},e.getCursorPosition=function(t){var n=e.container.getBoundingClientRect(),o=n.left,r=n.top;return{x:t.clientX-o,y:t.clientY-r}},e.handleMouseDown=function(t){var n=e.props.coordinates;if(0===t.button&&(e.isLeftBtnTarget=!0,t.target===e.img||t.target===e.container)){var o=e.getCursorPosition(t),r=o.x,i=o.y;e.drawingIndex=n.length,e.pointA={x:r,y:i},e.id=R.a.generate(),e.leftClickActive=!0,e.prevCoordinate={},e.prevCoordinates=Object(x.a)(n)}},e.handleMouseMove=function(t){if(0===t.button&&!0===e.isEscBtnTarget)return null;if(0===t.button&&!1===e.isEscBtnTarget){var n=e.props,o=n.onDraw,r=n.onChange,i=n.coordinates,a=Object(g.a)(e).pointA;if(F(a)){var c=e.getCursorPosition(t),s={x:Math.min(a.x,c.x),y:Math.min(a.y,c.y),width:Math.abs(a.x-c.x),height:Math.abs(a.y-c.y),id:e.id},d=Object(x.a)(i);d[e.drawingIndex]=s,Object(O.a)(Function,o)&&o(s,e.drawingIndex,d),Object(O.a)(Function,r)&&r(s,e.drawingIndex,d)}}},e.resetCrop=function(t){var n=e.props,o=(n.onDraw,n.onChange,n.onRestore);Object(O.a)(Function,o)&&o(e.prevCoordinate,e.drawingIndex-1,e.prevCoordinates),e.pointA={},e.isNewCrop=!1,e.isLeftBtnTarget=!1,e.isEscBtnTarget=!1},e.handleMouseUp=function(t){var n=e.props;n.onDraw,n.onChange;e.pointA={},e.isNewCrop=!1,e.isLeftBtnTarget=!1,e.isEscBtnTarget=!1},e.onKeyDownParent=function(t){"Escape"===t.code&&(e.isEscBtnTarget=!0)},e.onKeyUpParent=function(e){e.preventDefault(),e.stopPropagation()},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.src,o=t.width,r=t.height,i=t.onLoad;return Object(u.jsxs)("div",{style:{display:"inline-block",position:"relative"},onMouseDown:this.handleMouseDown,onMouseMove:this.handleMouseMove,onMouseUp:function(){return e.isEscBtnTarget?e.resetCrop():e.handleMouseUp()},ref:function(t){return e.container=t},onKeyDown:this.onKeyDownParent,onKeyUp:this.onKeyUpParent,tabIndex:"0",children:[Object(u.jsx)("img",{ref:function(t){return e.img=t},src:n,width:o,height:r,onLoad:i,alt:"",draggable:!1}),this.renderCrops(this.props)]})}}]),n}(o.Component);I.a.string,I.a.arrayOf,I.a.number,I.a.func;J.defaultProps={coordinates:[],src:""};var Z=J,P={display:"flex",flexFlow:"row wrap",alignItems:"start",justifyAlign:"start",justifyContent:"start",width:"inherit",height:"300px",overflow:"auto",backgroundColor:"lightgrey"},G={width:"600px",height:"70vh",backgroundColor:"lightgrey"},W=function(e){var t=e.src,n=Object(o.useState)([]),r=Object(d.a)(n,2),i=r[0],a=r[1],c=Object(o.useState)([]),s=Object(d.a)(c,2),A=s[0],l=s[1],h=Object(o.useRef)(null),b=Object(o.useCallback)((function(e){a([]),l([]),h.current=e.target}),[]),g=Object(o.useCallback)((function(e,t,n){a(n)}),[]),f=Object(o.useCallback)((function(e,t,n){a(n),l(n)}),[]),j=Object(o.useCallback)((function(e,t,n){a(n),l(n)}),[]);return Object(u.jsxs)("div",{style:G,onClick:function(e){0===e.button&&l(i)},children:[Object(u.jsx)(Z,{src:t,width:"600",coordinates:i,onChange:g,onDelete:f,onRestore:j,onLoad:b}),Object(u.jsx)("div",{style:P,children:A.map((function(e,t){return Object(u.jsx)(p,{index:e.id||t,crop:e,img:h.current},e.id||t)}))})]})},K=function(){var e=Object(o.useState)(),t=Object(d.a)(e,2),n=t[0],r=t[1];return Object(u.jsxs)("div",{style:{position:"absolute",top:"10%",left:"50%",transform:"translate(-50%, -10%)",display:"flex",flexFlow:"column",alignItems:"center",justifyAlign:"center",justifyContent:"space-evenly",height:"100vh"},children:[Object(u.jsx)("div",{children:Object(u.jsx)("input",{type:"file",accept:"image/*",onChange:function(e){if(e.target.files&&e.target.files.length>0){var t=new FileReader;t.addEventListener("load",(function(){return r(t.result)})),t.readAsDataURL(e.target.files[0])}}})}),Object(u.jsx)(W,{src:n}),Object(u.jsx)("div",{})]})};var V=function(){return Object(u.jsx)(c.a,{basename:"/",children:Object(u.jsx)(s.c,{children:Object(u.jsx)(s.a,{path:"/",component:K})})})};a.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(V,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.848e640a.chunk.js.map