const floatAnimation = () => {
    const tlCan = new TimelineMax({repeat:-1});
    /*Animation*/
   tlCan
   .to('.twitterSocialMedia', 3, { y:'-=30', x:'+=20',  rotation:'-=5', ease:Power1.easeInOut})
   .to('.twitterSocialMedia', 2, { y:'+=30', x:'-=20', rotation:'-=5', ease:Power1.easeInOut})

   .to('.twitterSocialMedia', 3, { y:'-=20',  rotation:'+=5', ease:Power1.easeInOut})
   .to('.twitterSocialMedia', 3, { y:'+=20',  rotation:'+=5', ease:Power1.easeInOut})
   TweenLite.to(tlCan, 27, {ease:Power1.easeInOut})

}
floatAnimation();

const facebookFloatAnimation = () => {
    const tlCan = new TimelineMax({repeat:-1});
    /*Animation*/
   tlCan
   .to('.pinterestSocialMedia', 3, { y:'+=20',  rotation:'+=5', ease:Power1.easeInOut})
   .to('.pinterestSocialMedia', 3, { y:'-=20',  rotation:'+=5', ease:Power1.easeInOut})

   .to('.pinterestSocialMedia', 2, { y:'+=30', x:'+=20', rotation:'-=5', ease:Power1.easeInOut})
   .to('.pinterestSocialMedia', 3, { y:'+=30', x:'-=20', rotation:'-=5', ease:Power1.easeInOut})
   TweenLite.to(tlCan, 27, {ease:Power1.easeInOut})

}
facebookFloatAnimation();