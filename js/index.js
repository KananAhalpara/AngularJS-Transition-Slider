angular
    .module('Transition', ['ui.router', 'ngAnimate'])

    .config(function($stateProvider, $urlRouterProvider)
            {
    $stateProvider
        .state('tab1', {
        name: 'tab1',
        url: '/tab1',
        template: '<div class="tab tab1"><h3>HOME</h3><p>Core competencies locked and loaded, nor bells and whistles blue sky thinking optics so we need to touch base off-line before we fire the new ux experience knowledge is power. Those options are already baked in with this model onward and upward, productize the deliverables and focus on the bottom line for this is meaningless UI, nor that jerk from finance really threw me under the bus. Quick win can you send me an invite? we want to empower the team with the right tools and guidance to uplevel our craft and build better yet this is a no-brainer, and marketing computer development html roi feedback team website. We need to touch base off-line before we fire the new ux experience productize, nor high-level nor level the playing field even dead cats bounce.<br><br>A better understanding of usage can aid in prioritizing future efforts we need to leverage our synergies. Back to the drawing-board move the needle, but window-licker action item. Prethink granularity, for on your plate, yet closer to the metal work. Sacred cow. Meeting assassin turd polishing, for knowledge process outsourcing and we need to button up our approach table the discussion , and not the long pole in my tent. Minimize backwards overflow helicopter view, yet run it up the flagpole, ping the boss and circle back. Good optics today shall be a cloudy day, thanks to blue sky thinking, we can now deploy our new ui to the cloud for synergestic actionables hammer out. Those options are already baked in with this model we need a paradigm shift the last person we talked to said this would be ready nor pro-sumer software and marketing computer development html roi feedback team website.</p></div>'
    })

        .state('tab2', {
        name: 'tab2',
        url: '/tab2',
        template: '<div class="tab tab2"><h3>ABOUT</h3><p>Define the underlying principles that drive decisions and strategy for your design language social currency productize we want to empower the team with the right tools and guidance to uplevel our craft and build better. We need a recap by eod, cob or whatever comes first streamline personal development yet going forward feature creep. We’re all in this together, even if our businesses function differently this vendor is incompetent for bench mark, yet but whats the real problem were trying to solve here?. Can you slack it to me? turd polishing, nor that ipo will be a game-changer.<br><br>A better understanding of usage can aid in prioritizing future efforts we need to leverage our synergies. Back to the drawing-board move the needle, but window-licker action item. Prethink granularity, for on your plate, yet closer to the metal work. Sacred cow. Meeting assassin turd polishing, for knowledge process outsourcing and we need to button up our approach table the discussion , and not the long pole in my tent. Minimize backwards overflow helicopter view, yet run it up the flagpole, ping the boss and circle back. Good optics today shall be a cloudy day, thanks to blue sky thinking, we can now deploy our new ui to the cloud for synergestic actionables hammer out. Those options are already baked in with this model we need a paradigm shift the last person we talked to said this would be ready nor pro-sumer software and marketing computer development html roi feedback team website. </p><img src="img/yoga3.jpg" alt=""> </div>'
    })

        .state('tab3', {
        name: 'tab3',
        url: '/tab3',
        template: '<div class="tab tab3"><h3>SERVICES</h3><p>Goalposts we need to touch base off-line before we fire the new ux experience but parallel path put in in a deck for our standup today or marketing computer development html roi feedback team website. Forcing function sea change lets unpack that later window-licker, and where the metal hits the meat please use "solutionise" instead of solution ideas! :). Knowledge is power we need to future-proof this. Quick win beef up push back nor drive awareness to increase engagement net net in an ideal world. Dogpile that turd polishing going forward and herding cats, but granularity, or land the plane.<br><br>A better understanding of usage can aid in prioritizing future efforts we need to leverage our synergies. Back to the drawing-board move the needle, but window-licker action item. Prethink granularity, for on your plate, yet closer to the metal work. Sacred cow. Meeting assassin turd polishing, for knowledge process outsourcing and we need to button up our approach table the discussion , and not the long pole in my tent. Minimize backwards overflow helicopter view, yet run it up the flagpole, ping the boss and circle back. Good optics today shall be a cloudy day, thanks to blue sky thinking, we can now deploy our new ui to the cloud for synergestic actionables hammer out. Those options are already baked in with this model we need a paradigm shift the last person we talked to said this would be ready nor pro-sumer software and marketing computer development html roi feedback team website.</p> <img src="img/yoga.jpg" alt=""> <img src="img/yoga2.jpg" alt=""></div>'
    })

        .state('tab4', {
        name: 'tab4',
        url: '/tab4',
        template: '<div class="tab tab4"><h3>CONTACT</h3><p>Execute on your plate deploy. Hit the ground running we need to crystallize a plan draft policy ppml proposal organic growth can you ballpark the cost per unit for me locked and loaded moving the goalposts. Push back not enough bandwidth herding cats, so ultimate measure of success and to be inspired is to become creative, innovative and energized we want this philosophy to trickle down to all our stakeholders. Level the playing field waste of resources, but curate five-year strategic plan so pig in a python. Can you send me an invite?. Out of scope deploy, and core competencies, nor get buy-in. Bench mark productize its about managing expectations. Cloud strategy low hanging fruit.<br><br>A better understanding of usage can aid in prioritizing future efforts we need to leverage our synergies. Back to the drawing-board move the needle, but window-licker action item. Prethink granularity, for on your plate, yet closer to the metal work. Sacred cow. Meeting assassin turd polishing, for knowledge process outsourcing and we need to button up our approach table the discussion , and not the long pole in my tent. Minimize backwards overflow helicopter view, yet run it up the flagpole, ping the boss and circle back. Good optics today shall be a cloudy day, thanks to blue sky thinking, we can now deploy our new ui to the cloud for synergestic actionables hammer out. Those options are already baked in with this model we need a paradigm shift the last person we talked to said this would be ready nor pro-sumer software and marketing computer development html roi feedback team website.</p></div>'
    });
})

    .controller('TransitionController', function( $scope, $window, $state )
                {
    $scope.transition = 'slide-top';
    $scope.tabs = ['tab1', 'tab2', 'tab3', 'tab4'];
    $scope.currentIndex = -1;
    $scope.maxIndex = $scope.tabs.length;
    $scope.left = false;

    next();

    function next()
    {
        $scope.currentIndex = $scope.currentIndex+1 < $scope.maxIndex ? $scope.currentIndex+1 : 0;
        var name = $scope.tabs[$scope.currentIndex];
        $state.go( name );
    }

    $scope.left = function()
    {
        $scope.transition = 'slide-left';
        next();
    }

    $scope.right = function()
    {
        $scope.transition = 'slide-right';
        next();
    }

    $scope.top = function()
    {
        $scope.transition = 'slide-top';
        next();
    }

    $scope.bottom = function()
    {
        $scope.transition = 'slide-bottom';
        next();
    }
})
;