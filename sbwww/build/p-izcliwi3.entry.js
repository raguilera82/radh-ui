import{r as s,e as t,h as a,d as i,H as r,c as o,i as _}from"./p-9176a1c1.js";const c=class{constructor(t){s(this,t)}componentDidLoad(){d(()=>{const s=_(window,"hybrid");i.getBoolean("_testing")||__sc_import_radh_ui("./p-f0825b96.js").then(s=>s.startTapClick(i)),i.getBoolean("statusTap",s)&&__sc_import_radh_ui("./p-c003d9c0.js").then(s=>s.startStatusTap()),i.getBoolean("inputShims",n())&&__sc_import_radh_ui("./p-05a47253.js").then(s=>s.startInputShims(i)),i.getBoolean("hardwareBackButton",s)&&__sc_import_radh_ui("./p-105bab28.js").then(s=>s.startHardwareBackButton()),__sc_import_radh_ui("./p-b9bccfd6.js").then(s=>s.startFocusVisible())})}render(){const s=t(this);return a(r,{class:{[s]:!0,"ion-page":!0,"force-statusbar-padding":i.getBoolean("_forceStatusbarPadding")}})}get el(){return o(this)}static get style(){return"html.plt-mobile ion-app{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}"}},n=()=>_(window,"ios")&&_(window,"mobile"),d=s=>{"requestIdleCallback"in window?window.requestIdleCallback(s):setTimeout(s,32)};export{c as ion_app};