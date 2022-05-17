"watch:sass": "node-sass sass/main.scss css/style.css -w",
    "compile:sass": "node-sass sass/main.scss css/style-comp.css",
    "concat:css": "concat -o css/style-concat.css css/icon-font.css css/style-comp.css",
    "prefix:css": "postcss --use autoprefixer -b 'last 10 versions' css/style-concat.css -o css/style-prefix.css ",
    "compress:css": "node-sass css/style-prefix.css css/style.css --output-style compressed",
    "build:css": "npm-run-all compile:sass concat:css prefix:css compress:css"


    all the files needed for css build , copy paste json


    : "1-1/2 pound Ground Beef"
1: "1/2 pound Italian Sausage ( A Little More Is Fine!)"
2: "1/2 teaspoon Italian Seasoning"
3: "8 slices Mozzarella Or Provolone Cheese"
4: "Pepperoni Slices"
5: "8 Tablespoons Jarred Marinara Sauce"
6: "Grated Parmesan Cheese"
7: "4 whole Kaiser Rolls Or Good Hamburger Buns"