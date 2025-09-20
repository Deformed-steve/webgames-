"use strict";
(self.webpackChunkportal_frontend_vue = self.webpackChunkportal_frontend_vue || []).push([
  ["588"], {
    4740: function(e, r, t) {
      t.r(r), r.default = {
        addGamePromo: {
          title: e => {
            let {
              normalize: r
            } = e;
            return r(["Your Game here"])
          },
          description: e => {
            let {
              normalize: r
            } = e;
            return r(["Submit. Reach. Enjoy."])
          }
        },
        tasks: {
          tasks_completed: e => {
            let {
              normalize: r
            } = e;
            return r(["Daily missions completed!"])
          },
          daily_bonus_alt: e => {
            let {
              normalize: r
            } = e;
            return r(["Daily bonus"])
          },
          random_game_alt: e => {
            let {
              normalize: r
            } = e;
            return r(["Random game"])
          },
          collect_invite_alt: e => {
            let {
              normalize: r
            } = e;
            return r(["Collect bonus for invited friends"])
          },
          daily_bonus_description: e => {
            let {
              normalize: r
            } = e;
            return r(["Collect daily bonus"])
          },
          random_game_description: e => {
            let {
              normalize: r,
              interpolate: t,
              named: n
            } = e;
            return r(["Play for ", t(n("min")), " min"])
          },
          button_label: e => {
            let {
              normalize: r,
              interpolate: t,
              named: n
            } = e;
            return r(["Play ", t(n("min")), " min"])
          },
          play: e => {
            let {
              normalize: r
            } = e;
            return r(["Play"])
          },
          claim: e => {
            let {
              normalize: r
            } = e;
            return r(["Claim"])
          },
          claimed: e => {
            let {
              normalize: r
            } = e;
            return r(["Claimed"])
          },
          collect_invite: e => {
            let {
              normalize: r,
              interpolate: t,
              named: n
            } = e;
            return r(["Collect ", t(n("coins")), " for 1 invited friend"])
          },
          collect_invite_many: e => {
            let {
              normalize: r,
              interpolate: t,
              named: n
            } = e;
            return r(["Collect ", t(n("coins")), " for ", t(n("friends")), " invited friends"])
          },
          collect_invite_widget: e => {
            let {
              normalize: r,
              interpolate: t,
              named: n
            } = e;
            return r(["Collect ", t(n("coins")), " for 1 invitation"])
          },
          collect_invite_widget_many: e => {
            let {
              normalize: r,
              interpolate: t,
              named: n
            } = e;
            return r(["Collect ", t(n("coins")), " for ", t(n("friends")), " for invitations"])
          },
          error_title: e => {
            let {
              normalize: r
            } = e;
            return r(["There was an issue loading the tasks"])
          },
          error_button: e => {
            let {
              normalize: r
            } = e;
            return r(["Reload"])
          },
          title: e => {
            let {
              normalize: r
            } = e;
            return r(["Daily Missions"])
          }
        },
        seo: {
          show_full: e => {
            let {
              normalize: r
            } = e;
            return r(["Show all description"])
          },
          gameplay_video: e => {
            let {
              normalize: r
            } = e;
            return r(["Video"])
          }
        },
        promoCategories: {
          title: e => {
            let {
              normalize: r
            } = e;
            return r(["Free Online Games at Playgama"])
          },
          text: e => {
            let {
              normalize: r
            } = e;
            return r(["Playgama features the latest and best free online games. You can enjoy playing fun games without interruptions from downloads, intrusive ads, or pop-ups. Just load up your favorite games instantly in your web browser and enjoy the experience."])
          },
          img_alt: e => {
            let {
              normalize: r
            } = e;
            return r(["Fennek"])
          }
        },
        userAndBalance: {
          my_balance: e => {
            let {
              normalize: r
            } = e;
            return r(["My balance"])
          },
          gamer: e => {
            let {
              normalize: r
            } = e;
            return r(["Gamer"])
          }
        },
        promoItems: {
          invite_btn: e => {
            let {
              normalize: r
            } = e;
            return r(["Invite friend"])
          },
          invite_alt: e => {
            let {
              normalize: r
            } = e;
            return r(["Invite friend"])
          },
          invite_desc: e => {
            let {
              normalize: r,
              interpolate: t,
              named: n
            } = e;
            return r(["Get ", t(n("bonus")), " coins for each friend you bring to Play and Earn"])
          },
          sign_in_btn: e => {
            let {
              normalize: r
            } = e;
            return r(["Login & Get"])
          },
          sign_in_alt: e => {
            let {
              normalize: r
            } = e;
            return r(["Login and Get coins"])
          },
          sign_in_desc: e => {
            let {
              normalize: r
            } = e;
            return r(["Sign in to enjoy great games, keep your progress safe, and stack up coins"])
          },
          sign_in_title: e => {
            let {
              normalize: r,
              interpolate: t,
              named: n
            } = e;
            return r([t(n("bonus")), " coins"])
          },
          buy_gold: e => {
            let {
              normalize: r
            } = e;
            return r(["Buy Gam"])
          },
          gold_label: e => {
            let {
              normalize: r
            } = e;
            return r(["Gam"])
          }
        },
        disabledAd: {
          title: e => {
            let {
              normalize: r
            } = e;
            return r(["Ad-free mode"])
          },
          subtitle: e => {
            let {
              normalize: r
            } = e;
            return r(["Enjoy all games without ads.<br>Rewarded in-game ads may still appear."])
          },
          subtitleExtend: e => {
            let {
              normalize: r
            } = e;
            return r(["Keep ads away. Extend your subscription<br>and enjoy seamless gaming."])
          },
          imgAlt: e => {
            let {
              normalize: r
            } = e;
            return r(["Image of Ad Disabled"])
          },
          duration: e => {
            let {
              normalize: r,
              interpolate: t,
              named: n,
              plural: a
            } = e;
            return a([r(["Active for ", t(n("count")), " day"]), r(["Active for ", t(n("count")), " days"])])
          },
          priceInGam: e => {
            let {
              normalize: r,
              interpolate: t,
              named: n
            } = e;
            return r(["for ", t(n("price")), " Gam"])
          },
          priceInUsd: e => {
            let {
              normalize: r,
              interpolate: t,
              named: n
            } = e;
            return r(["for $", t(n("price"))])
          },
          submit: e => {
            let {
              normalize: r
            } = e;
            return r(["Activate Ad-free mode"])
          }
        },
        noAdBadge: {
          tooltip: e => {
            let {
              normalize: r,
              interpolate: t,
              named: n,
              plural: a
            } = e;
            return a([r(["Ad-free experience active for ", t(n("count")), " day"]), r(["Ad-free experience active for ", t(n("count")), " days"])])
          },
          label: e => {
            let {
              normalize: r
            } = e;
            return r(["NO ADS"])
          },
          days: e => {
            let {
              normalize: r,
              interpolate: t,
              named: n,
              plural: a
            } = e;
            return a([r([t(n("count")), " day"]), r([t(n("count")), " days"])])
          }
        },
        noAdFinalScreen: {
          title: e => {
            let {
              normalize: r,
              interpolate: t,
              named: n,
              plural: a
            } = e;
            return a([r(["Enjoy ", t(n("count")), " day of uninterrupted<br>gameplay — no ads, no distractions."]), r(["Enjoy ", t(n("count")), " days of uninterrupted<br>gameplay — no ads, no distractions."])])
          },
          button: e => {
            let {
              normalize: r
            } = e;
            return r(["Play like Pro!"])
          }
        },
        modalSignIn: {
          title: e => {
            let {
              normalize: r
            } = e;
            return r(["Join us on Playgama"])
          },
          description: e => {
            let {
              normalize: r
            } = e;
            return r(["Sign in to enjoy great games, keep your progress safe, and stack up coins"])
          },
          alt: e => {
            let {
              normalize: r
            } = e;
            return r(["Join us on Playgama"])
          }
        },
        modalInvite: {
          title: e => {
            let {
              normalize: r
            } = e;
            return r(["Invite friends and get rewards"])
          },
          title_need_more_fenneks: e => {
            let {
              normalize: r,
              interpolate: t,
              named: n
            } = e;
            return r(["Oops! Not enough coins? Invite\xa0a\xa0friend and earn ", t(n("bonus"))])
          },
          description: e => {
            let {
              normalize: r
            } = e;
            return r(["Share your unique link and earn Fennec Coins when friends join and play!"])
          },
          btn_label: e => {
            let {
              normalize: r
            } = e;
            return r(["Copy link"])
          },
          btn_label_copied: e => {
            let {
              normalize: r
            } = e;
            return r(["Link copied!"])
          },
          alt: e => {
            let {
              normalize: r
            } = e;
            return r(["Invite friends"])
          },
          fennek_alt: e => {
            let {
              normalize: r
            } = e;
            return r(["Fennek"])
          },
          step1: e => {
            let {
              normalize: r
            } = e;
            return r(["Share your link with friends"])
          },
          step2: e => {
            let {
              normalize: r
            } = e;
            return r(["Friends sign up and play"])
          },
          step3: e => {
            let {
              normalize: r
            } = e;
            return r(["You both earn Fennec Coins!"])
          },
          close: e => {
            let {
              normalize: r
            } = e;
            return r(["Close"])
          }
        },
        modalReportBug: {
          title: e => {
            let {
              normalize: r
            } = e;
            return r(["Report a problem"])
          },
          description: e => {
            let {
              normalize: r
            } = e;
            return r(["Please provide as much information as possible"])
          },
          close: e => {
            let {
              normalize: r
            } = e;
            return r(["Close"])
          },
          alt: e => {
            let {
              normalize: r
            } = e;
            return r(["Image of Bug"])
          }
        },
        modalSurvey: {
          description: e => {
            let {
              normalize: r
            } = e;
            return r(["Get your coins — just one question! Your feedback helps developers make things better."])
          },
          alt: e => {
            let {
              normalize: r
            } = e;
            return r(["Image of silver Fennek coin"])
          },
          like_game: e => {
            let {
              normalize: r
            } = e;
            return r(["Did you like the game?"])
          },
          like_game_answer1: e => {
            let {
              normalize: r
            } = e;
            return r(["Loved it"])
          },
          like_game_answer2: e => {
            let {
              normalize: r
            } = e;
            return r(["It was okay"])
          },
          like_game_answer3: e => {
            let {
              normalize: r
            } = e;
            return r(["Not really"])
          },
          recommend_game: e => {
            let {
              normalize: r
            } = e;
            return r(["Would you recommend it to a friend?"])
          },
          recommend_game_answer1: e => {
            let {
              normalize: r
            } = e;
            return r(["Definitely"])
          },
          recommend_game_answer2: e => {
            let {
              normalize: r
            } = e;
            return r(["Maybe"])
          },
          recommend_game_answer3: e => {
            let {
              normalize: r
            } = e;
            return r(["Probably not"])
          },
          game_problems: e => {
            let {
              normalize: r
            } = e;
            return r(["Did you run into any problems?"])
          },
          game_problems_answer1: e => {
            let {
              normalize: r
            } = e;
            return r(["Nope, all good"])
          },
          game_problems_answer2: e => {
            let {
              normalize: r
            } = e;
            return r(["Some minor bugs"])
          },
          game_problems_answer3: e => {
            let {
              normalize: r
            } = e;
            return r(["Yeah, had issues"])
          },
          how_long_play: e => {
            let {
              normalize: r
            } = e;
            return r(["How long did you play?"])
          },
          how_long_play_answer1: e => {
            let {
              normalize: r
            } = e;
            return r(["Less than 5 minutes"])
          },
          how_long_play_answer2: e => {
            let {
              normalize: r
            } = e;
            return r(["5–20 minutes"])
          },
          how_long_play_answer3: e => {
            let {
              normalize: r
            } = e;
            return r(["More than 20 minutes"])
          },
          game_graphic: e => {
            let {
              normalize: r
            } = e;
            return r(["How did you like the graphics?"])
          },
          game_graphic_answer1: e => {
            let {
              normalize: r
            } = e;
            return r(["Awesome"])
          },
          game_graphic_answer2: e => {
            let {
              normalize: r
            } = e;
            return r(["Decent"])
          },
          game_graphic_answer3: e => {
            let {
              normalize: r
            } = e;
            return r(["Not great"])
          }
        },
        contactForm: {
          message: e => {
            let {
              normalize: r
            } = e;
            return r(["Message"])
          },
          submit: e => {
            let {
              normalize: r
            } = e;
            return r(["Send"])
          },
          messageSent: e => {
            let {
              normalize: r
            } = e;
            return r(["Message was sent"])
          },
          error: e => {
            let {
              normalize: r
            } = e;
            return r(["Something went wrong"])
          },
          email: e => {
            let {
              normalize: r
            } = e;
            return r(["Email"])
          },
          agreementTextStart: e => {
            let {
              normalize: r
            } = e;
            return r(['By clicking "Send" I agree to the '])
          },
          agreementTextAnd: e => {
            let {
              normalize: r
            } = e;
            return r([" and the "])
          },
          termsOfUse: e => {
            let {
              normalize: r
            } = e;
            return r(["Terms of Use"])
          },
          agreementInformationAccurate: e => {
            let {
              normalize: r
            } = e;
            return r(['By clicking "Send", I confirm that the information and allegations contained therein are accurate and complete. Repeatedly falsely reporting illegal content may have serious consequences.'])
          }
        },
        navigation: {
          developers: e => {
            let {
              normalize: r
            } = e;
            return r(["Developers"])
          },
          about_us: e => {
            let {
              normalize: r
            } = e;
            return r(["About us"])
          },
          publishers: e => {
            let {
              normalize: r
            } = e;
            return r(["Become a partner"])
          },
          privacy_policy: e => {
            let {
              normalize: r
            } = e;
            return r(["Privacy Policy"])
          },
          contact_us: e => {
            let {
              normalize: r
            } = e;
            return r(["Contact us"])
          },
          takedown_notice: e => {
            let {
              normalize: r
            } = e;
            return r(["Takedown notice"])
          },
          terms_of_use: e => {
            let {
              normalize: r
            } = e;
            return r(["Terms of use"])
          },
          all_games: e => {
            let {
              normalize: r
            } = e;
            return r(["All categories"])
          },
          all_tags: e => {
            let {
              normalize: r
            } = e;
            return r(["All tags"])
          },
          all_series: e => {
            let {
              normalize: r
            } = e;
            return r(["All series"])
          },
          add_game: e => {
            let {
              normalize: r
            } = e;
            return r(["Add game"])
          },
          random: e => {
            let {
              normalize: r
            } = e;
            return r(["Random"])
          },
          blog: e => {
            let {
              normalize: r
            } = e;
            return r(["Blog"])
          },
          hiring: e => {
            let {
              normalize: r
            } = e;
            return r(["We are hiring"])
          },
          copyright: e => {
            let {
              normalize: r,
              interpolate: t,
              named: n
            } = e;
            return r(["\xa9 Playgama, ", t(n("year"))])
          },
          digital_service_act: e => {
            let {
              normalize: r
            } = e;
            return r(["Digital Service Act"])
          },
          android_app_link: e => {
            let {
              normalize: r
            } = e;
            return r(["Games on your Phone\xa0or\xa0Tablet"])
          }
        },
        logo: {
          alt: e => {
            let {
              normalize: r
            } = e;
            return r(["Playgama logo"])
          }
        },
        heroImage: {
          "fennek-butterfly": e => {
            let {
              normalize: r
            } = e;
            return r(["Fennek playing with a butterfly"])
          },
          "person-in-a-flower-field": e => {
            let {
              normalize: r
            } = e;
            return r(["Person in a flower-field"])
          },
          "ping-pong-rocket": e => {
            let {
              normalize: r
            } = e;
            return r(["Ping-pong rocket"])
          },
          "boring-docs-disk": e => {
            let {
              normalize: r
            } = e;
            return r(["Disk with caption: Boring docs"])
          },
          "gems-on-pillow": e => {
            let {
              normalize: r
            } = e;
            return r(["Gems on top of the pillow"])
          },
          "halved-apple": e => {
            let {
              normalize: r
            } = e;
            return r(["Halved apple"])
          }
        },
        headMeta: {
          title: e => {
            let {
              normalize: r
            } = e;
            return r(["Free Online Games Now on Playgama \uD83C\uDFAE Play NOW!"])
          },
          slogan: e => {
            let {
              normalize: r
            } = e;
            return r(["Free Games Online"])
          },
          alt_image: e => {
            let {
              normalize: r
            } = e;
            return r(["Free Games Online"])
          },
          description: e => {
            let {
              normalize: r
            } = e;
            return r(["Dive into the best online games at Playgama! \uD83C\uDFAE Play anytime, anywhere — on desktop, mobile, or even that forgotten tablet!\uD83D\uDD79️ Your next favorite game is just a click away."])
          }
        },
        mobileHeader: {
          all_games: e => {
            let {
              normalize: r
            } = e;
            return r(["All games"])
          },
          login: e => {
            let {
              normalize: r
            } = e;
            return r(["Login"])
          },
          close: e => {
            let {
              normalize: r
            } = e;
            return r(["Close"])
          }
        },
        theEnd: {
          random_game: e => {
            let {
              normalize: r
            } = e;
            return r(["Random game"])
          }
        },
        errorContent: {
          "404_imgAlt": e => {
            let {
              normalize: r
            } = e;
            return r(["Error not found"])
          },
          "404_title": e => {
            let {
              normalize: r
            } = e;
            return r(["Level not found"])
          },
          "404_text": e => {
            let {
              normalize: r
            } = e;
            return r(["Sorry, the page you requested does not exist on this site"])
          },
          "404_back": e => {
            let {
              normalize: r
            } = e;
            return r(["Back to home"])
          },
          "404_randomGame": e => {
            let {
              normalize: r
            } = e;
            return r(["Random game"])
          },
          "500_imgAlt": e => {
            let {
              normalize: r
            } = e;
            return r(["Error something went wrong"])
          },
          "500_title": e => {
            let {
              normalize: r
            } = e;
            return r(["Something went wrong"])
          },
          "500_text": e => {
            let {
              normalize: r
            } = e;
            return r(["Try reloading page. We're working hard to fix it for you as soon as possible"])
          },
          "500_reload": e => {
            let {
              normalize: r
            } = e;
            return r(["Reload page"])
          },
          "500_back": e => {
            let {
              normalize: r
            } = e;
            return r(["Back to home"])
          }
        },
        rewards: {
          title: e => {
            let {
              normalize: r
            } = e;
            return r(["Rewards"])
          },
          availability_low: e => {
            let {
              normalize: r
            } = e;
            return r(["Low"])
          },
          availability_medium: e => {
            let {
              normalize: r
            } = e;
            return r(["Limited"])
          },
          availability_high: e => {
            let {
              normalize: r
            } = e;
            return r(["Available"])
          },
          purchase_dialog_title: e => {
            let {
              normalize: r
            } = e;
            return r(["Trade your Silver coins for Gam"])
          },
          purchase_dialog_description: e => {
            let {
              normalize: r
            } = e;
            return r(["Trade your Silver coins for Gam to spend them in-game on all kinds of cool extras\xa0—\xa0like boosters, power-ups, skins, and other fun upgrades!"])
          },
          purchase_dialog_success: e => {
            let {
              normalize: r
            } = e;
            return r(["Awesome! We'll get in touch within\xa072\xa0hours"])
          },
          purchase_dialog_success_button: e => {
            let {
              normalize: r
            } = e;
            return r(["Keep Grinding"])
          },
          purchase_dialog_error: e => {
            let {
              normalize: r
            } = e;
            return r(["Oops, try again"])
          },
          purchase_dialog_close: e => {
            let {
              normalize: r
            } = e;
            return r(["Close"])
          },
          purchase_dialog_email: e => {
            let {
              normalize: r
            } = e;
            return r(["Email"])
          },
          purchase_dialog_unknown_country: e => {
            let {
              normalize: r
            } = e;
            return r(["Unknown"])
          }
        },
        desktopHeader: {
          noAds: e => {
            let {
              normalize: r
            } = e;
            return r(["No Ads"])
          }
        },
        modalCategories: {
          add_game: e => {
            let {
              normalize: r
            } = e;
            return r(["Add game"])
          },
          random: e => {
            let {
              normalize: r
            } = e;
            return r(["Random"])
          }
        },
        widgetGame: {
          powered_by: e => {
            let {
              normalize: r
            } = e;
            return r(["Powered by"])
          },
          close: e => {
            let {
              normalize: r
            } = e;
            return r(["Close"])
          }
        },
        gameDetails: {
          platforms: e => {
            let {
              normalize: r
            } = e;
            return r(["Platforms"])
          },
          developer: e => {
            let {
              normalize: r
            } = e;
            return r(["Developer"])
          },
          categories: e => {
            let {
              normalize: r
            } = e;
            return r(["Categories"])
          },
          tags: e => {
            let {
              normalize: r
            } = e;
            return r(["Tags"])
          },
          series: e => {
            let {
              normalize: r
            } = e;
            return r(["Series"])
          },
          androidButton: e => {
            let {
              normalize: r
            } = e;
            return r(["Get the App"])
          },
          releaseDate: e => {
            let {
              normalize: r
            } = e;
            return r(["Release date"])
          },
          orientation: e => {
            let {
              normalize: r
            } = e;
            return r(["Game Orientation"])
          },
          lastUpdated: e => {
            let {
              normalize: r
            } = e;
            return r(["Last Update"])
          },
          engine: e => {
            let {
              normalize: r
            } = e;
            return r(["Game Engine"])
          },
          showFullDesc: e => {
            let {
              normalize: r
            } = e;
            return r(["Show all description"])
          },
          installDesktop: e => {
            let {
              normalize: r
            } = e;
            return r(["Add to Desktop"])
          },
          installMobile: e => {
            let {
              normalize: r
            } = e;
            return r(["Add to Home"])
          }
        },
        orientationLabel: {
          verticalOrientation: e => {
            let {
              normalize: r
            } = e;
            return r(["Portrait"])
          },
          horizontalOrientation: e => {
            let {
              normalize: r
            } = e;
            return r(["Landscape"])
          }
        },
        rotateMessage: {
          rotate: e => {
            let {
              normalize: r
            } = e;
            return r(["Rotate phone"])
          },
          message: e => {
            let {
              normalize: r,
              interpolate: t,
              named: n
            } = e;
            return r(["The game supports only ", t(n("orientation")), " orientation"])
          }
        },
        stars: {
          votes: e => {
            let {
              normalize: r,
              interpolate: t,
              named: n,
              plural: a
            } = e;
            return a([r([t(n("count")), " vote"]), r([t(n("count")), " votes"])])
          }
        },
        userProfile: {
          page_title: e => {
            let {
              normalize: r
            } = e;
            return r(["Game room"])
          },
          logout: e => {
            let {
              normalize: r
            } = e;
            return r(["Logout"])
          },
          silver_balance_label: e => {
            let {
              normalize: r
            } = e;
            return r(["Silver"])
          },
          gold_balance_label: e => {
            let {
              normalize: r
            } = e;
            return r(["Gam"])
          },
          buy_coins: e => {
            let {
              normalize: r
            } = e;
            return r(["Buy Gam"])
          },
          page_title_non_auth: e => {
            let {
              normalize: r
            } = e;
            return r(["Unlock the Awesome"])
          },
          page_description_non_auth: e => {
            let {
              normalize: r
            } = e;
            return r(["Log in to unlock a world of awesome tasks and super-cool stuff you can grab with your coins. Play, explore, and enjoy every moment!"])
          }
        },
        contactUs: {
          metaTitle: e => {
            let {
              normalize: r,
              plural: t
            } = e;
            return t([r(["Contact Us"]), r(["Playgama"])])
          },
          metaDescription: e => {
            let {
              normalize: r
            } = e;
            return r(["Get in touch with the Playgama team for any inquiries, support, or feedback. We're here to help!"])
          },
          title: e => {
            let {
              normalize: r
            } = e;
            return r(["Contact us"])
          },
          cta: e => {
            let {
              normalize: r
            } = e;
            return r(["Ask a question"])
          },
          ctaSubtitle: e => {
            let {
              normalize: r
            } = e;
            return r(["Please provide as much information as possible"])
          }
        },
        socials: {
          developers: e => {
            let {
              normalize: r
            } = e;
            return r(["Developers"])
          },
          email: e => {
            let {
              normalize: r
            } = e;
            return r(["Email"])
          },
          support: e => {
            let {
              normalize: r
            } = e;
            return r(["Support"])
          },
          social: e => {
            let {
              normalize: r
            } = e;
            return r(["Social"])
          },
          media: e => {
            let {
              normalize: r
            } = e;
            return r(["Media"])
          },
          playgamaForDevs: e => {
            let {
              normalize: r
            } = e;
            return r(["Playgama for Devs"])
          }
        },
        game: {
          main_title: e => {
            let {
              normalize: r
            } = e;
            return r(["Playgama"])
          },
          related: e => {
            let {
              normalize: r
            } = e;
            return r(["Related"])
          },
          top_playgama: e => {
            let {
              normalize: r
            } = e;
            return r(["Spotlight"])
          },
          recommended: e => {
            let {
              normalize: r
            } = e;
            return r(["Recommended"])
          },
          random: e => {
            let {
              normalize: r
            } = e;
            return r(["Random"])
          }
        },
        gameContainer: {
          play: e => {
            let {
              normalize: r
            } = e;
            return r(["Play now"])
          },
          install: e => {
            let {
              normalize: r
            } = e;
            return r(["Install"])
          },
          init_button: e => {
            let {
              normalize: r
            } = e;
            return r(["Let's Play!"])
          },
          playNoAuth: e => {
            let {
              normalize: r
            } = e;
            return r(["Play now"])
          },
          playAndEarn: e => {
            let {
              normalize: r
            } = e;
            return r(["Play & Earn"])
          },
          continuePlay: e => {
            let {
              normalize: r
            } = e;
            return r(["Continue play"])
          },
          like: e => {
            let {
              normalize: r
            } = e;
            return r(["Like"])
          },
          dislike: e => {
            let {
              normalize: r
            } = e;
            return r(["Dislike"])
          },
          share: e => {
            let {
              normalize: r
            } = e;
            return r(["Share"])
          },
          link_copied: e => {
            let {
              normalize: r
            } = e;
            return r(["Link copied!"])
          },
          report: e => {
            let {
              normalize: r
            } = e;
            return r(["Report"])
          },
          fullscreen: e => {
            let {
              normalize: r
            } = e;
            return r(["Fullscreen"])
          },
          exit_fullscreen: e => {
            let {
              normalize: r
            } = e;
            return r(["Exit game"])
          },
          limitedAvailability1: e => {
            let {
              normalize: r,
              interpolate: t,
              named: n
            } = e;
            return r(["Available only on ", t(n("platform"))])
          },
          limitedAvailabilityMany: e => {
            let {
              normalize: r,
              interpolate: t,
              named: n
            } = e;
            return r(["Available only on ", t(n("platforms")), " and\xa0", t(n("lastPlatform"))])
          },
          desktop: e => {
            let {
              normalize: r
            } = e;
            return r(["PC"])
          },
          android: e => {
            let {
              normalize: r
            } = e;
            return r(["Android"])
          },
          ios: e => {
            let {
              normalize: r
            } = e;
            return r(["iOS"])
          },
          noAds: e => {
            let {
              normalize: r
            } = e;
            return r(["Turn off Ad"])
          }
        },
        gameCard: {
          inGame: e => {
            let {
              normalize: r
            } = e;
            return r(["In-Game"])
          },
          inGameTooltip: e => {
            let {
              normalize: r
            } = e;
            return r(["In-game purchases available.<br>You can buy items using Gam."])
          }
        },
        headMetaGame: {
          title: e => {
            let {
              normalize: r,
              interpolate: t,
              named: n
            } = e;
            return r([t(n("title")), " — play on \uD835\uDC0F\uD835\uDC25\uD835\uDC1A\uD835\uDC32\uD835\uDC20\uD835\uDC1A\uD835\uDC26\uD835\uDC1A"])
          },
          developer: e => {
            let {
              normalize: r,
              interpolate: t,
              named: n
            } = e;
            return r(["(by ", t(n("developer")), ")"])
          },
          alt_image: e => {
            let {
              normalize: r,
              interpolate: t,
              named: n
            } = e;
            return r(["Preview game ", t(n("title"))])
          },
          description: e => {
            let {
              normalize: r,
              interpolate: t,
              named: n
            } = e;
            return r(["Experience the thrill of ", t(n("title")), " online game unblocked on Playgama! \uD83C\uDFAE Enjoy a seamless, no-download, no-registration gaming adventure on desktop, tablet, and mobile. \uD83D\uDE80 Play ", t(n("title")), " online today and discover why it's a favorite among gamers worldwide. \uD83C\uDF0D"])
          }
        },
        categoryPage: {
          page: e => {
            let {
              normalize: r,
              interpolate: t,
              named: n
            } = e;
            return r(["page ", t(n("page"))])
          },
          main_title: e => {
            let {
              normalize: r
            } = e;
            return r(["Playgama"])
          },
          total: e => {
            let {
              normalize: r,
              interpolate: t,
              named: n
            } = e;
            return r(["[", t(n("total")), " games]"])
          },
          title: e => {
            let {
              normalize: r,
              interpolate: t,
              named: n
            } = e;
            return r([t(n("title")), " Online for Free \uD83D\uDD25\uD83C\uDFAE Play Now"])
          },
          description: e => {
            let {
              normalize: r,
              interpolate: t,
              named: n
            } = e;
            return r(["Dive into the best ", t(n("title")), " on Playgama! ", t(n("title")), " online for free \uD83D\uDD25 and experience an amazing ", t(n("title")), " adventure. No downloads or sign-ups required – play on any device! \uD83C\uDF89"])
          },
          tags_title: e => {
            let {
              normalize: r,
              interpolate: t,
              named: n
            } = e;
            return r([t(n("title")), " Online for Free \uD83D\uDD25\uD83C\uDFAE Play Now"])
          },
          tags_description: e => {
            let {
              normalize: r,
              interpolate: t,
              named: n
            } = e;
            return r(["Dive into the best ", t(n("title")), " on Playgama! ", t(n("title")), " online for free \uD83D\uDD25 and experience an amazing ", t(n("title")), " adventure. No downloads or sign-ups required – play on any device! \uD83C\uDF89"])
          },
          series_title: e => {
            let {
              normalize: r,
              interpolate: t,
              named: n
            } = e;
            return r([t(n("title")), " Online for Free \uD83D\uDD25\uD83C\uDFAE Play Now"])
          },
          series_description: e => {
            let {
              normalize: r,
              interpolate: t,
              named: n
            } = e;
            return r(["Join the epic ", t(n("title")), " series online for free \uD83D\uDD25 and explore the amazing ", t(n("title")), " universe. No downloads or sign-ups required – play on any device! \uD83D\uDE80"])
          }
        },
        staticPage: {
          privacyMetaTitle: e => {
            let {
              normalize: r,
              plural: t
            } = e;
            return t([r(["Privacy Policy"]), r(["Playgama"])])
          },
          privacyMetaDescription: e => {
            let {
              normalize: r
            } = e;
            return r(["Learn about Playgama's commitment to protecting your privacy and personal information. Read our privacy policy."])
          },
          termsOfUseMetaTitle: e => {
            let {
              normalize: r,
              plural: t
            } = e;
            return t([r(["Terms of Use"]), r(["Playgama"])])
          },
          termsOfUsDescription: e => {
            let {
              normalize: r
            } = e;
            return r(["Review the terms and conditions for using Playgama's services. Understand your rights and responsibilities."])
          },
          licenseMetaTitle: e => {
            let {
              normalize: r,
              plural: t
            } = e;
            return t([r(["License Agreement"]), r(["Playgama"])])
          },
          licenseMetaDescription: e => {
            let {
              normalize: r
            } = e;
            return r(["Read the license agreement for using Playgama's games and services. Ensure compliance and understanding."])
          },
          takedownNoticeTitle: e => {
            let {
              normalize: r,
              plural: t
            } = e;
            return t([r(["Takedown Notice"]), r(["Playgama"])])
          },
          takedownNoticeDescription: e => {
            let {
              normalize: r
            } = e;
            return r(["Learn about Playgama's commitment to fostering secure, transparent and legally compliant environment for all our developers, users and partners."])
          },
          digitalServiceAсtMetaTitle: e => {
            let {
              normalize: r
            } = e;
            return r(["Digital Service Act"])
          },
          digitalServiceAсtMetaDescription: e => {
            let {
              normalize: r
            } = e;
            return r(["Digital Service Act"])
          }
        },
        gamesCategories: {
          category_page_title: e => {
            let {
              normalize: r
            } = e;
            return r(["Games categories"])
          },
          tags_page_title: e => {
            let {
              normalize: r
            } = e;
            return r(["Game Tags"])
          },
          series_page_title: e => {
            let {
              normalize: r
            } = e;
            return r(["Game Series"])
          },
          category_page_description: e => {
            let {
              normalize: r
            } = e;
            return r(["Welcome to Playgama's “All Categories” page, where you'll find a vast array of game genres! Whether you're into action-packed shooters, strategic role-playing games, or immersive simulations, we have something for everyone. Our games are engaging, easy to pick up, and offer a rich variety of styles and narratives. Each category offers its own unique entertainment experience, featuring a carefully curated collection of games just for you. You're sure to discover new and exciting games to enjoy!"])
          },
          tags_page_description: e => {
            let {
              normalize: r
            } = e;
            return r(["Welcome to the “Game Tags” page! Here, you'll find titles sorted by key features and unique traits, making it simple to uncover games that perfectly match your preferences. Our tag system helps you filter out what you don't need and quickly zero in on what truly excites you. Whether you're eager to try something completely fresh or dive deeper into familiar genres, there's a tag for everyone. Explore a world where each of your interests is highlighted by a dedicated tag and start your ideal gaming adventure!"])
          },
          series_page_description: e => {
            let {
              normalize: r
            } = e;
            return r(["Welcome to the “Game Series” page! Here, you'll discover renowned franchises and sagas that have captured the hearts of countless gamers worldwide. Each series offers its own distinctive atmosphere, unforgettable characters, and captivating storylines that evolve with every installment. Curious to revisit every chapter of a legendary saga or step into a new universe where each game builds on a single narrative? We've compiled top series that cater to both newcomers and seasoned players. Immerse yourself in familiar worlds or embark on uncharted journeys—the choice is all yours!"])
          },
          category_meta_title: e => {
            let {
              normalize: r,
              plural: t
            } = e;
            return t([r(["All Game Categories \uD83C\uDFAE \uD83D\uDE80 - Play Free Online Games!"]), r(["Playgama"])])
          },
          category_meta_description: e => {
            let {
              normalize: r
            } = e;
            return r(["Explore all game categories on Playgama! \uD83D\uDE80 Play endless free online games instantly on any device. No downloads or sign-up needed. Start playing now!"])
          },
          tags_meta_title: e => {
            let {
              normalize: r
            } = e;
            return r(["Game Tags \uD83C\uDFF7️ – Play Free Online Games on Mobile & Desktop"])
          },
          series_meta_title: e => {
            let {
              normalize: r
            } = e;
            return r(["Game Series \uD83D\uDE80 – Play Free Online Adventures on Mobile & Desktop"])
          },
          tags_meta_description: e => {
            let {
              normalize: r
            } = e;
            return r(["Explore a diverse selection of titles sorted by unique tags and key features \uD83C\uDFAE. Enjoy free games you can play online on both mobile and desktop! \uD83C\uDF10"])
          },
          series_meta_description: e => {
            let {
              normalize: r
            } = e;
            return r(["Dive into legendary franchises and epic sagas \uD83C\uDF1F. Discover free titles to play online on both mobile and desktop, featuring unforgettable stories and characters! \uD83C\uDF89"])
          }
        },
        invite: {
          invitedBy: e => {
            let {
              normalize: r,
              interpolate: t,
              named: n
            } = e;
            return r([t(n("name")), "<br>invites you to join Playgama"])
          },
          invited: e => {
            let {
              normalize: r
            } = e;
            return r(["You were invited to join Playgama"])
          },
          subtitle: e => {
            let {
              normalize: r,
              interpolate: t,
              named: n
            } = e;
            return r(["Join Playgama to grab your first ", t(n("bonus")), " coins and start playing to earn real rewards!"])
          }
        },
        "toast-pwa": {
          title: e => {
            let {
              normalize: r
            } = e;
            return r(["Play in fullscreen"])
          },
          description: e => {
            let {
              normalize: r
            } = e;
            return r(["Add Playgama to Home Screen"])
          },
          "description-safari-desktop": e => {
            let {
              normalize: r
            } = e;
            return r(["Add Playgama to Dock"])
          },
          button_text: e => {
            let {
              normalize: r
            } = e;
            return r(["Install Playgama"])
          }
        },
        paymentModal: {
          title: e => {
            let {
              normalize: r
            } = e;
            return r(["Choose amount"])
          },
          description: e => {
            let {
              normalize: r,
              interpolate: t,
              named: n
            } = e;
            return r(["Minimum amount: ", t(n("amount"))])
          },
          purchaseButton: e => {
            let {
              normalize: r
            } = e;
            return r(["Confirm"])
          },
          balanceLabel: e => {
            let {
              normalize: r
            } = e;
            return r(["My balance"])
          },
          buyGam: e => {
            let {
              normalize: r,
              interpolate: t,
              named: n
            } = e;
            return r(["Buy ", t(n("amount")), " Gam"])
          },
          paymentExplanation: e => {
            let {
              normalize: r,
              interpolate: t,
              named: n
            } = e;
            return r([t(n("balance")), " Gam will be covered by your balance. Just top up the rest to complete your purchase."])
          },
          orderHeader: e => {
            let {
              normalize: r,
              interpolate: t,
              named: n
            } = e;
            return r(["Your purchase in ", t(n("game")), " for ", t(n("amount")), " Gam"])
          },
          orderHeaderDescription: e => {
            let {
              normalize: r,
              interpolate: t,
              named: n
            } = e;
            return r(["Your purchase ", t(n("description")), " for ", t(n("amount")), " Gam"])
          }
        },
        modalCoinDescription: {
          buy_coins: e => {
            let {
              normalize: r
            } = e;
            return r(["Buy Gam"])
          },
          alt: e => {
            let {
              normalize: r
            } = e;
            return r(["Buy Gam"])
          },
          title: e => {
            let {
              normalize: r
            } = e;
            return r(["Gam is the internal currency of Playgama.com"])
          },
          description: e => {
            let {
              normalize: r
            } = e;
            return r(["Use it to pay for in-game purchases like extra lives, rare assets, ad-free features, and much more—all in just a few clicks!"])
          }
        },
        instreamWrapper: {
          info: e => {
            let {
              normalize: r
            } = e;
            return r(["Your game is about to continue!"])
          },
          infoShort: e => {
            let {
              normalize: r
            } = e;
            return r(["Coming soon"])
          },
          ad: e => {
            let {
              normalize: r
            } = e;
            return r(["Playing Ad"])
          },
          sec: e => {
            let {
              normalize: r
            } = e;
            return r(["sec"])
          },
          adCounter: e => {
            let {
              normalize: r,
              interpolate: t,
              named: n
            } = e;
            return r(["Playing Ad ", t(n("current")), " of ", t(n("total"))])
          }
        },
        desktopStickyBanner: {
          closeButtonLabel: e => {
            let {
              normalize: r
            } = e;
            return r(["Close ad"])
          }
        },
        myGames: {
          title: e => {
            let {
              normalize: r
            } = e;
            return r(["My Games"])
          },
          emptyAlt: e => {
            let {
              normalize: r
            } = e;
            return r(["Ghost Img"])
          },
          emptyTitle: e => {
            let {
              normalize: r
            } = e;
            return r(["Nothing here yet"])
          },
          emptyDescription: e => {
            let {
              normalize: r
            } = e;
            return r(["You haven't played any games yet. Once you start, the games you've played will show up here so you can jump back in anytime!"])
          },
          waitingTitle: e => {
            let {
              normalize: r
            } = e;
            return r(["Please, wait"])
          },
          waitingDescription: e => {
            let {
              normalize: r
            } = e;
            return r(["We are collecting your data..."])
          }
        },
        promos: {
          descriptionAddGame: e => {
            let {
              normalize: r
            } = e;
            return r(["Publish your game<br>with Playgama"])
          },
          altFirstPromo: e => {
            let {
              normalize: r
            } = e;
            return r(["Image of cross"])
          },
          descriptionReach: e => {
            let {
              normalize: r
            } = e;
            return r(["Reach 300M+ players<br>worldwide"])
          },
          altSecondPromo: e => {
            let {
              normalize: r
            } = e;
            return r(["Image of eyes"])
          },
          descriptionPublish: e => {
            let {
              normalize: r
            } = e;
            return r(["From Facebook and MSN to Telegram<br>— we've got the platforms"])
          },
          altThirdPromo: e => {
            let {
              normalize: r
            } = e;
            return r(["Image of star"])
          },
          descriptionPlayGame: e => {
            let {
              normalize: r
            } = e;
            return r(["Play free online games<br>instantly on Playgama"])
          },
          descriptionDownload: e => {
            let {
              normalize: r
            } = e;
            return r(["No download needed —<br>just your browser"])
          },
          descriptionEnjoyGame: e => {
            let {
              normalize: r
            } = e;
            return r(["Enjoy top web games<br>on mobile, tablet, and desktop"])
          }
        },
        brandPreloader: {
          reward: e => {
            let {
              normalize: r
            } = e;
            return r(["Oops! No ads available right now"])
          },
          adSkipped: e => {
            let {
              normalize: r
            } = e;
            return r(["We skipped the ad this time - enjoy the game!"])
          },
          continuePlaying: e => {
            let {
              normalize: r
            } = e;
            return r(["Continue playing"])
          }
        },
        tiles: {
          add_games: e => {
            let {
              normalize: r
            } = e;
            return r(["Developers"])
          },
          publishers: e => {
            let {
              normalize: r
            } = e;
            return r(["Partners"])
          },
          contacts: e => {
            let {
              normalize: r
            } = e;
            return r(["Contacts"])
          },
          legal: e => {
            let {
              normalize: r
            } = e;
            return r(["Legal"])
          },
          close: e => {
            let {
              normalize: r
            } = e;
            return r(["Close"])
          },
          more: e => {
            let {
              normalize: r
            } = e;
            return r(["More"])
          }
        },
        search: {
          placeholder: e => {
            let {
              normalize: r
            } = e;
            return r(["Search"])
          },
          empty_desc: e => {
            let {
              normalize: r
            } = e;
            return r(["Try a different keyword or jump into one of these awesome games while you're here."])
          },
          empty_title: e => {
            let {
              normalize: r
            } = e;
            return r(["No results found — yet!"])
          },
          recent_games: e => {
            let {
              normalize: r
            } = e;
            return r(["Recently played"])
          },
          top_games: e => {
            let {
              normalize: r
            } = e;
            return r(["Top Games"])
          }
        }
      }
    }
  }
]);
//# sourceMappingURL=588.f1a93c37.js.map