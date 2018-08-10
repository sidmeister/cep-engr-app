// create a JavaScript object here with the following fields: firstName, lastName, jobTitle, homeOffice
let person={
    _firstName:'Siddharth',
    _lastName:'Rathi',
    _jobTitle:'Staff Big Data Engineer',
    _homeOffice:'HomeAway',
    _moreDetail:'Description needed',
    
    //TODO: change images for all
    //TODO: add different text for each button
    //TODO: Format heading


  //Getter and setter for _firstName 
    set firstName(newFirstName){
        console.log(typeof newFirstName)
        if(typeof newFirstName === "string"){
            this._firstName=newFirstName;
        }else{
            console.error('Invalid Input');
        }
    },
    get firstName(){
        return this._firstName;
    },
  //Getter and setter for _lastName 
    set lastName(newLastName){
        console.log(typeof newLastName)
        if(typeof newLastName === "string"){
            this._lastName=newLastName;
        }else{
            console.error('Invalid Input');
        }
    },
    get lastName(){
        return this._lastName;
    },
  //Getter and setter for _jobTitle 
    set jobTitle(newJobTitle){
        console.log(typeof newJobTitle)
        if(typeof newJobTitle === "string"){
            this._jobTitle=newJobTitle;
        }else{
            console.error('Invalid Input');
        }
    },
    get jobTitle(){
        return this._jobTitle;
    },
    //Getter and setter for _homeOffice 
    set homeOffice(newHomeOffice){
        console.log(typeof newHomeOffice)
        if(typeof newHomeOffice === "string"){
            this._homeOffice=newHomeOffice;
        }else{
            console.error('Invalid Input');
        }
    },
    get homeOffice(){
        return this._homeOffice;
    },
    //Getter and setter for _moreDetail 
    set moreDetail(newMoreDetail){
        console.log(typeof newMoreDetail)
        if(typeof newMoreDetail === "string"){
            this._moreDetail=newMoreDetail;
        }else{
            console.error('Invalid Input');
        }
    },
    get moreDetail(){
        return this._moreDetail;
    }
};


// using jQuery and the object above, display the information as the appropriate button is clicked
$(document).ready(function(){
    //hide Description Div and Picture by default
    $('.descBackground, .sideImage').hide();

    //common functionality for all buttons
    $("button").click(function(){
        //show Description Div and Picture by default
        $('.descBackground, .sideImage').show(); 
        //disable button afterone click
        $(this).off('click'); 
    });
    //Information to be displayed if first name button is clicked
    $('#first_name_btn').click(function(e){
        //using Jquery append function to display text from Java script method having firstName property
        $('#detailBox').append('<br/> Hello!!! I am '+ person.firstName);
    });

    //Information to be displayed if last name button is clicked
    $('#last_name_btn').click(function(e){
        //using Jquery append function to display text from Java script object having lastName property
        $('#detailBox').append('<br/> My Last name is '+person.lastName); 
    });

    //Information to be displayed if homeOffice button is clicked
    $('#home_office_btn').click(function(e){
        //using Jquery append function to display text from Java script getter method returning homeOffice property
        $('#detailBox').append('<br/> I work in '+person.homeOffice); 
    });

    //Information to be displayed if Job Title button is clicked
    $('#job_title_btn').click(function(e){
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
