// objections
var good_reps = {
    "AL": {
        "Sen. Richard C. Shelby": ["https://www.shelby.senate.gov/public/index.cfm/emailsenatorshelby", "", "Republican"],
        "Rep. Terri A. Sewell, AL-7": ["https://sewell.house.gov", "", "Democrat"],
    },
    "AK": {
        "Sen. Lisa Murkowski": ["https://www.murkowski.senate.gov/public/index.cfm/contact", "", "Republican"],
        "Sen. Dan Sullivan": ["https://www.sullivan.senate.gov/contact/email", "", "Republican"],
        "Rep. Don Young, AK-0": ["https://donyoung.house.gov", "", "Republican"],
    },
    "AS": {
        "Rep. Aumua Amata Coleman Radewagen, AS-0": ["https://radewagen.house.gov", "", "Republican"]
    },
    "AZ": {
        "Rep. Raúl M. Grijalva, AZ-3": ["https://grijalva.house.gov", "", "Democrat"],
        "Sen. Kyrsten Sinema": ["https://www.sinema.senate.gov/contact-kyrsten", "", "Democrat"],
        "Rep. Ruben Gallego, AZ-7": ["https://rubengallego.house.gov", "", "Democrat"],
        "Rep. Tom O’Halleran, AZ-1": ["https://ohalleran.house.gov", "", "Democrat"],
        "Rep. Ann Kirkpatrick, AZ-2": ["https://kirkpatrick.house.gov", "", "Democrat"],
        "Rep. Greg Stanton, AZ-9": ["https://stanton.house.gov", "", "Democrat"],
        "Sen. Mark Kelly": ["https://www.kelly.senate.gov", "", "Democrat"]
    },
    "AR": {
        "Sen. John Boozman": ["https://www.boozman.senate.gov/public/index.cfm/contact", "", "Republican"],
        "Rep. Steve Womack, AR-3": ["https://womack.house.gov", "", "Republican"],
        "Sen. Tom Cotton": ["https://www.cotton.senate.gov/contact/contact-tom", "", "Republican"],
        "Rep. J. French Hill, AR-2": ["https://hill.house.gov", "", "Republican"],
        "Rep. Bruce Westerman, AR-4": ["https://westerman.house.gov", "", "Republican"]
    },
    "CA": {
        "Sen. Dianne Feinstein": ["https://www.feinstein.senate.gov/public/index.cfm/e-mail-me", "", "Democrat"],
        "Rep. Karen Bass, CA-37": ["https://bass.house.gov", "", "Democrat"],
        "Rep. Judy Chu, CA-27": ["https://chu.house.gov", "", "Democrat"],
        "Rep. Jim Costa, CA-16": ["https://costa.house.gov", "", "Democrat"],
        "Rep. Anna G. Eshoo, CA-18": ["https://eshoo.house.gov", "", "Democrat"],
        "Rep. John Garamendi, CA-3": ["https://garamendi.house.gov", "", "Democrat"],
        "Rep. Barbara Lee, CA-13": ["https://lee.house.gov", "", "Democrat"],
        "Rep. Zoe Lofgren, CA-19": ["https://lofgren.house.gov", "", "Democrat"],
        "Rep. Doris O. Matsui, CA-6": ["https://matsui.house.gov", "", "Democrat"],
        "Rep. Tom McClintock, CA-4": ["https://mcclintock.house.gov", "", "Republican"],
        "Rep. Jerry McNerney, CA-9": ["https://mcnerney.house.gov", "", "Democrat"],
        "Rep. Grace F. Napolitano, CA-32": ["https://napolitano.house.gov", "", "Democrat"],
        "Rep. Nancy Pelosi, CA-12": ["https://pelosi.house.gov", "", "Democrat"],
        "Rep. Lucille Roybal-Allard, CA-40": ["https://roybal-allard.house.gov", "", "Democrat"],
        "Rep. Adam B. Schiff, CA-28": ["https://schiff.house.gov", "", "Democrat"],
        "Rep. Brad Sherman, CA-30": ["https://sherman.house.gov", "", "Democrat"],
        "Rep. Jackie Speier, CA-14": ["https://speier.house.gov", "", "Democrat"],
        "Rep. Linda T. Sánchez, CA-38": ["https://lindasanchez.house.gov", "", "Democrat"],
        "Rep. Mike Thompson, CA-5": ["https://mikethompson.house.gov", "", "Democrat"],
        "Rep. Maxine Waters, CA-43": ["https://waters.house.gov", "", "Democrat"],
        "Rep. Jared Huffman, CA-2": ["https://huffman.house.gov", "", "Democrat"],
        "Rep. Ami Bera, CA-7": ["https://bera.house.gov", "", "Democrat"],
        "Rep. Eric Swalwell, CA-15": ["https://swalwell.house.gov", "", "Democrat"],
        "Rep. Julia Brownley, CA-26": ["https://juliabrownley.house.gov", "", "Democrat"],
        "Rep. Tony Cárdenas, CA-29": ["https://cardenas.house.gov", "", "Democrat"],
        "Rep. Raul Ruiz, CA-36": ["https://ruiz.house.gov", "", "Democrat"],
        "Rep. Mark Takano, CA-41": ["https://takano.house.gov", "", "Democrat"],
        "Rep. Alan S. Lowenthal, CA-47": ["https://lowenthal.house.gov", "", "Democrat"],
        "Rep. Juan Vargas, CA-51": ["https://vargas.house.gov", "", "Democrat"],
        "Rep. Scott H. Peters, CA-52": ["https://scottpeters.house.gov", "", "Democrat"],
        "Rep. Mark DeSaulnier, CA-11": ["https://desaulnier.house.gov", "", "Democrat"],
        "Rep. Pete Aguilar, CA-31": ["https://aguilar.house.gov", "", "Democrat"],
        "Rep. Ted Lieu, CA-33": ["https://lieu.house.gov", "", "Democrat"],
        "Rep. Norma J. Torres, CA-35": ["https://torres.house.gov", "", "Democrat"],
        "Sen. Kamala D. Harris": ["https://www.harris.senate.gov/contact", "", "Democrat"],
        "Rep. Ro Khanna, CA-17": ["https://khanna.house.gov", "", "Democrat"],
        "Rep. Jimmy Panetta, CA-20": ["https://panetta.house.gov", "", "Democrat"],
        "Rep. Salud O. Carbajal, CA-24": ["https://carbajal.house.gov", "", "Democrat"],
        "Rep. Nanette Diaz Barragán, CA-44": ["https://barragan.house.gov", "", "Democrat"],
        "Rep. J. Luis Correa, CA-46": ["https://correa.house.gov", "", "Democrat"],
        "Rep. Jimmy Gomez, CA-34": ["https://gomez.house.gov", "", "Democrat"],
        "Rep. Josh Harder, CA-10": ["https://harder.house.gov", "", "Democrat"],
        "Rep. Katie Porter, CA-45": ["https://porter.house.gov", "", "Democrat"],
        "Rep. Mike Levin, CA-49": ["https://mikelevin.house.gov", "", "Democrat"],
        "Rep. Darrell E. Issa, CA-50": ["https://issa.house.gov", "", "Republican"],
        "Rep. David G. Valadao, CA-21": ["https://valadao.house.gov", "", "Republican"],
        "Rep. Young Kim, CA-39": ["https://youngkim.house.gov/", "", "Republican"],
        "Rep. Michelle Steel, CA-48": ["https://steel.house.gov/", "", "Republican"],
        "Rep. Sara Jacobs, CA-53": ["https://sarajacobs.house.gov/", "", "Democrat"]
    },
    "CO": {
        "Sen. Michael F. Bennet": ["https://www.bennet.senate.gov/public/index.cfm/contact", "", "Democrat"],
        "Rep. Diana DeGette, CO-1": ["https://degette.house.gov", "", "Democrat"],
        "Rep. Ed Perlmutter, CO-7": ["https://perlmutter.house.gov", "", "Democrat"],
        "Rep. Ken Buck, CO-4": ["https://buck.house.gov", "", "Republican"],
        "Rep. Joe Neguse, CO-2": ["https://neguse.house.gov", "", "Democrat"],
        "Rep. Jason Crow, CO-6": ["https://crow.house.gov", "", "Democrat"],
        "Sen. John W. Hickenlooper": ["https://www.hickenlooper.senate.gov", "", "Democrat"]
    },
    "CT": {
        "Sen. Richard Blumenthal": ["https://www.blumenthal.senate.gov/contact/", "", "Democrat"],
        "Rep. Joe Courtney, CT-2": ["https://courtney.house.gov", "", "Democrat"],
        "Rep. Rosa L. DeLauro, CT-3": ["https://delauro.house.gov", "", "Democrat"],
        "Rep. James A. Himes, CT-4": ["https://himes.house.gov", "", "Democrat"],
        "Rep. John B. Larson, CT-1": ["https://larson.house.gov", "", "Democrat"],
        "Sen. Christopher Murphy": ["http://www.murphy.senate.gov/contact", "", "Democrat"],
        "Rep. Jahana Hayes, CT-5": ["https://hayes.house.gov", "", "Democrat"]
    },
    "DE": {
        "Sen. Thomas R. Carper": ["http://www.carper.senate.gov/public/index.cfm/email-senator-carper", "", "Democrat"],
        "Sen. Christopher A. Coons": ["https://www.coons.senate.gov/contact", "", "Democrat"],
        "Rep. Lisa Blunt Rochester, DE-0": ["https://bluntrochester.house.gov", "", "Democrat"]
    },
    "DC": {
        "Rep. Eleanor Holmes Norton, DC-0": ["https://norton.house.gov", "", "Democrat"]
    },
    "FL": {
        "Rep. Gus M. Bilirakis, FL-12": ["https://bilirakis.house.gov", "", "Republican"],
        "Rep. Vern Buchanan, FL-16": ["https://buchanan.house.gov", "", "Republican"],
        "Rep. Kathy Castor, FL-14": ["https://castor.house.gov", "", "Democrat"],
        "Rep. Theodore E. Deutch, FL-22": ["https://teddeutch.house.gov", "", "Democrat"],
        "Rep. Alcee L. Hastings, FL-20": ["https://alceehastings.house.gov", "", "Democrat"],
        "Sen. Marco Rubio": ["http://www.rubio.senate.gov/public/index.cfm/contact", "", "Republican"],
        "Rep. Debbie Wasserman Schultz, FL-23": ["https://wassermanschultz.house.gov", "", "Democrat"],
        "Rep. Frederica S. Wilson, FL-24": ["https://wilson.house.gov", "", "Democrat"],
        "Rep. Lois Frankel, FL-21": ["https://frankel.house.gov", "", "Democrat"],
        "Rep. Al Lawson, Jr., FL-5": ["https://lawson.house.gov", "", "Democrat"],
        "Rep. Stephanie N. Murphy, FL-7": ["https://murphy.house.gov", "", "Democrat"],
        "Rep. Darren Soto, FL-9": ["https://soto.house.gov", "", "Democrat"],
        "Rep. Val Butler Demings, FL-10": ["https://demings.house.gov", "", "Democrat"],
        "Rep. Charlie Crist, FL-13": ["https://crist.house.gov", "", "Democrat"],
        "Rep. Brian J. Mast, FL-18": ["https://mast.house.gov", "", "Republican"],
        "Rep. Maria Salazar, FL-27": ["https://salazar.house.gov/", "", "Republican"]
    },
    "GA": {
        "Rep. Sanford D. Bishop, Jr., GA-2": ["https://bishop.house.gov", "", "Democrat"],
        "Rep. Henry C. \"Hank\" Johnson, Jr., GA-4": ["https://hankjohnson.house.gov", "", "Democrat"],
        "Rep. Austin Scott, GA-8": ["https://austinscott.house.gov", "", "Republican"],
        "Rep. David Scott, GA-13": ["https://davidscott.house.gov", "", "Democrat"],
        "Rep. A. Drew Ferguson IV, GA-3": ["https://ferguson.house.gov", "", "Republican"],
        "Rep. Lucy McBath, GA-6": ["https://mcbath.house.gov", "", "Democrat"],
        "Rep. Nikema Williams, GA-5": ["https://nikemawilliams.house.gov/", "", "Democrat"],
        "Rep. Carolyn Bourdeaux, GA-7": ["https://bourdeaux.house.gov/", "", "Democrat"],
    },
    "HI": {
        "Sen. Mazie K. Hirono": ["https://www.hirono.senate.gov/contact", "", "Democrat"],
        "Sen. Brian Schatz": ["https://www.schatz.senate.gov/contact", "", "Democrat"],
        "Rep. Ed Case, HI-1": ["https://case.house.gov", "", "Democrat"],
        "Rep. Kaialiʻi Kahele, HI-2": ["https://kahele.house.gov/", "", "Democrat"]
    },
    "ID": {
        "Sen. James E. Risch": ["http://www.risch.senate.gov/public/index.cfm?p=Email", "", "Republican"],
        "Sen. Mike Crapo": ["https://www.crapo.senate.gov/contact", "", "Republican"],
        "Rep. Michael K. Simpson, ID-2": ["https://simpson.house.gov", "", "Republican"]
    },
    "IL": {
        "Sen. Richard J. Durbin": ["https://www.durbin.senate.gov/contact/", "", "Democrat"],
        "Rep. Danny K. Davis, IL-7": ["https://davis.house.gov", "", "Democrat"],
        "Rep. Adam Kinzinger, IL-16": ["https://kinzinger.house.gov", "", "Republican"],
        "Rep. Mike Quigley, IL-5": ["https://quigley.house.gov", "", "Democrat"],
        "Rep. Bobby L. Rush, IL-1": ["https://rush.house.gov", "", "Democrat"],
        "Rep. Janice D. Schakowsky, IL-9": ["https://schakowsky.house.gov", "", "Democrat"],
        "Rep. Bill Foster, IL-11": ["https://foster.house.gov", "", "Democrat"],
        "Sen. Tammy Duckworth": ["https://www.duckworth.senate.gov/content/contact-senator", "", "Democrat"],
        "Rep. Rodney Davis, IL-13": ["https://rodneydavis.house.gov", "", "Republican"],
        "Rep. Cheri Bustos, IL-17": ["https://bustos.house.gov", "", "Democrat"],
        "Rep. Robin L. Kelly, IL-2": ["https://robinkelly.house.gov", "", "Democrat"],
        "Rep. Darin LaHood, IL-18": ["https://lahood.house.gov", "", "Republican"],
        "Rep. Bradley Scott Schneider, IL-10": ["https://schneider.house.gov", "", "Democrat"],
        "Rep. Raja Krishnamoorthi, IL-8": ["https://krishnamoorthi.house.gov", "", "Democrat"],
        "Rep. Jesús G. \"Chuy\" García, IL-4": ["https://chuygarcia.house.gov", "", "Democrat"],
        "Rep. Sean Casten, IL-6": ["https://casten.house.gov", "", "Democrat"],
        "Rep. Lauren Underwood, IL-14": ["https://underwood.house.gov", "", "Democrat"],
        "Rep. Marie Newman, IL-3": ["https://newman.house.gov/", "", "Democrat"]
    },
    "IN": {
        "Rep. Larry Bucshon, IN-8": ["https://bucshon.house.gov", "", "Republican"],
        "Rep. André Carson, IN-7": ["https://carson.house.gov", "", "Democrat"],
        "Sen. Todd Young": ["https://www.young.senate.gov/contact", "", "Republican"],
        "Rep. Trey Hollingsworth, IN-9": ["https://hollingsworth.house.gov", "", "Republican"],
        "Rep. Frank Mrvan, IN-1": ["https://mrvan.house.gov/", "", "Democrat"],
        "Rep. Victoria Spartz, IN-5": ["https://spartz.house.gov/", "", "Republican"]
    },
    "IA": {
        "Sen. Chuck Grassley": ["http://www.grassley.senate.gov/contact", "", "Republican"],
        "Sen. Joni Ernst": ["https://www.ernst.senate.gov/public/index.cfm/contact", "", "Republican"],
        "Rep. Cynthia Axne, IA-3": ["https://axne.house.gov", "", "Democrat"],
        "Rep. Ashley Hinson, IA-1": ["https://hinson.house.gov/", "", "Republican"],
        "Rep. Mariannette Miller-Meeks, IA-2": ["https://millermeeks.house.gov/", "", "Republican"],
        "Rep. Randy Feenstra, IA-4": ["https://feenstra.house.gov/", "", "Republican"]
    },
    "KS": {
        "Sen. Jerry Moran": ["https://www.moran.senate.gov/public/index.cfm/e-mail-jerry", "", "Republican"],
        "Rep. Sharice Davids, KS-3": ["https://davids.house.gov", "", "Democrat"],
    },
    "KY": {
        "Sen. Mitch McConnell": ["http://www.mcconnell.senate.gov/public/index.cfm?p=contact", "", "Republican"],
        "Rep. Brett Guthrie, KY-2": ["https://guthrie.house.gov", "", "Republican"],
        "Sen. Rand Paul": ["https://www.paul.senate.gov/connect/email-rand", "", "Republican"],
        "Rep. John A. Yarmuth, KY-3": ["https://yarmuth.house.gov", "", "Democrat"],
        "Rep. Thomas Massie, KY-4": ["https://massie.house.gov", "", "Republican"],
        "Rep. Andy Barr, KY-6": ["https://barr.house.gov", "", "Republican"],
        "Rep. James Comer, KY-1": ["https://comer.house.gov", "", "Republican"]
    },
    "LA": {
        "Sen. Bill Cassidy": ["https://www.cassidy.senate.gov/contact", "", "Republican"],
        "Rep. Cedric L. Richmond, LA-2": ["https://richmond.house.gov", "", "Democrat"],
    },
    "ME": {
        "Sen. Susan M. Collins": ["http://www.collins.senate.gov/contact", "", "Republican"],
        "Rep. Chellie Pingree, ME-1": ["https://pingree.house.gov", "", "Democrat"],
        "Sen. Angus S. King, Jr.": ["https://www.king.senate.gov/contact", "", "Independent"],
        "Rep. Jared F. Golden, ME-2": ["https://golden.house.gov", "", "Democrat"]
    },
    "MD": {
        "Sen. Benjamin L. Cardin": ["http://www.cardin.senate.gov/contact/", "", "Democrat"],
        "Rep. Steny H. Hoyer, MD-5": ["https://hoyer.house.gov", "", "Democrat"],
        "Rep. C. A. Dutch Ruppersberger, MD-2": ["https://ruppersberger.house.gov", "", "Democrat"],
        "Rep. John P. Sarbanes, MD-3": ["https://sarbanes.house.gov", "", "Democrat"],
        "Sen. Chris Van Hollen": ["http://www.vanhollen.senate.gov/contact/email", "", "Democrat"],
        "Rep. Anthony G. Brown, MD-4": ["https://anthonybrown.house.gov", "", "Democrat"],
        "Rep. Jamie Raskin, MD-8": ["https://raskin.house.gov", "", "Democrat"],
        "Rep. David J. Trone, MD-6": ["https://trone.house.gov", "", "Democrat"],
        "Rep. Kweisi Mfume, MD-7": ["https://mfume.house.gov/contact", "", "Democrat"]
    },
    "MA": {
        "Rep. William R. Keating, MA-9": ["https://keating.house.gov", "", "Democrat"],
        "Rep. Stephen F. Lynch, MA-8": ["https://lynch.house.gov", "", "Democrat"],
        "Sen. Edward J. Markey": ["https://www.markey.senate.gov/contact", "", "Democrat"],
        "Rep. James P. McGovern, MA-2": ["https://mcgovern.house.gov", "", "Democrat"],
        "Rep. Richard E. Neal, MA-1": ["https://neal.house.gov", "", "Democrat"],
        "Sen. Elizabeth Warren": ["https://www.warren.senate.gov/?p=email_senator", "", "Democrat"],
        "Rep. Katherine M. Clark, MA-5": ["https://katherineclark.house.gov", "", "Democrat"],
        "Rep. Seth Moulton, MA-6": ["https://moulton.house.gov", "", "Democrat"],
        "Rep. Lori Trahan, MA-3": ["https://trahan.house.gov", "", "Democrat"],
        "Rep. Ayanna Pressley, MA-7": ["https://pressley.house.gov", "", "Democrat"],
        "Rep. Jake Auchincloss, MA-4": ["https://auchincloss.house.gov/", "", "Democrat"]
    },
    "MI": {
        "Sen. Debbie Stabenow": ["https://www.stabenow.senate.gov/contact", "", "Democrat"],
        "Rep. Bill Huizenga, MI-2": ["https://huizenga.house.gov", "", "Republican"],
        "Sen. Gary C. Peters": ["https://www.peters.senate.gov/contact/email-gary", "", "Democrat"],
        "Rep. Fred Upton, MI-6": ["https://upton.house.gov", "", "Republican"],
        "Rep. Daniel T. Kildee, MI-5": ["https://dankildee.house.gov", "", "Democrat"],
        "Rep. John R. Moolenaar, MI-4": ["https://moolenaar.house.gov", "", "Republican"],
        "Rep. Debbie Dingell, MI-12": ["https://debbiedingell.house.gov", "", "Democrat"],
        "Rep. Brenda L. Lawrence, MI-14": ["https://lawrence.house.gov", "", "Democrat"],
        "Rep. Elissa Slotkin, MI-8": ["https://slotkin.house.gov", "", "Democrat"],
        "Rep. Andy Levin, MI-9": ["https://andylevin.house.gov", "", "Democrat"],
        "Rep. Haley M. Stevens, MI-11": ["https://stevens.house.gov", "", "Democrat"],
        "Rep. Rashida Tlaib, MI-13": ["https://tlaib.house.gov", "", "Democrat"],
        "Rep. Peter Meijer, MI-3": ["https://meijer.house.gov/", "", "Republican"]
    },
    "MN": {
        "Sen. Amy Klobuchar": ["http://www.klobuchar.senate.gov/public/index.cfm/contact", "", "Democrat"],
        "Rep. Betty McCollum, MN-4": ["https://mccollum.house.gov", "", "Democrat"],
        "Rep. Tom Emmer, MN-6": ["https://emmer.house.gov", "", "Republican"],
        "Sen. Tina Smith": ["https://www.smith.senate.gov/contact-tina", "", "Democrat"],
        "Rep. Angie Craig, MN-2": ["https://craig.house.gov", "", "Democrat"],
        "Rep. Dean Phillips, MN-3": ["https://phillips.house.gov", "", "Democrat"],
        "Rep. Ilhan Omar, MN-5": ["https://omar.house.gov", "", "Democrat"],
        "Rep. Pete Stauber, MN-8": ["https://stauber.house.gov", "", "Republican"]
    },
    "MS": {
        "Sen. Roger F. Wicker": ["https://www.wicker.senate.gov/public/index.cfm/contact", "", "Republican"],
        "Rep. Bennie G. Thompson, MS-2": ["https://benniethompson.house.gov", "", "Democrat"],
    },
    "MO": {
        "Sen. Roy Blunt": ["https://www.blunt.senate.gov/public/index.cfm/contact-roy", "", "Republican"],
        "Rep. Emanuel Cleaver, MO-5": ["https://cleaver.house.gov", "", "Democrat"],
        "Rep. Ann Wagner, MO-2": ["https://wagner.house.gov", "", "Republican"],
        "Rep. Cori Bush, MO-1": ["https://bush.house.gov/", "", "Democrat"]
    },
    "MT": {
        "Sen. Jon Tester": ["https://www.tester.senate.gov/?p=email_senator", "", "Democrat"],
    },
    "NE": {
        "Rep. Jeff Fortenberry, NE-1": ["https://fortenberry.house.gov", "", "Republican"],
        "Sen. Deb Fischer": ["http://www.fischer.senate.gov/public/index.cfm/contact", "", "Republican"],
        "Sen. Ben Sasse": ["http://www.sasse.senate.gov/public/index.cfm/email-ben", "", "Republican"],
        "Rep. Don Bacon, NE-2": ["https://bacon.house.gov", "", "Republican"]
    },
    "NV": {
        "Rep. Mark E. Amodei, NV-2": ["https://amodei.house.gov", "", "Republican"],
        "Rep. Dina Titus, NV-1": ["https://titus.house.gov", "", "Democrat"],
        "Sen. Catherine Cortez Masto": ["https://www.cortezmasto.senate.gov/contact", "", "Democrat"],
        "Sen. Jacky Rosen": ["https://www.rosen.senate.gov/contact_jacky", "", "Democrat"],
        "Rep. Steven Horsford, NV-4": ["https://horsford.house.gov", "", "Democrat"],
        "Rep. Susie Lee, NV-3": ["https://susielee.house.gov", "", "Democrat"]
    },
    "NH": {
        "Sen. Jeanne Shaheen": ["https://www.shaheen.senate.gov/contact/contact-jeanne", "", "Democrat"],
        "Rep. Ann M. Kuster, NH-2": ["https://kuster.house.gov", "", "Democrat"],
        "Sen. Margaret Wood Hassan": ["https://www.hassan.senate.gov/content/contact-senator", "", "Democrat"],
        "Rep. Chris Pappas, NH-1": ["https://pappas.house.gov", "", "Democrat"]
    },
    "NJ": {
        "Sen. Robert Menendez": ["https://www.menendez.senate.gov/contact", "", "Democrat"],
        "Rep. Frank Pallone, Jr., NJ-6": ["https://pallone.house.gov", "", "Democrat"],
        "Rep. Bill Pascrell, Jr., NJ-9": ["https://pascrell.house.gov", "", "Democrat"],
        "Rep. Albio Sires, NJ-8": ["https://sires.house.gov", "", "Democrat"],
        "Rep. Christopher H. Smith, NJ-4": ["https://chrissmith.house.gov", "", "Republican"],
        "Rep. Donald M. Payne, Jr., NJ-10": ["https://payne.house.gov", "", "Democrat"],
        "Sen. Cory A. Booker": ["https://www.booker.senate.gov/?p=contact", "", "Democrat"],
        "Rep. Donald Norcross, NJ-1": ["https://norcross.house.gov", "", "Democrat"],
        "Rep. Bonnie Watson Coleman, NJ-12": ["https://watsoncoleman.house.gov", "", "Democrat"],
        "Rep. Josh Gottheimer, NJ-5": ["https://gottheimer.house.gov", "", "Democrat"],
        "Rep. Andy Kim, NJ-3": ["https://kim.house.gov", "", "Democrat"],
        "Rep. Tom Malinowski, NJ-7": ["https://malinowski.house.gov", "", "Democrat"],
        "Rep. Mikie Sherrill, NJ-11": ["https://sherrill.house.gov", "", "Democrat"]
    },
    "NM": {
        "Sen. Martin Heinrich": ["http://www.heinrich.senate.gov/contact", "", "Democrat"],
        "Sen. Ben Ray Luján": ["https://www.lujan.senate.gov", "", "Democrat"],
        "Rep. Debra A. Haaland, NM-1": ["https://haaland.house.gov", "", "Democrat"],
        "Rep. Teresa Fernandez, NM-3": ["https://fernandez.house.gov/", "", "Democrat"]
    },
    "NY": {
        "Sen. Kirsten E. Gillibrand": ["https://www.gillibrand.senate.gov/contact/email-me", "", "Democrat"],
        "Rep. Yvette D. Clarke, NY-9": ["https://clarke.house.gov", "", "Democrat"],
        "Rep. Brian Higgins, NY-26": ["https://higgins.house.gov", "", "Democrat"],
        "Rep. Carolyn B. Maloney, NY-12": ["https://maloney.house.gov", "", "Democrat"],
        "Rep. Gregory W. Meeks, NY-5": ["https://meeks.house.gov", "", "Democrat"],
        "Rep. Jerrold Nadler, NY-10": ["https://nadler.house.gov", "", "Democrat"],
        "Rep. Tom Reed, NY-23": ["https://reed.house.gov", "", "Republican"],
        "Sen. Charles E. Schumer": ["https://www.schumer.senate.gov/contact/email-chuck", "", "Democrat"],
        "Rep. Paul Tonko, NY-20": ["https://tonko.house.gov", "", "Democrat"],
        "Rep. Nydia M. Velázquez, NY-7": ["https://velazquez.house.gov", "", "Democrat"],
        "Rep. Grace Meng, NY-6": ["https://meng.house.gov", "", "Democrat"],
        "Rep. Hakeem S. Jeffries, NY-8": ["https://jeffries.house.gov", "", "Democrat"],
        "Rep. Sean Patrick Maloney, NY-18": ["https://seanmaloney.house.gov", "", "Democrat"],
        "Rep. Kathleen M. Rice, NY-4": ["https://kathleenrice.house.gov", "", "Democrat"],
        "Rep. John Katko, NY-24": ["https://katko.house.gov", "", "Republican"],
        "Rep. Thomas R. Suozzi, NY-3": ["https://suozzi.house.gov", "", "Democrat"],
        "Rep. Adriano Espaillat, NY-13": ["https://espaillat.house.gov", "", "Democrat"],
        "Rep. Joseph D. Morelle, NY-25": ["https://morelle.house.gov", "", "Democrat"],
        "Rep. Alexandria Ocasio-Cortez, NY-14": ["https://ocasio-cortez.house.gov", "", "Democrat"],
        "Rep. Antonio Delgado, NY-19": ["https://delgado.house.gov", "", "Democrat"],
        "Rep. Andrew Garbarino, NY-2": ["https://garbarino.house.gov/", "", "Republican"],
        "Rep. Ritchie Torres, NY-15": ["https://ritchietorres.house.gov/", "", "Democrat"],
        "Rep. Jamaal Bowman, NY-16": ["https://bowman.house.gov/", "", "Democrat"],
        "Rep. Mondaire Jones, NY-17": ["https://jones.house.gov/", "", "Democrat"]
    },
    "NC": {
        "Sen. Richard Burr": ["https://www.burr.senate.gov/contact/email", "", "Republican"],
        "Rep. G. K. Butterfield, NC-1": ["https://butterfield.house.gov", "", "Democrat"],
        "Rep. Patrick T. McHenry, NC-10": ["https://mchenry.house.gov", "", "Republican"],
        "Rep. David E. Price, NC-4": ["https://price.house.gov", "", "Democrat"],
        "Rep. Alma S. Adams, NC-12": ["https://adams.house.gov", "", "Democrat"],
        "Sen. Thom Tillis": ["https://www.tillis.senate.gov/public/index.cfm/email-me", "", "Republican"],
        "Rep. Gregory F. Murphy, NC-3": ["https://gregmurphy.house.gov/", "", "Republican"],
        "Rep. Deborah Ross, NC-2": ["https://ross.house.gov/", "", "Democrat"],
        "Rep. Kathy Manning, NC-6": ["https://manning.house.gov/", "", "Democrat"],
    },
    "ND": {
        "Sen. John Hoeven": ["http://www.hoeven.senate.gov/public/index.cfm/email-the-senator", "", "Republican"],
        "Sen. Kevin Cramer": ["https://www.cramer.senate.gov/contact/contact-kevin", "", "Republican"],
        "Rep. Kelly Armstrong, ND-0": ["https://armstrong.house.gov", "", "Republican"]
    },
    "OH": {
        "Sen. Sherrod Brown": ["http://www.brown.senate.gov/contact/", "", "Democrat"],
        "Rep. Marcia L. Fudge, OH-11": ["https://fudge.house.gov", "", "Democrat"],
        "Rep. Marcy Kaptur, OH-9": ["https://kaptur.house.gov", "", "Democrat"],
        "Rep. Robert E. Latta, OH-5": ["https://latta.house.gov", "", "Republican"],
        "Sen. Rob Portman": ["https://www.portman.senate.gov/public/index.cfm/contact?p=contact-form", "", "Republican"],
        "Rep. Tim Ryan, OH-13": ["https://timryan.house.gov", "", "Democrat"],
        "Rep. Steve Stivers, OH-15": ["https://stivers.house.gov", "", "Republican"],
        "Rep. Michael R. Turner, OH-10": ["https://turner.house.gov", "", "Republican"],
        "Rep. Brad R. Wenstrup, OH-2": ["https://wenstrup.house.gov", "", "Republican"],
        "Rep. Joyce Beatty, OH-3": ["https://beatty.house.gov", "", "Democrat"],
        "Rep. David P. Joyce, OH-14": ["https://joyce.house.gov", "", "Republican"],
        "Rep. Troy Balderson, OH-12": ["https://balderson.house.gov", "", "Republican"],
        "Rep. Anthony Gonzalez, OH-16": ["https://anthonygonzalez.house.gov", "", "Republican"]
    },
    "OK": {
        "Sen. James M. Inhofe": ["https://www.inhofe.senate.gov/contact", "", "Republican"]
    },
    "OR": {
        "Sen. Jeff Merkley": ["http://www.merkley.senate.gov/contact/", "", "Democrat"],
        "Rep. Earl Blumenauer, OR-3": ["https://blumenauer.house.gov", "", "Democrat"],
        "Rep. Peter A. DeFazio, OR-4": ["https://defazio.house.gov", "", "Democrat"],
        "Rep. Kurt Schrader, OR-5": ["https://schrader.house.gov", "", "Democrat"],
        "Sen. Ron Wyden": ["https://www.wyden.senate.gov/contact/", "", "Democrat"],
        "Rep. Suzanne Bonamici, OR-1": ["https://bonamici.house.gov", "", "Democrat"]
    },
    "PA": {
        "Sen. Robert P. Casey, Jr.": ["https://www.casey.senate.gov/contact/", "", "Democrat"],
        "Rep. Michael F. Doyle, PA-18": ["https://doyle.house.gov", "", "Democrat"],
        "Sen. Patrick J. Toomey": ["https://www.toomey.senate.gov/?p=contact", "", "Republican"],
        "Rep. Matt Cartwright, PA-8": ["https://cartwright.house.gov", "", "Democrat"],
        "Rep. Brendan F. Boyle, PA-2": ["https://boyle.house.gov", "", "Democrat"],
        "Rep. Dwight Evans, PA-3": ["https://evans.house.gov", "", "Democrat"],
        "Rep. Brian K. Fitzpatrick, PA-1": ["https://fitzpatrick.house.gov", "", "Republican"],
        "Rep. Conor Lamb, PA-17": ["https://lamb.house.gov", "", "Democrat"],
        "Rep. Mary Gay Scanlon, PA-5": ["https://scanlon.house.gov", "", "Democrat"],
        "Rep. Susan Wild, PA-7": ["https://wild.house.gov", "", "Democrat"],
        "Rep. Madeleine Dean, PA-4": ["https://dean.house.gov", "", "Democrat"],
        "Rep. Chrissy Houlahan, PA-6": ["https://houlahan.house.gov", "", "Democrat"],
    },
    "RI": {
        "Sen. Sheldon Whitehouse": ["https://www.whitehouse.senate.gov/contact/email-sheldon", "", "Democrat"],
        "Sen. Jack Reed": ["https://www.reed.senate.gov/contact/", "", "Democrat"],
        "Rep. David N. Cicilline, RI-1": ["https://cicilline.house.gov", "", "Democrat"],
        "Rep. James R. Langevin, RI-2": ["https://langevin.house.gov", "", "Democrat"]
    },
    "SC": {
        "Sen. Lindsey Graham": ["https://www.lgraham.senate.gov/public/index.cfm/e-mail-senator-graham", "", "Republican"],
        "Rep. James E. Clyburn, SC-6": ["https://clyburn.house.gov", "", "Democrat"],
        "Sen. Tim Scott": ["https://www.scott.senate.gov/contact/email-me", "", "Republican"],
        "Rep. Nancy Mace, SC-1": ["https://mace.house.gov/", "", "Republican"]
    },
    "SD": {
        "Sen. John Thune": ["http://www.thune.senate.gov/public/index.cfm/contact", "", "Republican"],
        "Sen. Mike Rounds": ["https://www.rounds.senate.gov/contact/email-mike", "", "Republican"],
        "Rep. Dusty Johnson, SD-0": ["https://dustyjohnson.house.gov", "", "Republican"]
    },
    "TN": {
        "Rep. Steve Cohen, TN-9": ["https://cohen.house.gov", "", "Democrat"],
        "Rep. Jim Cooper, TN-5": ["https://cooper.house.gov", "", "Democrat"],
    },
    "TX": {
        "Sen. John Cornyn": ["https://www.cornyn.senate.gov/contact", "", "Republican"],
        "Rep. Kevin Brady, TX-8": ["https://kevinbrady.house.gov", "", "Republican"],
        "Rep. Henry Cuellar, TX-28": ["https://cuellar.house.gov", "", "Democrat"],
        "Rep. Lloyd Doggett, TX-35": ["https://doggett.house.gov", "", "Democrat"],
        "Rep. Kay Granger, TX-12": ["https://kaygranger.house.gov", "", "Republican"],
        "Rep. Al Green, TX-9": ["https://algreen.house.gov", "", "Democrat"],
        "Rep. Sheila Jackson Lee, TX-18": ["https://jacksonlee.house.gov", "", "Democrat"],
        "Rep. Eddie Bernice Johnson, TX-30": ["https://ebjohnson.house.gov", "", "Democrat"],
        "Rep. Michael T. McCaul, TX-10": ["https://mccaul.house.gov", "", "Republican"],
        "Rep. Joaquin Castro, TX-20": ["https://castro.house.gov", "", "Democrat"],
        "Rep. Marc A. Veasey, TX-33": ["https://veasey.house.gov", "", "Democrat"],
        "Rep. Filemon Vela, TX-34": ["https://vela.house.gov", "", "Democrat"],
        "Rep. Vicente Gonzalez, TX-15": ["https://gonzalez.house.gov", "", "Democrat"],
        "Rep. Jodey C. Arrington, TX-19": ["https://arrington.house.gov", "", "Republican"],
        "Rep. Dan Crenshaw, TX-2": ["https://crenshaw.house.gov", "", "Republican"],
        "Rep. Van Taylor, TX-3": ["https://vantaylor.house.gov", "", "Republican"],
        "Rep. Lizzie Fletcher, TX-7": ["https://fletcher.house.gov", "", "Democrat"],
        "Rep. Veronica Escobar, TX-16": ["https://escobar.house.gov", "", "Democrat"],
        "Rep. Chip Roy, TX-21": ["https://roy.house.gov", "", "Republican"],
        "Rep. Sylvia R. Garcia, TX-29": ["https://sylviagarcia.house.gov", "", "Democrat"],
        "Rep. Colin Z. Allred, TX-32": ["https://allred.house.gov", "", "Democrat"],
        "Rep. Ernest Gonzales, TX-23": ["https://gonzales.house.gov/", "", "Republican"]
    },
    "UT": {
        "Sen. Mike Lee": ["https://www.lee.senate.gov/public/index.cfm/contact", "", "Republican"],
        "Rep. John R. Curtis, UT-3": ["https://curtis.house.gov", "", "Republican"],
        "Sen. Mitt Romney": ["https://www.romney.senate.gov/contact-senator-romney", "", "Republican"],
        "Rep. Blake Moore, UT-1": ["https://blakemoore.house.gov/", "", "Republican"],
    },
    "VT": {
        "Sen. Bernard Sanders": ["http://www.sanders.senate.gov/contact/", "", "Independent"],
        "Sen. Patrick J. Leahy": ["https://www.leahy.senate.gov/contact/", "", "Democrat"],
        "Rep. Peter Welch, VT-0": ["https://welch.house.gov", "", "Democrat"]
    },
    "VA": {
        "Sen. Mark R. Warner": ["http://www.warner.senate.gov/public/index.cfm?p=Contact", "", "Democrat"],
        "Rep. Gerald E. Connolly, VA-11": ["https://connolly.house.gov", "", "Democrat"],
        "Rep. Robert C. \"Bobby\" Scott, VA-3": ["https://bobbyscott.house.gov", "", "Democrat"],
        "Sen. Tim Kaine": ["https://www.kaine.senate.gov/contact", "", "Democrat"],
        "Rep. Donald S. Beyer, Jr., VA-8": ["https://beyer.house.gov", "", "Democrat"],
        "Rep. A. Donald McEachin, VA-4": ["https://mceachin.house.gov", "", "Democrat"],
        "Rep. Elaine G. Luria, VA-2": ["https://luria.house.gov", "", "Democrat"],
        "Rep. Abigail Davis Spanberger, VA-7": ["https://spanberger.house.gov", "", "Democrat"],
        "Rep. Jennifer Wexton, VA-10": ["https://wexton.house.gov", "", "Democrat"],
    },
    "WA": {
        "Sen. Maria Cantwell": ["http://www.cantwell.senate.gov/public/index.cfm/email-maria", "", "Democrat"],
        "Rep. Jaime Herrera Beutler, WA-3": ["https://herrerabeutler.house.gov", "", "Republican"],
        "Rep. Rick Larsen, WA-2": ["https://larsen.house.gov", "", "Democrat"],
        "Sen. Patty Murray": ["http://www.murray.senate.gov/public/index.cfm/contactme", "", "Democrat"],
        "Rep. Adam Smith, WA-9": ["https://adamsmith.house.gov", "", "Democrat"],
        "Rep. Suzan K. DelBene, WA-1": ["https://delbene.house.gov", "", "Democrat"],
        "Rep. Derek Kilmer, WA-6": ["https://kilmer.house.gov", "", "Democrat"],
        "Rep. Dan Newhouse, WA-4": ["https://newhouse.house.gov", "", "Republican"],
        "Rep. Pramila Jayapal, WA-7": ["https://jayapal.house.gov", "", "Democrat"],
        "Rep. Kim Schrier, WA-8": ["https://schrier.house.gov", "", "Democrat"],
        "Rep. Marilyn Strickland, WA-10": ["https://strickland.house.gov/", "", "Democrat"]
    },
    "WV": {
        "Sen. Joe Manchin, III": ["http://www.manchin.senate.gov/public/index.cfm/contact-form", "", "Democrat"],
        "Sen. Shelley Moore Capito": ["https://www.capito.senate.gov/contact/contact-shelley", "", "Republican"],
        "Rep. David B. McKinley, WV-1": ["https://mckinley.house.gov", "", "Republican"],
    },
    "WI": {
        "Sen. Tammy Baldwin": ["https://www.baldwin.senate.gov/feedback", "", "Democrat"],
        "Sen. Ron Johnson": ["https://www.ronjohnson.senate.gov/public/index.cfm/email-the-senator", "", "Republican"],
        "Rep. Ron Kind, WI-3": ["https://kind.house.gov", "", "Democrat"],
        "Rep. Gwen Moore, WI-4": ["https://gwenmoore.house.gov", "", "Democrat"],
        "Rep. Mark Pocan, WI-2": ["https://pocan.house.gov", "", "Democrat"],
        "Rep. Glenn Grothman, WI-6": ["https://grothman.house.gov", "", "Republican"],
        "Rep. Mike Gallagher, WI-8": ["https://gallagher.house.gov", "", "Republican"],
        "Rep. Bryan Steil, WI-1": ["https://steil.house.gov", "", "Republican"],
    },
    "WY": {
        "Sen. John Barrasso": ["https://www.barrasso.senate.gov/public/index.cfm/contact-form", "", "Republican"],
        "Rep. Liz Cheney, WY-0": ["https://cheney.house.gov", "", "Republican"],
    },
    "MP": {
        "Rep. Gregorio Kilili Camacho Sablan, MP-0": ["https://sablan.house.gov", "", "Democrat"]
    },
    "VI": {
        "Rep. Stacey E. Plaskett, VI-0": ["https://plaskett.house.gov", "", "Democrat"]
    },
    "PR": {
        "Rep. Jenniffer González-Colón, PR-0": ["https://gonzalez-colon.house.gov", "", "Republican"]
    },
    "GU": {
        "Rep. Michael F. Q. San Nicolas, GU-0": ["https://sannicolas.house.gov", "", "Democrat"]
    }
}

/////////////////
////////////////
/////////////////
////////////////
/////////////////

var rep_objections = {
    'AL': {
        'Sen. Tommy Tuberville': ["https://www.tuberville.senate.gov/", " ", "Republican"],
        'Rep. Robert B. Aderholt, AL-4': ["https://aderholt.house.gov/contact-robert", " ", "Republican"],
        'Rep. Mo Brooks, AL-5': ["https://brooks.house.gov/contact-me", "*Worked with founder of 'Stop The Steal' to incite insurrection", "Republican"],
        'Rep. Jerry Carl, AL-1': ["https://carl.house.gov/", " ", "Republican"],
        'Rep. Barry Moore, AL-2': ["https://barrymoore.house.gov/", " ", "Republican"],
        'Rep. Gary Palmer, AL-6': ["https://palmer.house.gov/contact", " ", "Republican"],
        'Rep. Mike D. Rogers, AL-3': ["https://mikerogers.house.gov/contact/", " ", "Republican"],
    },
    'AZ': {
        'Rep. Andy Biggs, AZ-5': ["https://biggs.house.gov/contact", "*Worked with founder of 'Stop The Steal' to incite insurrection", "Republican"],
        'Rep. Paul A. Gosar, AZ-4': ["https://gosar.house.gov/contact/", "*Worked with founder of 'Stop The Steal' to incite insurrection", "Republican"],
        'Rep. Debbie Lesko, AZ-8': ["https://lesko.house.gov/contact/", " ", "Republican"],
        'Rep. David Schweikert, AZ-6': ["https://schweikert.house.gov/contact", " ", "Republican"],
    },
    'AR': {
        'Rep. Eric A. "Rick" Crawford, AR-1': ["https://crawford.house.gov/contact/contact-form.htm", " ", "Republican"],
    },
    'CA': {
        'Rep. Ken Calvert, CA-42': ["https://calvert.house.gov/contact", " ", "Republican"],
        'Rep. Mike Garcia, CA-25': ["https://mikegarcia.house.gov/contact", " ", "Republican"],
        'Rep. Darrell Issa, CA-50': ["https://issa.house.gov/address_authentication?form=/contact", " ", "Republican"],
        'Rep. Doug LaMalfa, CA-1': ["https://lamalfa.house.gov/contact", " ", "Republican"],
        'Rep. Kevin McCarthy, CA-23': ["https://kevinmccarthy.house.gov/contact", " ", "Republican"],
        'Rep. Devin Nunes, CA-22': ["https://nunes.house.gov/contact/", " ", "Republican"],
        'Rep. Jay Obernolte, CA-8': ["https://obernolte.house.gov/address_authentication?form=/contact", " ", "Republican"],
    },
    'CO': {
        'Rep. Lauren Boebert, CO-3': ["https://boebert.house.gov/address_authentication?form=/contact", "*Live-tweeted the location of Speaker Nancy Pelosi", "Republican"],
        'Rep. Doug Lamborn, CO-5': ["https://lamborn.house.gov/contact", " ", "Republican"],
    },
    'FL': {
        'Sen. Rick Scott': ["https://www.rickscott.senate.gov/contact_rick", " ", "Republican"],
        'Rep. Kat Cammack, FL-3': ["https://cammack.house.gov/address_authentication?form=/contact", " ", "Republican"],
        'Rep. Mario Diaz-Balart, FL-25': ["https://mariodiazbalart.house.gov/contact-mario", " ", "Republican"],
        'Rep. Byron Donalds, FL-19': ["https://donalds.house.gov/contact", " ", "Republican"],
        'Rep. Neal Dunn, FL-2': ["https://dunn.house.gov/contact", " ", "Republican"],
        'Rep. Scott Franklin, FL-15': ["https://franklin.house.gov/contact", " ", "Republican"],
        'Rep. Matt Gaetz, FL-1': ["https://gaetz.house.gov/contact", " ", "Republican"],
        'Rep. Carlos Gimenez, FL-26': ["https://gimenez.house.gov/address_authentication?form=/contact", " ", "Republican"],
        'Rep. Brian Mast, FL-18': ["https://mast.house.gov/email", " ", "Republican"],
        'Rep. Bill Posey, FL-8': ["https://posey.house.gov/contact/", " ", "Republican"],
        'Rep. John Rutherford, FL-4': ["https://rutherford.house.gov/contact", " ", "Republican"],
        'Rep. Greg Steube, FL-17': ["https://steube.house.gov/contact/email-me", " ", "Republican"],
        'Rep. Daniel Webster, FL-11': ["https://webster.house.gov/email-me", " ", "Republican"],

        'Rep. Michael Waltz, FL-6': ["https://waltz.house.gov/contact/", "*Switched stance the night of Jan. 6"],
    },
    'GA': {
        'Rep. Rick Allen, GA-12': ["https://allen.house.gov/contact/", " ", "Republican"],
        'Rep. Earl L. "Buddy" Carter, GA-1': ["https://buddycarter.house.gov/contact/", " ", "Republican"],
        'Rep. Andrew Clyde, GA-9': ["https://clyde.house.gov/address_authentication?form=/contact", " ", "Republican"],
        'Rep. Marjorie Taylor Greene, GA-14': ["https://greene.house.gov/address_authentication?form=/contact", " ", "Republican"],
        'Rep. Jody Hice, GA-10': ["https://hice.house.gov/contact/", " ", "Republican"],
        'Rep. Barry Loudermilk, GA-11': ["https://loudermilk.house.gov/contact/", " ", "Republican"],

        'Sen. Kelly Loeffler': ["https://www.loeffler.senate.gov/connect/email-kelly", "*Switched stance the night of Jan. 6"],
    },
    'ID': {
        'Rep. Russ Fulcher, ID-1': ["https://fulcher.house.gov/contact", " ", "Republican"],
    },
    'IL': {
        'Rep. Mike Bost, IL-12': ["https://bost.house.gov/contact", " ", "Republican"],
        'Rep. Mary Miller, IL-15': ["https://marymiller.house.gov/address_authentication?form=/contact", "*Quoted Hitler at Jan 6th's coup attempt", "Republican"],

    },
    'IN': {
        'Rep. Jim Baird, IN-4': ["https://baird.house.gov/contact/", " ", "Republican"],
        'Rep. Jim Banks, IN-3': ["https://banks.house.gov/contact/", " ", "Republican"],
        'Rep. Greg Pence, IN-6': ["https://pence.house.gov/contact", " ", "Republican"],
        'Rep. Jackie Walorski, IN-2': ["https://walorski.house.gov/contact/", " ", "Republican"],

        'Sen. Mike Braun': ["https://www.braun.senate.gov", "*Switched stance the night of Jan. 6"],
    },
    'KS': {
        'Sen. Roger Marshall': ["https://www.marshall.senate.gov", " ", "Republican"],
        'Rep. Ron Estes, KS-4': ["https://estes.house.gov/contact/", " ", "Republican"],
        'Rep. Jake LaTurner, KS-2': ["https://laturner.house.gov/contact", " ", "Republican"],
        'Rep. Tracey Mann, KS-1': ["https://mann.house.gov/address_authentication?form=/contact", " ", "Republican"],
    },
    'KY': {
        'Rep. Harold Rogers, KY-5': ["https://halrogers.house.gov/contact-hal", " ", "Republican"],
    },
    'LA': {
        'Sen. John Neely Kennedy': ["https://www.kennedy.senate.gov/public/email-me", " ", "Republican"],
        'Rep. Garret Graves, LA-6': ["https://garretgraves.house.gov/contact", " ", "Republican"],
        'Rep. Clay Higgins, LA-3': ["https://clayhiggins.house.gov/contact", " ", "Republican"],
        'Rep. Mike Johnson, LA-4': ["https://mikejohnson.house.gov/contact", " ", "Republican"],
        'Rep. Steve Scalise, LA-1': ["https://scaliseforms.house.gov/contact/", " ", "Republican"],
    },
    'MD': {
        'Rep. Andy Harris, MD-1': ["https://harris.house.gov/contact", " ", "Republican"],
    },
    'MI': {
        'Rep. Jack Bergman, MI-1': ["https://bergman.house.gov/contact/", " ", "Republican"],
        'Rep. Lisa McClain, MI-10': ["https://mcclain.house.gov/address_authentication?form=/contact", " ", "Republican"],
        'Rep. Tim Walberg, MI-7': ["https://walberg.house.gov/contact", " ", "Republican"],
    },
    'MN': {
        'Rep. Michelle Fischbach, MN-7': ["https://fischbach.house.gov/address_authentication?form=/contact", " ", "Republican"],
        'Rep. Jim Hagedorn, MN-1': ["https://hagedorn.house.gov/contact", " ", "Republican"],
    },
    'MS': {
        'Sen. Cindy Hyde-Smith': ["https://www.hydesmith.senate.gov/content/contact-senator", " ", "Republican"],
        'Rep. Michael Guest, MS-3': ["https://guest.house.gov/contact", " ", "Republican"],
        'Rep. Trent Kelly, MS-1': ["https://trentkelly.house.gov/contact/", " ", "Republican"],
        'Rep. Steven M. Palazzo, MS-4': ["https://palazzo.house.gov/contact/", " ", "Republican"],

    },
    'MO': {
        'Sen. Josh Hawley': ["https://www.hawley.senate.gov/contact-senator-hawley", " ", "Republican"],
        'Rep. Sam Graves, MO-6': ["https://graves.house.gov/contact", " ", "Republican"],
        'Rep. Vicky Hartzler, MO-4': ["https://hartzler.house.gov/contact-me", " ", "Republican"],
        'Rep. Billy Long, MO-7': ["https://long.house.gov/contact/", " ", "Republican"],
        'Rep. Blaine Luetkemeyer, MO-3': ["https://luetkemeyer.house.gov/contact/", " ", "Republican"],
        'Rep. Jason T. Smith, MO-8': ["https://jasonsmith.house.gov/contact/", " ", "Republican"],
    },
    'MT': {
        'Rep. Matt Rosendale, MT-0': ["https://rosendale.house.gov/contact/", " ", "Republican"],
        'Sen. Steve Daines': ["https://www.daines.senate.gov/connect/email-steve", " ", "Republican"],
    },
    'NE': {
        'Rep. Adrian Smith, NE-3': ["https://adriansmith.house.gov/contact", " ", "Republican"],
    },
    'NJ': {
        'Rep. Jeff Van Drew, NJ-2': ["https://vandrewforms.house.gov/contact/", " ", "Republican"],
    },
    'NM': {
        'Rep. Yvette Herrell, NM-2': ["https://herrell.house.gov/address_authentication?form=/contact", " ", "Republican"],
    },
    'NY': {
        'Rep. Chris Jacobs, NY-27': ["https://jacobs.house.gov/contact", " ", "Republican"],
        'Rep. Nicole Malliotakis, NY-11': ["https://malliotakis.house.gov/address_authentication?form=/contact", " ", "Republican"],
        'Rep. Elise Stefanik, NY-21': ["https://stefanik.house.gov/contact", " ", "Republican"],
        'Rep. Lee Zeldin, NY-1': ["https://zeldin.house.gov/zip-code-lookup?form=/contact/email-me", " ", "Republican"],
    },
    'NC': {
        'Rep. Dan Bishop, NC-9': ["https://danbishop.house.gov/contact", " ", "Republican"],
        'Rep. Ted Budd, NC-13': ["https://budd.house.gov/contact/", " ", "Republican"],
        'Rep. Madison Cawthorn, NC-11': ["https://cawthorn.house.gov/address_authentication?form=/contact", " ", "Republican"],
        'Rep. Virginia Foxx, NC-5': ["https://foxx.house.gov/connect/default.aspx", " ", "Republican"],
        'Rep. Richard Hudson, NC-8': ["https://hudson.house.gov/zip-code-lookup?form=/email-me", " ", "Republican"],
        'Rep. Gregory Murphy, NC-3': ["https://gregmurphy.house.gov/contact", " ", "Republican"],
        'Rep. David Rouzer, NC-7': ["https://rouzer.house.gov/email", " ", "Republican"],
    },
    'OH': {
        'Rep. Steve Chabot, OH-1': ["https://chabot.house.gov/contact/", " ", "Republican"],
        'Rep. Warren Davidson, OH-8': ["https://davidson.house.gov/contact", " ", "Republican"],
        'Rep. Bob Gibbs, OH-7': ["https://gibbs.house.gov/contact", " ", "Republican"],
        'Rep. Bill Johnson, OH-6': ["https://billjohnson.house.gov/contact/", " ", "Republican"],
        'Rep. Jim Jordan, OH-4': ["https://jordan.house.gov/contact/", " ", "Republican"],
    },
    'OK': {
        'Rep. Stephanie Bice, OK-5': ["https://bice.house.gov/address_authentication?form=/contact", " ", "Republican"],
        'Rep. Tom Cole, OK-4': ["https://cole.house.gov/contact", " ", "Republican"],
        'Rep. Kevin Hern, OK-1': ["https://hern.house.gov/contact/", " ", "Republican"],
        'Rep. Frank D. Lucas, OK-3': ["https://lucas.house.gov/contact", " ", "Republican"],
        'Rep. Markwayne Mullin, OK-2': ["https://mullin.house.gov/contact/", " ", "Republican"],

        'Sen. James Lankford': ["https://www.lankford.senate.gov/contact/email", "*Switched stance the night of Jan. 6"],
    },
    'OR': {
        'Rep. Cliff Bentz, OR-2': ["https://bentz.house.gov", " ", "Republican"],
    },
    'PA': {
        'Rep. John Joyce, PA-13': ["https://johnjoyce.house.gov/contact/", " ", "Republican"],
        'Rep. Fred Keller, PA-12': ["https://keller.house.gov/contact", " ", "Republican"],
        'Rep. Mike Kelly, PA-16': ["https://kelly.house.gov/contact-me", " ", "Republican"],
        'Rep. Dan Meuser, PA-9': ["https://meuser.house.gov/contact", " ", "Republican"],
        'Rep. Scott Perry, PA-10': ["https://perry.house.gov/contact/", " ", "Republican"],
        'Rep. Guy Reschenthaler, PA-14': ["https://reschenthaler.house.gov/zip-code-lookup?form=/contact/email-me", " ", "Republican"],
        'Rep. Lloyd Smucker, PA-11': ["https://smucker.house.gov/contact", " ", "Republican"],
        'Rep. Glenn Thompson, PA-15': ["https://thompson.house.gov/contact", " ", "Republican"],
    },
    'SC': {
        'Rep. Jeff Duncan, SC-3': ["https://jeffduncan.house.gov/contact", " ", "Republican"],
        'Rep. Ralph Norman, SC-5': ["https://norman.house.gov/contact/", " ", "Republican"],
        'Rep. Tom Rice, SC-7': ["https://tomriceforms.house.gov/contact/", " ", "Republican"],
        'Rep. William Timmons, SC-4': ["https://timmons.house.gov/contact", " ", "Republican"],
        'Rep. Joe Wilson, SC-2': ["https://joewilson.house.gov/contact/email-me", " ", "Republican"],
    },
    'TN': {
        'Rep. Tim Burchett, TN-2': ["https://burchett.house.gov/contact", " ", "Republican"],
        'Rep. Scott DesJarlais, TN-4': ["https://desjarlais.house.gov/contact/email-me", " ", "Republican"],
        'Rep. Charles J. "Chuck" Fleischmann, TN-3': ["https://fleischmann.house.gov/contact", " ", "Republican"],
        'Rep. Mark Green, TN-7': ["https://markgreen.house.gov/email-me", " ", "Republican"],
        'Rep. Diana Harshbarger, TN-1': ["https://harshbarger.house.gov/address_authentication?form=/contact", " ", "Republican"],
        'Rep. David Kustoff, TN-8': ["https://kustoff.house.gov/contact", " ", "Republican"],
        'Rep. John Rose, TN-6': ["https://johnrose.house.gov/contact", " ", "Republican"],

        'Sen. Marsha Blackburn': ["https://www.blackburn.senate.gov/email-me", "*Switched stance the night of Jan. 6"],
        'Sen. Bill Hagerty': ["https://www.hagerty.senate.gov", "*Switched stance the night of Jan. 6"],
    },
    'TX': {
        'Sen. Ted Cruz': ["https://www.cruz.senate.gov/?p=form&id=16", " ", "Republican"],
        'Rep. Jodey Arrington, TX-19': ["https://arrington.house.gov/contact/", " ", "Republican"],
        'Rep. Brian Babin, TX-36': ["https://babin.house.gov/contact/", " ", "Republican"],
        'Rep. Michael C. Burgess, TX-26': ["https://burgess.house.gov/contact/", " ", "Republican"],
        'Rep. John Carter, TX-31': ["https://carter.house.gov/zip-code-lookup?form=/email-me", " ", "Republican"],
        'Rep. Michael Cloud, TX-27': ["https://cloud.house.gov/contact/", " ", "Republican"],
        'Rep. Pat Fallon, TX-4': ["https://fallon.house.gov/address_authentication?form=/contact", " ", "Republican"],
        'Rep. Louie Gohmert, TX-1': ["https://gohmert.house.gov/contact/", " ", "Republican"],
        'Rep. Lance Gooden, TX-5': ["https://gooden.house.gov/contact", " ", "Republican"],
        'Rep. Ronny Jackson, TX-13': ["https://jackson.house.gov/contact", " ", "Republican"],
        'Rep. Troy Nehls, TX-22': ["https://nehls.house.gov/address_authentication?form=/contact", " ", "Republican"],
        'Rep. August Pfluger, TX-11': ["https://pfluger.house.gov/contact", " ", "Republican"],
        'Rep. Pete Sessions, TX-17': ["https://sessions.house.gov/address_authentication?form=/contact", " ", "Republican"],
        'Rep. Beth Van Duyne, TX-24': ["https://vanduyne.house.gov/address_authentication?form=/contact", " ", "Republican"],
        'Rep. Randy Weber, TX-14': ["https://weber.house.gov/contact/", " ", "Republican"],
        'Rep. Roger Williams, TX-25': ["https://williams.house.gov/contact", " ", "Republican"],
        'Rep. Ron Wright, TX-6': ["https://wright.house.gov/contact", " ", "Republican"],
    },
    'UT': {
        'Rep. Burgess Owens, UT-4': ["https://owens.house.gov/address_authentication?form=/contact", " ", "Republican"],
        'Rep. Chris Stewart, UT-2': ["https://stewart.house.gov/contact/", " ", "Republican"],
    },
    'VA': {
        'Rep. Ben Cline, VA-6': ["https://cline.house.gov/contact", " ", "Republican"],
        'Rep. Bob Good, VA-5': ["https://good.house.gov/address_authentication?form=/contact", " ", "Republican"],
        'Rep. H. Morgan Griffith, VA-9': ["https://morgangriffith.house.gov/contact/contactform.htm", " ", "Republican"],
        'Rep. Rob Wittman, VA-1': ["https://wittman.house.gov/contact/", " ", "Republican"],
    },
    'WA': {
        'Rep. Cathy McMorris Rodgers, WA-5': ["https://mcmorris.house.gov/contact/", "*Switched stance the night of Jan. 6"],
    },
    'WI': {
        'Rep. Scott Fitzgerald, WI-5': ["https://fitzgerald.house.gov/address_authentication?form=/contact", " ", "Republican"],
        'Rep. Tom Tiffany, WI-7': ["https://tiffany.house.gov/contact", " ", "Republican"],
    },
    'WV': {
        'Rep. Carol Miller, WV-3': ["https://mckinley.house.gov/contact/", " ", "Republican"],
        'Rep. Alex Mooney, WV-2': ["https://mooney.house.gov/contact", " ", "Republican"],
    },
    'WY': {
        'Sen. Cynthia Lummis': ["https://www.lummis.senate.gov", " ", "Republican"],
    }
}







//$.getJSON('https://theunitedstates.io/congress-legislators/legislators-current.json', function(data) {
//    data.forEach(element => {
////        console.log(element)
////        console.log(element['terms'])
//        var last_term = element['terms'][element['terms'].length - 1]
////        console.log(last_term)
//
////        console.log(the_state)
//        var contact = ""
//        if ('contact_form' in last_term) {
//            contact = last_term.contact_form
//        } else if ('url' in last_term){
//            contact = last_term.url
//        } else {
//            contact = ""
//            console.log("HEY\n HEY \nHEY LOOK AT ME")
//            console.log(element)
//        }
//
//        var full_name = ""
//        var name = ""
//        if ('official_full' in element.name) {
//            name = element.name.official_full
//        } else {
//            name = `${element.name.first} ${element.name.last}`
//        }
//
//
//        if (last_term.type == 'rep') {
//            var the_state = last_term['state']
//            full_name = `Rep. ${name}, ${the_state}-${last_term.district}`
//        } else if (last_term.type == 'sen') {
//            full_name = `Sen. ${name}`
//        }
////        console.log(full_name)
//        var the_state = last_term['state']
//        if (!(full_name in rep_objections[the_state])) {
//            reps[the_state][full_name] = [contact, "", last_term.party]
//        }
//
//    })
//
//})

//var state_codes = [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ];
//var x = 0
//var num_deleted = 0
//while (x < 59) {
//    for (const rep_name in all_reps[state_codes[x]]) {
//        if (state_codes[x] in rep_objections) {
//            if (rep_name in rep_objections[state_codes[x]]) {
//                console.log("BADDIE")
//                console.log(rep_name)
//                delete all_reps[state_codes[x]][rep_name]
//                num_deleted += 1
//            }
//        }
//    }
//    x += 1
//}
//
//console.log(num_deleted)
function abbrState(input, to){

    var states = [
        ['Arizona', 'AZ'],
        ['Alabama', 'AL'],
        ['Alaska', 'AK'],
        ['Arkansas', 'AR'],
        ['California', 'CA'],
        ['Colorado', 'CO'],
        ['Connecticut', 'CT'],
        ['Delaware', 'DE'],
        ['Florida', 'FL'],
        ['Georgia', 'GA'],
        ['Hawaii', 'HI'],
        ['Idaho', 'ID'],
        ['Illinois', 'IL'],
        ['Indiana', 'IN'],
        ['Iowa', 'IA'],
        ['Kansas', 'KS'],
        ['Kentucky', 'KY'],
        ['Louisiana', 'LA'],
        ['Maine', 'ME'],
        ['Maryland', 'MD'],
        ['Massachusetts', 'MA'],
        ['Michigan', 'MI'],
        ['Minnesota', 'MN'],
        ['Mississippi', 'MS'],
        ['Missouri', 'MO'],
        ['Montana', 'MT'],
        ['Nebraska', 'NE'],
        ['Nevada', 'NV'],
        ['New Hampshire', 'NH'],
        ['New Jersey', 'NJ'],
        ['New Mexico', 'NM'],
        ['New York', 'NY'],
        ['North Carolina', 'NC'],
        ['North Dakota', 'ND'],
        ['Ohio', 'OH'],
        ['Oklahoma', 'OK'],
        ['Oregon', 'OR'],
        ['Pennsylvania', 'PA'],
        ['Rhode Island', 'RI'],
        ['South Carolina', 'SC'],
        ['South Dakota', 'SD'],
        ['Tennessee', 'TN'],
        ['Texas', 'TX'],
        ['Utah', 'UT'],
        ['Vermont', 'VT'],
        ['Virginia', 'VA'],
        ['Washington', 'WA'],
        ['West Virginia', 'WV'],
        ['Wisconsin', 'WI'],
        ['Wyoming', 'WY'],
    ];

    if (to == 'abbr'){
        input = input.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
        for(i = 0; i < states.length; i++){
            if(states[i][0] == input){
                return(states[i][1]);
            }
        }
    } else if (to == 'name'){
        input = input.toUpperCase();
        for(i = 0; i < states.length; i++){
            if(states[i][1] == input){
                return(states[i][0]);
            }
        }
    }
}

function sort_names(arr) {
    var sens = []
    var reps = []
//    var districts = []
    var final_arr = []
    for (const name in arr) {
//        console.log(arr[name])
        var type = arr[name].substring(0, 1)
        if (type == "S") {
            sens.push(arr[name])
        } else if (type == "R") {
            reps.push(arr[name])
        }
    }
//    console.log(sens)
//    console.log(reps)
    sens.sort()
    //var district = name.substring(name.length-6,name.length-1)
    reps.sort(function(x,y){
      var xp = x.substr(x.length-5, x.length-1);
//        console.log(xp)
      var yp = y.substr(y.length-5, y.length-1);
//        console.log(yp)
      return xp == yp ? 0 : xp < yp ? -1 : 1;
    });
    for (const name in sens) {
        final_arr.push(sens[name])
    }
    for (const name in reps) {
        final_arr.push(reps[name])
    }
//    console.log(final_arr)
    return final_arr
}

function resign_letter(city, state, type) {
    if (type == "S") {
        var congress = ["a Senator", "a member of the Senate", "a representative to the Senate"]
        type = congress[Math.floor(Math.random() * congress.length)]
    } else if (type == "R") {
        var congress = ["a Congressmember", "a Congressperson", "a member of Congress", "a representative to the House"]
        type = congress[Math.floor(Math.random() * congress.length)]
    }
    var im = ["I'm", "I am"]
    var live = ["a constituent of", "a resident of", "from"]
    var call = ["calling for", "demanding", "pushing for", "requesting", "ordering", "asking for"]
    var resign = ["your resignation", "your removal", "your unseating", "you to resign", "you to step down", "you to be removed", "you to be unseated"]
    var position = ["position", "role"]


    var foment = ['instigating','inciting','agitating','encouraging','actuating','initiating','causing','prompting','bringing about','fomenting']
    var foment_past = ['instigated','incited','encouraged','actuated','initiated','caused','prompted','brought about','fomented']
    var ytsup = ["white supremacist", "racist", "discriminatory", "hateful", "divisive", "harmful", "violent", "dangerous", "murderous", "vile", "terroristic"]
    var riot = ["riot", "act of insurrection", "act of treason", "attack", "mob"]
    var no_place = ["has no place", "should not stand", "cannot fly", "shouldn't exist", "cannot be present"]
    var usa = ["the USA", "the United States of America", "the US", "the United States", "America", "our country", "our nation"]
    var here = [`in ${usa[Math.floor(Math.random() * usa.length)]}`, `in ${usa[Math.floor(Math.random() * usa.length)]}'s democracy`, "in our democracy", "in our republic"]
    var vow = ["oath", "vow", "promise", "pledge"]
    var oath = [`${vow[Math.floor(Math.random() * vow.length)]} to the Constitution`, `${vow[Math.floor(Math.random() * vow.length)]} to the American people`, `${vow[Math.floor(Math.random() * vow.length)]} to ${usa[Math.floor(Math.random() * usa.length)]}`, `${vow[Math.floor(Math.random() * vow.length)]} to uphold the law`]
    var broke = ["desecrated", "broken", "dishonored", "besmirched", "violated", "defiled", "tarnished"]
    var youve = ["You've", "You have"]
    var sent2 = [`By ${foment[Math.floor(Math.random() * foment.length)]} a ${ytsup[Math.floor(Math.random() * ytsup.length)]} ${riot[Math.floor(Math.random() * riot.length)]}, you have ${broke[Math.floor(Math.random() * broke.length)]} your ${oath[Math.floor(Math.random() * oath.length)]}, which ${no_place[Math.floor(Math.random() * no_place.length)]} ${here[Math.floor(Math.random() * here.length)]}`, `${youve[Math.floor(Math.random() * youve.length)]} ${broke[Math.floor(Math.random() * broke.length)]} your ${oath[Math.floor(Math.random() * oath.length)]} by ${foment[Math.floor(Math.random() * foment.length)]} a ${ytsup[Math.floor(Math.random() * ytsup.length)]} ${riot[Math.floor(Math.random() * riot.length)]}, and that ${no_place[Math.floor(Math.random() * no_place.length)]} ${here[Math.floor(Math.random() * here.length)]}`, `You have ${foment_past[Math.floor(Math.random() * foment_past.length)]} a ${ytsup[Math.floor(Math.random() * ytsup.length)]} ${riot[Math.floor(Math.random() * riot.length)]} and ${broke[Math.floor(Math.random() * broke.length)]} your ${oath[Math.floor(Math.random() * oath.length)]}; that ${no_place[Math.floor(Math.random() * no_place.length)]} ${here[Math.floor(Math.random() * here.length)]}`]


    var jan6 = ["January 6th", "Jan. 6th", "01/06", "the 6th of January"]
    var event = [`What took place on ${jan6[Math.floor(Math.random() * jan6.length)]}`, `The events on ${jan6[Math.floor(Math.random() * jan6.length)]}`, `What happened on ${jan6[Math.floor(Math.random() * jan6.length)]}`, `The events that ensued on ${jan6[Math.floor(Math.random() * jan6.length)]}`, `The ${ytsup[Math.floor(Math.random() * ytsup.length)]} ${riot[Math.floor(Math.random() * riot.length)]} on ${jan6[Math.floor(Math.random() * jan6.length)]}`]
    var resulted = ["resulted in", "caused", "gave room for"]
    var a_number = ["many", "a number of", "plenty", "numerous", "multiple"]
    var gross = ["heinous", "vile", "abhorrent", 'abominable','atrocious', 'horrendous', 'nefarious', 'revolting']
    var acts = ["acts", "actions"]
    var incl = ["including, but not limited to", "including", "such as", "like", "with"]
    var bomb_type = ["explosives", "bombs", "explosive devices"]
    var bombs = [bomb_type[Math.floor(Math.random() * bomb_type.length)], `homemade ${bomb_type[Math.floor(Math.random() * bomb_type.length)]}`, `makeshift ${bomb_type[Math.floor(Math.random() * bomb_type.length)]}`, `handmade ${bomb_type[Math.floor(Math.random() * bomb_type.length)]}`]
    var cop = ["police officer", "capitol policeman", "cop"]
    var beaten = ["bludgeoned", "beat"]
    var kills = ["kill", "murder", "assassinate", "hang"]
    var rioters = ["rioters", "people", "terrorists", "white supremacists"]
    var events = [`${a_number[Math.floor(Math.random() * a_number.length)]} ${bombs[Math.floor(Math.random() * bombs.length)]}`, `a ${cop[Math.floor(Math.random() * cop.length)]} being ${beaten[Math.floor(Math.random() * beaten.length)]} to death`, `a woman being shot in the neck`, `preparation to ${kills[Math.floor(Math.random() * kills.length)]} ${a_number[Math.floor(Math.random() * a_number.length)]} elected officials`, `${rioters[Math.floor(Math.random() * rioters.length)]} smearing feces on the walls`, `${rioters[Math.floor(Math.random() * rioters.length)]} urinating in offices`, `the likely spread of COVID-19`]
    var threediff = []
    threediff[0] = events[Math.floor(Math.random() * events.length)]
    threediff[1] = events[Math.floor(Math.random() * events.length)]
    while (threediff[0] == threediff[1]) {
        threediff[1] = events[Math.floor(Math.random() * events.length)]
    }
    threediff[2] = events[Math.floor(Math.random() * events.length)]
    while (threediff[0] == threediff[2] || threediff[1] == threediff[2]) {
        threediff[2] = events[Math.floor(Math.random() * events.length)]
    }


    var three_actions = `${threediff[0]}, ${threediff[1]}, and ${threediff[2]}`
    var cant = ["cannot", "can't"]
    var downplay = ["underestimated", "downplayed", "minimized"]

    var legit = ["legitimizing", "boosting", "giving life to", "solidifying", "standing behind"]
    var unbased = ["baseless", "unfounded", "unsubstantiated", "conspiracy"]
    var voter = ["voter fraud", "election fraud", "election interference"]
    var emboldened = ["emboldened", "encouraged", "inspired", "prompted"]
    var regardless = ["Regardless of", "Nevertheless,", "Either way,", "Anyways,"]
    var resign2 = ["resign", "step down"]
    var rally = ["push", "rally", "mobilize", "organize"]
    var ill = ["I'll", "I will"]
    var remove = ["removal", "unseating", "prosecution"]

    var full_message = `${im[Math.floor(Math.random() * im.length)]} ${live[Math.floor(Math.random() * live.length)]} ${city}, ${state}, and ${call[Math.floor(Math.random() * call.length)]} ${resign[Math.floor(Math.random() * resign.length)]} from your ${position[Math.floor(Math.random() * position.length)]} as ${type}. ${sent2[Math.floor(Math.random() * sent2.length)]}. ${event[Math.floor(Math.random() * event.length)]} ${resulted[Math.floor(Math.random() * resulted.length)]} ${a_number[Math.floor(Math.random() * a_number.length)]} ${gross[Math.floor(Math.random() * gross.length)]} ${acts[Math.floor(Math.random() * acts.length)]}, ${incl[Math.floor(Math.random() * incl.length)]} ${three_actions}. Your ${position[Math.floor(Math.random() * position.length)]} in this ${riot[Math.floor(Math.random() * riot.length)]} ${cant[Math.floor(Math.random() * cant.length)]} be ${downplay[Math.floor(Math.random() * downplay.length)]}. By ${legit[Math.floor(Math.random() * legit.length)]} ${unbased[Math.floor(Math.random() * unbased.length)]} theories of ${voter[Math.floor(Math.random() * voter.length)]}, you ${emboldened[Math.floor(Math.random() * emboldened.length)]} ${usa[Math.floor(Math.random() * usa.length)]}'s worst, who now are planning more ${ytsup[Math.floor(Math.random() * ytsup.length)]} attacks. ${regardless[Math.floor(Math.random() * regardless.length)]} whether or not you ${resign2[Math.floor(Math.random() * resign2.length)]}, ${ill[Math.floor(Math.random() * ill.length)]} ${rally[Math.floor(Math.random() * rally.length)]} for your ${remove[Math.floor(Math.random() * remove.length)]}.`
    return full_message
}

function good_letter(city, state, type) {
    if (type == "S") {
        var congress = ["a Senator", "a member of the Senate", "a representative to the Senate"]
        type = congress[Math.floor(Math.random() * congress.length)]
    } else if (type == "R") {
        var congress = ["a Congressmember", "a Congressperson", "a member of Congress", "a House representative"]
        type = congress[Math.floor(Math.random() * congress.length)]
    }
    var im = ["I'm", "I am"]
    var live = ["a constituent of", "a resident of", "from"]
    var call = ["calling on", "pushing for", "requesting", "asking for"]
    var resign = ["your resignation", "your removal", "your unseating", "you to resign", "you to step down", "you to be removed", "you to be unseated"]
    var position = ["position", "role", "status", "power", "standing"]
    var use = [`take advantage of your ${position[Math.floor(Math.random() * position.length)]}`, `use your ${position[Math.floor(Math.random() * position.length)]}`]
    var rally = ["push for", "rally behind", "support", "sign onto"]
    var initi = ["initiatives", "efforts", "bills"]
    var many = ["many", "numerous", "several"]
    var guilty = ["the guilty", "guilty parties", "your complicit colleagues", "those who were complicit"]
    var acct = ["accountable", "responsible", "liable"]
    var ytsup = ["white supremacist", "racist", "discriminatory", "hateful", "divisive", "harmful", "violent", "dangerous", "murderous", "vile", "terroristic"]
    var riot = ["riot", "act of insurrection", "act of treason", "attack", "mob"]
    var jan6 = ["January 6th", "Jan. 6th", "01/06", "the 6th of January"]
    var usa = ["the USA", "the United States of America", "the US", "the United States", "America", "our country", "our nation"]
    var here = [`${usa[Math.floor(Math.random() * usa.length)]}`, `${usa[Math.floor(Math.random() * usa.length)]}'s democracy`, "our democracy", "our republic"]
    var my_state = abbrState(state, 'name')

    var sent1 = `${im[Math.floor(Math.random() * im.length)]} ${live[Math.floor(Math.random() * live.length)]} ${city}, ${state}, and ${call[Math.floor(Math.random() * call.length)]} you to ${use[Math.floor(Math.random() * use.length)]} as ${type} to ${rally[Math.floor(Math.random() * rally.length)]} the ${many[Math.floor(Math.random() * many.length)]} House ${initi[Math.floor(Math.random() * initi.length)]} to hold ${guilty[Math.floor(Math.random() * guilty.length)]} ${acct[Math.floor(Math.random() * acct.length)]} for the ${ytsup[Math.floor(Math.random() * ytsup.length)]} ${riot[Math.floor(Math.random() * riot.length)]} on ${jan6[Math.floor(Math.random() * jan6.length)]}`

    var foment = ['instigating','inciting','agitating','encouraging','actuating','initiating','causing','prompting','bringing about','fomenting']
    var foment_past = ['instigated','incited','encouraged','actuated','initiated','caused','prompted','brought about','fomented']

    var note_ting = " "

    if (state in rep_objections) {
        var listreps = ""
        var state_mems = rep_objections[state]
        var arr_names = Object.keys(state_mems)
        var sorted_mems = sort_names(arr_names)
        console.log(sorted_mems)
        for (const mem in sorted_mems) {
            console.log(mem)
            if (sorted_mems[mem].substring(0,1) == "R") {
//                console.log("hi")
                var test = sorted_mems[mem].split(",")
                sorted_mems[mem] = test[0]
//                console.log(mem)
            }
        }

        if (sorted_mems.length == 1) {
            listreps = sorted_mems[0]
        } else if (sorted_mems.length == 2) {
            listreps = `${sorted_mems[0]} and ${sorted_mems[1]}`
        } else {
            for (var i=0; i<sorted_mems.length; i++) {
                if (i == sorted_mems.length-1) {
                    listreps += `and ${sorted_mems[i]}`
                } else {
                    listreps += `${sorted_mems[i]}, `
                }
            }
        }
        note_ting = ` ${sorted_mems.length} of your colleagues in ${my_state} ${foment_past[Math.floor(Math.random() * foment_past.length)]} this ${riot[Math.floor(Math.random() * riot.length)]} themselves: ${listreps}. `
    }

    var ids = ["In doing so", "In turn", "As a result", "With this"]
    var no_place = ["has no place", "should not stand", "cannot fly", "shouldn't exist", "cannot be present"]
    var vow = ["oath", "vow", "promise", "pledge"]
    var oath = [`${vow[Math.floor(Math.random() * vow.length)]} to the Constitution`, `${vow[Math.floor(Math.random() * vow.length)]} to the American people`, `${vow[Math.floor(Math.random() * vow.length)]} to ${usa[Math.floor(Math.random() * usa.length)]}`, `${vow[Math.floor(Math.random() * vow.length)]} to uphold the law`]
    var broke = ["desecrated", "broken", "dishonored", "besmirched", "violated", "defiled", "tarnished"]
    var youve = ["They've", "They have"]
    var sent2 = [`${ids[Math.floor(Math.random() * ids.length)]}, they have ${broke[Math.floor(Math.random() * broke.length)]} their ${oath[Math.floor(Math.random() * oath.length)]}, which ${no_place[Math.floor(Math.random() * no_place.length)]} in ${here[Math.floor(Math.random() * here.length)]}`, `${youve[Math.floor(Math.random() * youve.length)]} ${broke[Math.floor(Math.random() * broke.length)]} their ${oath[Math.floor(Math.random() * oath.length)]}, and that ${no_place[Math.floor(Math.random() * no_place.length)]} in ${here[Math.floor(Math.random() * here.length)]}`, `${ids[Math.floor(Math.random() * ids.length)]}, they've ${broke[Math.floor(Math.random() * broke.length)]} their ${oath[Math.floor(Math.random() * oath.length)]}; that ${no_place[Math.floor(Math.random() * no_place.length)]} in ${here[Math.floor(Math.random() * here.length)]}`]


    var add = ["Additionally", "In addition", "Furthermore", "Moreover", "Likewise", "Secondly"]
    var too = ["too", "as well"]
    var prez = ["The President", "President Trump", "Trump", "Donald Trump", "Pres. Donald Trump"]
    var must = ["must be", "needs to be", "has to be", "should be"]
    var legit = ["legitimizing", "boosting", "giving life to", "solidifying", "standing behind"]
    var unbased = ["baseless", "unfounded", "unsubstantiated", "conspiracy"]
    var voter = ["voter fraud", "election fraud", "election interference"]
    var emboldened = ["emboldened", "encouraged", "inspired", "prompted"]
    var sent3 = [`${add[Math.floor(Math.random() * add.length)]}, ${prez[Math.floor(Math.random() * prez.length)]} ${must[Math.floor(Math.random() * must.length)]} held ${acct[Math.floor(Math.random() * acct.length)]}; by ${legit[Math.floor(Math.random() * legit.length)]} ${unbased[Math.floor(Math.random() * unbased.length)]} theories of ${voter[Math.floor(Math.random() * voter.length)]}, he ${emboldened[Math.floor(Math.random() * emboldened.length)]} ${usa[Math.floor(Math.random() * usa.length)]}'s worst, who now are planning more ${ytsup[Math.floor(Math.random() * ytsup.length)]} attacks`, `${prez[Math.floor(Math.random() * prez.length)]} ${must[Math.floor(Math.random() * must.length)]} held ${acct[Math.floor(Math.random() * acct.length)]}, ${too[Math.floor(Math.random() * too.length)]}; by ${legit[Math.floor(Math.random() * legit.length)]} ${unbased[Math.floor(Math.random() * unbased.length)]} theories of ${voter[Math.floor(Math.random() * voter.length)]}, he ${emboldened[Math.floor(Math.random() * emboldened.length)]} ${usa[Math.floor(Math.random() * usa.length)]}'s worst, who now are planning more ${ytsup[Math.floor(Math.random() * ytsup.length)]} attacks`]


    var bcof = ["Because of his", "With his"]
    var hecan = ["Trump can", "he can", "he's able to", "Trump is able to"]
    var rioters = ["rioters", "people", "terrorists", "white supremacists"]
    var kills = ["kill", "murder", "assassinate", "hang"]
    var plan = ["planned to", "attempted to", "tried to", "wanted to"]
    var aswell = ["as well as", "and", "in addition to"]
    var those = ["the people who", "those who", "people who"]
    var comp = ["were complicit", "played a role", "share responsibility"]
    var gross = ["heinous", "vile", "abhorrent", 'abominable','atrocious', 'horrendous', 'nefarious', 'revolting']
    var acts = ["acts", "actions"]
    var sent4 = `${bcof[Math.floor(Math.random() * bcof.length)]} ${position[Math.floor(Math.random() * position.length)]} as President, ${hecan[Math.floor(Math.random() * hecan.length)]} pardon the ${rioters[Math.floor(Math.random() * rioters.length)]} who ${plan[Math.floor(Math.random() * plan.length)]} ${kills[Math.floor(Math.random() * kills.length)]} you and your colleagues, ${aswell[Math.floor(Math.random() * aswell.length)]} ${those[Math.floor(Math.random() * those.length)]} ${comp[Math.floor(Math.random() * comp.length)]} in ${gross[Math.floor(Math.random() * gross.length)]} ${acts[Math.floor(Math.random() * acts.length)]} against ${here[Math.floor(Math.random() * here.length)]}`



    var fast = ["Swift action must be taken", "You must act fast", "You must not delay", "You must act quickly", "Immediate action must be taken"]
    var protecc = ["protect", "save", "salvage", "preserve", "safeguard", "defend", "secure"]
    var sent5 = `${fast[Math.floor(Math.random() * fast.length)]} to ${protecc[Math.floor(Math.random() * protecc.length)]} ${here[Math.floor(Math.random() * here.length)]}`

    var ifu = [`If you have already`, `If you already have`, `If you've already taken such action`, `If you've already taken a stand`]
    var thanks = [`thanks`, `thank you`]
    var cont = ["continue", "keep", "keep on", "persist in"]
    var keepon = [`${thanks[Math.floor(Math.random() * thanks.length)]}, and ${cont[Math.floor(Math.random() * cont.length)]} fighting for us`, `${thanks[Math.floor(Math.random() * thanks.length)]} -- please ${cont[Math.floor(Math.random() * cont.length)]} fighting for us`, `${thanks[Math.floor(Math.random() * thanks.length)]}, and ${cont[Math.floor(Math.random() * cont.length)]} representing us`, `${thanks[Math.floor(Math.random() * thanks.length)]}`]
    var sent6 = `${ifu[Math.floor(Math.random() * ifu.length)]}, ${keepon[Math.floor(Math.random() * keepon.length)]}`


    var full_message = `${sent1}.${note_ting}${sent2[Math.floor(Math.random() * sent2.length)]}. ${sent3[Math.floor(Math.random() * sent3.length)]}. ${sent4}. ${sent5}. ${sent6}.`
    return full_message
}

var card_count = 0

function showAll() {
    if ($(".the-rest").is(":visible")) {
        alert("they're all below! :)")
    } else {
        $(".the-rest").show()
        $(".the-rest").empty()
        for (const place in rep_objections) {
            if (state != place) {
                $(".the-rest").append(`<h2 class="state-title">${abbrState(place, 'name')}</h2><hr><div class="row " id="other-states-${place}">`)
                var state_mems = rep_objections[place]
                var arr_names = Object.keys(state_mems)
                var sorted_mems = sort_names(arr_names)
                for (const the_person in sorted_mems) {
                    var person = sorted_mems[the_person]
                    var type = person.substring(0, 1)
    //                if (type == "S") {
    //                    sen_objections+=1
    //                } else if (type == "R") {
    //                    house_objections+=1
    //                }
                    // console.log(statemems)
                    var rep_note = state_mems[person][1]
                    var rep_site = state_mems[person][0]
                    var rep_party = state_mems[person][2]
    //                ${resign_letter(city, state, type)}
                    var bad_card = `<div class="col-lg-4 col-md-12 mb-3"><div class="card border-danger"><div class="card-header">Call For Resignation</div><div class="card-body text-danger"><h5>${person}</h5><p class="card-text" id="note">${rep_note}</p><a class="text-info" id="email-btn" data-toggle="collapse" href="#collapse${card_count}" role="button" aria-expanded="false" aria-controls="collapse${card_count}">preview prompt ▼</a><div class="collapse" id="collapse${card_count}"><div class="card card-body" id="letter${card_count}">${resign_letter(city, state, type)}</div></div><br><br><div class = "row justify-content-center"><br><a class="col-md-5 btn btn-danger" id="clipboard-btn" onclick="copyTexts('letter${card_count}')" data-clipboard-text="$('.letter${card_count}').text()">copy prompt</a><a href="${rep_site}" target="_" class="col-md-5 btn btn-danger" id="email-btn">send email</a></div></div></div></div>`

                    $(`#other-states-${place}`).append(bad_card)
                    card_count+=1
                }
                var allPeeps = ""
                $(".the-rest").append(`</div>`)

            }
        }
    }
}



$(document).ready(function(){
    $(".state-title").hide()
    $(".see-rest").hide()
    $("hr").hide()
    $(".norm-folks").hide()
    $(".a-note").hide()
})

var state = ""
var city = ""

$(".submit").click(function(event){
    event.preventDefault()

    if ($("#city").val() == "" || $("#state").val() == "") {
        alert("Please make sure all you enter all info before submitting!")
    } else {
//        $("#draft").hide()
        $(".state-title").show()
        $(".see-rest").show()
        $(".the-rest").hide()
        $("hr").show()
        $("#your-state").empty()
        $("#normal-reps").empty()
        $(".a-note").show()
        city = $("#city").val()
        state = $("#state").val()
//        console.log(state)
        $(".norm-folks").hide()
        jQuery('html,body').animate({scrollTop: jQuery('#generate-anchor').offset().top}, 1000);

        var your_members = ""
        var note1 = ""
        var sen_objections = 0
        var house_objections = 0
        if (state in rep_objections) {
            $(".norm-folks").show()
            var state_mems = rep_objections[state]
            var arr_names = Object.keys(state_mems)
            var sorted_mems = sort_names(arr_names)
            for (const the_person in sorted_mems) {
                var person = sorted_mems[the_person]
                var type = person.substring(0, 1)
                if (type == "S") {
                    sen_objections+=1
                } else if (type == "R") {
                    house_objections+=1
                }
                // console.log(statemems)
                var rep_note = state_mems[person][1]
                var rep_site = state_mems[person][0]
                var rep_party = state_mems[person][2]
//                ${resign_letter(city, state, type)}
                var bad_card = `<div class="col-lg-4 col-md-12 mb-3"><div class="card border-danger"><div class="card-header">Call For Resignation</div><div class="card-body text-danger"><h5>${person}</h5><p class="card-text" id="note">${rep_note}</p><a class="text-info" id="email-btn" data-toggle="collapse" href="#collapse${card_count}" role="button" aria-expanded="false" aria-controls="collapse${card_count}">preview prompt ▼</a><div class="collapse" id="collapse${card_count}"><div class="card card-body" id="letter${card_count}">${resign_letter(city, state, type)}</div></div><br><br><div class = "row justify-content-center"><br><a class="col-md-5 btn btn-danger" id="clipboard-btn" onclick="copyTexts('letter${card_count}')" data-clipboard-text="$('.letter${card_count}').text()">copy prompt</a><a href="${rep_site}" target="_" class="col-md-5 btn btn-danger" id="email-btn">send email</a></div></div></div></div>`

                $("#your-state").append(bad_card)
                card_count+=1
            }
//            $("#normal-reps").append(`<h5 class="state-title">here are the decent folks:</h5><hr><br>`)
            if (sen_objections == 0) {
                your_members = `None of your senators voted in favor a coup, but ${house_objections} of your state's House representatives did.`
                var state_normal = good_reps[state]
                var arr_names = Object.keys(state_normal)
                var sorted_mems = sort_names(arr_names)
                for (const the_person in sorted_mems) {
                    var person = sorted_mems[the_person]
                    var type = person.substring(0, 1)
                    var card = ``
                    var party = state_normal[person][2]
//                    console.log(party)
                    var rep_note = state_normal[person][1]
                    var rep_site = state_normal[person][0]
                    if (party == "Democrat") {
                        card = `<div class="col-lg-4 col-md-12 mb-3"><div class="card border-primary"><div class="card-header">Call To Action</div><div class="card-body text-primary"><h5>${person}</h5><a class="text-info" id="email-btn" data-toggle="collapse" href="#collapse${card_count}" role="button" aria-expanded="false" aria-controls="collapse${card_count}">preview prompt ▼</a><div class="collapse" id="collapse${card_count}"><div class="card card-body" id="letter${card_count}">${good_letter(city, state, person.substring(0, 1))}</div></div><br><br><div class = "row justify-content-center"><br><a class="col-md-5 btn btn-primary" id="clipboard-btn" onclick="copyTexts('letter${card_count}')" data-clipboard-text="$('.letter${card_count}').text()">copy prompt</a><a href="${rep_site}" target="_" class="col-md-5 btn btn-primary" id="email-btn">send email</a></div></div></div></div>`
                    } else if (party == "Republican") {
                        card = `<div class="col-lg-4 col-md-12 mb-3"><div class="card border-danger"><div class="card-header">Call To Action</div><div class="card-body text-danger"><h5>${person}</h5><a class="text-info" id="email-btn" data-toggle="collapse" href="#collapse${card_count}" role="button" aria-expanded="false" aria-controls="collapse${card_count}">preview prompt ▼</a><div class="collapse" id="collapse${card_count}"><div class="card card-body" id="letter${card_count}">${good_letter(city, state, person.substring(0, 1))}</div></div><br><br><div class = "row justify-content-center"><br><a class="col-md-5 btn btn-danger" id="clipboard-btn" onclick="copyTexts('letter${card_count}')" data-clipboard-text="$('.letter${card_count}').text()">copy prompt</a><a href="${rep_site}" target="_" class="col-md-5 btn btn-danger" id="email-btn">send email</a></div></div></div></div>`
                    } else {
                        card = `<div class="col-lg-4 col-md-12 mb-3"><div class="card border-warning"><div class="card-header">Call To Action</div><div class="card-body text-warning"><h5>${person}</h5><a class="text-info" id="email-btn" data-toggle="collapse" href="#collapse${card_count}" role="button" aria-expanded="false" aria-controls="collapse${card_count}">preview prompt ▼</a><div class="collapse" id="collapse${card_count}"><div class="card card-body" id="letter${card_count}">${good_letter(city, state, person.substring(0, 1))}</div></div><br><br><div class = "row justify-content-center"><br><a class="col-md-5 btn btn-warning" id="clipboard-btn" onclick="copyTexts('letter${card_count}')" data-clipboard-text="$('.letter${card_count}').text()">copy prompt</a><a href="${rep_site}" target="_" class="col-md-5 btn btn-warning" id="email-btn">send email</a></div></div></div></div>`
                    }

                    $("#normal-reps").append(card)
                    card_count+=1
                }
            } else if (house_objections == 0) {
                your_members = `None of your state's House representatives in voted in favor a coup, but ${sen_objections} of your senators did.`
                var state_normal = good_reps[state]
                var arr_names = Object.keys(state_normal)
                var sorted_mems = sort_names(arr_names)
                for (const the_person in sorted_mems) {
                    var person = sorted_mems[the_person]
                    var card = ``
                    var party = state_normal[person][2]
//                    console.log(party)
                    var rep_note = state_normal[person][1]
                    var rep_site = state_normal[person][0]
                    if (party == "Democrat") {
                        card = `<div class="col-lg-4 col-md-12 mb-3"><div class="card border-primary"><div class="card-header">Call To Action</div><div class="card-body text-primary"><h5>${person}</h5><a class="text-info" id="email-btn" data-toggle="collapse" href="#collapse${card_count}" role="button" aria-expanded="false" aria-controls="collapse${card_count}">preview prompt ▼</a><div class="collapse" id="collapse${card_count}"><div class="card card-body" id="letter${card_count}">${good_letter(city, state, person.substring(0, 1))}</div></div><br><br><div class = "row justify-content-center"><br><a class="col-md-5 btn btn-primary" id="clipboard-btn" onclick="copyTexts('letter${card_count}')" data-clipboard-text="$('.letter${card_count}').text()">copy prompt</a><a href="${rep_site}" target="_" class="col-md-5 btn btn-primary" id="email-btn">send email</a></div></div></div></div>`
                    } else if (party == "Republican") {
                        card = `<div class="col-lg-4 col-md-12 mb-3"><div class="card border-danger"><div class="card-header">Call To Action</div><div class="card-body text-danger"><h5>${person}</h5><a class="text-info" id="email-btn" data-toggle="collapse" href="#collapse${card_count}" role="button" aria-expanded="false" aria-controls="collapse${card_count}">preview prompt ▼</a><div class="collapse" id="collapse${card_count}"><div class="card card-body" id="letter${card_count}">${good_letter(city, state, person.substring(0, 1))}</div></div><br><br><div class = "row justify-content-center"><br><a class="col-md-5 btn btn-danger" id="clipboard-btn" onclick="copyTexts('letter${card_count}')" data-clipboard-text="$('.letter${card_count}').text()">copy prompt</a><a href="${rep_site}" target="_" class="col-md-5 btn btn-danger" id="email-btn">send email</a></div></div></div></div>`
                    } else {
                        card = `<div class="col-lg-4 col-md-12 mb-3"><div class="card border-warning"><div class="card-header">Call To Action</div><div class="card-body text-warning"><h5>${person}</h5><a class="text-info" id="email-btn" data-toggle="collapse" href="#collapse${card_count}" role="button" aria-expanded="false" aria-controls="collapse${card_count}">preview prompt ▼</a><div class="collapse" id="collapse${card_count}"><div class="card card-body" id="letter${card_count}">${good_letter(city, state, person.substring(0, 1))}</div></div><br><br><div class = "row justify-content-center"><br><a class="col-md-5 btn btn-warning" id="clipboard-btn" onclick="copyTexts('letter${card_count}')" data-clipboard-text="$('.letter${card_count}').text()">copy prompt</a><a href="${rep_site}" target="_" class="col-md-5 btn btn-warning" id="email-btn">send email</a></div></div></div></div>`
                    }

                    $("#normal-reps").append(card)
                    card_count+=1
                }
            } else {
                your_members = `${house_objections} of your state's House representatives in voted in favor a coup, as well as ${sen_objections} of your senators.`
                var state_normal = good_reps[state]
                var arr_names = Object.keys(state_normal)
                var sorted_mems = sort_names(arr_names)
                for (const the_person in sorted_mems) {
                    var person = sorted_mems[the_person]
                    var card = ``
                    var party = state_normal[person][2]
//                    console.log(party)
                    var rep_note = state_normal[person][1]
                    var rep_site = state_normal[person][0]
                    if (party == "Democrat") {
                        card = `<div class="col-lg-4 col-md-12 mb-3"><div class="card border-primary"><div class="card-header">Call To Action</div><div class="card-body text-primary"><h5>${person}</h5><a class="text-info" id="email-btn" data-toggle="collapse" href="#collapse${card_count}" role="button" aria-expanded="false" aria-controls="collapse${card_count}">preview prompt ▼</a><div class="collapse" id="collapse${card_count}"><div class="card card-body" id="letter${card_count}">${good_letter(city, state, person.substring(0, 1))}</div></div><br><br><div class = "row justify-content-center"><br><a class="col-md-5 btn btn-primary" id="clipboard-btn" onclick="copyTexts('letter${card_count}')" data-clipboard-text="$('.letter${card_count}').text()">copy prompt</a><a href="${rep_site}" target="_" class="col-md-5 btn btn-primary" id="email-btn">send email</a></div></div></div></div>`
                    } else if (party == "Republican") {
                        card = `<div class="col-lg-4 col-md-12 mb-3"><div class="card border-danger"><div class="card-header">Call To Action</div><div class="card-body text-danger"><h5>${person}</h5><a class="text-info" id="email-btn" data-toggle="collapse" href="#collapse${card_count}" role="button" aria-expanded="false" aria-controls="collapse${card_count}">preview prompt ▼</a><div class="collapse" id="collapse${card_count}"><div class="card card-body" id="letter${card_count}">${good_letter(city, state, person.substring(0, 1))}</div></div><br><br><div class = "row justify-content-center"><br><a class="col-md-5 btn btn-danger" id="clipboard-btn" onclick="copyTexts('letter${card_count}')" data-clipboard-text="$('.letter${card_count}').text()">copy prompt</a><a href="${rep_site}" target="_" class="col-md-5 btn btn-danger" id="email-btn">send email</a></div></div></div></div>`
                    } else {
                        card = `<div class="col-lg-4 col-md-12 mb-3"><div class="card border-warning"><div class="card-header">Call To Action</div><div class="card-body text-warning"><h5>${person}</h5><a class="text-info" id="email-btn" data-toggle="collapse" href="#collapse${card_count}" role="button" aria-expanded="false" aria-controls="collapse${card_count}">preview prompt ▼</a><div class="collapse" id="collapse${card_count}"><div class="card card-body" id="letter${card_count}">${good_letter(city, state, person.substring(0, 1))}</div></div><br><br><div class = "row justify-content-center"><br><a class="col-md-5 btn btn-warning" id="clipboard-btn" onclick="copyTexts('letter${card_count}')" data-clipboard-text="$('.letter${card_count}').text()">copy prompt</a><a href="${rep_site}" target="_" class="col-md-5 btn btn-warning" id="email-btn">send email</a></div></div></div></div>`
                    }

                    $("#normal-reps").append(card)
                    card_count+=1
                }
            }

        } else {
            if (state == "DC") {
                your_members = "For whatever reason, DC still doesn't have statehood. It's infuriating. While they don't have voting power, you still have a delegate you can push to stand on the right side of history."
                var state_normal = good_reps[state]
                var arr_names = Object.keys(state_normal)
                var sorted_mems = sort_names(arr_names)
                for (const the_person in sorted_mems) {
                    var person = sorted_mems[the_person]
                    var card = ``
                    var party = state_normal[person][2]
//                    console.log(party)
                    var rep_note = state_normal[person][1]
                    var rep_site = state_normal[person][0]
                    if (party == "Democrat") {
                        card = `<div class="col-lg-4 col-md-12 mb-3"><div class="card border-primary"><div class="card-header">Call To Action</div><div class="card-body text-primary"><h5>${person}</h5><a class="text-info" id="email-btn" data-toggle="collapse" href="#collapse${card_count}" role="button" aria-expanded="false" aria-controls="collapse${card_count}">preview prompt ▼</a><div class="collapse" id="collapse${card_count}"><div class="card card-body" id="letter${card_count}">${good_letter(city, state, person.substring(0, 1))}</div></div><br><br><div class = "row justify-content-center"><br><a class="col-md-5 btn btn-primary" id="clipboard-btn" onclick="copyTexts('letter${card_count}')" data-clipboard-text="$('.letter${card_count}').text()">copy prompt</a><a href="${rep_site}" target="_" class="col-md-5 btn btn-primary" id="email-btn">send email</a></div></div></div></div>`
                    } else if (party == "Republican") {
                        card = `<div class="col-lg-4 col-md-12 mb-3"><div class="card border-danger"><div class="card-header">Call To Action</div><div class="card-body text-danger"><h5>${person}</h5><a class="text-info" id="email-btn" data-toggle="collapse" href="#collapse${card_count}" role="button" aria-expanded="false" aria-controls="collapse${card_count}">preview prompt ▼</a><div class="collapse" id="collapse${card_count}"><div class="card card-body" id="letter${card_count}">${good_letter(city, state, person.substring(0, 1))}</div></div><br><br><div class = "row justify-content-center"><br><a class="col-md-5 btn btn-danger" id="clipboard-btn" onclick="copyTexts('letter${card_count}')" data-clipboard-text="$('.letter${card_count}').text()">copy prompt</a><a href="${rep_site}" target="_" class="col-md-5 btn btn-danger" id="email-btn">send email</a></div></div></div></div>`
                    } else {
                        card = `<div class="col-lg-4 col-md-12 mb-3"><div class="card border-warning"><div class="card-header">Call To Action</div><div class="card-body text-warning"><h5>${person}</h5><a class="text-info" id="email-btn" data-toggle="collapse" href="#collapse${card_count}" role="button" aria-expanded="false" aria-controls="collapse${card_count}">preview prompt ▼</a><div class="collapse" id="collapse${card_count}"><div class="card card-body" id="letter${card_count}">${good_letter(city, state, person.substring(0, 1))}</div></div><br><br><div class = "row justify-content-center"><br><a class="col-md-5 btn btn-warning" id="clipboard-btn" onclick="copyTexts('letter${card_count}')" data-clipboard-text="$('.letter${card_count}').text()">copy prompt</a><a href="${rep_site}" target="_" class="col-md-5 btn btn-warning" id="email-btn">send email</a></div></div></div></div>`
                    }

                    $("#normal-reps").append(card)
                    card_count+=1
                }
            } else if (state == "AS" || state == "MP" || state == "VI" || state == "PR" || state == "GU") {
                your_members = "Unfortunately you don't have any representatives with voting power, but you still have a delegate you can push to stand on the right side of history."
                var state_normal = good_reps[state]
                var arr_names = Object.keys(state_normal)
                var sorted_mems = sort_names(arr_names)
                for (const the_person in sorted_mems) {
                    var person = sorted_mems[the_person]
                    var card = ``
                    var party = state_normal[person][2]
//                    console.log(party)
                    var rep_note = state_normal[person][1]
                    var rep_site = state_normal[person][0]
                    if (party == "Democrat") {
                        card = `<div class="col-lg-4 col-md-12 mb-3"><div class="card border-primary"><div class="card-header">Call To Action</div><div class="card-body text-primary"><h5>${person}</h5><a class="text-info" id="email-btn" data-toggle="collapse" href="#collapse${card_count}" role="button" aria-expanded="false" aria-controls="collapse${card_count}">preview prompt ▼</a><div class="collapse" id="collapse${card_count}"><div class="card card-body" id="letter${card_count}">${good_letter(city, state, person.substring(0, 1))}</div></div><br><br><div class = "row justify-content-center"><br><a class="col-md-5 btn btn-primary" id="clipboard-btn" onclick="copyTexts('letter${card_count}')" data-clipboard-text="$('.letter${card_count}').text()">copy prompt</a><a href="${rep_site}" target="_" class="col-md-5 btn btn-primary" id="email-btn">send email</a></div></div></div></div>`
                    } else if (party == "Republican") {
                        card = `<div class="col-lg-4 col-md-12 mb-3"><div class="card border-danger"><div class="card-header">Call To Action</div><div class="card-body text-danger"><h5>${person}</h5><a class="text-info" id="email-btn" data-toggle="collapse" href="#collapse${card_count}" role="button" aria-expanded="false" aria-controls="collapse${card_count}">preview prompt ▼</a><div class="collapse" id="collapse${card_count}"><div class="card card-body" id="letter${card_count}">${good_letter(city, state, person.substring(0, 1))}</div></div><br><br><div class = "row justify-content-center"><br><a class="col-md-5 btn btn-danger" id="clipboard-btn" onclick="copyTexts('letter${card_count}')" data-clipboard-text="$('.letter${card_count}').text()">copy prompt</a><a href="${rep_site}" target="_" class="col-md-5 btn btn-danger" id="email-btn">send email</a></div></div></div></div>`
                    } else {
                        card = `<div class="col-lg-4 col-md-12 mb-3"><div class="card border-warning"><div class="card-header">Call To Action</div><div class="card-body text-warning"><h5>${person}</h5><a class="text-info" id="email-btn" data-toggle="collapse" href="#collapse${card_count}" role="button" aria-expanded="false" aria-controls="collapse${card_count}">preview prompt ▼</a><div class="collapse" id="collapse${card_count}"><div class="card card-body" id="letter${card_count}">${good_letter(city, state, person.substring(0, 1))}</div></div><br><br><div class = "row justify-content-center"><br><a class="col-md-5 btn btn-warning" id="clipboard-btn" onclick="copyTexts('letter${card_count}')" data-clipboard-text="$('.letter${card_count}').text()">copy prompt</a><a href="${rep_site}" target="_" class="col-md-5 btn btn-warning" id="email-btn">send email</a></div></div></div></div>`
                    }

                    $("#normal-reps").append(card)
                    card_count+=1
                }
            } else {
                your_members = "Lucky for you, none of your representatives incited a white supremacist riot on the nation's capitol! However, we still need to tell them to stand on the right side of history:"
                var state_normal = good_reps[state]
                var arr_names = Object.keys(state_normal)
                var sorted_mems = sort_names(arr_names)
                for (const the_person in sorted_mems) {
                    var person = sorted_mems[the_person]
                    var card = ``
                    var party = state_normal[person][2]
//                    console.log(party)
                    var rep_note = state_normal[person][1]
                    var rep_site = state_normal[person][0]
                    if (party == "Democrat") {
                        card = `<div class="col-lg-4 col-md-12 mb-3"><div class="card border-primary"><div class="card-header">Call To Action</div><div class="card-body text-primary"><h5>${person}</h5><a class="text-info" id="email-btn" data-toggle="collapse" href="#collapse${card_count}" role="button" aria-expanded="false" aria-controls="collapse${card_count}">preview prompt ▼</a><div class="collapse" id="collapse${card_count}"><div class="card card-body" id="letter${card_count}">${good_letter(city, state, person.substring(0, 1))}</div></div><br><br><div class = "row justify-content-center"><br><a class="col-md-5 btn btn-primary" id="clipboard-btn" onclick="copyTexts('letter${card_count}')" data-clipboard-text="$('.letter${card_count}').text()">copy prompt</a><a href="${rep_site}" target="_" class="col-md-5 btn btn-primary" id="email-btn">send email</a></div></div></div></div>`
                    } else if (party == "Republican") {
                        card = `<div class="col-lg-4 col-md-12 mb-3"><div class="card border-danger"><div class="card-header">Call To Action</div><div class="card-body text-danger"><h5>${person}</h5><a class="text-info" id="email-btn" data-toggle="collapse" href="#collapse${card_count}" role="button" aria-expanded="false" aria-controls="collapse${card_count}">preview prompt ▼</a><div class="collapse" id="collapse${card_count}"><div class="card card-body" id="letter${card_count}">${good_letter(city, state, person.substring(0, 1))}</div></div><br><br><div class = "row justify-content-center"><br><a class="col-md-5 btn btn-danger" id="clipboard-btn" onclick="copyTexts('letter${card_count}')" data-clipboard-text="$('.letter${card_count}').text()">copy prompt</a><a href="${rep_site}" target="_" class="col-md-5 btn btn-danger" id="email-btn">send email</a></div></div></div></div>`
                    } else {
                        card = `<div class="col-lg-4 col-md-12 mb-3"><div class="card border-warning"><div class="card-header">Call To Action</div><div class="card-body text-warning"><h5>${person}</h5><a class="text-info" id="email-btn" data-toggle="collapse" href="#collapse${card_count}" role="button" aria-expanded="false" aria-controls="collapse${card_count}">preview prompt ▼</a><div class="collapse" id="collapse${card_count}"><div class="card card-body" id="letter${card_count}">${good_letter(city, state, person.substring(0, 1))}</div></div><br><br><div class = "row justify-content-center"><br><a class="col-md-5 btn btn-warning" id="clipboard-btn" onclick="copyTexts('letter${card_count}')" data-clipboard-text="$('.letter${card_count}').text()">copy prompt</a><a href="${rep_site}" target="_" class="col-md-5 btn btn-warning" id="email-btn">send email</a></div></div></div></div>`
                    }

                    $("#normal-reps").append(card)
                    card_count+=1

                }
            }
        }

//        console.log(sen_objections)
//        console.log(house_objections)
//        console.log(your_members)
        $(".lil-note").text(your_members)

        for (var i=0; i <= sen_objections+house_objections; i++) {

        }

     /*
        var call = ["call", "demand", "push", "request", "order"]
        var askVerb = ["ask", "implore", "beg", "request"]
        var writing = ["writing", "emailing", "reaching out", "messaging"]
        var im = ["I'm", "I am"]
        var favor = ["support", "vote in favor of", "stand behind community calls for", "endorse", "back our calls for"]
        var memorialize = ["you to have Central Park memorialize", "the Central Park memorialization", `you to ${favor[Math.floor(Math.random() * favor.length)]} Central Park memorializing`, `you to ${favor[Math.floor(Math.random() * favor.length)]} Central Park memorializing`]
        var gandd = ["Gracie and Dominic", "Gracie Muehlberger and Dominic Blackwell", "Dominic Blackwell and Gracie Muehlberger", "Dominic and Gracie"]
        var passed = ["passed away", "lost their lives", "had their lives stripped away from them", "tragically died", "senselessly died", "had their lives taken from them", "were the victims of"]
        var shooting = ["the Saugus High School shooting", "the Saugus shooting", "the shooting at Saugus High School", "the Saugus High shooting", "the shooting at Saugus High"]
        var lostlives = [`${passed[Math.floor(Math.random() * passed.length)]} as a result of ${shooting[Math.floor(Math.random() * shooting.length)]}`, `${passed[Math.floor(Math.random() * passed.length)]} because of ${shooting[Math.floor(Math.random() * shooting.length)]}`, `${passed[Math.floor(Math.random() * passed.length)]} at the hands of ${shooting[Math.floor(Math.random() * shooting.length)]}`, `${passed[Math.floor(Math.random() * passed.length)]} due to the ${shooting[Math.floor(Math.random() * shooting.length)]}`]
        var desig = ["designated", "assigned", "allocated"]
        var children = ["kids", "students", "children", "Saugus students", "high schoolers"]
        var reunite = ["reunite", "meet up", "get back together", "reunify", "meet again"]
        var parents = ["loved ones", "parents", "guardians", "families"]
        var morn = ["That morning", "During the morning of the shooting", "The morning of the shooting"]
        var safety = ["protection", "safety", "security"]
        var afterEvac = [`evacuated from the school were sent for ${safety[Math.floor(Math.random() * safety.length)]}`, `vacated the premises of the school were issued for their ${safety[Math.floor(Math.random() * safety.length)]}`]
        var morning = [`${morn[Math.floor(Math.random() * morn.length)]}, Central Park was ${desig[Math.floor(Math.random() * desig.length)]} as the Incident Command Post, where ${children[Math.floor(Math.random() * children.length)]} who ${afterEvac[Math.floor(Math.random() * afterEvac.length)]} were able to ${reunite[Math.floor(Math.random() * reunite.length)]} with their ${parents[Math.floor(Math.random() * parents.length)]}`, `${morn[Math.floor(Math.random() * morn.length)]}, the ${desig[Math.floor(Math.random() * desig.length)]} Incident Command Post, where ${children[Math.floor(Math.random() * children.length)]} ${afterEvac[Math.floor(Math.random() * afterEvac.length)]} who would ${reunite[Math.floor(Math.random() * reunite.length)]} with their ${parents[Math.floor(Math.random() * parents.length)]}, was Central Park`]
        var daysLater = ["A few days later", "Three days later", "Only three days later"]
        var per = ["by way of", "per", "by means of", "as allotted by", "through"]
        var people = ["members of the community", "of us", "Santa Claritans", "people"]
        var gathered = ["gathered", "got together", "united", "joined", "massed", "congregated"]
        var over15 = ["well over 15,000", "over 15,000", "more than 15,000", "15,000+"]
        var vigil = ["vigil", "memorial", "event", "occasion"]
        var moving = ["moving", "touching", "heart-wrenching"]
        var scv =  ["SCV", "Santa Clarita", "Santa Clarita Valley", "the Santa Clarita Valley"]
        var history = [`ever before seen in ${scv[Math.floor(Math.random() * scv.length)]}`, `in the history of ${scv[Math.floor(Math.random() * scv.length)]}`, `${scv[Math.floor(Math.random() * scv.length)]} has ever seen`, `${scv[Math.floor(Math.random() * scv.length)]} has ever had`, `in ${scv[Math.floor(Math.random() * scv.length)]}'s history`]
        var afflicted = ["afflicted", "affected", "stricken", "touched", "broken", "forever changed"]
        var tragedy = ["tragedy", "horrific event", "catastrophe", "unfortunate event"]
        var overstated = ["overstated", "misrepresented"]
        var cant = ["cannot", "can't"]
        var impact = ["imapct", "influence", "meaning", "impression", "significance"]
        var lives = ["memories", "lives"]
        var brought = ["brought us together to", "brought us to", "unified us at", "gathered us at", "got us all together at"]
        var way = ["way", "manner", "degree"]
        var should = ["should", "must", "ought to"]
        var forever = ["eternally remain in its future", "forever be a part of its future", "be inscribed in its future"]
        var para1 = `${im[Math.floor(Math.random() * im.length)]} ${writing[Math.floor(Math.random() * writing.length)]} today to ${call[Math.floor(Math.random() * call.length)]} for ${memorialize[Math.floor(Math.random() * memorialize.length)]} ${gandd[Math.floor(Math.random() * gandd.length)]}, who ${lostlives[Math.floor(Math.random() * lostlives.length)]}. ${morning[Math.floor(Math.random() * morning.length)]}. ${daysLater[Math.floor(Math.random() * daysLater.length)]}, ${per[Math.floor(Math.random() * per.length)]} the City of Santa Clarita, ${over15[Math.floor(Math.random() * over15.length)]} ${people[Math.floor(Math.random() * people.length)]} ${gathered[Math.floor(Math.random() * gathered.length)]} at Central Park for a ${moving[Math.floor(Math.random() * moving.length)]} ${vigil[Math.floor(Math.random() * vigil.length)]}, the largest gathering ${history[Math.floor(Math.random() * history.length)]}. This ${vigil[Math.floor(Math.random() * vigil.length)]} honored the ${lives[Math.floor(Math.random() * lives.length)]} of ${gandd[Math.floor(Math.random() * gandd.length)]}, and all those ${afflicted[Math.floor(Math.random() * afflicted.length)]} by this ${tragedy[Math.floor(Math.random() * tragedy.length)]}. This ${vigil[Math.floor(Math.random() * vigil.length)]}'s ${impact[Math.floor(Math.random() * impact.length)]} ${cant[Math.floor(Math.random() * cant.length)]} ${overstated[Math.floor(Math.random() * overstated.length)]}. ${gandd[Math.floor(Math.random() * gandd.length)]} ${brought[Math.floor(Math.random() * brought.length)]} Central Park in an unprecedented ${way[Math.floor(Math.random() * way.length)]} that ${should[Math.floor(Math.random() * should.length)]} always be remembered by ${scv[Math.floor(Math.random() * scv.length)]}. Both ${gandd[Math.floor(Math.random() * gandd.length)]} are forever a part of the ${scv[Math.floor(Math.random() * scv.length)]}’s history, and ${should[Math.floor(Math.random() * should.length)]} ${forever[Math.floor(Math.random() * forever.length)]}.`

        var recog = ["recognized", "confirmed", "acknowledged", "affirmed", "approved", "okayed"]
        var req = ["ask", "request"]
        var right = ["right", "correct", "fair", "just"]
        var same = [`it is only ${right[Math.floor(Math.random() * right.length)]} that you do the same`, `to do the same is the ${right[Math.floor(Math.random() * right.length)]} next step`, `we simply ${askVerb[Math.floor(Math.random() * askVerb.length)]} you to do the same`]
        var para4 = `The City Council of ${scv[Math.floor(Math.random() * scv.length)]} has already ${recog[Math.floor(Math.random() * recog.length)]} this ${req[Math.floor(Math.random() * req.length)]}, ${same[Math.floor(Math.random() * same.length)]}.`

        var source = {
                subject: ["Public Comment", "Written Comment", "Memorial Comment", "Comment for Today's Meeting"],
                body: `To the Santa Clarita Water Board:\n\nMy name is ${name}. ${relation1}${relation2}${relation3}${relation4}\n ${para1}\n\n${para4}\n\n${thoughts}\n\nSincerely,\n\n${name}`,
                to: "ajacobs@scvwa.org",
                cc: "mstone@scvwa.org,scole@scvwa.org,kabercrombie@scvwa.org,bjatkins@atkinsenvironmental.com,edwardacolley@gmail.com,wcooper61@att.net,bob.diprimio@gmail.com,ejglad@aol.com,electmaria@gmail.com,rjkelly39@hotmail.com,grm25325@aol.com,lynnepl1@juno.com",
            }

        var randomSubject = source["subject"][Math.floor(Math.random() * source["subject"].length)]
        var newSubject = encodeURIComponent(randomSubject + " - " + name)
        var newBody = encodeURIComponent(`${source["body"]}`)
        var link = `mailto:${source["to"]}?cc=${source["cc"]}&subject=${newSubject}&body=${newBody}`
        $("#email-text").text(source["body"])
        $("#email-btn").attr("href", link)

        $("#draft").show()
      */
        }

})

//$(".see-rest").click(showAll())

function copyTexts(prompt) {
//  /* Get the text field */
////  console.log(copyText)
  var str = document.getElementById(prompt).textContent;
//  console.log(copyText)
//
//  /* Select the text field */
//  copyText.select;
//  copyText.setSelectionRange(0, 99999); /*For mobile devices*/
//
//  /* Copy the text inside the text field */
//  document.execCommand("copy");
//
//  /* Alert the copied text */
      const el = document.createElement('textarea');
      el.value = str;
      el.setAttribute('readonly', '');
      el.style.position = 'absolute';
      el.style.left = '-9999px';
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    //  alert("successfully copied!");

}

new ClipboardJS('.clip');
