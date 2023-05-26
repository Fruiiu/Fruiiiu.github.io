// JavaScript source code
/*
 * 
 * this file contains all the image data needed as an array,
 * Objects are referenced, so changng one via reference will change all others
 * 
 * append to the beggining of html (or just before all other scripts that use data)
 * otherwise reference errors will appear
 * 
 * for imae acess: set to public in drive then copy the last bit of jibberish into id attribute
*/

/*=========================| DATA |========================= */

//images (add new works here)----------------------------------------------------------------------------
const allImgs = [
    {
        //
        //google access
        id: "1WOtwH_vvM7GcPbivzEhCsnqx10dd6U93",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/70e6eef6b34ea19196cb9945b35f9e9b/c474d226b888a936-7b/s100x200/b5d6b713af95abee5d5bff3e06e3ab55b3cc11ea.gifv 100w, https://64.media.tumblr.com/70e6eef6b34ea19196cb9945b35f9e9b/c474d226b888a936-7b/s250x400/49ee86a028aea30490fe391f7b90c9f9d2d5dc01.gifv 250w, https://64.media.tumblr.com/70e6eef6b34ea19196cb9945b35f9e9b/c474d226b888a936-7b/s400x600/add0dab6b44d38d271269e783a1ce2d4c747e08d.gifv 400w, https://64.media.tumblr.com/70e6eef6b34ea19196cb9945b35f9e9b/c474d226b888a936-7b/s500x750/46ae93e28be2d28369093c97f5e9ac4f048d98ba.gifv 500w, https://64.media.tumblr.com/70e6eef6b34ea19196cb9945b35f9e9b/c474d226b888a936-7b/s540x810/85ab9ac10f503d679fd645f1f0f6456ab40446c7.gifv 540w, https://64.media.tumblr.com/70e6eef6b34ea19196cb9945b35f9e9b/c474d226b888a936-7b/s640x960/5ecbd60b43da74053f63ceb1de9810e92754e5d1.gifv 640w, https://64.media.tumblr.com/70e6eef6b34ea19196cb9945b35f9e9b/c474d226b888a936-7b/s1280x1920/b339ecdc96ae54b10f371d09b58d0b345cf625e4.gifv 1280w, https://64.media.tumblr.com/70e6eef6b34ea19196cb9945b35f9e9b/c474d226b888a936-7b/s2048x3072/d0b865e3eb951eb207c901d2e6e1618e586d6060.gifv 2048w", 

        //portfolio and gallery settings
        name: "Snom Animation",
        descrip: "Snom animation from pokemon, first 'image' uploaded to the allImgs list. Snom says if you see it in the modal with an irrelevant title its likely because the stack indecies were not specified. ",
        bg: "none",
        ratio: "4/3",

        //commision settings
        numChar: 1,
        finish: 2,
        size: 3,
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1gXelnxRhuADzOV4zztb_oZAJQFoiyWL2",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/a2a6f2a7db60361611849bd5a569fe9b/69c9f84d5251440a-37/s100x200/76ac559d1e41697d31876f2fc6a1caab0e9a3f15.jpg 100w, https://64.media.tumblr.com/a2a6f2a7db60361611849bd5a569fe9b/69c9f84d5251440a-37/s250x400/629908f85b552b8e190b1f18231e1eb665454fe0.jpg 250w, https://64.media.tumblr.com/a2a6f2a7db60361611849bd5a569fe9b/69c9f84d5251440a-37/s400x600/e02533de535dec30239bc59eccbd7100ff7e6ca7.jpg 400w, https://64.media.tumblr.com/a2a6f2a7db60361611849bd5a569fe9b/69c9f84d5251440a-37/s500x750/1fb6e1d4be87ca20116d1825e045506679532df0.jpg 500w, https://64.media.tumblr.com/a2a6f2a7db60361611849bd5a569fe9b/69c9f84d5251440a-37/s540x810/b0d532291812c5798da83b6845de683c3d6d89cd.jpg 540w, https://64.media.tumblr.com/a2a6f2a7db60361611849bd5a569fe9b/69c9f84d5251440a-37/s640x960/5caf06ecdb582efbf9220a9a2f6fea42fd5798c9.jpg 640w, https://64.media.tumblr.com/a2a6f2a7db60361611849bd5a569fe9b/69c9f84d5251440a-37/s1280x1920/964bda6a2a535f57d075ceb9543b6703ca1846fc.jpg 1000w",

        //portfolio and gallery settings
        name: "Cottage Girl",
        descrip: "Old profile drawing. I was experimenting with painting with no lineart in ibis paint, the first of its kind. ",
        bg: "none",
        ratio: "1/1",

        //commision settings
        numChar: 1,
        finish: 3, //[0, 4]
        size: 1,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1yPmend_N8NmPH7wH498BNj0tWanSmrxH",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/a797d57d45f21840c1942e89bd8ef5c3/69c9f84d5251440a-b3/s100x200/4b6c4d2591015c7be64d95f781f3ea18c3e326a1.pnj 100w, https://64.media.tumblr.com/a797d57d45f21840c1942e89bd8ef5c3/69c9f84d5251440a-b3/s250x400/5c633fab09d47e89dabf0a13afa3c497265b0575.pnj 250w, https://64.media.tumblr.com/a797d57d45f21840c1942e89bd8ef5c3/69c9f84d5251440a-b3/s400x600/1863e982e9eb08aad962dadfd3af730e8161ae81.pnj 400w, https://64.media.tumblr.com/a797d57d45f21840c1942e89bd8ef5c3/69c9f84d5251440a-b3/s500x750/c1e319a3cf34804a4b725e4667e4877b851115ce.pnj 500w, https://64.media.tumblr.com/a797d57d45f21840c1942e89bd8ef5c3/69c9f84d5251440a-b3/s540x810/493c453b9cdc8ddb9e4f59682feb829727c4a5d7.pnj 540w, https://64.media.tumblr.com/a797d57d45f21840c1942e89bd8ef5c3/69c9f84d5251440a-b3/s640x960/081e3a57262a7c77c01e3a3bf5c9d1c136a23456.pnj 640w, https://64.media.tumblr.com/a797d57d45f21840c1942e89bd8ef5c3/69c9f84d5251440a-b3/s1280x1920/33e9134eb7c0e4444c5dbe596dab830ad6ec4473.pnj 1000w",

        //gallery settings
        name: "Fancy Hair Girl",
        descrip: "",
        bg: "None",
        ratio: "1/1",

        //commision settings
        numChar: 1,
        finish: 3, //[0, 4]
        size: 1,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1N403pdaNJyNb-U0Ewi3gc1nGuo75kmT1",

       //tumblr stuff srcset:"", //gallery settings
        name: "Fish Hair Girl",
        descrip: "Tried the style with more organized hair. ",
        bg: "None",
        ratio: "1/1",

        //commision settings
        numChar: 1,
        finish: 3, //[0, 4]
        size: 1,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1R4zLRY4iUz3Re0K2CATB_OYFJn_SHlGp",

       //tumblr stuff srcset:"", //gallery settings
        name: "Story Girl",
        descrip: "Last of the art with this specific style. She was originally a character from one of my stories. ",
        bg: "None",
        ratio: "1/1",

        //commision settings
        numChar: 1,
        finish: 3, //[0, 4]
        size: 1,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1amZfY6i2BgyYfcXuwO4uEZfOTJeTHgon",
        //tumblr stuff 
        srcset: "",

        //portfolio and gallery settings
        name: "Sky",
        descrip: "Trying out a new style in ibis.",
        bg: "None",
        ratio: "352/423",

        //commision settings
        numChar: 1,
        finish: 2, //[0, 4]
        size: 2,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1BSq_NNlu3fxwHsBizjt5i5QFoJreNhpe",

        //tumblr stuff 
        srcset: "",

        //gallery settings
        name: "Goat?",
        descrip: "Tattoo is a png from the internet, forgot what it's called.",
        bg: "None",
        ratio: "25/31",

        //commision settings
        numChar: 1,
        finish: 3, //[0, 4]
        size: 2,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1HEl_hpCzXvoS6UXgVn8YEnNKniRnrP6P",

        //tumblr stuff 
        srcset: "",

        //gallery settings
        name: "Sunset",
        descrip: "Wanted to try a painterly style, used a lot of filters to get the blotchy effect.",
        bg: "None",
        ratio: "2/3",

        //commision settings
        numChar: 1,
        finish: 3, //[0, 4]
        size: 3,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1KbtH2u-WZaAlxaCbRP3xFCeKb7AMY5ty",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/c11bc3a702c3c6b90ba8699930f03b67/4ecaa13c6add3234-45/s100x200/fc7c9c9b4b5ad9e7c966f105b0e297719ab8a5ac.pnj 100w, https://64.media.tumblr.com/c11bc3a702c3c6b90ba8699930f03b67/4ecaa13c6add3234-45/s250x400/59e31e8c85d89f4b0381e88f7984c02700c61ff9.pnj 250w, https://64.media.tumblr.com/c11bc3a702c3c6b90ba8699930f03b67/4ecaa13c6add3234-45/s400x600/395caaa2bbcb336585e1b7eeca95b800c095868e.pnj 400w, https://64.media.tumblr.com/c11bc3a702c3c6b90ba8699930f03b67/4ecaa13c6add3234-45/s500x750/df54003641e0438625a5537df548a8be59923a78.pnj 500w, https://64.media.tumblr.com/c11bc3a702c3c6b90ba8699930f03b67/4ecaa13c6add3234-45/s540x810/d3bb559809e622ed7d7a4b2628af9b74f1071599.pnj 540w, https://64.media.tumblr.com/c11bc3a702c3c6b90ba8699930f03b67/4ecaa13c6add3234-45/s640x960/6dbdc0adeaaeb188574bfe23c6df4af8de50f630.pnj 640w, https://64.media.tumblr.com/c11bc3a702c3c6b90ba8699930f03b67/4ecaa13c6add3234-45/s1280x1920/5f0e8186afc4bca41aa5526a1e77c9757b5d1305.pnj 1244w",

        //gallery settings
        name: "Candy in a Glass",
        descrip: "Version after effects.",
        bg: "None",
        ratio: "1/1",

        //commision settings
        numChar: 1,
        finish: 3, //[0, 4]
        size: 3,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1h3098CjCWcqQ_uyGyreiadOtC0Fjylms",

        //tumblr stuff 
        srcset: "",

        //gallery settings
        name: "Saturn",
        descrip: "",
        bg: "None",
        ratio: "989/1051",

        //commision settings
        numChar: 1,
        finish: 2, //[0, 4]
        size: 2,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1FFYvnhbQojlX50IR7hOLMdJ-Ri52mUux",

        //tumblr stuff 
        srcset: "",

        //gallery settings
        name: "Neptune and Uranus",
        descrip: "Distinctly recall that this was done on the back of school work and thus had to be cleaned up. The beginning of this style of hair. ",
        bg: "None",
        ratio: "530/431",

        //commision settings
        numChar: 2,
        finish: 2, //[0, 4]
        size: 3,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1leFbHQ4KM0W-5nXjfGp1rDOPdAgZ_s8H",

        //tumblr stuff 
        srcset: "",

        //gallery settings
        name: "Jupiter",
        descrip: "Tried to represent the red dot with her eyes and added some of jupiter's moons.",
        bg: "None",
        ratio: "40/49",

        //commision settings
        numChar: 1,
        finish: 2, //[0, 4]
        size: 2,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1eHDNYl9wNcFI81CK4-cEOtA_bYEE-zcJ",

        //tumblr stuff 
        srcset: "",

        //gallery settings
        name: "Mercury",
        descrip: "The closest planet to the sun, one side is thouroughly roasted. ",
        bg: "None",
        ratio: "265/316",

        //commision settings
        numChar: 1,
        finish: 3, //[0, 4]
        size: 2,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1UYcT8BuOV9Vjar4JM9eh_V9Lco42EL0q",

        //tumblr stuff 
        srcset: "",

        //gallery settings
        name: "Venus",
        descrip: "A gassy planet, and very bright. ",
        bg: "None",
        ratio: "1/1",

        //commision settings
        numChar: 1,
        finish: 2, //[0, 4]
        size: 3,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1JB7DNboDvaJVpcKNs9SGnBqh69bffh1I",

        //tumblr stuff 
        srcset: "",

        //gallery settings
        name: "Sun",
        descrip: "She wears shades to prevent burning anyone with her light. ",
        bg: "None",
        ratio: "571/688",

        //commision settings
        numChar: 1,
        finish: 2, //[0, 4]
        size: 2,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1stoyzTUZWv64fEjz7xbHsZjaSzRxMuQr",

        //tumblr stuff 
        srcset: "",

        //gallery settings
        name: "Arachnid Spirit",
        descrip: "Look at her spider pals :)",
        bg: "None",
        ratio: "845/1376",

        //commision settings
        numChar: 1,
        finish: 1, //[0, 4]
        size: 3,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1vdAb4NqAGDWnsdq3wZjcutCGdvJ-pRir",

        //tumblr stuff 
        srcset: "",

        //gallery settings
        name: "Auto Colour",
        descrip: "Testing the auto color feature in ibis, it was fun. ",
        bg: "None",
        ratio: "987/1214",

        //commision settings
        numChar: 1,
        finish: 2, //[0, 4]
        size: 2,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "19TsT0HxmacpfvwFsLDK4016vd5UsyLf4",

        //tumblr stuff 
        srcset: "",

        //gallery settings
        name: "Bird Lady",
        descrip: "Why did I give her horns?",
        bg: "None",
        ratio: "775/1569",

        //commision settings
        numChar: 1,
        finish: 2, //[0, 4]
        size: 3,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1Mxv7RJYxbDrsJUlbdf1TQYiAsZN0eB1w",

        //tumblr stuff 
        srcset: "",

        //gallery settings
        name: "Insect Spirit",
        descrip: "Tried giving it three body segments, decided I did not want to draw legs. ",
        bg: "None",
        ratio: "464/581",

        //commision settings
        numChar: 1,
        finish: 2, //[0, 4]
        size: 3,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1yMNdsrxlO_UKbgGY1n4N-P4OiYbdnDaF",

        //tumblr stuff 
        srcset: "",

        //gallery settings
        name: "Boney and Cartilaginous Fish Spirits",
        descrip: "Anatomic accuracy sacrificed for visual appeal. ",
        bg: "None",
        ratio: "464/581",

        //commision settings
        numChar: 2,
        finish: 2, //[0, 4]
        size: 3,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1w4Seks9DE5tDURYkANohDEsgLmtYn63q",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/88654199b2bceb0cfe9f0a659e34288d/3ed36568af160091-80/s100x200/b9fa62a8474d01cfd3aa6fa6a8e428448ecaaed8.pnj 100w, https://64.media.tumblr.com/88654199b2bceb0cfe9f0a659e34288d/3ed36568af160091-80/s250x400/bfea7f909eca9a04b8a2716978baaa9c9dce1a80.pnj 250w, https://64.media.tumblr.com/88654199b2bceb0cfe9f0a659e34288d/3ed36568af160091-80/s400x600/fa6f4a3461684b975837e8c87d022dc8163b247e.pnj 400w, https://64.media.tumblr.com/88654199b2bceb0cfe9f0a659e34288d/3ed36568af160091-80/s500x750/07770888af1682c40d93d2b9b96e4302bce67abd.pnj 500w, https://64.media.tumblr.com/88654199b2bceb0cfe9f0a659e34288d/3ed36568af160091-80/s540x810/a192a3cc3a20c5963b8114cdea7eaf6efe26a741.pnj 540w, https://64.media.tumblr.com/88654199b2bceb0cfe9f0a659e34288d/3ed36568af160091-80/s640x960/d59d90b9d77dc72b87bb77fa6383e3dce88fe832.pnj 640w, https://64.media.tumblr.com/88654199b2bceb0cfe9f0a659e34288d/3ed36568af160091-80/s1280x1920/1b08e74c9a6dbff45ec6d7b1fb4f33239e813603.pnj 1280w, https://64.media.tumblr.com/88654199b2bceb0cfe9f0a659e34288d/3ed36568af160091-80/s2048x3072/2c9de81698cba415315f05dfa6de6671956a25b3.pnj 1427w",

        //gallery settings
        name: "Arctic Wolf",
        descrip: "Look who's found a funky tree portal into the spirit realm. Blessings to the friend that played this character. ",
        bg: "None",
        ratio: "1427/1091",

        //commision settings
        numChar: 1,
        finish: 4, //[0, 4]
        size: 3,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1N_zFe5P0XAMNZkGeh5XV_ZwulY_2X_lU",

        //tumblr stuff 
        srcset: "",

        //gallery settings
        name: "No Arms",
        descrip: "Ibis auto-colour again. Was too lazy to give her arms. ",
        bg: "None",
        ratio: "515/726",

        //commision settings
        numChar: 1,
        finish: 2, //[0, 4]
        size: 2,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "107ah1FZtOP_HHhgiHKsEd_Y_xuRlQYBG",

        //tumblr stuff 
        srcset: "",

        //gallery settings
        name: "No Arms Two",
        descrip: "Had fun with her hair. Ibis auto-color strikes again. ",
        bg: "None",
        ratio: "515/726",

        //commision settings
        numChar: 1,
        finish: 2, //[0, 4]
        size: 2,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "15fHgHw79E86wJ5_F4oJUQHc9huAIwlWY",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/831fb8c211af315a9a1af734e194eadc/69c9f84d5251440a-0b/s100x200/977535e7b1f8d88f49b83fd9a7f12b248deb02c0.pnj 100w, https://64.media.tumblr.com/831fb8c211af315a9a1af734e194eadc/69c9f84d5251440a-0b/s250x400/e604b40ba574e3f8aa93b175bea3c6f7088a5632.pnj 250w, https://64.media.tumblr.com/831fb8c211af315a9a1af734e194eadc/69c9f84d5251440a-0b/s400x600/b046962e4490db9af5bada592a98d7b79e6c5549.pnj 400w, https://64.media.tumblr.com/831fb8c211af315a9a1af734e194eadc/69c9f84d5251440a-0b/s500x750/8a9e6eb5c2bc878de4e5c697d0d8a40103f1bb9e.pnj 500w, https://64.media.tumblr.com/831fb8c211af315a9a1af734e194eadc/69c9f84d5251440a-0b/s540x810/5d6d45154e69fdb0548ca1395c5df6b8b4fd3cdd.pnj 540w, https://64.media.tumblr.com/831fb8c211af315a9a1af734e194eadc/69c9f84d5251440a-0b/s640x960/0ab7b6b37a249d8a0af8f84c90a2a76269e0c1da.pnj 640w, https://64.media.tumblr.com/831fb8c211af315a9a1af734e194eadc/69c9f84d5251440a-0b/s1280x1920/2a25e485f4d890e76d3f37fef95199a959a04bb3.pnj 1040w",

        //gallery settings
        name: "Swan",
        descrip: "I like her face.",
        bg: "None",
        ratio: "104/103",

        //commision settings
        numChar: 1,
        finish: 2, //[0, 4]
        size: 2,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1FBMyM2EEK4VjjUIlvZsVHcYKqCIiEguR",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/caede521ba95c3a7c8d761696719ad2f/c953260793ed48ee-00/s100x200/c9e9db8b409a154fc30c60d6a5b38e02052f88eb.pnj 100w, https://64.media.tumblr.com/caede521ba95c3a7c8d761696719ad2f/c953260793ed48ee-00/s250x400/95f8ed70f0a6d594b3bfc9b2dd812d4acb1a6ada.pnj 250w, https://64.media.tumblr.com/caede521ba95c3a7c8d761696719ad2f/c953260793ed48ee-00/s400x600/b67835dd17e8e4771b272ab46c60f69d64204c08.pnj 400w, https://64.media.tumblr.com/caede521ba95c3a7c8d761696719ad2f/c953260793ed48ee-00/s500x750/4b5ba486ac08ab5289943da5a4943eeada6d07eb.pnj 500w, https://64.media.tumblr.com/caede521ba95c3a7c8d761696719ad2f/c953260793ed48ee-00/s540x810/2f936a04f5ca0fceb3042ebb986684dd61964613.pnj 540w, https://64.media.tumblr.com/caede521ba95c3a7c8d761696719ad2f/c953260793ed48ee-00/s640x960/53f9706ba9dce3696c369fc22440e428c7c80e99.pnj 640w, https://64.media.tumblr.com/caede521ba95c3a7c8d761696719ad2f/c953260793ed48ee-00/s1280x1920/0d59ea69375185ed5f4b5e433351cfcb70f5e881.pnj 1280w, https://64.media.tumblr.com/caede521ba95c3a7c8d761696719ad2f/c953260793ed48ee-00/s2048x3072/f769aa9db23c0664c2ca26fdc3d6754a012274a1.pnj 2048w",

        //gallery settings
        name: "Gem Butt",
        descrip: "They are so precious I hope nothing bad happens to them. (Phos from <i>Houseki No Kuni<i/>)",
        bg: "None", //TODO make sure italics works
        ratio: "1/1",

        //commision settings
        numChar: 1,
        finish: 3, //[0, 4]
        size: 1,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1FD6cPMCzfwjYiUWGqcEqMFi0BVYqVJcw",

        //tumblr stuff 
        srcset: "",

        //gallery settings
        name: "Mermaid",
        descrip: "It might have been mermay, I don't remember anymore.",
        bg: "None",
        ratio: "1853/1846",

        //commision settings
        numChar: 1,
        finish: 3, //[0, 4]
        size: 3,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1aGHNZX3MkqF27vNqz3_t9KNutBmV4NhE",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/6149d9e27f5abd67b2fd6726e72ab033/c953260793ed48ee-53/s100x200/d03c024a85d32893740b4d71d55cad4cd2cb5b10.pnj 100w, https://64.media.tumblr.com/6149d9e27f5abd67b2fd6726e72ab033/c953260793ed48ee-53/s250x400/f7583ad21b3e3941173c60fb55eb695b23fab7ca.pnj 250w, https://64.media.tumblr.com/6149d9e27f5abd67b2fd6726e72ab033/c953260793ed48ee-53/s400x600/f4eb21446941fdf821a1347ee4512f70d0810a0d.pnj 400w, https://64.media.tumblr.com/6149d9e27f5abd67b2fd6726e72ab033/c953260793ed48ee-53/s500x750/de3f4033d86449130d8db55f33731f17962ac228.pnj 500w, https://64.media.tumblr.com/6149d9e27f5abd67b2fd6726e72ab033/c953260793ed48ee-53/s540x810/c393894ac837f14e5a01cf4ab9ca40fa38db73c6.pnj 540w, https://64.media.tumblr.com/6149d9e27f5abd67b2fd6726e72ab033/c953260793ed48ee-53/s640x960/ba4eb619600e143376ace21af34398b2a43e44fa.pnj 640w, https://64.media.tumblr.com/6149d9e27f5abd67b2fd6726e72ab033/c953260793ed48ee-53/s1280x1920/b049116baad4f9d9f794b4863bbebbf9b101a688.pnj 1000w",

        //gallery settings
        name: "SongSilk",
        descrip: "The moss creatures speak to me. ",
        bg: "None",
        ratio: "1/1",

        //commision settings
        numChar: 2,
        finish: 4, //[0, 4]
        size: 3,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1ym2IjoN5uW1jPberPt72Ca9YzV4erfUT",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/0d165158593f0427ad4adaa10f0b3f69/c953260793ed48ee-a7/s100x200/10a3f63a24be45255d9b6f9a5c69dec34a7a02fe.pnj 100w, https://64.media.tumblr.com/0d165158593f0427ad4adaa10f0b3f69/c953260793ed48ee-a7/s250x400/fdf98633e557538391099f2516e8c1b3e1fbd28b.pnj 250w, https://64.media.tumblr.com/0d165158593f0427ad4adaa10f0b3f69/c953260793ed48ee-a7/s400x600/5f2808bebb8f7cb3bd35aaa2777efd348dc172c3.pnj 400w, https://64.media.tumblr.com/0d165158593f0427ad4adaa10f0b3f69/c953260793ed48ee-a7/s500x750/2613e2ac37c5be45cc4aa09dd36fa60809be5354.pnj 500w, https://64.media.tumblr.com/0d165158593f0427ad4adaa10f0b3f69/c953260793ed48ee-a7/s540x810/fc799cd9dd3b181493640d07b1332767b7e66f7c.pnj 540w, https://64.media.tumblr.com/0d165158593f0427ad4adaa10f0b3f69/c953260793ed48ee-a7/s640x960/384b5db215e8f3f83778eb148f3bca5ff715b46a.pnj 640w, https://64.media.tumblr.com/0d165158593f0427ad4adaa10f0b3f69/c953260793ed48ee-a7/s1280x1920/2d0e18f85ff535573913c6333e15f066eb306043.pnj 1000w",

        //gallery settings
        name: "Red Grass",
        descrip: "Wanted to paint backgrounds more. There used to be words hidden in the sky.",
        bg: "None",
        ratio: "1/1",

        //commision settings
        numChar: 0,
        finish: 4, //[0, 4]
        size: 0,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1w5puj5E9Hx7ChZFP9JsH7JLqUnVZ3ukN",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/90b8ba76b36d1259c68ac1faefceb9a0/bedb6433383e1da3-11/s100x200/76b19c78424f8a453b3135b20c26aa908ca5a92e.pnj 100w, https://64.media.tumblr.com/90b8ba76b36d1259c68ac1faefceb9a0/bedb6433383e1da3-11/s250x400/eeaf07e35ed66f816bcb207a636ad34feaef09ae.pnj 250w, https://64.media.tumblr.com/90b8ba76b36d1259c68ac1faefceb9a0/bedb6433383e1da3-11/s400x600/9f2c91fd883f2ff6887229c733c98966b08caaee.pnj 400w, https://64.media.tumblr.com/90b8ba76b36d1259c68ac1faefceb9a0/bedb6433383e1da3-11/s500x750/d03111351483b609552faa53acecee870dd2b1a3.pnj 500w, https://64.media.tumblr.com/90b8ba76b36d1259c68ac1faefceb9a0/bedb6433383e1da3-11/s540x810/e79b6d8f70061f2d691b063821c8dfdd064795b6.pnj 540w, https://64.media.tumblr.com/90b8ba76b36d1259c68ac1faefceb9a0/bedb6433383e1da3-11/s640x960/1a97dea0fef0780f3e9a48663d4aeab175014fcf.pnj 640w, https://64.media.tumblr.com/90b8ba76b36d1259c68ac1faefceb9a0/bedb6433383e1da3-11/s1280x1920/3c52a3bffd58fd64ca41dd8c4b8f1bec4f0f713a.pnj 1280w, https://64.media.tumblr.com/90b8ba76b36d1259c68ac1faefceb9a0/bedb6433383e1da3-11/s2048x3072/f945ba4cafb3eee5991af881138cdf8d83294bb1.pnj 2048w",

        //gallery settings
        name: "Sketch",
        descrip: "Sketch for LN fan suits.",
        bg: "None",
        ratio: "1/1",

        //commision settings
        numChar: 2,
        finish: 0, //[0, 4]
        size: 3,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1OZOOhbrfmhVyOkN8onwFP6P1NDdc84EP",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/31db8aef95b242dfc2dcd85c2700e3fd/bedb6433383e1da3-4b/s100x200/e25090bebb5838c6e144d1f61b268801223c89fd.pnj 100w, https://64.media.tumblr.com/31db8aef95b242dfc2dcd85c2700e3fd/bedb6433383e1da3-4b/s250x400/b6fb82cb2c42d3decedae56f1f0226bafe4c2501.pnj 250w, https://64.media.tumblr.com/31db8aef95b242dfc2dcd85c2700e3fd/bedb6433383e1da3-4b/s400x600/54a485fc83a7a0b8fa00be5d2ab3ed6d63c527e6.pnj 400w, https://64.media.tumblr.com/31db8aef95b242dfc2dcd85c2700e3fd/bedb6433383e1da3-4b/s500x750/1b2e84113f21f2ca5c2ac8473fd7504f7a18d505.pnj 500w, https://64.media.tumblr.com/31db8aef95b242dfc2dcd85c2700e3fd/bedb6433383e1da3-4b/s540x810/4bf1358d38155f029a80596ba43a41f859b5b56f.pnj 540w, https://64.media.tumblr.com/31db8aef95b242dfc2dcd85c2700e3fd/bedb6433383e1da3-4b/s640x960/82f8ff27740fcbdd155598e5d0fcdf1903fad58f.pnj 640w, https://64.media.tumblr.com/31db8aef95b242dfc2dcd85c2700e3fd/bedb6433383e1da3-4b/s1280x1920/f0218219cf608588477ef728ef7a99e9c3ad9d9a.pnj 1280w, https://64.media.tumblr.com/31db8aef95b242dfc2dcd85c2700e3fd/bedb6433383e1da3-4b/s2048x3072/f2bb4ccda379cbcf31c562fd643065208cbe56c7.pnj 2048w",

        //gallery settings
        name: "LN Fan Suits",
        descrip: "Created suits based on pieces of clothing from Love Nikki, background is a collage of library images.",
        bg: "None",
        ratio: "1/1",

        //commision settings
        numChar: 2,
        finish: 4, //[0, 4]
        size: 3,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1SzTVBg4vXZATqBNnhc7FJYwxsuNiK3QR",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/88f4b6b476bbf1e000822b6e42a6c5d2/bedb6433383e1da3-31/s100x200/f6ba736059421876e2b53f58645ba440bdee468a.pnj 100w, https://64.media.tumblr.com/88f4b6b476bbf1e000822b6e42a6c5d2/bedb6433383e1da3-31/s250x400/4e210cc23be15742db7136291df5a863ae9b3ae3.pnj 250w, https://64.media.tumblr.com/88f4b6b476bbf1e000822b6e42a6c5d2/bedb6433383e1da3-31/s400x600/a59c88fe0375953afcab706ec8be4b30d11f445d.pnj 400w, https://64.media.tumblr.com/88f4b6b476bbf1e000822b6e42a6c5d2/bedb6433383e1da3-31/s500x750/57aeebd65d8b9efb7ad72fb6fa0c1d9c3c1f34a8.pnj 500w, https://64.media.tumblr.com/88f4b6b476bbf1e000822b6e42a6c5d2/bedb6433383e1da3-31/s540x810/f2a7458bc2a03d3f11adc39d4e9a49f23d0e54b8.pnj 540w, https://64.media.tumblr.com/88f4b6b476bbf1e000822b6e42a6c5d2/bedb6433383e1da3-31/s640x960/de7fee3891c82612d98a541f3bed2070f6eccf4b.pnj 640w, https://64.media.tumblr.com/88f4b6b476bbf1e000822b6e42a6c5d2/bedb6433383e1da3-31/s1280x1920/d50383fb5860f3fefc391c31e488363caf215657.pnj 1280w, https://64.media.tumblr.com/88f4b6b476bbf1e000822b6e42a6c5d2/bedb6433383e1da3-31/s2048x3072/9bc82b0d3284f08137b7c364ea0cc3c77600f5c6.pnj 2048w",

        //gallery settings
        name: "Snow Witch Suit",
        descrip: "Clouds were difficult to put onto a transparent background.",
        bg: "None",
        ratio: "1/1",

        //commision settings
        numChar: 1,
        finish: 3, //[0, 4]
        size: 3,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1jsvM_WCCUFv6y-gx7ZBjEeLgQkzTSm54",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/3514e4e16dec7336f8337db66e25196d/bedb6433383e1da3-14/s100x200/5fa998b0ad1145c034690c4493bace4dced3b7ba.pnj 100w, https://64.media.tumblr.com/3514e4e16dec7336f8337db66e25196d/bedb6433383e1da3-14/s250x400/6e774aa0687e9d0d7640b6316750285de36b2887.pnj 250w, https://64.media.tumblr.com/3514e4e16dec7336f8337db66e25196d/bedb6433383e1da3-14/s400x600/d793ca71db84a9b833f2cac38d0d326b24ce6452.pnj 400w, https://64.media.tumblr.com/3514e4e16dec7336f8337db66e25196d/bedb6433383e1da3-14/s500x750/7f5483b51d8d3fffb79c927665957f69f671bf35.pnj 500w, https://64.media.tumblr.com/3514e4e16dec7336f8337db66e25196d/bedb6433383e1da3-14/s540x810/dee0b656ec3789fa17f0fcf2b58fce562737cc3d.pnj 540w, https://64.media.tumblr.com/3514e4e16dec7336f8337db66e25196d/bedb6433383e1da3-14/s640x960/ff041325a595ef45c8d83f8acc94522c552fad27.pnj 640w, https://64.media.tumblr.com/3514e4e16dec7336f8337db66e25196d/bedb6433383e1da3-14/s1280x1920/92a8b9707b8f85dca4bcd4906accb17fe2367942.pnj 1280w, https://64.media.tumblr.com/3514e4e16dec7336f8337db66e25196d/bedb6433383e1da3-14/s2048x3072/0bb8f45c2b26368af41aa413c5d504fc74e2dd5c.pnj 2048w",

        //gallery settings
        name: "Scholar Suit",
        descrip: "Significantly less detailed than the snow witch suit (not painted over), but difference is hard to see. ",
        bg: "None",
        ratio: "1/1",

        //commision settings
        numChar: 1,
        finish: 3, //[0, 4]
        size: 3,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1-DA6hZbbhFTSGMG4PP7Nfzo0dlu-iTNH",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/c56579c480b02e60f82746a250451276/c953260793ed48ee-75/s100x200/67079f804684d1729ad0ff57e67b59b2aa5529d3.pnj 100w, https://64.media.tumblr.com/c56579c480b02e60f82746a250451276/c953260793ed48ee-75/s250x400/c1dfad7d1be80adb58df2180b5a3bdfa090f90e0.pnj 250w, https://64.media.tumblr.com/c56579c480b02e60f82746a250451276/c953260793ed48ee-75/s400x600/2b1eb9f49d5452c6bef60ff7fa7c0eb90a3107d1.pnj 400w, https://64.media.tumblr.com/c56579c480b02e60f82746a250451276/c953260793ed48ee-75/s500x750/be50b64c7d38bcc80e78f36476296323aac70633.pnj 500w, https://64.media.tumblr.com/c56579c480b02e60f82746a250451276/c953260793ed48ee-75/s540x810/e0ee52366aa77ed6292f677ca31d222e0c4f9f68.pnj 540w, https://64.media.tumblr.com/c56579c480b02e60f82746a250451276/c953260793ed48ee-75/s640x960/a538edfe044a27264241324d473bb39e3ece17dc.pnj 640w, https://64.media.tumblr.com/c56579c480b02e60f82746a250451276/c953260793ed48ee-75/s1280x1920/0360a45fb024178190ec4408b98caeccbd6a5dd2.pnj 1280w, https://64.media.tumblr.com/c56579c480b02e60f82746a250451276/c953260793ed48ee-75/s2048x3072/944fe33406d740b1897f528e80b6c0b638faf7a6.pnj 2048w",

        //gallery settings
        name: "Bow and Shield",
        descrip: "Loved how the helmet tufts turned out. Experimenting with another style. ",
        bg: "white",
        ratio: "4/3",

        //commision settings
        numChar: 1,
        finish: 2, //[0, 4]
        size: 2,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "14HqNop0GWPocLiTnih97UKI608veZ4Jp",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/d2a95b8d327e9e4fca333e653d792428/c953260793ed48ee-8b/s100x200/81f109fb97252c826d31f22adf999b33f7fdc4c9.pnj 100w, https://64.media.tumblr.com/d2a95b8d327e9e4fca333e653d792428/c953260793ed48ee-8b/s250x400/a304dfb9c31d2f4b58526298c612661e5a9eb806.pnj 250w, https://64.media.tumblr.com/d2a95b8d327e9e4fca333e653d792428/c953260793ed48ee-8b/s400x600/472e02d1d8baef78160c73e2e1e46b0bd8172d49.pnj 400w, https://64.media.tumblr.com/d2a95b8d327e9e4fca333e653d792428/c953260793ed48ee-8b/s500x750/7ed752c95c6ed110ae71f5b1bf2c4bd7e78eed10.pnj 500w, https://64.media.tumblr.com/d2a95b8d327e9e4fca333e653d792428/c953260793ed48ee-8b/s540x810/afe9c0f0659c651b21f5ea38ef2282a3cd854931.pnj 540w, https://64.media.tumblr.com/d2a95b8d327e9e4fca333e653d792428/c953260793ed48ee-8b/s640x960/363810ada6e2839294311c1829c63eac35f9fedc.pnj 640w, https://64.media.tumblr.com/d2a95b8d327e9e4fca333e653d792428/c953260793ed48ee-8b/s1280x1920/4d037b35e1e29bbc426b57f55a10b99d4bc47521.pnj 1280w, https://64.media.tumblr.com/d2a95b8d327e9e4fca333e653d792428/c953260793ed48ee-8b/s2048x3072/a29528314144733b2db26733489c90103e8abd96.pnj 2048w",

        //gallery settings
        name: "Profile",
        descrip: "I lost the bottom half of their body somewhere ...",
        bg: "None",
        ratio: "1/1",

        //commision settings
        numChar: 1,
        finish: 3, //[0, 4]
        size: 1,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1WBZRR2O0ciKREf2Uf-hOBVzqvzGLjofl",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/d870951c695b7aec3847344f130a3db9/c953260793ed48ee-cf/s100x200/94e58192e3912999d1bd29b6411a702259175abb.pnj 100w, https://64.media.tumblr.com/d870951c695b7aec3847344f130a3db9/c953260793ed48ee-cf/s250x400/b60f683a0a5cf885119bb137a7340439a85265ad.pnj 250w, https://64.media.tumblr.com/d870951c695b7aec3847344f130a3db9/c953260793ed48ee-cf/s400x600/2b88da33b75e75695cb068a0acb44de06ccda7db.pnj 400w, https://64.media.tumblr.com/d870951c695b7aec3847344f130a3db9/c953260793ed48ee-cf/s500x750/aea90efd67b47ff3e62eddd911265366a4fdc74d.pnj 500w, https://64.media.tumblr.com/d870951c695b7aec3847344f130a3db9/c953260793ed48ee-cf/s540x810/11072f2ee41590200e712b1aa325c8f934400c38.pnj 540w, https://64.media.tumblr.com/d870951c695b7aec3847344f130a3db9/c953260793ed48ee-cf/s640x960/a956d242c83367b2d4c9ddb052e0140d6d3cb76e.pnj 640w, https://64.media.tumblr.com/d870951c695b7aec3847344f130a3db9/c953260793ed48ee-cf/s1280x1920/710ff197975f1541c06d247f2b292cfd7c094067.pnj 1000w",

        //gallery settings
        name: "10,000 Years",
        descrip: "Another Phos fanart. The hiatus was quite the wait.",
        bg: "None",
        ratio: "1/1",

        //commision settings
        numChar: 1,
        finish: 4, //[0, 4]
        size: 3,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1RlbZvuOY_1ufkrGZyoXdzvCS8oT2LfJP",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/26a83febac1486abe0d31e8a89c11178/c953260793ed48ee-33/s100x200/5fb3939105bb81643c4dd54f75015072b21ae2ce.pnj 100w, https://64.media.tumblr.com/26a83febac1486abe0d31e8a89c11178/c953260793ed48ee-33/s250x400/5265d1355e098b45a9f03a85dd879ddb22f97020.pnj 250w, https://64.media.tumblr.com/26a83febac1486abe0d31e8a89c11178/c953260793ed48ee-33/s400x600/02305537648142bd85c22f054a071905bd0cc657.pnj 400w, https://64.media.tumblr.com/26a83febac1486abe0d31e8a89c11178/c953260793ed48ee-33/s500x750/d85cb65e42cf3e14e21699a92e56f4ae0f4832df.pnj 500w, https://64.media.tumblr.com/26a83febac1486abe0d31e8a89c11178/c953260793ed48ee-33/s540x810/954c9071e3603c454e6412e8e627adced953ef09.pnj 540w, https://64.media.tumblr.com/26a83febac1486abe0d31e8a89c11178/c953260793ed48ee-33/s640x960/40e7490fe3a20e1762d6d6a05f7211ee6c11f092.pnj 640w, https://64.media.tumblr.com/26a83febac1486abe0d31e8a89c11178/c953260793ed48ee-33/s1280x1920/819aaa601fcc70ec918357fcfcbb24d07028df0d.pnj 1280w, https://64.media.tumblr.com/26a83febac1486abe0d31e8a89c11178/c953260793ed48ee-33/s2048x3072/d148a7bd6d2dfc4fa9f96e54dfe100114b72555f.pnj 2048w",

        //gallery settings
        name: "Shading Tests",
        descrip: "Creating masks for shadows and playing around with blend modes on procreate.",
        bg: "None",
        ratio: "1094/1031",

        //commision settings
        numChar: 1,
        finish: 3, //[0, 4]
        size: 2,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "19R7LPyjecNUEvY0u0NJd-NLXsT0IK8f1",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/9e9475398ca9532921ab548a57eefd04/c953260793ed48ee-80/s100x200/130f3c7ba337d5bd52b61363cbdc80325ce5f2e6.pnj 100w, https://64.media.tumblr.com/9e9475398ca9532921ab548a57eefd04/c953260793ed48ee-80/s250x400/dfc7e3104fb8ebc1eb0a74d3790cb7a9c91c0c65.pnj 250w, https://64.media.tumblr.com/9e9475398ca9532921ab548a57eefd04/c953260793ed48ee-80/s400x600/6e0303339c6c2479c6a5c737a039ca6e0e9b0d3f.pnj 400w, https://64.media.tumblr.com/9e9475398ca9532921ab548a57eefd04/c953260793ed48ee-80/s500x750/f58f39e7323ba538b361876186a1153e770e94ac.pnj 500w, https://64.media.tumblr.com/9e9475398ca9532921ab548a57eefd04/c953260793ed48ee-80/s540x810/b9f35effd9c23ff3707e6f93d6ee83982c0138c1.pnj 540w, https://64.media.tumblr.com/9e9475398ca9532921ab548a57eefd04/c953260793ed48ee-80/s640x960/9f9c53989b7d4222294f949809e64599a25b8ffe.pnj 640w, https://64.media.tumblr.com/9e9475398ca9532921ab548a57eefd04/c953260793ed48ee-80/s1280x1920/8336c80ebf4a52d0b7d5bbdf7a156b2c54b22618.pnj 1280w, https://64.media.tumblr.com/9e9475398ca9532921ab548a57eefd04/c953260793ed48ee-80/s2048x3072/6c0c122bc923735eece2c9289ba4e2415c6e8ad4.pnj 2015w",

        //gallery settings
        name: "Glass World",
        descrip: "Trying out a new style. ",
        bg: "None",
        ratio: "403/239",

        //commision settings
        numChar: 1,
        finish: 4, //[0, 4]
        size: 3,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1KrTsOdQFNbAdv3-okeZGqBiCb5HHaal-",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/31f06fed5e816521ca45df261c857a54/c953260793ed48ee-50/s100x200/7444ae63093c294c40a90eb6301dbd0c6dcc0835.pnj 100w, https://64.media.tumblr.com/31f06fed5e816521ca45df261c857a54/c953260793ed48ee-50/s250x400/a5956c0fac25915629b0ae08af95fbd4174c681c.pnj 200w, https://64.media.tumblr.com/31f06fed5e816521ca45df261c857a54/c953260793ed48ee-50/s400x600/f95efe8c7a93d377b225ddadc24e9c5d78ecbf8d.pnj 300w, https://64.media.tumblr.com/31f06fed5e816521ca45df261c857a54/c953260793ed48ee-50/s500x750/5f8dcc167a7032df19ec5bb4c671c617dea9ab2c.pnj 375w, https://64.media.tumblr.com/31f06fed5e816521ca45df261c857a54/c953260793ed48ee-50/s540x810/f60f9a6195c76dba35da505c1520d3c53e121c05.pnj 405w, https://64.media.tumblr.com/31f06fed5e816521ca45df261c857a54/c953260793ed48ee-50/s640x960/afb41ad3f4a03f7cf543bd7116cb5e7aa6ab7288.pnj 480w, https://64.media.tumblr.com/31f06fed5e816521ca45df261c857a54/c953260793ed48ee-50/s1280x1920/ef269c5925481ef316fc638c0b8cd09ad2b87b49.pnj 960w, https://64.media.tumblr.com/31f06fed5e816521ca45df261c857a54/c953260793ed48ee-50/s2048x3072/f115ecc3c3217bbe57ea902dd06cedc049b8424e.pnj 1250w",

        //gallery settings
        name: "Dragon Girl",
        descrip: "This might have been for the new year. ",
        bg: "None",
        ratio: "1/2",

        //commision settings
        numChar: 2,
        finish: 4, //[0, 4]
        size: 3,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "10GKH1Liw4Uwqs1VeSld39NTf1ieCStLP",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/d2063b5a75846abb40a307b809a4efbb/c953260793ed48ee-46/s100x200/9c7ec3fa1923b8f1d8277f2be5f9efc19a174b29.pnj 100w, https://64.media.tumblr.com/d2063b5a75846abb40a307b809a4efbb/c953260793ed48ee-46/s250x400/3bec45fef534f87e912c90bc2eabee8b39328da4.pnj 250w, https://64.media.tumblr.com/d2063b5a75846abb40a307b809a4efbb/c953260793ed48ee-46/s400x600/7317e4e8869f64bccd0c7215a76fa67c72204aee.pnj 400w, https://64.media.tumblr.com/d2063b5a75846abb40a307b809a4efbb/c953260793ed48ee-46/s500x750/3e8eea20e5a0280a80ef5289ed852821f886a218.pnj 500w, https://64.media.tumblr.com/d2063b5a75846abb40a307b809a4efbb/c953260793ed48ee-46/s540x810/6f5c680d41510ca3499df39402c7193d93c5e02f.pnj 540w, https://64.media.tumblr.com/d2063b5a75846abb40a307b809a4efbb/c953260793ed48ee-46/s640x960/094a281bf6a6c584b46a43f208c38c0c8c467c88.pnj 640w, https://64.media.tumblr.com/d2063b5a75846abb40a307b809a4efbb/c953260793ed48ee-46/s1280x1920/1742df84c7faebe92c9c715eccc6ce841bbcfaec.pnj 912w",

        //gallery settings
        name: "Goat",
        descrip: "Wanted to draw dramatic eyelashes. ",
        bg: "magenta",
        ratio: "304/441",

        //commision settings
        numChar: 1,
        finish: 3, //[0, 4]
        size: 1,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1JE60Y0QKAMvQU2Yflx4Ce42rC2b_WHG5",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/3ce485b63750d2c4340bf7241090c957/c953260793ed48ee-15/s100x200/921d09cc868a2216e0c1e64137b32a1581ef5f91.pnj 100w, https://64.media.tumblr.com/3ce485b63750d2c4340bf7241090c957/c953260793ed48ee-15/s250x400/a6b4a5d374621a8428d0a814d71e2dfbe8f76f33.pnj 250w, https://64.media.tumblr.com/3ce485b63750d2c4340bf7241090c957/c953260793ed48ee-15/s400x600/bd02a4fb998396be31cb496e3ec5652b74432e14.pnj 343w",

        //gallery settings
        name: "Queen",
        descrip: "Her original design got lost.",
        bg: "white",
        ratio: "343/465",

        //commision settings
        numChar: 1,
        finish: 0, //[0, 4]
        size: 1,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1QMKyT9bNGbh7v_gFtJSvjPgoF3lP-41U",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/9220000c5037a66380a85f9ef46a3d4c/c953260793ed48ee-8d/s100x200/587b7660d818fe73d88106e8d64ebbccfda24d60.pnj 100w, https://64.media.tumblr.com/9220000c5037a66380a85f9ef46a3d4c/c953260793ed48ee-8d/s250x400/c3a7eac691ffdd9bc71b973e8bc65916817dde0d.pnj 250w, https://64.media.tumblr.com/9220000c5037a66380a85f9ef46a3d4c/c953260793ed48ee-8d/s400x600/84dc15b5f2b75def0c26440e07221654f096b509.pnj 400w, https://64.media.tumblr.com/9220000c5037a66380a85f9ef46a3d4c/c953260793ed48ee-8d/s500x750/a93fbc7509dfc7c7ef25a30bbd7aa6d2cf42e1bd.pnj 425w",

        //gallery settings
        name: "Early Moth",
        descrip: "The earlier design for moth. ",
        bg: "None",
        ratio: "425/511",

        //commision settings
        numChar: 1,
        finish: 2, //[0, 4]
        size: 2,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1felf2hk2-gscDXn_EJ62i4qQwAbcs5Co",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/6c7e0c59d46bb8adde82533bd53e1618/c953260793ed48ee-e3/s100x200/3e25c77144661133472d25aa21380dcae3fd8167.pnj 100w, https://64.media.tumblr.com/6c7e0c59d46bb8adde82533bd53e1618/c953260793ed48ee-e3/s250x400/c835d5347d981e8300571c0935120e79c6e60714.pnj 250w, https://64.media.tumblr.com/6c7e0c59d46bb8adde82533bd53e1618/c953260793ed48ee-e3/s400x600/c24143f6b893ec2ca6ef92a04e075be150dd7865.pnj 363w",

        //gallery settings
        name: "Spotlight",
        descrip: "Spotlight lighting test.",
        bg: "none",
        ratio: "363/410",

        //commision settings
        numChar: 1,
        finish: 3, //[0, 4]
        size: 1,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1BwupXvQYO6bZNKG87MRPiv-wWICAULh2",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/4f4028a72ca327e44a8bae78110d4d4a/c953260793ed48ee-9c/s100x200/258acb8eec2a7f74358daed7efc72f7f4875d687.pnj 100w, https://64.media.tumblr.com/4f4028a72ca327e44a8bae78110d4d4a/c953260793ed48ee-9c/s250x400/13358dbf3a026e678858e91e3fd934c39c256908.pnj 250w, https://64.media.tumblr.com/4f4028a72ca327e44a8bae78110d4d4a/c953260793ed48ee-9c/s400x600/812642522dc8c60d3056a4f17f09bfec9bc17897.pnj 370w",

        //gallery settings
        name: "Dusk",
        descrip: "Testing backlight. ",
        bg: "none",
        ratio: "74/81",

        //commision settings
        numChar: 1,
        finish: 3, //[0, 4]
        size: 1,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1_4eHfA2tXxSh6zxNhGmQo8v8CpOqQ4ip",

        //tumblr stuff 
        srcset: "",

        //gallery settings
        name: "Smile",
        descrip: "",
        bg: "green",
        ratio: "577/934",

        //commision settings
        numChar: 1,
        finish: 3, //[0, 4]
        size: 2,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1S3l_DxpyKOILQYjY0sMjJxq96696fY8u",

        //tumblr stuff 
        srcset: "",

        //gallery settings
        name: "Smile Open",
        descrip: "",
        bg: "green",
        ratio: "589/924",

        //commision settings
        numChar: 1,
        finish: 3, //[0, 4]
        size: 2,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1eto4noSsFLBrvp45_Ogd4IUNwF_10tDp",

        //tumblr stuff 
        srcset: "",

        //gallery settings
        name: "Surprised",
        descrip: "",
        bg: "green",
        ratio: "273/451",

        //commision settings
        numChar: 1,
        finish: 3, //[0, 4]
        size: 2,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1oYay2CDTBLzxjjMmIRkZBUjUIs8O8DTF",

        //tumblr stuff 
        srcset: "",

        //gallery settings
        name: "Sad",
        descrip: "",
        bg: "green",
        ratio: "139/214",

        //commision settings
        numChar: 1,
        finish: 3, //[0, 4]
        size: 2,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1z9yaRxwiIW3ojZ9wT5_uf2X3FRW45bH_",

        //tumblr stuff 
        srcset: "",

        //gallery settings
        name: "Angry",
        descrip: "",
        bg: "green",
        ratio: "541/873",

        //commision settings
        numChar: 1,
        finish: 3, //[0, 4]
        size: 2,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1qEFgyEtmkJb-gbu68ETHl6ODhsZtMXX6",

        //tumblr stuff 
        srcset: "",

        //gallery settings
        name: "Shocked",
        descrip: "",
        bg: "green",
        ratio: "541/873",

        //commision settings
        numChar: 1,
        finish: 3, //[0, 4]
        size: 2,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1y-E2OZsOU0FJnUOWDxiI7ACwHFq9G8wu",

        //tumblr stuff 
        srcset: "",

        //gallery settings
        name: "Close Eye Smile",
        descrip: "",
        bg: "green",
        ratio: "568/875",

        //commision settings
        numChar: 1,
        finish: 3, //[0, 4]
        size: 2,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1Wdy0_Zva9h33aJy8STeLSgEDL1sLFY_m",

        //tumblr stuff 
        srcset: "",

        //gallery settings
        name: "Confused",
        descrip: "",
        bg: "green",
        ratio: "291/437",

        //commision settings
        numChar: 1,
        finish: 3, //[0, 4]
        size: 2,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1dTBkUsFAsMSGVCQAlS3rKufwQXGWEL_c",

        //tumblr stuff 
        srcset: "",

        //gallery settings
        name: "Smile Prototype",
        descrip: "the first version of character drawing, it was fixed before the rest were drawn.",
        bg: "green",
        ratio: "537/887",

        //commision settings
        numChar: 1,
        finish: 3, //[0, 4]
        size: 2,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1oC3ll-DobFCZnXXPateH_VfMYQ7KCad0",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/44d875b155e63cfa3cce4e0d77b5858c/af5cab4c5cb0b6f0-99/s100x200/cd8e110a148192bb8ef531b08a1119b13ccfaf35.pnj 100w, https://64.media.tumblr.com/44d875b155e63cfa3cce4e0d77b5858c/af5cab4c5cb0b6f0-99/s250x400/d296e538996e9c4afc29bff1f657f8400acf4bfe.pnj 250w, https://64.media.tumblr.com/44d875b155e63cfa3cce4e0d77b5858c/af5cab4c5cb0b6f0-99/s400x600/7b7b1c378e043f0c94a4861b5172412293f74e62.pnj 400w, https://64.media.tumblr.com/44d875b155e63cfa3cce4e0d77b5858c/af5cab4c5cb0b6f0-99/s500x750/a89dc6cd6853dc6fe5c9114760e66481469a7063.pnj 500w, https://64.media.tumblr.com/44d875b155e63cfa3cce4e0d77b5858c/af5cab4c5cb0b6f0-99/s540x810/4206717d3049c75d4502934078ec9bb9a04f4256.pnj 540w, https://64.media.tumblr.com/44d875b155e63cfa3cce4e0d77b5858c/af5cab4c5cb0b6f0-99/s640x960/125952508aa75bc9648914e3c15404a582b44144.pnj 640w, https://64.media.tumblr.com/44d875b155e63cfa3cce4e0d77b5858c/af5cab4c5cb0b6f0-99/s1280x1920/6490278f4e34a01690e6f88a6a32c4147ee7ab28.pnj 1280w, https://64.media.tumblr.com/44d875b155e63cfa3cce4e0d77b5858c/af5cab4c5cb0b6f0-99/s2048x3072/74115015e9920a0ada913ae18a457b98a00d735c.pnj 1281w",

        //gallery settings
        name: "Moff",
        descrip: "The second version of moth. ",
        bg: "orange",
        ratio: "1281/1286",

        //commision settings
        numChar: 1,
        finish: 3, //[0, 4]
        size: 3,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1MchqX82u55JQtWOxnB0PqWodXRFTfYJM",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/55ec1262f7d476551dd73eba9d6ce8fd/af5cab4c5cb0b6f0-95/s100x200/609a0e0b456164ddc44e4ecfa851b73c6e165ddd.pnj 100w, https://64.media.tumblr.com/55ec1262f7d476551dd73eba9d6ce8fd/af5cab4c5cb0b6f0-95/s250x400/3bb9efa18abd38b736d2cd03048853cbd82874c6.pnj 250w, https://64.media.tumblr.com/55ec1262f7d476551dd73eba9d6ce8fd/af5cab4c5cb0b6f0-95/s400x600/c51d15e315e7dd827c7fbfb47e87ac2033ca3e3a.pnj 400w, https://64.media.tumblr.com/55ec1262f7d476551dd73eba9d6ce8fd/af5cab4c5cb0b6f0-95/s500x750/36ab04b6f6e7c8cf2c6d1e2efc4320d2844bdfef.pnj 500w, https://64.media.tumblr.com/55ec1262f7d476551dd73eba9d6ce8fd/af5cab4c5cb0b6f0-95/s540x810/caadc3bc67b06fd8fd0732406dc180cbfa78a895.pnj 540w, https://64.media.tumblr.com/55ec1262f7d476551dd73eba9d6ce8fd/af5cab4c5cb0b6f0-95/s640x960/03c3f1c2e316f3508730277b40daa3e89a2a43f1.pnj 640w, https://64.media.tumblr.com/55ec1262f7d476551dd73eba9d6ce8fd/af5cab4c5cb0b6f0-95/s1280x1920/da38296afb2cc8b05a51be9331146813c27b4887.pnj 1280w, https://64.media.tumblr.com/55ec1262f7d476551dd73eba9d6ce8fd/af5cab4c5cb0b6f0-95/s2048x3072/675cc1c3a5ac1557091942fdef7e88359b7182e0.pnj 2048w",

        //gallery settings
        name: "Left Facing",
        descrip: "",
        bg: "None",
        ratio: "1/1",

        //commision settings
        numChar: 1,
        finish: 2, //[0, 4]
        size: 1,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1xkZ9gyomuelUcZg3CdtVl87TXLhUaKba",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/c1f3b4f23880a60e6665a13cb469b7ce/5a91a325a8011051-05/s100x200/f10b879df85de429e8ecadb122db2be0482ced7f.jpg 100w, https://64.media.tumblr.com/c1f3b4f23880a60e6665a13cb469b7ce/5a91a325a8011051-05/s250x400/231e7569360888eb1b41f4dfb2a749b26a43188f.jpg 250w, https://64.media.tumblr.com/c1f3b4f23880a60e6665a13cb469b7ce/5a91a325a8011051-05/s400x600/887ecf6c40d2e2d2cccfa19da05e24c8f59c9a10.jpg 400w, https://64.media.tumblr.com/c1f3b4f23880a60e6665a13cb469b7ce/5a91a325a8011051-05/s500x750/00346da2446a91021eabc735f9b27cfdc0cd1fb6.jpg 500w, https://64.media.tumblr.com/c1f3b4f23880a60e6665a13cb469b7ce/5a91a325a8011051-05/s540x810/c246a12935f4c8ecaac3e98ad5780c7fc70bc127.jpg 540w, https://64.media.tumblr.com/c1f3b4f23880a60e6665a13cb469b7ce/5a91a325a8011051-05/s640x960/3338ccf6bad5fdd8f3b23e58f42e698b53b71665.jpg 640w, https://64.media.tumblr.com/c1f3b4f23880a60e6665a13cb469b7ce/5a91a325a8011051-05/s1280x1920/6d45192a4119fe58d46f269d1b51b0cc3ddecb84.jpg 1221w",

        //gallery settings
        name: "Gardevior",
        descrip: "Another form.",
        bg: "None",
        ratio: "1221/1150",

        //commision settings
        numChar: 1,
        finish: 3, //[0, 4]
        size: 3,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "11oJekl8TjFYnZsOqy4aW2nKfyGFCPMnf",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/60ca3e86a578da1fa367c3ff760c329b/5a91a325a8011051-1a/s100x200/67f0b5fa8f89661384bcb45495f734d0fdeb4e2e.pnj 100w, https://64.media.tumblr.com/60ca3e86a578da1fa367c3ff760c329b/5a91a325a8011051-1a/s250x400/8c1e8f01dbb3a40d8604a348ae94d18cadfb670a.pnj 250w, https://64.media.tumblr.com/60ca3e86a578da1fa367c3ff760c329b/5a91a325a8011051-1a/s400x600/bfc0dc4a88b5c49a8a2adc1b16174e401b092aeb.pnj 400w, https://64.media.tumblr.com/60ca3e86a578da1fa367c3ff760c329b/5a91a325a8011051-1a/s500x750/9b82d67820f1bddd25c302f576ea24a8fb6b8342.pnj 500w, https://64.media.tumblr.com/60ca3e86a578da1fa367c3ff760c329b/5a91a325a8011051-1a/s540x810/36c488d5016861dd3dbc184ed1f15cf5ba69fce5.pnj 540w, https://64.media.tumblr.com/60ca3e86a578da1fa367c3ff760c329b/5a91a325a8011051-1a/s640x960/cb069555b693e6a638633fd981676c00f27f238c.pnj 640w, https://64.media.tumblr.com/60ca3e86a578da1fa367c3ff760c329b/5a91a325a8011051-1a/s1280x1920/da0802182e99e3259b3d91a39f3a444cdc643bf5.pnj 1280w, https://64.media.tumblr.com/60ca3e86a578da1fa367c3ff760c329b/5a91a325a8011051-1a/s2048x3072/f81da7efb7462df36a121fc47e629c1d53a1974a.pnj 2048w",

        //gallery settings
        name: "Shiny Gardevior",
        descrip: "Created a shiny version to match. ",
        bg: "None",
        ratio: "4/3",

        //commision settings
        numChar: 1 ,
        finish: 2, //[0, 4]
        size: 3,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1we9qvQWWC7ljMWUUygZhbshzRA30ZKLH",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/f68c5c1c3dd0976207090d015fcac3e4/af5cab4c5cb0b6f0-99/s100x200/165e1149c845064033c4268c78b9ab2770bb354e.pnj 100w, https://64.media.tumblr.com/f68c5c1c3dd0976207090d015fcac3e4/af5cab4c5cb0b6f0-99/s250x400/8d0f81fe9346baa4f3457d32d87a8a5745bee045.pnj 250w, https://64.media.tumblr.com/f68c5c1c3dd0976207090d015fcac3e4/af5cab4c5cb0b6f0-99/s400x600/d6ebea940d20d8e92fb1d6b16e6d21e955508ed4.pnj 400w, https://64.media.tumblr.com/f68c5c1c3dd0976207090d015fcac3e4/af5cab4c5cb0b6f0-99/s500x750/b933cfcf59df271c2535b6a5c93f31556559f8c9.pnj 500w, https://64.media.tumblr.com/f68c5c1c3dd0976207090d015fcac3e4/af5cab4c5cb0b6f0-99/s540x810/12d33276590b0fa42da95be111a33c14336039c3.pnj 540w, https://64.media.tumblr.com/f68c5c1c3dd0976207090d015fcac3e4/af5cab4c5cb0b6f0-99/s640x960/ca54cf2a95d70448be7dfc610131e27e972c18fa.pnj 640w, https://64.media.tumblr.com/f68c5c1c3dd0976207090d015fcac3e4/af5cab4c5cb0b6f0-99/s1280x1920/cb1674f90e8053e326dfe0064c57e1d15f15a9f6.pnj 1000w",

        //gallery settings
        name: "Mage",
        descrip: "",
        bg: "None",
        ratio: "1/1",

        //commision settings
        numChar: 1,
        finish: 3, //[0, 4]
        size: 2,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1x8vK8LlRb4FCr0xSf4zlriiOnVsvwU_m",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/b60b32171324b23b3befde31ec8c3393/e530f22cc45f9bd4-79/s100x200/820efb7800eb6db030e4df2c17965f4a947447a8.pnj 100w, https://64.media.tumblr.com/b60b32171324b23b3befde31ec8c3393/e530f22cc45f9bd4-79/s250x400/74a8c87744fc5cff4d483284773b8d032312ad87.pnj 250w, https://64.media.tumblr.com/b60b32171324b23b3befde31ec8c3393/e530f22cc45f9bd4-79/s400x600/b7051f3c67b01ed7d579f9cde0415890b243e096.pnj 400w, https://64.media.tumblr.com/b60b32171324b23b3befde31ec8c3393/e530f22cc45f9bd4-79/s500x750/24bfe60841e5b3fab686342b84dc1db847ecd3b6.pnj 500w, https://64.media.tumblr.com/b60b32171324b23b3befde31ec8c3393/e530f22cc45f9bd4-79/s540x810/47553dc05e6969c2d257d0a1b8b328ef440e888b.pnj 540w, https://64.media.tumblr.com/b60b32171324b23b3befde31ec8c3393/e530f22cc45f9bd4-79/s640x960/beead69e1ef609ca89556ba2155e3f01c632e131.pnj 640w, https://64.media.tumblr.com/b60b32171324b23b3befde31ec8c3393/e530f22cc45f9bd4-79/s1280x1920/0c145ed6235ed68091cb4b8db2425e0d0aedc975.pnj 900w",

        //gallery settings
        name: "Stage 2",
        descrip: "Evolved version of stage 1.",
        bg: "None",
        ratio: "3/4",

        //commision settings
        numChar: 1,
        finish: 3, //[0, 4]
        size: 3,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1xFvVlWODcV92MNhsWYwbaBaQoRD2hMc-",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/60afdb64a6a79f2b20da6abb336b2480/e530f22cc45f9bd4-78/s100x200/e906a487c490189c28378936d4baec6c36beb374.pnj 100w, https://64.media.tumblr.com/60afdb64a6a79f2b20da6abb336b2480/e530f22cc45f9bd4-78/s250x400/d507cbae8f7fb15b1897d25cf5e63c4bfe0ff186.pnj 250w, https://64.media.tumblr.com/60afdb64a6a79f2b20da6abb336b2480/e530f22cc45f9bd4-78/s400x600/26abf613dec79199811a71c34dcb3c9b4b8e6240.pnj 400w, https://64.media.tumblr.com/60afdb64a6a79f2b20da6abb336b2480/e530f22cc45f9bd4-78/s500x750/2a6838d2fa81b13db9ba35a39c3928c53178b60c.pnj 500w, https://64.media.tumblr.com/60afdb64a6a79f2b20da6abb336b2480/e530f22cc45f9bd4-78/s540x810/ed0c8acf2cc71844368ae31c7ef530ee172bb704.pnj 540w, https://64.media.tumblr.com/60afdb64a6a79f2b20da6abb336b2480/e530f22cc45f9bd4-78/s640x960/828c0ba7e5b9169599aef6363e2f08df9fffb29f.pnj 640w, https://64.media.tumblr.com/60afdb64a6a79f2b20da6abb336b2480/e530f22cc45f9bd4-78/s1280x1920/18b81bf4cb1b43ed3347dd71008c8961599d7dfa.pnj 900w",

        //gallery settings
        name: "Stage 1",
        descrip: "The unevolved version of the suit.",
        bg: "None",
        ratio: "3/4",

        //commision settings
        numChar: 1,
        finish: 3, //[0, 4]
        size: 3,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1xSDInOFkiZdn4V8pthdgJy85mJyHwYhN",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/4c0bf7560ddb1697fce882205df4ffed/af5cab4c5cb0b6f0-28/s100x200/f578e4e15ea90b8a7c9fc6e4cfe3f49df4fbfa9c.pnj 100w, https://64.media.tumblr.com/4c0bf7560ddb1697fce882205df4ffed/af5cab4c5cb0b6f0-28/s250x400/05972fdc74a4eaf4156859327786e465ab1982f8.pnj 250w, https://64.media.tumblr.com/4c0bf7560ddb1697fce882205df4ffed/af5cab4c5cb0b6f0-28/s400x600/a100b7d9c7f83743c80ed7fd442aa2e1680c6342.pnj 400w, https://64.media.tumblr.com/4c0bf7560ddb1697fce882205df4ffed/af5cab4c5cb0b6f0-28/s500x750/aea981eb7a837cd9f69b496e40c0653deb079f33.pnj 500w, https://64.media.tumblr.com/4c0bf7560ddb1697fce882205df4ffed/af5cab4c5cb0b6f0-28/s540x810/9f10c4d70588df622257c96e36dc324c3e987bb5.pnj 540w, https://64.media.tumblr.com/4c0bf7560ddb1697fce882205df4ffed/af5cab4c5cb0b6f0-28/s640x960/b3060ad9d20919ba510a74d9ec969e25befaeee7.pnj 640w, https://64.media.tumblr.com/4c0bf7560ddb1697fce882205df4ffed/af5cab4c5cb0b6f0-28/s1280x1920/0ea5a8ecc509b6f480f8472813bb3925e6b16043.pnj 1000w",

        //gallery settings
        name: "Winter Breath",
        descrip: "",
        bg: "None",
        ratio: "1/1",

        //commision settings
        numChar: 1,
        finish: 3, //[0, 4]
        size: 1,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1x_px14R9J-46dXOlCe0dK1l5SUi9wYQ7",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/7671313e2836430d05fecb231a94de8a/4ecaa13c6add3234-d5/s100x200/6c033117ca891fd6e1f1c35ad944df743672b9e5.pnj 100w, https://64.media.tumblr.com/7671313e2836430d05fecb231a94de8a/4ecaa13c6add3234-d5/s250x400/85e80653cb0fefcc94bd35ce4a9dcfc58167f093.pnj 250w, https://64.media.tumblr.com/7671313e2836430d05fecb231a94de8a/4ecaa13c6add3234-d5/s400x600/c4525570227538b1e78c87112cb415ad52f1fe70.pnj 400w, https://64.media.tumblr.com/7671313e2836430d05fecb231a94de8a/4ecaa13c6add3234-d5/s500x750/c07c81df602a13802f68a3f959cbbf57684c49e4.pnj 500w, https://64.media.tumblr.com/7671313e2836430d05fecb231a94de8a/4ecaa13c6add3234-d5/s540x810/1564035ec49b3db0a6a76b0c27683fd37af63acc.pnj 540w, https://64.media.tumblr.com/7671313e2836430d05fecb231a94de8a/4ecaa13c6add3234-d5/s640x960/1e1a78752c5488e60d256ecdc7dfb9a1d3090170.pnj 640w, https://64.media.tumblr.com/7671313e2836430d05fecb231a94de8a/4ecaa13c6add3234-d5/s1280x1920/eb9fa6305a2ed3016f285e07d61dd1356ce6e669.pnj 1244w",


        //gallery settings
        name: "Candy in a Glass",
        descrip: "The version of the image without any effects added.",
        bg: "None",
        ratio: "1/1",

        //commision settings
        numChar: 1,
        finish: 3, //[0, 4]
        size: 3,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1xatnX56XDsxW8sMncb2JQZnXnSgCsGR-",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/1e9820f82c49ddb0110f900e61fe5a5d/e530f22cc45f9bd4-5e/s100x200/f2c054eb5a123b7bf5aeb622f3e9a8d5b6ecfa82.pnj 100w, https://64.media.tumblr.com/1e9820f82c49ddb0110f900e61fe5a5d/e530f22cc45f9bd4-5e/s250x400/349b52739d13d33e5ed79cf30f8b518c8fc082fd.pnj 250w, https://64.media.tumblr.com/1e9820f82c49ddb0110f900e61fe5a5d/e530f22cc45f9bd4-5e/s400x600/9b93dbffd30789455c225596d44fd924195d92f6.pnj 400w, https://64.media.tumblr.com/1e9820f82c49ddb0110f900e61fe5a5d/e530f22cc45f9bd4-5e/s500x750/8adbf33236b1e850f709bc1b5f95151ab7aa2c3c.pnj 500w, https://64.media.tumblr.com/1e9820f82c49ddb0110f900e61fe5a5d/e530f22cc45f9bd4-5e/s540x810/bebf826797882530979b93932b0a2c1e5f61dd6e.pnj 540w, https://64.media.tumblr.com/1e9820f82c49ddb0110f900e61fe5a5d/e530f22cc45f9bd4-5e/s640x960/2f52d73bdf151465fa005e1276513a689659620e.pnj 640w, https://64.media.tumblr.com/1e9820f82c49ddb0110f900e61fe5a5d/e530f22cc45f9bd4-5e/s1280x1920/7b0cc86b6b61df2921b311a793483e3472ece24d.pnj 900w",

        //gallery settings
        name: "Final Evolution",
        descrip: "LN fan evolution fuit final stage. ",
        bg: "None",
        ratio: "3/4",

        //commision settings
        numChar: 1,
        finish: 3, //[0, 4]
        size: 3,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1xc5Mt1OEc-ad0U1cgWE0OYdH9t78JMnU",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/e58b8bd82d1b45832e6aeb71724e2e40/af5cab4c5cb0b6f0-a9/s100x200/fde1b4d6f7775690bacc135816289befefd7b5d2.pnj 100w, https://64.media.tumblr.com/e58b8bd82d1b45832e6aeb71724e2e40/af5cab4c5cb0b6f0-a9/s250x400/45744fcc13e4480f48d7fa2363675d9d8d2a3bb0.pnj 250w, https://64.media.tumblr.com/e58b8bd82d1b45832e6aeb71724e2e40/af5cab4c5cb0b6f0-a9/s400x600/311e3c7e1f2f3c1cbc2e7419d4bae33dde3f2ab5.pnj 400w, https://64.media.tumblr.com/e58b8bd82d1b45832e6aeb71724e2e40/af5cab4c5cb0b6f0-a9/s500x750/54003af04cd797376eb832419de0fb32d7d51074.pnj 500w, https://64.media.tumblr.com/e58b8bd82d1b45832e6aeb71724e2e40/af5cab4c5cb0b6f0-a9/s540x810/08b4a4084a45a0e6fc3f7c1df0e5413aace71099.pnj 540w, https://64.media.tumblr.com/e58b8bd82d1b45832e6aeb71724e2e40/af5cab4c5cb0b6f0-a9/s640x960/4553c08fc5a86717d2f39117ef5147f5da90c928.pnj 640w, https://64.media.tumblr.com/e58b8bd82d1b45832e6aeb71724e2e40/af5cab4c5cb0b6f0-a9/s1280x1920/3f503b836ece4c8a6042203aaeccf254d05191f5.pnj 1051w",

        //gallery settings
        name: "Winter Rabbit",
        descrip: "",
        bg: "None",
        ratio: "1051/1073",

        //commision settings
        numChar: 1,
        finish: 2, //[0, 4]
        size: 1,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1xcONeIxhhS6AGRl6z5gI-NuPs60jOaWh",

        //tumblr stuff 
        srcset: "",

        //gallery settings
        name: "Braids Girl",
        descrip: "",
        bg: "None",
        ratio: "1/1",

        //commision settings
        numChar: 1,
        finish: 3, //[0, 4]
        size: 1,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1xm3Qhf429GiXpWztWmpHwDdAIIanXCmx",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/eb56931a8ddbbbd1819d0cb1c1dd2fdf/4ecaa13c6add3234-f3/s100x200/f49bc99dc5cbb21660d64d5354622e05e057a91f.pnj 100w, https://64.media.tumblr.com/eb56931a8ddbbbd1819d0cb1c1dd2fdf/4ecaa13c6add3234-f3/s250x400/3f141cef77e06af2a189652e2e156015ae3126cd.pnj 250w, https://64.media.tumblr.com/eb56931a8ddbbbd1819d0cb1c1dd2fdf/4ecaa13c6add3234-f3/s400x600/ba57c3bff867eaeb5f63b52e515bc2a60cbe43f1.pnj 400w, https://64.media.tumblr.com/eb56931a8ddbbbd1819d0cb1c1dd2fdf/4ecaa13c6add3234-f3/s500x750/8582b222d32baa85949eaf678002600fb00ea3dd.pnj 500w, https://64.media.tumblr.com/eb56931a8ddbbbd1819d0cb1c1dd2fdf/4ecaa13c6add3234-f3/s540x810/37788264ab4ce2bcf7127e99c5b22057f8372111.pnj 540w, https://64.media.tumblr.com/eb56931a8ddbbbd1819d0cb1c1dd2fdf/4ecaa13c6add3234-f3/s640x960/baf2371fe03facfa2c340be37eba8d59eef73075.pnj 640w, https://64.media.tumblr.com/eb56931a8ddbbbd1819d0cb1c1dd2fdf/4ecaa13c6add3234-f3/s1280x1920/73ced89256c588d299aa70e50c5403bc11607246.pnj 1073w",

        //gallery settings
        name: "Candy in a Glass (Lineart)",
        descrip: "The lineart of the drawing. ",
        bg: "None",
        ratio: "1073/1244",

        //commision settings
        numChar: 1,
        finish: 1, //[0, 4]
        size: 3,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1xsQ4cPfj4h2fYU7JqKQ2akdeY4aFEpFS",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/b063f75b355092ac2d27f4cf330c1824/af5cab4c5cb0b6f0-78/s100x200/cd0d5e58ae1f3284328f6ef73bbbc4a1c2e40339.pnj 100w, https://64.media.tumblr.com/b063f75b355092ac2d27f4cf330c1824/af5cab4c5cb0b6f0-78/s250x400/fc74afc8529476dbdadee6b07d16aaf510ccd074.pnj 250w, https://64.media.tumblr.com/b063f75b355092ac2d27f4cf330c1824/af5cab4c5cb0b6f0-78/s400x600/8deb9e11be1e2ccb94dd4764b415139c0a6d9f3d.pnj 400w, https://64.media.tumblr.com/b063f75b355092ac2d27f4cf330c1824/af5cab4c5cb0b6f0-78/s500x750/86b958bc6432ea69042782ab5c7de33bbaaf9cf2.pnj 500w, https://64.media.tumblr.com/b063f75b355092ac2d27f4cf330c1824/af5cab4c5cb0b6f0-78/s540x810/3898876d82d573c331ac654848b36976e59d0683.pnj 540w, https://64.media.tumblr.com/b063f75b355092ac2d27f4cf330c1824/af5cab4c5cb0b6f0-78/s640x960/dfb3258df420cd525744ef016b984640aa9b269a.pnj 640w, https://64.media.tumblr.com/b063f75b355092ac2d27f4cf330c1824/af5cab4c5cb0b6f0-78/s1280x1920/33d778b471f76f37e91f4ff131acab912408d2ab.pnj 1280w, https://64.media.tumblr.com/b063f75b355092ac2d27f4cf330c1824/af5cab4c5cb0b6f0-78/s2048x3072/07f96ea19fbad3ad2439fa928c016971735c1b0b.pnj 1895w",

        //gallery settings
        name: "Glazeling",
        descrip: "Ealier version of the character. ",
        bg: "None",
        ratio: "1895/2067",

        //commision settings
        numChar: 1,
        finish: 3, //[0, 4]
        size: 3,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1wDn21iEUzozZUPJwcZpl8wK5PaFZ4W1q",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/5c3d07cdf4403ec3ecb1b731cfbf7bc6/a77ecf83b5adf769-17/s100x200/dde77dce44c11eee47e377e04b255f17e7c3bbe1.pnj 100w, https://64.media.tumblr.com/5c3d07cdf4403ec3ecb1b731cfbf7bc6/a77ecf83b5adf769-17/s250x400/3449a78ce64272934b39951d51cd8d8eb156369b.pnj 250w, https://64.media.tumblr.com/5c3d07cdf4403ec3ecb1b731cfbf7bc6/a77ecf83b5adf769-17/s400x600/3c87094f3810a217626b124c043a156d2ef3abb3.pnj 400w, https://64.media.tumblr.com/5c3d07cdf4403ec3ecb1b731cfbf7bc6/a77ecf83b5adf769-17/s500x750/1941ac7da70b1d9f3bcaded1fb8eaaa3c3976268.pnj 500w, https://64.media.tumblr.com/5c3d07cdf4403ec3ecb1b731cfbf7bc6/a77ecf83b5adf769-17/s540x810/db7ccb652ca67ec2129cb484c6f9adde3a87e630.pnj 540w, https://64.media.tumblr.com/5c3d07cdf4403ec3ecb1b731cfbf7bc6/a77ecf83b5adf769-17/s640x960/752ebebff6c7bef13348fb46fa75260691e3a84f.pnj 640w, https://64.media.tumblr.com/5c3d07cdf4403ec3ecb1b731cfbf7bc6/a77ecf83b5adf769-17/s1280x1920/0502fbb2b779324ce59b15e91bbb79f9cda14b84.pnj 1280w, https://64.media.tumblr.com/5c3d07cdf4403ec3ecb1b731cfbf7bc6/a77ecf83b5adf769-17/s2048x3072/998f9655de72875caf898150a5b74dab3cdff218.pnj 2048w",

        //gallery settings
        name: "Cyborg",
        descrip: "",
        bg: "white",
        ratio: "1/1",

        //commision settings
        numChar: 1,
        finish: 2, //[0, 4]
        size: 3,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1xLwkLbgj38jbdQhE3kNJCNdmuynLHI69",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/a82a10c5462f6710c05d873c05b778f4/a77ecf83b5adf769-cb/s100x200/5cbff2e7f24690b4f130f506518770d5f185e335.pnj 100w, https://64.media.tumblr.com/a82a10c5462f6710c05d873c05b778f4/a77ecf83b5adf769-cb/s250x400/61626d75c3630f9613901ae0169b6c4ad66b84c4.pnj 250w, https://64.media.tumblr.com/a82a10c5462f6710c05d873c05b778f4/a77ecf83b5adf769-cb/s400x600/b4c6b0e60e1755e8f8d4abfb72dee198d2a04d4e.pnj 400w, https://64.media.tumblr.com/a82a10c5462f6710c05d873c05b778f4/a77ecf83b5adf769-cb/s500x750/53cae3c22c407c3bb088b0d710ffddde45ca9a4a.pnj 500w, https://64.media.tumblr.com/a82a10c5462f6710c05d873c05b778f4/a77ecf83b5adf769-cb/s540x810/89a7e007b9c3823b30e72158672794a8feffe0d2.pnj 540w, https://64.media.tumblr.com/a82a10c5462f6710c05d873c05b778f4/a77ecf83b5adf769-cb/s640x960/b6d4c91536b650acb509f210dc0f3782020b016e.pnj 640w, https://64.media.tumblr.com/a82a10c5462f6710c05d873c05b778f4/a77ecf83b5adf769-cb/s1280x1920/91b6f84a51c87e35cb55fb8783aaf11af1e0f8cf.pnj 1280w, https://64.media.tumblr.com/a82a10c5462f6710c05d873c05b778f4/a77ecf83b5adf769-cb/s2048x3072/833c6748ad70854d61b6c4321aaea0d7fe371e2e.pnj 2048w",

        //gallery settings
        name: "Cyborg (Lineart)",
        descrip: "",
        bg: "white",
        ratio: "1/1",

        //commision settings
        numChar: 1,
        finish: 1, //[0, 4]
        size: 3,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "16F0zLC1Znwcl1JTvJ520fiEomBCPxC-h",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/891e268b3e0aa3e1c94e78d6407df7e0/a77ecf83b5adf769-55/s100x200/35d94b6c634d9c1d3119646ca4404ba25ebbb279.pnj 100w, https://64.media.tumblr.com/891e268b3e0aa3e1c94e78d6407df7e0/a77ecf83b5adf769-55/s250x400/585d824c22f285c4f1f58843d2d1588f6da1d376.pnj 250w, https://64.media.tumblr.com/891e268b3e0aa3e1c94e78d6407df7e0/a77ecf83b5adf769-55/s400x600/0ce8616561f1991d3c3b33701f04a5714b1ab4da.pnj 400w, https://64.media.tumblr.com/891e268b3e0aa3e1c94e78d6407df7e0/a77ecf83b5adf769-55/s500x750/7c06a0704894b66f1276b96f03c390e19a27c05f.pnj 500w, https://64.media.tumblr.com/891e268b3e0aa3e1c94e78d6407df7e0/a77ecf83b5adf769-55/s540x810/94efa4aec1e414ed84c87465d297b2c2ca2fb27b.pnj 540w, https://64.media.tumblr.com/891e268b3e0aa3e1c94e78d6407df7e0/a77ecf83b5adf769-55/s640x960/a7efeb5fe0756ac783775c73df2c87057c9cddde.pnj 640w, https://64.media.tumblr.com/891e268b3e0aa3e1c94e78d6407df7e0/a77ecf83b5adf769-55/s1280x1920/f42b021918213407d95c01ff2bc6534d603839c5.pnj 1280w, https://64.media.tumblr.com/891e268b3e0aa3e1c94e78d6407df7e0/a77ecf83b5adf769-55/s2048x3072/3cb50e878bdb44c831ba4b75e0dfad8aeb952c83.pnj 2048w",

        //gallery settings
        name: "Cyborg (sketch)",
        descrip: "The reverse side was not completed in the sebsequent drawings.",
        bg: "white",
        ratio: "1/1",

        //commision settings
        numChar: 1,
        finish: 0, //[0, 4]
        size: 3,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //missing
        //google access
        id: "1oYEfB3ty8M8Idp3VhZYKgS2FuU05N51x",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/e95b39e7ad3a3d8d2c00ad5944f8b0f3/488423cb8c58869c-be/s100x200/5ba224a4329dffb3b12ca07da470028e32d470dc.pnj 100w, https://64.media.tumblr.com/e95b39e7ad3a3d8d2c00ad5944f8b0f3/488423cb8c58869c-be/s250x400/bc5f15da304827d4ad5c9db6bcb945f5d53d98ae.pnj 250w, https://64.media.tumblr.com/e95b39e7ad3a3d8d2c00ad5944f8b0f3/488423cb8c58869c-be/s400x600/184bf30c534db17d3c1c8b8e916ee0e3cbe4971c.pnj 400w, https://64.media.tumblr.com/e95b39e7ad3a3d8d2c00ad5944f8b0f3/488423cb8c58869c-be/s500x750/d51cf20eddad4cde40f68cfb7d3950053b8a0a62.pnj 500w, https://64.media.tumblr.com/e95b39e7ad3a3d8d2c00ad5944f8b0f3/488423cb8c58869c-be/s540x810/00dbc07feca1dfcb2fe9a8785a1efe2a9356f02c.pnj 540w, https://64.media.tumblr.com/e95b39e7ad3a3d8d2c00ad5944f8b0f3/488423cb8c58869c-be/s640x960/476b4eb497d60045d1cf197d9b757ec8a0af00a0.pnj 640w, https://64.media.tumblr.com/e95b39e7ad3a3d8d2c00ad5944f8b0f3/488423cb8c58869c-be/s1280x1920/e7b669e849e6e0ae4392478ed4ccca50e5508575.pnj 1280w, https://64.media.tumblr.com/e95b39e7ad3a3d8d2c00ad5944f8b0f3/488423cb8c58869c-be/s2048x3072/bd789473193078a35c55df10069f87ac784e0fdc.pnj 2000w",

        //gallery settings
        name: "Cabin",
        descrip: "Colour addded through multiply.",
        bg: "None",
        ratio: "1",

        //commision settings
        numChar: 1,
        finish: 4, //[0, 4]
        size: 2,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //missing
        //google access
        id: "1HJGBIEShj1cgcfa34POY1GIaE79p-DMi",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/1887097a074490da02f6adde2d35d6fb/488423cb8c58869c-16/s100x200/2d5db2004aba1da00e629b3e9188546e7e6821ca.pnj 100w, https://64.media.tumblr.com/1887097a074490da02f6adde2d35d6fb/488423cb8c58869c-16/s250x400/0b36f39272082e9b2f2018e90b859d63c0f0e735.pnj 250w, https://64.media.tumblr.com/1887097a074490da02f6adde2d35d6fb/488423cb8c58869c-16/s400x600/a9e6a4a5a4f1cdf335a74730076534fefc5d8123.pnj 400w, https://64.media.tumblr.com/1887097a074490da02f6adde2d35d6fb/488423cb8c58869c-16/s500x750/57dfd207490b58d0b95fba79627e18c998a9b92e.pnj 500w, https://64.media.tumblr.com/1887097a074490da02f6adde2d35d6fb/488423cb8c58869c-16/s540x810/cdd69d1e86b33a406e20e7099db775eade0f167c.pnj 540w, https://64.media.tumblr.com/1887097a074490da02f6adde2d35d6fb/488423cb8c58869c-16/s640x960/92097eeb622155744bd7ca29c388190d6d6db976.pnj 640w, https://64.media.tumblr.com/1887097a074490da02f6adde2d35d6fb/488423cb8c58869c-16/s1280x1920/eb3479d84a8a1f83983bfe0c6be3159d6a07ec33.pnj 1280w, https://64.media.tumblr.com/1887097a074490da02f6adde2d35d6fb/488423cb8c58869c-16/s2048x3072/105b633ea3ae6f0734030bcd61bcfd6df89b4560.pnj 2000w",

        //gallery settings
        name: "Cabin (No Color)",
        descrip: "Without colour addition.",
        bg: "None",
        ratio: "1",

        //commision settings
        numChar: 1,
        finish: 4, //[0, 4]
        size: 2,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //missing
        //google access
        id: "1B-jZ7SVVHXPuaJ0zlXzRSs90Xcy6en2J",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/39374a4b38cc9860cca5b0b7ad857d50/488423cb8c58869c-c2/s100x200/9049f2577550176515e41a7d635a75c6ee28be6e.pnj 100w, https://64.media.tumblr.com/39374a4b38cc9860cca5b0b7ad857d50/488423cb8c58869c-c2/s250x400/9488d54bc86a00aec182a820cf38e842d18c02fc.pnj 250w, https://64.media.tumblr.com/39374a4b38cc9860cca5b0b7ad857d50/488423cb8c58869c-c2/s400x600/0abf16ee3e2cdaad804e6b35f0f20c46d0165045.pnj 400w, https://64.media.tumblr.com/39374a4b38cc9860cca5b0b7ad857d50/488423cb8c58869c-c2/s500x750/ece74b744239b30315ec483d78a8d9157cd7321d.pnj 500w, https://64.media.tumblr.com/39374a4b38cc9860cca5b0b7ad857d50/488423cb8c58869c-c2/s540x810/4ae214c7623ae9c988bb548f8a1f510e385ffadf.pnj 540w, https://64.media.tumblr.com/39374a4b38cc9860cca5b0b7ad857d50/488423cb8c58869c-c2/s640x960/b6c88c147780b7094f272f10bf04067076af613c.pnj 640w, https://64.media.tumblr.com/39374a4b38cc9860cca5b0b7ad857d50/488423cb8c58869c-c2/s1280x1920/1a2efab7dc69e116ee29891a155a19cd385fffa7.pnj 1280w, https://64.media.tumblr.com/39374a4b38cc9860cca5b0b7ad857d50/488423cb8c58869c-c2/s2048x3072/aad3f9f919428a1580a85914ac6a41a9c4660098.pnj 2000w",

        //gallery settings
        name: "Cabin (3D model)",
        descrip: "Blender 3D model render. No materials were used. ",
        bg: "green",
        ratio: "1",

        //commision settings
        numChar: 0,
        finish: 4, //[0, 4]
        size: 0,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //missing
        //google access
        id: "17XvbsYSjO8bkfzBwTf63GddFwY_KfuKq",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/932188d397e2326e899aa716ddb76f10/488423cb8c58869c-4c/s100x200/27ccb89590e3b0c5d1dfff01b18573c28fdfe006.pnj 100w, https://64.media.tumblr.com/932188d397e2326e899aa716ddb76f10/488423cb8c58869c-4c/s250x400/5cd85f3614eaa8de7521342c29263c1b7e36fdc9.pnj 250w, https://64.media.tumblr.com/932188d397e2326e899aa716ddb76f10/488423cb8c58869c-4c/s400x600/0a8bf8367650786ebcc7da792e1209291df5ead8.pnj 400w, https://64.media.tumblr.com/932188d397e2326e899aa716ddb76f10/488423cb8c58869c-4c/s500x750/53b734b8bbe3946b8e637cfa2b5459f7159357e1.pnj 500w, https://64.media.tumblr.com/932188d397e2326e899aa716ddb76f10/488423cb8c58869c-4c/s540x810/e772de5d0ade3e0a83fc34087670b1af5abe1d0a.pnj 540w, https://64.media.tumblr.com/932188d397e2326e899aa716ddb76f10/488423cb8c58869c-4c/s640x960/4f46652826d20992944d19faf1e81b0c940e2c11.pnj 640w, https://64.media.tumblr.com/932188d397e2326e899aa716ddb76f10/488423cb8c58869c-4c/s1280x1920/2344490464f229f964cded8d89876b27db3a2586.pnj 1000w",

        //gallery settings
        name: "Cabin (sketch)",
        descrip: "The initial sketch the model and painting was based on. ",
        bg: "None",
        ratio: "1",

        //commision settings
        numChar: 1,
        finish: 0, //[0, 4]
        size: 2,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1lZaXg7FInVy4OgtlsJMYVzrdcxF_ytHR",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/fc4923925166c7b0948d4f3cccd7403a/269e8b6c5b3b076d-80/s100x200/b1c719c5f6e5ae40b810d45bfb08f54d8537e7f7.pnj 100w, https://64.media.tumblr.com/fc4923925166c7b0948d4f3cccd7403a/269e8b6c5b3b076d-80/s250x400/d49897de936fde6502ecf5b52578554ed110e624.pnj 250w, https://64.media.tumblr.com/fc4923925166c7b0948d4f3cccd7403a/269e8b6c5b3b076d-80/s400x600/5c185d545e5e20914d0ef8bc627b21c2847c1da1.pnj 400w, https://64.media.tumblr.com/fc4923925166c7b0948d4f3cccd7403a/269e8b6c5b3b076d-80/s500x750/f373afa054bdeb773ad13b4a6bac74620d5add57.pnj 500w, https://64.media.tumblr.com/fc4923925166c7b0948d4f3cccd7403a/269e8b6c5b3b076d-80/s540x810/d9dcb1022c4dfb81a0e81cbdcf3de8c1ae614247.pnj 540w, https://64.media.tumblr.com/fc4923925166c7b0948d4f3cccd7403a/269e8b6c5b3b076d-80/s640x960/c21ab3ce1e6043b781284de825b3b1473de857f4.pnj 640w, https://64.media.tumblr.com/fc4923925166c7b0948d4f3cccd7403a/269e8b6c5b3b076d-80/s1280x1920/8a8e6cd4cb86a18e4583dbe6516c9cbab3be0549.pnj 1280w, https://64.media.tumblr.com/fc4923925166c7b0948d4f3cccd7403a/269e8b6c5b3b076d-80/s2048x3072/6a1e0c286b1f3e1ded40d44aa79cb466e431634a.pnj 1620w",

        //gallery settings
        name: "Glazelings Design and Thumbnails",
        descrip: "Redesigning the glazelings.",
        bg: "None",
        ratio: "81/59",

        //commision settings
        numChar: 3,
        finish: 2, //[0, 4]
        size: 3,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //missing
        //google access
        id: "1qm-9-OA6XU1WuL1-o4cIhDmQOoGXLx6V",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/a38d0e0227bca385a7c1ff17679e9904/269e8b6c5b3b076d-46/s100x200/da75f1608a2014562d4658f41836b55c7d51b17d.pnj 100w, https://64.media.tumblr.com/a38d0e0227bca385a7c1ff17679e9904/269e8b6c5b3b076d-46/s250x400/a4e6cc4a28cfc661e4b652c75647d55f8694e3e3.pnj 250w, https://64.media.tumblr.com/a38d0e0227bca385a7c1ff17679e9904/269e8b6c5b3b076d-46/s400x600/530ee097429b47dfa07d89a842987f415912d060.pnj 400w, https://64.media.tumblr.com/a38d0e0227bca385a7c1ff17679e9904/269e8b6c5b3b076d-46/s500x750/2de38add5905b7008ff2ef1774fcf6df0394594b.pnj 500w, https://64.media.tumblr.com/a38d0e0227bca385a7c1ff17679e9904/269e8b6c5b3b076d-46/s540x810/57087951501988fe0250393860f56f5f0365ed59.pnj 540w, https://64.media.tumblr.com/a38d0e0227bca385a7c1ff17679e9904/269e8b6c5b3b076d-46/s640x960/02e03fcb773f1f0da6a59e78074e38334469111a.pnj 640w, https://64.media.tumblr.com/a38d0e0227bca385a7c1ff17679e9904/269e8b6c5b3b076d-46/s1280x1920/f3d700a84a665abb8e3ea167c218327909b714b3.pnj 1280w, https://64.media.tumblr.com/a38d0e0227bca385a7c1ff17679e9904/269e8b6c5b3b076d-46/s2048x3072/17b3fa41c1d6032769495de5b41b5c016a9295e8.pnj 2048w",

        //gallery settings
        name: "Map of Caves (Bottom)",
        descrip: "The bottom layer of the glass caves. ",
        bg: "None",
        ratio: "1",

        //commision settings
        numChar: 0,
        finish: 0, //[0, 4]
        size: 0,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //missing
        //google access
        id: "1Mvw03Gfp185c2UEkNEcw-ACayfnUnJnS",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/5cfbe0d5f5c2f8d8bf32d7570229f75d/269e8b6c5b3b076d-67/s100x200/50acec82c8109da608fd250b5134f66a3b80d60f.pnj 100w, https://64.media.tumblr.com/5cfbe0d5f5c2f8d8bf32d7570229f75d/269e8b6c5b3b076d-67/s250x400/145e63ecaf601bf8cf48dce65a9d113ecc4207c3.pnj 250w, https://64.media.tumblr.com/5cfbe0d5f5c2f8d8bf32d7570229f75d/269e8b6c5b3b076d-67/s400x600/8aa86f54ad3e793cd62333d2285b31f529fbaee9.pnj 400w, https://64.media.tumblr.com/5cfbe0d5f5c2f8d8bf32d7570229f75d/269e8b6c5b3b076d-67/s500x750/ddf53f607b974ec1faa1baa878af05076e89b94d.pnj 500w, https://64.media.tumblr.com/5cfbe0d5f5c2f8d8bf32d7570229f75d/269e8b6c5b3b076d-67/s540x810/3c08a6134d4e4484ba5fc4de1c8a93778e8c3958.pnj 540w, https://64.media.tumblr.com/5cfbe0d5f5c2f8d8bf32d7570229f75d/269e8b6c5b3b076d-67/s640x960/344a7ec91cdeb187f0e9893f117ca9c9b17fbc2d.pnj 640w, https://64.media.tumblr.com/5cfbe0d5f5c2f8d8bf32d7570229f75d/269e8b6c5b3b076d-67/s1280x1920/83c9484e1d3e4921ba4c3916145748b36f0b2757.pnj 1280w, https://64.media.tumblr.com/5cfbe0d5f5c2f8d8bf32d7570229f75d/269e8b6c5b3b076d-67/s2048x3072/5645834e8b8a2d1d95602a878d258797dd504a5f.pnj 2048w",

        //gallery settings
        name: "Map of Caves (Top)",
        descrip: "The upper layer of the glass caves",
        bg: "None",
        ratio: "1",

        //commision settings
        numChar: 0,
        finish: 0, //[0, 4]
        size: 0,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //76
        //google access
        id: "1acL8ySn3NyhQEz44lWpnbBqybXUfG0qY",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/71daa857f66d17bbd4aa6fe35792f829/269e8b6c5b3b076d-05/s100x200/7fa4bcf383ac89ccdadf9d476609e36b94535a1a.pnj 100w, https://64.media.tumblr.com/71daa857f66d17bbd4aa6fe35792f829/269e8b6c5b3b076d-05/s250x400/de578fa03ed80a08c979027d80e2d2fde11ba724.pnj 250w, https://64.media.tumblr.com/71daa857f66d17bbd4aa6fe35792f829/269e8b6c5b3b076d-05/s400x600/aa9229479164a21a4f3f1061942cb77a7bd427ef.pnj 400w, https://64.media.tumblr.com/71daa857f66d17bbd4aa6fe35792f829/269e8b6c5b3b076d-05/s500x750/868402aac0f24249ad0a9cbc8c20600480b6ee91.pnj 500w, https://64.media.tumblr.com/71daa857f66d17bbd4aa6fe35792f829/269e8b6c5b3b076d-05/s540x810/0d20f3047113ffa9defc6be3503dece2d10072a7.pnj 540w, https://64.media.tumblr.com/71daa857f66d17bbd4aa6fe35792f829/269e8b6c5b3b076d-05/s640x960/9216504f85f0e0f52487f39192635f5766d4224b.pnj 640w, https://64.media.tumblr.com/71daa857f66d17bbd4aa6fe35792f829/269e8b6c5b3b076d-05/s1280x1920/25b7d07b2f8005fb47eee4acc4b2e29056de41b6.pnj 1280w, https://64.media.tumblr.com/71daa857f66d17bbd4aa6fe35792f829/269e8b6c5b3b076d-05/s2048x3072/88dc0facf77656ef923456b0c5f56d1c82fa2ffe.pnj 2048w",

        //gallery settings
        name: "Glass Caves",
        descrip: "A view of the glass caves. ",
        bg: "None",
        ratio: "2048/1375",

        //commision settings
        numChar: 0,
        finish: 4, //[0, 4]
        size: 0,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //77
        //google access
        id: "1Qz6J1H9dfR6WXXLZLWdFOJdUXiaXzMhA",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/5d074b11e58970f369860d7104436537/269e8b6c5b3b076d-bf/s100x200/28b671907271094e1a4aa416f50187044190c00c.pnj 100w, https://64.media.tumblr.com/5d074b11e58970f369860d7104436537/269e8b6c5b3b076d-bf/s250x400/0c5a6e695b82c084ebd34c988fe4990db9b380df.pnj 250w, https://64.media.tumblr.com/5d074b11e58970f369860d7104436537/269e8b6c5b3b076d-bf/s400x600/02b6cb067983baba5cc90924536a94fc8b85a7d2.pnj 400w, https://64.media.tumblr.com/5d074b11e58970f369860d7104436537/269e8b6c5b3b076d-bf/s500x750/6eb40627019ab2de2cfb0cebe715100c922ca2a1.pnj 500w, https://64.media.tumblr.com/5d074b11e58970f369860d7104436537/269e8b6c5b3b076d-bf/s540x810/e56a49d1eace3d6ea33c1a458d33375bbebcb7c5.pnj 540w, https://64.media.tumblr.com/5d074b11e58970f369860d7104436537/269e8b6c5b3b076d-bf/s640x960/f8c978d2fce994e19d64a2aa6a6bca54320661b7.pnj 640w, https://64.media.tumblr.com/5d074b11e58970f369860d7104436537/269e8b6c5b3b076d-bf/s1280x1920/d1be5a649f6c2a88c06469c791beb1bce03e69f3.pnj 1280w, https://64.media.tumblr.com/5d074b11e58970f369860d7104436537/269e8b6c5b3b076d-bf/s2048x3072/f17b9791034154d855695e7fb4cee7d396ba5b96.pnj 2048w",

        //gallery settings
        name: "Trees",
        descrip: "Initial design for glazelings and the glass caves, including the glass trees. ",
        bg: "black",
        ratio: "1",

        //commision settings
        numChar: 0,
        finish: 4, //[0, 4]
        size: 0,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //78
        //google access
        id: "12P97M-ZxchS5VpGuyTkee51mcD9JpEZj",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/cac12f4406d30e4854119c421677540d/6bfce1aff97360a7-86/s100x200/84ba58f4dbd5bb426a7095f344735bde5e25739b.pnj 100w, https://64.media.tumblr.com/cac12f4406d30e4854119c421677540d/6bfce1aff97360a7-86/s250x400/23ade49efe775306b876598c09234659652d9b16.pnj 250w, https://64.media.tumblr.com/cac12f4406d30e4854119c421677540d/6bfce1aff97360a7-86/s400x600/d43ad5573f8b87682e2dea63dc219956202b35c7.pnj 400w, https://64.media.tumblr.com/cac12f4406d30e4854119c421677540d/6bfce1aff97360a7-86/s500x750/dd57c03af4350b97ca755423db5965d9552b5584.pnj 500w, https://64.media.tumblr.com/cac12f4406d30e4854119c421677540d/6bfce1aff97360a7-86/s540x810/d04f53430aed9c2e0e6bbb87ecd8b0fb8055a122.pnj 540w, https://64.media.tumblr.com/cac12f4406d30e4854119c421677540d/6bfce1aff97360a7-86/s640x960/31713c150831ff41547fc0a6db3259ee2179e000.pnj 640w, https://64.media.tumblr.com/cac12f4406d30e4854119c421677540d/6bfce1aff97360a7-86/s1280x1920/b0ead684839243870e7562ce54498aace2a3e532.pnj 1244w",

        //gallery settings
        name: "Glazeling C",
        descrip: "",
        bg: "None",
        ratio: "622/571",

        //commision settings
        numChar: 1,
        finish: 3, //[0, 4]
        size: 3,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1Qwixn3uaLH1VwOdGXIc88ckH8XidlVa6",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/26dcefab8f2c01bd36c5eae7e80f6c6d/6bfce1aff97360a7-52/s100x200/78816672a53e9c753fddfb9326d8764b2f831895.pnj 100w, https://64.media.tumblr.com/26dcefab8f2c01bd36c5eae7e80f6c6d/6bfce1aff97360a7-52/s250x400/45ff549c9bd81e3447e31b816ba04b9dc198fbc4.pnj 250w, https://64.media.tumblr.com/26dcefab8f2c01bd36c5eae7e80f6c6d/6bfce1aff97360a7-52/s400x600/625583a6536aabbe4e21848b2814b933ed6881aa.pnj 400w, https://64.media.tumblr.com/26dcefab8f2c01bd36c5eae7e80f6c6d/6bfce1aff97360a7-52/s500x750/8ba982dfc9f55ec5808c8889ba4bbe4db0d28f72.pnj 500w, https://64.media.tumblr.com/26dcefab8f2c01bd36c5eae7e80f6c6d/6bfce1aff97360a7-52/s540x810/6563a6ca8efb1099b318d7b013ba86b621e18a03.pnj 540w, https://64.media.tumblr.com/26dcefab8f2c01bd36c5eae7e80f6c6d/6bfce1aff97360a7-52/s640x960/3b7fb22eef323bea38d1f83cabf814d8796f5bfc.pnj 640w, https://64.media.tumblr.com/26dcefab8f2c01bd36c5eae7e80f6c6d/6bfce1aff97360a7-52/s1280x1920/92e1f9c30fb2af3f9c89c561db251ac15aa45c96.pnj 1244w",

        //gallery settings
        name: "Glazeling B",
        descrip: "",
        bg: "None",
        ratio: "622/571",

        //commision settings
        numChar: 1,
        finish: 2, //[0, 4]
        size: 3,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //80
        //google access
        id: "1luh9MuRu53G3HwhrHB_4BZIaM9kOSNtR",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/09156da475a7514e1e49e709e7387c79/6bfce1aff97360a7-bc/s100x200/8d63041f278d83bcb6ff377a5f4a1c3c3426474b.pnj 100w, https://64.media.tumblr.com/09156da475a7514e1e49e709e7387c79/6bfce1aff97360a7-bc/s250x400/4c12aca48020e604331e65ac2f78c427dd5ad675.pnj 250w, https://64.media.tumblr.com/09156da475a7514e1e49e709e7387c79/6bfce1aff97360a7-bc/s400x600/a12beec58cb13b817a22ff3be3665e8240b1cb64.pnj 400w, https://64.media.tumblr.com/09156da475a7514e1e49e709e7387c79/6bfce1aff97360a7-bc/s500x750/92d43cb033fe4eb04bc7075837c504a8741aa79f.pnj 500w, https://64.media.tumblr.com/09156da475a7514e1e49e709e7387c79/6bfce1aff97360a7-bc/s540x810/ddf13b449ac6f34148f57e01ca53af530d88f356.pnj 540w, https://64.media.tumblr.com/09156da475a7514e1e49e709e7387c79/6bfce1aff97360a7-bc/s640x960/856c2cef807dee5a3c9ae999fca13674bcbbdcbe.pnj 640w, https://64.media.tumblr.com/09156da475a7514e1e49e709e7387c79/6bfce1aff97360a7-bc/s1280x1920/dcf31df00888d9ef90bbdd117adc18be42758ec3.pnj 1244w",

        //gallery settings
        name: "Glazeling A",
        descrip: "",
        bg: "None",
        ratio: "622/571",

        //commision settings
        numChar: 1,
        finish: 2, //[0, 4]
        size: 3,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1R3Ph6ybSYopLBQNSdgeJuYxYqvj8m_5D",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/0fa32321b83d4d9cda0e646b2334d0c8/af5cab4c5cb0b6f0-b5/s100x200/ad34e85eb2a0490dde732ee4b94c32cf06830332.pnj 100w, https://64.media.tumblr.com/0fa32321b83d4d9cda0e646b2334d0c8/af5cab4c5cb0b6f0-b5/s250x400/c4f39db21ca5d37b44881798220e84a734e27dc9.pnj 250w, https://64.media.tumblr.com/0fa32321b83d4d9cda0e646b2334d0c8/af5cab4c5cb0b6f0-b5/s400x600/8eccba36b77fd65bef1e24f735b750b6df36c9c4.pnj 400w, https://64.media.tumblr.com/0fa32321b83d4d9cda0e646b2334d0c8/af5cab4c5cb0b6f0-b5/s500x750/add950ef1012ef7f272a7dc473c017d4dcf21322.pnj 500w, https://64.media.tumblr.com/0fa32321b83d4d9cda0e646b2334d0c8/af5cab4c5cb0b6f0-b5/s540x810/3bba0e611e9ec6889678197d150448bd22a9840e.pnj 540w, https://64.media.tumblr.com/0fa32321b83d4d9cda0e646b2334d0c8/af5cab4c5cb0b6f0-b5/s640x960/15af03e6d2707991708a7b6f9fa2c9cb4f71e196.pnj 640w, https://64.media.tumblr.com/0fa32321b83d4d9cda0e646b2334d0c8/af5cab4c5cb0b6f0-b5/s1280x1920/1a3eb49ad627b6da9584dae5fae6a530e2923dc0.pnj 1280w, https://64.media.tumblr.com/0fa32321b83d4d9cda0e646b2334d0c8/af5cab4c5cb0b6f0-b5/s2048x3072/aef2c87c9f6c9fc1d5b6817ce2d8431744a0b7e2.pnj 2048w",

        //gallery settings
        name: "Character Designs",
        descrip: "Their precious eyes. ",
        bg: "None",
        ratio: "4/3",

        //commision settings
        numChar: 6,
        finish: 3, //[0, 4]
        size: 3,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1XDsxF6HTy2lp8dG0vXAJgVDDECGsIGdj",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/d1c9d53ff6c12ba8b7e9d4f04c52e1f9/af5cab4c5cb0b6f0-e1/s100x200/df5d1e829b26b95696116d42b0e914ee20129939.pnj 100w, https://64.media.tumblr.com/d1c9d53ff6c12ba8b7e9d4f04c52e1f9/af5cab4c5cb0b6f0-e1/s250x400/cb0198c652912ca0074ab5ec73b32da53e7ee830.pnj 250w, https://64.media.tumblr.com/d1c9d53ff6c12ba8b7e9d4f04c52e1f9/af5cab4c5cb0b6f0-e1/s400x600/665cac5d6c32507e8a8fb773a2b1f763bf7d6634.pnj 400w, https://64.media.tumblr.com/d1c9d53ff6c12ba8b7e9d4f04c52e1f9/af5cab4c5cb0b6f0-e1/s500x750/ce706778811ab865cc77cd8da54504a23a21fe44.pnj 500w, https://64.media.tumblr.com/d1c9d53ff6c12ba8b7e9d4f04c52e1f9/af5cab4c5cb0b6f0-e1/s540x810/89f4eea537e4d6da4bbcb6aba69fb0c3a5640af7.pnj 540w, https://64.media.tumblr.com/d1c9d53ff6c12ba8b7e9d4f04c52e1f9/af5cab4c5cb0b6f0-e1/s640x960/f47eb826e2481951721b5989f9b07150714c691c.pnj 640w, https://64.media.tumblr.com/d1c9d53ff6c12ba8b7e9d4f04c52e1f9/af5cab4c5cb0b6f0-e1/s1280x1920/1eeeb02cdaab6dc4b7afe1af8372c488277aeed4.pnj 1280w, https://64.media.tumblr.com/d1c9d53ff6c12ba8b7e9d4f04c52e1f9/af5cab4c5cb0b6f0-e1/s2048x3072/a9cfcf823ce72fc5cb4cdfb66487d7a5d31c365f.pnj 2048w",

        //gallery settings
        name: "Sky Eels",
        descrip: "They fly towards other landmasses. ",
        bg: "None",
        ratio: "1",

        //commision settings
        numChar: 1,
        finish: 4, //[0, 4]
        size: 2,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1zZEEd-Wobx2AmgrDn7UV3NG251GnaPUZ",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/5a6dffbcb43d3bd62f7b1fe3f3cd7333/af5cab4c5cb0b6f0-ef/s100x200/a2d304594c3f8dae88dd090c40f14058f04e5049.pnj 100w, https://64.media.tumblr.com/5a6dffbcb43d3bd62f7b1fe3f3cd7333/af5cab4c5cb0b6f0-ef/s250x400/b7a4d57b1534cb3ac1277baf3cdcf582118e74c1.pnj 250w, https://64.media.tumblr.com/5a6dffbcb43d3bd62f7b1fe3f3cd7333/af5cab4c5cb0b6f0-ef/s400x600/329f6a023a6df8afa2e8f33f14139efed423498c.pnj 400w, https://64.media.tumblr.com/5a6dffbcb43d3bd62f7b1fe3f3cd7333/af5cab4c5cb0b6f0-ef/s500x750/75a009db83b8d874b8989a23ba15d9e4e4db040a.pnj 500w, https://64.media.tumblr.com/5a6dffbcb43d3bd62f7b1fe3f3cd7333/af5cab4c5cb0b6f0-ef/s540x810/60f004ee66fe59b521805b37e64fdc68c1ec85cd.pnj 540w, https://64.media.tumblr.com/5a6dffbcb43d3bd62f7b1fe3f3cd7333/af5cab4c5cb0b6f0-ef/s640x960/72268d3dfb881d954476c06f401c60d5d3af687a.pnj 640w, https://64.media.tumblr.com/5a6dffbcb43d3bd62f7b1fe3f3cd7333/af5cab4c5cb0b6f0-ef/s1280x1920/becac37c8a0df5d2ac17c755565b7915a316c252.pnj 1280w, https://64.media.tumblr.com/5a6dffbcb43d3bd62f7b1fe3f3cd7333/af5cab4c5cb0b6f0-ef/s2048x3072/ea1983a26ddceaa1ea9f8906b92dfbe4b43fc3cf.pnj 2048w",

        //gallery settings
        name: "Guard",
        descrip: "Character design and testing out uniforms. ",
        bg: "green",
        ratio: "1",

        //commision settings
        numChar: 1,
        finish: 3, //[0, 4]
        size: 3,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1_CyLNJHU48BVmsaaXkdMX3uUOMsV3Vzo",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/6d5d2c6f157f11cb6e5b2165cfba11e4/af5cab4c5cb0b6f0-8b/s100x200/ba33257ca5dc7238a4c569bead123fa12989a937.pnj 100w, https://64.media.tumblr.com/6d5d2c6f157f11cb6e5b2165cfba11e4/af5cab4c5cb0b6f0-8b/s250x400/e3440b30cd331697caa9e8ecadaecefab5a1a623.pnj 250w, https://64.media.tumblr.com/6d5d2c6f157f11cb6e5b2165cfba11e4/af5cab4c5cb0b6f0-8b/s400x600/9b2a2d6321e1b9e50281b61db197becd9fd750d5.pnj 400w, https://64.media.tumblr.com/6d5d2c6f157f11cb6e5b2165cfba11e4/af5cab4c5cb0b6f0-8b/s500x750/caa6d39a205d0ee6246395a4a200ac362f03ed13.pnj 500w, https://64.media.tumblr.com/6d5d2c6f157f11cb6e5b2165cfba11e4/af5cab4c5cb0b6f0-8b/s540x810/7a457f876b7baba76111a21549ed421e71d96ac2.pnj 540w, https://64.media.tumblr.com/6d5d2c6f157f11cb6e5b2165cfba11e4/af5cab4c5cb0b6f0-8b/s640x960/4c705fcb1b022d2db775dd595016b637b5418773.pnj 640w, https://64.media.tumblr.com/6d5d2c6f157f11cb6e5b2165cfba11e4/af5cab4c5cb0b6f0-8b/s1280x1920/cd0fda951e895bef816237852363bf06a2e430fd.pnj 1280w, https://64.media.tumblr.com/6d5d2c6f157f11cb6e5b2165cfba11e4/af5cab4c5cb0b6f0-8b/s2048x3072/2b6838817d56b8036156181f3013dd6c64837ca5.pnj 2048w",

        //gallery settings
        name: "Owner of the Seas",
        descrip: "",
        bg: "black",
        ratio: "1",

        //commision settings
        numChar: 1,
        finish: 3, //[0, 4]
        size: 3,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1xvjxqBvkGMWlLgNIHaThs-iqUVP3EVG1",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/80c6dbf7f469e201c41cd0998f9dcf09/1171c9d92e496c6a-c9/s100x200/05ec5ddcd60b83cad5584c08cc2cb3137ca1a327.pnj 100w, https://64.media.tumblr.com/80c6dbf7f469e201c41cd0998f9dcf09/1171c9d92e496c6a-c9/s250x400/09be94a30ad113fa0647418508003804fdf2f5ef.pnj 250w, https://64.media.tumblr.com/80c6dbf7f469e201c41cd0998f9dcf09/1171c9d92e496c6a-c9/s400x600/7357389a465653f2eac56c5518bebdc809ec6685.pnj 400w, https://64.media.tumblr.com/80c6dbf7f469e201c41cd0998f9dcf09/1171c9d92e496c6a-c9/s500x750/eebedd862ba0762e3226b0fb1875435b3ee5c38f.pnj 500w, https://64.media.tumblr.com/80c6dbf7f469e201c41cd0998f9dcf09/1171c9d92e496c6a-c9/s540x810/adbbce431802f777f96a7748ac3f361ab383115d.pnj 540w, https://64.media.tumblr.com/80c6dbf7f469e201c41cd0998f9dcf09/1171c9d92e496c6a-c9/s640x960/cc468c1dcb3328539c71253d188f95df9f1ac4b4.pnj 640w, https://64.media.tumblr.com/80c6dbf7f469e201c41cd0998f9dcf09/1171c9d92e496c6a-c9/s1280x1920/9b78971efcfdc124d995946cc6cab4737370fa48.pnj 1280w, https://64.media.tumblr.com/80c6dbf7f469e201c41cd0998f9dcf09/1171c9d92e496c6a-c9/s2048x3072/608950daaf047ab9e1c14067984d39d84b9b1310.pnj 2048w",

        //gallery settings
        name: "Jasmine",
        descrip: "",
        bg: "None",
        ratio: "536/405",

        //commision settings
        numChar: 1,
        finish: 4, //[0, 4]
        size: 2,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "17aogLMRW35qH6nPZ5I4WKKGTdT8OFfny",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/ff609f0f29061dc0123d80da5e9f41a0/af5cab4c5cb0b6f0-2c/s100x200/604cd2c97bdb076acc584b44251727437916bfa6.pnj 100w, https://64.media.tumblr.com/ff609f0f29061dc0123d80da5e9f41a0/af5cab4c5cb0b6f0-2c/s250x400/d1139ca8329a6f0fbd4b9c180583a4d3e9cc620a.pnj 250w, https://64.media.tumblr.com/ff609f0f29061dc0123d80da5e9f41a0/af5cab4c5cb0b6f0-2c/s400x600/00de59e6c5436bb1992533cc426b50390ab23f55.pnj 386w, https://64.media.tumblr.com/ff609f0f29061dc0123d80da5e9f41a0/af5cab4c5cb0b6f0-2c/s500x750/96c29282712a3cb227f63d862e057636a4d478e0.pnj 483w, https://64.media.tumblr.com/ff609f0f29061dc0123d80da5e9f41a0/af5cab4c5cb0b6f0-2c/s540x810/5dc02a2fd6d6ee9a33ceee05e48fc4a2619845cb.pnj 521w, https://64.media.tumblr.com/ff609f0f29061dc0123d80da5e9f41a0/af5cab4c5cb0b6f0-2c/s640x960/367ec0f1aed5942b0e89bd19ddc71a491007fb0d.pnj 618w, https://64.media.tumblr.com/ff609f0f29061dc0123d80da5e9f41a0/af5cab4c5cb0b6f0-2c/s1280x1920/8456d80ddd4764f5f92938a5cfb475891c85c2cc.pnj 1235w, https://64.media.tumblr.com/ff609f0f29061dc0123d80da5e9f41a0/af5cab4c5cb0b6f0-2c/s2048x3072/ee21781f6111f2b07b7ea781cf878e21ab953ba7.pnj 1976w",

        //gallery settings
        name: "Our Queen",
        descrip: "Infected with another soul, their mind is not their own.",
        bg: "None",
        ratio: "1999/3107",

        //commision settings
        numChar: 1,
        finish: 3, //[0, 4]
        size: 3,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //87
        //google access
        id: "1NssCSf7MQVM9oQUPaFIc73nv6N8s0616",

        //tumblr stuff
        srcset: "https://64.media.tumblr.com/e56342a656caa29b9be4d3a9e3ff4acd/55dfd5ac43cecb26-bd/s100x200/d2d4d868590fa98dbb86da9c9cae4ca51273a350.pnj 100w, https://64.media.tumblr.com/e56342a656caa29b9be4d3a9e3ff4acd/55dfd5ac43cecb26-bd/s250x400/9adb7608d69076a2027951104333196ee9a9cb61.pnj 250w, https://64.media.tumblr.com/e56342a656caa29b9be4d3a9e3ff4acd/55dfd5ac43cecb26-bd/s400x600/7739c5fad0ff0be26bc913367dba15b20ebd5f4a.pnj 400w, https://64.media.tumblr.com/e56342a656caa29b9be4d3a9e3ff4acd/55dfd5ac43cecb26-bd/s500x750/fc84b8d4e5c3d6f33184c7f650da2ff4a7a0abd6.pnj 500w, https://64.media.tumblr.com/e56342a656caa29b9be4d3a9e3ff4acd/55dfd5ac43cecb26-bd/s540x810/ccc2724719d13f542026dd1ce954481a94df1fc0.pnj 540w, https://64.media.tumblr.com/e56342a656caa29b9be4d3a9e3ff4acd/55dfd5ac43cecb26-bd/s640x960/8966a29ba1352e2baa2be1fc2b2eb4218793a401.pnj 640w, https://64.media.tumblr.com/e56342a656caa29b9be4d3a9e3ff4acd/55dfd5ac43cecb26-bd/s1280x1920/4292b33311e7dc1eb559ca073be052cce66932e5.pnj 1280w, https://64.media.tumblr.com/e56342a656caa29b9be4d3a9e3ff4acd/55dfd5ac43cecb26-bd/s2048x3072/efe59f75368d701134fdfeb902838e5aef06b71c.pnj 2048w",

        //gallery settings
        name: "Butterfly Heir",
        descrip: "",
        bg: "magenta",
        ratio: "1",

        //commision settings
        numChar: 1,
        finish: 3, //[0, 4]
        size: 3,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //88
        //google access
        id: "11K2qHY6kD_LEkGQ3fUcnsw7nQ3DWhel7",

        //tumblr stuff
        srcset: "https://64.media.tumblr.com/1ce18ec80b60b48a0accdc4df1c8f62c/55dfd5ac43cecb26-7a/s100x200/f088345d15b8695c732d229ae428db89b4eb7773.pnj 100w, https://64.media.tumblr.com/1ce18ec80b60b48a0accdc4df1c8f62c/55dfd5ac43cecb26-7a/s250x400/6654019d47fbbcb81915340c314e69d50abf1538.pnj 250w, https://64.media.tumblr.com/1ce18ec80b60b48a0accdc4df1c8f62c/55dfd5ac43cecb26-7a/s400x600/e21e119dc31a87575077ba224dd49e00af5b7da9.pnj 400w, https://64.media.tumblr.com/1ce18ec80b60b48a0accdc4df1c8f62c/55dfd5ac43cecb26-7a/s500x750/d94a09461775c19b901e4e00b65add5574eff4e8.pnj 500w, https://64.media.tumblr.com/1ce18ec80b60b48a0accdc4df1c8f62c/55dfd5ac43cecb26-7a/s540x810/33cb26fad81850d9f5301c378490ac900362cf98.pnj 540w, https://64.media.tumblr.com/1ce18ec80b60b48a0accdc4df1c8f62c/55dfd5ac43cecb26-7a/s640x960/ba637f789ab06b476cfd26d754b7ad841d5b90c9.pnj 640w, https://64.media.tumblr.com/1ce18ec80b60b48a0accdc4df1c8f62c/55dfd5ac43cecb26-7a/s1280x1920/48b08c71ba60105dc3bfd027d9db7d0e58dd2d4e.pnj 1280w, https://64.media.tumblr.com/1ce18ec80b60b48a0accdc4df1c8f62c/55dfd5ac43cecb26-7a/s2048x3072/a1430da85a89427f95865d35fa44313f6c4f4c99.pnj 2048w",

        //gallery settings
        name: "Butterfly Heir Back",
        descrip: "The sketch of the back of the character.",
        bg: "None",
        ratio: "1",

        //commision settings
        numChar: 1,
        finish: 0, //[0, 4]
        size: 3,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "178uAEXgbzYA13Yt2Guw27sPCccTY_7E4",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/750d16c9d2f1e8e55448ce05be35313d/af5cab4c5cb0b6f0-a7/s100x200/4cb6f95c0b776a77e9892117275ba499e1549cdb.pnj 100w, https://64.media.tumblr.com/750d16c9d2f1e8e55448ce05be35313d/af5cab4c5cb0b6f0-a7/s250x400/577d110d0472086b8819d95d142a6660c21d6081.pnj 234w, https://64.media.tumblr.com/750d16c9d2f1e8e55448ce05be35313d/af5cab4c5cb0b6f0-a7/s400x600/9c035fbbe5ccd64179582b8d7c44faed7de8a1c2.pnj 350w, https://64.media.tumblr.com/750d16c9d2f1e8e55448ce05be35313d/af5cab4c5cb0b6f0-a7/s500x750/20241f2607e19ed900abac42d182d815ce3d1f21.pnj 438w, https://64.media.tumblr.com/750d16c9d2f1e8e55448ce05be35313d/af5cab4c5cb0b6f0-a7/s540x810/8dc66a4e4f3608f2f669e03f4faf36ca57952673.pnj 473w, https://64.media.tumblr.com/750d16c9d2f1e8e55448ce05be35313d/af5cab4c5cb0b6f0-a7/s640x960/27a878251a0efb19b60237173abd208703c32059.pnj 561w, https://64.media.tumblr.com/750d16c9d2f1e8e55448ce05be35313d/af5cab4c5cb0b6f0-a7/s1280x1920/e46a3e0d5a4b1b7e3298e82673f99225091a1a6b.pnj 1121w, https://64.media.tumblr.com/750d16c9d2f1e8e55448ce05be35313d/af5cab4c5cb0b6f0-a7/s2048x3072/ed0bcbd1f4b31968687e94dd91d1a85ac69d1bd6.pnj 1500w",

        //gallery settings
        name: "Infected",
        descrip: "That's a pretty dramatic before and after. ",
        bg: "None",
        ratio: "125/214",

        //commision settings
        numChar: 2,
        finish: 4, //[0, 4]
        size: 3,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1M8bUvyFVoFzSxfbq9VQxLWtOBCRlxAlL",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/b7692e8f362ffe83dd1844bdbd091673/af5cab4c5cb0b6f0-27/s100x200/bd6a1328dff991725a49e605d75e6472f73656bb.pnj 100w, https://64.media.tumblr.com/b7692e8f362ffe83dd1844bdbd091673/af5cab4c5cb0b6f0-27/s250x400/1453bf97a1a4f1620fc80a62bed29049ad80d496.pnj 250w, https://64.media.tumblr.com/b7692e8f362ffe83dd1844bdbd091673/af5cab4c5cb0b6f0-27/s400x600/e41a3f0014e44ffc2a1b23ff6587076c0edb40ec.pnj 400w, https://64.media.tumblr.com/b7692e8f362ffe83dd1844bdbd091673/af5cab4c5cb0b6f0-27/s500x750/bd703b0178545e6a88ee09b99d112a2e5e86165e.pnj 500w, https://64.media.tumblr.com/b7692e8f362ffe83dd1844bdbd091673/af5cab4c5cb0b6f0-27/s540x810/1bf755ae244c7138428e86a5c3e0195c424ccb54.pnj 540w, https://64.media.tumblr.com/b7692e8f362ffe83dd1844bdbd091673/af5cab4c5cb0b6f0-27/s640x960/af29c524864203ba273c011081bcba491410bdeb.pnj 640w, https://64.media.tumblr.com/b7692e8f362ffe83dd1844bdbd091673/af5cab4c5cb0b6f0-27/s1280x1920/9384a36969fec4613a368ece640ad87fab0386c1.pnj 1280w, https://64.media.tumblr.com/b7692e8f362ffe83dd1844bdbd091673/af5cab4c5cb0b6f0-27/s2048x3072/72d1ac7c1212c9c6359001e4039cc44c215d69e4.pnj 1620w",

        //gallery settings
        name: "The One that Travels",
        descrip: "Character design. ",
        bg: "None",
        ratio: "81/59",

        //commision settings
        numChar: 14,
        finish: 2, //[0, 4]
        size: 3,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1JpH1luki_z_MeU-B7hRcjRaayD8xdMYW",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/723e7f7a055d9783434dae780dfc5e6b/af5cab4c5cb0b6f0-f2/s100x200/99c905a136b2c0d57ca928d93aeb1eb3661348e3.pnj 100w, https://64.media.tumblr.com/723e7f7a055d9783434dae780dfc5e6b/af5cab4c5cb0b6f0-f2/s250x400/d87da1b6c6531c3f08a8986fa6ffb6696df27944.pnj 250w, https://64.media.tumblr.com/723e7f7a055d9783434dae780dfc5e6b/af5cab4c5cb0b6f0-f2/s400x600/44c3775e1ca7f16a6fd9ef54fbfee1c0b722f326.pnj 400w, https://64.media.tumblr.com/723e7f7a055d9783434dae780dfc5e6b/af5cab4c5cb0b6f0-f2/s500x750/27c3717475982ad27362a4f12162181d4375554c.pnj 500w, https://64.media.tumblr.com/723e7f7a055d9783434dae780dfc5e6b/af5cab4c5cb0b6f0-f2/s540x810/46b4f7bde73956fc9178ff53381dc6caac8e0679.pnj 540w, https://64.media.tumblr.com/723e7f7a055d9783434dae780dfc5e6b/af5cab4c5cb0b6f0-f2/s640x960/b261c6a948f69a6b4afa557d5677a1b129c9fb77.pnj 640w, https://64.media.tumblr.com/723e7f7a055d9783434dae780dfc5e6b/af5cab4c5cb0b6f0-f2/s1280x1920/1dc76187f6678f57e009deaf6fc21a01c06257b1.pnj 1280w, https://64.media.tumblr.com/723e7f7a055d9783434dae780dfc5e6b/af5cab4c5cb0b6f0-f2/s2048x3072/2f7dd4eb4c02ee8a363fe87e9f084ec6c17566df.pnj 2048w",

        //gallery settings
        name: "Greenhouse",
        descrip: "",
        bg: "None",
        ratio: "1",

        //commision settings
        numChar: 1,
        finish: 4, //[0, 4]
        size: 3,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1YEgyRQREDwO9yk2bul2oYGzJCLmKFKPg",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/94d27351a8a7e64f817150c420739e06/af5cab4c5cb0b6f0-9b/s100x200/38db8caaff1b65083fe2a39cb2578cb2a6e30d2b.pnj 100w, https://64.media.tumblr.com/94d27351a8a7e64f817150c420739e06/af5cab4c5cb0b6f0-9b/s250x400/3d3395f2ca0c22408a3c513fa48fd869dfb4f907.pnj 250w, https://64.media.tumblr.com/94d27351a8a7e64f817150c420739e06/af5cab4c5cb0b6f0-9b/s400x600/3137f3f31cec8dd2149abcd61368d3d3222e8845.pnj 400w, https://64.media.tumblr.com/94d27351a8a7e64f817150c420739e06/af5cab4c5cb0b6f0-9b/s500x750/8d0bc8efb503904b439d862acbcd6d02b24821d4.pnj 500w, https://64.media.tumblr.com/94d27351a8a7e64f817150c420739e06/af5cab4c5cb0b6f0-9b/s540x810/cb9ac73a8586fba8a7885b2b19f2a9d81a404a40.pnj 540w, https://64.media.tumblr.com/94d27351a8a7e64f817150c420739e06/af5cab4c5cb0b6f0-9b/s640x960/29d5be33decdcc9a3cbe193ba4a23c74f0193949.pnj 640w, https://64.media.tumblr.com/94d27351a8a7e64f817150c420739e06/af5cab4c5cb0b6f0-9b/s1280x1920/c71790bc6c83799914f0e1806987cd6f486f85b2.pnj 1280w, https://64.media.tumblr.com/94d27351a8a7e64f817150c420739e06/af5cab4c5cb0b6f0-9b/s2048x3072/4a7541e67f1e2d029edd5fdc72a3555083998870.pnj 2048w",

        //gallery settings
        name: "Goat",
        descrip: "Redesign of a character. ",
        bg: "white",
        ratio: "1",

        //commision settings
        numChar: 1,
        finish: 2, //[0, 4]
        size: 3,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1LehzblQdFgqcua9W6MG4W39G5vJNb_K9",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/58efeb21e5bc39de1f4bf81e9cbd8a9f/a7e666065031da5d-50/s100x200/fce319e0254d10b67a130a71dcfaeb46fa053278.pnj 100w, https://64.media.tumblr.com/58efeb21e5bc39de1f4bf81e9cbd8a9f/a7e666065031da5d-50/s250x400/e64902185e9b738597b35520bb281bf661c86269.pnj 250w, https://64.media.tumblr.com/58efeb21e5bc39de1f4bf81e9cbd8a9f/a7e666065031da5d-50/s400x600/fa2cfe0c7aeb016310c38487cb40f7b703f34d72.pnj 400w, https://64.media.tumblr.com/58efeb21e5bc39de1f4bf81e9cbd8a9f/a7e666065031da5d-50/s500x750/216aff8774678446b584aaf6f48b3655148d82c7.pnj 500w, https://64.media.tumblr.com/58efeb21e5bc39de1f4bf81e9cbd8a9f/a7e666065031da5d-50/s540x810/1dcdda48560678f893439226feb55dc7352c1274.pnj 540w, https://64.media.tumblr.com/58efeb21e5bc39de1f4bf81e9cbd8a9f/a7e666065031da5d-50/s640x960/08ced04ba39781950dcb2b4fdd4c926949a63458.pnj 640w, https://64.media.tumblr.com/58efeb21e5bc39de1f4bf81e9cbd8a9f/a7e666065031da5d-50/s1280x1920/ffc35724420337b007d89e570e54db8e60eb47de.pnj 1280w, https://64.media.tumblr.com/58efeb21e5bc39de1f4bf81e9cbd8a9f/a7e666065031da5d-50/s2048x3072/82a0836bf7b4be18e2f2f8cbf78b154e318a590b.pnj 2048w",

        //gallery settings
        name: "Genshin Wish Art",
        descrip: "Genshin fan character. This is the wishart for her ealier design. ",
        bg: "None",
        ratio: "16/9",

        //commision settings
        numChar: 1,
        finish: 4, //[0, 4]
        size: 3,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1HlsrZeq6xciY6RbiTHzagwYI68DdH6qU",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/02a0096ee145520ea7d06d6306ad00e2/a7e666065031da5d-7e/s100x200/2c7317ce938ec6e98b34fec817e8260dcf993a05.pnj 100w, https://64.media.tumblr.com/02a0096ee145520ea7d06d6306ad00e2/a7e666065031da5d-7e/s250x400/e75cd7628b45fd97374b399435cc336ca5c23e3d.pnj 200w, https://64.media.tumblr.com/02a0096ee145520ea7d06d6306ad00e2/a7e666065031da5d-7e/s400x600/b10d4e10422bb92bb39ec0e921e87ad7872dbfaf.pnj 300w, https://64.media.tumblr.com/02a0096ee145520ea7d06d6306ad00e2/a7e666065031da5d-7e/s500x750/e8dfaede2445ece90e84c3083d28100243134779.pnj 375w, https://64.media.tumblr.com/02a0096ee145520ea7d06d6306ad00e2/a7e666065031da5d-7e/s540x810/269ad21a62b0ec739cf94644e380a607cd975848.pnj 405w, https://64.media.tumblr.com/02a0096ee145520ea7d06d6306ad00e2/a7e666065031da5d-7e/s640x960/eeed436b704885f07a65fbfd5528fbfddad368b2.pnj 480w, https://64.media.tumblr.com/02a0096ee145520ea7d06d6306ad00e2/a7e666065031da5d-7e/s1280x1920/3f3a176e1e05b73d9cf1b503a1c06696311cd4c5.pnj 960w, https://64.media.tumblr.com/02a0096ee145520ea7d06d6306ad00e2/a7e666065031da5d-7e/s2048x3072/2b37323e9a8bf76982c8773ee6e886c491c0cceb.pnj 1536w",

        //gallery settings
        name: "Posed Front",
        descrip: "",
        bg: "blue",
        ratio: "1/2",

        //commision settings
        numChar: 1,
        finish: 3, //[0, 4]
        size: 3,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //95
        //google access
        id: "1eATR3OJsziXAx4hLKeLRuzwR9i87UQ_M",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/3e8c356cf80c0f8a4fb48102a5d976a1/a7e666065031da5d-1f/s100x200/fc22ad0f6b9dbb8bcbfa3a3b97a21828d6ec3d0d.pnj 100w, https://64.media.tumblr.com/3e8c356cf80c0f8a4fb48102a5d976a1/a7e666065031da5d-1f/s250x400/6b52d59035e668d6e87316591a756596d0883fa0.pnj 200w, https://64.media.tumblr.com/3e8c356cf80c0f8a4fb48102a5d976a1/a7e666065031da5d-1f/s400x600/3ca4a9b13b34c67231238c85c16583ab7f6bc543.pnj 300w, https://64.media.tumblr.com/3e8c356cf80c0f8a4fb48102a5d976a1/a7e666065031da5d-1f/s500x750/18f39667ef2d06a8b2b5f19b3ed5f41dac6a7360.pnj 375w, https://64.media.tumblr.com/3e8c356cf80c0f8a4fb48102a5d976a1/a7e666065031da5d-1f/s540x810/d328ad4135e630756419018c00fc006bb1048c7b.pnj 405w, https://64.media.tumblr.com/3e8c356cf80c0f8a4fb48102a5d976a1/a7e666065031da5d-1f/s640x960/d0f133254a3992dc809ec3d24456802c31d08b63.pnj 480w, https://64.media.tumblr.com/3e8c356cf80c0f8a4fb48102a5d976a1/a7e666065031da5d-1f/s1280x1920/294ef6c26a21e8e655e7b41b10ec1ece568a7ba4.pnj 960w, https://64.media.tumblr.com/3e8c356cf80c0f8a4fb48102a5d976a1/a7e666065031da5d-1f/s2048x3072/485c4870ff4379dc81b4f05d4ec821a57c7e6626.pnj 1536w",

        //gallery settings
        name: "Posed Back",
        descrip: "",
        bg: "blue",
        ratio: "1/2",

        //commision settings
        numChar: 1,
        finish: 3, //[0, 4]
        size: 3,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //96
        //google access
        id: "1ysD_MVQHT6N1S2Naggdl8SV_ryoJY_eQ",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/da91fd5c71a2b4f98706a2ab8fa1976f/a7e666065031da5d-36/s100x200/bca0672762a62090ce58191af3d457219ae3f49a.pnj 100w, https://64.media.tumblr.com/da91fd5c71a2b4f98706a2ab8fa1976f/a7e666065031da5d-36/s250x400/4cb4b71a24adfc5ed328f8d3677dd90437ec63cf.pnj 250w, https://64.media.tumblr.com/da91fd5c71a2b4f98706a2ab8fa1976f/a7e666065031da5d-36/s400x600/334868b1d79784f253fde89118244ace08f79da2.pnj 400w, https://64.media.tumblr.com/da91fd5c71a2b4f98706a2ab8fa1976f/a7e666065031da5d-36/s500x750/f0df390eab8fffaf2d9d39caae0b1e676220b9e7.pnj 500w, https://64.media.tumblr.com/da91fd5c71a2b4f98706a2ab8fa1976f/a7e666065031da5d-36/s540x810/8cff16d8908099d7392c69994e7916cfac357079.pnj 540w, https://64.media.tumblr.com/da91fd5c71a2b4f98706a2ab8fa1976f/a7e666065031da5d-36/s640x960/1e50abf2d6202270bb26057bac715323871b5fc5.pnj 640w, https://64.media.tumblr.com/da91fd5c71a2b4f98706a2ab8fa1976f/a7e666065031da5d-36/s1280x1920/11a156ab1fe7833739dd8bdb88339af6e651240e.pnj 1280w, https://64.media.tumblr.com/da91fd5c71a2b4f98706a2ab8fa1976f/a7e666065031da5d-36/s2048x3072/50ec8468b95370a5df218a86c50ecd176ce4fdfd.pnj 1620w",

        //gallery settings
        name: "",
        descrip: "",
        bg: "None",
        ratio: "3/4",

        //commision settings
        numChar: 0,
        finish: 3, //[0, 4]
        size: 0,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1g1CAuAx1jieltZRzXE5tat5LZzF-xHaG",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/f485986f502511eff7f584fba0dcd2b4/a7e666065031da5d-99/s100x200/49b738cedfa525d13f0a08d3610e9f8ab8e2a4ad.pnj 100w, https://64.media.tumblr.com/f485986f502511eff7f584fba0dcd2b4/a7e666065031da5d-99/s250x400/4d095707d7552420856c9dc0ea4ca5a023865a66.pnj 250w, https://64.media.tumblr.com/f485986f502511eff7f584fba0dcd2b4/a7e666065031da5d-99/s400x600/d2061505a697c4450fcb825a17abc6faf76921f1.pnj 400w, https://64.media.tumblr.com/f485986f502511eff7f584fba0dcd2b4/a7e666065031da5d-99/s500x750/ec4605582cf39b74319e709341a0ac5089e87760.pnj 500w, https://64.media.tumblr.com/f485986f502511eff7f584fba0dcd2b4/a7e666065031da5d-99/s540x810/4cf0c026331fa356cf1156c905fe0e306d1d9c79.pnj 540w, https://64.media.tumblr.com/f485986f502511eff7f584fba0dcd2b4/a7e666065031da5d-99/s640x960/a65fadbf7922213639e1acb7b6f09445a52224dc.pnj 640w, https://64.media.tumblr.com/f485986f502511eff7f584fba0dcd2b4/a7e666065031da5d-99/s1280x1920/e62d7c678c8c3ce6668f23e128583d8b86ac62c2.pnj 1280w, https://64.media.tumblr.com/f485986f502511eff7f584fba0dcd2b4/a7e666065031da5d-99/s2048x3072/e07972d3a9e295e273a3ce02ebd84052c18fba8c.pnj 1620w",

        //gallery settings
        name: "",
        descrip: "",
        bg: "None",
        ratio: "3/4",

        //commision settings
        numChar: 0,
        finish: 3, //[0, 4]
        size: 0,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "15XdaFzkXJ7xbTwpkHUEXH0chw9XVij_A",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/f69dfe76b261f9688c2fcdcf36ff1dc6/a7e666065031da5d-53/s100x200/ac409a8cb8f6ca2276ca0042ca97d49288107a99.pnj 100w, https://64.media.tumblr.com/f69dfe76b261f9688c2fcdcf36ff1dc6/a7e666065031da5d-53/s250x400/ea36707cb5bb1c22a8dcd819a8056537fd3afd7e.pnj 250w, https://64.media.tumblr.com/f69dfe76b261f9688c2fcdcf36ff1dc6/a7e666065031da5d-53/s400x600/f691f47b5f6903fbc4991b266e33bcdd9e7d3229.pnj 400w, https://64.media.tumblr.com/f69dfe76b261f9688c2fcdcf36ff1dc6/a7e666065031da5d-53/s500x750/e7d1f12aa8ec7733a34db3e84aa7a98d90b28451.pnj 500w, https://64.media.tumblr.com/f69dfe76b261f9688c2fcdcf36ff1dc6/a7e666065031da5d-53/s540x810/edc49977546050455f3e77f04e82eeae66d4fca6.pnj 540w, https://64.media.tumblr.com/f69dfe76b261f9688c2fcdcf36ff1dc6/a7e666065031da5d-53/s640x960/44ebd860a7d66205d6e9a873a6544bf39dd92aed.pnj 640w, https://64.media.tumblr.com/f69dfe76b261f9688c2fcdcf36ff1dc6/a7e666065031da5d-53/s1280x1920/2bad1921c821f3f7f5c81a6cacca6c3a7429ff1d.pnj 1280w, https://64.media.tumblr.com/f69dfe76b261f9688c2fcdcf36ff1dc6/a7e666065031da5d-53/s2048x3072/b789b1f6f0241b1facb0ba5c8021a385de3a6734.pnj 1620w",

        //gallery settings
        name: "",
        descrip: "",
        bg: "None",
        ratio: "3/4",

        //commision settings
        numChar: 0,
        finish: 3, //[0, 4]
        size: 0,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1AXSnbWYMEdbjGC5vB23uA__yOWYfN-h-",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/801e9fbdc6096837ab8ac5839c845fad/a7e666065031da5d-04/s100x200/1e4a1bb2019037a6b192cfcb326710728775e621.pnj 100w, https://64.media.tumblr.com/801e9fbdc6096837ab8ac5839c845fad/a7e666065031da5d-04/s250x400/61fcf7b7dbc1dd2a5ecc9c9ac3dfc5da0277934f.pnj 250w, https://64.media.tumblr.com/801e9fbdc6096837ab8ac5839c845fad/a7e666065031da5d-04/s400x600/618a343cc662a042aa57a02341285a7253772d15.pnj 400w, https://64.media.tumblr.com/801e9fbdc6096837ab8ac5839c845fad/a7e666065031da5d-04/s500x750/a883709966caa49f6ac7d94a28a67d1df338bb96.pnj 500w, https://64.media.tumblr.com/801e9fbdc6096837ab8ac5839c845fad/a7e666065031da5d-04/s540x810/516f3e98ea8409bf78fd0af930b24d9631849add.pnj 540w, https://64.media.tumblr.com/801e9fbdc6096837ab8ac5839c845fad/a7e666065031da5d-04/s640x960/63ed5efe67b4235f4c29560d9fe9f9e053bf69e3.pnj 640w, https://64.media.tumblr.com/801e9fbdc6096837ab8ac5839c845fad/a7e666065031da5d-04/s1280x1920/e1375fde6768c04aff56a5fc007ff7612c843e10.pnj 1280w, https://64.media.tumblr.com/801e9fbdc6096837ab8ac5839c845fad/a7e666065031da5d-04/s2048x3072/157e2d2449db69b4a9c3c8cd6984b9c13fabaec0.pnj 1620w",

        //gallery settings
        name: "",
        descrip: "",
        bg: "None",
        ratio: "3/4",

        //commision settings
        numChar: 0,
        finish: 3, //[0, 4]
        size: 0,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //100
        //google access
        id: "1V3J6dQCKrWC0oTEHoxlIb7mC0x-pSgUE",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/2f2d84bd3576b957b0158a21ea637138/a7e666065031da5d-b6/s100x200/8306defd59b3577b0058c07d7282c693d5422b1d.pnj 100w, https://64.media.tumblr.com/2f2d84bd3576b957b0158a21ea637138/a7e666065031da5d-b6/s250x400/2d5a591188a061c036930436e00293b028611157.pnj 250w, https://64.media.tumblr.com/2f2d84bd3576b957b0158a21ea637138/a7e666065031da5d-b6/s400x600/d25cd46dfb3adc2b245449a9c97c5260094612b9.pnj 400w, https://64.media.tumblr.com/2f2d84bd3576b957b0158a21ea637138/a7e666065031da5d-b6/s500x750/20efa862b1463040cfba798d892e3fa53ea618d6.pnj 500w, https://64.media.tumblr.com/2f2d84bd3576b957b0158a21ea637138/a7e666065031da5d-b6/s540x810/bcdb05d44e23da69c373f5a4ffd4572ecd3b062f.pnj 540w, https://64.media.tumblr.com/2f2d84bd3576b957b0158a21ea637138/a7e666065031da5d-b6/s640x960/4556a768a3f84db903103af177ec1ec20428fcae.pnj 640w, https://64.media.tumblr.com/2f2d84bd3576b957b0158a21ea637138/a7e666065031da5d-b6/s1280x1920/b389e25b6ae3f0e335c7762f743e26a0208b6fa0.pnj 1280w, https://64.media.tumblr.com/2f2d84bd3576b957b0158a21ea637138/a7e666065031da5d-b6/s2048x3072/2f1fbd6323f25a06e631a9bd183a6565a2c15929.pnj 1620w",

        //gallery settings
        name: "",
        descrip: "",
        bg: "None",
        ratio: "3/4",

        //commision settings
        numChar: 0,
        finish: 3, //[0, 4]
        size: 0,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1eQhYs7te8_o-GyrhiMfl73o26Q8uNdVU",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/c02cd594d396048a72eaea037c8bdf77/a7e666065031da5d-c4/s100x200/06f273a23978b08ff027f333356beae4c36c575e.pnj 100w, https://64.media.tumblr.com/c02cd594d396048a72eaea037c8bdf77/a7e666065031da5d-c4/s250x400/b9ad1cb38b5dade9e94b00cb136833c50002c411.pnj 250w, https://64.media.tumblr.com/c02cd594d396048a72eaea037c8bdf77/a7e666065031da5d-c4/s400x600/4d561196b3025978ef4eb7c465680831dd64da86.pnj 400w, https://64.media.tumblr.com/c02cd594d396048a72eaea037c8bdf77/a7e666065031da5d-c4/s500x750/fb97365193e5e717d072bdcafa798cc5e36f83cf.pnj 500w, https://64.media.tumblr.com/c02cd594d396048a72eaea037c8bdf77/a7e666065031da5d-c4/s540x810/db0e7aa346364de46e7cd68d42bb5581094a69ac.pnj 540w, https://64.media.tumblr.com/c02cd594d396048a72eaea037c8bdf77/a7e666065031da5d-c4/s640x960/fac7285a370af36427c7fcfe3387aa82e3ad432a.pnj 640w, https://64.media.tumblr.com/c02cd594d396048a72eaea037c8bdf77/a7e666065031da5d-c4/s1280x1920/409b0735a8ff6b29ab8afe4fbe142ff949438eb3.pnj 1280w, https://64.media.tumblr.com/c02cd594d396048a72eaea037c8bdf77/a7e666065031da5d-c4/s2048x3072/7ce4b6acd5ada73761471117ef4c284bca815523.pnj 2048w",

        //gallery settings
        name: "",
        descrip: "Character turn-around for Marianna's 3D model. ",
        bg: "blue",
        ratio: "2/1",

        //commision settings
        numChar: 1,
        finish: 3, //[0, 4]
        size: 3,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1UfYN6fokOoLuoNaa2PE-iyHM44E0vv4e",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/37a541d5934b2df7a9f43cb9423ffaa1/a7e666065031da5d-dc/s100x200/b40696ffb9fd174471379230d30553152ce8d39a.gifv 100w, https://64.media.tumblr.com/37a541d5934b2df7a9f43cb9423ffaa1/a7e666065031da5d-dc/s250x400/6e9b1561fc58c2fe820d74d005464fbcb49f5338.gifv 250w, https://64.media.tumblr.com/37a541d5934b2df7a9f43cb9423ffaa1/a7e666065031da5d-dc/s400x600/df27d02b68b163f21a2893cad31269735c6896c6.gifv 400w, https://64.media.tumblr.com/37a541d5934b2df7a9f43cb9423ffaa1/a7e666065031da5d-dc/s500x750/8cd460accde7a50e3877f566630b59d44f4831ac.gifv 500w, https://64.media.tumblr.com/37a541d5934b2df7a9f43cb9423ffaa1/a7e666065031da5d-dc/s540x810/0206530c23218ad87d7e32ec16485b2f359ab2dc.gifv 540w, https://64.media.tumblr.com/37a541d5934b2df7a9f43cb9423ffaa1/a7e666065031da5d-dc/s640x960/ba648a0878eff33decda3dea1bea3f28cf5487d2.gifv 640w, https://64.media.tumblr.com/37a541d5934b2df7a9f43cb9423ffaa1/a7e666065031da5d-dc/s1280x1920/4d4a8eedd286a30f5bae1b824a9af04e1487226a.gifv 1280w, https://64.media.tumblr.com/37a541d5934b2df7a9f43cb9423ffaa1/a7e666065031da5d-dc/s2048x3072/fc3f10efc2500f526351d728ad82fc4ce46842fc.gifv 2048w",

        //gallery settings
        name: "Normal Attacks",
        descrip: "Rough animation of Marianna's normal attacks. ",
        bg: "None",
        ratio: "1241/784",

        //commision settings
        numChar: 0,
        finish: 0, //[0, 4]
        size: 0,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //google access
        id: "1Mfs5Ici3zEu2RmguLJWzkjMnCHd9TXqK",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/dc0e627714c6cca84443a65e3dee0afc/a7e666065031da5d-93/s100x200/db70d16b98c4a3b6d88f38cfe44f9693212d2b3d.gifv 100w, https://64.media.tumblr.com/dc0e627714c6cca84443a65e3dee0afc/a7e666065031da5d-93/s250x400/2f091138b6fb490f6ff50108ae69338af7c757d4.gifv 250w, https://64.media.tumblr.com/dc0e627714c6cca84443a65e3dee0afc/a7e666065031da5d-93/s400x600/3fc71bd5bda7d23de9ac42dbd2a76a0cc643aa5f.gifv 400w, https://64.media.tumblr.com/dc0e627714c6cca84443a65e3dee0afc/a7e666065031da5d-93/s500x750/fd3bd631b5c7fd60164a64f2a66d551116b4ceb3.gifv 500w, https://64.media.tumblr.com/dc0e627714c6cca84443a65e3dee0afc/a7e666065031da5d-93/s540x810/92554aa7c43031603e4694296a4f02fe3a5bfb79.gifv 540w, https://64.media.tumblr.com/dc0e627714c6cca84443a65e3dee0afc/a7e666065031da5d-93/s640x960/1f26f5dcf08f3e5db1111c59929fba4cd55dfc2f.gifv 640w, https://64.media.tumblr.com/dc0e627714c6cca84443a65e3dee0afc/a7e666065031da5d-93/s1280x1920/503395cc7ac417b98d5f6f258f56a9cba0a3259c.gifv 1280w, https://64.media.tumblr.com/dc0e627714c6cca84443a65e3dee0afc/a7e666065031da5d-93/s2048x3072/93b8494cda20cf9b98b73ca2d9fc36f652594927.gifv 2048w",

        //gallery settings
        name: "Charged Attack",
        descrip: "Rough animation of Marianna's charged attacks. ",
        bg: "None",
        ratio: "1241/784",

        //commision settings
        numChar: 0,
        finish: 0, //[0, 4]
        size: 0,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //google access
        id: "1_87-B4Oma8V3IN7oWHejgI8ZIUYCRlwz",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/3ad6c0e1ee6298c70489da33ea2cae4d/af5cab4c5cb0b6f0-5c/s100x200/6747b84c7e314976a2cbdc77fe7aedcfb101e2ef.jpg 100w, https://64.media.tumblr.com/3ad6c0e1ee6298c70489da33ea2cae4d/af5cab4c5cb0b6f0-5c/s250x400/c56eee025eea20abd7163943532b5114fab6e827.jpg 250w, https://64.media.tumblr.com/3ad6c0e1ee6298c70489da33ea2cae4d/af5cab4c5cb0b6f0-5c/s400x600/63e8e28b3c7bfe7efb9a558362d86c90ef9f2bf6.jpg 400w, https://64.media.tumblr.com/3ad6c0e1ee6298c70489da33ea2cae4d/af5cab4c5cb0b6f0-5c/s500x750/8942afe046ff471bb3278ff0a2c611f8a6e79ad1.jpg 500w, https://64.media.tumblr.com/3ad6c0e1ee6298c70489da33ea2cae4d/af5cab4c5cb0b6f0-5c/s540x810/edc3d9bacfae64d78cd920f7903011ac59ff8702.jpg 540w, https://64.media.tumblr.com/3ad6c0e1ee6298c70489da33ea2cae4d/af5cab4c5cb0b6f0-5c/s640x960/59601e590a9a65984a37389ddaf208592f165d70.jpg 640w, https://64.media.tumblr.com/3ad6c0e1ee6298c70489da33ea2cae4d/af5cab4c5cb0b6f0-5c/s1280x1920/eb2d533d80f33395045261296aa45eea8bec067f.jpg 1280w, https://64.media.tumblr.com/3ad6c0e1ee6298c70489da33ea2cae4d/af5cab4c5cb0b6f0-5c/s2048x3072/667c4370de0e3b27cc4c8cd7e22869c05b5b5f4e.jpg 1440w",

        //gallery settings
        name: "DTIYS",
        descrip: 'A draw this in your style entry for <a href="https://www.instagram.com/peachy_gore/">@peachy_gore</a>.',
        bg: "None",
        ratio: "1",

        //commision settings
        numChar: 1,
        finish: 4, //[0, 4]
        size: 3,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //google access
        id: "1cs-9ZOZcLxo4pNenq5fvoZdx_M8FqKDQ",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/ea98dbacd51db625e4ef793c2d0732b1/55dfd5ac43cecb26-e0/s100x200/0afe262bbb2512edcaa42aaf66f563fc39cd6a0d.jpg 100w, https://64.media.tumblr.com/ea98dbacd51db625e4ef793c2d0732b1/55dfd5ac43cecb26-e0/s250x400/934562f0f245ad27098e37a594becf7561dc4f74.jpg 250w, https://64.media.tumblr.com/ea98dbacd51db625e4ef793c2d0732b1/55dfd5ac43cecb26-e0/s400x600/018d5ca7869026c8ce412bc78d88d0208557752f.jpg 400w, https://64.media.tumblr.com/ea98dbacd51db625e4ef793c2d0732b1/55dfd5ac43cecb26-e0/s500x750/568a43758adc1093a65d994b1674f590537fa049.jpg 500w, https://64.media.tumblr.com/ea98dbacd51db625e4ef793c2d0732b1/55dfd5ac43cecb26-e0/s540x810/ac4d134891426362b48dfbd0434fa0e2d2f8e0fe.jpg 540w, https://64.media.tumblr.com/ea98dbacd51db625e4ef793c2d0732b1/55dfd5ac43cecb26-e0/s640x960/7793c3ad7a25e18497712315bf9a18d1b825ad69.jpg 640w, https://64.media.tumblr.com/ea98dbacd51db625e4ef793c2d0732b1/55dfd5ac43cecb26-e0/s1280x1920/479e1a7b4c869b1462d22fd3eb2184e97e3642b1.jpg 1280w, https://64.media.tumblr.com/ea98dbacd51db625e4ef793c2d0732b1/55dfd5ac43cecb26-e0/s2048x3072/78323226eca805626e4f4a2ad51a9264a1108798.jpg 1440w",

        //gallery settings
        name: "Potions",
        descrip: "",
        bg: "None",
        ratio: "1",

        //commision settings
        numChar: 1,
        finish: 4, //[0, 4]
        size: 3,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //google access
        id: "1TM6NqjeUXZVbbbXEBfTEwch6hsKt7a_M",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/ccea89165077c8691f4829f7eb4fbf3b/55dfd5ac43cecb26-a4/s100x200/74f51722146cbc3ed8ba79da3881f112896cc2df.jpg 100w, https://64.media.tumblr.com/ccea89165077c8691f4829f7eb4fbf3b/55dfd5ac43cecb26-a4/s250x400/122023d89c7e78941f674195bb9b42e500c1796d.jpg 250w, https://64.media.tumblr.com/ccea89165077c8691f4829f7eb4fbf3b/55dfd5ac43cecb26-a4/s400x600/f98796e8a1251df79b06fc9f1ad64a672dcc6d5e.jpg 400w, https://64.media.tumblr.com/ccea89165077c8691f4829f7eb4fbf3b/55dfd5ac43cecb26-a4/s500x750/7c7782075826b14e0072c92e3f3485aa608b3f27.jpg 500w, https://64.media.tumblr.com/ccea89165077c8691f4829f7eb4fbf3b/55dfd5ac43cecb26-a4/s540x810/6c5453eae57d8976c20732e06bd85484151b55a4.jpg 540w, https://64.media.tumblr.com/ccea89165077c8691f4829f7eb4fbf3b/55dfd5ac43cecb26-a4/s640x960/e190b262d7003d9787a41db96256144dfd720d09.jpg 640w, https://64.media.tumblr.com/ccea89165077c8691f4829f7eb4fbf3b/55dfd5ac43cecb26-a4/s1280x1920/980d48409afd02fd30093639fddb123e358297bd.jpg 1280w, https://64.media.tumblr.com/ccea89165077c8691f4829f7eb4fbf3b/55dfd5ac43cecb26-a4/s2048x3072/21f41bee99bbb4f06c14d79c12f69c240372c1d2.jpg 1440w",

        //gallery settings
        name: "Light Krill",
        descrip: "Fannart for sky:children of the light. Inspired by roadside vines. ",
        bg: "None",
        ratio: "144/119",

        //commision settings
        numChar: 2,
        finish: 4, //[0, 4]
        size: 3,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //google access
        id: "1Lqw9sNX-k4tFx7EfN0cIL9EPAmHYSyp3",

        //tumblr stuff 
        srcset: "",

        //gallery settings
        name: "Infected",
        descrip: "https://64.media.tumblr.com/884380cc0715287c95df14b18d8180b5/55dfd5ac43cecb26-06/s100x200/96cbd797d6a294bf7569f4a81e9dc875cf53b9c6.jpg 100w, https://64.media.tumblr.com/884380cc0715287c95df14b18d8180b5/55dfd5ac43cecb26-06/s250x400/6e9e851221830e985b82ccd92d5559b8c3a8beca.jpg 250w, https://64.media.tumblr.com/884380cc0715287c95df14b18d8180b5/55dfd5ac43cecb26-06/s400x600/e3a6e02e7d7ed645085eaffef57569bf2eb2345d.jpg 400w, https://64.media.tumblr.com/884380cc0715287c95df14b18d8180b5/55dfd5ac43cecb26-06/s500x750/1b2f292fd6be80b92d3f897604144a1817448f2a.jpg 500w, https://64.media.tumblr.com/884380cc0715287c95df14b18d8180b5/55dfd5ac43cecb26-06/s540x810/18074c3d963043ef61a5f28e54128a828e3c841d.jpg 540w, https://64.media.tumblr.com/884380cc0715287c95df14b18d8180b5/55dfd5ac43cecb26-06/s640x960/bcd7c0e4a00afb77d2a7d533c11097e8806a3a49.jpg 640w, https://64.media.tumblr.com/884380cc0715287c95df14b18d8180b5/55dfd5ac43cecb26-06/s1280x1920/7d60f4d4c89aa963f4ae3f2efeed327995df08f7.jpg 1280w, https://64.media.tumblr.com/884380cc0715287c95df14b18d8180b5/55dfd5ac43cecb26-06/s2048x3072/b0f77869c688ed8365a22ec287cdedc1044bb0eb.jpg 1440w",
        bg: "None",
        ratio: "72/89",

        //commision settings
        numChar: 1,
        finish: 3, //[0, 4]
        size: 2,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //google access
        id: "1vfPR8_yKTOA49UaotNWoNQo0BGxcZkI5",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/9e885321333bfc10d263053bf0ed41fd/55dfd5ac43cecb26-5d/s100x200/4be831392e607855951dbff197eb64cc11a8ea46.jpg 100w, https://64.media.tumblr.com/9e885321333bfc10d263053bf0ed41fd/55dfd5ac43cecb26-5d/s250x400/7dc9e6cf416cd50b944b2a949172a9c9a1b77463.jpg 250w, https://64.media.tumblr.com/9e885321333bfc10d263053bf0ed41fd/55dfd5ac43cecb26-5d/s400x600/b79f4d19e90490e202a9511f6a77a856a15e278b.jpg 400w, https://64.media.tumblr.com/9e885321333bfc10d263053bf0ed41fd/55dfd5ac43cecb26-5d/s500x750/e844d273253998787fb9402563d8025ac4fbb001.jpg 500w, https://64.media.tumblr.com/9e885321333bfc10d263053bf0ed41fd/55dfd5ac43cecb26-5d/s540x810/06d893da52b9d54154aeb081208ac74de6e0aad1.jpg 540w, https://64.media.tumblr.com/9e885321333bfc10d263053bf0ed41fd/55dfd5ac43cecb26-5d/s640x960/ca659dd2ea5c641e3a40414f04163a23fabef447.jpg 640w, https://64.media.tumblr.com/9e885321333bfc10d263053bf0ed41fd/55dfd5ac43cecb26-5d/s1280x1920/469294b95bdab260d6370f344add7a98292ccf0f.jpg 1280w, https://64.media.tumblr.com/9e885321333bfc10d263053bf0ed41fd/55dfd5ac43cecb26-5d/s2048x3072/53684bef545313b7233ccd61661dca38014e3c60.jpg 1440w",

        //gallery settings
        name: "Mourning Flowers",
        descrip: "Aspects of this character were re-incorporated into another design. ",
        bg: "None",
        ratio: "1",

        //commision settings
        numChar: 1,
        finish: 4, //[0, 4]
        size: 3,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //google access
        id: "1ZEFzuo1rLQMnrHll2D_QK_Zgd06jNwRY",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/c0412ceb89b65f6c712e46621a5fc378/55dfd5ac43cecb26-8d/s100x200/f1098d34fb680468eb7dfac5a599d6b5b7855b93.jpg 100w, https://64.media.tumblr.com/c0412ceb89b65f6c712e46621a5fc378/55dfd5ac43cecb26-8d/s250x400/8a399163826816ebf349082d2810c7d85380d0cd.jpg 250w, https://64.media.tumblr.com/c0412ceb89b65f6c712e46621a5fc378/55dfd5ac43cecb26-8d/s400x600/30507219ac60fb70eb3a5870cc21c978723f311a.jpg 400w, https://64.media.tumblr.com/c0412ceb89b65f6c712e46621a5fc378/55dfd5ac43cecb26-8d/s500x750/a7139fab67a78e52e416fcc5056febde1fbd288e.jpg 500w, https://64.media.tumblr.com/c0412ceb89b65f6c712e46621a5fc378/55dfd5ac43cecb26-8d/s540x810/12aa479fd68e817a8a6c1b9722297b2632fbfc73.jpg 540w, https://64.media.tumblr.com/c0412ceb89b65f6c712e46621a5fc378/55dfd5ac43cecb26-8d/s640x960/f0e4b72f6793096211cf2a32a581923aef3523ad.jpg 640w, https://64.media.tumblr.com/c0412ceb89b65f6c712e46621a5fc378/55dfd5ac43cecb26-8d/s1280x1920/2805089f0a6e7f24f856d488c801d572ff5547f9.jpg 1280w, https://64.media.tumblr.com/c0412ceb89b65f6c712e46621a5fc378/55dfd5ac43cecb26-8d/s2048x3072/aca4bf207d2ac733c5b9281df1a59e949956acdb.jpg 1440w",

        //gallery settings
        name: "Armor",
        descrip: "Early design for one of the glazelings.",
        bg: "None",
        ratio: "4/5",

        //commision settings
        numChar: 1,
        finish: 4, //[0, 4]
        size: 3,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //google access
        id: "1xAz81kO5qZhUvGxqDQzIo2psL9AUprtm",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/bacd53b7f2b7b6a3c4cffd5103daab1b/55dfd5ac43cecb26-8c/s100x200/353b9eba453d2450a2ab02a02bd31c4936913b9c.jpg 100w, https://64.media.tumblr.com/bacd53b7f2b7b6a3c4cffd5103daab1b/55dfd5ac43cecb26-8c/s250x400/d449da84e286f0ba987383ea16be1b5140a969d7.jpg 250w, https://64.media.tumblr.com/bacd53b7f2b7b6a3c4cffd5103daab1b/55dfd5ac43cecb26-8c/s400x600/2bdc47bfa6dcb628e63ba868260780f8e1d5c6ec.jpg 400w, https://64.media.tumblr.com/bacd53b7f2b7b6a3c4cffd5103daab1b/55dfd5ac43cecb26-8c/s500x750/e9765adb31c22238d912903b23b75a9e8d777373.jpg 500w, https://64.media.tumblr.com/bacd53b7f2b7b6a3c4cffd5103daab1b/55dfd5ac43cecb26-8c/s540x810/c92014810f12dfccf3fb5c6aef8e5384987ee8da.jpg 540w, https://64.media.tumblr.com/bacd53b7f2b7b6a3c4cffd5103daab1b/55dfd5ac43cecb26-8c/s640x960/efa8faa01b3df6e34622b3624c3b19763628a98f.jpg 640w, https://64.media.tumblr.com/bacd53b7f2b7b6a3c4cffd5103daab1b/55dfd5ac43cecb26-8c/s1280x1920/a12890c4ee00426fd06fe61b4153512578471ea2.jpg 1280w, https://64.media.tumblr.com/bacd53b7f2b7b6a3c4cffd5103daab1b/55dfd5ac43cecb26-8c/s2048x3072/2b89361a28d2814d476fae6d32b54558e56279ef.jpg 1440w",

        //gallery settings
        name: "Soul Stuck",
        descrip: "Rip out the invader.",
        bg: "None",
        ratio: "4/5",

        //commision settings
        numChar: 1,
        finish: 3, //[0, 4]
        size: 3,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //111
        //google access
        id: "13ojyvGsVpQV1QlavMV7zH0caQiU5B6jO",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/985e37a04e192cac58e2ebfdfd0eb3f6/55dfd5ac43cecb26-e5/s100x200/82867abb4261d32dedc36cf5e9de9b36f26b56b3.jpg 100w, https://64.media.tumblr.com/985e37a04e192cac58e2ebfdfd0eb3f6/55dfd5ac43cecb26-e5/s250x400/07ce31a49914aca4b17ae44f11e9d37e2048b2c2.jpg 250w, https://64.media.tumblr.com/985e37a04e192cac58e2ebfdfd0eb3f6/55dfd5ac43cecb26-e5/s400x600/7ef01587165705c7547576a7e5613b673dc75d79.jpg 400w, https://64.media.tumblr.com/985e37a04e192cac58e2ebfdfd0eb3f6/55dfd5ac43cecb26-e5/s500x750/12e25ab98318a68a046b8020001f109378092628.jpg 500w, https://64.media.tumblr.com/985e37a04e192cac58e2ebfdfd0eb3f6/55dfd5ac43cecb26-e5/s540x810/a2ab9aa0a53384f7221fb28e6759cf5d96bbc903.jpg 540w, https://64.media.tumblr.com/985e37a04e192cac58e2ebfdfd0eb3f6/55dfd5ac43cecb26-e5/s640x960/c7cb9bde9de1ee04a32fc6bd258affb39613e85a.jpg 640w, https://64.media.tumblr.com/985e37a04e192cac58e2ebfdfd0eb3f6/55dfd5ac43cecb26-e5/s1280x1920/e3887ebcd01d1b22679c3f98d76d573261d64ddb.jpg 1280w, https://64.media.tumblr.com/985e37a04e192cac58e2ebfdfd0eb3f6/55dfd5ac43cecb26-e5/s2048x3072/ce537a1acabca9e44a7e6e35259ee3648d4cea6c.jpg 1440w",

        //gallery settings
        name: "Soul Stuck Lineart",
        descrip: "This was a fun style to do. ",
        bg: "None",
        ratio: "4/5",

        //commision settings
        numChar: 1,
        finish: 3, //[0, 4]
        size: 3,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //google access
        id: "1yY2_Nas3hJSKkssgY-eHQyOo_XWSG-Me",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/d49c260cf0f531d844176fae5e16e89b/55dfd5ac43cecb26-6d/s100x200/74f819f2fd1771aaf8117a9cfeabc33bea09214a.jpg 100w, https://64.media.tumblr.com/d49c260cf0f531d844176fae5e16e89b/55dfd5ac43cecb26-6d/s250x400/d6ded6e3a8cd6dd5419f671d80ccebcd133f3b64.jpg 250w, https://64.media.tumblr.com/d49c260cf0f531d844176fae5e16e89b/55dfd5ac43cecb26-6d/s400x600/8f5948f271b9dc56ca7af908637f232a2024e725.jpg 400w, https://64.media.tumblr.com/d49c260cf0f531d844176fae5e16e89b/55dfd5ac43cecb26-6d/s500x750/a6ad377ec3a4ade97d2bc4fa825b57f328acd17e.jpg 500w, https://64.media.tumblr.com/d49c260cf0f531d844176fae5e16e89b/55dfd5ac43cecb26-6d/s540x810/9391070b4a33a7cd69063cfd63ce761557f8ccab.jpg 540w, https://64.media.tumblr.com/d49c260cf0f531d844176fae5e16e89b/55dfd5ac43cecb26-6d/s640x960/1ba1c71d91ffdc5fefe89223e54a51ab3b06821c.jpg 640w, https://64.media.tumblr.com/d49c260cf0f531d844176fae5e16e89b/55dfd5ac43cecb26-6d/s1280x1920/16f4ebe794eb3fc956bb8795d01b9a06f265f38d.jpg 1280w, https://64.media.tumblr.com/d49c260cf0f531d844176fae5e16e89b/55dfd5ac43cecb26-6d/s2048x3072/da62bcc5b824970f17f7873414e79e429a68f296.jpg 1440w",

        //gallery settings
        name: "Reaper Fannart",
        descrip: 'Draw your reaper from <a href="https://www.instagram.com/grave_weaver/">@grave_weaver</a>.',
        bg: "None",
        ratio: "1",

        //commision settings
        numChar: 1,
        finish: 3, //[0, 4]
        size: 3,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //google access
        id: "1ZgiVC3TAu84S8poB-HWODlBBGj0QXfzY",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/f9b834c2076a927e5083a063f5d5e57c/55dfd5ac43cecb26-d9/s100x200/0e7e8271f40230fb1435339a6640dc8f0d559fa4.jpg 100w, https://64.media.tumblr.com/f9b834c2076a927e5083a063f5d5e57c/55dfd5ac43cecb26-d9/s250x400/421bead7e880dbc9bb1d767afbbaa6c0a9f12889.jpg 250w, https://64.media.tumblr.com/f9b834c2076a927e5083a063f5d5e57c/55dfd5ac43cecb26-d9/s400x600/f82115f41fcc83721fa672e51fdf532e5ea43e3b.jpg 400w, https://64.media.tumblr.com/f9b834c2076a927e5083a063f5d5e57c/55dfd5ac43cecb26-d9/s500x750/45ed1af84d7191bc372ff0965a41eec322b17bc7.jpg 500w, https://64.media.tumblr.com/f9b834c2076a927e5083a063f5d5e57c/55dfd5ac43cecb26-d9/s540x810/b035494d2b383222932aabdd904b774d3ac85b3f.jpg 540w, https://64.media.tumblr.com/f9b834c2076a927e5083a063f5d5e57c/55dfd5ac43cecb26-d9/s640x960/c15e3a516ae7334d761562ab4f0fb576d44b2f49.jpg 640w, https://64.media.tumblr.com/f9b834c2076a927e5083a063f5d5e57c/55dfd5ac43cecb26-d9/s1280x1920/46acd289b2bad30c097962f63a27fb8abd7807f1.jpg 1280w, https://64.media.tumblr.com/f9b834c2076a927e5083a063f5d5e57c/55dfd5ac43cecb26-d9/s2048x3072/e7ca9c5c50f9ca2eff7acfeb607066de239c4a39.jpg 1440w",

        //gallery settings
        name: "Swan DTIYS",
        descrip: ' Original post from <a href="https://www.instagram.com/janegumball/"> @janegumball</a>.',
        bg: "None",
        ratio: "1440/1489",

        //commision settings
        numChar: 1,
        finish: 4, //[0, 4]
        size: 3,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //google access
        id: "1tJUmjvITz_8H3e4I8_rNh59ic-XPaGhT",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/457d177f016925bdcbe780a02e3b4f07/55dfd5ac43cecb26-02/s100x200/bdf5535bfd6143810c5fe49350f4c1d23b91ef40.jpg 100w, https://64.media.tumblr.com/457d177f016925bdcbe780a02e3b4f07/55dfd5ac43cecb26-02/s250x400/a8455e0d88f99f56aa9b91095c2348f050961fbd.jpg 250w, https://64.media.tumblr.com/457d177f016925bdcbe780a02e3b4f07/55dfd5ac43cecb26-02/s400x600/225fcf0af39237b0332115ff363ac2974478fe92.jpg 400w, https://64.media.tumblr.com/457d177f016925bdcbe780a02e3b4f07/55dfd5ac43cecb26-02/s500x750/4d7ddb6f85b19b32ad8f03a5dcc138f921ec9fd9.jpg 500w, https://64.media.tumblr.com/457d177f016925bdcbe780a02e3b4f07/55dfd5ac43cecb26-02/s540x810/c73286276363bc2e9d6dfd7fd7bd6de4eadb6515.jpg 540w, https://64.media.tumblr.com/457d177f016925bdcbe780a02e3b4f07/55dfd5ac43cecb26-02/s640x960/4678c44b31468018e3dc6928cf02e2660e46c84e.jpg 640w, https://64.media.tumblr.com/457d177f016925bdcbe780a02e3b4f07/55dfd5ac43cecb26-02/s1280x1920/1fd126d20cfde171337dac5792b465c57fd80b08.jpg 1280w, https://64.media.tumblr.com/457d177f016925bdcbe780a02e3b4f07/55dfd5ac43cecb26-02/s2048x3072/bec48fb7aee984da91544b185b48bc351c10fe4d.jpg 1440w",

        //gallery settings
        name: "Circus",
        descrip: "They are really off-model. ",
        bg: "None",
        ratio: "4/5",

        //commision settings
        numChar: 2,
        finish: 4, //[0, 4]
        size: 3,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //115
        //google access
        id: "1rNHSRyGsakLd7VeLqx4npfxnVj74MMQP",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/baedc3e15cd2843ff0d3b0c45c6b6bfe/55dfd5ac43cecb26-c2/s100x200/fb4aa1281bd888af035ab8434f5aed9581733b4f.jpg 100w, https://64.media.tumblr.com/baedc3e15cd2843ff0d3b0c45c6b6bfe/55dfd5ac43cecb26-c2/s250x400/01d31ff8e60ca8c0aad6e387a320ddea584a6b42.jpg 250w, https://64.media.tumblr.com/baedc3e15cd2843ff0d3b0c45c6b6bfe/55dfd5ac43cecb26-c2/s400x600/87534a2cb9b56cadf85e89d0edee16fbfd5cdf18.jpg 400w, https://64.media.tumblr.com/baedc3e15cd2843ff0d3b0c45c6b6bfe/55dfd5ac43cecb26-c2/s500x750/21f6804481a097d9519208ebbe6ed484502abf9c.jpg 500w, https://64.media.tumblr.com/baedc3e15cd2843ff0d3b0c45c6b6bfe/55dfd5ac43cecb26-c2/s540x810/3e489d06b124ef730f482c8c8d29140871e58923.jpg 540w, https://64.media.tumblr.com/baedc3e15cd2843ff0d3b0c45c6b6bfe/55dfd5ac43cecb26-c2/s640x960/b55ca5f24993daa8a3308832e9ab7c8f466b4b4c.jpg 640w, https://64.media.tumblr.com/baedc3e15cd2843ff0d3b0c45c6b6bfe/55dfd5ac43cecb26-c2/s1280x1920/e9dd86166385dd6e59e8b3c92dd777661589dc26.jpg 1280w, https://64.media.tumblr.com/baedc3e15cd2843ff0d3b0c45c6b6bfe/55dfd5ac43cecb26-c2/s2048x3072/62d0ee503d753725fde160a1380463b059a768d6.jpg 1440w",

        //gallery settings
        name: "Swamp",
        descrip: "Good luck getting out of here.",
        bg: "None",
        ratio: "4/3",

        //commision settings
        numChar: 0,
        finish: 4, //[0, 4]
        size: 0,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //116
        //google access
        id: "1USAKAKHQKZ1A6mVkNd9TtYCDgcUxN1EZ",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/d2b030717c1d5a04dd491818c2bfcd76/55dfd5ac43cecb26-6e/s100x200/8054c33353b3b7e6ecafbc87b7248a98f6f706a9.pnj 100w, https://64.media.tumblr.com/d2b030717c1d5a04dd491818c2bfcd76/55dfd5ac43cecb26-6e/s250x400/8043f9403e36e96666d33be5cd9155896d86c14c.pnj 250w, https://64.media.tumblr.com/d2b030717c1d5a04dd491818c2bfcd76/55dfd5ac43cecb26-6e/s400x600/be678b966b8f921093a78b0aa9fcaa376284524c.pnj 400w, https://64.media.tumblr.com/d2b030717c1d5a04dd491818c2bfcd76/55dfd5ac43cecb26-6e/s500x750/abc9191926e6f57c5cc29f26f7f2cdb9c9e607d4.pnj 500w, https://64.media.tumblr.com/d2b030717c1d5a04dd491818c2bfcd76/55dfd5ac43cecb26-6e/s540x810/9593b14d6932cc117790abe205a3e7c1476120cb.pnj 540w, https://64.media.tumblr.com/d2b030717c1d5a04dd491818c2bfcd76/55dfd5ac43cecb26-6e/s640x960/12380586028a586bccf94fef116b802bcf31953b.pnj 640w, https://64.media.tumblr.com/d2b030717c1d5a04dd491818c2bfcd76/55dfd5ac43cecb26-6e/s1280x1920/6dadc9db1461c2b375f00626e61f5726ab9d2b79.pnj 1200w",

        //gallery settings
        name: "Frozen Wastes",
        descrip: "",
        bg: "None",
        ratio: "4/3",

        //commision settings
        numChar: 0,
        finish: 4, //[0, 4]
        size: 0,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //117
        //google access
        id: "1Kd_OmT5nCuioX-5L0oWAOasLelLCTyi1",

        //tumblr stuff 
        srcset: "https://64.media.tumblr.com/40c9305c83142e7675538efc92459e22/55dfd5ac43cecb26-d3/s100x200/bf0f0b2031f0960b811e28c59002480817ba1825.pnj 100w, https://64.media.tumblr.com/40c9305c83142e7675538efc92459e22/55dfd5ac43cecb26-d3/s250x400/ed315fa589270ae3771758f0e122dc86103ae5ca.pnj 250w, https://64.media.tumblr.com/40c9305c83142e7675538efc92459e22/55dfd5ac43cecb26-d3/s400x600/680d89668f309c3f394461228cf9eb8349262ce7.pnj 400w, https://64.media.tumblr.com/40c9305c83142e7675538efc92459e22/55dfd5ac43cecb26-d3/s500x750/e19d76d58368074fc86d3310f5fc29ff914768f7.pnj 500w, https://64.media.tumblr.com/40c9305c83142e7675538efc92459e22/55dfd5ac43cecb26-d3/s540x810/8a45f0492b23e1d8d5a75135f30bacc45aaf3e6a.pnj 540w, https://64.media.tumblr.com/40c9305c83142e7675538efc92459e22/55dfd5ac43cecb26-d3/s640x960/d8c8359e981e01c2e17f829ef3e0a9ea06880a9a.pnj 640w, https://64.media.tumblr.com/40c9305c83142e7675538efc92459e22/55dfd5ac43cecb26-d3/s1280x1920/15a6e59ca737aece5db1d4ff5b5cb60db594d862.pnj 1280w, https://64.media.tumblr.com/40c9305c83142e7675538efc92459e22/55dfd5ac43cecb26-d3/s2048x3072/d4b06436eb6559c9b9b0988abb8784ecd4a3b302.pnj 1600w",

        //gallery settings
        name: "Parallax Background",
        descrip: "The background for the webstie home page, spent three hours on custom plant brushes. Color added with gradient map. ",
        bg: "None",
        ratio: "4/3",

        //commision settings
        numChar: 0,
        finish: 4, //[0, 4]
        size: 0,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    }


    /* 
     * */

    //image objects. copy and paste below and add to bottom of list
    /*
     ,
    {
        //google access
        id: "",

        //tumblr stuff 
        srcset:"", 
        
        //gallery settings
        name: "___",
        descrip: "___",
        bg: "___",
        ratio: "___",

        //commision settings
        numChar: 0,
        finish: 0, //[0, 4]
        size: 0,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    }
     
     */


];


//image sets, will be displayed in portfolio (set up with gallery)-----------------------------------------
const imgSets = [
    {
        tnIndex: 1, //index of thumbnail
        imgsIndex: [1, 63, 2,3,4], //indexes of all images included

        //only if more than 1 img contained
        name: "Soft Style",
        descrip: "Done on ibis paint using softer brushes. ",
    },
    {
        tnIndex: 14, //index of thumbnail
        imgsIndex: [14, 9, 10, 11, 12, 13 ], //indexes of all images included

        //only if more than 1 img contained
        name: "Planets",
        descrip: "The lineart was done on paper, the colours were added in ibis paint. ",
    },
    {
        tnIndex: 20, //index of thumbnail
        imgsIndex: [20, 15, 19, 18], //indexes of all images included

        //only if more than 1 img contained
        name: "Spirits",
        descrip: "Drawn for a RPG.",
    },
    {
        tnIndex: 22, //index of thumbnail
        imgsIndex: [16, 22, 21], //indexes of all images included

        //only if more than 1 img contained
        name: "Auto Colour",
        descrip: "The colours were added using ibis's auto-colour feature. ",
    },
    {
        tnIndex: 29, //index of thumbnail
        imgsIndex: [29, 30, 31, 28], //indexes of all images included

        //only if more than 1 img contained
        name: "LN Fan Suit Design",
        descrip: "",
    },
    {
        tnIndex: 43, //index of thumbnail
        imgsIndex: [51, 43, 44, 45, 46, 47, 48, 49, 50], //indexes of all images included

        //only if more than 1 img contained
        name: "Sprite",
        descrip: "Character expressions done for a friend. ",
    },
    {
        tnIndex: 54, //index of thumbnail
        imgsIndex: [54, 55], //indexes of all images included

        //only if more than 1 img contained
        name: "Gardevoirs",
        descrip: "Making new gardevior designs for fun. ",
    },
    {
        tnIndex: 61, //index of thumbnail
        imgsIndex: [58, 57, 61], //indexes of all images included

        //only if more than 1 img contained
        name: "LN Evolution Suit",
        descrip: "Previous fan suit based off of LN's evolution mechanics. ",
    },
    {
        tnIndex: 8, //index of thumbnail
        imgsIndex: [64, 60, 8], //indexes of all images included

        //only if more than 1 img contained
        name: "Candy in a Glass",
        descrip: "",
    },
    {
        tnIndex: 66, //index of thumbnail
        imgsIndex: [66, 67, 68], //indexes of all images included

        //only if more than 1 img contained
        name: "Cybord Cat Person",
        descrip: "Character design process of cyborg cat person. ",
    },
    {
        tnIndex: 69, //index of thumbnail
        imgsIndex: [69, 70, 71, 72], //indexes of all images included

        //only if more than 1 img contained
        name: "Cabin Project",
        descrip: "Incooporating blender into backgrounds. ",
    },
    {
        tnIndex: 76, //index of thumbnail
        imgsIndex: [76, 75, 74, 73, 77], //indexes of all images included

        //only if more than 1 img contained
        name: "The Glass Caves",
        descrip: "Designs for the world inside the glass caves. ",
    },
    {
        tnIndex: 78, //index of thumbnail
        imgsIndex: [78, 79, 80], //indexes of all images included

        //only if more than 1 img contained
        name: "Glazelings",
        descrip: "Changing the characters so they are more colourful. ",
    },
    {
        tnIndex: 87, //index of thumbnail
        imgsIndex: [87, 88], //indexes of all images included

        //only if more than 1 img contained
        name: "Butterflies",
        descrip: "Front and back of butterfly character. Her design was based partly off an earlier work. ",
    },
    {
        tnIndex: 93, //index of thumbnail
        imgsIndex: [93, 102, 103, 94, 95, 101, 96, 97, 98, 99, 100], //indexes of all images included

        //only if more than 1 img contained
        name: "Genshin Fan Character",
        descrip: "Her splash art was the first thing finished, followed by her normal and charged attack strings. After a year she was redesigned and modeled in blender, and her skill descriptions were finally completed. ",
    },
    {
        tnIndex: 110, //index of thumbnail
        imgsIndex: [110, 111], //indexes of all images included

        //only if more than 1 img contained
        name: "Bird",
        descrip: "",
    }


    /*copy and past to bottom, read from b to t
     
    ,
    {
        tnIndex: 0, //index of thumbnail
        imgsIndex: [0], //indexes of all images included

        //only if more than 1 img contained
        name: "___",
        descrip: "___",
    }
     
     */ 
];

//side sets-------------------------------------------------------------------------------
const portfolio = [
    'i92', 's9', 'i26', 'i27', 'i20', 'i90',
    'i86', 's13', 'i81', 'i112','s15', 's8',
    'i33', 'i105', 'i116',  'i85', 'i84',  'i107',
     's11','s12','i89', 'i52', 'i106', 'i91',
    'i108',  'i115', 's4','i117', 'i36',
    'i37', 'i34', 's10', 's14'
]
const backgrounds = [
     'i20','i26','i27','i105', 'i85', 'i108', 's4',
     'i91', 'i116', 'i117',  's11','i106', 'i115', 's10' 
]


const charDes = [
    'i92', 's12', 's9', 'i81', 'i90',  'i86','s13', 's14' 
]

const commExamples = [
    "i1", "i2", "i8", "i23", "i24", "i26",
    "i28", "i29", "i30", "i31", "i33", "i34", "i36", "i37",
    "i42", "i52", "i61", "i62", "i64", "i104", "i105",
    "i106", "i107", "i108", "i109", "i110", "i112", "i115",
    "i91", "i92", "i65", "i66", "i67", "i68", "i76", "i78",
    "i79", "i81", "i82", "i83", "i69", "i72", "i84", "i85",
    "i86", "i87", "i88", "i89", "i90", "i93"
]

//creat character design sets
//remove stuff from portfolio
//add more bg into backgrounds


//======| testing (paste into console) |==============================================
/*
 console.log(allImgs.length);
var hey = document.getElementById("hey");
v = "";
for (i = 85; i < allImgs.length; i++) {//
    v += getDiv(i);
}
hey.innerHTML = v;
 
 */
/* paste into console for img ratio, img element must be valid

 let a = 0;
let b = 0;
let gcd = 0;

for (i = 104; i < allImgs.length; i++) { //replace with starting index
  let heyi = document.getElementById("i" + i);
  a = heyi.naturalWidth;
  b= heyi.naturalHeight;
  
  console.log(i, allImgs[i].name, simplify(a, b) );
}

 */
