const t=t=>{if(!t||0===t.length)return"";const e=t.toLowerCase();return e.substring(0,1).toUpperCase()+e.substring(1,e.length)};function e(t){var e=new Error(t);return e.source="ulid",e}var n="0123456789ABCDEFGHJKMNPQRSTVWXYZ",r=Math.pow(2,48)-1;function a(t){var e=Math.floor(32*t());return 32===e&&(e=31),n.charAt(e)}var o,i=(o||(o=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=arguments[1];n||(n="undefined"!=typeof window?window:null);var r=n&&(n.crypto||n.msCrypto);if(r)return function(){var t=new Uint8Array(1);return r.getRandomValues(t),t[0]/255};try{var a=require("crypto");return function(){return a.randomBytes(1).readUInt8()/255}}catch(t){}if(t){try{console.error("secure crypto unusable, falling back to insecure Math.random()!")}catch(t){}return function(){return Math.random()}}throw e("secure crypto unusable, insecure Math.random not allowed")}()),function(t){return isNaN(t)&&(t=Date.now()),function(t,a){if(isNaN(t))throw new Error(t+" must be a number");if(t>r)throw e("cannot encode time greater than "+r);if(t<0)throw e("time must be positive");if(!1===Number.isInteger(t))throw e("time must be an integer");for(var o=void 0,i="";a>0;a--)i=n.charAt(o=t%32)+i,t=(t-o)/32;return i}(t,10)+function(t,e){for(var n="";t>0;t--)n=a(e)+n;return n}(16,o)});function u(e){return e?(e=>{const n=e?.replace(/([A-Z])+/g,t)?.split(/(?=[A-Z])|[\.\-\s_]/).map((t=>t.toLowerCase()))??[];return 0===n.length?"":1===n.length?n[0]:n.reduce(((t,e)=>`${t}${e.charAt(0).toUpperCase()}${e.slice(1)}`))})(e):""}function s(e){return e?((e,n)=>{const r=e?.replace(/([A-Z])+/g,t).split(/(?=[A-Z])|[\.\-\s_]/).map((t=>t.toLowerCase()))??[];if(0===r.length)return"";if(1===r.length)return r[0];const a=r.reduce(((t,e)=>`${t}_${e.toLowerCase()}`));return!1===n?.splitOnNumber?a:a.replace(/([A-Za-z]{1}[0-9]{1})/,(t=>`${t[0]}_${t[1]}`))})(e):""}function c(e){return e?(e=>e?e.split(/(?=[A-Z])|[\.\-\s_]/).map((t=>t.trim())).filter((t=>!!t)).map((e=>t(e.toLowerCase()))).join(" "):"")(e):""}function d(e){return e?t(e):""}function l(t){return null==t?void 0:t.toLowerCase()}function h(t){return null==t?void 0:t.toUpperCase()}function f(t){return t?t.charAt(0).toUpperCase()+t.slice(1):""}function m(){return"#"+Math.floor(16777215*Math.random()).toString(16)}function g(){return i()}const w=6048e5,b=Symbol.for("constructDateFrom");function y(t,e){return"function"==typeof t?t(e):t&&"object"==typeof t&&b in t?t[b](e):t instanceof Date?new t.constructor(e):new Date(e)}function p(t,e){return y(e||t,t)}let M={};function v(){return M}function k(t,e){const n=v(),r=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,a=p(t,e?.in),o=a.getDay(),i=(o<r?7:0)+o-r;return a.setDate(a.getDate()-i),a.setHours(0,0,0,0),a}function x(t,e){return k(t,{...e,weekStartsOn:1})}function P(t,e){const n=p(t,e?.in),r=n.getFullYear(),a=y(n,0);a.setFullYear(r+1,0,4),a.setHours(0,0,0,0);const o=x(a),i=y(n,0);i.setFullYear(r,0,4),i.setHours(0,0,0,0);const u=x(i);return n.getTime()>=o.getTime()?r+1:n.getTime()>=u.getTime()?r:r-1}function S(t){const e=p(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function W(t,e){const n=p(t,e?.in);return n.setHours(0,0,0,0),n}function C(t,e,n){const[r,a]=function(t,...e){const n=y.bind(null,e.find((t=>"object"==typeof t)));return e.map(n)}(0,t,e),o=W(r),i=W(a),u=+o-S(o),s=+i-S(i);return Math.round((u-s)/864e5)}function D(t){return!(!((e=t)instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e))&&"number"!=typeof t||isNaN(+p(t)));var e}const T={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function Y(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const N={date:Y({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:Y({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:Y({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},q={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function H(t){return(e,n)=>{let r;if("formatting"===(n?.context?String(n.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,a=n?.width?String(n.width):e;r=t.formattingValues[a]||t.formattingValues[e]}else{const e=t.defaultWidth,a=n?.width?String(n.width):t.defaultWidth;r=t.values[a]||t.values[e]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function O(t){return(e,n={})=>{const r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;const i=o[0],u=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],s=Array.isArray(u)?function(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n;return}(u,(t=>t.test(i))):function(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n;return}(u,(t=>t.test(i)));let c;c=t.valueCallback?t.valueCallback(s):s,c=n.valueCallback?n.valueCallback(c):c;return{value:c,rest:e.slice(i.length)}}}var F;const E={code:"en-US",formatDistance:(t,e,n)=>{let r;const a=T[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:N,formatRelative:(t,e,n,r)=>q[t],localize:{ordinalNumber:(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:H({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:H({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:H({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:H({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:H({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(F={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)},(t,e={})=>{const n=t.match(F.matchPattern);if(!n)return null;const r=n[0],a=t.match(F.parsePattern);if(!a)return null;let o=F.valueCallback?F.valueCallback(a[0]):a[0];return o=e.valueCallback?e.valueCallback(o):o,{value:o,rest:t.slice(r.length)}}),era:O({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:O({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:O({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:O({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:O({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function A(t,e){const n=p(t,e?.in),r=C(n,function(t,e){const n=p(t,e?.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}(n));return r+1}function L(t,e){const n=p(t,e?.in),r=+x(n)-+function(t,e){const n=P(t,e),r=y(t,0);return r.setFullYear(n,0,4),r.setHours(0,0,0,0),x(r)}(n);return Math.round(r/w)+1}function j(t,e){const n=p(t,e?.in),r=n.getFullYear(),a=v(),o=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,i=y(e?.in||t,0);i.setFullYear(r+1,0,o),i.setHours(0,0,0,0);const u=k(i,e),s=y(e?.in||t,0);s.setFullYear(r,0,o),s.setHours(0,0,0,0);const c=k(s,e);return+n>=+u?r+1:+n>=+c?r:r-1}function z(t,e){const n=p(t,e?.in),r=+k(n,e)-+function(t,e){const n=v(),r=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,a=j(t,e),o=y(e?.in||t,0);return o.setFullYear(a,0,r),o.setHours(0,0,0,0),k(o,e)}(n,e);return Math.round(r/w)+1}function Q(t,e){return(t<0?"-":"")+Math.abs(t).toString().padStart(e,"0")}const B={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return Q("yy"===e?r%100:r,e.length)},M(t,e){const n=t.getMonth();return"M"===e?String(n+1):Q(n+1,2)},d:(t,e)=>Q(t.getDate(),e.length),a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:(t,e)=>Q(t.getHours()%12||12,e.length),H:(t,e)=>Q(t.getHours(),e.length),m:(t,e)=>Q(t.getMinutes(),e.length),s:(t,e)=>Q(t.getSeconds(),e.length),S(t,e){const n=e.length,r=t.getMilliseconds();return Q(Math.trunc(r*Math.pow(10,n-3)),e.length)}},G="midnight",X="noon",$="morning",U="afternoon",J="evening",Z="night",I={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){const e=t.getFullYear(),r=e>0?e:1-e;return n.ordinalNumber(r,{unit:"year"})}return B.y(t,e)},Y:function(t,e,n,r){const a=j(t,r),o=a>0?a:1-a;if("YY"===e){return Q(o%100,2)}return"Yo"===e?n.ordinalNumber(o,{unit:"year"}):Q(o,e.length)},R:function(t,e){return Q(P(t),e.length)},u:function(t,e){return Q(t.getFullYear(),e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return Q(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return Q(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return B.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return Q(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const a=z(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):Q(a,e.length)},I:function(t,e,n){const r=L(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):Q(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getDate(),{unit:"date"}):B.d(t,e)},D:function(t,e,n){const r=A(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):Q(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return Q(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return Q(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return Q(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let a;switch(a=12===r?X:0===r?G:r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let a;switch(a=r>=17?J:r>=12?U:r>=4?$:Z,e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){let e=t.getHours()%12;return 0===e&&(e=12),n.ordinalNumber(e,{unit:"hour"})}return B.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getHours(),{unit:"hour"}):B.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):Q(r,e.length)},k:function(t,e,n){let r=t.getHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):Q(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):B.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getSeconds(),{unit:"second"}):B.s(t,e)},S:function(t,e){return B.S(t,e)},X:function(t,e,n){const r=t.getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return V(r);case"XXXX":case"XX":return _(r);default:return _(r,":")}},x:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"x":return V(r);case"xxxx":case"xx":return _(r);default:return _(r,":")}},O:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+R(r,":");default:return"GMT"+_(r,":")}},z:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+R(r,":");default:return"GMT"+_(r,":")}},t:function(t,e,n){return Q(Math.trunc(+t/1e3),e.length)},T:function(t,e,n){return Q(+t,e.length)}};function R(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),a=Math.trunc(r/60),o=r%60;return 0===o?n+String(a):n+String(a)+e+Q(o,2)}function V(t,e){if(t%60==0){return(t>0?"-":"+")+Q(Math.abs(t)/60,2)}return _(t,e)}function _(t,e=""){const n=t>0?"-":"+",r=Math.abs(t);return n+Q(Math.trunc(r/60),2)+e+Q(r%60,2)}const K=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},tt=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},et={p:tt,P:(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return K(t,e);let o;switch(r){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;default:o=e.dateTime({width:"full"})}return o.replace("{{date}}",K(r,e)).replace("{{time}}",tt(a,e))}},nt=/^D+$/,rt=/^Y+$/,at=["D","DD","YY","YYYY"];const ot=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,it=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ut=/^'([^]*?)'?$/,st=/''/g,ct=/[a-zA-Z]/;function dt(t,e,n){const r=v(),a=r.locale??E,o=r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,i=r.weekStartsOn??r.locale?.options?.weekStartsOn??0,u=p(t,n?.in);if(!D(u))throw new RangeError("Invalid time value");let s=e.match(it).map((t=>{const e=t[0];if("p"===e||"P"===e){return(0,et[e])(t,a.formatLong)}return t})).join("").match(ot).map((t=>{if("''"===t)return{isToken:!1,value:"'"};const e=t[0];if("'"===e)return{isToken:!1,value:lt(t)};if(I[e])return{isToken:!0,value:t};if(e.match(ct))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return{isToken:!1,value:t}}));a.localize.preprocessor&&(s=a.localize.preprocessor(u,s));const c={firstWeekContainsDate:o,weekStartsOn:i,locale:a};return s.map((n=>{if(!n.isToken)return n.value;const r=n.value;(function(t){return rt.test(t)}(r)||function(t){return nt.test(t)}(r))&&function(t,e,n){const r=function(t,e,n){const r="Y"===t[0]?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(t,e,n);if(console.warn(r),at.includes(t))throw new RangeError(r)}(r,e,String(t));return(0,I[r[0]])(u,r,a.localize,c)})).join("")}function lt(t){const e=t.match(ut);return e?e[1].replace(st,"'"):t}function ht(t,e){return t?dt(t,e||"yyyy-MM-dd HH:mm:ss"):""}function ft(t){return t?function(t){return+p(t)}(t):0}function mt(t){return t?function(t){return Math.trunc(+p(t)/1e3)}(t):0}export{f as capitalizeFirstLetter,ht as dateFormat,ft as getTimeStamp,mt as getUnixTimeStamp,m as randomColor,u as toCamel,d as toCapitalize,l as toLower,s as toSnake,c as toTitle,h as toUpper,g as ulid};
