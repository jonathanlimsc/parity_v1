/**
 * Created by Jonathan on 6/17/16.
 */
angular.module('MessagesCtrl', []).controller('MessagesController', function($scope) {

    $scope.contacts = [];
    $scope.chatMessages = [];

    function getContacts(){
        var contacts = [];

        var contact1 = {
            name: 'Eric Liu',
            text: 'Yeah, I\'m available. A basic 2 hour shoot...',
            time: 'Just Now',
            profilePic: 'img/profile-pic-1.jpg',
            unread: '1',
            active: true
        };

        var contact2 = {
            name: 'Poornima Venkataraman',
            text: 'I think a central location would be better.',
            time: '5 hours ago',
            profilePic: 'img/profile-pic-4.jpg'
        };

        var contact3 = {
            name: 'Karthikeyan Shanmugam',
            text: 'The contrast could be increased to bring out the subjects.',
            time: '1 day ago',
            profilePic: 'img/profile-pic-5.jpg'
        };

        var contact4 = {
            name: 'Emma Watson',
            text: 'Perhaps do it like Burberry?',
            time: '1 day ago',
            profilePic: 'img/profile-pic-6.png'
        };

        var contact5 = {
            name: 'Hugh Jackman',
            text: '1 hour with my modelling services',
            time: '2 days ago',
            profilePic: 'img/profile-pic-7.jpg'
        };

        contacts.push(contact1);
        contacts.push(contact2);
        contacts.push(contact3);
        contacts.push(contact4);
        contacts.push(contact5);

        return contacts;
    };

    function loadContacts(){
        $scope.contacts = getContacts();
    };

    function getChatMessages(){
        var messages = [];

        var msg1 = {
            name: 'Jonathan Lim',
            text: 'Hey Eric, how\'s it going?',
            time: '15 mins ago',
            profilePic: 'img/profile-pic-3.jpg',
            role: 'sender'
        };

        var msg2 = {
            name: 'Eric Liu',
            text: 'Hey I\'m great, you?',
            time: '15 mins ago',
            profilePic: 'img/profile-pic-1.jpg',
            role: 'receiver'

        };

        var msg3 = {
            name: 'Jonathan Lim',
            text: 'Awesome. Anyway, I\'m interested in your casual shoot package on the 22 June. Would you be available and how much would that be?',
            time: '13 mins ago',
            profilePic: 'img/profile-pic-1.jpg',
            role: 'sender'

        };

        var msg4 = {
            name: 'Eric Liu',
            text: 'Yeah, I\'m available. A basic 2 hour shoot with 100 photos would be around $300. Optional add-on costs will be things such as props and special locations.',
            time: '10 mins ago',
            profilePic: 'img/profile-pic-1.jpg',
            role: 'receiver'

        };

        messages.push(msg1);
        messages.push(msg2);
        messages.push(msg3);
        messages.push(msg4);

        return messages;
    }

    function loadChatMessages(){
        $scope.chatMessages = getChatMessages();
        console.log($scope.chatMessages);
    }

    $scope.submitMessage = function(){
        var oldMessages = $scope.chatMessages;

        var message = {
            name: 'Jonathan Lim',
            text: $scope.textMessage,
            time: 'Just Now',
            profilePic: 'img/profile-pic-3.jpg',
            role: 'sender'
        };

        oldMessages.push(message);
        $scope.textMessage = '';

        $scope.chatMessages = oldMessages;
    };

    // Load all your stuff here
    loadContacts();
    loadChatMessages();

});
