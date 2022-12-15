# 1 Install Bootstrap and Jquery in angular application
$ npm install bootstrap
$ npm install jquery

# 2 Configure below styles and scripts in angular.json file

"styles": [  
    "./node_modules/bootstrap/dist/css/bootstrap.css",
    "src/styles.css"
],
"scripts": [               
    "node_modules/jquery/dist/jquery.min.js",
    "node_modules/bootstrap/dist/js/bootstrap.min.js"
]

4) Configure below styles in global src/styles.css file