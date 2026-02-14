

function BotResponse(Input)
{
    Input = Input.toLowerCase()
    if (starterQuestions.includes(Input))
    {
        return {answer:"Hello! How can i help you?"}
    }
    index = 0
    while (index < json.questions.length)
    {
        if (Input == json.questions[index].question)
        {
            return json.questions[index]
        }
        
        index++
    }
  
    return {answer : "Sorry I dont have an answer to that <br> Try checking for spelling errors or ask something else!"}

}

Yes=["yes", "yeah", "ok", "sure","yea", "alright"]
No= ["no","nah","nope", ]
starterQuestions = ["hi","hey","hello"]


json = 
{
    "questions" :
    [
        {
            "question" : "what is electric current",
            "answer" : "Electric Current is defined as the rate of flow of charges through a conductor. Rate of flow means, the amount of charge flowing through a particular area of a conductor in unit time. By convention, electric current flows in the opposite direction to the movement of electrons. <br> Symbol : I/i <br>SI unit : Ampere (A) <br>Formula : i = Q/t <br>Where i is electric current, Q is net charge and t is a time in second.<br> Device used to measure : Ammeter<br> <a href='https://en.wikipedia.org/wiki/Electric_current' target=”_blank”>Click to know more</a> "
        },
        
        {
            "question" : "what is potential difference",
            "answer" : "Potential difference is the work done in moving a unit of positive electric charge from one point to another.<br> Symbol : V <br>SI unit : Volt (V) <br>Formula : V = W/Q <br>Where W is the work done to move  the charge and Q is the total amount of charge moved <br> Device used to measure : Voltmeter<br> <a href='https://byjus.com/question-answer/define-potential-difference-between-two-points/' target=”_blank”>Click to know more</a>"
        },

        {
            "question" : "explain ohms law",
            "answer" : "<b> Ohm's Law</b><br>Ohm's law states that the current flowing through the conductor is directly proportional to the voltage across its two ends, provided all physical conditions and temperatures remain constant. <br> V = IR <br><br> Here is a graph between the Voltage and Current in a Ohmic Conductor (conductor that obeys ohm's law). The linear curve proves that the voltage and current in a conductor are propertional<br> <a href='https://en.wikipedia.org/wiki/Ohm%27s_law' target=”_blank”>Click to know more</a>",
            "image" : "media/images/OhmsLaw.jpg"
        },

        {
            "question" : "differentiate resistance and resistivity",
            "table" : 
            [
                [
                    ["RESISTANCE"],
                    ["Property that opposes the flow of electrons"],
                    ["Depends on the dimensions of conductor"],
                    ["SI unit is ohm"]
                ],

                [
                    ["RESISTIVITY"],
                    ["It is the electrical resistance of a conductor of unit cross-sectional area and unit length."],
                    ["Depends on the nature and temperature of material"],
                    ["SI unit is ohm-m"]
                ]

            ]
        },


        {
            "question" : "what are the properties of a magnet",
            "answer" : "<b>PROPERTIES OF MAGNET</b> <br><br> + A free suspended magnet always points towards the north and south direction<br> + The pole of a magnet which points towards north direction is called the north pole<br> + The pole of a magnet which points toward south direction is called south pole.<br> + Like poles of magnets repel each other while unlike poles of magnets attract each other.<br> <a href='https://byjus.com/physics/magnet/' target=”_blank”>Click to know more</a>"
        },

        {
            "question" : "what is magnetic field",
            "answer" : "<b>MAGNETIC FIELD</b><br>The area around a magnet where a magnetic force is experienced is called the magnetic field. It is a quantity that has both direction and magnitude, (i.e., Vector quantity). The magnetic field is represented by magnetic field lines.",
            "BotQues" : ["Would you like to know more about field lines?","redirect", "explain magnetic field lines" ]
        },

        {
            "question" : "explain magnetic field lines",
            "answer" : "<b>MAGNETIC FIELD LINES</b><br>Magnetic field lines are a visual tool used to represent magnetic fields. They describe the direction of the magnetic force on a north monopole at any given position<br><br><b>Properties of Magnetic Field Lines </b><br>+ Magnetic field lines never cross each other. <br> + The density of the field lines indicates the strength of the field. <br> + Magnetic field lines always make closed loops. <br> + Magnetic field lines always emerge or start from the north pole and terminate at the south pole. <br> + The density of the lines indicates the magnitude of the field <br><br> The image represents field lines around a bar magnet",
            "image" : "media/images/FieldLines.png",
            "BotQues" : ["Would you like to know more about the magnetic effect of electric current?","redirect", "what is magnetic effect of current" ]
        },  


        {
            "question" : "what is magnetic effect of current",
            "answer" : "<b>MAGNETIC EFFECT OF CURRENT</b><br>Whenever current flows in a wire, it creates a circular magnetic field around the wire which can be represented by concentric magnetic field lines. This property of electric current is called Magnetic effect of electric current. <br>It was first discovered by Hans Christian Oersted",
            "BotQues" : ["Would you like to know more about Oersted's experiment ?" , "redirect", "explain oersteds experiment"]
        },

        {
            "question" : "explain oersteds experiment",
            "answer" : "<b>OESTERD'S EXPERIMENT</b><br>In the Oersted experiment, Hans Christian Oersted placed a compass needle near a wire carrying an electric current. He observed that when the current flowed through the wire, the compass needle deflected from its normal north-south orientation. This deflection indicated that the electric current was creating a magnetic field around the wire.<br><br> Oersted's discovery revealed that electricity and magnetism are interrelated phenomena. Prior to this experiment, these two forces were thought to be unrelated.<br><br> Here's a circuit diagram that might help you to understand the Oersted's experiment",
            "image" : "media/images/oersted.png"
        },

        {
            "question" : "explain the structure of an atom",
            "answer" : "An atom is a particle of matter that uniquely defines a chemical element. An atom consists of a central nucleus that is positively charged and contains one or more relatively heavy particles known as protons and neutrons. The nucleus is surrounded by one or more negatively charged electrons. Electrons revolve around the nucleus in fixed orbits or shells called energy levels." ,
            "image" : "media/images/Atom.jpg",
            "video" :  "media/videos/Atom.mp4"
        },

        {
            "question" : "what is daltons atomic theory",
            "answer" : "<b>Dalton's Atomic Theory</b><br> + The matter is composed of minute particles known as atoms.<br> + Atoms are indivisible particles that can't be destroyed or created through chemical reactions.<br> + All atoms of an element have identical chemical properties and mass whereas, atoms of different elements have different chemical properties and masses.<br> + Atoms combine in a ratio of small whole numbers to form molecules and compounds.",
            "BotQues" : ["Would you like to know more about molecules?", "redirect", "what are molecules"]
        },
        {
            "question" : "what are molecules",
            "answer" : "<b>Molecules</b><br> + A group of two or more than two atoms of the same or different elements that are chemically bonded together is called a molecule.<br> + A Molecules is made up of groups of atoms and is the smallest unit of a compound having the physical and chemical properties of that compound. <br>For example, two atoms of hydrogen and one atom of oxygen react with each other and form one molecule of water.",
            "video" : "media/videos/molecule.mp4",
            "BotQues" : ["Would you like to know about chemical bonds and how molecules are formed?","redirect", "explain chemical bonds" ]
        },

        {
            "question" : "explain chemical bonds",
            "answer" : "<b>Chemical Bonds</b><br>Chemical bonds are the attractive force that holds atoms or group of atoms together in a chemical species.They can be classified into ionic bonds and covalant bonds ",
            "table": 
            [
                [
                    ["<b>IONIC BOND</b"],
                    ["Occurs during the transfer of electrons"],
                    ["Non-directional bond"],
                    ["Higher melting point"],
                    ["Higher boiling point"]
                ],

                [
                    ["<b>COVALANT BOND</b>"],
                    ["Occurs when 2 atoms share their valence electrons"],
                    ["Directional bond"],
                    ["Lower melting point"],
                    ["Lower boiling point"]
                ]

            ],
            "video" : "media/videos/bonding.mp4"

        },

        {
            "question" : "what are acids",
            "answer" : "Acidic substances are usually identified by their sour taste. An acid is basically a molecule which can donate an H+ ion and can remain energetically favourable after a loss of H+. Acids are known to turn blue litmus red.",
            "BotQues" : ["Would you like to know  more about related topics like 'bases'?", "redirect", "what are bases"]
        },
        
        {
            "question" : "what are bases",
            "answer" : "Bases are characterized by a bitter taste and a slippery texture. A base that can be dissolved in water is referred to as an alkali. When these substances chemically react with acids, they yield salts. Bases are known to turn red litmus blue."
            
        },

        {
            "question" : "what are metals",
            "answer" : "<b>METALS</b><br>Metals are substances that form naturally below the surface of the Earth. Most metals are lustrous or shiny. Metals are inorganic, which means they are made of substances that were never alive.Metal is very strong and durable and therefore is used to make many things. These are used for making automobiles, satellites, cooking utensils, etc. Most metals are hard but some are not. Sodium and potassium are such metals that can be cut by knife whereas mercury is a liquid metal at room temperature. Iron is solid in nature. <br><br>Would you like to know more about metals? (such as physical properties of metals, chemical properties of metals, differences between metals and non-metals) if yes, please enter your choice</p>"
        },

        {
            "question" : "physical properties of metals",
            "answer" : "<b>PHYSICAL PROPERTIES OF METALS</b> <br> <b> + Conductance : </b>All the metals are good conductors of heat and electricity. Cooking utensils and irons are made up of metals as they are good conductors of heat. <br> <b>+ Ductility : </b> Metals are ductile meaning they have the ability to be drawn or stretched into wires. <br> <b>+ Malleability : </b> Metals are malleable which means they can be beaten into flat sheets. <br> <b>+ Sonority : </b>Metals are sonorous because they produce a deep or ringing sound when struck with another hard object. <br><b> + Lustrous : </b> Usually, all the metals have a shiny appearance while other metals can be polished to have a shiny appearance."
        },

        {
            "question" : "chemical properties of metals",
            "answer" : "<b>CHEMICAL PROPERTIES OF METALS</b><br><br><b>Reaction with water:</b> Only highly reactive metals react with water and not all the metals. For example, Sodium reacts vigorously with water and oxygen and gives a large amount of heat in the process.<br><b>Reaction with acids:</b> Hydrogen gas is produced when metals react with acids. For example, when zinc reacts with hydrochloric acid it produces zinc chloride and hydrogen gas.<br><b>Reaction with bases:</b> Not all the metals react with bases and when they do react, they produce metal salts and hydrogen gas. When zinc reacts with strong sodium hydroxide it gives sodium zincate and hydrogen gas.<br><b>Reaction with oxygen:</b> Metal oxides are produced when metals burn in the presence of oxygen. For example: When a magnesium strip is burned in the presence of oxygen it forms magnesium oxide"
        },

        {
            "question" : "differences between metals and non-metals",
            "table" : 
            [
                [
                    ["<b>METALS</b>"],
                    ["These are solids at room temperature except mercury"],
                    ["These are very hard except sodium"],
                    ["Electropositive in nature"],
                    ["Have high densities"]
                ],

                [
                    ["<b>NON-METALS</b>"],
                    ["These exist in all three states"],
                    ["These are soft except diamond"],
                    ["Electronegative in nature"],
                    ["Have low densities"]
                ]

            ]
        },


        {
            "question" : "what is photosynthesis",
            "answer" : "Photosynthesis is the essential process through which green plants, like trees and grass, create their own food. It occurs in special cells called chloroplasts, which contain a pigment called chlorophyll that captures sunlight. In this process, plants convert sunlight, carbon dioxide, and water into glucose and oxygen, enabling them to nourish themselves while enriching our atmosphere with oxygen.",
            "BotQues" : ["Would you like to know more about steps involved in photosynthesis?", "redirect", "what are the steps involved in photosynthesis"]

        },

        {
            "question" : "what are the steps involved in photosynthesis",
            "answer" : "The various steps involved in photosynthesis are listed below: <br><b>Absorb Sunlight:</b> Plants take in sunlight through their leaves.<br><b>Take in Carbon Dioxide:</b> They also breathe in carbon dioxide from the air through tiny openings in their leaves.<br> <b>Make Oxygen:</b> Plants split water molecules to get oxygen, which they release into the air as a gas we breathe.<br><b>Create Food:</b> Using the energy from sunlight, plants turn carbon dioxide and water into a type of sugar called glucose. This sugar is their food.<br> <b>Store Energy:</b> Some of the glucose is stored for later, and some is used by the plant for energy.<br><br>So, in simple terms, photosynthesis is how plants use sunlight to make food and release oxygen into the air. It's like a plant's way of cooking its own meals using sunlight, air, and water."
        },

    
        {
            "question" : "explain the parts of the digestive system",
            "answer" : "<b>Digestion</b> The digestive system breaks down food into nutrients such as carbohydrates, fats and proteins. They can then be absorbed into the bloodstream so the body can use them for energy, growth and repair.<br><br>The various <b>parts of digestive system</b> and their functions are listed below: <br>MOUTH - ingestion and digestion begins <br>SALIVARY GLANDS - contain amylase for the digestion of carbohydrates <br>OESOPHAGUS - moves food to the stomach from the mouth <br>STOMACH - digestion continues <br>Pancreas - produces enzymes for digestion <br> LIVER - produces bile <br>GALLBLADDER - Stores bile <br>SMALL INTESTINE - absorption of nutrients <br>LARGE INTESTINE - reabsorption of water and egestion",
            "image" : "media/images/digestion.jpg",
            "BotQues" : ["Would you like to know more about the process of digestion?", "redirect", "explain the process of digestion"]

        },

        {
            "question" : "explain the process of digestion",
            "answer" : "Digestion is the process of breaking down larger insoluble substances into smaller soluble substances that can be absorbed into the bloodstream and used across the body. It is carried out by the digestive system. <br><br>MOUTH: Digestion begins in your mouth when you chew your food. While you chew, your saliva mixes with the food, breaking it down into smaller pieces. <br><br>STOMACH: After swallowing, the food goes to your stomach. There, strong stomach acids and digestive enzymes further break down the food into a semi-liquid substance called chyme. <br><br>SMALL INTESTINE: Chyme moves into the small intestine, where the real magic happens. Tiny finger-like structures called villi absorb the nutrients from the food and release them into your bloodstream, providing energy and building blocks for your body. <br><br>LARGE INTESTINE: The leftovers, like fiber and undigested food, enter the large intestine. Here, water is absorbed, making the waste more solid. The remaining waste, is eliminated from your body through the rectum and anus",
            "BotQues" : ["Would you like to watch a video that explains the process of digestion?","video", "media/videos/digestion.mp4" ]
        },

        {
            "question" : "explain functioning of excretary system",
            "answer" : "The excretory system is a crucial part of the human body responsible for removing waste products and regulating various bodily functions. It consists of several organs, primarily the kidneys, ureters, bladder, and urethra, working together to maintain a balanced internal environment. <br><br>KIDNEYS: The kidneys are the central players in this system. They filter blood, removing waste products like urea, creatinine, and excess salts. They also help regulate the body's water and electrolyte balance, ensuring that essential substances like sodium, potassium, and calcium remain within healthy limits. <br> URETERS: Once the kidneys have filtered the blood, waste substances are transported as urine through the ureters to the bladder. These muscular tubes prevent urine from flowing back into the kidneys. <br>BLADDER: The bladder acts as a temporary storage reservoir for urine. When it fills to a certain capacity, nerve signals trigger the sensation of needing to urinate. <br>URETHRA: The urethra is a tube that carries urine from the bladder to the outside of the body.",
            "image" : "media/images/excretary.jpg"
        },

        {
            "question" : "explain functioning of heart",
            "answer" : "The heart is a muscular organ responsible for pumping blood throughout the body. It has four chambers: two atria (upper chambers) and two ventricles (lower chambers). Here's a brief overview of how it functions: <br><br>BLOOD FLOW: Deoxygenated blood flows to the right atrium from the body through the superior and inferior vena cava. The right atrium contracts, pushing blood into the right ventricle.<br>PULMONARY CIRCULAION: The right ventricle contracts, sending blood to the lungs through the pulmonary artery. In the lungs, blood picks up oxygen and releases carbon dioxide.<br>OXYGENATED BLOOD: Oxygen-rich blood returns to the left atrium from the lungs through the pulmonary veins. The left atrium contracts, pushing blood into the left ventricle.<br>SYSTEMIC CIRCULATION: The left ventricle contracts strongly, pumping oxygenated blood through the aorta to the rest of the body's organs and tissues.",
            "image" : "media/images/heart.jpg",
            "BotQues" : ["Would you like to watch a video that explains functioning of heart?","video", "media/videos/heart.mp4" ]


        }
    ]
}


function QuesList()
{
    QList=""
    i=0
    while (i < json.questions.length)
    {
        QList += (i+1) + '. '+ json.questions[i].question + "<br>"
        i++
    }
    return QList
}

