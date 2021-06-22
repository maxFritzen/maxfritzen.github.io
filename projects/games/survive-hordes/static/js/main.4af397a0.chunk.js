(this.webpackJsonp2dshooter_react=this.webpackJsonp2dshooter_react||[]).push([[0],{28:function(t,e,i){"use strict";i.r(e);var n,r,o=i(0),s=i.n(o),a=i(16),h=i.n(a),c=i(14),d=i(20),l=i(2),u=i(5),v=function(t,e,i,n,r,o){o&&(o.fillStyle=r,o.fillRect(t,e,i,n))},A=function(t,e,i,n,r){r&&(r.fillStyle=n,r.beginPath(),r.arc(t,e,i,0,2*Math.PI),r.fill())},g=i(6),f=g.b.div(n||(n=Object(u.a)(["\n  position: relative;\n  outline: none;\n  canvas {\n    margin-top: 32px;\n    box-shadow: -1px 0px 20px 20px #2b303aed;\n    border-radius: 14px\n  }\n"]))),p=g.b.div(r||(r=Object(u.a)(["\n  font-size: 24px;\n  position: absolute;\n  top: 20px;\n  right: 50%;\n  color: #f7f7f7;\n"]))),y=i(1),m=960,b=640,G=function(t){var e=t.gameState,i=s.a.useRef(null),n=s.a.useState(null),r=Object(l.a)(n,2),a=r[0],h=r[1],c=Object(o.useState)(1),d=Object(l.a)(c,2),u=d[0],A=d[1],g=Object(o.useRef)(null);return console.log("canvas render"),Object(o.useEffect)((function(){if(i.current){var t=i.current.getContext("2d");t&&e&&(e.setContext(t),e.incWave=function(t){return A(t)},h(t)),a&&(null===e||void 0===e?void 0:e.ctx)&&(a.fillStyle="blue",a.fillRect(5,50,100,100),v(120,150,100,100,"red",e.ctx))}}),[a,e]),Object(y.jsxs)(f,{ref:g,tabIndex:0,children:[Object(y.jsx)("canvas",{id:"canvas",ref:i,width:m,height:b}),Object(y.jsx)(p,{children:u})]})},j=i(3),x=i(4),w=i(8),U=i(7),k=function(){function t(e,i,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:2,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"green",a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:1;Object(j.a)(this,t),this.id=void 0,this.x=void 0,this.y=void 0,this.startY=void 0,this.startX=void 0,this.width=void 0,this.height=void 0,this.speed=void 0,this.angle=void 0,this.color=void 0,this.ttl=void 0,this.id=Math.random(),this.x=e,this.y=i,this.startX=e,this.startY=i,this.width=r,this.height=o,this.speed=1,this.angle=n,this.color=s,this.ttl=a}return Object(x.a)(t,[{key:"update",value:function(){this.ttl--}},{key:"isAlive",value:function(){return this.ttl>0}},{key:"draw",value:function(){var t=this.x,e=this.y,i=this.width,n=this.height,r=this.color;v(t,e,i,n,r,Y.getContext())}},{key:"reset",value:function(){this.x=this.startX,this.y=this.startY}}]),t}(),O=function(t){Object(w.a)(i,t);var e=Object(U.a)(i);function i(t,n,r,o,s,a,h,c){var d;return Object(j.a)(this,i),(d=e.call(this,t,n,0,s,a,r)).damageColor=void 0,d.originalColor=void 0,d.anchor=void 0,d.speed=void 0,d.hp=void 0,d.originalHp=void 0,d.hitTimeout=void 0,d.damageColor=o,d.originalColor=r,d.anchor={x:.5,y:.5},d.speed=h,d.hp=c,d.originalHp=c,d.hitTimeout=null,d}return Object(x.a)(i,[{key:"hit",value:function(t){var e=this;this.hitTimeout||(this.hp-=t,this.color=this.damageColor,this.hitTimeout=setTimeout((function(){e.color=e.originalColor,e.hitTimeout=null}),1e3))}}]),i}(k),S="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAJCAYAAADkZNYtAAAACXBIWXMAAN54AADeeAGWGQrUAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAPhJREFUGJVF0L8rxHEcx/HHx/d+RPejkEEZZZBJsUmZDCblVoPBYlMW0w3YLQZlYvcXKAMGq8gxUFac7hd3981w3+tey/vdq+e716t30NeZaV1b0uaRF6uK3ck7teEdArhwIGNXRloqcWN00NbSVVZyGJzbUxg+kv9lJCaLoQT+Qwt11G0Hlz58rUyau6bYJqd30E2gGn7w7TUlGDd1S2j3ugdEyUwle4SsiZS6iqHGrCjp2EggaCc1Gmh6jqx50VRSG4tUVkk/DqKflvBGTVPWZu8bx5YFJ0JuRqbWi4VOkXT1QcGOdVfBQEHZgtiiYFTkEzf23feBf7ETRzD3o1scAAAAAElFTkSuQmCC",E="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAACXBIWXMAAN54AADeeAGWGQrUAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAANRJREFUGJUtzzEvA2EAgOHnu7tcNS1KamRgkSZit9osYqGLXeI3SPwTA2bRxGDiJxjEYJQ0XYqgLXrXO4MO7/gMbwCl4MKOQltsTaFUeBY5d+hOUAa3ar5cS21L8d6i+cQEY6Vcx4aD2J4zC3YtoonxMqs96qgKYut6loIbnxpmNTA/rYIPdBu81tDtJ37FfjBChBwxMoQh2RyRKPGmI9M2QhXpFBQYZ+QvDHQSfUeGVqS2VPC9SRSoP/wP5e5NHAdwKhIcKO2LZlqShHLwqHDpxBXKP6z7Qp+q4mSgAAAAAElFTkSuQmCC",I=function(t,e,i,n){return Math.abs(e-n)+Math.abs(t-i)},F=function(t){Object(w.a)(i,t);var e=Object(U.a)(i);function i(t,n,r,o,s,a,h,c,d,l){var u;return Object(j.a)(this,i),(u=e.call(this,t,n,r,o,s,a,h,c)).id=void 0,u.target=void 0,u.direction=void 0,u.originalSpeed=void 0,u.limit=void 0,u.hp=void 0,u.ttl=void 0,u.damage=void 0,u.prevGridUnit=void 0,u.currentGridUnit=void 0,u.findClosestTargetTimer=void 0,u.moveTimer=void 0,u.findClosestTarget=function(){if(B[u.currentGridUnit]){var t=B[u.currentGridUnit].col,e=B[u.currentGridUnit].row,i=I(t,e,B[u.target.currentGridUnitPosition].col,B[u.target.currentGridUnitPosition].row);Y.players.forEach((function(n){(I(t,e,B[n.currentGridUnitPosition].col,B[n.currentGridUnitPosition].row)<i||u.target.isDead&&!n.isDead)&&(u.target=n)}))}},u.target=d,u.id=l,u.direction="",u.originalSpeed=s,u.limit=5,u.hp=s+a,u.ttl=10,u.damage=10,u.prevGridUnit=-5,u.currentGridUnit=-5,u.findClosestTargetTimer=100,u.moveTimer=0,u}return Object(x.a)(i,[{key:"die",value:function(t){var e;this.ttl=0;var i=L(this.currentGridUnit),n=i.x,r=i.y;Y.incBlood(n,r,t,this.width,this.height),Y.removeFromEnemiesGridPositions(this.currentGridUnit,null===(e=B[this.currentGridUnit].enemy)||void 0===e?void 0:e.id)}},{key:"isAlive",value:function(){return this.ttl>0}},{key:"drop",value:function(){Y.players[0].level<5?1===Math.floor(20*Math.random())&&Y.incPickup(this.x,this.y):1===Math.floor(200*Math.random())&&Y.incPickup(this.x,this.y)}},{key:"update",value:function(){this.move(),this.currentGridUnit===this.target.currentGridUnitPosition&&this.target.hit(1)}},{key:"move",value:function(){var t;if(this.moveTimer>0)this.moveTimer--;else{if(this.moveTimer=0,this.x<0||this.x+this.width>Y.canvasWidth||this.y<0||this.y+this.height>Y.canvasHeight){var e=Math.floor(this.target.x),i=Math.floor(this.target.y);return this.x<=e&&(this.direction="right",this.x+=1),this.x>=e&&(this.direction="left",this.x-=1),this.y<=i&&(this.direction="down",this.y+=1),void(this.y>=i&&(this.direction="up",this.y-=1))}if(this.limit>0)this.limit--;else{this.limit=5,(null===this.currentGridUnit||void 0===this.currentGridUnit||this.currentGridUnit<0)&&(this.currentGridUnit=Q(this.x,this.y)),this.prevGridUnit=null!==(t=this.currentGridUnit)&&void 0!==t?t:Q(this.x+this.width/2,this.y+this.height/2);var n=B[this.target.currentGridUnitPosition].row,r=B[this.target.currentGridUnitPosition].col,o=B[this.currentGridUnit],s=o.col,a=o.row,h="",c="";this.direction="",n<a&&(c="up"),n>a&&(c="down"),r<s&&(h="left"),r>s&&(h="right");var d=Math.random();switch(this.direction=d<.2||d>.8?"":d<=.5?h:c,this.direction){case"up":var l;B[this.currentGridUnit-C]&&(null===(l=B[this.currentGridUnit-C])||void 0===l?void 0:l.type)!==X&&(this.currentGridUnit-=C);break;case"down":var u;B[this.currentGridUnit+C]&&(null===(u=B[this.currentGridUnit+C])||void 0===u?void 0:u.type)!==X&&(this.currentGridUnit+=C);break;case"left":var v;B[this.currentGridUnit-1]&&(null===(v=B[this.currentGridUnit-1])||void 0===v?void 0:v.type)!==X&&(this.currentGridUnit-=1);break;case"right":var A;B[this.currentGridUnit+1]&&(null===(A=B[this.currentGridUnit+1])||void 0===A?void 0:A.type)!==X&&(this.currentGridUnit+=1)}this.currentGridUnit!==this.prevGridUnit&&(Y.addToEnemiesGridPositions(this.currentGridUnit,this),Y.removeFromEnemiesGridPositions(this.prevGridUnit,this.id))}}}}]),i}(O),R=["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAMCAYAAABvEu28AAAACXBIWXMAAN6IAADeiAGXN/JwAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAglJREFUKJGF0T9IlWEUx/HveZ7nvtd8TUOjsIuKm1tTgktDS9AihbVIEKFQ0SAtOTo2SBANDhG0BHFpEVLI/hilZg1CQwQ1lZCamre696rve9/nNFxfuYHkD872nM95DkeoJgt8AXLABrAILADvgc87tQwk7BMLfAT0P1XZGTAPdO8Hnhi41P/o/NnexT2gGPAHw/DT6Mjwt8f3717J5/M2bXS1ysvJ8aA+G1yw1iwPDA6OZpzNGTFN35eWg9m5ue5Xr9/YShTd7Gg7dhUYM8WVLmAIQGqcupmpJw+ds+da2zrHjbW9gAdM+kBVAZ2pSKZvYXpiCBhG5Frf5etjKWQAnZ9++gHoas11iHH2n9+mSZKEzWIx+V1YX4vKpcrKj6UjPtxuciny7vnkA9QfdkE2Y5zdy1BArLWEjY22VPrT7A4kmVxH50bPqTObAgSzLyb6nchtRQ65TMDRXHu6SxGRhlooXbdcLvJzdWVdVFuw9rQBYjwXVSUASCoxiU82AWoQUARBxVD23pOtqycMG1pAfuGTEQNoYaNwI4qjbVFWVVULayuFShwvqdfKLiRVbHsravDeVy+gCqohyvHdqz3L55vC5vp7Iu6kGA286pYR0+qsIxNksRmHTzzqPUkSE0XRDkSswtfa86dz5e3UZI84uaOi7aJYwKjHAxgjXqtrRh5KRmVdVG79BXYK6X6qFyiXAAAAAElFTkSuQmCC","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAPCAYAAADtc08vAAAACXBIWXMAAN6IAADeiAGXN/JwAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAgZJREFUKJGdkstLlGEUh5/zvt98n2PjXGQsiyDoYltb2KZcSLQWctEuooggqr+gNu0K2gQtpP8gKIpqIhAnsGwC14FUbiQdZ0a0pvG7OPOeFl4QSggPHM7ix+/h3Cx7iJMHukf7Mv50XyboMXsBCHIb6FV0cE8AYGmzNr3/dVTKpcOCHXTaGR5//Ohc5cMUArVdAdPTT9MSZy6AjIlyBmW/4hAkrFUXfgI4tPEX4PPEmwHjeTdp28ueb3uM51VTqWAWI887aHl+ofFy7tvce6BfVKJtwNTU68I+k3mRzReGU0FajJEtqX8zzwLXC9nCxLETA9nvX2cB3PYSvbbN5YvFU0G6e6cZ0BawDog611Q4f+najW4AFV21AJXJ0hUx5lmuUMyJCM51SOIEAdQ5XzvOGmsRkUCB3nw+MzR0+kl15st9qUyW7oHcFTEcOnIUgCSO8YOAJAqxno/17EYvzoExNKo/SKIQ0KsGzC0AVUcUhQD4QUDHtfG70ljPksQRURjiRAl//9o0A8gdA/p2a9qVpQXWWs0NSSztJCaOQkDoSqeJWy1Wl+s7j9ZrwDwEOgBOlZX6Esu1RdaTGON5GCOsxxH1xXlWGjVUFSABEHgnAJ/KpYuiMg7kdnusf8RHXGps+14z5VfFDt6ownFVDgoUQYqgXUAeyAIo2jSY8TUJHoyMjLT/AJtqzZ02ngfVAAAAAElFTkSuQmCC","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAACXBIWXMAAN6IAADeiAGXN/JwAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAkVJREFUOI2Nks1LVGEUxn/nvXeuoo7O+IEJBllMH8tAUIQkC0OFtrXt3xBaRa2ENlkrC6JlKdbGSsg2iZEL3eQyjEprdHKc6d479868p4UVOqn17M778Xuf95xH2KXj6XSTF0WzChlg3lg7sRIE04ByiMzuojaOO4GzAimBETVm6nR9/Rggh0Gc3UU2irLNrvvCwAVEmn8t97V63tWWRCLV6nn5zTjOVjvb88Li7GxTJWEn/CDMTNweX89ls5fCMJAwCPGLRUphCLAu8AjV+RXfn94DmZuba0jV6NuW9s4zIrKv/VIQ8Gn1I++Xl5mZnHrz7N3iORFRAVBVWXj9fLKxKX25MdXiALNAL9B4UB8K+S22v288TW4UrjgAQ/09w4LcbG49smqMSQMngBpUy4iY/SA1tbUa+sWTfq0TuQuvZu4iMijKtnHdrj0nRdz9AFEURq5xjZPwilIqX3QFrqlqnQJBsUBdQ/KgHwCgVkm4nqeqRKGfwtDhKvIVtAsob21+c8txTF0yieM4qCrKTpjiKMbaCtZWiEol/B8F1FqAo66I3rKqY4KkVbVSyOdsIZ9LHGoHQLEIRhUxPQPD98XIdSAGWQNVoKxQEiVSpQLyd+wFI8iSlLTDAPSeH76HpTsOg6VSGHrszL5GBU8EB7Q6N5vAlCfBQO/IyPaezccP7rwUpetYJtNfqdgekHaLpgRJoXywkTzpGxrKVZv6M8LxG6M9G18+D7a1dYx29w+tAdP/7Es1xMb+KXHdtcAvPvzfy7/1E3K6/1aG9NiBAAAAAElFTkSuQmCC","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAACXBIWXMAAN6IAADeiAGXN/JwAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAl1JREFUOI2NkU1IVFEYhp/v3Ds/OuqAUJoURUqQFRUUQgXWJlsk7SpwFRRtCqJNUIvatAqCoIi2/aBIkSWNEUktxIxKsCyRDBSH0DAr9er8nHu/Fo0y1mS9cBbn5TvPeXk/IU81EHFisUcC24FehZslnnf7DWRZQpJ/2RiLVVj4BMTmPRVpc2dmDr2HzH9BAGri8WrX2jtAXZ49LtAi0O56Xs9b8P4K6ep6UOpmwtcyc+n6YwebmgVOAZFINEo6lZofSwGtCv2DnndpEaS7u7XIZOPPI+GiLbGy0ofF0dKZTDa1FTHrQ6FQ+HMySeLuPXpf9PDxwwBl8Xjycuv12l27DkwLgKrKq67OhxWVq/YbxwAEgMkL6QMOgB8EevJwU3/T8SMb1lSvHXF9d7cAvOzsuBCNxc6XL1+BgubiiSoZ1SBtjCld3FxQNzo6NGd88wTok56niVqM9DmOO1CxcvVGa7MSCoW1UOkaBCrGyHhyeNZamwwgcJBiVw3nBFzft5u+jn+mfFllwa39ymbUWjttrU0B6wxkfSeoc0VlE4IF3HRqjrHkCOFIFMd1EDFEotEcU7HZrPFmpsqAshw2pJYpF6EKcBcia0A6NbvwuTf9o2AoVANEjBgjRoQzQF/hySUkIgLNO/bsGxKARCIRKY+as6AngPLc2DSwaCuqmhalQxx5bDPm/s6Ghi/wW4Gv29uL/RJnr2LqRbVKoQRlCsNQ2gbvJkaHb6gGQ99/fG04evrC5Pw7Nx+yrbFxFmjLnT9068pFpr5NtvjKM2BzQci/9G1ibBA1kxiu5vs/Afr98xKJZHL6AAAAAElFTkSuQmCC","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAATCAYAAAB2pebxAAAACXBIWXMAAN6IAADeiAGXN/JwAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAvRJREFUOI11kV9M1XUYxj/v9/c7HKEok9hgxuTPjhOMFdVCuwlwK6EEp8Xa2mrrottyrbF13b1rbW2tzav+GLmWLgQSzhkXAsJ0ICLpgcMCNNfBJjYcR/n9ni7K4pwDz+Xzfd/neb7Pa2yBhdnZp2/fTh/t6e/vSKfTFUcOd0Sqq6oiwAJwF7jsB3xSHoul85Z/m519fnE+ObiYSgZ9Paenfc8LPM8LT538+uLSfDLx5tEjcw0Nzy53tB9aXphLXlQi4bss91Sy3TkNE5qA6z+c+rGutLTU1dXW2vTVa88FQdg0l0pVT0xMlqyurkadUbO066l3baPIYio5Y2bzkloBlpZuUFhUSMmOHQCsrKzw4Ucfc7ijg18GBvjis+PnBMWWnWT2HKadBncQjUBW0lyYswGF2udGB3svj8R72wFCd/8dE1cQjUg3MPqRrgLhZiIKFSBWfBynTZwYG+pvqKysWwQ6L40kuqLRok+LHi1+3Pcjj0m6Fwbrvzvn3XLOk9B2GRkgZvCTJRIJv1BrCQwtpP9q7uzsDEbjfSeF6g3+8CIRthUVlRf428r8aEFxJFLwwMyi/6Y7uxbwtgGMDfVXhEE4KfTV/pa2rtF4703gGtC0MT0wA/q+vGbv59HonftlZc+sAvxX7OhAXzNOZ3AME/IKZkmkWFaRMCpsal/Lwfdz+P8xMvRzrVv3vsGsWqg47zoibo56iUlJaw77tvFA63dZQ/tffn0mdLogdGWL8z4pURLCuMNNA+sAfu6UyT0BPPingtxH6pAte6Z044GDxx/SeW6ycApUgzG5SRIfCycEb2WTOXBm1yXuIeolxjHdBdtpEAM8w9YFlVk7eV4hbyDGQ3N7zdl5w6oM9oCtSdyU0Qr6cssk3d3dnqAFU9dLza/+ChwDjp0f7Nnlyd+N0yELeQ+nM9lVbcDw0NkGF9iYs7DixebXbuX1JdmFeN8JjKY/17Snra0tk/edTFg4ZdgLmwkAmJnI6AMgs/0R7X7I/w0+Y0jqdCiXQAAAAABJRU5ErkJggg=="],M=function(t){Object(w.a)(i,t);var e=Object(U.a)(i);function i(t,n,r,o,s,a,h,c,d){var l;return Object(j.a)(this,i),(l=e.call(this,n,r,o,s,a,h,c,d)).shootingSpeedInterval=void 0,l.animationShootingSpeedInterval=void 0,l.rotateSpeedInterval=void 0,l.pickupInterval=void 0,l.bullets=void 0,l.collisionInterval=void 0,l.collisionPickupInterval=void 0,l.level=void 0,l.drive=void 0,l.reverse=void 0,l.steerLeft=void 0,l.steerRight=void 0,l.brake=void 0,l.isShooting=void 0,l.controlKeyGas=void 0,l.controlKeyRight=void 0,l.controlKeyReverse=void 0,l.controlKeyLeft=void 0,l.controlKeyShoot=void 0,l.currentGridUnitPosition=void 0,l.name=void 0,l.sprites=void 0,l.shootingSprite=void 0,l.loadedImages=void 0,l.currentImage=void 0,l.animationSpeed=void 0,l.isDead=void 0,l.shouldDrawFireEffect=void 0,l.element=void 0,l.shoot=function(){if(l.bullets<=0&&setTimeout((function(){l.bullets=20*l.level/2}),750),!l.shootingSpeedInterval&&l.bullets>0){var t=l.x+l.width/2,e=l.y+l.height/2;Y.incProjectiles(t,e,(l.angle-10*Math.random())*Math.PI/180),Y.incProjectiles(t,e,(l.angle-10*Math.random())*Math.PI/180),Y.incProjectiles(t,e,l.angle*Math.PI/180),Y.incProjectiles(t,e,(l.angle+10*Math.random())*Math.PI/180),Y.incProjectiles(t,e,(l.angle+10*Math.random())*Math.PI/180),l.bullets-=1,l.shouldDrawFireEffect=!0,l.shootingSpeedInterval=setTimeout((function(){l.shootingSpeedInterval=null}),500)}},l.drawFireEffect=function(){l.shouldDrawFireEffect=!1;var t=Y.getContext();if(t){var e=l.x+l.width/2,i=l.y+l.height/2,n=l.angle*Math.PI/180;t.save(),t.translate(e,i),t.rotate(n),t.translate(-e,-i),t.fillStyle="#A9F4FF",t.fillRect(e+4,i,4,4),t.restore()}},l.keyDown=function(t){"Escape"!==t.key&&(t.preventDefault(),l.keySet(t,!0))},l.keyUp=function(t){t.preventDefault(),l.keySet(t,!1)},l.shootingSpeedInterval=null,l.animationShootingSpeedInterval=0,l.rotateSpeedInterval=null,l.pickupInterval=null,l.bullets=20,l.collisionInterval=null,l.collisionPickupInterval=null,l.level=1,l.name=t,l.drive=!1,l.reverse=!1,l.steerLeft=!1,l.steerRight=!1,l.brake=!1,l.isShooting=!1,l.controlKeyGas=void 0,l.controlKeyRight=void 0,l.controlKeyReverse=void 0,l.controlKeyLeft=void 0,l.controlKeyShoot=void 0,l.currentGridUnitPosition=0,l.sprites=R.map((function(t){var e=new Image(a,h);return e.src=t,e.onload=function(){console.log("loaded",t),l.loadedImages++},e})),l.shootingSprite=new Image(a,h),l.loadedImages=0,l.currentImage=0,l.animationSpeed=30,l.isDead=!1,l.shouldDrawFireEffect=!1,l}return Object(x.a)(i,[{key:"stayInsideMap",value:function(){this.x<=0&&(this.x=1),this.x+this.width>=Y.canvasWidth&&(this.x=Y.canvasWidth-this.width),this.y<=0&&(this.y=1),this.y+this.height/2>=Y.canvasHeight&&(this.y=Y.canvasHeight-this.height)}},{key:"incLevel",value:function(){var t=this;this.collisionPickupInterval||(this.collisionPickupInterval=setTimeout((function(){t.collisionPickupInterval=null}),200),this.level++)}},{key:"drawHealthBar",value:function(t){var e=this.width,i=this.height;if(this.color===this.damageColor){var n=-i;t.fillStyle="#ff0000",t.fillRect(-e/2,n,e,3),t.fillStyle="#33ef02",t.fillRect(-e/2,n,e*(this.hp/this.originalHp),3)}}},{key:"draw",value:function(){var t=this.x,e=this.y,i=this.width,n=this.height,r=Y.getContext();!r||this.loadedImages<R.length-1||(r.save(),r.translate(t+i/2,e+n/2),this.hp>0&&this.drawHealthBar(r),r.rotate((this.angle+90)*Math.PI/180),r.drawImage(this.sprites[this.currentImage],Math.floor(-i/2),Math.floor(-n/2),i,n),r.restore(),this.shouldDrawFireEffect&&this.drawFireEffect())}},{key:"addKeyListeners",value:function(t){this.element=t,t.addEventListener("keydown",this.keyDown),t.addEventListener("keyup",this.keyUp)}},{key:"removeEventListeners",value:function(){this.element.removeEventListener("keydown",this.keyDown),this.element.removeEventListener("keyup",this.keyUp)}},{key:"setUpControls",value:function(t,e,i,n,r){this.controlKeyGas=t,this.controlKeyRight=e,this.controlKeyReverse=i,this.controlKeyLeft=n,this.controlKeyShoot=r}},{key:"keySet",value:function(t,e){t.key===this.controlKeyGas&&(this.drive=e),t.key===this.controlKeyRight&&(this.steerRight=e),t.key===this.controlKeyReverse&&(this.reverse=e),t.key===this.controlKeyLeft&&(this.steerLeft=e),t.key===this.controlKeyShoot&&(this.isShooting=e)}},{key:"update",value:function(){!this.isDead&&this.hp<=0&&this.die(),this.move()}},{key:"animation",value:function(){this.animationSpeed--,this.animationSpeed>=0||(this.animationSpeed<0&&(this.animationSpeed=6),this.drive||this.reverse?2!==this.currentImage?this.currentImage=2:this.currentImage=3:this.shootingSpeedInterval?this.currentImage=1:this.currentImage=0)}},{key:"move",value:function(){if(!this.isDead&&!(this.ttl<=0)){this.animation(),this.drive?this.speed=5:this.speed=0,this.isShooting&&this.shoot(),this.reverse&&(this.speed=-.5),this.steerLeft&&(this.angle-=8),this.steerRight&&(this.angle+=8),this.angle>360&&(this.angle=0),this.angle<0&&(this.angle=360),this.stayInsideMap(),this.x+=Math.cos(this.angle*Math.PI/180)*this.speed,this.y+=Math.sin(this.angle*Math.PI/180)*this.speed;var t=Q(this.x+this.width/2,this.y+this.height/2);B[t]&&(this.currentGridUnitPosition=t)}}},{key:"collisionCheckPickup",value:function(){var t=this;Y.getPickups().forEach((function(e){V(t,e)&&(e.ttl=0,t.level<5?t.incLevel():Y.getEnemies().forEach((function(t){t.die()})))}))}},{key:"die",value:function(){console.log("die"),this.isDead=!0,this.currentImage=4,Y.incBlood(this.x,this.y,0,20,20)}},{key:"resurrect",value:function(){this.isDead=!1,this.hp=this.originalHp}}]),i}(O),T=[S,E],C=Math.floor(192),P=Math.floor(128),B=new Array(C*P),X="enemy";T.map((function(t){var e=new Image(5,5);return e.src=t,e.onload=function(){console.log("loaded",t)},e}));function K(t,e){return t+C*e}!function(){for(var t=0;t<P;t++)for(var e=0;e<C;e++){var i=K(e,t);B[i]={type:"",background:"",col:e,row:t,x:5*e,y:5*t}}}();var L=function(t){return{x:t%C*5,y:5*Math.floor(t/C)}};function Q(t,e){return K(Math.floor(t/5),Math.floor(e/5))}function H(t){for(var e=0;e<B.length;e++){var i=B[e],n=i.type,r=(i.background,i.col,i.row,i.x),o=i.y;if(n===X){A(r,o,2.5,"#28c61a",t)}}}var D=function(t,e,i,n,r){return new F(t,e,"blue","green",i,n,Math.floor(10*Math.random())+5,i/3,r,Math.random())},W=function(t){Object(w.a)(i,t);var e=Object(U.a)(i);function i(t,n,r){var o;return Object(j.a)(this,i),(o=e.call(this,t,n,r,2,5,"#A9F4FF")).prevGridUnit=void 0,o.currentGridUnit=void 0,o.speed=10,o.ttl=10,o.currentGridUnit=Q(o.x+o.width/2,o.y+o.width/2),o.prevGridUnit=o.currentGridUnit,o}return Object(x.a)(i,[{key:"isAlive",value:function(){return this.ttl>0}},{key:"move",value:function(){var t;if(this.x+=Math.cos(this.angle)*this.speed,this.y+=Math.sin(this.angle)*this.speed,this.x<0||this.x>Y.canvasWidth||this.y<0||this.y>Y.canvasHeight)this.ttl=0;else if(this.prevGridUnit=null!==(t=this.currentGridUnit)&&void 0!==t?t:Q(this.x+this.width/2,this.y+this.width/2),this.currentGridUnit=Q(this.x+this.width/2,this.y+this.width/2),void 0!==B[this.currentGridUnit]){var e,i,n,r,o=-1;if(this.prevGridUnit!==this.currentGridUnit)if(B[this.currentGridUnit].type===X?o=this.currentGridUnit:(null===(e=B[this.currentGridUnit+C])||void 0===e?void 0:e.type)===X?o=this.currentGridUnit+C:(null===(i=B[this.currentGridUnit+1])||void 0===i?void 0:i.type)===X?o=this.currentGridUnit+1:(null===(n=B[this.currentGridUnit-1])||void 0===n?void 0:n.type)===X&&(o=this.currentGridUnit-1),o>0)null===(r=B[o].enemy)||void 0===r||r.die(this.angle),this.ttl=0}}},{key:"update",value:function(){this.move()}},{key:"draw",value:function(){var t=this.x,e=this.y,i=this.width;A(t,e,i,this.color,Y.getContext())}}]),i}(k),V=function(t,e){var i=t.y-t.height,n=t.y+t.height,r=t.x-t.width,o=t.x+t.width,s=e.y-e.height,a=e.y+e.height,h=e.x-e.width,c=e.x+e.width;return i<=a&&n>=s&&(r<=c&&o>=h)};var N,J,Z,q,Y,z=["#2f64ce","#13c13d","#1be4af","#7d239a","#9e8af6","#269ca7","#cdc18d","#c96732","#eba485","#7082d2"],_=document.createElement("canvas"),$=function(){function t(){var e=this;Object(j.a)(this,t),this.level=void 0,this.enemies=void 0,this.enemyIndexToFindTarget=void 0,this.projectiles=void 0,this.pickups=void 0,this.players=void 0,this.blood=void 0,this.gameIsRunning=void 0,this.hasStartedGame=void 0,this.loop=void 0,this.enemiesGridPositions=void 0,this.canvasWidth=void 0,this.canvasHeight=void 0,this.ctx=void 0,this.incWave=void 0,this.enemyGroupToUpdate=void 0,this.setContext=function(t){e.ctx=t},this.getContext=function(){return e.ctx},this.update=function(){e.players.forEach((function(t){return t.update()})),e.getProjectiles().forEach((function(t){return t.update()}));var t=Math.floor(e.enemies.length/4);switch(e.enemyGroupToUpdate){case 0:for(var i=0;i<t;i++)e.enemies[i].update();e.enemyGroupToUpdate=1;break;case 1:for(var n=t;n<e.enemies.length;n++)e.enemies[n].update();e.enemyGroupToUpdate=2;break;case 2:for(var r=t*e.enemyGroupToUpdate;r<e.enemies.length;r++)e.enemies[r].update();e.enemyGroupToUpdate=3;break;case 3:for(var o=t*e.enemyGroupToUpdate;o<e.enemies.length;o++)e.enemies[o].update();e.enemyGroupToUpdate=0}e.blood.forEach((function(t){return t.update()})),e.removeEnemies(),e.removeProjectiles(),e.removePickups(),e.enemies[e.enemyIndexToFindTarget]&&e.enemies[e.enemyIndexToFindTarget].findClosestTarget(),e.enemyIndexToFindTarget++,e.enemyIndexToFindTarget>e.enemies.length&&(e.enemyIndexToFindTarget=-100),e.enemies.length<=0&&(e.incLevel(),e.incEnemies())},this.draw=function(){var t;e.gameIsRunning?(v(0,0,e.canvasWidth,e.canvasHeight,"#2B303A",e.ctx),null===(t=e.ctx)||void 0===t||t.drawImage(_,0,0,e.canvasWidth,e.canvasHeight),H(e.ctx),e.getProjectiles().forEach((function(t){return t.draw()})),e.players.forEach((function(t){return t.draw()}))):console.log("this game is not running")},this.drawStartScreen=function(t){e.ctx&&(v(0,0,e.canvasWidth,e.canvasHeight,"grey",e.ctx),H(e.ctx))},this.addPlayer=function(t,i,n,r,o,s,a,h){var c=z[e.players.length],d=function(t){return new M(t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,arguments.length>3&&void 0!==arguments[3]?arguments[3]:"blue",arguments.length>4&&void 0!==arguments[4]?arguments[4]:"green",arguments.length>5&&void 0!==arguments[5]?arguments[5]:10,arguments.length>6&&void 0!==arguments[6]?arguments[6]:10,arguments.length>7&&void 0!==arguments[7]?arguments[7]:0,arguments.length>8&&void 0!==arguments[8]?arguments[8]:10)}(t,e.canvasWidth/2+10*e.players.length,e.canvasHeight/2,c,"red",void 0,void 0,void 0,a);d.addKeyListeners(h),d.setUpControls(i,n,r,o,s),e.players.push(d)},this.pause=function(){e.loop?(window.clearInterval(e.loop),e.loop=null,e.gameIsRunning=!1):(e.gameIsRunning=!0,e.loop=setInterval((function(){e.update(),e.draw()}),30))},this.startGame=function(){var t;console.log("start!"),e.enemies=[],e.projectiles=[],e.blood=[],null===(t=_.getContext("2d"))||void 0===t||t.clearRect(0,0,m,b),e.players.forEach((function(t){t.reset(),t.resurrect()})),e.gameIsRunning=!0,e.incEnemies(),e.loop&&window.clearInterval(e.loop),e.loop=setInterval((function(){e.update(),e.draw()}),30)},this.level=1,this.enemies=[],this.enemyIndexToFindTarget=0,this.projectiles=[],this.pickups=[],this.players=[],this.blood=[],this.gameIsRunning=!0,this.hasStartedGame=!1,this.loop=null,this.enemiesGridPositions=[],this.canvasWidth=m,this.canvasHeight=b,_.width=m,_.height=b,this.enemyGroupToUpdate=0,this.incWave=function(){}}return Object(x.a)(t,[{key:"setStartEnemiesGridPositions",value:function(){this.enemiesGridPositions=new Array(B.length);for(var t=this.enemiesGridPositions.length,e=0;e<=t-1;e++);}},{key:"addToEnemiesGridPositions",value:function(t,e){t>=0&&t<B.length&&(B[t].type=X,B[t].enemy=e)}},{key:"removeFromEnemiesGridPositions",value:function(t,e){var i;void 0===B[t]&&console.log("UNDEFINED INDEX"),void 0!==B[t]&&B[t].type===X&&(null===(i=B[t].enemy)||void 0===i?void 0:i.id)===e&&(B[t].type="",B[t].enemy=void 0)}},{key:"stopGame",value:function(){this.gameIsRunning=!1,this.players.forEach((function(t){t.removeEventListeners()})),clearInterval(this.loop),this.drawStartScreen()}},{key:"incProjectiles",value:function(t,e,i){var n=function(t,e,i){return new W(t,e,i)}(t,e,i);this.projectiles.push(n)}},{key:"incPickup",value:function(t,e){this.pickups.push(function(t,e,i){return new k(t,e,i,arguments.length>3&&void 0!==arguments[3]?arguments[3]:10,arguments.length>4&&void 0!==arguments[4]?arguments[4]:10,"purple")}(t,e,0))}},{key:"getPickups",value:function(){return this.pickups}},{key:"removePickups",value:function(){}},{key:"removeProjectiles",value:function(){this.projectiles=this.projectiles.filter((function(t){return t.isAlive()}))}},{key:"incEnemies",value:function(){for(var t=this,e=100*this.level*this.players.length,i=["top","right","bot","left"],n=200,r=function(e){var i=0;return"top"===e||"bot"===e?i=Math.random()*t.canvasWidth:"left"===e?i=-200*Math.random()-0:"right"===e&&(i=t.canvasWidth+Math.random()*n+0),Math.floor(i)},o=function(e){var i=0;return"left"===e||"right"===e?i=Math.random()*t.canvasHeight:"top"===e?i=-200*Math.random()-0:"bot"===e&&(i=t.canvasHeight+Math.random()*n+0),Math.floor(i)},s=Math.floor(Math.random()*this.players.length),a=this.players[s],h=0;h<e;h++){var c=i[Math.floor(4*Math.random())],d=r(c),l=o(c);this.enemies.push(D(d,l,5,5,a))}}},{key:"incBlood",value:function(t,e,i,n,r){Math.floor(3*Math.random()),Math.floor(3*Math.random());var o=_.getContext("2d");o&&A(t,e,n,"#D64933",o)}},{key:"getBlood",value:function(){return this.blood}},{key:"removeEnemies",value:function(){this.enemies=this.enemies.filter((function(t){return t.isAlive()}))}},{key:"getLevel",value:function(){return this.level}},{key:"incLevel",value:function(){console.log("NEW LEVEL"),this.level++,this.incWave(this.level),this.players.forEach((function(t){return t.resurrect()}))}},{key:"getEnemies",value:function(){return this.enemies}},{key:"getProjectiles",value:function(){return this.projectiles}}]),t}(),tt=g.b.div(N||(N=Object(u.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]))),et=g.b.div(J||(J=Object(u.a)(["\n  font-size: 48px;\n  color: #0C7C59;\n  color: #A9F4FF;\n  color: #BAC1B8;\n  cursor: pointer;\n  &:hover {\n    color: #edefed;\n  }\n"]))),it=function(t){var e=t.restart,i=t.quit;return Object(y.jsxs)(tt,{children:[Object(y.jsx)(et,{onClick:e,children:"Restart"}),Object(y.jsx)(et,{onClick:i,children:"Quit"})]})},nt=g.b.div(Z||(Z=Object(u.a)(["\n  text-align: center;\n  height: 100vh;\n  width: 100vw;\n  overflow: hidden;\n\n  ",";\n\n  div {\n    margin: 8px;\n  }\n"])),(function(t){return t.hasStarted&&Object(g.a)(q||(q=Object(u.a)(["\n    background: #1f2229;\n    background: #1f2229cf;\n  "])))}));var rt=function(){var t=Object(o.useState)([{name:"Player 1 default",advance:"w",turnRight:"d",turnLeft:"a",back:"s",fire:"u"}]),e=Object(l.a)(t,2),i=e[0],n=e[1],r=Object(o.useState)(""),s=Object(l.a)(r,2),a=s[0],h=s[1],u=Object(o.useState)(""),v=Object(l.a)(u,2),A=v[0],g=v[1],f=Object(o.useState)(""),p=Object(l.a)(f,2),m=p[0],b=p[1],j=Object(o.useState)(""),x=Object(l.a)(j,2),w=x[0],U=x[1],k=Object(o.useState)(""),O=Object(l.a)(k,2),S=O[0],E=O[1],I=Object(o.useState)(""),F=Object(l.a)(I,2),R=F[0],M=F[1],T=Object(o.useRef)(null),C=Object(o.useState)(!1),P=Object(l.a)(C,2),X=P[0],K=P[1],L=Object(o.useState)(3),Q=Object(l.a)(L,2),H=Q[0],D=(Q[1],Object(o.useState)(!1)),W=Object(l.a)(D,2),V=W[0],N=W[1],J=Object(o.useState)(!1),Z=Object(l.a)(J,2),q=Z[0],z=Z[1];Object(o.useEffect)((function(){if(X){console.log("startGame",i),Y=new $,console.log("gameState new");var t=T.current;i.forEach((function(e){var i=e.name,n=e.advance,r=e.turnRight,o=e.back,s=e.turnLeft,a=e.fire;Y.addPlayer(i,n,r,o,s,a,H,t)})),z(!0),Y.startGame()}}),[X,i,H]),Object(o.useEffect)((function(){var t,e=function(t){q&&("Escape"===t.key&&(N(Y.gameIsRunning),Y.pause()),"p"===t.key&&N(!1))};return null===(t=T.current)||void 0===t||t.addEventListener("keydown",e),function(){var t;return null===(t=T.current)||void 0===t?void 0:t.removeEventListener("keydown",e)}}),[q]);var _=function(){h(""),g(""),E(""),b(""),U(""),M("")},tt=function(){B.forEach((function(t,e){B[e]=Object(c.a)(Object(c.a)({},t),{},{type:"",background:"",enemy:void 0,player:void 0})}))},et=a.length<=0||A.length<=0||S.length<=0||m.length<=0||w.length<=0||R.length<=0;return Object(y.jsxs)(nt,{ref:T,hasStarted:X,tabIndex:0,children:[q?Object(y.jsx)(G,{gameState:Y}):Object(y.jsxs)("div",{children:[Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{children:"Name:"}),Object(y.jsx)("input",{type:"text",placeholder:"Add name",value:a,onChange:function(t){return h(t.target.value)}})]}),Object(y.jsx)("div",{children:"Controls"}),Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{children:"Advance:"}),Object(y.jsx)("input",{type:"text",placeholder:"",value:A,onKeyDown:function(t){return g(t.key)}})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{children:"Turn right:"}),Object(y.jsx)("input",{type:"text",placeholder:"",value:m,onKeyDown:function(t){return b(t.key)}})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{children:"Turn left:"}),Object(y.jsx)("input",{type:"text",placeholder:"",value:w,onKeyDown:function(t){return U(t.key)}})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{children:"Move backwards:"}),Object(y.jsx)("input",{type:"text",placeholder:"",value:S,onKeyDown:function(t){return E(t.key)}})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{children:"Fire:"}),Object(y.jsx)("input",{type:"text",placeholder:"",value:R,onKeyDown:function(t){return M(t.key)}})]}),Object(y.jsx)("button",{onClick:_,children:"Cancel"}),Object(y.jsx)("button",{onClick:function(t){t.preventDefault(),function(){var t={name:a,advance:A,back:S,turnRight:m,turnLeft:w,fire:R},e=[].concat(Object(d.a)(i),[t]);n(e)}(),_()},disabled:et,children:"Add Player"}),Object(y.jsx)("div",{children:"Players:"}),i.map((function(t){return Object(y.jsxs)("div",{children:[JSON.stringify(t),Object(y.jsxs)("button",{onClick:function(){return function(t){var e=i.filter((function(e){return e.name!==t}));n(e)}(t.name)},children:["Remove ",t.name]})]})})),i.length>0&&Object(y.jsx)("div",{children:Object(y.jsx)("button",{onClick:function(){X||K(!0)},children:"start game"})})]}),V&&Object(y.jsx)(it,{restart:function(){console.log("restart"),Y.stopGame(),tt(),z(!1),N(!1),Y.startGame(),z(!0)},quit:function(){Y.stopGame(),tt(),N(!1),z(!1),K(!1)}})]})},ot=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,29)).then((function(e){var i=e.getCLS,n=e.getFID,r=e.getFCP,o=e.getLCP,s=e.getTTFB;i(t),n(t),r(t),o(t),s(t)}))};h.a.render(Object(y.jsx)(s.a.StrictMode,{children:Object(y.jsx)(rt,{})}),document.getElementById("root")),ot()}},[[28,1,2]]]);
//# sourceMappingURL=main.4af397a0.chunk.js.map