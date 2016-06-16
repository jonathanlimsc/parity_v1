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

    function loadProfiles(){
        var eric = {
            name: "Eric Liu",
            image: "../img/package-thumbnail-1.jpg",
            profilePic: "../img/profile-pic-1.jpg",
            minPrice: 220,
            maxPrice: 550,
            rating: 4,
            reviews: 86,
            location: "Clementi, Singapore",
            area: "West"
        };
        var eric2 = {
            name: "Eric Liu",
            image: "../img/package-thumbnail-1.jpg",
            profilePic: "../img/profile-pic-1.jpg",
            minPrice: 220,
            maxPrice: 550,
            rating: 4,
            reviews: 86,
            location: "Clementi, Singapore",
            area: "West"
        };

        $scope.profiles.push(eric);
        $scope.profiles.push(eric2);
    }

    $scope.iterator = function(number){
        return new Array(number);
    };

    loadProfiles();

    // Slider stuff

    $scope.slider = {
        lowValue: 150,
        highValue: 1000,
        options : {
            step: 10,
            floor: 0,
            ceil: 5000,
            hideLimitLabels: true,
            translate: function(val){
                return '$' + val;
            }
        }
    };

    // Filter stuff
    $scope.locationFilter;

    // Location filter
    $scope.setLocation = function(location){
        $scope.locationFilter = location;
    };
});

