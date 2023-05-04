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


const allImgs = [
    {
        //
        //google access
        id: "1WOtwH_vvM7GcPbivzEhCsnqx10dd6U93",

        //portfolio and gallery settings
        name: "Snom Animation",
        descrip: "Snom animation from pokemon, first 'image' uploaded to the allImgs list.",
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

        //gallery settings
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

        //gallery settings
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

        //gallery settings
        name: "Candy in a Glass",
        descrip: "Styling her was very fun.",
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

        //gallery settings
        name: "Queen",
        descrip: "Her character design got lost.",
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

        //gallery settings
        name: "Dust",
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

        //gallery settings
        name: "Shiny Gardevior",
        descrip: "Created a shiny versin to match. ",
        bg: "None",
        ratio: "4/3",

        //commision settings
        numChar: 1 ,
        finish: 2, //[0, 4]
        size: 3,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    }


    /* 
     * 
     * */

    //image objects. copy and paste below and add to bottom of list
    /*
     ,
    {
        //
        //google access
        id: "",

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
//testing

console.log(allImgs.length);
var hey = document.getElementById("hey");
v = "";
for (i = 56; i < allImgs.length; i++) {//
    v += getDiv(i);
}
hey.innerHTML = v;




//image sets, will be displayed in portfolio
const imgSets = [
    {
        tnIndex: 1, //index of thumbnail
        imgsIndex: [1,2,3,4], //indexes of all images included

        //only if more than 1 img contained
        name: "Soft Style",
        descrip: "",
    }

    /*copy and past to bottom, read from b to t
     
         {
        tnIndex: 0, //index of thumbnail
        imgsIndex: [0], //indexes of all images included

        //only if more than 1 img contained
        name: "...",
        descrip: "...",
    }
     
     */ 
];



/* =========================| Funtions |========================= */

//function for creating google docs path
function getGooglePath(id) {
    //id rrefers to the long string after the google share thing
    return "https://drive.google.com/uc?id=" + id;
}
//console.log(getGooglePath("188QjvW06eDdlZjhWN3du4Njqg6FshEq-"));



//function for creating exanded display layout

//creating img backgorund and container

function getDiv(i) { //this is needed for lazy loading I think
    return '<div class="test" '+getDivStyle(getDivAspect(i))+' > ' + getImgElement(i) + ' </div>';
}

function getDivStyle(s) {
    //where s is the strings inside the style thing
    return ' style="' + s + '" ';

}

function getDivAspect(i) {
    //where i is the index of the img in allimgs
    //aspect-ratio:1/1;
    return 'aspect-ratio:' +getImg(i).ratio  + ';';

}

function getImgElement(i) {
    //gets the image element using index of 
    var img = getImg(i);

    return '<img' + getImgID(i) + getClass(img) + getSRC(img) + getAlt(img) + getLazyLoad() +' /> ';
  

}

function getImg(i) {
    //returns the image object for i (index)
    return allImgs[i];
}

function getClass(img) {
    return ' class = "' + img.bg + '" ';

}

function getSRC(img) {
    return ' src = "' + getGooglePath(img.id) + '" ';
}

function getAlt(img) {
    return ' alt = "' + img.name + '" ';
}

function getLazyLoad() {
    return ' loading = "lazy" ';

}

function getImgID(i) { //where i is the image index in allimg
    return ' id = "i' + i + '" ';
}

//function for creating gallery inside layout


//this is what to do, backslashes do not affect it yay


//console.log(allImgs[0].additionals());


//This is for finding image aspect ratios 
function findGCD(a, b) {
    let n = 0;
    let d = 0;

    if (a > b) {
        n = a;
        d = b;
    }
    else {
        n = b;
        d = a;
    }

    if (n == 0 || d == 0) {
        return 0;
    }

    let r = n % d;

    while (r != 0) {
        n = d;
        d = r;
        r = n % d;
    }

    return d;
}

function simplify(a, b) {
    //this does not return backlashes for easy manual pasting
    let gcd = findGCD(a, b);
    a = a / gcd;
    b = b / gcd;
    return " " + a +  "_" + b + " ";
}