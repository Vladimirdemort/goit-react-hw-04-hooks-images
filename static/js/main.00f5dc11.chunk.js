(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3lXiS",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__2vBeE"}},11:function(e,t,a){e.exports={Overlay:"Modal_Overlay__26ZyM",Modal:"Modal_Modal__2gV47"}},13:function(e,t,a){e.exports={Button:"Button_Button__tXl3K"}},15:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__2sSmw"}},20:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(8),c=a.n(r),i=(a(20),a(3)),s=a(4),l=a(6),m=a(5),u=a(12),h=a(13),g=a.n(h),d=a(0);function p(e){var t=e.onClick;return Object(d.jsx)("button",{className:g.a.Button,type:"button",onClick:t,children:"Load more"})}var j=a(10),b=a.n(j);function f(e){var t=e.url,a=e.alt,n=e.onGetImg,o=e.largeImageURL;return Object(d.jsx)("li",{className:b.a.ImageGalleryItem,onClick:function(){n(o,a)},children:Object(d.jsx)("img",{src:t,alt:a,width:"200",className:b.a.ImageGalleryItemImage})})}var y=a(11),v=a.n(y),S=document.querySelector("#modal-root"),O=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).onCloseByClick=function(t){"DIV"===t.target.nodeName&&e.props.onClose()},e.onCloseByKedown=function(t){"Escape"===t.code&&e.props.onClose()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){console.log("componentDidMount"),window.addEventListener("click",this.onCloseByClick),window.addEventListener("keydown",this.onCloseByKedown)}},{key:"componentWillUnmount",value:function(){console.log("componentWillUnmount"),window.removeEventListener("keydown",this.onCloseByKedown)}},{key:"render",value:function(){var e=this.props,t=e.onGetImg,a=e.onClose;return Object(r.createPortal)(Object(d.jsx)("div",{className:v.a.Overlay,onClose:a,children:Object(d.jsx)("div",{className:v.a.Modal,children:Object(d.jsx)("img",{src:t.img,alt:t.alt})})}),S)}}]),a}(n.Component),I=O,_=a(14),x=a.n(_),w=a(15),C=a.n(w),L=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={mainURL:"https://pixabay.com/api/",secondaryURL:"&image_type=photo&orientation=horizontal&per_page=12",myKey:"23677072-ad1f1d27f5221362a9cf8bc21",imageList:[],query:"",page:1,status:"idle",error:null,showModal:!1,modalImage:""},e.loadMore=function(){e.setState((function(e){return{page:e.page+1}}));var t=e.state,a=t.mainURL,n=t.secondaryURL,o=t.query,r=t.page,c=t.myKey;fetch("".concat(a,"?q=").concat(o,"&page=").concat(r,"&key=").concat(c).concat(n)).then((function(e){return e.ok?e.json():Promise.reject(new Error(" Can't find ".concat(o)))})).then((function(t){return e.setState((function(e){return{imageList:[].concat(Object(u.a)(e.imageList),Object(u.a)(t.hits)),status:"resolved"}}))})).catch((function(t){return e.setState({error:t})}))},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.setModalImg=function(t,a){e.setState({modalImage:{img:t,alt:a},showModal:!0})},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,n=e.imageName,o=this.props.imageName;if(n!==o){this.setState({status:"pending"}),this.setState({status:"pending"});var r=o.split(" ").join("+");this.setState({query:r});var c=this.state,i=c.mainURL,s=c.secondaryURL,l=c.page,m=c.myKey;fetch("".concat(i,"?key=").concat(m,"&q=").concat(r,"&").concat(s,"&page=").concat(l)).then((function(e){return e.json()})).then((function(e){return a.setState((function(t){return{imageList:e.hits,page:t.page+1,status:"resolved"}}))}))}console.log(this.state.imageList)}},{key:"render",value:function(){var e=this,t=this.state.imageList.map((function(t){var a=t.id,n=t.webformatURL,o=t.tags,r=t.largeImageURL;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(f,{url:n,alt:o,largeImageURL:r,onGetImg:e.setModalImg},a.toString())})}));return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("ul",{className:C.a.ImageGallery,children:t}),0!==this.state.imageList.length&&Object(d.jsx)(p,{onClick:this.loadMore}),"pending"===this.state.status&&Object(d.jsx)(x.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3}),this.state.showModal&&Object(d.jsx)(I,{onGetImg:this.state.modalImage,onClose:this.toggleModal})]})}}]),a}(o.a.Component),N=L,B=a(7),k=a.n(B),F=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={imageName:""},e.handleChange=function(t){e.setState({imageName:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.imageName.trim()&&(e.props.onSubmit(e.state.imageName),e.setState({imageName:""}))},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(d.jsx)("header",{className:k.a.Searchbar,children:Object(d.jsxs)("form",{className:k.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(d.jsx)("button",{type:"submit",className:k.a.SearchFormButton,children:Object(d.jsx)("span",{className:k.a.SearchFormButtonLabel,children:"Search"})}),Object(d.jsx)("input",{className:k.a.SearchFormInput,type:"text",autoomplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.imageName,onChange:this.handleChange})]})})}}]),a}(o.a.Component),M=F,G=(a(42),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={imageName:""},e.handleFormSubmit=function(t){e.setState({imageName:t})},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(M,{onSubmit:this.handleFormSubmit}),Object(d.jsx)(N,{imageName:this.state.imageName})]})}}]),a}(o.a.Component)),U=G;c.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(U,{})}),document.getElementById("root"))},7:function(e,t,a){e.exports={Searchbar:"SearchBar_Searchbar__DEthE",SearchForm:"SearchBar_SearchForm__1to5V",SearchFormButton:"SearchBar_SearchFormButton__27zqC",SearchFormButtonLabel:"SearchBar_SearchFormButtonLabel__1X9Gn",SearchFormInput:"SearchBar_SearchFormInput__5T-PZ"}}},[[43,1,2]]]);
//# sourceMappingURL=main.00f5dc11.chunk.js.map