(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{107:function(t,e,r){"use strict";r.r(e);var s={name:"Title"},a=r(14),o=Object(a.a)(s,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-surface border border-on-surface h-fit-content w-fit-content p-5"},[e("div",{staticClass:"text-center "},[e("h1",{staticClass:"text-6xl text-primary hover:text-on-primary"},[this._v("Shortcutts")]),this._v(" "),e("h4",{staticClass:"text-primary-variant"},[this._v("Learning shortcuts made easy!")])])])}],!1,null,null,null).exports,i={name:"ShortcutKey",props:{text:{default:void 0,type:String,required:!1},keys:{default:()=>[],type:Array,required:!0}}},n=Object(a.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-surface border border-border hover:border-border-variant w-fit-content p-3 my-2 overflow-hidden whitespace-no-wrap"},[e("span",{staticClass:"text-secondary mr-2",domProps:{textContent:this._s(this.text)}}),this._v(" "),e("code",{staticClass:"text-center text-primary-variant px-2 py-1 border border-primary overflow-hidden",domProps:{textContent:this._s(this.keys.join(" + "))}})])}),[],!1,null,null,null).exports,l={name:"ShortcutTitle",props:{roundedBorder:{default:!1,type:Boolean,required:!1},text:{default:void 0,type:String,required:!1}}},c={components:{Title:o,ShortcutKey:n,ShortcutTitle:Object(a.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-full bg-surface border border-primary p-2 overflow-hidden select-none",class:{"rounded-lg":this.roundedBorder}},[e("h1",{staticClass:"text-center text-xl text-primary-variant px-2 py-1",domProps:{textContent:this._s(this.text)}})])}),[],!1,null,null,null).exports},mounted(){document.getElementById("content").style.marginTop=1.5*document.getElementById("title").offsetHeight+"px"}},d=Object(a.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Title",{staticClass:"fixed top-0 inset-x-0 mx-auto mt-5 z-0",attrs:{id:"title"}}),t._v(" "),r("div",{staticClass:"bg-background border rounded-lg border-border relative z-10 ",attrs:{id:"content"}},[r("div",{staticClass:"p-5"},[r("ShortcutTitle",{attrs:{"rounded-border":!0,text:"Google Docs"}})],1),t._v(" "),r("div",{staticClass:"grid custom-grid p-5"},[r("div",[r("ShortcutTitle",{attrs:{text:"Common actions"}}),t._v(" "),r("ShortcutKey",{attrs:{keys:["Ctrl","C"],text:"Copy"}}),t._v(" "),r("ShortcutKey",{attrs:{keys:["Ctrl","X"],text:"Cut"}}),t._v(" "),r("ShortcutKey",{attrs:{keys:["Ctrl","V"],text:"Paste"}}),t._v(" "),r("ShortcutKey",{attrs:{keys:["Ctrl","Shift","V"],text:"Paste without formatting"}}),t._v(" "),r("ShortcutKey",{attrs:{keys:["Ctrl","Z"],text:"Undo"}}),t._v(" "),r("ShortcutKey",{attrs:{keys:["Ctrl","Shift","Z"],text:"Redo"}})],1),t._v(" "),r("div",[r("ShortcutTitle",{attrs:{text:"Text formatting"}}),t._v(" "),r("ShortcutKey",{attrs:{keys:["Ctrl","B"],text:"Bold"}}),t._v(" "),r("ShortcutKey",{attrs:{keys:["Ctrl","I"],text:"Italicize"}}),t._v(" "),r("ShortcutKey",{attrs:{keys:["Ctrl","U"],text:"Underline"}})],1),t._v(" "),r("div",[r("ShortcutTitle",{attrs:{text:"Paragraph formatting"}}),t._v(" "),r("ShortcutKey",{attrs:{keys:["Ctrl","]"],text:"Increase paragraph indentation"}}),t._v(" "),r("ShortcutKey",{attrs:{keys:["Ctrl","["],text:"Decrease paragraph indentation"}}),t._v(" "),r("ShortcutKey",{attrs:{keys:["Ctrl","Alt","0"],text:"Apply normal text style"}})],1)])])],1)}),[],!1,null,null,null);e.default=d.exports}}]);