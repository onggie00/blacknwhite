(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{165:function(e,a,t){e.exports=t.p+"static/media/logo.6f421467.svg"},167:function(e,a,t){e.exports=t(412)},172:function(e,a,t){},192:function(e,a,t){e.exports=t.p+"static/media/logo_black.3823573e.png"},217:function(e,a,t){e.exports=t.p+"static/media/slider1.1af30cfe.jpg"},218:function(e,a,t){e.exports=t.p+"static/media/slider2.5d89329e.jpg"},219:function(e,a,t){e.exports=t.p+"static/media/slider3.6de75c18.jpg"},220:function(e,a,t){e.exports=t.p+"static/media/slider4.abd602dc.jpg"},221:function(e,a,t){e.exports=t.p+"static/media/slider5.a981adc9.jpg"},222:function(e,a,t){e.exports=t.p+"static/media/slider6.43082cd2.jpg"},223:function(e,a,t){e.exports=t.p+"static/media/about.40147d9d.png"},224:function(e,a,t){e.exports=t.p+"static/media/stylist1.14c41f4b.jpg"},225:function(e,a,t){e.exports=t.p+"static/media/stylist2.5256d8b1.jpg"},226:function(e,a,t){e.exports=t.p+"static/media/stylist3.a2bbebd0.jpg"},411:function(e,a,t){},412:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(28),c=t.n(r),s=(t(172),t(8)),i=t(9),m=t(11),o=t(10),u=t(12),d=t(4),p=t(37),E=(t(173),t(174),t(75)),g=t(59),h=t.n(g),f=(t(190),t(191),t(58)),b=(t(192),t(2)),v=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).state={collapse:!1,isWideEnough:!1},t.onClick=t.onClick.bind(Object(f.a)(Object(f.a)(t))),t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"onClick",value:function(){this.setState({collapse:!this.state.collapse})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("header",null,l.a.createElement(d.a,null,l.a.createElement(b.q,{color:"elegant-color",fixed:"top",dark:!0,expand:"md",scrolling:!0,transparent:!0},l.a.createElement(b.r,{href:"/",className:"nav_logo"},l.a.createElement("b",null,"BLACK & WHITE")),!this.state.isWideEnough&&l.a.createElement(b.t,{onClick:this.onClick}),l.a.createElement(b.f,{isOpen:this.state.collapse,navbar:!0},l.a.createElement(b.s,{right:!0},l.a.createElement(b.o,{active:!0},l.a.createElement(b.p,{to:"/"},"Beranda")),l.a.createElement(b.o,null,l.a.createElement(b.p,{to:"#about"},"Tentang Kami")),l.a.createElement(b.o,null,l.a.createElement(b.p,{to:"#antrian"},"Ambil Antrian")),l.a.createElement(b.o,null,l.a.createElement(b.p,{to:"#stylist"},"Stylist Kami")),l.a.createElement(b.o,null,l.a.createElement(b.p,{to:"/hairstyle"},"Hairstyle")),l.a.createElement(b.o,null,l.a.createElement(b.p,{to:"#faq"},"Tanya Kami")),l.a.createElement(b.o,null,l.a.createElement(b.p,{to:"#login_member",onClick:this.props.togglelogin},"Login Member"))))))))}}]),a}(n.Component),N=t(23),y=t.n(N),k=t(76),w=t.n(k),O=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).continue=function(e){e.preventDefault(),t.props.nextStep()},t.notelp=l.a.createRef(),t.password=l.a.createRef(),t.state={memberData:[]},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"getMemberData",value:function(){var e=this;y.a.get("http://localhost:3000/api/member").then(function(a){e.setState({memberData:a.data},function(){})}).catch(function(e){return console.log(e)})}},{key:"onSubmit",value:function(e){this.notelp.current.state.innerValue,w()(this.password.current.state.innerValue);e.preventDefault()}},{key:"render",value:function(){var e=this.props;e.values,e.handleChange;return l.a.createElement("div",null,l.a.createElement(b.l,null,l.a.createElement(b.b,null,l.a.createElement(b.c,null,l.a.createElement(b.d,{className:"form-header heavy-rain-gradient rounded"},l.a.createElement("h3",{className:"my-3 text-center"},l.a.createElement(b.h,{icon:"lock"})," Login Member")),l.a.createElement("form",{onSubmit:this.onSubmit.bind(this)},l.a.createElement("div",{className:"grey-text"},l.a.createElement(b.i,{label:"Nomor Telepon Anda",icon:"mobile",group:!0,type:"text",validate:!0,error:"",success:"Valid"}),l.a.createElement(b.i,{label:"Masukkan Password Anda",icon:"key",group:!0,type:"password",validate:!0})),l.a.createElement("div",{className:"text-center mt-4"},l.a.createElement(b.a,{color:"light-blue",className:"mb-3",type:"submit"},"Login")))))),l.a.createElement(b.m,null,l.a.createElement("i",null,"Belum Punya Akun sendiri? "),l.a.createElement(b.p,{color:"secondary",to:"/register"},"Daftar")))}}]),a}(n.Component),j=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).toggle=function(e){return function(){var a="modal"+e;t.setState(Object(E.a)({},a,!t.state[a]))}},t.togglelogin=function(){t.setState({loginmember:!t.state.loginmember})},t.toRegister=function(){t.props.history.push("/")},t.state={Admin:[],modal1:!1,loginmember:!1,AboutData:[]},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentWillMount",value:function(){this.getAboutData()}},{key:"getAboutData",value:function(){var e=this;y.a.get("http://localhost:3000/api/barbershop").then(function(a){e.setState({AboutData:a.data},function(){})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e={dots:!1,infinite:!0,speed:1e3,slidesToShow:1,slidesToScroll:1};return l.a.createElement(b.g,{fluid:!0},l.a.createElement(v,{togglelogin:this.togglelogin}),l.a.createElement("div",{className:"slick-slider1"},l.a.createElement(h.a,{dots:!0,arrow:!0,autoplay:!0,infinite:!0,slidesToShow:1,slidesToScroll:1,autoplaySpeed:4e3,pauseOnDotsHover:!0,pauseOnFocus:!0,fade:!0},l.a.createElement("div",{className:"slide"}," ",l.a.createElement("img",{src:t(217),alt:"Slider1"}),l.a.createElement("h2",{className:"white-caption title"}," Now Open "),l.a.createElement("p",{className:"white-caption paragraph"},"Best Haircut and Styling Partner")),l.a.createElement("div",{className:"slide"}," ",l.a.createElement("img",{src:t(218),alt:"Slider2"}),l.a.createElement("h2",{className:"white-caption title_right"}," Now Open "),l.a.createElement("p",{className:"white-caption paragraph_right"},"Best Haircut and Styling Partner")),l.a.createElement("div",{className:"slide"}," ",l.a.createElement("img",{src:t(219),alt:"Slider3"}),l.a.createElement("h2",{className:"white-caption title_right"}," Now Open "),l.a.createElement("p",{className:"white-caption paragraph_right"},"Best Haircut and Styling Partner")),l.a.createElement("div",{className:"slide"}," ",l.a.createElement("img",{src:t(220),alt:"Slider4"}),l.a.createElement("h2",{className:"white-caption title"}," Now Open "),l.a.createElement("p",{className:"white-caption paragraph"},"Best Haircut and Styling Partner")),l.a.createElement("div",{className:"slide"}," ",l.a.createElement("img",{src:t(221),alt:"Slider5"}),l.a.createElement("h2",{className:"white-caption title"}," Now Open "),l.a.createElement("p",{className:"white-caption paragraph"},"Best Haircut and Styling Partner")),l.a.createElement("div",{className:"slide"}," ",l.a.createElement("img",{src:t(222),alt:"Slider6"}),l.a.createElement("h2",{className:"white-caption title"}," Now Open "),l.a.createElement("p",{className:"white-caption paragraph"},"Best Haircut and Styling Partner")))),l.a.createElement(b.v,null,l.a.createElement(b.e,{size:"12",sm:"6",md:"12",lg:"12"},l.a.createElement("div",{className:"about",id:"about"},this.state.AboutData.map(function(e){return l.a.createElement("h1",{key:"nama"+e.id},e.nama)}),l.a.createElement("h6",null,"Tentang Kami"),l.a.createElement("img",{src:t(223),alt:"about-us"}),l.a.createElement(b.g,null,l.a.createElement(b.v,null,l.a.createElement(b.e,{size:"12",sm:"12",md:"8",className:"offset-sm-2"},l.a.createElement("p",{className:"subtitle"},"Selamat Datang di ",l.a.createElement("br",null)," Black & White Barbershop. Kami siap melayani anda dengan performa terbaik dan kualitas terjamin yang dapat meningkatkan percaya diri anda."),l.a.createElement("hr",null))),l.a.createElement(b.v,null,l.a.createElement(b.e,{size:"12",sm:"12",md:"8",className:"offset-sm-2"},this.state.AboutData.map(function(e){return l.a.createElement("div",{key:"about"+e.id},l.a.createElement("p",null,"Buka Setiap Hari ",l.a.createElement("i",null," (Senin - Minggu) ")),l.a.createElement("p",null,l.a.createElement(b.h,{icon:"door-open"}),"Jam Buka / Tutup :"," ",e.jam_buka+" - "+e.jam_tutup),l.a.createElement("p",null,l.a.createElement(b.h,{icon:"building"})," Lokasi :"," ",e.alamat),l.a.createElement("p",null,l.a.createElement(b.h,{icon:"phone"})," Telepon : ",e.notelp),l.a.createElement("p",null,l.a.createElement("i",{className:""},e.owner," ",l.a.createElement("br",null)," Owner"," ")))}))))))),l.a.createElement(b.g,{fluid:!0,className:"full zoom ambil_antrian"},l.a.createElement(b.v,{middle:!0},l.a.createElement(b.e,{size:"12",sm:"12",md:"12"},l.a.createElement("p",{className:"title_antrian"},"Ambil Nomor Antrian"))),l.a.createElement(b.v,{middle:!0},l.a.createElement(b.e,{size:"12",sm:"12",md:"6",lg:"4",className:"form_antrian offset-md-3 offset-lg-4"},l.a.createElement(b.b,null,l.a.createElement(b.c,null,l.a.createElement("form",null,l.a.createElement("p",{className:"text-center mb4"},"Silahkan Mengisi Form Berikut :"),l.a.createElement("div",{className:"grey-text"},l.a.createElement(b.i,{label:"Nomor Telepon Anda",icon:"phone-square",group:!0,type:"text",validate:!0,error:"Format Salah",success:"Terima Kasih"}),l.a.createElement(b.i,{label:"Nama Anda",icon:"user-circle",group:!0,type:"text",validate:!0,error:"Format Salah",success:"Terima Kasih"})),l.a.createElement("div",{className:"text-center"},l.a.createElement(b.a,null,"Ambil")))))))),l.a.createElement(b.g,{className:"cloudy-knoxville-gradient",fluid:!0},l.a.createElement(b.v,{className:"top_model"},l.a.createElement(b.e,{middle:!0},l.a.createElement("h1",null,"Top Model"),l.a.createElement("p",{className:"top_subtitle"},"Best Model Recommended for You"))),l.a.createElement(b.g,{className:"top_model_content"},l.a.createElement(b.v,null,l.a.createElement(b.e,{lg:"4",md:"4",sm:"12",className:"text-center"},l.a.createElement("h2",null,"Short Haircuts"),l.a.createElement(h.a,e,l.a.createElement("div",{className:"slide2"},l.a.createElement("h4",{className:""}," Crew Cut "),l.a.createElement("img",{src:t(78),alt:"Slider1"})),l.a.createElement("div",{className:"slide2"},l.a.createElement("h4",{className:""}," Undercut "),l.a.createElement("img",{src:t(79),alt:"Slider2"})))),l.a.createElement(b.e,{lg:"4",md:"4",sm:"12",className:"text-center"},l.a.createElement("h2",null,"Medium Haircuts"),l.a.createElement(h.a,e,l.a.createElement("div",{className:"slide2"},l.a.createElement("h4",{className:""}," Crew Cut "),l.a.createElement("img",{src:t(78),alt:"Slider1"})),l.a.createElement("div",{className:"slide2"},l.a.createElement("h4",{className:""}," Undercut "),l.a.createElement("img",{src:t(79),alt:"Slider2"})))),l.a.createElement(b.e,{lg:"4",md:"4",sm:"12",className:"text-center"},l.a.createElement("h2",null,"Long Haircuts"),l.a.createElement(h.a,e,l.a.createElement("div",{className:"slide2"},l.a.createElement("h4",{className:""}," Crew Cut "),l.a.createElement("img",{src:t(78),alt:"Slider1"})),l.a.createElement("div",{className:"slide2"},l.a.createElement("h4",{className:""}," Undercut "),l.a.createElement("img",{src:t(79),alt:"Slider2"})))))),l.a.createElement(b.v,{id:"stylist"},l.a.createElement(b.g,{fluid:!0,className:"stylist_section"},l.a.createElement(b.v,null,l.a.createElement(b.e,{middle:!0},l.a.createElement("h1",null,"Barber Squad"),l.a.createElement("p",{className:"stylist_subtitle"},"Meet The Stylist Team"))),l.a.createElement(b.v,{center:!0},l.a.createElement(b.e,{lg:"3",md:"12",sm:"12",className:"text-center mb-3"},l.a.createElement("img",{src:t(224),className:"rounded-circle",alt:"stylist1"}),l.a.createElement("p",{className:"stylist_description"},l.a.createElement("b",null,"Onggie Danny"),l.a.createElement("br",null),"08986170445")),l.a.createElement(b.e,{lg:"3",md:"12",sm:"12",className:"text-center mb-3"},l.a.createElement("img",{src:t(225),className:"rounded-circle",alt:"stylist1"}),l.a.createElement("p",{className:"stylist_description"},l.a.createElement("b",null,"Onggie Danny"),l.a.createElement("br",null),"08986170445")),l.a.createElement(b.e,{lg:"3",md:"12",sm:"12",className:"text-center mb-3"},l.a.createElement("img",{src:t(226),className:"rounded-circle z-depth-1",alt:"stylist1"}),l.a.createElement("p",{className:"stylist_description"},l.a.createElement("b",null,"Onggie Danny"),l.a.createElement("br",null),"08986170445"))))),l.a.createElement(b.g,{className:"hairstyle_model cloudy-knoxville-gradient",fluid:!0},l.a.createElement(b.v,{className:"text-center"},l.a.createElement(b.e,{lg:"12",md:"12",sm:"12"},l.a.createElement("h1",{className:"hairstyle_title"},"Hairstyle Category"))),l.a.createElement(b.v,{className:"text-center"},l.a.createElement(b.e,{lg:"12",md:"12",sm:"12",className:"mb-3"},l.a.createElement(b.a,{className:"mb-3",onClick:this.toggle(1)},"Kategori 1"),l.a.createElement(b.a,{className:"mb-3",onClick:this.toggle(1)},"Kategori 1"),l.a.createElement(b.a,{className:"mb-3",onClick:this.toggle(1)},"Kategori 1"),l.a.createElement(b.a,{className:"mb-3",onClick:this.toggle(1)},"Kategori 1"),l.a.createElement(b.a,{className:"mb-3",onClick:this.toggle(1)},"Kategori 1"))))),l.a.createElement(b.g,{fluid:!0,className:"footer",id:"footer"},l.a.createElement(b.v,null,l.a.createElement(b.e,{size:"12",className:"text-center mb-4"},l.a.createElement("p",null,"\xa9 2019 Black & White Barbershop all rights reserved. Powered by Onggie Danny Susanto")))),l.a.createElement(b.k,{isOpen:this.state.modal1,toggle:this.toggle(1),size:"fluid"},l.a.createElement(b.n,{toggle:this.toggle(1)},"MDBModal title"),l.a.createElement(b.l,{className:"text-center"},"(...)"),l.a.createElement(b.m,null,l.a.createElement(b.a,{color:"secondary",onClick:this.toggle(1)},"Close"),l.a.createElement(b.a,{color:"primary"},"Save changes"))),l.a.createElement(b.k,{isOpen:this.state.loginmember,toggle:this.togglelogin},l.a.createElement(O,{togglelogin:this.togglelogin,toRegister:this.toRegister})))}}]),a}(n.Component),S=function(){return l.a.createElement("div",null,l.a.createElement("p",null,"About"))},x=function(){return l.a.createElement("div",null,l.a.createElement("p",null,"Contact"))},C=function(){return l.a.createElement("div",null,l.a.createElement("p",null,"Error The Page Doesn't Exist"))},D=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).handleChangeuser=function(e){t.setState({inputuser:e.target.value})},t.handleChangepass=function(e){t.setState({inputpass:e.target.value})},t.resetInput=function(){t.setState({inputuser:"",inputpass:""})},t.state={Admin:[],adminuser:"",inputuser:"",inputpass:""},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"changeValue",value:function(e){this.setState({Admin:e})}},{key:"fetchlogin",value:function(e){var a=this;y.a.get("http://localhost:3000/api/admin/findOne",{params:{"filter[where][username]":e.username,"filter[where][password]":e.password}}).then(function(e){a.setState({Admin:e.data},function(){console.log("Login Success"),a.changeValue(e.data),a.props.history.push({pathname:"/admin",data:a.state.Admin})})}).catch(function(e){404===e.response.status?(console.log(a.state),alert("Wrong Username or Password"),a.resetInput()):401===e.response.status&&(console.log(a.state),alert("Authenticate required"))})}},{key:"onSubmit",value:function(e){var a={password:this.refs.password.value,username:this.refs.username.value};this.fetchlogin(a),e.preventDefault()}},{key:"render",value:function(){return l.a.createElement("div",{className:"loginlayout"},l.a.createElement("div",{className:"container loginpage"},l.a.createElement("div",{className:"row justify-content-md-center login-main-content"},l.a.createElement("div",null,l.a.createElement("h1",null,"LOGIN PAGE"))),l.a.createElement("div",{className:"row justify-content-md-center"},l.a.createElement("form",{onSubmit:this.onSubmit.bind(this)},l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"text",name:"username",ref:"username",value:this.state.inputuser,onChange:this.handleChangeuser}),l.a.createElement("label",{htmlFor:"username"},"Username")),l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"password",name:"password",ref:"password",value:this.state.inputpass,onChange:this.handleChangepass}),l.a.createElement("label",{htmlFor:"password"},"Password")),l.a.createElement("input",{type:"submit",value:"LOGIN",className:"btn"}),l.a.createElement(d.b,{className:"btn grey right",to:"/",onClick:function(){return window.location.refresh()}},"Back"))),l.a.createElement("br",null)))}}]),a}(n.Component),A=t(165),_=t.n(A),M=function(){return l.a.createElement("div",{className:"main"},l.a.createElement(d.b,{to:"/"},"Home"),l.a.createElement(d.b,{to:"/contact"},"Contact"),l.a.createElement(d.b,{to:"/about"},"About"),l.a.createElement(d.b,{to:"/admin"},"Admin"))},B=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).state={Admin:t.props.data},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){console.log(this.props);var e=this.props.location.data;return l.a.createElement("div",null,l.a.createElement("nav",{className:"grey darken-4"},l.a.createElement("div",{className:"nav-wrapper"},l.a.createElement("a",{href:"/",className:"brand-logo"},"\xa0"),l.a.createElement(d.c,{to:"#","data-target":"main-menu",className:"sidenav-trigger button-collapse show-on-large"},l.a.createElement("i",{className:"fa fa-bars"})),l.a.createElement("ul",{className:"right hide-on-small-only"},l.a.createElement("li",null,l.a.createElement(d.c,{to:"/admin/login",onClick:function(){return window.location.refresh()}},l.a.createElement("i",{className:"fa fa-user"}),"\xa0 LOGOUT ",e.username))),l.a.createElement("ul",{className:"sidenav sidenav-fixed blue-grey lighten-5",id:"main-menu"},l.a.createElement(d.c,{to:"/",className:"logo"},l.a.createElement("img",{src:_.a,alt:"logo"})),l.a.createElement("li",null,l.a.createElement(d.c,{to:"/admin"},l.a.createElement("i",{className:"fa fa-tachometer"}),"Dashboard")),l.a.createElement("li",null,l.a.createElement(d.c,{to:"/admin/administrator"},l.a.createElement("i",{className:"fa fa-user"}),"Data Admin")),l.a.createElement("li",null,l.a.createElement(d.c,{to:"/admin/barbershop"},l.a.createElement("i",{className:"fa fa-building"}),"Data Barbershop")),l.a.createElement("li",null,l.a.createElement(d.c,{to:"/admin/member"},l.a.createElement("i",{className:"fa fa-users"}),"Data Member")),l.a.createElement("li",null,l.a.createElement(d.c,{to:"/admin/stylist"},l.a.createElement("i",{className:"fa fa-user-circle"}),"Data Stylist")),l.a.createElement("li",null,l.a.createElement(d.c,{to:"/admin/category"},l.a.createElement("i",{className:"fa fa-table"}),"Kategori Model Rambut")),l.a.createElement("li",null,l.a.createElement(d.c,{to:"/admin/hairstyle"},l.a.createElement("i",{className:"fa fa-scissors"}),"Data Model Rambut")),l.a.createElement("li",null,l.a.createElement(d.c,{to:"/admin/feedback"},l.a.createElement("i",{className:"fa fa-comments"}),"Data Feedback")),l.a.createElement("li",null,l.a.createElement(d.c,{to:"/admin/broadcast"},l.a.createElement("i",{className:"fa fa-bullhorn"}),"Broadcast Pesan")),l.a.createElement("li",null,l.a.createElement(d.c,{to:"/admin/pengumuman"},l.a.createElement("i",{className:"fa fa-pencil-square-o"}),"Data Pengumuman")),l.a.createElement("li",null,l.a.createElement(d.c,{to:"/admin/about"},l.a.createElement("i",{className:"fa fa-question-circle"}),"Tentang Kami"))))),l.a.createElement(M,null))}}]),a}(n.Component),T=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"reset",value:function(){}},{key:"render",value:function(){return console.log(this.props),l.a.createElement("div",null,l.a.createElement(d.b,{to:"/logout",onClick:this.reset},"Logout Admin"))}}]),a}(n.Component),P=t(77),R=t.n(P),H=t(166),K=t.n(H),L=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(m.a)(this,Object(o.a)(a).call(this))).fetchData=function(){y.a.get("http://localhost:3000/api/admin/").then(function(a){var t=a.data;e.setState({data:t,isLoading:!1}),console.log(e.state)}).then(function(e){})},e.state={Admin:[],data:{}},e}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){var e=[{username:"i-am-billy",realname:"Billy",location:"Mars",date:R()().subtract(1,"days").format("Do MMMM YYYY")},{username:"john-nhoj",realname:"John",location:"Saturn",date:R()().subtract(2,"days").format("Do MMMM YYYY")}],a={date:function(e){return R()(e,"Do MMMM YYYY").valueOf()}};return l.a.createElement("div",{className:"main"},l.a.createElement(K.a,{tableHeader:[{title:"Username",prop:"username",sortable:!0,filterable:!0},{title:"Name",prop:"realname",sortable:!0},{title:"Name Uppercased",prop:"realnameuppercase",cell:function(e){return e.realname.toUpperCase()}},{title:"Location",prop:"location"},{title:"Last Updated",prop:"date",sortable:!0}],tableBody:e,keyName:"userTable",tableClass:"striped hover responsive",rowsPerPage:5,rowsPerPageOption:[5,10,15,20],initialSort:{prop:"username",isAscending:!0},onSort:a,labels:{first:"<<",last:">>",prev:"<",next:">",show:"Display",entries:"rows",noResults:"There is no data to be displayed"}}))}}]),a}(n.Component),V=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).continue=function(e){e.preventDefault(),t.props.nextStep()},t.checkData=function(e){y.a.get("http://localhost:3000/api/member/findOne",{params:{"filter[where][notelp]":e.notelp}}).then(function(e){200===e.status&&t.setState({isRegistered:1})}).catch(function(a){404===a.response.status&&(t.setState({isRegistered:2}),t.props.registerData(e))})},t.nama_lengkap=l.a.createRef(),t.notelp=l.a.createRef(),t.alamat=l.a.createRef(),t.password=l.a.createRef(),t.state={isRegistered:0},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"onSubmit",value:function(e){var a={nama_lengkap:this.nama_lengkap.current.state.innerValue,notelp:this.notelp.current.state.innerValue,alamat:this.alamat.current.state.innerValue,password:w()(this.password.current.state.innerValue),created_at:new Date,status:"0"};this.checkData(a),e.preventDefault()}},{key:"render",value:function(){return l.a.createElement("div",{name:"Form_Registrasi"},l.a.createElement(b.g,{fluid:!0},l.a.createElement(b.v,{center:!0,className:"register-left-bg"},l.a.createElement(b.e,{lg:"8",md:"7",sm:"12",className:"register-left"},l.a.createElement(b.g,{fluid:!0},l.a.createElement(b.w,{waves:!0,className:"bg-register"},l.a.createElement(b.j,{overlay:"black-slight",className:"flex-center"},l.a.createElement(b.v,{middle:!0,className:"register-text"},l.a.createElement(b.e,{lg:"8",md:"6",sm:"12"})))))),l.a.createElement(b.e,{lg:"4",md:"5",sm:"12"},l.a.createElement(b.g,{className:"register-form"},l.a.createElement(b.v,null,l.a.createElement(b.e,{size:"12"},1===this.state.isRegistered&&l.a.createElement(b.u,{show:!0,fade:!0,icon:"exclamation",iconClassName:"red-text",title:"Notifikasi",message:"Mohon Maaf Nomor Tersebut Sudah Terdaftar.",text:"1 detik yang lalu"}),2===this.state.isRegistered&&l.a.createElement(b.u,{show:!0,fade:!0,icon:"check-circle",iconClassName:"green-text",title:"Notifikasi",message:"Pendaftaran Berhasil.",text:"1 detik yang lalu"}),l.a.createElement(b.b,null,l.a.createElement(b.c,null,l.a.createElement("form",{onSubmit:this.onSubmit.bind(this)},l.a.createElement("p",{className:"h5 text-center mb-4"},"Form Pendaftaran Member"),l.a.createElement("div",{className:"grey-text"},l.a.createElement(b.i,{label:"Nama Lengkap",icon:"user",group:!0,type:"text",validate:!0,success:"Valid",required:!0,className:"form-control",ref:this.nama_lengkap}),l.a.createElement(b.i,{label:"Nomor Telepon",icon:"mobile",group:!0,type:"text",validate:!0,success:"Valid",required:!0,className:"form-control",ref:this.notelp}),l.a.createElement(b.i,{label:"Alamat",icon:"home",group:!0,type:"text",validate:!0,success:"Valid",required:!0,className:"form-control",ref:this.alamat}),l.a.createElement(b.i,{label:"Password",icon:"lock",group:!0,type:"password",validate:!0,success:"Valid",required:!0,className:"form-control",ref:this.password})),l.a.createElement("div",{className:"text-center"},l.a.createElement(b.a,{type:"submit",color:"primary"},"Daftar"),l.a.createElement(b.a,{onClick:this.props.backtoHomepage,type:"button",color:"secondary"},"Kembali Ke halaman Awal"))))))))))))}}]),a}(n.Component),Y=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).registerData=function(e){y.a.request({method:"post",url:"http://localhost:3000/api/member",data:e}).then(function(e){console.log("Sukses Daftar")}).catch(function(e){return console.log(e)})},t.backtoHomepage=function(){t.props.history.push("/")},t.handleChange=function(e){return function(a){t.setState(Object(E.a)({},e,a.target.value))}},t.state={name:t.props.name,nama_lengkap:"",no_telp:"",alamat:"",password:""},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.state,a={nama_lengkap:e.nama_lengkap,no_telp:e.no_telp,alamat:e.alamat,password:e.password};return"/register"===window.location.pathname?l.a.createElement(V,{handleChange:this.handleChange,registerData:this.registerData,values:a,backtoHomepage:this.backtoHomepage}):"/login"===window.location.pathname?l.a.createElement(O,{handleChange:this.handleChange,values:a}):l.a.createElement("div",null,l.a.createElement("h1",null,"ERROR"))}}]),a}(n.Component),q=(t(411),function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(m.a)(this,Object(o.a)(a).call(this))).state={Admin:[],is_login:!1},e}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(d.a,null,l.a.createElement(p.c,null,l.a.createElement(p.a,{exact:!0,path:"/"},l.a.createElement(j,null)),l.a.createElement(p.a,{exact:!0,path:"/about"},l.a.createElement(v,null),l.a.createElement(S,null)),l.a.createElement(p.a,{exact:!0,path:"/contact"},l.a.createElement(v,null),l.a.createElement(x,null)),l.a.createElement(p.a,{exact:!0,path:"/admin/login",name:"adminlogin",component:D}),l.a.createElement(p.a,{exact:!0,path:"/admin",name:"admindashboard",render:function(e){return l.a.createElement(B,e)},data:this.state.Admin}),l.a.createElement(p.a,{exact:!0,path:"/logout",name:"adminlogout",component:T}),l.a.createElement(p.a,{exact:!0,path:"/admin/datatable",name:"admintable",component:L}),l.a.createElement(p.a,{exact:!0,path:"/register",component:Y}),l.a.createElement(p.a,{name:"not found"},l.a.createElement(v,null),l.a.createElement(C,null)))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},78:function(e,a,t){e.exports=t.p+"static/media/Crew-Cut.3181ab16.jpg"},79:function(e,a,t){e.exports=t.p+"static/media/Undercut.5e698c37.jpg"}},[[167,1,2]]]);
//# sourceMappingURL=main.4069e83f.chunk.js.map