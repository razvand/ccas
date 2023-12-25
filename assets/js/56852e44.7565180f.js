"use strict";(self.webpackChunkccas=self.webpackChunkccas||[]).push([[6736],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>k});var n=t(7294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var p=n.createContext({}),o=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},m=function(e){var a=o(e.components);return n.createElement(p.Provider,{value:a},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=o(t),u=s,k=c["".concat(p,".").concat(u)]||c[u]||d[u]||i;return t?n.createElement(k,r(r({ref:a},m),{},{components:t})):n.createElement(k,r({ref:a},m))}));function k(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var i=t.length,r=new Array(i);r[0]=u;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l[c]="string"==typeof e?e:s,r[1]=l;for(var o=2;o<i;o++)r[o]=t[o];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3244:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var n=t(7462),s=(t(7294),t(3905));const i={},r="Principles of Programming",l={unversionedId:"Functions/Principles of Programming/read",id:"Functions/Principles of Programming/read",title:"Principles of Programming",description:"Modularity",source:"@site/docs/Functions/Principles of Programming/read.md",sourceDirName:"Functions/Principles of Programming",slug:"/Functions/Principles of Programming/read",permalink:"/ccas/Functions/Principles of Programming/read",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Principles of Programming",permalink:"/ccas/Functions/Principles of Programming/"},next:{title:"The Central Limit Theorem and Related Topics",permalink:"/ccas/Functions/The Central Limit Theorem and Related Topics/"}},p={},o=[{value:"Modularity",id:"modularity",level:2},{value:"Details",id:"details",level:3},{value:"Examples",id:"examples",level:3},{value:"Modularity and Functions",id:"modularity-and-functions",level:2},{value:"Details",id:"details-1",level:3},{value:"Examples",id:"examples-1",level:3},{value:"Modularity and Files",id:"modularity-and-files",level:2},{value:"Details",id:"details-2",level:3},{value:"Examples",id:"examples-2",level:3},{value:"Structuring an R Project",id:"structuring-an-r-project",level:2},{value:"Details",id:"details-3",level:3},{value:"Examples",id:"examples-3",level:3},{value:"Loops, for",id:"loops-for",level:2},{value:"Details",id:"details-4",level:3},{value:"Examples",id:"examples-4",level:3},{value:"The if and ifelse Commands",id:"the-if-and-ifelse-commands",level:2},{value:"Examples",id:"examples-5",level:3},{value:"Indenting",id:"indenting",level:2},{value:"Details",id:"details-5",level:3},{value:"Comments",id:"comments",level:2},{value:"Examples",id:"examples-6",level:3}],m={toc:o},c="wrapper";function d(e){let{components:a,...t}=e;return(0,s.kt)(c,(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"principles-of-programming"},"Principles of Programming"),(0,s.kt)("h2",{id:"modularity"},"Modularity"),(0,s.kt)("p",null,"Modularity involves designing a system that is divided into a set of functional units (named modules) that can be composed into a larger application.\nAny programming project should be split into logical module pieces of code which are combined into a complete program."),(0,s.kt)("h3",{id:"details"},"Details"),(0,s.kt)("p",null,"Typically input, initialization, analysis, and output commands are grouped into separate parts."),(0,s.kt)("h3",{id:"examples"},"Examples"),(0,s.kt)("admonition",{title:"Example",type:"info"},(0,s.kt)("p",{parentName:"admonition"},"Input:"),(0,s.kt)("pre",{parentName:"admonition"},(0,s.kt)("code",{parentName:"pre",className:"language-text"},'dat <- read.table("http://notendur.hi.is/~gunnar/kennsla/alsm/data/set115.dat", header=T)\ncols <- c("le", "osl")\n')),(0,s.kt)("p",{parentName:"admonition"},"Analysis:"),(0,s.kt)("pre",{parentName:"admonition"},(0,s.kt)("code",{parentName:"pre",className:"language-text"},"Mn <- mean(dat[, cols[1]])\n")),(0,s.kt)("p",{parentName:"admonition"},"Output:"),(0,s.kt)("pre",{parentName:"admonition"},(0,s.kt)("code",{parentName:"pre",className:"language-text"},"print(Mn)\n"))),(0,s.kt)("h2",{id:"modularity-and-functions"},"Modularity and Functions"),(0,s.kt)("p",null,"In many cases groups of commands can be collected together into a function."),(0,s.kt)("h3",{id:"details-1"},"Details"),(0,s.kt)("p",null,"Typically a project has several such functions."),(0,s.kt)("h3",{id:"examples-1"},"Examples"),(0,s.kt)("admonition",{title:"Example",type:"info"},(0,s.kt)("p",{parentName:"admonition"},"Suppose you want to plot the weight vs. length for several data sets in ",(0,s.kt)("inlineCode",{parentName:"p"},"http://hi.is/~gunnar/kennsla/alsm/data"),"."),(0,s.kt)("p",{parentName:"admonition"},"A function can then be set up with the file number as an argument:"),(0,s.kt)("pre",{parentName:"admonition"},(0,s.kt)("code",{parentName:"pre",className:"language-text"},'plotwtle <- function (fnum) {\n  fname <- paste( "http://hi.is/~gunnar/kennsla/alsm/data/set",fnum,".dat",sep="")\n  cat("The URL B", fname,"\\n")\n  dat <- read.table(fname,header=T)\n  ttl <- paste("Data from file number", fnum)\n  plot(dat$le,dat$osl,main=ttl)\n}\n')),(0,s.kt)("p",{parentName:"admonition"},"Now call this with"),(0,s.kt)("pre",{parentName:"admonition"},(0,s.kt)("code",{parentName:"pre",className:"language-text"},"plotwtle(105)\n"))),(0,s.kt)("h2",{id:"modularity-and-files"},"Modularity and Files"),(0,s.kt)("p",null,"It is advisable to split larger projects into several manageable files."),(0,s.kt)("h3",{id:"details-2"},"Details"),(0,s.kt)("p",null,'Once a project reaches more than five lines of code, it should be stored in one or more separate files.\nIn order to combine these files a single "source" command file can be created'),(0,s.kt)("p",null,"Typically function definitions are stored in separate files, so one may have several separate files like: ",(0,s.kt)("inlineCode",{parentName:"p"},"input.r"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"function.r"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"analysis.r"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"output.r"),".\nWhile developing the analysis, the data would only be read once with ",(0,s.kt)("inlineCode",{parentName:"p"},'source("input.r")'),".\nThe goal of this practice is to end up with a set of files which are completely self-contained, so one can start with an empty R session and give only the commands like:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},'source("input.r")'))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},'source("function.r")'))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},'source("analysis.r")'))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},'source("output.r")')))),(0,s.kt)("h3",{id:"examples-2"},"Examples"),(0,s.kt)("admonition",{title:"Example",type:"info"},(0,s.kt)("p",{parentName:"admonition"},"For a given project ",(0,s.kt)("inlineCode",{parentName:"p"},"input.r"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"function.r"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"analysis.r")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"output.r")," files can be created as below."),(0,s.kt)("ul",{parentName:"admonition"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"input.r")),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-text"},'dat <- read.table("http://notendur.hi.is/~gunnar/kennsla/alsm/data/set115.dat", header=T)\n'))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"functions.r:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-text"},'plotwtle <- function(fnum) {\n  fname <- paste("http://notendur.hi.is/~gunnar/kennsla/alsm/data/set",fnum,".dat",sep="")\n  cat("The URL is",fname,"\\n")\n  dat <- read.table(fname,header=T)\n  ttl <- paste("My data set was",fnum)\n  plot(dat$le,dat$osl,main=ttl,xlab="Length(cm)",ylab="Live weight (g)")\n}\n'))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"output.r:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-text"},'source("functions.r")\nfor(i in 101:150) {\n  fnam<-paste("plot",i,".pdf",sep="")\n  pdf(fnam) plotwtle(i)\n  dev.off()\n}\n')))),(0,s.kt)("p",{parentName:"admonition"},"These files can be executed with source commands as below:"),(0,s.kt)("ul",{parentName:"admonition"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},'source("input.r")'))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},'source("function.r")'))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},'source("output.r")'))))),(0,s.kt)("h2",{id:"structuring-an-r-project"},"Structuring an R Project"),(0,s.kt)("h3",{id:"details-3"},"Details"),(0,s.kt)("p",null,'We already covered how to split code into different functions and linking them together with the help of one executable file that is "sourcing" the others.\nHowever, when you undertake a larger project, there will be a lot of different data and files and it is very advisable to have a consistent structure throughout the project'),(0,s.kt)("p",null,"A common project layout is to allocate all project files into a folder, something along the lines of:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"/project /data /src /doc /figs (or /out)\n")),(0,s.kt)("p",null,"Such a structure is quite normal in programming languages such as C, Matlab, and R."),(0,s.kt)("p",null,"Purpose of the different folders:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"/data"),": Contains all important data to the project, which you will use.\nThis folder should be read-only! No function is allowed to write anything into this folder")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"/src"),": (abbreviation for ",(0,s.kt)("inlineCode",{parentName:"p"},"source(-code)"),") Here you will store all the functions that you programmed.\nYou can decide to store the executable function here as well or, alternatively, have that one in the root project folder")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"/doc"),": Contains further documentation material about your project.\nThis could be, for example, readme files for other people who use your functions, or the paper you wrote about the project, or the ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mtext",{parentName:"mrow"},"LaTeX")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\LaTeX")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8988em",verticalAlign:"-0.2155em"}}),(0,s.kt)("span",{parentName:"span",className:"mord text"},(0,s.kt)("span",{parentName:"span",className:"mord textrm"},"L"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.36em"}}),(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.6833em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.905em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord textrm mtight sizing reset-size6 size3"},"A")))))),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.15em"}}),(0,s.kt)("span",{parentName:"span",className:"mord text"},(0,s.kt)("span",{parentName:"span",className:"mord textrm"},"T"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.4678em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.7845em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord textrm"},"E")))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2155em"}},(0,s.kt)("span",{parentName:"span"})))),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.125em"}}),(0,s.kt)("span",{parentName:"span",className:"mord textrm"},"X")))))))," files while you're writing")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"/figs")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"/out"),": Here your functions are allowed to write and can produce the different results, like graphs, figures or anything else"))),(0,s.kt)("p",null,"Finally, a large programming project should at some stage be split into packages and stored on dedicated servers such as GitHub or CRAN."),(0,s.kt)("h3",{id:"examples-3"},"Examples"),(0,s.kt)("admonition",{title:"Example",type:"info"},(0,s.kt)("p",{parentName:"admonition"},"Consider first the issue of maintaining the code itself.\nIt is common for R beginners to only work interactively within the command-line interface.\nHowever, it is essential that the code be kept in one or more files"),(0,s.kt)("p",{parentName:"admonition"},"For large projects these will be several different files, each with its own purpose.\nTo run a complete analysis one would typically set up one file to run all the tasks by reading in data through analyses to outputs"),(0,s.kt)("p",{parentName:"admonition"},"For example, a file named ",(0,s.kt)("inlineCode",{parentName:"p"},"run.r")," could contain the sequence of commands:"),(0,s.kt)("pre",{parentName:"admonition"},(0,s.kt)("code",{parentName:"pre",className:"language-text"},'source("setup.r")\nsource("analysis.r")\nsource("plot.r")\n'))),(0,s.kt)("h2",{id:"loops-for"},"Loops, for"),(0,s.kt)("p",null,"If a piece of code is to be run repeatedly, the for-loop is normally used."),(0,s.kt)("h3",{id:"details-4"},"Details"),(0,s.kt)("p",null,"If a piece of code is to be run repeatedly, the for-loop is normally used.\nThe R code form is:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"for(index in sequence){ commands }\n")),(0,s.kt)("h3",{id:"examples-4"},"Examples"),(0,s.kt)("admonition",{title:"Example",type:"info"},(0,s.kt)("p",{parentName:"admonition"},"To add numbers we can use"),(0,s.kt)("pre",{parentName:"admonition"},(0,s.kt)("code",{parentName:"pre",className:"language-text"},'tot <- 100\nfor(i in 1:100){ tot <- tot + i }\ncat("the sum is ", tot, "\\n")\n'))),(0,s.kt)("admonition",{title:"Example",type:"info"},(0,s.kt)("p",{parentName:"admonition"},"Define the plot function"),(0,s.kt)("pre",{parentName:"admonition"},(0,s.kt)("code",{parentName:"pre",className:"language-text"},"plotwtle <- AS BEFORE\n")),(0,s.kt)("p",{parentName:"admonition"},"To plot several of these we can use a sequence:"),(0,s.kt)("pre",{parentName:"admonition"},(0,s.kt)("code",{parentName:"pre",className:"language-text"},"plotwtle(101)\nplotwtle(102)\n...\n")),(0,s.kt)("p",{parentName:"admonition"},"or a loop"),(0,s.kt)("pre",{parentName:"admonition"},(0,s.kt)("code",{parentName:"pre",className:"language-text"},'for (i in 101:150) {\n  fname <- paste("plot", i, ".pdf", sep="")\n  pdf(fname)\n  plotwtle(i)\n  dev.off()\n}\n'))),(0,s.kt)("h2",{id:"the-if-and-ifelse-commands"},"The if and ifelse Commands"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"if")," statement is used to conditionally execute statements"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"ifelse")," statement conditionally replaces elements of a structure."),(0,s.kt)("h3",{id:"examples-5"},"Examples"),(0,s.kt)("admonition",{title:"Example",type:"info"},(0,s.kt)("p",{parentName:"admonition"},"If we want to compute ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msup"},"x"),(0,s.kt)("mi",{parentName:"msup"},"x"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x^x")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6644em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.6644em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"x"))))))))))))," for ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"x")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"))))),"-values in the range ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"0")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"0")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"0")))))," through ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"5")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"5")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"5"))))),", we can use"),(0,s.kt)("pre",{parentName:"admonition"},(0,s.kt)("code",{parentName:"pre",className:"language-text"},"xlist <- seq(0,5,0.01)\ny <- NULL\nfor(x in xlist) {\n  if (x==0) {\n    y <- c(y,1)\n  }\n  else {\n    y <- c(y,x**x)\n  }\n}\n"))),(0,s.kt)("admonition",{title:"Example",type:"info"},(0,s.kt)("pre",{parentName:"admonition"},(0,s.kt)("code",{parentName:"pre",className:"language-text"},"x <- seq(0,5,0.01)\ny <- ifelse(x==0,1,x^x)\n"))),(0,s.kt)("admonition",{title:"Example",type:"info"},(0,s.kt)("pre",{parentName:"admonition"},(0,s.kt)("code",{parentName:"pre",className:"language-text"},'dat <- read.table("file")\ndat <- ifelse(dat==0,0.01,dat)\n'))),(0,s.kt)("admonition",{title:"Example",type:"info"},(0,s.kt)("pre",{parentName:"admonition"},(0,s.kt)("code",{parentName:"pre",className:"language-text"},"x <- ifelse(is.na(x),0,x)\n"))),(0,s.kt)("h2",{id:"indenting"},"Indenting"),(0,s.kt)("p",null,"Code should be properly indented!"),(0,s.kt)("h3",{id:"details-5"},"Details"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"fFunctions"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"for"),"-loops, and ",(0,s.kt)("inlineCode",{parentName:"p"},"if"),"-statements should always be indented."),(0,s.kt)("h2",{id:"comments"},"Comments"),(0,s.kt)("p",null,"All code should contain informative comments.\nComments are separated out from code using the pound symbol (",(0,s.kt)("inlineCode",{parentName:"p"},"#"),")."),(0,s.kt)("h3",{id:"examples-6"},"Examples"),(0,s.kt)("admonition",{title:"Example",type:"info"},(0,s.kt)("pre",{parentName:"admonition"},(0,s.kt)("code",{parentName:"pre",className:"language-text"},"#################### #####SETUP DATA##### ####################\n\ndat <- read.table(filename)\nx <- log(dat$le) #log-transformation of length\ny <- log(dat$wt) #log-transformation of weight\n\n###################### #####THE ANALYSIS##### ######################\n"))))}d.isMDXComponent=!0}}]);