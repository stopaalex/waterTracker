(this.webpackJsonpui=this.webpackJsonpui||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},15:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(5),c=a.n(r),s=(a(15),a(1)),i=a.n(s),l=a(3),u=a(6),d=a(7),p=a(9),m=a(8),f=a(2),h=(a(17),function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).createDayPicker=function(){return n.state.people.length>0?(console.log(n.state.people[0]),Object.keys(n.state.people[0].days).map((function(e,t,a){console.log(n.state.dateSelected),console.log(e);var r="not-selected";return n.state.dateSelected===e&&(r="selected"),o.a.createElement("div",{key:t,onClick:function(){return n.selectData(e)},className:r},e)}))):o.a.createElement("div",null,"Nothing here yet")},n.selectData=function(e){n.setState({dateSelected:e}),console.log()},n.createMainDisplay=function(){return n.state.people.map((function(e,t,a){var r=e.days[n.state.dateSelected]>=6?"complete":"incomplete";return o.a.createElement("div",{key:t},o.a.createElement("div",{className:"name"},e.name),o.a.createElement("div",{className:r},o.a.createElement(f.a,null)),o.a.createElement("div",{className:"display"},o.a.createElement("div",{className:"add",onClick:function(){return n.addWater(e.name,n.state.dateSelected)}},o.a.createElement(f.c,null)),o.a.createElement("div",{className:"amount"},e.days[n.state.dateSelected]," ",o.a.createElement("span",null," / 6")),o.a.createElement("div",{className:"remove",onClick:function(){return n.removeWater(e.name,n.state.dateSelected)}},o.a.createElement(f.b,null))))}))},n.addWater=function(e,t){var a=JSON.parse(JSON.stringify(n.state.people));a.forEach((function(a,n,o){a.name===e&&a.days[t]++})),n.setState({people:a}),fetch(n.state.serverEndpoint+"/api/water/add",{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log(e)}),(function(e){console.log(e)}))},n.removeWater=function(e,t){var a=JSON.parse(JSON.stringify(n.state.people));a.forEach((function(a,n,o){a.name===e&&a.days[t]--})),n.setState({people:a}),fetch(n.state.serverEndpoint+"/api/water/remove",{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log(e)}),(function(e){console.log(e)}))},n.getWaterData=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(n.state.serverEndpoint+"/api/water/get",{method:"GET"}).then((function(e){return e.json()})).then((function(e){return console.log(e),n.setState({people:e.people}),e}),(function(e){console.error(e)})));case 1:case"end":return e.stop()}}),e)}))),n.navigation=function(){return o.a.createElement("div",{className:"navigation"},o.a.createElement(f.d,null)," Water Tracker")},n.state={serverEndpoint:"http://localhost:8000",dateSelected:(new Date).getFullYear()+"-"+((new Date).getMonth()+1)+"-"+(new Date).getDate(),people:[]},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t,a,n=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("mounted"),(t=this.state.dateSelected.split("-")[1])<10&&(t="0"+t.toString()),this.setState({dateSelected:(new Date).getFullYear()+"-"+t+"-"+(new Date).getDate()}),e.next=6,this.getWaterData();case 6:this.state.people[0].days[this.state.dateSelected]||((a=JSON.parse(JSON.stringify(this.state.people))).forEach((function(e){e.days[n.state.dateSelected]=0})),this.setState({people:a}));case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.navigation(),t=this.createDayPicker(),a=this.createMainDisplay();return o.a.createElement("div",{className:"app-wrapper"},e,o.a.createElement("div",{className:"day-picker"},t),o.a.createElement("div",{className:"main-display"},a))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.9bbc8880.chunk.js.map