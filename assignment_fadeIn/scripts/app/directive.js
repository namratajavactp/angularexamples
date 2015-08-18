sampleApp.directive('myDomDirective', function ($window) {
            return {
                link: function ($scope, element) {
                    $(element).hover(function () {
                        $(this).fadeOut(500);
                        $(this).fadeIn(500);
                    });
                }
            };
        });