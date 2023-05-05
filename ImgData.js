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
    },
    {
        //
        //google access
        id: "1we9qvQWWC7ljMWUUygZhbshzRA30ZKLH",

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

        //gallery settings
        name: "Cyborg",
        descrip: "___",
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

        //gallery settings
        name: "Cyborg (Lineart)",
        descrip: "___",
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
        //
        //google access
        id: "1acL8ySn3NyhQEz44lWpnbBqybXUfG0qY",

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
        //missing
        //google access
        id: "1Qz6J1H9dfR6WXXLZLWdFOJdUXiaXzMhA",

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
        //
        //google access
        id: "12P97M-ZxchS5VpGuyTkee51mcD9JpEZj",

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
        //
        //google access
        id: "1luh9MuRu53G3HwhrHB_4BZIaM9kOSNtR",

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
        //
        //google access
        id: "1NssCSf7MQVM9oQUPaFIc73nv6N8s0616",

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
        //
        //google access
        id: "11K2qHY6kD_LEkGQ3fUcnsw7nQ3DWhel7",

        //gallery settings
        name: "Butterfly Heir Back",
        descrip: "The unfinished sketch of the back of the character.",
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
        //
        //google access
        id: "1eATR3OJsziXAx4hLKeLRuzwR9i87UQ_M",

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
        //
        //google access
        id: "1ysD_MVQHT6N1S2Naggdl8SV_ryoJY_eQ",

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
        id: "1V3J6dQCKrWC0oTEHoxlIb7mC0x-pSgUE",

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

        //gallery settings
        name: "Infected",
        descrip: "",
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

        //gallery settings
        name: "Armour",
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
        //google access
        id: "13ojyvGsVpQV1QlavMV7zH0caQiU5B6jO",

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
        //google access
        id: "1rNHSRyGsakLd7VeLqx4npfxnVj74MMQP",

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
    }


    /* 
     * */

    //image objects. copy and paste below and add to bottom of list
    /*
     ,
    {
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


//image sets, will be displayed in portfolio (set up after gallery)
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



