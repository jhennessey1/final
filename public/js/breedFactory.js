angular.module('grumMod')
	.factory('breedFactory', [function(){
		var breeds = [

			{"breed" :  "Affenpinscher"},
		    {"breed" :  "Afghan Hound"},
		    {"breed" :  "Aidi"},
			{"breed" :  "Airedale Terrier"},
			{"breed" :  "Akbash Dog"},
			{"breed" :  "Alano Español"},
		    {"breed" :  "Alaskan Klee Kai"},
		    {"breed" :  "Alaskan Malamute"},
		    {"breed" :  "Alpine Dachsbracke"},
		    {"breed" :  "Alpine Spaniel"},
		    {"breed" :  "American Bulldog"},
		    {"breed" :  "American Cocker Spaniel"},
		    {"breed" :  "American Eskimo Dog"},
		    {"breed" :  "American Foxhound"},
		    {"breed" :  "American Hairless Terrier"},
		    {"breed" :  "American Pit Bull Terrier"},
		    {"breed" :  "American Staffordshire Terrier"},
		    {"breed" :  "American Water Spaniel"},
		    {"breed" :  "Anglo-Français de Petite Vénerie"},
		    {"breed" :  "Appenzeller Sennenhund"},
		    {"breed" :  "Ariege Pointer"},
		    {"breed" :  "Ariegeois"},
		    {"breed" :  "Armant"},
		    {"breed" :  "Armenian Gampr dog"},
		    {"breed" :  "Artois Hound"},
		    {"breed" :  "Australian Cattle Dog"},
		    {"breed" :  "Australian Kelpie"},
		    {"breed" :  "Australian Shepherd"},
		    {"breed" :  "Australian Silky Terrier"},
		    {"breed" :  "Australian Stumpy Tail Cattle Dog"},
		    {"breed" :  "Australian Terrier"},
		    {"breed" :  "Azawakh"},
		    {"breed" :  "Bakharwal Dog"},
		    {"breed" :  "Barbet"},
		    {"breed" :  "Basenji"},
		    {"breed" :  "Basque Shepherd Dog"},
		    {"breed" :  "Basset Artésien Normand"},
		    {"breed" :  "Basset Bleu de Gascogne"},
		    {"breed" :  "Basset Fauve de Bretagne"},
		    {"breed" :  "Basset Hound"},
		    {"breed" :  "Bavarian Mountain Hound"},
		    {"breed" :  "Beagle"},
		    {"breed" :  "Beagle-Harrier"},
		    {"breed" :  "Bearded Collie"},
		    {"breed" :  "Beauceron"},
		    {"breed" :  "Bedlington Terrier"},
		    {"breed" :  "Belgian Shepherd Dog (Groenendael)"},
		    {"breed" :  "Belgian Shepherd Dog (Laekenois)"},
		    {"breed" :  "Belgian Shepherd Dog (Malinois)"},
		    {"breed" :  "Bergamasco Shepherd"},
		    {"breed" :  "Berger Blanc Suisse"},
		    {"breed" :  "Berger Picard"},
		    {"breed" :  "Berner Laufhund"},
		    {"breed" :  "Bernese Mountain Dog"},
		    {"breed" :  "Billy"},
		    {"breed" :  "Black and Tan Coonhound"},
		    {"breed" :  "Black and Tan Virginia Foxhound"},
		    {"breed" :  "Black Norwegian Elkhound"},
		    {"breed" :  "Black Russian Terrier"},
		    {"breed" :  "Bloodhound"},
		    {"breed" :  "Blue Lacy"},
		    {"breed" :  "Blue Paul Terrier"},
		    {"breed" :  "Boerboel"},
		    {"breed" :  "Bohemian Shepherd"},
		    {"breed" :  "Bolognese"},
		    {"breed" :  "Border Collie"},
		    {"breed" :  "Border Terrier"},
		    {"breed" :  "Borzoi"},
		    {"breed" :  "Boston Terrier"},
		    {"breed" :  "Bouvier des Ardennes"},
		    {"breed" :  "Bouvier des Flandres"},
		    {"breed" :  "Boxer"},
		    {"breed" :  "Boykin Spaniel"},
		    {"breed" :  "Bracco Italiano"},
		    {"breed" :  "Braque d'Auvergne"},
		    {"breed" :  "Braque du Bourbonnais"},
		    {"breed" :  "Braque du Puy"},
		    {"breed" :  "Braque Francais"},
		    {"breed" :  "Braque Saint-Germain"},
		    {"breed" :  "Brazilian Terrier"},
		    {"breed" :  "Briard"},
		    {"breed" :  "Briquet Griffon Vendéen"},
		    {"breed" :  "Brittany"},
		    {"breed" :  "Broholmer"},
		    {"breed" :  "Bruno Jura Hound"},
		    {"breed" :  "Bucovina Shepherd Dog"},
		    {"breed" :  "Bull and Terrier"},
		    {"breed" :  "Bull Terrier (Miniature)"},
		    {"breed" :  "Bull Terrier"},
		    {"breed" :  "Bulldog"},
		    {"breed" :  "Bullenbeisser"},
		    {"breed" :  "Bullmastiff"},
		    {"breed" :  "Bully Kutta"},
		    {"breed" :  "Burgos Pointer"},
		    {"breed" :  "Cairn Terrier"},
		    {"breed" :  "Canaan Dog"},
		    {"breed" :  "Canadian Eskimo Dog"},
		    {"breed" :  "Cane Corso"},
		    {"breed" :  "Cardigan Welsh Corgi"},
		    {"breed" :  "Carolina Dog"},
		    {"breed" :  "Carpathian Shepherd Dog"},
		    {"breed" :  "Catahoula Cur"},
		    {"breed" :  "Catalan Sheepdog"},
		    {"breed" :  "Caucasian Shepherd Dog"},
		    {"breed" :  "Cavalier King Charles Spaniel"},
		    {"breed" :  "Central Asian Shepherd Dog"},
		    {"breed" :  "Cesky Fousek"},
		    {"breed" :  "Cesky Terrier"},
		    {"breed" :  "Chesapeake Bay Retriever"},
		    {"breed" :  "Chien Français Blanc et Noir"},
		    {"breed" :  "Chien Français Blanc et Orange"},
		    {"breed" :  "Chien Français Tricolore"},
		    {"breed" :  "Chien-gris"},
		    {"breed" :  "Chihuahua"},
		    {"breed" :  "Chilean Fox Terrier"},
		    {"breed" :  "Chinese Chongqing Dog"},
		    {"breed" :  "Chinese Crested Dog"},
		    {"breed" :  "Chinese Imperial Dog"},
		    {"breed" :  "Chinook"},
		    {"breed" :  "Chippiparai"},
		    {"breed" :  "Chow Chow"},
		    {"breed" :  "Cierny Sery"},
		    {"breed" :  "Cimarrón Uruguayo"},
		    {"breed" :  "Cirneco dell'Etna"},
		    {"breed" :  "Clumber Spaniel"},
		    {"breed" :  "Combai"},
		    {"breed" :  "Cordoba Fighting Dog"},
		    {"breed" :  "Coton de Tulear"},
		    {"breed" :  "Cretan Hound"},
		    {"breed" :  "Croatian Sheepdog"},
		    {"breed" :  "Cumberland Sheepdog"},
		    {"breed" :  "Curly Coated Retriever"},
		    {"breed" :  "Cursinu"},
		    {"breed" :  "Cão da Serra de Aires"},
		    {"breed" :  "Cão de Castro Laboreiro"},
		    {"breed" :  "Cão Fila de São Miguel"},
		    {"breed" :  "Dachshund"},
		    {"breed" :  "Dalmatian"},
		    {"breed" :  "Dandie Dinmont Terrier"},
		    {"breed" :  "Danish Swedish Farmdog"},
		    {"breed" :  "Deutsche Bracke"},
		    {"breed" :  "Doberman Pinscher"},
		    {"breed" :  "Dogo Argentino"},
		    {"breed" :  "Dogo Cubano"},
		    {"breed" :  "Dogue de Bordeaux"},
		    {"breed" :  "Drentse Patrijshond"},
		    {"breed" :  "Drever"},
		    {"breed" :  "Dunker"},
		    {"breed" :  "Dutch Shepherd Dog"},
		    {"breed" :  "Dutch Smoushond"},
		    {"breed" :  "East Siberian Laika"},
		    {"breed" :  "East-European Shepherd"},
		    {"breed" :  "Elo"},
		    {"breed" :  "English Cocker Spaniel"},
		    {"breed" :  "English Foxhound"},
		    {"breed" :  "English Mastiff"},
		    {"breed" :  "English Setter"},
		    {"breed" :  "English Shepherd"},
		    {"breed" :  "English Springer Spaniel"},
		    {"breed" :  "English Toy Terrier (Black &amp; Tan)"},
		    {"breed" :  "English Water Spaniel"},
		    {"breed" :  "English White Terrier"},
		    {"breed" :  "Entlebucher Mountain Dog"},
		    {"breed" :  "Estonian Hound"},
		    {"breed" :  "Estrela Mountain Dog"},
		    {"breed" :  "Eurasier"},
		    {"breed" :  "Field Spaniel"},
		    {"breed" :  "Fila Brasileiro"},
		    {"breed" :  "Finnish Hound"},
		    {"breed" :  "Finnish Lapphund"},
		    {"breed" :  "Finnish Spitz"},
		    {"breed" :  "Flat-Coated Retriever"},
		    {"breed" :  "Formosan Mountain Dog"},
		    {"breed" :  "Fox Terrier (Smooth)"},
		    {"breed" :  "French Bulldog"},
		    {"breed" :  "French Spaniel"},
		    {"breed" :  "Galgo Español"},
		    {"breed" :  "Gascon Saintongeois"},
		    {"breed" :  "German Longhaired Pointer"},
		    {"breed" :  "German Pinscher"},
		    {"breed" :  "German Shepherd"},
		    {"breed" :  "German Shorthaired Pointer"},
		    {"breed" :  "German Spaniel"},
		    {"breed" :  "German Spitz"},
		    {"breed" :  "German Wirehaired Pointer"},
		    {"breed" :  "Giant Schnauzer"},
		    {"breed" :  "Glen of Imaal Terrier"},
		    {"breed" :  "Golden Retriever"},
		    {"breed" :  "Gordon Setter"},
		    {"breed" :  "Gran Mastín de Borínquen"},
		    {"breed" :  "Grand Anglo-Français Blanc et Noir"},
		    {"breed" :  "Grand Anglo-Français Blanc et Orange"},
		    {"breed" :  "Grand Anglo-Français Tricolore"},
		    {"breed" :  "Grand Basset Griffon Vendéen"},
		    {"breed" :  "Grand Bleu de Gascogne"},
		    {"breed" :  "Grand Griffon Vendéen"},
		    {"breed" :  "Great Dane"},
		    {"breed" :  "Great Pyrenees"},
		    {"breed" :  "Greater Swiss Mountain Dog"},
		    {"breed" :  "Greek Harehound"},
		    {"breed" :  "Greenland Dog"},
		    {"breed" :  "Greyhound"},
		    {"breed" :  "Griffon Bleu de Gascogne"},
		    {"breed" :  "Griffon Bruxellois"},
		    {"breed" :  "Griffon Fauve de Bretagne"},
		    {"breed" :  "Griffon Nivernais"},
		    {"breed" :  "Hamiltonstövare"},
		    {"breed" :  "Hanover Hound"},
		    {"breed" :  "Hare Indian Dog"},
		    {"breed" :  "Harrier"},
		    {"breed" :  "Havanese"},
		    {"breed" :  "Hawaiian Poi Dog"},
		    {"breed" :  "Himalayan Sheepdog"},
		    {"breed" :  "Hokkaido"},
		    {"breed" :  "Hovawart"},
		    {"breed" :  "Huntaway"},
		    {"breed" :  "Hygenhund"},
		    {"breed" :  "Ibizan Hound"},
		    {"breed" :  "Icelandic Sheepdog"},
		    {"breed" :  "Indian pariah dog"},
		    {"breed" :  "Indian Spitz"},
		    {"breed" :  "Irish Red and White Setter"},
		    {"breed" :  "Irish Setter"},
		    {"breed" :  "Irish Terrier"},
		    {"breed" :  "Irish Water Spaniel"},
		    {"breed" :  "Irish Wolfhound"},
		    {"breed" :  "Istrian Coarse-haired Hound"},
		    {"breed" :  "Istrian Shorthaired Hound"},
		    {"breed" :  "Italian Greyhound"},
		    {"breed" :  "Jack Russell Terrier"},
		    {"breed" :  "Jagdterrier"},
		    {"breed" :  "Jämthund"},
		    {"breed" :  "Kai Ken"},
		    {"breed" :  "Kaikadi"},
		    {"breed" :  "Kanni"},
		    {"breed" :  "Karelian Bear Dog"},
		    {"breed" :  "Karst Shepherd"},
		    {"breed" :  "Keeshond"},
		    {"breed" :  "Kerry Beagle"},
		    {"breed" :  "Kerry Blue Terrier"},
		    {"breed" :  "King Charles Spaniel"},
		    {"breed" :  "King Shepherd"},
		    {"breed" :  "Kintamani"},
		    {"breed" :  "Kishu"},
		    {"breed" :  "Komondor"},
		    {"breed" :  "Kooikerhondje"},
		    {"breed" :  "Koolie"},
		    {"breed" :  "Korean Jindo Dog"},
		    {"breed" :  "Kromfohrländer"},
		    {"breed" :  "Kumaon Mastiff"},
		    {"breed" :  "Kurī"},
		    {"breed" :  "Kuvasz"},
		    {"breed" :  "Kyi-Leo"},
		    {"breed" :  "Labrador Husky"},
		    {"breed" :  "Labrador Retriever"},
		    {"breed" :  "Lagotto Romagnolo"},
		    {"breed" :  "Lakeland Terrier"},
		    {"breed" :  "Lancashire Heeler"},
		    {"breed" :  "Landseer"},
		    {"breed" :  "Lapponian Herder"},
		    {"breed" :  "Large Münsterländer"},
		    {"breed" :  "Leonberger"},
		    {"breed" :  "Lhasa Apso"},
		    {"breed" :  "Lithuanian Hound"},
		    {"breed" :  "Longhaired Whippet"},
		    {"breed" :  "Löwchen"},
		    {"breed" :  "Mahratta Greyhound"},
		    {"breed" :  "Maltese"},
		    {"breed" :  "Manchester Terrier"},
		    {"breed" :  "Maremma Sheepdog"},
		    {"breed" :  "McNab"},
		    {"breed" :  "Mexican Hairless Dog"},
		    {"breed" :  "Miniature American Shepherd"},
		    {"breed" :  "Miniature Australian Shepherd"},
		    {"breed" :  "Miniature Fox Terrier"},
		    {"breed" :  "Miniature Pinscher"},
		    {"breed" :  "Miniature Schnauzer"},
		    {"breed" :  "Miniature Shar Pei"},
		    {"breed" :  "Molossus"},
		    {"breed" :  "Montenegrin Mountain Hound"},
		    {"breed" :  "Moscow Watchdog"},
		    {"breed" :  "Moscow Water Dog"},
		    {"breed" :  "Mountain Cur"},
		    {"breed" :  "Mucuchies"},
		    {"breed" :  "Mudhol Hound"},
		    {"breed" :  "Mudi"},
		    {"breed" :  "Neapolitan Mastiff"},
		    {"breed" :  "New Zealand Heading Dog"},
		    {"breed" :  "Newfoundland"},
		    {"breed" :  "Norfolk Spaniel"},
		    {"breed" :  "Norfolk Terrier"},
		    {"breed" :  "Norrbottenspets"},
		    {"breed" :  "North Country Beagle"},
		    {"breed" :  "Northern Inuit Dog"},
		    {"breed" :  "Norwegian Buhund"},
		    {"breed" :  "Norwegian Elkhound"},
		    {"breed" :  "Norwegian Lundehund"},
		    {"breed" :  "Norwich Terrier"},
		    {"breed" :  "Old Croatian Sighthound"},
		    {"breed" :  "Old Danish Pointer"},
		    {"breed" :  "Old English Sheepdog"},
		    {"breed" :  "Old English Terrier"},
		    {"breed" :  "Old German Shepherd Dog"},
		    {"breed" :  "Olde English Bulldogge"},
		    {"breed" :  "Otterhound"},
		    {"breed" :  "Pachon Navarro"},
		    {"breed" :  "Paisley Terrier"},
		    {"breed" :  "Pandikona"},
		    {"breed" :  "Papillon"},
		    {"breed" :  "Parson Russell Terrier"},
		    {"breed" :  "Patterdale Terrier"},
		    {"breed" :  "Pekingese"},
		    {"breed" :  "Pembroke Welsh Corgi"},
		    {"breed" :  "Perro de Presa Canario"},
		    {"breed" :  "Perro de Presa Mallorquin"},
		    {"breed" :  "Peruvian Hairless Dog"},
		    {"breed" :  "Petit Basset Griffon Vendéen"},
		    {"breed" :  "Petit Bleu de Gascogne"},
		    {"breed" :  "Phalène"},
		    {"breed" :  "Pharaoh Hound"},
		    {"breed" :  "Phu Quoc ridgeback dog"},
		    {"breed" :  "Picardy Spaniel"},
		    {"breed" :  "Plott Hound"},
		    {"breed" :  "Podenco Canario"},
		    {"breed" :  "Pointer (dog breed)"},
		    {"breed" :  "Polish Greyhound"},
		    {"breed" :  "Polish Hound"},
		    {"breed" :  "Polish Hunting Dog"},
		    {"breed" :  "Polish Lowland Sheepdog"},
		    {"breed" :  "Polish Tatra Sheepdog"},
		    {"breed" : "Pomeranian"},
		    {"breed" :  "Pont-Audemer Spaniel"},
		    {"breed" :  "Poodle"},
		    {"breed" :  "Porcelaine"},
		    {"breed" :  "Portuguese Podengo"},
		    {"breed" :  "Portuguese Pointer"},
		    {"breed" :  "Portuguese Water Dog"},
		    {"breed" :  "Posavac Hound"},
		    {"breed" :  "Pražský Krysařík"},
		    {"breed" :  "Pudelpointer"},
		    {"breed" :  "Pug"},
		    {"breed" :  "Puli"},
		    {"breed" :  "Pumi"},
		    {"breed" :  "Pungsan Dog"},
		    {"breed" :  "Pyrenean Mastiff"},
		    {"breed" :  "Pyrenean Shepherd"},
		    {"breed" :  "Rafeiro do Alentejo"},
		    {"breed" :  "Rajapalayam"},
		    {"breed" :  "Rampur Greyhound"},
		    {"breed" :  "Rastreador Brasileiro"},
		    {"breed" :  "Rat Terrier"},
		    {"breed" :  "Ratonero Bodeguero Andaluz"},
		    {"breed" :  "Redbone Coonhound"},
		    {"breed" :  "Rhodesian Ridgeback"},
		    {"breed" :  "Rottweiler"},
		    {"breed" :  "Rough Collie"},
		    {"breed" :  "Russell Terrier"},
		    {"breed" :  "Russian Spaniel"},
		    {"breed" :  "Russian tracker"},
		    {"breed" :  "Russo-European Laika"},
		    {"breed" :  "Sabueso Español"},
		    {"breed" :  "Saint-Usuge Spaniel"},
		    {"breed" :  "Sakhalin Husky"},
		    {"breed" :  "Saluki"},
		    {"breed" :  "Samoyed"},
		    {"breed" : "Sapsali"},
		    {"breed" :  "Schapendoes"},
		    {"breed" :  "Schillerstövare"},
		    {"breed" :  "Schipperke"},
		    {"breed" :  "Schweizer Laufhund"},
		    {"breed" :  "Schweizerischer Niederlaufhund"},
		    {"breed" :  "Scotch Collie"},
		    {"breed" :  "Scottish Deerhound"},
		    {"breed" :  "Scottish Terrier"},
		    {"breed" :  "Sealyham Terrier"},
		    {"breed" :  "Segugio Italiano"},
		    {"breed" :  "Seppala Siberian Sleddog"},
		    {"breed" :  "Serbian Hound"},
		    {"breed" :  "Serbian Tricolour Hound"},
		    {"breed" :  "Shar Pei"},
		    {"breed" :  "Shetland Sheepdog"},
		    {"breed" :  "Shiba Inu"},
		    {"breed" :  "Shih Tzu"},
		    {"breed" :  "Shikoku"},
		    {"breed" :  "Shiloh Shepherd Dog"},
		    {"breed" :  "Siberian Husky"},
		    {"breed" :  "Silken Windhound"},
		    {"breed" :  "Sinhala Hound"},
		    {"breed" :  "Skye Terrier"},
		    {"breed" :  "Sloughi"},
		    {"breed" :  "Slovak Cuvac"},
		    {"breed" :  "Slovakian Rough-haired Pointer"},
		    {"breed" :  "Small Greek Domestic Dog"},
		    {"breed" :  "Small Münsterländer"},
		    {"breed" :  "Smooth Collie"},
		    {"breed" :  "South Russian Ovcharka"},
		    {"breed" :  "Southern Hound"},
		    {"breed" :  "Spanish Mastiff"},
		    {"breed" :  "Spanish Water Dog"},
		    {"breed" :  "Spinone Italiano"},
		    {"breed" :  "Sporting Lucas Terrier"},
		    {"breed" :  "St. Bernard"},
		    {"breed" :  "St. John's water dog"},
		    {"breed" :  "Stabyhoun"},
		    {"breed" :  "Staffordshire Bull Terrier"},
		    {"breed" :  "Standard Schnauzer"},
		    {"breed" :  "Stephens Cur"},
		    {"breed" :  "Styrian Coarse-haired Hound"},
		    {"breed" :  "Sussex Spaniel"},
		    {"breed" :  "Swedish Lapphund"},
		    {"breed" :  "Swedish Vallhund"},
		    {"breed" :  "Tahltan Bear Dog"},
		    {"breed" :  "Taigan"},
		    {"breed" :  "Talbot"},
		    {"breed" :  "Tamaskan Dog"},
		    {"breed" :  "Teddy Roosevelt Terrier"},
		    {"breed" :  "Telomian"},
		    {"breed" :  "Tenterfield Terrier"},
		    {"breed" :  "Thai Bangkaew Dog"},
		    {"breed" :  "Thai Ridgeback"},
		    {"breed" :  "Tibetan Mastiff"},
		    {"breed" :  "Tibetan Spaniel"},
		    {"breed" :  "Tibetan Terrier"},
		    {"breed" :  "Tornjak"},
		    {"breed" :  "Tosa"},
		    {"breed" :  "Toy Bulldog"},
		    {"breed" :  "Toy Fox Terrier"},
		    {"breed" :  "Toy Manchester Terrier"},
		    {"breed" :  "Toy Trawler Spaniel"},
		    {"breed" :  "Transylvanian Hound"},
		    {"breed" :  "Treeing Cur"},
		    {"breed" :  "Treeing Walker Coonhound"},
		    {"breed" :  "Trigg Hound"},
		    {"breed" :  "Tweed Water Spaniel"},
		    {"breed" :  "Tyrolean Hound"},
		    {"breed" :  "Vizsla"},
		    {"breed" :  "Volpino Italiano"},
		    {"breed" :  "Weimaraner"},
		    {"breed" :  "Welsh Sheepdog"},
		    {"breed" :  "Welsh Springer Spaniel"},
		    {"breed" :  "Welsh Terrier"},
		    {"breed" :  "West Highland White Terrier"},
		    {"breed" :  "West Siberian Laika"},
		    {"breed" :  "Westphalian Dachsbracke"},
		    {"breed" :  "Wetterhoun"},
		    {"breed" :  "Whippet"},
		    {"breed" :  "White Shepherd"},
		    {"breed" :  "Wire Fox Terrier"},
		    {"breed" :  "Wirehaired Pointing Griffon"},
		    {"breed" :  "Wirehaired Vizsla"},
		    {"breed" :  "Yorkshire Terrier"},
		    {"breed" :  "Šarplaninac"}
		]

		var weights = [
			{"weight" : "0-20", "value" : 1 },
			{"weight" : "21-40", "value" : 2},
			{"weight" : "41-60", "value" : 3},
			{"weight" : "61-80", "value" : 4},
			{"weight" : "81-100", "value" : 5},
			{"weight" : "100+", "value" : 6}
		]

		var times = [
		{"time" : "Off", "available" : false},
		{"time" : "8:00" , "available" : true},
		{"time" : "8:30", "available" : true},
		{"time" : "9:00", "available" : true},
		{"time" : "9:30", "available" : true},
		{"time" : "10:00", "available" : true},
		{"time" : "10:30", "available" : true},
		{"time" : "11:00", "available" : true},
		{"time" : "11:30", "available" : true},
		{"time" : "12:00", "available" : true},
		{"time" : "12:30", "available" : true},
		{"time" : "13:00", "available" : true},
		{"time" : "13:30", "available" : true},
		{"time" : "14:00", "available" : true},
		{"time" : "14:30", "available" : true},
		{"time" : "15:00", "available" : true},
		{"time" : "15:30", "available" : true},
		{"time" : "16:00", "available" : true},
		{"time" : "16:30", "available" : true},
		{"time" : "17:00", "available" : true}
		]


	return {
		breeds : breeds,
		weights : weights,
		times : times
	}

	}])
















