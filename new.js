// Copyright 2023, Bartek Skorecki, All rights reserved.

colourArray = ['#30924d','#3399b8','#b82798','#b82229','#1e3ada','#d56c3a']

// skills = [
//                 { name:'HTML',           dateStarted: '2018-01-01' ,     color:'#FF572220' ,     imageLink:'./images/skills/html.png'},
//                 { name:'CSS/SCSS',       dateStarted: '2018-01-01',      color:'#2299F820',      imageLink:'./images/skills/css.png'},
//                 { name:'JavaScript',     dateStarted: '2019-01-01',      color:'#D3B62A20',      imageLink:'./images/skills/js.png'},
//                 { name:'TypeScript',     dateStarted: '2020-01-01',      color:'#2299F820',      imageLink:'./images/skills/ts.png'},
//                 { name:'Python',         dateStarted: '2020-01-01',      color:'#356F9F20',      imageLink:'./images/skills/python.png'},
//                 { name:'Angular',        dateStarted: '2021-01-01',      color:'#C3002F20',      imageLink:'./images/skills/angular.png'},
//                 { name:'Java',           dateStarted: '2021-01-01',      color:'#778EA320',      imageLink:'./images/skills/java.png'},
//                 { name:'SQL',            dateStarted: '2022-01-01',      color:'#00BCF220',      imageLink:'./images/skills/sql.png'},
// ]

projects = [
                {   
                    name:'CS2 Stash Enhancer',              
                    statusColor:'green' ,       
                    bigImagesrc:'cs2stashenhancerbig.jpg',       
                    smallImagesrc: 'cs2stashenhancersmall.png' ,
                    imageArray:['cs2stashenhancerlong.jpg'],
                    status:'Online' ,     
                    tags:
                    [
                        'Extension',
                        'HTML',
                        'JavaScript',
                        'CSS',
                        '650+ Users'
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
                    name:'UL Student Guide',                
                    statusColor:'orange' ,      
                    bigImagesrc:'studentguideBig.jpg',           
                    smallImagesrc: 'studentguideSmall.png' ,          
                    status:'Project' ,  
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
                    status:'Project' ,  
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
                    name:'DoneDeal Discord Bot',            
                    statusColor:'orange' ,      
                    bigImagesrc:'donedealBig.jpg',               
                    smallImagesrc: 'donedealSmall.png' ,              
                    status:'Project' ,  
                    tags:[
                        'Bot',
                        'Discord',
                        'JavaScript',
                        'Web Scraping',
                        'Node.js'
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
                    status:'Project' ,  
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

window.addEventListener("DOMContentLoaded", (event) => {

    const items = document.querySelectorAll('.responsive-skill-item');
    
    items.forEach(item => {
        item.addEventListener('mousemove', (e) => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left; // Mouse X relative to item
            const y = e.clientY - rect.top;  // Mouse Y relative to item
            
            // Calculate rotation (max 10 degrees)
            const xRotation = ((y - rect.height / 2) / rect.height) * -10;
            const yRotation = ((x - rect.width / 2) / rect.width) * 10;
            
            // Apply transform
            item.style.transform = `perspective(1000px) rotateX(${xRotation}deg) rotateY(${yRotation}deg) scale3d(1.05, 1.05, 1.05)`;
        });
        
        // Reset transform when mouse leaves
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });





    const educationSection = document.getElementById('educationSection');
    const educationButtons = educationSection.querySelectorAll('.filter-btn2');
    const educationBlocks = educationSection.querySelectorAll('.education-block');

    educationButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all buttons
            educationButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');

            // Get the category from the clicked button
            const category = button.getAttribute('data-filter');
            
            // Hide all blocks first
            educationBlocks.forEach(block => {
                block.style.display = 'none';
            });

            // Show the selected block
            const selectedBlock = educationSection.querySelector(`.education-block[data-category="${category}"]`);
            if (selectedBlock) {
                selectedBlock.style.display = 'block';
            }

            // Debug logs
            console.log('Selected category:', category);
            console.log('Found block:', selectedBlock);
        });
    });

    // Show Masters section by default
    const mastersBlock = educationSection.querySelector('.education-block[data-category="masters"]');
    if (mastersBlock) {
        mastersBlock.style.display = 'block';
    }

    





    var navH = $('nav').height(),
    section = $('section'),
    documentEl = $(document);
    lastItemButtonID = "";

    scrollNavLogic(documentEl.scrollTop());



    // Use throttling for scroll events
    documentEl.on('scroll', throttle(function() {
        scrollNavLogic(documentEl.scrollTop())
    }, 100)); // Adjust timing as needed




    const filterButtons = document.querySelectorAll('.filter-btn');
    const skillGrids = document.querySelectorAll('.responsive-skills-grid');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            // Hide all skill grids
            skillGrids.forEach(grid => grid.classList.remove('active'));
            // Show the selected grid
            const selectedGrid = document.querySelector(`[data-category="${button.dataset.filter}"]`);
            selectedGrid.classList.add('active');
        });
    });





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
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
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



      initialiseProjects();

});





function calculateYears(dateToCalculate) {
    var ageDifMs = Date.now() - dateToCalculate;
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}





function initialiseProjects(){
        //Create popup element

        // Projects
    for (let i = 0; i < projects.length; i++) {
        let div = document.getElementById('projectList'); 

        let status
        if(i == 0 || i == 1){
            status = 1;
        }else{
            status = 0;
        }

        div1 = document.createElement('div');


        div1.innerHTML = `


            <div class="boxSize noMP alignCenter projectIconDiv projectDivFull" style="max-width: var(--contentSize);  flex-direction: row; display: flex; flex-wrap: wrap;">
                <div class="alignCenter projectDivFullInner project-container" style="display: flex; flex-wrap: wrap; background-color: #3b3b3b00; border-radius: 10px; max-width: calc(var(--contentSize2) * 2)" >

                    <div class="topProjectBar" style="background-color: #3b3b3b50; width: var(--topBarWidth); display: flex; height: 70px;">
                        <div class="alignCenter projectIconDivs" style="height: 100%; width: auto;">
                            <img loading="lazy" class="smallImageProject projectIconDivs noSelect" src="./images/projects/`+projects[i].smallImagesrc+`" style="height: 100%; width: auto;" alt="">
                        </div>
                        <h4 class="noSelect" style="align-items: center; justify-content: center; width: 100%; display: flex; font-weight: 500;">`+projects[i].name+`</h4>
                        <div class="projectIconDivs" style="width: 70px;">
    
                        </div>
                    </div>
                    
    

                    <div style="display: flex; flex-wrap: wrap; flex-direction: row; width: auto; justify-content: center; margin-top: 6px; gap: 6px;" class="">
    
                        <div style="width: calc(var(--contentSize2) - 3px); height: var(--contentSize2);"class="project-image-container">
                            <img loading="lazy" class="noSelect" id="projectPopupBigImage" src="./images/projects/`+projects[i].bigImagesrc+`" alt="" style="height: 100%; width: 100%; border-radius: 10px; transition: 0.3s ease;">
                            <div class="project-overlay">
                                <div class="project-click-hint">
                                    <i class="fas fa-search-plus"></i>
                                    <span>Click to view details</span>
                                </div>
                            </div>
                        </div>
                       
    

                        <div class="alignCenter textBoxDiv" style="width: calc(var(--contentSize2) - 3px); background-color: #3b3b3b50; height: var(--contentSize2); padding: 5%; position: relative;">
                            <div style="position: absolute; width: 100%; top: 0;  display: flex; justify-content: right; margin-right: 30px;">
    
                                <div style="width: fit-content; height: 24px; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;background-color: #1c1e22; display: flex; justify-content: center; align-items: center; padding-left:12px; padding-right:12px ">
                                    <div class="alignCenter status-container" style="height: 100%; position: relative;">
                                        <div class="status-dot" style="height: 10px; width: 10px; background-color: `+projects[i].statusColor+`; border-radius: 10px;">
                                            ${projects[i].status === 'Online' ? 
                                                `<div class="status-glow" style="background-color: ${projects[i].statusColor}"></div>` 
                                                : ''}
                                        </div>
                                    </div>
                                    
                                    <p class="noMP noSelect" style="font-size: 1.12rem; margin-left: 6px; margin-bottom: 5px; color: `+projects[i].statusColor+`; font-weight: bold;">`+projects[i].status+`</p>
                                </div>
    
    
                            </div>

                            <div style="position: relative; height: calc(var(--contentSize2) - 31.5%);">
                                <h6 class="noSelect" style="color:#606060; height: 100%; overflow: hidden; text-overflow: ellipsis; white-space: break-spaces; text-align: center;">`+projects[i].description+`</h6>
                                <div style="position: absolute; bottom: 0; width: 100%; height: 90px; background: linear-gradient(to bottom, transparent, #26282a);"></div>
                            </div>


                            


                            

    
                            <div style="position: absolute; width: 100%; bottom: 0;  display: flex; justify-content: right; gap: 20px; justify-content: center;">
    
                                <div style="width: fit-content; height: 24px; border-top-left-radius: 10px; border-top-right-radius: 10px; background-color: #1c1e22; display: flex; justify-content: center; align-items: center; padding-left: 8px; padding-right: 8px; padding-top: 2px;">
                                    
                                    <p class="noMP noSelect" style="font-size: 1.12rem; margin-left: 3px; margin-right: 3px; margin-bottom: 2px; color: #8a8a8a; font-weight: 500;">`+projects[i].tags[0]+`</p>
                                </div>
    
                                <div style="width: fit-content; height: 24px; border-top-left-radius: 10px; border-top-right-radius: 10px; background-color: #1c1e22; display: flex; justify-content: center; align-items: center; padding-left: 8px; padding-right: 8px; padding-top: 2px;">
                                    
                                    <p class="noMP noSelect" style="font-size: 1.12rem; margin-left: 3px; margin-right: 3px; margin-bottom: 2px; color: #8a8a8a; font-weight: 500;">`+projects[i].tags[1]+`</p>
                                </div>
    
                                <div style="width: fit-content; height: 24px; border-top-left-radius: 10px; border-top-right-radius: 10px; background-color: #1c1e22; display: flex; justify-content: center; align-items: center; padding-left: 8px; padding-right: 8px; padding-top: 2px;">
                                    
                                    <p class="noMP noSelect" style="font-size: 1.12rem; margin-left: 3px; margin-right: 3px; margin-bottom: 2px; color: #8a8a8a; font-weight: 500;">`+projects[i].tags[2]+`</p>
                                </div>
    
    
                            </div>
                        </div>
                    
                    </div>
                    
                   
                </div>
    
            </div>


        `;

        div1.getElementsByClassName('projectDivFullInner')[0].addEventListener("click", function(event) {

            // if( !document.getElementsByClassName('projectIconDiv')[i].contains( event.target)){
                openProjectPopup(i);
            // }
            
        });



        div.appendChild(div1);
    }


    function openProjectPopup(id){
        //Create popup element
    
        let popupDiv = document.getElementById('projectPopup'); 
    
        const divInsidePopup = document.createElement('div');
    
        divInsidePopup.classList.add("popUpInsideDiv");
        divInsidePopup.id = "popUpInsideDiv";
    
    
        let bodyDiv = document.getElementById('body'); 
        bodyDiv.classList.add("bodyStatic");
    
        divInsidePopup.innerHTML = 
        `
            <div class="alignCenter" style="height: 90px; max-width: var(--contentSize); background-color: #2B2D31; border-top-left-radius: 25px; border-top-right-radius: 25px;">
                <div class="alignCenter" style="height: 100%; width:90px">
                    <img loading="lazy" src="./images/projects/`+projects[id].smallImagesrc+`" alt="" style="height: 100%; width: auto; border-top-left-radius: 25px;">
                </div>
                <h4 id="projectPopupName" class="noMP alignCenter" style="text-align: center; color: rgba(255, 255, 255, 0.637); font-weight: 100; height: 100%; width: calc(100% - 180px);">`+projects[id].name+`</h4>
                <div class="linkDiv alignCenter" style="height: 100%; width:90px;" style="display:`+projects[id].redirectionURLStyle+`">
                    <a style="display:`+projects[id].redirectionURLStyle+`;" href="`+projects[id].redirectionURL+`"><img src="./images/link.png" style="height:26px; width:26px"; display:`+projects[id].redirectionURLStyle+`></a>
                </div>
            </div>
    
    
            <div style="overflow-y: auto; overflow-x:hidden; max-width: var(--contentSize); height: 85%; background-color: #1c1e22;">
    
                <div style="height: 24px; width: 100%; display: flex; justify-content: end; position: sticky; top : 0px; z-index: 20;">
                    <div style="width: fit-content; background-color: #2B2D31; margin-right: 5%; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px; color: rgba(255, 255, 255, 0.637); display: flex; align-items: center; justify-content: center; font-size: 14px; padding-left:12px; padding-right:12px">
                        <div class="alignCenter status-container" style="height: 100%; position: relative; padding-right: 10px; user-select: none;">
                            <div class="status-dot" style="height: 8px; width: 8px; background-color: ${projects[id].statusColor}; border-radius: 10px;">
                                ${projects[id].status === 'Online' ? 
                                    `<div class="status-glow" style="background-color: ${projects[id].statusColor}"></div>` 
                                    : ''}
                            </div>
                        </div>
                        <span style="margin-bottom: 3px;">${projects[id].status}</span>
                    </div>
                </div>
                
                <div class="alignCenter" style="min-width: 100px; max-width: var(--contentSize); height: fit-content;background-color: #1c1e22; padding-top: 35px;padding-bottom: 35px;;">
                    <div style="height: var(--contentSize2); max-width: var(--contentSize); display: flex; border-radius: 15px; position: relative;">
                        <div style="height: 300px; width: 80px; background-color: #1E202445; position: absolute; opacity:0"></div>
                        <img loading="lazy" id="projectPopupBigImage" src="./images/projects/`+projects[id].imageArray[0]+`" alt="" style="height: auto; max-width: var(--contentSize); border-radius: 30px;">
                        <div style="height: 300px; width: 80px; background-color: #1E202445; position: absolute; margin-left: 465px ; opacity:0"></div>
                    </div>
                </div>
    
                <div id="popupTagDiv" class="alignCenter" style="height: 24px; width: 100%; background-color: #1c1e22;  border-bottom: 2px solid #81818140;"></div>
    
                <div style="height: fit-content; width: 100%; background-color: #2B2D31; display: flex; justify-content: center;">
                    <div style="width: 80%; height: 100%; padding-top: 65px; ">
                        <div id="popupDescriptionDiv" style="height: fit-content; width: 100%; margin-bottom: 40px;">
                            <h4 style="color: #F6F6F6; border-bottom: 1px solid rgba(128, 128, 128, 0.432); padding-bottom: 5px;">Description</h4>
                        </div>
                        <div id="popupExplanationDiv" style="height: fit-content; width: 100%; margin-bottom: 40px;">
                            <h4 style="color: #F6F6F6; border-bottom: 1px solid rgba(128, 128, 128, 0.432); padding-bottom: 5px;">Explanation</h4>
                        </div>
                        <div style="height: fit-content; width: 100%; margin-bottom: 40px;">
                            <h4 style="color: #F6F6F6; border-bottom: 1px solid rgba(128, 128, 128, 0.432); padding-bottom: 5px;">Functionality</h4>
                            <ul id="popupFunctionalityDiv" style="margin-top: 10px;"></ul>
                        </div>
                        <div style="height: fit-content; width: 100%; margin-bottom: 40px;">
                            <h4 style="color: #F6F6F6; border-bottom: 1px solid rgba(128, 128, 128, 0.432); padding-bottom: 5px;">Additional</h4>
                            <ul id="popupAdditionalDiv" style="margin-top: 10px;"></ul>
                        </div>
                    </div>
                </div>
    
                
    
            </div>
    
            <div style="width: 100%; height: 60px; border-bottom-left-radius: 25px; border-bottom-right-radius: 25px; background-color: #2B2D31;">
    
            </div>
    
        `
    
        popupDiv.appendChild(divInsidePopup);
    
    
    
    
        //Adding Tags to the popup
        let tagDiv = document.getElementById('popupTagDiv');
        for (let i = 0; i < projects[id].tags.length; i++) {
            let tag = document.createElement('div');
            tag.classList.add("tagPopup");
            tag.style.background = colourArray[i]
            tag.innerHTML = projects[id].tags[i]
            tagDiv.appendChild(tag);
        }
    
        //Adding Description
    
        let descriptionDiv = document.getElementById('popupDescriptionDiv');
        for (let i = 0; i < projects[id].description.length; i++) {
            let descriptionEntry = document.createElement('p');
            descriptionEntry.classList.add("popupDescriptionEntry");
            descriptionEntry.innerHTML = projects[id].description[i]
            descriptionDiv.appendChild(descriptionEntry);
        }
    
        //Adding Explanation
    
        let explanationDiv = document.getElementById('popupExplanationDiv');
        for (let i = 0; i < projects[id].explanation.length; i++) {
            let explanationEntry = document.createElement('p');
            explanationEntry.classList.add("popupExplanationEntry");
            explanationEntry.innerHTML = projects[id].explanation[i]
            explanationDiv.appendChild(explanationEntry);
        }
    
        //Adding Functionality
    
        let functionalityDiv = document.getElementById('popupFunctionalityDiv');
        for (let i = 0; i < projects[id].functionalityText.length; i++) {
            let functionalityEntry = document.createElement('li');
            functionalityEntry.classList.add("popupExplanationEntry");
            functionalityEntry.innerHTML = 
            `
            <b>`+projects[id].functionalityBold[i]+`</b>`+projects[id].functionalityText[i]+`
            `
            functionalityDiv.appendChild(functionalityEntry);
        }
    
        //Adding Additional
    
        let additionalDiv = document.getElementById('popupAdditionalDiv');
        for (let i = 0; i < projects[id].additional.length; i++) {
            let additionalEntry = document.createElement('li');
            additionalEntry.classList.add("popupAdditionalEntry");
            additionalEntry.innerHTML = projects[id].additional[i]
            additionalDiv.appendChild(additionalEntry);
        }
        
    
        document.getElementById('projectPopup').style.display = 'flex';
    
    
        let containingElement = document.querySelector('#popUpInsideDiv');
        
        let open = false;
    
        document.body.addEventListener('click', function( event ){
            if( !containingElement.contains( event.target ) ){
                if(open){
                    
                    document.getElementById('projectPopup').style.display = 'none';
                    document.getElementById("popUpInsideDiv").remove();
                    open = false;
                    bodyDiv.classList.remove("bodyStatic");
                }
            }
        });
    
        setTimeout(() => {  open = true; }, 100);
        
    
    }
}



// Add throttle function
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}