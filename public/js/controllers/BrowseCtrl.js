//$scope.today = function() {
//    $scope.dt = new Date();
//};
//$scope.today();
//
//$scope.clear = function() {
//    $scope.dt = null;
//};
// Disable weekend selection

angular.module('BrowseCtrl', ['ui.bootstrap', 'rzModule']).controller('BrowseController', function($scope) {


    $scope.tagline = 'Browse profiles here!';

    //Date stuff

    $scope.inlineOptions = {
        customClass: getDayClass,
        minDate: new Date(),
        showWeeks: true
    };

    $scope.dateOptions = {
        dateDisabled: disabled,
        formatYear: 'yy',
        maxDate: new Date(2020, 5, 22),
        minDate: new Date(),
        startingDay: 1
    };
    function disabled(data) {
        var date = data.date,
            mode = data.mode;
        return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
    }

    $scope.toggleMin = function() {
        $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
        $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
    };


    $scope.toggleMin();
    $scope.fromDatePopup = function() {
        $scope.popup1.opened = true;
    };

    $scope.toDatePopup = function() {
        $scope.popup2.opened = true;
    };

    $scope.setDate = function(year, month, day) {
        $scope.fromDate = new Date(year, month, day);
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];

    $scope.altInputFormats = ['M!/d!/yyyy'];

    $scope.popup1 = {
        opened: false
    };

    $scope.popup2 = {
        opened: false
    };
    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    var afterTomorrow = new Date();
    afterTomorrow.setDate(tomorrow.getDate() + 1);

    $scope.events = [
        {
            date: tomorrow,
            status: 'full'
        },
        {
            date: afterTomorrow,
            status: 'partially'
        }
    ];
    function getDayClass(data) {
        var date = data.date,
            mode = data.mode;
        if (mode === 'day') {

            var dayToCheck = new Date(date).setHours(0,0,0,0);
            for (var i = 0; i < $scope.events.length; i++) {

                var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);
                if (dayToCheck === currentDay) {
                    return $scope.events[i].status;
                }
            }
        }

        return '';
    }

    // Profile stuff

    $scope.profiles = [];

    function getAllProfiles(){
        var profiles = [];
        var eric1 = {
            packageName: "Natural Light Shoot",
            type: "Casual",
            photographer: "Eric Liu",
            image: "../img/package-thumbnail-1.jpg",
            profilePic: "../img/profile-pic-1.jpg",
            minPrice: 200,
            maxPrice: 420,
            rating: 4,
            reviews: 5,
            location: "Marina Bay Sands",
            area: "Central",
            link: "/profile/ericliu"
        };

        var eric2 = {
            packageName: "Fashion Shoot",
            type: "Fashion",
            photographer: "Eric Liu",
            image: "../img/package-thumbnail-2.jpg",
            profilePic: "../img/profile-pic-1.jpg",
            minPrice: 300,
            maxPrice: 600,
            rating: 4,
            reviews: 5,
            location: "Location negotiable",
            area: "Any",
            link: "/profile/ericliu"
        };

        var eric3 = {
            packageName: "Children Event Coverage",
            type: "Event",
            photographer: "Eric Liu",
            image: "../img/package-thumbnail-3.jpg",
            profilePic: "../img/profile-pic-1.jpg",
            minPrice: 350,
            maxPrice: 500,
            rating: 4,
            reviews: 5,
            location: "Punggol",
            area: "North",
            link: "/profile/ericliu"
        };

        var eric4 = {
            packageName: "Fun Shoot",
            type: "Casual",
            photographer: "Eric Liu",
            image: "../img/package-thumbnail-4.jpg",
            profilePic: "../img/profile-pic-1.jpg",
            minPrice: 200,
            maxPrice: 420,
            rating: 4,
            reviews: 5,
            location: "Clementi",
            area: "West",
            link: "/package/ericliu-fun-shoot"
        };

        var eric5 = {
            packageName: "1930 Chinese School Girl",
            type: "Casual",
            photographer: "Eric Liu",
            image: "../img/package-thumbnail-5.jpg",
            profilePic: "../img/profile-pic-1.jpg",
            minPrice: 250,
            maxPrice: 450,
            rating: 4,
            reviews: 5,
            location: "Chinatown",
            area: "Central",
            link: "/profile/ericliu"
        };

        var jason1 = {
            packageName: "Social Media Profile Pic",
            type: "Casual",
            photographer: "Jason Chu",
            image: "../img/package-thumbnail-9.jpg",
            profilePic: "../img/profile-pic-2.jpg",
            minPrice: 50,
            maxPrice: 120,
            rating: 4,
            reviews: 10,
            location: "Location Negotiable",
            area: "Any",
            link: "/profile/jasonchu"
        };

        var jason2 = {
            packageName: "2-hr Game Coverage",
            type: "Event",
            photographer: "Jason Chu",
            image: "../img/package-thumbnail-10.jpg",
            profilePic: "../img/profile-pic-2.jpg",
            minPrice: 200,
            maxPrice: 400,
            rating: 4,
            reviews: 10,
            location: "Location Negotiable",
            area: "Any",
            link: "/profile/jasonchu"
        };

        var jason3 = {
            packageName: "Business Event Coverage",
            type: "Event",
            photographer: "Jason Chu",
            image: "../img/package-thumbnail-11.jpg",
            profilePic: "../img/profile-pic-2.jpg",
            minPrice: 0,
            maxPrice: 3000,
            rating: 4,
            reviews: 10,
            location: "Location Negotiable",
            area: "Any",
            link: "/profile/jasonchu"
        };

        var jason4 = {
            packageName: "Family Photos",
            type: "Family",
            photographer: "Jason Chu",
            image: "../img/package-thumbnail-12.jpg",
            profilePic: "../img/profile-pic-2.jpg",
            minPrice: 180,
            maxPrice: 800,
            rating: 4,
            reviews: 10,
            location: "Location Negotiable",
            area: "Any",
            link: "/profile/jasonchu"
        };

        profiles.push(eric1);
        profiles.push(eric2);
        profiles.push(eric3);
        profiles.push(eric4);
        profiles.push(eric5);

        profiles.push(jason1);
        profiles.push(jason2);
        profiles.push(jason3);
        profiles.push(jason4);

        return profiles;
    }

    function loadAllProfiles(){
        $scope.profiles = getAllProfiles();
    }

    loadAllProfiles();

    $scope.iterator = function(number){
        return new Array(number);
    };


    // Slider stuff

    $scope.slider = {
        lowValue: 0,
        highValue: 1000,
        options : {
            step: 10,
            floor: 0,
            ceil: 5000,
            hideLimitLabels: true,
            translate: function(val){
                return '$' + val;
            },
            onChange: function(id, modelValue, highValue, pointerType){
                $scope.filterProfiles();
            }
        }
    };

    // Filter stuff
    $scope.locationFilter = 'Any';

    $scope.weddingFilter = true;
    $scope.eventFilter = true;
    $scope.casualFilter = true;
    $scope.familyFilter = true;
    $scope.fashionFilter = true;
    $scope.graduationFilter = true;

    // Location filter
    $scope.setLocation = function(location){
        $scope.locationFilter = location;
        $scope.filterProfiles();
    };

    $scope.filterProfiles = function(){
        console.log("change");
        // Filter variables
        var lowPrice = $scope.slider.lowValue;
        var highPrice = $scope.slider.highValue;
        var location = $scope.locationFilter;
        var packageTypeFilters = getPackageTypeFilterArray();

        var profiles = getAllProfiles();

        var processedProfiles = _.filter(profiles, function(profile){
            if(lowPrice <= profile.minPrice) {
                if(highPrice >= profile.maxPrice){
                    if(location === 'Any' || location === profile.area || profile.area === 'Any'){
                        if(_.includes(packageTypeFilters, profile.type)){
                            return true;
                        }
                    }
                }
            }
            return false;
        });

        $scope.profiles = processedProfiles;

    };

    function getPackageTypeFilterArray(){
        var packageTypes = [];
        if($scope.weddingFilter){
            packageTypes.push('Wedding');
        }
        if($scope.eventFilter){
            packageTypes.push('Event');
        }
        if($scope.casualFilter){
            packageTypes.push('Casual');
        }
        if($scope.familyFilter){
            packageTypes.push('Family');
        }
        if($scope.fashionFilter){
            packageTypes.push('Fashion');
        }
        if($scope.graduationFilter){
            packageTypes.push('Graduation');
        }

        return packageTypes;
    }
});

