# Create the Pattern Site

## Task:
You will be recreating this webpage using mainly Bootstrap 4 with some internal CSS.

![Pattern Website Final Version](https://github.com/laiamanda/web-dev101/blob/main/bootstrap101/pattern/pattern.PNG)

By now, I should have provided you 4 jpg images that you will be using for this pratical example. At any point, you have any questions or issues, please reach out to me.

### Steps by Steps:
1. Create an html file called pattern
2. Import the Bootstrap Library into the Head. Hint: Go to the Bootstrap 4 > Getting Started
3. Create a navbar
   * Insert a navbar using [BootStrap4](https://getbootstrap.com/docs/4.6/components/navbar/).
   * You will have to select the correct navbar class that will match with the example. Hint: Look for a dark navbar.
   * Insert the binoculars inside the navbar. To do this: you will need to call the Font Awesome Library. The Font Awesome library is a free tool that has thousands of icons that developers use.
   * Insert inside the head:
   * ```
     <link href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.css" rel="stylesheet"  type='text/css'>
   * [Font Awesome for Binoculars](https://fontawesome.com/v4/icon/binoculars)
Please reach out to me when you have gotton to this part.

4. Create the header section
   * First to create a section, you will need to use the ```<section>``` tags.
   * Insert the jumbotron class [jumbotron](https://getbootstrap.com/docs/4.6/components/jumbotron/) for your section.
   * The Header is using ```<h1>``` with the class of ```display-#```
   * The ```<p>``` has a class that is shown in the documentation. Please refer to the documentation to find the class.
   * There are 2 link tags ```<a>``` with the [button bootstrap class](https://getbootstrap.com/docs/4.6/components/buttons/)
   * To insert the image as the background:
     1. Inside the ```<section>```, create an ```id="header"```
     2. Using Internal CSS, call upon the header id and have its css has ```background: url("header.jpeg") center center / cover no-repeat;```

Please reach out to me when you have gotton to this part.

4. Create the gallery section
  * First, create a section with an id of ```gallery```
  * You will need the [Bootstrap Grid](https://getbootstrap.com/docs/4.6/layout/grid/), which involves containers and rows.
  * You will need 1 container and 1 row. So, that all of the cards can be in 1 row and in 1 container together.
  * You will create a [card using bootstrap](https://getbootstrap.com/docs/4.6/components/card/)
  * Once you have created a card, fill in the ```<h5>``` with First Thing
  * There are 2 links ```<a>``` , one will be a DOWNLOAD and the other is a Heart.
  * To insert a heart, you will use Font Awesome's heart icon.[Font Awesome (https://fontawesome.com/v4/icons/)https://fontawesome.com/v4/icons/). I want you to try and find the heart icon and use it.
  * At this point, you should have a card display.
  * Just before the ```<div class="card">```, create another ```<div>``` before it and insert all of the card HTML inside of it. In the new ```<div>```, you will add the layout that can fit all 3 cards in the future.
  * Copy the card HTML as well as the new ```<div>``` and paste it three times.
  * In the new ```<div>```, you will use [Grid layout] to display the cards in a row. (https://getbootstrap.com/docs/4.6/layout/grid/). I want you to try and figure out how to get all 3 in a row. Hint: the total amount the row can have is 12 and you will be using large as the first option.
  * Once you figure out the default, I want you to minimize your window of the web page. You might notice it's a bit wonky. That's because you haven't added responsive page layout with Bootstrap. To do this, in the same location where you added the grid layout, you can also insert a new class that can handle medium size.

At this point, you pattern site should look similar to mine. If you're getting stuck more than 15 minute, please reach out to me so I can provide hints. If you are completed with no issues, please let me know.
