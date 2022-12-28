//Source: https://greensock.com/forums/topic/21578-floating-animation/
const floatAnimation = () => {
    const tlCan = new TimelineMax({repeat:-1});
    /*Animation*/
   tlCan
   .to('.twitterSocialMedia', 3, { y:'-=30', x:'+=20',  rotation:'-=5', ease:Power1.easeInOut})
   .to('.twitterSocialMedia', 2, { y:'+=30', x:'-=20', rotation:'-=5', ease:Power1.easeInOut})

   .to('.twitterSocialMedia', 3, { y:'-=20',  rotation:'+=5', ease:Power1.easeInOut})
   .to('.twitterSocialMedia', 3, { y:'+=20',  rotation:'+=5', ease:Power1.easeInOut})
   TweenLite.to(tlCan, 20, {ease:Power1.easeInOut})

}
floatAnimation();

const facebookFloatAnimation = () => {
    const tlCan = new TimelineMax({repeat:-1});
    /*Animation*/
   tlCan
   .to('.facebookSocialMedia', 3, { y:'-=30', x:'+=20',  rotation:'-=5', ease:Power1.easeInOut})
   .to('.facebookSocialMedia', 2, { y:'+=30', x:'-=20', rotation:'-=5', ease:Power1.easeInOut})

   .to('.facebookSocialMedia', 3, { y:'-=20',  rotation:'+=5', ease:Power1.easeInOut})
   .to('.facebookSocialMedia', 3, { y:'+=20',  rotation:'+=5', ease:Power1.easeInOut})
   TweenLite.to(tlCan, 20, {ease:Power1.easeInOut})

}
facebookFloatAnimation();

const dribbleFloatAnimation = () => {
    const tlCan = new TimelineMax({repeat:-1});
    /*Animation*/
   tlCan
   .to('.dribbleSocialMedia', 3, { y:'-=30', x:'+=20',  rotation:'-=5', ease:Power1.easeInOut})
   .to('.dribbleSocialMedia', 2, { y:'+=30', x:'-=20', rotation:'-=5', ease:Power1.easeInOut})

   .to('.dribbleSocialMedia', 3, { y:'+=20',  rotation:'+=5', ease:Power1.easeInOut})
   .to('.dribbleSocialMedia', 3, { y:'-=20',  rotation:'+=5', ease:Power1.easeInOut})
   TweenLite.to(tlCan, 20, {ease:Power1.easeInOut})

}
dribbleFloatAnimation();

const pinterestFloatAnimation = () => {
    const tlCan = new TimelineMax({repeat:-1});
    /*Animation*/
   tlCan
   .to('.pinterestSocialMedia', 2, { y:'+=30', x:'-=20', rotation:'-=5', ease:Power1.easeInOut})
   .to('.pinterestSocialMedia', 3, { y:'-=30', x:'+=20',  rotation:'-=5', ease:Power1.easeInOut})

   .to('.pinterestSocialMedia', 3, { y:'+=20',  rotation:'+=5', ease:Power1.easeInOut})
   .to('.pinterestSocialMedia', 3, { y:'-=20',  rotation:'+=5', ease:Power1.easeInOut})
   TweenLite.to(tlCan, 20, {ease:Power1.easeInOut})

}
pinterestFloatAnimation();




gsap.from(".openNewTabsTitle", {
    scrollTrigger: ".openNewTabsTitle", // start the animation when ".box" enters the viewport (once)
    ease:Power1.easeInOut,
    opacity: 0,
    duration: 2.5
});
gsap.from(".onlyOneTabWrapper", {
    scrollTrigger: ".onlyOneTabWrapper", // start the animation when ".box" enters the viewport (once)
    ease:Power1.easeInOut,
    opacity: 0,
    duration: 1.5
});
gsap.from(".onlyOneTabsDescription", {
    scrollTrigger: ".onlyOneTabsDescription", // start the animation when ".box" enters the viewport (once)
    ease:Power1.easeInOut,
    opacity: 0,
    duration: 1.5
});


gsap.from(".startupGrowthSectionTitleWrapper", {
    scrollTrigger: ".startupGrowthSectionTitleWrapper", // start the animation when ".box" enters the viewport (once)
    ease:Power1.easeInOut,
    opacity: 0,
    duration: 1.5
});

gsap.from(".someClientsTitle", {
    scrollTrigger: ".someClientsTitle", // start the animation when ".box" enters the viewport (once)
    ease:Power1.easeInOut,
    opacity: 0,
    duration: 1.5
});

gsap.from(".joinUsTitleOne", {
    scrollTrigger: ".joinUsTitleOne", // start the animation when ".box" enters the viewport (once)
    ease:Power1.easeInOut,
    opacity: 0,
    duration: 1.5
});

gsap.from(".joinUsTitleTwo", {
    scrollTrigger: ".joinUsTitleTwo", // start the animation when ".box" enters the viewport (once)
    ease:Power1.easeInOut,
    opacity: 0,
    duration: 1.5
});
gsap.from(".allPlatformConnectTitle", {
    scrollTrigger: ".allPlatformConnectTitle", // start the animation when ".box" enters the viewport (once)
    ease:Power1.easeInOut,
    opacity: 0,
    duration: 1.5
});
gsap.from(".joinNowButton", {
    scrollTrigger: ".joinNowButton", // start the animation when ".box" enters the viewport (once)
    ease:Power1.easeInOut,
    opacity: 0,
    duration: 1.5
});
gsap.from(".bestDealsTitle", {
    scrollTrigger: ".bestDealsTitle", // start the animation when ".box" enters the viewport (once)
    ease:Power1.easeInOut,
    opacity: 0,
    duration: 1.5
});

gsap.registerPlugin(ScrollSmoother);
ScrollSmoother.create({
    smooth: 3,               // how long (in seconds) it takes to "catch up" to the native scroll position
    effects: true,           // looks for data-speed and data-lag attributes on elements
    smoothTouch: 0.1,        // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
});