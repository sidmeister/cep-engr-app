// create a JavaScript object here with the following fields: firstName, lastName, jobTitle, homeOffice
let person={
    _firstName:'Siddharth',
    _lastName:'Rathi',
    _jobTitle:'Staff Big Data Engineer',
    _homeOffice:'HomeAway',
    _tellMeMore:'I am originally from west part of India. My biggest passion is Traveling and one of my fond memories is doing a road trip of the west coast with my wife.Some of the key highlights were driving and enjoying the goregous view on CA - 1, riding the buggy on the sand dunes in Oregon, spending time on the picturesque Canyon beach, to visiting the space needle.  This is a photo with my wife on that trip',    
    //TODO: change images for all
    //TODO: add different text for each button
    //TODO: Format heading

//adding ~ to indicate new line break in html. Adding a <br/> here did not work
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
    $('.descBackground, .sideImage').hide();

    //common functionality for all buttons
    let displayDetailBoxHelper = function(textString){
         
        // $("button").click(function () {
            //show Description Div and Picture by default
            $('.descBackground, .sideImage').show();
            //replacing the ~ special character with br to change for line break
           $('#detailBox').text('').append(textString);
        // })
    }
    
    //Information to be displayed if first name button is clicked
    $('#first_name_btn').click(function(e){
        var intro = "<br/>Some facts about the name Siddharth";
        var urban_dict_fact = "<br/>However urban dictionaly says: An amazing person in general, as well as very kind and understanding. Attracts lots of girls and usually has long eyelashes.Siddharth is a synonym for perfectionist, kind, caring, sophisticated and  a mannered guy but the one who at the same time can be called as ruthless, cruel and a sadist";
        var mythology_fact = "<br/>According to Sanskrit Siddharth is a name derived from two Sanskrit words:\"Siddha\" - meaning accomplished; \"artha\" - meaning goal";
        var endIntro = "I will let you to decide"
        miscDetail = intro +  mythology_fact +  urban_dict_fact + endIntro;
        //using Jquery text function to display text from Java script method having firstName property
        displayDetailBoxHelper('Howdy! My name is ' + person.firstName + miscDetail);
    });

    //Information to be displayed if last name button is clicked
    $('#last_name_btn').click(function(e){
        //using Jquery text function to display text from Java script object having lastName property
        displayDetailBoxHelper('My Last name is ' + person.lastName + ' No fun facts here. Its just a family name');
    });

    //Information to be displayed if homeOffice button is clicked
    $('#home_office_btn').click(function(e){
        var homeaway_details = "<br/>It is a vacation rental marketplace with more than 2, 000, 000 vacation rentals in 190 countries listed on its website. It operates through 50 websites in 23 languages.The company offers rentals for families and groups in cabins, condos, castles, villas, barns and farm houses. Founded in February 2005 and headquartered in Austin, the company became a publicly traded company in 2011. Expedia Inc.acquired HomeAway on December 15, 2015. <br/> Source :  https://en.wikipedia.org/wiki/HomeAway";
        //using Jquery text function to display text from Java script getter method returning homeOffice property
        displayDetailBoxHelper('I work at ' + person.homeOffice + homeaway_details);
        $('imageBox').append('<p> hello</p>');

    });

    //Information to be displayed if Job Title button is clicked
    $('#job_title_btn').click(function(e){
        var jobDesc = "<br/>Big data engineers develop, maintain, test and evaluate big data solutions within organisations. Most of the time they are also involved in the design of big data solutions, because of the experience they have in Apache Spark or Hadoop based technologies such as MapReduce, Hive MongoDB or Cassandra";
        var myDuties = '<br/>My primary responsibility <ul> <li> is performing data cleansing enrichment,data conversion through data de-duplication and construction (ETL) </li> <li> I develop, test and maintain big data pipelines within Homeaway.Most of my time is spent in transforming, wrangling, and manipulating data using Spark and Hadoop based technologies such as Map - Reduce, Presto, Hive</li></ul>'
        //using Jquery text function to display text from Java script object having jobTitle property
        displayDetailBoxHelper('My Job Title is ' + person.jobTitle + jobDesc + myDuties);
        $('imageBox').append('<img src="../img/bigData.jpg" alt="bigData" class="sideImage"/>');

    });

    //Information to be displayed if About me button is clicked
    $('#about_btn').click(function(e){
        //show Description Div and Picture by default
        //using Jquery text function to display text from Java script method which is having firstName property
        displayDetailBoxHelper(person.tellMeMore);
    });
});
