(()=>{"use strict";var a={75:(a,l,e)=>{e.r(l)},70:(a,l)=>{Object.defineProperty(l,"__esModule",{value:!0}),l.createElement=void 0,l.createElement=({element:a,className:l,innerHtml:e,data:t,value:c})=>{const o=document.createElement(a);return o.className=l,e&&(o.innerHTML=e),t&&(o.dataset.keyCode=t),c&&(o.dataset.value=c),o}},695:(a,l,e)=>{Object.defineProperty(l,"__esModule",{value:!0}),l.monic=void 0;const t=e(70),c=e(192),{body:o}=document;l.monic=()=>{const a=(0,t.createElement)({element:"div",className:"wrapper"}),l=(0,t.createElement)({element:"textarea",className:"text",value:""});o.append(a),a.append(l)},o.addEventListener("keydown",(a=>{const l=localStorage.getItem("case"),e=localStorage.getItem("language")||"en";if("ShiftLeft"===a.code||"ShiftRight"===a.code){const a="en"===e?"ru":"en";o.addEventListener("keyup",(l=>{"AltLeft"!==l.code&&"AltRight"!==l.code||(localStorage.setItem("language",a),o.childNodes[2].remove(),(0,c.virtualKeyboard)())}))}if("CapsLock"===a.code){const a="lowerCase"===l||null===l?"upperCase":"lowerCase";localStorage.setItem("case",a),o.childNodes[2].remove(),(0,c.virtualKeyboard)()}}))},255:(a,l)=>{Object.defineProperty(l,"__esModule",{value:!0}),l.ABC=l.Abc=l.RuABC=l.RuAbc=void 0,l.RuAbc=[[{value:"ё",className:"",data:"192",location:""},{value:"1",className:"",data:"49",location:""},{value:"2",className:"",data:"50",location:""},{value:"3",className:"",data:"51",location:""},{value:"4",className:"",data:"52",location:""},{value:"5",className:"",data:"53",location:""},{value:"6",className:"",data:"54",location:""},{value:"7",className:"",data:"55",location:""},{value:"8",className:"",data:"56",location:""},{value:"9",className:"",data:"57",location:""},{value:"0",className:"",data:"48",location:""},{value:"-",className:"",data:"109",location:"3"},{value:"=",className:"",data:"61",location:""},{value:"Backspace",className:"backspace",data:"8",location:""}],[{value:"Tab",className:"tab",data:"9",location:""},{value:"й",className:"",data:"89",location:""},{value:"ц",className:"",data:"87",location:""},{value:"у",className:"",data:"85",location:""},{value:"к",className:"",data:"75",location:""},{value:"е",className:"",data:"69",location:""},{value:"н",className:"",data:"78",location:""},{value:"г",className:"",data:"71",location:""},{value:"ш",className:"",data:"73",location:""},{value:"щ",className:"",data:"79",location:""},{value:"з",className:"",data:"90",location:""},{value:"х",className:"",data:"219",location:""},{value:"ъ",className:"",data:"221",location:""},{value:"\\",className:"",data:"220",location:""},{value:"Del",className:"del",data:"46",location:"3"}],[{value:"Caps Lock",className:"caps_lock",data:"20",location:""},{value:"ф",className:"",data:"70",location:""},{value:"ы",className:"",data:"89",location:""},{value:"в",className:"",data:"86",location:""},{value:"а",className:"",data:"65",location:""},{value:"п",className:"",data:"80",location:""},{value:"р",className:"",data:"82",location:""},{value:"о",className:"",data:"79",location:""},{value:"л",className:"",data:"76",location:""},{value:"д",className:"",data:"68",location:""},{value:"ж",className:"",data:"186",location:""},{value:"э",className:"",data:"69",location:""},{value:"Enter",className:"enter",data:"13",location:""}],[{value:"Shift",className:"shift",data:"16",location:"1"},{value:"\\",className:"",data:"220",location:""},{value:"я",className:"",data:"90",location:""},{value:"ч",className:"",data:"88",location:""},{value:"с",className:"",data:"83",location:""},{value:"м",className:"",data:"77",location:""},{value:"и",className:"",data:"73",location:""},{value:"т",className:"",data:"84",location:""},{value:"ь",className:"",data:"77",location:""},{value:"б",className:"",data:"66",location:""},{value:"ю",className:"",data:"190",location:""},{value:".",className:"",data:"190",location:""},{value:"↑",className:"page_up",data:"38",location:""},{value:"Shift",className:"shiftR",data:"16",location:"1"}],[{value:"Ctrl",className:"ctrl",data:"17",location:"1"},{value:"Win",className:"win",data:"91",location:"1"},{value:"Alt",className:"alt",data:"18",location:"1"},{value:"Space",className:"space",data:"32",location:""},{value:"Alt",className:"alt",data:"18",location:"2"},{value:"Ctrl",className:"ctrl",data:"17",location:"1"},{value:"←",className:"page_left",data:"37",location:""},{value:"↓",className:"page_down",data:"40",location:""},{value:"→",className:"page_right",data:"39",location:""}]],l.RuABC=[[{value:"Ё",className:"",data:"192",location:""},{value:"1",className:"",data:"49",location:""},{value:"2",className:"",data:"50",location:""},{value:"3",className:"",data:"51",location:""},{value:"4",className:"",data:"52",location:""},{value:"5",className:"",data:"53",location:""},{value:"6",className:"",data:"54",location:""},{value:"7",className:"",data:"55",location:""},{value:"8",className:"",data:"56",location:""},{value:"9",className:"",data:"57",location:""},{value:"0",className:"",data:"48",location:""},{value:"-",className:"",data:"109",location:"3"},{value:"=",className:"",data:"61",location:""},{value:"Backspace",className:"backspace",data:"8",location:""}],[{value:"Tab",className:"tab",data:"9",location:""},{value:"Й",className:"",data:"89",location:""},{value:"Ц",className:"",data:"87",location:""},{value:"У",className:"",data:"85",location:""},{value:"К",className:"",data:"75",location:""},{value:"Е",className:"",data:"69",location:""},{value:"Н",className:"",data:"78",location:""},{value:"Г",className:"",data:"71",location:""},{value:"Ш",className:"",data:"73",location:""},{value:"Щ",className:"",data:"79",location:""},{value:"З",className:"",data:"90",location:""},{value:"Х",className:"",data:"219",location:""},{value:"Ъ",className:"",data:"221",location:""},{value:"\\",className:"",data:"220",location:""},{value:"Del",className:"del",data:"46",location:"3"}],[{value:"Caps Lock",className:"caps_lock",data:"20",location:""},{value:"Ф",className:"",data:"70",location:""},{value:"Ы",className:"",data:"89",location:""},{value:"В",className:"",data:"86",location:""},{value:"А",className:"",data:"65",location:""},{value:"П",className:"",data:"80",location:""},{value:"Р",className:"",data:"82",location:""},{value:"О",className:"",data:"79",location:""},{value:"Л",className:"",data:"76",location:""},{value:"Д",className:"",data:"68",location:""},{value:"Ж",className:"",data:"186",location:""},{value:"Э",className:"",data:"69",location:""},{value:"Enter",className:"enter",data:"13",location:""}],[{value:"Shift",className:"shift",data:"16",location:"1"},{value:"\\",className:"",data:"220",location:""},{value:"Я",className:"",data:"90",location:""},{value:"Ч",className:"",data:"88",location:""},{value:"С",className:"",data:"83",location:""},{value:"М",className:"",data:"77",location:""},{value:"И",className:"",data:"73",location:""},{value:"Т",className:"",data:"84",location:""},{value:"Ь",className:"",data:"77",location:""},{value:"Б",className:"",data:"66",location:""},{value:"Ю",className:"",data:"190",location:""},{value:".",className:"",data:"190",location:""},{value:"↑",className:"page_up",data:"38",location:""},{value:"Shift",className:"shiftR",data:"16",location:"1"}],[{value:"Ctrl",className:"ctrl",data:"17",location:"1"},{value:"Win",className:"win",data:"91",location:"1"},{value:"Alt",className:"alt",data:"18",location:"1"},{value:"Space",className:"space",data:"32",location:""},{value:"Alt",className:"alt",data:"18",location:"2"},{value:"Ctrl",className:"ctrl",data:"17",location:"1"},{value:"←",className:"page_left",data:"37",location:""},{value:"↓",className:"page_down",data:"40",location:""},{value:"→",className:"page_right",data:"39",location:""}]],l.Abc=[[{value:"`",className:"",data:"192",location:""},{value:"1",className:"",data:"49",location:""},{value:"2",className:"",data:"50",location:""},{value:"3",className:"",data:"51",location:""},{value:"4",className:"",data:"52",location:""},{value:"5",className:"",data:"53",location:""},{value:"6",className:"",data:"54",location:""},{value:"7",className:"",data:"55",location:""},{value:"8",className:"",data:"56",location:""},{value:"9",className:"",data:"57",location:""},{value:"0",className:"",data:"48",location:""},{value:"-",className:"",data:"109",location:"3"},{value:"=",className:"",data:"61",location:""},{value:"Backspace",className:"backspace",data:"8",location:""}],[{value:"Tab",className:"tab",data:"9",location:""},{value:"q",className:"",data:"81",location:""},{value:"w",className:"",data:"87",location:""},{value:"e",className:"",data:"69",location:""},{value:"r",className:"",data:"82",location:""},{value:"t",className:"",data:"84",location:""},{value:"y",className:"",data:"89",location:""},{value:"u",className:"",data:"85",location:""},{value:"i",className:"",data:"73",location:""},{value:"o",className:"",data:"79",location:""},{value:"p",className:"",data:"80",location:""},{value:"[",className:"",data:"160",location:""},{value:"]",className:"",data:"221",location:""},{value:"/",className:"",data:"191",location:""},{value:"Del",className:"del",data:"46",location:"3"}],[{value:"Caps Lock",className:"caps_lock",data:"20",location:""},{value:"a",className:"",data:"65",location:""},{value:"s",className:"",data:"83",location:""},{value:"d",className:"",data:"68",location:""},{value:"f",className:"",data:"70",location:""},{value:"g",className:"",data:"71",location:""},{value:"h",className:"",data:"72",location:""},{value:"j",className:"",data:"74",location:""},{value:"k",className:"",data:"75",location:""},{value:"l",className:"",data:"76",location:""},{value:";",className:"",data:"59",location:""},{value:"'",className:"",data:"222",location:""},{value:"Enter",className:"enter",data:"13",location:""}],[{value:"Shift",className:"shift",data:"16",location:"1"},{value:"\\",className:"",data:"220",location:""},{value:"z",className:"",data:"90",location:""},{value:"x",className:"",data:"88",location:""},{value:"c",className:"",data:"67",location:""},{value:"v",className:"",data:"86",location:""},{value:"b",className:"",data:"66",location:""},{value:"n",className:"",data:"78",location:""},{value:"m",className:"",data:"77",location:""},{value:",",className:"",data:"108",location:""},{value:".",className:"",data:"190",location:""},{value:"/",className:"",data:"191",location:""},{value:"↑",className:"page_up",data:"38",location:""},{value:"Shift",className:"shiftR",data:"16",location:"3"}],[{value:"Ctrl",className:"ctrl",data:"17",location:"1"},{value:"Win",className:"win",data:"91",location:"1"},{value:"Alt",className:"alt",data:"18",location:"1"},{value:"Space",className:"space",data:"32",location:""},{value:"Alt",className:"alt",data:"18",location:"2"},{value:"Ctrl",className:"ctrl",data:"17",location:"1"},{value:"←",className:"page_left",data:"37",location:""},{value:"↓",className:"page_down",data:"40",location:""},{value:"→",className:"page_right",data:"39",location:""}]],l.ABC=[[{value:"`",className:"",data:"192",location:""},{value:"1",className:"",data:"49",location:""},{value:"2",className:"",data:"50",location:""},{value:"3",className:"",data:"51",location:""},{value:"4",className:"",data:"52",location:""},{value:"5",className:"",data:"53",location:""},{value:"6",className:"",data:"54",location:""},{value:"7",className:"",data:"55",location:""},{value:"8",className:"",data:"56",location:""},{value:"9",className:"",data:"57",location:""},{value:"0",className:"",data:"48",location:""},{value:"-",className:"",data:"109",location:"3"},{value:"=",className:"",data:"61",location:""},{value:"Backspace",className:"backspace",data:"8",location:""}],[{value:"Tab",className:"tab",data:"9",location:""},{value:"Q",className:"",data:"81",location:""},{value:"W",className:"",data:"87",location:""},{value:"E",className:"",data:"69",location:""},{value:"R",className:"",data:"82",location:""},{value:"T",className:"",data:"84",location:""},{value:"Y",className:"",data:"89",location:""},{value:"U",className:"",data:"85",location:""},{value:"I",className:"",data:"73",location:""},{value:"O",className:"",data:"79",location:""},{value:"P",className:"",data:"80",location:""},{value:"[",className:"",data:"160",location:""},{value:"]",className:"",data:"221",location:""},{value:"/",className:"",data:"191",location:""},{value:"Del",className:"del",data:"46",location:"3"}],[{value:"Caps Lock",className:"caps_lock",data:"20",location:""},{value:"A",className:"",data:"65",location:""},{value:"S",className:"",data:"83",location:""},{value:"D",className:"",data:"68",location:""},{value:"F",className:"",data:"70",location:""},{value:"G",className:"",data:"71",location:""},{value:"H",className:"",data:"72",location:""},{value:"J",className:"",data:"74",location:""},{value:"K",className:"",data:"75",location:""},{value:"L",className:"",data:"76",location:""},{value:";",className:"",data:"59",location:""},{value:"'",className:"",data:"222",location:""},{value:"Enter",className:"enter",data:"13",location:""}],[{value:"Shift",className:"shift",data:"16",location:"1"},{value:"\\",className:"",data:"220",location:""},{value:"Z",className:"",data:"90",location:""},{value:"X",className:"",data:"88",location:""},{value:"C",className:"",data:"67",location:""},{value:"V",className:"",data:"86",location:""},{value:"B",className:"",data:"66",location:""},{value:"N",className:"",data:"78",location:""},{value:"M",className:"",data:"77",location:""},{value:",",className:"",data:"108",location:""},{value:".",className:"",data:"190",location:""},{value:"/",className:"",data:"191",location:""},{value:"↑",className:"page_up",data:"38",location:""},{value:"Shift",className:"shiftR",data:"16",location:"3"}],[{value:"Ctrl",className:"ctrl",data:"17",location:"1"},{value:"Win",className:"win",data:"91",location:"1"},{value:"Alt",className:"alt",data:"18",location:"1"},{value:"Space",className:"space",data:"32",location:""},{value:"Alt",className:"alt",data:"18",location:"2"},{value:"Ctrl",className:"ctrl",data:"17",location:"2"},{value:"←",className:"page_left",data:"37",location:""},{value:"↓",className:"page_down",data:"40",location:""},{value:"→",className:"page_right",data:"39",location:""}]]},192:(a,l,e)=>{Object.defineProperty(l,"__esModule",{value:!0}),l.virtualKeyboard=void 0;const t=e(70),c=e(255),{body:o}=document;let s=c.Abc;l.virtualKeyboard=()=>{const a=localStorage.getItem("language")||"en",l=localStorage.getItem("case");"en"===a&&(s="lowerCase"===l||null===l?c.Abc:c.ABC),"ru"===a&&(s="lowerCase"===l||null===l?c.RuAbc:c.RuABC);const e=(0,t.createElement)({element:"div",className:"keyboard"});for(let a=0;a<5;a+=1){const l=(0,t.createElement)({element:"div",className:"key-row"});s[a].forEach((({value:a,className:e,data:c})=>{const o=(0,t.createElement)({element:"div",className:`button ${e}`,innerHtml:a,data:c});l.append(o)})),e.append(l)}o.append(e);const n=document.querySelector(".caps_lock");"upperCase"===l&&(null==n||n.classList.toggle("active"))}}},l={};function e(t){var c=l[t];if(void 0!==c)return c.exports;var o=l[t]={exports:{}};return a[t](o,o.exports,e),o.exports}e.r=a=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},(()=>{const a=e(695),l=e(192);e(75),(0,a.monic)(),(0,l.virtualKeyboard)()})()})();