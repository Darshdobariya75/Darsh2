Section A: MCQs (1 mark each x 20 = 20 marks)
 1. Which HTML tag is used to define an internal style sheet?
   Answer: a) <style>

 2. What is the correct HTML element for inserting a line break?
   Answer: c) <br>

 3. Which CSS property is used to change the text color of an element?
   Answer: c) color

 4. How do you make a list that lists its items with squares?
   Answer: c) list-style-type: square;

 5. HTML stands for:
   Answer: a) HyperText Markup Language

 6. Which attribute is used in HTML to provide an alternative text for an image?
   Answer: c) alt

 7. What is the default position of an HTML element?
   Answer: d) static

 8. Which tag is used to create a hyperlink?
   Answer: b) <a>

9. What does CSS stand for?
   Answer: b) Cascading Style Sheets

 10. The <style> tag is used for:
   Answer: a) Defining style information


 Section B: Short Answer Questions (5 marks each x 6 = 30 marks)
 1. What is the difference between id and class in HTML?
   Answer: The 'id' is a unique identifier used for one element, while 'class' can be used for multiple
 elements with similar styling.

 2. Explain the box model in CSS with a labeled diagram.
   Answer: The CSS box model consists of: Content -> Padding -> Border -> Margin.

 3. What are semantic HTML tags? Give 3 examples.
   Answer: Semantic tags clearly describe their meaning. Examples: <article>, <header>, <footer>.

 4. Create a personal profile webpage using HTML with:
   Answer: Name, photo, short bio, and links to social media.

 5. Style the profile page using CSS:
   Answer: Center align the content, change background color, and style the image as a circle.



-----------------------------------------------------------------------------------------------


Section B: Short Answer Questions (5 marks each x 6 = 30 marks)



 1. What is the difference between id and class in HTML?
 Answer:
 The 'id' attribute is used to uniquely identify a single HTML element. An id should be unique within a
 page, meaning it can only be used once in the HTML document. It is useful for targeting specific
 elements via CSS or JavaScript.
 Example: <div id="header">Header</div>
 On the other hand, the 'class' attribute is used to define a group of elements. Multiple elements can
 share the same class and thus can be styled similarly.
 Example: <div class="box">Box 1</div><div class="box">Box 2</div>

 2. Explain the box model in CSS with a labeled diagram.
 Answer:
 The CSS box model is a fundamental concept that defines how elements are displayed on a
 webpage. It consists of four layers (from innermost to outermost):- Content: The actual content such as text or images.- Padding: Space between the content and the border. It provides inner spacing.- Border: Surrounds the padding (if any) and the content.- Margin: The outermost layer, providing space between the element and others around it.
 Diagram:
 [Margin]
  [Border]
    [Padding]
      [Content]

3. What are semantic HTML tags? Give 3 examples.
 Answer:
 Semantic HTML tags clearly define the purpose and meaning of the content they enclose, making
 the HTML more readable and accessible. They help search engines and developers understand the
 structure of the webpage.
 Examples include:- <header>: Represents the header section of a page.- <article>: Represents self-contained content.- <footer>: Represents the footer of a page.

 4. Create a personal profile webpage using HTML with:
 Answer:
 A personal profile webpage includes the following HTML elements:- <h1> for the Name- <img> for the photo- <p> for the short bio- <a> tags for linking to social media platforms like LinkedIn, Twitter, etc.
 Example:
 <h1>John Doe</h1>
 <img src="profile.jpg" alt="John's photo" />
 <p>Web Developer passionate about front-end design and UX.</p>
 <a href="https://linkedin.com/in/johndoe">LinkedIn</a>

 5. Style the profile page using CSS:
 Answer:
 Use CSS to center-align content, set a background color, and make the image circular.
 Example CSS:
body {
  text-align: center;
  background-color: #f0f0f0;
 }
 img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
 }
 
 6. Create a responsive navigation bar using HTML & CSS that works on both desktop and mobile.
 Answer:
 A responsive navigation bar adjusts its layout based on the screen size using media queries.
 Example HTML:
 <nav>
  <ul class="navbar">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
 </nav>
 Example CSS:
 .navbar {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #333;
}
 .navbar li a {
  color: white;
  text-decoration: none;
  padding: 14px 20px;
 }
 @media (max-width: 600px) {
  .navbar {
    flex-direction: column;
  }
 }


----------------------------------------------------------------------------------------------


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
            *{
            margin: 0px;
            padding: 0px;
            box-sizing: border-box;
            font-family:'popins',sans-serif;
        }
        body{
            background-color: #081b29;
            color: #ededed;
        }
        .header{
            position: fixed;
            top: 0px;
            left: 0px;
            width: 100%;
            padding: 20px 10%;
            background-color: transparent;
            display: flex;
            justify-content: space-between;
            align-items: center;
            z-index: 100;
        }
        .logo{
            font-size: 25px;
            color: #ededed;
            text-decoration: none;
            font-weight: 600;
        }
        .navbar a{
            font-size: 18px;
            color: #ededed;
            text-decoration: none;
            font-weight: 500;
            margin-left: 35px;
            transition: .3s;
        }
        .navbar a:hover,
        .navbar a.active{
            color: #00abf0;
        }
        .home{
            height: 100vh;
            background: url(./media/kirtan\ photos.jpg) no-repeat;
            background-size: 110vh;
            background-position: right;
            display: flex;
            align-items: center;
            padding: 0 10%;
        }
        .home-content{
            max-width: 600px;
        }
        .home-content h1{
            font-size: 56px;
            font-weight: 700;
            line-height: 1.2 ;
        }
        .home-content h3{
            font-size: 32px;
            color: #00abf0;
            font-weight: 700;
        }
        .home-content p{
            font-size: 16px;
            margin: 20px 0 40px;
        }
        .home-content .btn-box{
            width: 345px;
            height: 50px;
            display: flex;
            justify-content: space-between;
        }
        .btn-box a{
            position: relative;
            display: inline-flex;
            width: 150px;
            height: 100%;
            background-color: #00abf0;
            border: 2px solid #00abf0;
            border-radius: 8px;
            font-size: 19px;
            color: #081b29;
            text-decoration: none;
            font-weight: 600;
            letter-spacing: 1px;
            justify-content: center;
            align-items: center;
            z-index: 1;
            overflow: hidden;
            transition: .5s;
        }
        .btn-box a:hover{
            color: #00abf0;
        }
        .btn-box a:nth-child(2){
            background-color: transparent;
            color: #00abf0;
        }
        .btn-box a:nth-child(2)::before{
            background:  #00abf0;    
        }
        .btn-box a:nth-child(2):hover{
            color: #081b29;
        }
        .btn-box a::before{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 0;
            height: 100%;
            background-color: #081b29;
            z-index: -1;
            transition: .5s;
        
        }
        .btn-box a:hover:before{
            width: 100%;
        }
        .btn-box.btns {
    display: flex;
    justify-content: center;
    margin-top: 30px;
}

        .home-sci{
            position: absolute;
            bottom: 40px;
            width: 170px;
            display: flex;
            justify-content: space-between;
        }
        .home-sci a{
            position: relative;
            display: inline-flex;
            width: 40px;
            height: 40px;
            background: transparent;
            border:  2px solid #00abf0;
            border-radius: 50%;
            font-size: 20px;
            color: #00abf0;
            text-decoration: none;
            justify-content: center;
             align-items: center;
             z-index: 1;
             overflow: hidden;
             transition: .5s;
        }
        .home-sci a:hover{
            color: #081b29;
        }
        .home-sci a::before{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 0;
            height: 100%;
            background-color:#00abf0;
            z-index: -1;      
            transition: .5s;
        }
        .home-sci a:hover:before{
            width: 100%;
        }
        .pricing-table {
      display: flex;
      gap: 19px;
      margin-top: 40px;
    }
    .pricing-plan {
      flex: 1;
      background-color: #fff;
      border: 1px solid #ccc;
      border-radius: 8px;
      padding: 20px;
      text-align: center;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    .pricing-plan h3 {
      margin-bottom: 10px;
      font-size: 20px;
      color: black;
    }
    .pricing-plan p {
      font-size: 16px;
    }
    .price {
      font-size: 24px;
      font-weight: bold;
      margin: 15px 0;
      color: black;
    }
    .features {
      list-style: none;
      padding: 0;
      margin: 0 0 20px;
      color: black;
    }
    .features li {
      margin: 8px 0;
    }
    .button {
      background-color: #007bff;
      color: #fff;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      text-decoration: none;
      font-weight: bold;
      
    }

    .navoption{
      visibility:hidden;
      position:absolute;
    }
    @media (max-width:768px) {
    .pricing-table{
      flex-wrap: wrap;
    }
    .navoption{
      position: static;
      visibility: visible;
      margin-left: 00px;
      flex-wrap:wrap;
      }
    .navbar{
      visibility:hidden;
      background-color:#081b29;
      display:block;
      gap: 10px;
    }
    .nav-container:hover .navbar{
          visibility: visible;
    }
    .home{
            height: 100vh;
            background: url(./image/WhatsApp\ Image\ 2025-07-03\ at\ 19.00.27_f87388b7.jpg) no-repeat;
}
    }

  </style>
</head>
  <body>
   <header class="header">
  <a href="#" class="logo">Darsh.</a>

  <div class="nav-container">
    <img src="./media/list.png" class="navoption" height="49px" width="49px">
    <nav class="navbar">
      <a href="#" class="active">Home</a>
      <a href="#about">About</a>
      <a href="#education">Education</a>
      <a href="#project">Project</a>
      <a href="#skills">Skills</a>
      <a href="#content">Contact</a>
    </nav>
  </div>
</header>
    <section class="home">
        <div class="home-content">
            <h1>HI I'M Darsh</h1>
            <h3>Fullstack devloper</h3>
            <p>I design and develop complete web applications from front-end to back-end with clean code and scalable architecture.
Passionate about creating seamless user experiences and powerful backend systems.</p>
           
        </div>
        <div class="home-sci">
            <a href="#"><i class='bx bxl-facebook'></i></a>
            <a href="#"><i class='bx bxl-twitter' ></i></a>
            <a href="#"><i class='bx bxl-linkedin'></i></a>
        </div>
    </section>

    <!-- box section  -->
    <section>
               <div class="pricing-table">
    <div class="pricing-plan">
     <div class="pricing-plan">
  <h3>Pay-As-You-Go</h3>
  <div class="price">From $0.01/request</div>
  <ul class="features">
    <li>No upfront cost</li>
    <li>Scales with usage</li>
    <li>Billing per request/hour/GB</li>
  </ul>
  <a href="#" class="button">Get Started</a>
</div>
<div class="pricing-plan">
  <h3>Student</h3>
  <div class="price">$4/mo</div>
  <ul class="features">
    <li>1 User (Student ID Required)</li>
    <li>20GB Storage</li>
    <li>Basic Support</li>
  </ul>
  <a href="#" class="button">Sign Up</a>
</div>
<div class="pricing-plan">
  <h3>Free Trial</h3>
  <div class="price">Free for 14 days</div>
  <ul class="features">
    <li>All Standard Features</li>
    <li>No Credit Card Required</li>
    <li>Cancel Anytime</li>
  </ul>
  <a href="#" class="button">Start Trial</a>
</div>

    </section>
</body>
</html>