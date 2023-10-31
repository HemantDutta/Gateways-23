import {PublicNavbar} from "../components/PublicNavbar";
import './Event.css'
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

export const Event = () => {

    //Getting Event name
    let eventName = useLocation().state || "itq";

    //Event Details
    const events = {
        itq: {
            imgSrc: "itq.png",
            name: "AstroBytes",
            tag: "Space Tech (IT) Quiz",
            teamSize: "Upto 2 Members",
            prize: [2500, 1500, 750],
            about: "Astrobytes: Where Space Meets Code, the ultimate IT quiz that will take you on an interstellar journey through the cosmos while challenging your programming prowess! Prepare to embark on a celestial adventure where the infinite reaches of space collide with the boundless possibilities of programming.",
            pre: ["N/A"],
            details: {
                duration: "3 Hours Combined",
                rounds: 3,
            },
            heads: ["Akash Goyal | 9602716766", "Prajwal BK | 9113272654", "Rajendran | 7348875942", "Shilpi | 9160113394"],
            rules: ["No using of mobile phones – penalty of 20 points", "2 to 10 points for the correct answer (depending on the question and round)", "If there is a draw (two or three teams scored the same number of points), one more round of rapid-fire quiz can be conducted."]
        },
        cdd: {
            imgSrc: "cdd.png",
            name: "Stellar Perplexity",
            tag: "Space Tech (IT) Quiz",
            teamSize: "Upto 2 Members",
            prize: [5000, 1500, 750],
            about: "In this event there will be three rounds, and one tie breaker round if required. If there are less number of participants there will be no elimination. Minimum 5 teams are required in the final round. The description of each round is as follows:-Encryption Round -> Aptitude questions will be given whose answer will be numerical and will act as a key. They have to find the key and do a basic right Shift operation on the cider text to get the plain text. The plain text will be like a question the answer to which will be the password of the next Encryption question.Debugging round -> Time will be under consideration. Marks on basis of number of bugs have been removed. We can have a set of codes or programs which will have multiple bugs. They have to remove all to progress to the next debug question.Blind Coding -> Person who is closest to the output result will be the winner.Tie breaker -> Whichever team finishes first will win.",
            pre: ["Programming Knowledge"],
            details: {
                duration: "4 Hours Combined",
                rounds: 4,
            },
            heads: ["Vasav Mittal | 9056100929", "Jagriti Rai | 9511195836", "Oishi Halder | 6290059940", "Himanshu | 876231515"],
            rules: ["N/A"]
        },
        ui_ux: {
            imgSrc: "ui_ux.jpg",
            name: "Astral Aesthetics",
            tag: "UI/UX Event",
            teamSize: "Upto 2 Members",
            prize: [5000, 3000, 1000],
            about: "Prepare to embark on an awe-inspiring design odyssey that transcends the boundaries of the ordinary! Join us at Astral Aesthetics, where the captivating convergence of UI/UX design with the captivating mysteries of the cosmos beckons. Embrace the boundless potential of your creative spirit as you venture into the uncharted domains of HTML, CSS, and JavaScript. This is your chance to unleash the full breadth of your artistic prowess, illuminating the digital landscape like a dazzling constellation against the dark expanse. Are you poised and ready to etch your distinctive legacy into the ever-expanding universe of web design? Seize this cosmic opportunity and let your ingenuity shine brighter than the stars!",
            pre: ["HTML", "CSS", "JavaScript"],
            details: {
                duration: "2 Hours Combined",
                rounds: 2,
            },
            heads: ["Alen Kottaram | 9847588000", "Raison Sabu | 9718146763"],
            rules: ["N/A"]
        },
        itm: {
            imgSrc: "itm.jpg",
            name: "SPACEXPERIENCE",
            tag: "IT MANAGER EVENT",
            teamSize: "Individual Participation",
            prize: [3000, 2000, 1000],
            about: "if you believe to be 'The Best' in the world of IT management, \"Welcome to\n" +
                "SpaceXperience – The IT Manager Event, where excellence meets challenge! Join us\n" +
                "to prove your mettle as an ideal manager who excels under pressure, communicates\n" +
                "complex ideas with ease, and thrives in collaborative discussions. Our event features\n" +
                "four exhilarating rounds:\n" +
                "➢ The Aptitude Test: Testing your depth of understanding.\n" +
                "➢ ELI5 Round: Showcasing your communication prowess.\n" +
                "➢ Group Discussion: Engaging in dynamic conversations and idea exchanges.\n" +
                "➢ Stress Interview: Demonstrating your ability to stay composed under\n" +
                "pressure while you think on your feet.\n" +
                "Are you ready to take your IT management leap to the stars? Join us at\n" +
                "SpaceXperience!",
            pre: ["Resume of Candidate", "Professionally dressed and good etiquette"],
            details: {
                duration: "5 Hours Combined",
                rounds: 4,
            },
            heads: ["Neil Manoj C | +91 81130 68373", "Shawn Thomas | +91 85908 51162", "Adarsh Dash | +91 70779 97204", "Elizabeth | +91 6282 518 911"],
            rules: ["N/A"]
        },
        game: {
            imgSrc: "game.png",
            name: "QUASAR ODYSSEY",
            tag: "The Gaming Event",
            teamSize: "Upto 6 Members (1 Substitute)",
            prize: [5000, 3000, 1000],
            about: "Get ready to embark on a gaming odyssey like no other at this year's Gateways! Introducing \"Quasar Odyssey\", Our National Intercollegiate Valorant tournament. Valorant, a tactical first-person shooter by Riot Games.\n" +
                "In the spirit of our Cosmic-themed Gateways Fest, we've added a cosmic twist to \"Quasar Odyssey.\" Special agent selections will take place and it will take you on an interstellar journey. Join us for an out-of-this-world gaming adventure, where you'll engage in fierce Valorant battles, showcasing your skills against competitors from across colleges.\n" +
                "The MVP will earn not only recognition but also a fantastic prize, celebrating their outstanding contributions to their team and the tournament as a whole.\n" +
                "As we explore the vast reaches of the universe in our theme, \"Quasar Odyssey\" promises to be a celestial clash of talent, strategy, and teamwork. Don't miss your chance to be part of this epic gaming voyage that will take you to the stars and beyond. Space meets Valorant, and the gaming galaxy awaits you at Gateways!\n",
            pre: ["Gamers are requested to carry their Laptops and other gaming Accessories."],
            details: {
                duration: "8 Hours Combined",
                rounds: "Variable",
            },
            heads: ["Samson Andrew Fernandez | 9745521159", "Tirthajoti Sinha | 9482011600", "Alwin Thomas", "Ansh Bhandhari"],
            rules: ["All the Gaming Gears should be carried by yourself, No gears will be provided by Us.", "Gamers should carry their College ID Card for verification.", "All Weapons / Agents / Abilities are allowed unless currently disabled in Ranked Play.", "Maps will be selected by map ban pick system.", "Matches will be Custom Unrated.", "Two Matches with one team, if tied Swiftplay as the Tie breaker.", "One team can have one Substitute.", "Atleast One agent must be selected from the given List* which is related to the Gateways theme.", "Teams which failed to include at-least one Agent from the list: Either the Match is replayed or the team will get disqualified.", "All the Games will be played in custom unrated and at the end of the match, Points will be assigned for MVP, Kills, Assist, Highest Combat Score", "Highest KD", "Lowest Deaths", "All participants are expected to maintain a high standard of respect, kindness, and sportsmanship throughout the tournament.", "Players who excessively Bad Manner or have poor sportsmanship as determined by Wellness staff will receive a warning.", "After the both Custom Unrated Match Team Captain should take Screenshot of the Post Match scoreboard to keep track of the player performances.", "Any instance of cheating will result in an immediate removal from the tournament.  Cheating includes but is not limited to: Hacking, Ghosting, Exploiting Bugs and Glitches, Use of a 3rd party program that gives one player an unfair advantage over another.", "List of Agents for Gateways: Astra (Controller), Deadlock (Sentinel), Fade (Initiator), Neon (Duelist), Yoru (Duelist)"]
        },
        prompt: {
            imgSrc: "prompt.png",
            name: "Celestial Conversations",
            tag: "Prompt Engineering Event",
            teamSize: "Individual Participation",
            prize: [5000, 3000, 1000],
            about: "Celestial Conversations, is a Prompt Engineering contest aimed at evaluating participants' proficiency in utilizing AI tools effectively. It unfolds in three captivating rounds. In the initial round, they craft creative prompts and extract precise responses from ChatGPT. The second round centers around debugging of complex code snippets. Lastly, participants face dynamic image generation challenges, leveraging Bing Chat. Join us to witness the celestial magic of AI in action, where innovation meets ingenuity, and minds ascend to new heights in the cosmos!",
            pre: ["N/A"],
            details: {
                duration: "2 Hours Combined",
                rounds: 3,
            },
            heads: ["Anurag Parashar Sarmah | 6001059943", "Harsh Vardhan Singh | 9523835835", "Visesh Agarwal | 7717769254", "Sumit Agarwal"],
            rules: ["N/A"]
        },
        photo: {
            imgSrc: "photo.png",
            name: "Cosmic Capture",
            tag: "Photography Event",
            teamSize: "Individual Participation",
            prize: [5000, 3000, 1000],
            about: "Get ready for an amazing adventure where ordinary things turn into something truly special. \"Cosmic Capture\" is your chance to use your camera and your creative skills. During the event, take a cool picture around our campus, and then use AI and other tools to make it look like it's from outer space!\n" +
                "Picture yourself in the cosmos, let your imagination run wild, and give your photo a cosmic makeover. We'll pick the winners based on how well they change their pictures, how creative they are, how well they fit our space theme, and the story behind each picture.\n",
            pre: ["N/A"],
            details: {
                duration: "2 days | Entire Day",
                rounds: 1,
            },
            heads: ["Kenneth Louis Alvares | 6001059943", "Aditya  | 9523835835", "Samuel Raj"],
            rules: ["N/A"]
        },
        ctf: {
            imgSrc: "ctf.png",
            name: "Starlight Flag Pursuit",
            tag: "Capture The Flag",
            teamSize: "Upto 2 Members",
            prize: [5000, 3000, 1000],
            about: "Ready for a little space excavation people!!!!! Assemble all the flag pursuits squads. Starlight Flag Pursuit(Capture the Flag) will be a mix of technical/non-technical event. Participants need to solve mystery questions from various domains of computer science. These mystery questions will contain clues that will point out to a particular location, the location for the ultimate flag. The team to “capture the flag” first wins. May the best team win!",
            pre: ["N/A"],
            details: {
                duration: "1.5 Hours Combined",
                rounds: 1,
            },
            heads: ["Punith Raj S P", "Sarthak Mathur  | 9122571501", "Rohan Shaw | 8910154055", "Vinay Kumar Reddy"],
            rules: ["N/A"]
        },
        th: {
            imgSrc: "th.png",
            name: "The Cosmic Quest",
            tag: "Treasure Hunt",
            teamSize: "2 to 4 Members",
            prize: [5000, 3000, 1000],
            about: "Set in a distant future, humanity has discovered a mysterious cosmic artifact—the \"Celestial Key.\" Believed to hold the secrets of the universe, it vanished eons ago. Now, brave treasure hunters must decipher ancient star maps, decipher cryptic messages from extraterrestrial beings, and traverse the cosmos to unlock the Celestial Key’s power. The fate of the universe hangs in the balance. Join the hunt, be the hero, and unlock the cosmic secrets!",
            pre: ["N/A"],
            details: {
                duration: "4 Hours Combined",
                rounds: 3,
            },
            heads: ["Satyam Jhawar | 8812943298", "Pearl Dsilva", "Mahua Saikia", "Chandra Mani Pandey | 7023754529"],
            rules: ["No usage of Phones allowed in the first and the last round. If found using a phone in the first and the last round, the respective team will be eliminated.", "Damage to the symbols provided in the rounds will lead to elimination.", "Debating with the officials or any kind of misbehavior with the organizers will not be tolerated.", "Do not reveal your answers/clues to other teams.", "Team members must stay together during the entire Treasure Hunt and are encouraged to work together to solve clues and retrieve the locations.", "Copying or stealing from other teams is not permissible.", "Interfering with other teams will not be tolerated.", "Officials decisions will be full and final.", "Officials decisions will be full and final."]
        },
        be: {
            imgSrc: "be.webp",
            name: "Beyond Earth",
            tag: "The Cosmic Hackathon",
            teamSize: "2 to 4 Members",
            prize: [5000, 3000, 1000],
            about: "Embark on a coding journey that transcends our terrestrial bounds and ventures into the vast expanse of space. Beyond Earth is your ticket to an exhilarating hackathon where participants are challenged to push the boundaries of innovation and technology, reaching for the stars and beyond. \n" +
                "Join fellow enthusiasts, developers, and visionaries as we harness the power of code to pioneer solutions for interstellar challenges. From designing advanced space propulsion systems to creating cutting-edge satellite communication protocols, your skills will be the launchpad for a new era of space exploration. \n" +
                "Unleash your creativity, collaborate with like-minded space aficionados, and let your imagination soar. Dive into the cosmos of possibilities, all while competing for exciting prizes and the chance to have your solutions recognized in the realm of space technology. Are you ready to break free from the gravitational pull of ordinary hackathons? Prepare to elevate your coding expertise, reach for the cosmos, and make your mark Beyond Earth.",
            pre: ["N/A"],
            details: {
                duration: "12 Hours",
                rounds: 3,
                date: "3rd December 2023",
                time: "7:00 AM to 7:00 PM"
            },
            heads: ["Joel John Joseph | 9035845934", "Vishnu Swaroop P S", "Rose Michelle Mathew", "Samuel Raj"],
            rules: ["N/A"]
        },
    }

    //States
    const [curr, setCurr] = useState(events.itq);

    //Set Object For Data Rendering
    useEffect(() => {
        window.scrollTo(0, 0);
        setCurr(events[eventName]);
    }, [])

    return (
        <>
            {/*Header*/}
            <PublicNavbar/>
            {/*Header End*/}
            <div className="event-page">
                <div className="event-container">
                    <div className="event-banner">
                        <img src={`/assets/eventImgs/${curr.imgSrc}`} alt="" className="bg-img"/>
                        <div className="event-tops">
                            <span className="event-name">{curr.name}</span>
                            <span className="event-tag">{curr.tag}</span>
                            <div className="event-heads">
                                <span className="header">Event Heads</span>
                                {
                                    curr.heads.map(((value, index) => {
                                        return (
                                            <>
                                                <span key={index}>{value}</span>
                                            </>
                                        )
                                    }))
                                }
                            </div>
                        </div>
                        <div className="event-reg">
                            <button type="button" className="event-cta"><a href="#" target="_blank">Register</a></button>
                            <div className="event-cta-bg"/>
                        </div>
                    </div>
                    <div className="event-content">
                        <div className="event-about">
                            <span className="header">About</span>
                            <p>{curr.about}</p>
                        </div>
                        <div className="event-prize">
                            <span className="header">Prize Money</span>
                            <p>1st Prize: ₹{curr.prize[0]}</p>
                            <p>2nd Prize: ₹{curr.prize[1]}</p>
                            <p>3rd Prize: ₹{curr.prize[2]}</p>
                        </div>
                        <div className="event-pre">
                            <span className="header">Pre-requisites</span>
                            {
                                curr.pre.map(((value, index) => {
                                    return (
                                        <>
                                            <p key={index}>{value}</p>
                                        </>
                                    )
                                }))
                            }
                        </div>
                        <div className="event-team">
                            <span className="header">Team Size</span>
                            <p>{curr.teamSize}</p>
                        </div>
                        <div className="event-rules">
                            <span className="header">Rules</span>
                            {
                                curr.rules.map(((value, index) => {
                                    return(
                                        <>
                                            <p key={index}> - {value}</p>
                                        </>
                                    )
                                }))
                            }
                        </div>
                        <div className="event-det">
                            <span className="header">Details</span>
                            {
                                Object.keys(curr.details).map((key)=>{
                                    return(
                                        <>
                                            <p key={key}>{key.toLocaleUpperCase()}: {curr.details[key]}</p>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}