// create a JavaScript object here with the following fields: firstName, lastName, jobTitle, homeOffice
let person={
    firstName:'Siddharth',
    lastName:'Rathi',
    jobTitle:'Staff Big Data Engineer',
    _homeOffice:'HomeAway ',
    moreDetail:'Description needed',
    
    //TODO : getter  setter for all
    //TODO : images for all

    sayHello(){
        return `Hello!!! there I am ${this.firstName}`;
        // return 'hello '+this.firstName;
    },


    //Getter and setter for property 
    set homeOffice(newHomeOffice){
        // TODO: handle null case
        if(typeof newHomeOffice==='string'){
            this._homeOffice=newHomeOffice;
        }else{
            return 'Invalid Input';
        }
    },
    get homeOffice(){
        return this._homeOffice;
    },

    aboutYourself(){
        let aboutMeTemp;
    }
};


// using jQuery and the object above, display the information as the appropriate button is clicked
$(document).ready(function(){
    //hide Description Div and Picture by default
    $('.descBackground, .sideImage').hide();

    //Information to be displayed if first name button is clicked
    $('#first_name_btn').click(function(e){
        //show Description Div and Picture by default
        $('.descBackground, .sideImage').show(); 
        //using Jquery append function to display text from Java script method having firstName property
        $('#detailBox').append('<br/>'+ person.sayHello()); 
    });

    //Information to be displayed if last name button is clicked
    $('#last_name_btn').click(function(e){
        //show Description Div and Picture by default
        $('.descBackground, .sideImage').show(); 
        //using Jquery append function to display text from Java script object having lastName property
        $('#detailBox').append('<br/> My Last name is '+person.lastName); 
    });

    //Information to be displayed if homeOffice button is clicked
    $('#home_office_btn').click(function(e){
        //show Description Div and Picture by default
        $('.descBackground, .sideImage').show(); 
        //using Jquery append function to display text from Java script getter method returning homeOffice property
        $('#detailBox').append('<br/> I work in '+person.homeOffice); 
    });

    //Information to be displayed if Job Title button is clicked
    $('#job_title_btn').click(function(e){
        //show Description Div and Picture by default
        $('.descBackground, .sideImage').show(); 
        //using Jquery append function to display text from Java script object having jobTitle property
        $('#detailBox').append('<br/> My Job Titile is '+person.jobTitle); 
    });

    //Information to be displayed if About me button is clicked
    $('#about_btn').click(function(e){
        //show Description Div and Picture by default
        $('.descBackground, .sideImage').show(); 
        //using Jquery append function to display text from Java script method which is having firstName property
        $('#detailBox').append('<br/>'+person.moreDetail); 
    });
});
