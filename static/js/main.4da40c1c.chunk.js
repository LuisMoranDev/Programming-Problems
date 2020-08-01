(this["webpackJsonpprogramming-questions"]=this["webpackJsonpprogramming-questions"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a(12)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(3),s=a.n(l);a(9),a(10),a(11);var c=function(){return r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,"Answered Programming Questions"))},i=a(1);var u=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],l=t[1],s=Object(n.useState)(""),c=Object(i.a)(s,2),u=c[0],o=c[1],m=Object(n.useState)(!1),h=Object(i.a)(m,2),b=h[0],f=h[1];function d(e){var t=e.target.value;l(t)}return r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"heading"},"FizzBuzz Challenge"),r.a.createElement("p",{className:"description"},"Write a program that outputs the string representation of numbers from 1 to 20.",r.a.createElement("br",null),r.a.createElement("br",null),"But for multiples of three it should output \u201cFizz\u201d instead of the number and for the multiples of five output \u201cBuzz\u201d. For numbers which are multiples of both three and five output \u201cFizzBuzz\u201d."),r.a.createElement("input",{type:"text",name:"number",onSubmit:d,onChange:d,value:a,placeholder:"Enter a number"}),r.a.createElement("button",{onClick:function(){var e=[];if(isNaN(a)||a<1||a>20)o("Must be a number, must be greater than 1 and cannot be greater than 20");else{for(var t=1;t<=a;t++)t%15===0?e.push("FizzBuzz"):t%5===0?e.push("Buzz"):t%3===0?e.push("Fizz"):e.push(t);o(e.toString())}l(""),f(!0)}},"Enter"),r.a.createElement("p",{style:{display:b?"block":"none"},className:"answer"},"Answer: ",r.a.createElement("br",null),u))};var o=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],l=t[1],s=Object(n.useState)(""),c=Object(i.a)(s,2),u=c[0],o=c[1],m=Object(n.useState)(!1),h=Object(i.a)(m,2),b=h[0],f=h[1];return r.a.createElement("div",{className:"container"},r.a.createElement("h2",{class:"heading"},"Largest Number At Least Twice of Others"),r.a.createElement("p",{className:"description"},"In a given integer array nums, there is always exactly one largest element.",r.a.createElement("br",null),"Find whether the largest element in the array is at least twice as much as every other number in the array.",r.a.createElement("br",null),"If it is, return the index of the largest element, otherwise return -1",r.a.createElement("br",null),"Given Arrays: ",r.a.createElement("br",null),"Ex1:[10, 15, 2, 4, 6, 20, 4, 33]"),r.a.createElement("button",{onClick:function(){for(var e=[10,15,2,4,6,20,4,33],t=0;t<e.length;t++)for(var a=1;a<e.length;a++)e[t]>e[a]&&e[t]/2>=1&&(l(t),o(e[t]),f(!0))}},"Answer"),r.a.createElement("p",{style:{display:b?"block":"none"},className:"answer"},"Answer: ",r.a.createElement("br",null)," Index: ",a," ",r.a.createElement("br",null)," Number: ",u))},m=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],l=t[1],s=Object(n.useState)(""),c=Object(i.a)(s,2),u=c[0],o=c[1];return r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"heading"},"Running Sum of Numbers"),r.a.createElement("p",{className:"description"},"Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]\u2026nums[i]). ",r.a.createElement("br",null),r.a.createElement("br",null),"Return the running sum of nums.",r.a.createElement("br",null),"Input: nums = [1,2,3,4,5,6]"),r.a.createElement("button",{onClick:function(){for(var e=[1,2,3,4,5,6],t=1;t<e.length;t++)e[t]=e[t-1]+e[t];o(e.toString()),l(!0)}},"Answer"),r.a.createElement("p",{style:{display:a?"block":"none"},className:"answer"},"Answer: ",r.a.createElement("br",null)," ",u))},h=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],l=t[1],s=Object(n.useState)(""),c=Object(i.a)(s,2),u=c[0],o=c[1],m=Object(n.useState)(!1),h=Object(i.a)(m,2),b=h[0],f=h[1];return r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"heading"},"Number of Steps   "),r.a.createElement("p",{className:"description"},"Given a non-negative integer num, return the number of steps to reduce it to zero. If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it. "),r.a.createElement("input",{type:"text",name:"number",onChange:function(e){var t=e.target.value;l(t)},value:a,placeholder:"Enter a number"}),r.a.createElement("button",{onClick:function(){var e=0;if(isNaN(a)||a<1||""===a)o("Input must be a number greater than 0");else{for(var t=a;0!==t;)t%2===0?(t/=2,e++):(t--,e++);o(e),f(!0)}}},"Enter"),r.a.createElement("p",{style:{display:b?"block":"none"},className:"answer"},"Answer: ",u))},b=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],l=t[1],s=Object(n.useState)(""),c=Object(i.a)(s,2),u=c[0],o=c[1];return r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"heading"},"Number of Jewels In Stones"),r.a.createElement("p",{className:"description jewels"},"You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels. ",r.a.createElement("br",null)," ",r.a.createElement("br",null),'The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".',r.a.createElement("br",null),"Inputs: ",r.a.createElement("br",null),' J = "aA" ',r.a.createElement("br",null),' S = "aAAbbcadfasdfhdfafefsadfafA"'),r.a.createElement("button",{onClick:function(){for(var e="aA".split(""),t="aAAbbcadfasdfhdfafefsadfafA".split(""),a=0,n=0;n<e.length;n++)for(var r=0;r<t.length;r++)e[n]===t[r]&&a++;o(a),l(!0)}},"Answer"),r.a.createElement("p",{style:{display:a?"block":"none"},className:"answer"},"Answer: ",u))},f=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],l=t[1],s=Object(n.useState)(""),c=Object(i.a)(s,2),u=c[0],o=c[1];return r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"heading"},"Shuffle String"),r.a.createElement("p",{className:"description"},"Given a string s and an integer array indices of the same length.",r.a.createElement("br",null),"The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.Return the shuffled string.",r.a.createElement("br",null),'Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]'),r.a.createElement("button",{onClick:function(){for(var e="codeleet",t=[4,5,6,7,0,2,1,3],a=[],n=0;n<e.length;n++)a[t[n]]=e[n];o(a.join("")),l(!0)}},"Answer"),r.a.createElement("p",{className:"answer",style:{display:a?"block":"none"}},"Answer: ",u))};var d=function(){return r.a.createElement("div",null,r.a.createElement(c,null),r.a.createElement(u,null),r.a.createElement(o,null),r.a.createElement(m,null),r.a.createElement(h,null),r.a.createElement(b,null),r.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.4da40c1c.chunk.js.map