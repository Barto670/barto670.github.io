// Copyright 2023, Bartek Skorecki, All rights reserved.

colourArray = ['#30924d','#3399b8','#b82798','#b82229','#1e3ada','#d56c3a']

skills = [
                { name:'HTML',           dateStarted: '2018-01-01' ,     color:'#FF572220' ,     imageLink:'./images/skills/html.png'},
                { name:'CSS/SCSS',       dateStarted: '2018-01-01',      color:'#2299F820',      imageLink:'./images/skills/css.png'},
                { name:'JavaScript',     dateStarted: '2019-01-01',      color:'#D3B62A20',      imageLink:'./images/skills/js.png'},
                { name:'TypeScript',     dateStarted: '2020-01-01',      color:'#2299F820',      imageLink:'./images/skills/ts.png'},
                { name:'Python',         dateStarted: '2020-01-01',      color:'#356F9F20',      imageLink:'./images/skills/python.png'},
                { name:'Angular',        dateStarted: '2021-01-01',      color:'#C3002F20',      imageLink:'./images/skills/angular.png'},
                { name:'Java',           dateStarted: '2021-01-01',      color:'#778EA320',      imageLink:'./images/skills/java.png'},
                { name:'SQL',            dateStarted: '2022-01-01',      color:'#00BCF220',      imageLink:'./images/skills/sql.png'},
                // { name:'C++',            dateStarted: '2022-01-01',      color:'#00599C20',      imageLink:'./images/skills/c++.png'},
]

projects = [
                {   
                    name:'CS2 Stash Enhancer',              
                    statusColor:'green' ,       
                    bigImagesrc:'cs2stashenhancerlong.jpg',       
                    smallImagesrc: 'cs2stashenhancersmall.png' ,
                    imageArray:['cs2stashenhancerlong.jpg'],
                    status:'Online' ,     
                    tags:
                    [
                        'Extension',
                        'HTML',
                        'JavaScript',
                        'CSS',
                        '350+ Users'
                    ],        
                    redirectionURLStyle:'flex',   
                    redirectionURL:'https://chromewebstore.google.com/detail/cs2-stash-enhancer/foacepfkmbckfdnbgmphekpbamedhmjj?hl=en',       
                    expandURL:'' ,     
                    description:
                    [
                        "The Browser Extension is designed for Counter Strike 2, enhancing the user experience on the csgostash.com website by providing additional features. These features capitalize on the extensive array of cosmetic items available in the game, encompassing diverse patterns, float values, and skin conditions. In Counter Strike 2, each cosmetic skin is associated with a unique inspect code, a customized hexadecimal value with a CRC32-based checksum. This extension facilitates the generation of inspect codes tailored to users' preferences, enabling them to easily locate specific cosmetics within the game."
                    ],
                    explanation:
                    [
                        "The extension functions by fetching the most recent version of skin data stored on my GitHub in JSON format via an API whenever a user utilizes the extension. In the extension's popup.js, users encounter a list of skins that they can select. Upon selecting a skin link, an expanded div interface emerges, enabling users to input custom pattern and float values tailored to that particular skin.",
                        "Once the user inputs the float value & pattern id, all values are saved and translated into their hexadecimal equivalents. Subsequently, this formatted hexadecimal string undergoes a CRC32 checksum calculation to ensure correctness. Upon completion, users are presented with the option to view the cosmetic skin in-game, where an inspect code and !gen code are updated on the user interface for their convenience."
                    ],
                    functionalityBold:
                    [
                        "Pattern and Float Editing: ",
                        "Multiple Phases Support: ",
                        "Gen Code Generation: ",
                        "Inspect Code Generation: ",
                        "Rare Pattern Database: ",
                        "Customizable Settings: ",
                    ],
                    functionalityText:
                    [
                        "Users can modify the pattern and float of the skin they are currently viewing and then inspect it seamlessly.",
                        "Users can view skins with multiple phases, such as Doppler with Phase 1-4, Ruby Sapphire, or Black Pearl variants.",
                        "The extension generates the !gen code, enabling users to inspect skins on custom Counter Strike 2 servers effortlessly.",
                        "Users can generate inspect codes to paste inspect links directly into the Counter Strike 2 console for quick access.",
                        "The extension includes a comprehensive database of rare patterns, providing information on their rarities, such as case-hardened tiers.",
                        "Users have the flexibility to tweak certain parameters within the extension to tailor their experience according to their preferences."
                    ],
                    additional:[
                        "Coded with HTML, JavaScript, CSS",
                        "Made in Manifest V3",
                        "No Steam sign-in required"
                    ]
                },
                { 
                    name:'Online Shop Website',             
                    statusColor:'orange' ,      
                    bigImagesrc:'dashShopBig.jpg',               
                    smallImagesrc: 'dashShopSmall.png' ,              
                    status:'Prototype' ,  
                    tags:
                    [
                        'HTML',
                        'CSS',
                        'JavaScript',
                        'Responsive Design',
                        'UI/UX'
                    ],              
                    redirectionURLStyle:'none',   
                    redirectionURL:'',                                                                                                         
                    expandURL:'' ,     
                    imageArray:['dashShopLong.jpg'],
                    description:
                    [
                        "An exemplary website showcased within the portfolio which demonstrates the functionality of an online shop from both the company's and customer's perspectives. It features a comprehensive dashboard allowing owners to track paid orders, site visits, searches, total sales earnings, and manage staff reminders. Customers and owners both have access to a storefront showcasing all available products and their prices. "
                    ],
                    explanation:
                    [
                        "The website is coded using HTML and CSS, implementing modern stylistic techniques and animations to create a visually appealing and aesthetic online shop. It maintains a simplistic design while incorporating advanced features to enhance user experience. The use of subtle animations adds a touch of interactivity and elegance to the browsing experience. Overall, the website seamlessly combines minimalist aesthetics with advanced functionalities, resulting in a pleasant and visually striking online shopping platform."
                    ],
                    functionalityBold:
                    [
                        "Dashboard View: ",
                        "Shop View: ",
                        "User Page: ",
                        "Settings Page: "
                    ],
                    functionalityText:
                    [
                        "A dashboard for website owners to monitor paid orders, site visits, searches, total sales earnings, recent orders, and set staff reminders.",
                        "A storefront accessible to both customers and owners, displaying all available products for purchase.",
                        "An owner-exclusive page showcasing user accounts and their respective orders.",
                        "Customization options for currencies, languages, and other website settings available to both users and owners.",
                    ],
                    additional:[
                        "Coded in HTML, JavaScript, CSS",
                        "Using Boxicons stylesheet for various icons"
                    ]
                },
                { 
                    name:'UL Student Guide',                
                    statusColor:'orange' ,      
                    bigImagesrc:'studentguideBig.jpg',           
                    smallImagesrc: 'studentguideSmall.png' ,          
                    status:'Prototype' ,  
                    tags:[
                        'Android',
                        'Application',
                        'Java',
                        'UI/UX',
                        'Geolocation',
                        'Web Scraping'
                    ],         
                    redirectionURLStyle:'none',   
                    redirectionURL:'',                                                                                                         
                    expandURL:'' ,     
                    imageArray:['studentguideLong.jpg'],
                    description:
                    [
                        "Android mobile application designed as a comprehensive tool for students to navigate and acquaint themselves with the University of Limerick campus. Tailored with simplicity in mind, this user-friendly app is specifically aimed at first-year students and Erasmus participants, offering an intuitive interface for easy exploration. Whether it's locating buildings, finding facilities, or accessing campus resources, 'UL Student Guide' serves as an indispensable companion, empowering students to navigate campus life effortlessly."
                    ],
                    explanation:
                    [
                        "The application builds upon Google Maps Services & geolocation to provide a tailored navigation experience for users within the UL campus. It enhances the map interface with custom markers and filters, allowing users to easily identify different campus locations. By integrating user authentication and API access, the application fetches and displays the user's timetable directly within the interface, streamlining the process of managing academic schedules. This comprehensive approach ensures a seamless and efficient experience for students navigating the UL campus and accessing their timetable information."
                    ],
                    functionalityBold:
                    [
                        "Campus Map: ",
                        "Building Finder: ",
                        "Parking Finder: ",
                        "Timetable: ",
                        "Class Reminder: ",
                        "UL Events: ",
                        "My Modules: ",
                        "Main Building Map: ",
                        "First Seven Weeks: ", 
                    ],
                    functionalityText:
                    [
                        "Interactive map defaulting to the university location, with filter options for different markers such as buildings, bus stops, etc. Clicking on each marker provides detailed information about that specific location and an ability to navigate to that location.",
                        "Building finder feature allows students to input the building code and find their desired location even if they don't know the building name or exact location.",
                        "Students can input their lecture location, and the app suggests the closest parking space based on selected options such as free parking, paid parking, staff parking, or bike parking.",
                        "Automatic loading of student timetable upon login, providing access to timetable data within the application.",
                        "Timetable-based notifications: Students receive notifications before their classes commence based on their timetable.",
                        "Explore all events happening around UL directly within the app.",
                        "Lists all modules for the semester, indicating which modules have lectures, laboratories, and tutorials.",
                        "Multi-floor interactive map for the main building, allowing users to navigate different levels seamlessly.",
                        " Follow the 'First Seven Weeks' steps with a dedicated page providing essential guidance for new students."
                    ],
                    additional:[
                        "While making this app I used Android Studio, Java, XML, Figma & Web Scraping",
                        "A Master's final project that I did individually"
                    ]
                },
                { 
                    name:'GLI Academy',                     
                    statusColor:'orange' ,      
                    bigImagesrc:'gliAcademyBig.jpeg',            
                    smallImagesrc: 'gliAcademySmall.png' ,            
                    status:'Prototype' ,  
                    tags:[
                        'HTML',
                        'Angular',
                        'Java',
                        'MySQL',
                        'Spring Boot',
                        'TypeScript'
                    ],          
                    redirectionURLStyle:'none',   
                    redirectionURL:'',                                                                                                         
                    expandURL:'' ,     
                    imageArray:['gliAcademyLong.jpg'],
                    description:
                    [
                        "Developed as the culmination of my Bachelor's degree, this project aims to provide users with an interactive platform facilitating exploration and comprehension of the significance and practical applications of various concepts related to Globalization, Localization, and Internationalization, hence the name GLIacademy."
                    ],
                    explanation:
                    [
                        "Developed on the front-end framework Angular using MySQL database to store user progress and to log users safely into the website & Spring Boot for the back-end of the website.",
                        "User ecrypted credentials, user progress, quiz questions & answers & other website content stored on the database.",
                        "Used the 'Ace' library to implement a code editor on the website quiz section that renders code in real time."
                    ],
                    functionalityBold:
                    [
                        "Test Yourself: ",
                        "Track Your Progress: ",
                        "Work On Real Project Examples: ",
                        "Learn Along With Others: "
                    ],
                    functionalityText:
                    [
                        "Acquire knowledge through theoretical study, followed by reinforcing your understanding with multiple-choice quiz questions and practical exercises in a code editor.",
                        "After completing each question, you earn a completion status, which is reflected on your profile dashboard, showcasing your progress comprehensively.",
                        "This website presents real-world examples illustrating potential enhancements to improve the GLI (Globalization Localization Internationalization) knowledge.",
                        "Allows users to follow one another, enabling collaborative learning experiences through messaging and participating in quizzes together."
                    ], 
                    additional:[
                        "A Bachelor's final project that I did individually"
                    ]
                },
                { 
                    name:'DoneDeal Discord Bot',            
                    statusColor:'orange' ,      
                    bigImagesrc:'donedealBig.jpg',               
                    smallImagesrc: 'donedealSmall.png' ,              
                    status:'Prototype' ,  
                    tags:[
                        'Bot',
                        'Discord',
                        'JavaScript',
                        'Web Scraping',
                        'Noje.js'
                    ],               
                    redirectionURLStyle:'none',   
                    redirectionURL:'',                                                                                                         
                    expandURL:'' ,     
                    imageArray:['donedealLong.jpg'],
                    description:
                    [
                        "A bot designed specifically for the motor marketplace DoneDeal.ie. It's programmed to send Discord notifications whenever new car listings match specified filters. Users can input their preferences, and the bot will promptly notify a designated Discord channel whenever a relevant listing is posted."
                    ],
                    explanation:
                    [
                        "Bot was hosted using Node.js. After authenticating through the Discord library, the bot responds to designated trigger messages like '!start' to activate its functions. Employing web scraping techniques, it compiles a comprehensive list of available filters and gathers necessary information from specified sources to post on the designated channel. The bot is designed to function across two multiple distinct channels, each tailored with unique sets of filters to effectively process and relay listings."
                    ],
                    functionalityBold:
                    [
                        "Precise Filters: ",
                        "Notifications: "
                    ],
                    functionalityText:
                    [
                        "Precisely add the required filters to limit unecesarry notifications.",
                        "Receive a notification every time a new car listing is posted."
                    ],
                    additional:[
                        "I deployed this bot on a Raspberry Pi utilizing Node.js, enabling me to receive Discord notifications even when my computer was offline.",
                        "Used JavaScript to program the bot.",
                        "Using 'discord.io' in order to authenticate the bot.",
                        "Web Scraping for required information."
                        
                    ]
                },
                { 
                    name:'yt-dlp User Interface',           
                    statusColor:'orange' ,      
                    bigImagesrc:'ytdlpBig.jpg',                  
                    smallImagesrc: 'ytdlpSmall.png' ,                 
                    status:'Prototype' ,  
                    tags:[
                        'Batchfile',
                        'Extension',
                        'JavaScript',
                        'HTML'
                    ],   
                    redirectionURLStyle:'none',   
                    redirectionURL:'',                                                                                                         
                    expandURL:'' ,     
                    imageArray:['ytdlpLong.jpg'],
                    description:
                    [
                        "This project presents a user-friendly interface for yt-dlp, enabling users to utilize yt-dlp both as a standalone Windows program and as a browser extension."
                    ],
                    explanation:
                    [
                        "The standalone application utilizes the Windows file system to store user-entered inputs, with the execution of specific yt-dlp commands alongside these inputs.",
                        "The browser extension employs manual registry input in the Windows system to execute an application directly from the browser. This mechanism transfers essential information to the program, allowing it to operate similarly to the standalone application."
                    ],
                    functionalityBold:
                    [
                        "Standalone Program: ",
                        "Chromium Based Website Extension: "
                    ],
                    functionalityText:
                    [
                        "Ability to use yt-dlp from a user interface as a standalone windows program",
                        "Ability to use yt-dlp from a user interface as a website extension"
                    ],
                    additional:[
                        "Created using Batchfile & JavaScript"
                    ]
                },
]
 
photos = [
    { name:'EVENING DROPLETS',          imagesrc:'./images/photography/photo1.jpg',        redirectionURL: 'https://www.flickr.com/photos/198328132@N07/53274008392',   cameraImage: './images/icons/xt-5.png',  lensImage:'./images/icons/meike60mm.png',           camera:'Fujifilm XT-5',     lens:'Meike 60mm f2.8 RF Macro',        aperature : 'f/2.8',    focalLenght:'60.0 mm',    iso:'125' },
    { name:'ORANGE GLOW',               imagesrc:'./images/photography/photo2.jpg',        redirectionURL: 'https://www.flickr.com/photos/198328132@N07/53006264691',   cameraImage: './images/icons/xt-5.png',  lensImage:'./images/icons/fujixf18-55.png',         camera:'Fujifilm XT-5',     lens:'Fujifilm XF18-55mm F2.8-4 R LM',  aperature : 'f/4.0',    focalLenght:'55.0 mm',    iso:'250' },
    { name:'FALLING PETALS',            imagesrc:'./images/photography/photo3.jpg',        redirectionURL: 'https://www.flickr.com/photos/198328132@N07/53002530227',   cameraImage: './images/icons/xt-5.png',  lensImage:'./images/icons/meike60mm.png',           camera:'Fujifilm XT-5',     lens:'Meike 60mm f2.8 RF Macro',        aperature : 'f/2.8',    focalLenght:'60.0 mm',    iso:'125' },
    { name:'BLACK WATCH',               imagesrc:'./images/photography/photo4.jpg',        redirectionURL: 'https://www.flickr.com/photos/198328132@N07/53005434241',   cameraImage: './images/icons/xt-5.png',  lensImage:'./images/icons/meike60mm.png',           camera:'Fujifilm XT-5',     lens:'Meike 60mm f2.8 RF Macro',        aperature : 'f/2.8',    focalLenght:'60.0 mm',    iso:'125' },
    { name:'SUNSHINE',                  imagesrc:'./images/photography/photo5.jpg',        redirectionURL: 'https://www.flickr.com/photos/198328132@N07/52976707847',   cameraImage: './images/icons/xt-5.png',  lensImage:'./images/icons/fujixf18-55.png',         camera:'Fujifilm XT-5',     lens:'Fujifilm XF18-55mm F2.8-4 R LM',  aperature : 'f/3.6',    focalLenght:'36.0 mm',    iso:'125' },
    { name:'WATER DROPLET',             imagesrc:'./images/photography/photo6.jpg',        redirectionURL: 'https://www.flickr.com/photos/198328132@N07/53074266972',   cameraImage: './images/icons/xt-5.png',  lensImage:'./images/icons/meike60mm.png',           camera:'Fujifilm XT-5',     lens:'Meike 60mm f2.8 RF Macro',        aperature : 'f/2.8',    focalLenght:'60.0 mm',    iso:'125' },
    { name:'BIRR SPRUCE',               imagesrc:'./images/photography/photo8.jpg',        redirectionURL: 'https://www.flickr.com/photos/198328132@N07/52930552225',   cameraImage: './images/icons/xt-5.png',  lensImage:'./images/icons/fujixf18-55.png',         camera:'Fujifilm XT-5',     lens:'Fujifilm XF18-55mm F2.8-4 R LM',  aperature : 'f/4.0',    focalLenght:'55.0 mm',    iso:'125' },
    { name:'LAKE BRIDGET REFLECTION',   imagesrc:'./images/photography/photo9.jpg',        redirectionURL: 'https://www.flickr.com/photos/198328132@N07/52921253750',   cameraImage: './images/icons/xt-5.png',  lensImage:'./images/icons/fujixf18-55.png',         camera:'Fujifilm XT-5',     lens:'Fujifilm XF18-55mm F2.8-4 R LM',  aperature : 'f/5.6',    focalLenght:'55.0 mm',    iso:'125' },
    { name:'LAKE BRIDGET SUNSET',       imagesrc:'./images/photography/photo10.jpg',       redirectionURL: 'https://www.flickr.com/photos/198328132@N07/52920889496',   cameraImage: './images/icons/xt-5.png',  lensImage:'./images/icons/fujixf18-55.png',         camera:'Fujifilm XT-5',     lens:'Fujifilm XF18-55mm F2.8-4 R LM',  aperature : 'f/5.6',    focalLenght:'55.0 mm',    iso:'125' },
    { name:'BIRR AQUILEGIA',            imagesrc:'./images/photography/photo7.jpg',        redirectionURL: 'https://www.flickr.com/photos/198328132@N07/52930237606',   cameraImage: './images/icons/xt-5.png',  lensImage:'./images/icons/fujixf18-55.png',         camera:'Fujifilm XT-5',     lens:'Fujifilm XF18-55mm F2.8-4 R LM',  aperature : 'f/5.6',    focalLenght:'55.0 mm',    iso:'125' },
]

window.addEventListener("DOMContentLoaded", (event) => {

    

    console.log(event);

    const text = document.querySelector(".text");
    text.innerHTML = text.innerText
        .split("")
        .map(
            (char, i) => `<span style="transform:rotate(${i * 10.3}deg)">${char}</span>`
        )
        .join("");

    const text2 = document.querySelector(".text2");
    text2.innerHTML = text2.innerText
        .split("")
        .map(
            (char, i) => `<span style="transform:rotate(${i * 10.3}deg)">${char}</span>`
        )
        .join("");

    const text3 = document.querySelector(".text3");
    text3.innerHTML = text3.innerText
        .split("")
        .map(
            (char, i) => `<span style="transform:rotate(${i * 10.3}deg)">${char}</span>`
        )
        .join("");


    let skillsDisplayed = false;

    const observer = new IntersectionObserver((entries) => {
        // console.log(entries)
        entries.forEach((entry) => {
            // console.log(entry);
            console.log(entry.target.id);
            if (entry.isIntersecting){
                entry.target.classList.add('show');
                
            }
            
            // else{
            //     entry.target.classList.remove('show');
            // }
        });
    });
    
    
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));



    const observer2 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // console.log(entry);
            if (entry.isIntersecting){
                entry.target.classList.add('show');
            }
            // else{
            //     entry.target.classList.remove('show');
            // }
        });
    });
    
    
    const hiddenElements2 = document.querySelectorAll('.hidden2');
    hiddenElements2.forEach((el) => observer2.observe(el));




    const observer3 = new IntersectionObserver((entries) => {
        console.log(entries)
        entries.forEach((entry) => {
            if(entry.target.id === "skillsDiv" && !skillsDisplayed && entry.isIntersecting){
                skillsDisplayed = true;
                displaySkills();
            }
        });
    });
    
    
    const hiddenElements3 = document.querySelectorAll('.skillsDiv');
    hiddenElements3.forEach((el) => observer3.observe(el));


    lastItemButtonID = "";


    


    var navH = $('nav').height(),
        section = $('section'),
        documentEl = $(document);

    scrollNavLogic(documentEl.scrollTop());


    documentEl.on('scroll', function() {
        scrollNavLogic(documentEl.scrollTop())
    });

    function scrollNavLogic(currentScrollPos) {
          
          section.each(function(){
            var self = $(this);
            if ( self.offset().top < (currentScrollPos + navH) && (currentScrollPos + navH) < (self.offset().top + self.outerHeight() ) ) {

            let targetButton = self[0].id + "Button"


              if(lastItemButtonID != targetButton){
                if(lastItemButtonID != ""){
                    document.getElementById(lastItemButtonID).classList.remove('menuItemLinkSelected');
                }
                document.getElementById(targetButton).classList.add('menuItemLinkSelected');
                lastItemButtonID = targetButton;
              }
             }   
          });  
    }


    











    $(document).ready(function(){
        $("a").on('click', function(event) {
          if (this.hash !== "") {

            event.preventDefault();
            var hash = this.hash;
    
            $('html, body').animate({
              scrollTop: $(hash).offset().top
            }, 800, function(){
         
              window.location.hash = hash;
            });
          }
        });
      });

});



function displaySkills(){
    let min = calculateYears(new Date(skills[0].dateStarted))
    let max = calculateYears(new Date(skills[0].dateStarted))
    let boxWidth = 93;


    for (let i = 0; i < skills.length; i++) {
        if(calculateYears(new Date(skills[i].dateStarted)) > max){
            max = calculateYears(new Date(skills[i].dateStarted));
        }
        if(calculateYears(new Date(skills[i].dateStarted)) < min){
            min = calculateYears(new Date(skills[i].dateStarted));
        }
    }

    let amountOfYearsToDivide = (max - min) + 1;
    let skillYearInterval = (boxWidth/2)/amountOfYearsToDivide;


    for (let i = 0; i < skills.length; i++) {
        console.log(skills[i])
        

        let div = document.getElementById('skillsDiv'); 

        div1 = document.createElement('div');

        let years = calculateYears(new Date(skills[i].dateStarted))

        let widthOfStatus = boxWidth - (skillYearInterval*(max-years));

        console.log(widthOfStatus)

        let yearsText;

        if(years == 1){
            yearsText = "year"
        }else{
            yearsText = "years" 
        }

        div1.innerHTML = `
                            <div class="skillBox">
                                <div class="skill alignTopBottom" style="width: `+widthOfStatus+`%;");>
                                    <div class="alignTopBottom skillTextBox" style="width: `+100 +`%;">
                                        <div class="skillTextDiv" style="justify-content: start; ">
                                            <h1 class="skillText">`+skills[i].name+`</h1>
                                        </div>
                                        <div class="skillTextDiv" style="justify-content: end;">
                                            <h1 class="skillText2">`+ years  +' ' +yearsText+`</h1>
                                        </div>
                                    </div>
                                    <div class="alignCenter skillImageDiv" style="background-color: `+skills[i].color+`;">
                                        <img class="skillImage" src="`+skills[i].imageLink+`" alt="`+skills[i].name+`">
                                    </div>
                                    
                                </div>
                            </div>
                        `


        div.appendChild(div1);
    }


}




function calculateYears(dateToCalculate) {
    var ageDifMs = Date.now() - dateToCalculate;
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}
