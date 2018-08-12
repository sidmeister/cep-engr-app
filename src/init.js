var slideIndex = 1;
// create a JavaScript object here with the following fields: firstName, lastName, jobTitle, homeOffice
let person={
    _firstName:'Siddharth',
    _lastName:'Rathi',
    _jobTitle:'Staff Big Data Engineer',
    _homeOffice:'HomeAway',
    _tellMeMore:'I am originally from west part of India. I love traveling and one of my fond memories is doing a road trip from London To Scotland with my wife. Some of the key highlights were driving and enjoying the goregous view of the scottish highlands, spending time in the picturesque Edinburgh, doing scotch tasting tours, going on a ferry to Loch ness Monster. These are some of photos from the trip',

  //Getter  _firstName 
    get firstName(){
        return this._firstName;
    },
  //Getter  _lastName 
    get lastName(){
        return this._lastName;
    },
  //Getter  _jobTitle 
    get jobTitle(){
        return this._jobTitle ;
    },
    //Getter  _homeOffice 
    get homeOffice(){
        return this._homeOffice;
    },
    //Getter _moreDetail 
    get tellMeMore(){
        return this._tellMeMore;
    }
};


// using jQuery and the object above, display the information as the appropriate button is clicked
$(document).ready(function(){
    //hide Description Div and Picture by default
    $('.descBox, .sideImage, .imgRow').hide();

    //common functionality for all buttons
    let displayDetailBoxHelper = function(textString){
            //show Description Div and Picture by default
            $('#defaultShow').hide();
            $('.descBox, .sideImage').show();
            //replacing the ~ special character with br to change for line break
           $('#detailBox').text('').append(textString);
    }
      
    //Information to be displayed if first name button is clicked
    $('#first_name_btn').click(function(e){
        var intro = "<br/>Some facts about the name Siddharth";
        var urban_dict_fact = "<br/><h6><i><b>Urban dictionary says</b></i></h6>An amazing person in general, as well as very kind and understanding. Attracts lots of girls and usually has long eyelashes.Siddharth is a synonym for perfectionist, kind, caring, sophisticated and  a mannered guy but the one who at the same time can be called as ruthless, cruel and a sadist";
        var mythology_fact = "<br/><h6><i><b>Mythology says</b></i></h6> Siddharth is a name derived from two Sanskrit words:\"Siddha\" - meaning accomplished; \"artha\" - meaning goal";
        var endIntro = "<br/><em>I will let you decide which is more accurate once you get to know me</em>"
        miscDetail = intro +  mythology_fact +  urban_dict_fact + endIntro;
        //using Jquery text function to display text from Java script method having firstName property
        displayDetailBoxHelper('<strong>Howdy! My name is ' + person.firstName + '</strong>' + miscDetail);
        $('.slideShowPrevBtn,.slideShowNextBtn').empty();
        $('#imageToBeDisplayed').attr("src","../img/first_name.jpg");
    });

    //Information to be displayed if last name button is clicked
    $('#last_name_btn').click(function(e){
        //using Jquery text function to display text from Java script object having lastName property
        displayDetailBoxHelper('<strong>My last name is ' + person.lastName + '</strong> <br/> <em>No fun facts here its just a family name</em>');
        $('.slideShowPrevBtn,.slideShowNextBtn').empty();
        $('#imageToBeDisplayed').attr("src","../img/first_name.jpg");
    });

    //Information to be displayed if homeOffice button is clicked
    $('#home_office_btn').click(function(e){
        var homeaway_details = ".It is a vacation rental marketplace with more than 2,000,000 vacation rentals in 190 countries listed on its website. It operates through 50 websites in 23 languages.The company offers rentals for families and groups in cabins, condos, castles, villas, barns and farm houses. Founded in February 2005 and headquartered in Austin, the company became a publicly traded company in 2011. Expedia Inc.acquired HomeAway on December 15, 2015. <br/> Source : <a href='https://en.wikipedia.org/wiki/HomeAway' target ='_blank'> https://en.wikipedia.org/wiki/HomeAway</a>";
        //using Jquery text function to display text from Java script getter method returning homeOffice property
        displayDetailBoxHelper('<strong>I work at ' + person.homeOffice + '</strong>' + homeaway_details);
        $('.slideShowPrevBtn,.slideShowNextBtn').empty();
       $('#imageToBeDisplayed').attr("src","../img/homeaway.jpg").attr("style","height:40%;");

    });

    //Information to be displayed if Job Title button is clicked
    $('#job_title_btn').click(function(e){
        var jobDesc = "<br/><br/><h6><i><b> What to they do</b></i></h6>Big data engineers develop, maintain, test and evaluate big data solutions within organisations. Most of the time they are also involved in the design of big data solutions, because of the experience they have in Apache Spark or Hadoop based technologies such as MapReduce, Hive MongoDB or Cassandra";
        var myDuties = '<br/><br/><h6><i><b>What do I do</b></i></h6><ul> <li>Perform data cleansing enrichment,data conversion through data de-duplication and construction (ETL) </li> <li> Develop, test and maintain big data pipelines within Homeaway.Most of my time is spent in transforming, wrangling, and manipulating data using Spark and Hadoop based technologies such as Map - Reduce, Presto, Hive</li> <li><i><b><a href=\'https://www.linkedin.com/in/siddharthrathi/\' target =\'_blank\'> LinkedIn Profile</a></b></i></li></ul>';
        var linkedInProfile = "<br/><h6></h6>";
        //using Jquery text function to display text from Java script object having jobTitle property
        displayDetailBoxHelper('<strong>My Job Title is ' + person.jobTitle + '</strong>' + jobDesc + myDuties + linkedInProfile);
        $('.slideShowPrevBtn,.slideShowNextBtn').empty();
        $('#imageToBeDisplayed').attr("src","../img/big-data.jpg");

    });

    //Information to be displayed if About me button is clicked
    $('#about_btn').click(function(e){
       //using Jquery text function to display text from Java script method which is having firstName property
        displayDetailBoxHelper(person.tellMeMore);
        $('#imageToBeDisplayed').attr("src","../img/tellmemore.jpg");
        //adding slideshow butons on image
        $('.imageBox').append("<button id ='prev' class='slideShowPrevBtn active' onclick='changePrevImg();'>&#10094;</button><button id ='next' class='slideShowNextBtn' onclick='changeNextImg();'>&#10095;</button>");
    });

    //change image on both the previous and next arrows
    changePrevImg= function(e){
        if( $('#imageToBeDisplayed').attr("src","../img/tellmemore11.jpg")){
            $('#imageToBeDisplayed').attr("src","../img/tellmemore.jpg");
        }
    };
    changeNextImg = function(){
        if($('#imageToBeDisplayed').attr("src","../img/tellmemore.jpg")){
            $('#imageToBeDisplayed').attr("src","../img/tellmemore11.jpg");
        }
    }
});

