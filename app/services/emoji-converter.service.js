angular.module('app')
    .factory('EmojiConverter', EmojiConverter);

function EmojiConverter() {
    return {
        getEmojiString: getEmojiString
    }

    function getEmojiString(message) {
        var content = message;
        content = content.replace(':p', '\uD83D\uDE0B');
        content = content.replace(':)', '\uD83D\uDE01');
        content = content.replace(':(', '\uD83D\uDE14');
        return content;
    }
}