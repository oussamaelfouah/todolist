/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const addproject = document.getElementById(\"addproject\");\nconst form = document.getElementById(\"form\");\nconst submit = document.getElementById(\"submit\");\nconst title = document.getElementById(\"title\");\nconst description = document.getElementById(\"description\");\nconst maincontainer = document.getElementById(\"main-container\");\nmaincontainer.style.justifyContent = \"space-btween\";\n\naddproject.addEventListener(\"click\", (e) => {\n  form.style.display = \"block\";\n});\n\nsubmit.addEventListener(\"click\", (e) => {\n  e.preventDefault();\n\n  const storage = {\n    title: title.value,\n    description: description.value,\n  };\n  const side = document.getElementById(\"side\");\n  side.style.display = \"block\";\n  const h1 = document.createElement(\"h1\");\n  side.appendChild(h1);\n  const p = document.createElement(\"p\");\n  side.appendChild(p);\n  const project = document.createElement(\"div\");\n\n  side.appendChild(project);\n  project.style.backgroundColor = \"grey\";\n  project.style.height = \"100px\";\n  project.style.width = \"auto\";\n  project.appendChild(h1);\n  project.appendChild(p);\n  h1.textContent = storage.title;\n  p.textContent = storage.description;\n  title.value = \"\";\n  description.value = \"\";\n  project.addEventListener(\"click\", (e) => {\n    const dashboard = document.createElement(\"div\");\n    maincontainer.appendChild(dashboard);\n    dashboard.style.backgroundColor = \"orange\";\n    dashboard.style.marginRight = \"20px\";\n    dashboard.style.width = \"300px\";\n    dashboard.style.height = \"300px\";\n    form.style.display = \"none\";\n    const addtodo = document.createElement(\"button\");\n    dashboard.appendChild(addtodo);\n    addtodo.textContent = \"add to do \";\n    addtodo.addEventListener(\"click\", (e) => {\n      const todocontainer = document.createElement(\"div\");\n      const titleone = document.createElement(\"input\");\n      const descriptiontwo = document.createElement(\"input\");\n      maincontainer.appendChild(todocontainer);\n      todocontainer.appendChild(titleone);\n      todocontainer.appendChild(descriptiontwo);\n      todocontainer.style.backgroundColor = \"orange\";\n      todocontainer.style.width = \"auto\";\n      todocontainer.style.height = \"300px\";\n      todocontainer.style.margin = \"100px 100px\";\n      addtodo.addEventListener(\"click\", (e) => {\n        todocontainer.style.display = \"none\";\n      });\n    });\n\n    project.addEventListener(\"click\", (e) => {\n      dashboard.style.display = \"none\";\n    });\n  });\n});\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;