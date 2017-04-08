angular.module('app')
    .component('chatMessageBar', {
        controller: chatMessageBarController,
        controllerAs: 'vm',
        templateUrl: 'components/chat-message-bar/chat-message-bar.html',
        bindings: {
            currentRoom: '<',
            self: '<'
        }
    });

chatMessageBarController.$inject = ['$rootScope', '$log', 'EmojiConverter'];

function chatMessageBarController($rootScope, $log, emojiConverter) {
    var vm = this;
    vm.message = '';
    vm.sendMessage = sendMessage;

    var socket = null;

    function sendMessage() {
        $log.debug('You said:', vm.message);
        var messageData = {
            username: vm.self.username,
            email: vm.self.email,
            content: vm.message,
            room: vm.currentRoom
        };
        var content = vm.message;
        
        messageData.content = emojiConverter.getEmojiString(vm.message);

        $rootScope.$broadcast('socket:message', messageData);
        vm.message = '';
    }
}
