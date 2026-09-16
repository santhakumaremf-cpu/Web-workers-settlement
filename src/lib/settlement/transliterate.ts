// @ts-nocheck
/* English → Tamil name/address engine — ported from Worker Settlement Generator */

/** @type {Record<string, string>} */
export let E2T_USER = {};
/** @type {Array<[RegExp, string]>} */
export let E2T_USER_PHRASES = [];

export function setUserNameFixes(words, phrases) {
  E2T_USER = words || {};
  E2T_USER_PHRASES = phrases || [];
}

const E2T_PHRASES = [
    [/main road/gi, 'மெயின் ரோடு'], [/pirivu road/gi, 'பிரிவு ரோடு'], [/privu road/gi, 'பிரிவு ரோடு'],
    [/gurusamy ?palayam/gi, 'குருசாமிபாளையம்'], [/gurusamy palaiym/gi, 'குருசாமிபாளையம்'], [/paramathi velur/gi, 'பரமத்தி வேலூர்'],
    [/namakkal (district|dist|dt)\.?/gi, 'நாமக்கல் மாவட்டம்'], [/salem (district|dist|dt)\.?/gi, 'சேலம் மாவட்டம்'],
    [/erode (district|dist|dt)\.?/gi, 'ஈரோடு மாவட்டம்'], [/karur (district|dist|dt)\.?/gi, 'கரூர் மாவட்டம்'],
    [/mobile no\.?\s*:?/gi, 'கைபேசி எண் '], [/cell no\.?\s*:?/gi, 'கைபேசி எண் '], [/phone no\.?\s*:?/gi, 'தொலைபேசி எண் '],
    [/thiruvalluvar textiles (private limited|pvt\.? ltd\.?)/gi, 'திருவள்ளுவர் டெக்ஸ்டைல்ஸ் பிரைவேட் லிமிடெட்'],
    [/post office/gi, 'அஞ்சல் அலுவலகம்'], [/bus stand/gi, 'பேருந்து நிலையம்'], [/bus stop/gi, 'பேருந்து நிறுத்தம்'],
    [/railway station/gi, 'ரயில் நிலையம்'], [/\bnear\b/gi, 'அருகில்'], [/\bopp\b\.?/gi, 'எதிரில்'], [/\bbehind\b/gi, 'பின்புறம்']
];

const E2T_DICT = {
    // ---- names / places seen in the settlement sheet ----
    'gobi': 'கோபி', 'gopi': 'கோபி', 'palaniyappan': 'பழனியப்பன்', 'palaniappan': 'பழனியப்பன்', 'palaniappa': 'பழனியப்பா', 'palaniyappa': 'பழனியப்பா',
    'chitra': 'சித்ரா', 'chithra': 'சித்ரா', 'lakshmi': 'லட்சுமி', 'laxmi': 'லட்சுமி', 'lakshmy': 'லட்சுமி', 'letchumi': 'லட்சுமி', 'lechumi': 'லட்சுமி',
    'sambooranam': 'சம்பூரணம்', 'sampooranam': 'சம்பூரணம்', 'sambooranm': 'சம்பூரணம்', 'sampoornam': 'சம்பூரணம்',
    'kavitha': 'கவிதா', 'kavita': 'கவிதா', 'angappan': 'அங்கப்பன்', 'ramanathan': 'ராமநாதன்', 'varatharaj': 'வரதராஜ்', 'varadharaj': 'வரதராஜ்', 'varadaraj': 'வரதராஜ்',
    'manikam': 'மாணிக்கம்', 'manickam': 'மாணிக்கம்', 'manikkam': 'மாணிக்கம்', 'manicka': 'மாணிக்க', 'manikka': 'மாணிக்க', 'manika': 'மாணிக்க',
    'pellukuruchiyar': 'பெல்லுக்குறிச்சியார்', 'pellukurichiyar': 'பெல்லுக்குறிச்சியார்', 'kadu': 'காடு',
    'podinayakenpatty': 'போடிநாயக்கன்பட்டி', 'podinayakkanpatti': 'போடிநாயக்கன்பட்டி', 'podinaickenpatti': 'போடிநாயக்கன்பட்டி', 'bodinaickenpatti': 'போடிநாயக்கன்பட்டி', 'bodinayakanpatti': 'போடிநாயக்கன்பட்டி',
    'kuthichinnampatty': 'குத்திசின்னம்பட்டி', 'arasapalayam': 'அரசபாளையம்', 'kakkavery': 'காக்காவேரி', 'kakkaveri': 'காக்காவேரி',
    'koneripatty': 'கோனேரிப்பட்டி', 'konerippatty': 'கோனேரிப்பட்டி', 'koneripatti': 'கோனேரிப்பட்டி', 'thammanayakenpatty': 'தம்மநாயக்கன்பட்டி',
    'singalandapuram': 'சிங்காளந்தபுரம்', 'singalanthapuram': 'சிங்காளந்தபுரம்', 'singalanthapuram': 'சிங்காளந்தபுரம்', 'rasipuram': 'இராசிபுரம்', 'rasipurm': 'இராசிபுரம்', 'namakkal': 'நாமக்கல்', 'namakal': 'நாமக்கல்',

    // ---- extra names ----
    'arunachalam': 'அருணாசலம்', 'arunachala': 'அருணாசல', 'maruthachalam': 'மருதாசலம்', 'marudhachalam': 'மருதாசலம்', 'kandhachalam': 'கந்தாசலம்', 'rangammal': 'ரங்கம்மாள்', 'rengammal': 'ரெங்கம்மாள்', 'pillayar': 'பிள்ளையார்', 'pillaiyar': 'பிள்ளையார்', 'pilliyar': 'பிள்ளையார்',
    'prabhakar': 'பிரபாகர்', 'prabakar': 'பிரபாகர்', 'sudhakaran': 'சுதாகரன்', 'divakar': 'திவாகர்', 'dhivakar': 'திவாகர்', 'divakaran': 'திவாகரன்', 'kirubakaran': 'கிருபாகரன்', 'kirubakar': 'கிருபாகர்', 'ranganayaki': 'ரங்கநாயகி', 'chandirasekaran': 'சந்திரசேகரன்', 'chandiran': 'சந்திரன்', 'chandiramohan': 'சந்திரமோகன்',
    'iyyanar': 'ஐயனார்', 'iyanar': 'ஐயனார்', 'ayyanar': 'அய்யனார்', 'ayyavoo': 'அய்யாவு', 'ayyavu': 'அய்யாவு', 'ayyadurai': 'ஐயாத்துரை', 'ayyakannu': 'ஐயாக்கண்ணு', 'ayyammal': 'ஐயம்மாள்', 'iyyammal': 'ஐயம்மாள்', 'ayyanan': 'ஐயனன்',
    'chinnakalrayan': 'சின்னக்கல்ராயன்', 'kalrayan': 'கல்ராயன்', 'nadanthai': 'நடந்தை', 'kottamedu': 'கோட்டமேடு', 'medu': 'மேடு', 'chatram': 'சத்திரம்', 'puduchatram': 'புதுச்சத்திரம்', 'seerapalli': 'சீரப்பள்ளி', 'sengunthar': 'செங்குந்தர்', 'kaikolar': 'கைக்கோளர்',
    'mookaiyan': 'மூக்கையன்', 'mookkaiyan': 'மூக்கையன்', 'mookan': 'மூக்கன்', 'mookkan': 'மூக்கன்', 'nachimuthu': 'நாச்சிமுத்து', 'natchimuthu': 'நாச்சிமுத்து', 'pichamuthu': 'பிச்சைமுத்து', 'pitchamuthu': 'பிச்சைமுத்து', 'ettiyappan': 'எட்டியப்பன்', 'ettiappan': 'எட்டியப்பன்', 'ettiyammal': 'எட்டியம்மாள்',
    'sowndarya': 'சௌந்தர்யா', 'sowndarapandian': 'சௌந்தரபாண்டியன்', 'sowndarrajan': 'சௌந்தரராஜன்', 'deivanai': 'தெய்வானை', 'deivam': 'தெய்வம்', 'deivanayagam': 'தெய்வநாயகம்', 'deivendran': 'தெய்வேந்திரன்', 'dhivyabharathi': 'திவ்யபாரதி', 'bhuvanesh': 'புவனேஷ்', 'bhuvaneshwaran': 'புவனேஸ்வரன்', 'buvanesh': 'புவனேஷ்',
    'karuppathal': 'கருப்பாத்தாள்', 'karuppayee': 'கருப்பாயி', 'thangathal': 'தங்கத்தாள்', 'kuppathal': 'குப்பாத்தாள்', 'pattathal': 'பட்டத்தாள்', 'nallathal': 'நல்லத்தாள்', 'kannathal': 'கண்ணாத்தாள்', 'ponnuthal': 'பொன்னுத்தாள்', 'chinnathal': 'சின்னத்தாள்', 'pavayee': 'பாவாயி', 'pavai': 'பாவை',
    'sathyamurthi': 'சத்தியமூர்த்தி', 'sathyamurthy': 'சத்தியமூர்த்தி', 'thillaikkarasu': 'தில்லைக்கரசு', 'thillai': 'தில்லை', 'thillaiyammal': 'தில்லையம்மாள்', 'vishwanath': 'விஸ்வநாத்', 'viswanath': 'விஸ்வநாத்', 'yoganathan': 'யோகநாதன்', 'gurunatham': 'குருநாதம்', 'paranjothi': 'பரஞ்ஜோதி', 'paranjyothi': 'பரஞ்ஜோதி',
    'dheenadayalan': 'தீனதயாளன்', 'deenadayalan': 'தீனதயாளன்', 'dhinadayalan': 'தீனதயாளன்', 'thiripurasundari': 'திரிபுரசுந்தரி', 'balambigai': 'பாலாம்பிகை', 'balambika': 'பாலாம்பிகா', 'ambigai': 'அம்பிகை', 'ambika': 'அம்பிகா',
    'kandhavel': 'கந்தவேல்', 'kandavel': 'கந்தவேல்', 'ponnuvel': 'பொன்னுவேல்', 'periyathurai': 'பெரியத்துரை', 'periyadurai': 'பெரியத்துரை', 'vellaichamy': 'வெள்ளைச்சாமி', 'vellaisamy': 'வெள்ளைசாமி', 'ramalakshmanan': 'ராமலட்சுமணன்', 'sengodagounder': 'செங்கோடகவுண்டர்', 'sengoda': 'செங்கோட', 'sengodan': 'செங்கோடன்',
    'kaliyanur': 'காளியனூர்', 'vennaimalai': 'வெண்ணைமலை', 'kondichettipatti': 'கொண்டிச்செட்டிப்பட்டி', 'alavaipatti': 'அலவாய்ப்பட்டி', 'velagoundampatti': 'வேலகவுண்டம்பட்டி', 'kalyanipuram': 'கல்யாணிபுரம்', 'andagalur': 'ஆண்டகளூர்', 'perumapalayam': 'பெருமாபாளையம்', 'jangamanaickenpatti': 'ஜங்கமநாயக்கன்பட்டி', 'thoppapatti': 'தொப்பப்பட்டி',
    'ammankovil': 'அம்மன்கோவில்', 'amman': 'அம்மன்', 'pillayarkovil': 'பிள்ளையார்கோவில்', 'perumalkovil': 'பெருமாள்கோவில்', 'kovilpatti': 'கோவில்பட்டி', 'kovilur': 'கோவிலூர்', 'thengalpalayam': 'தெங்கல்பாளையம்', 'puliyampalayam': 'புளியம்பாளையம்', 'muthukalipatti': 'முத்துக்காளிப்பட்டி', 'thottakuruchi': 'தொட்டக்குறிச்சி', 'vadakkupatti': 'வடக்குப்பட்டி',
    // ---- more address words / places ----
    'government': 'அரசு', 'govt': 'அரசு', 'bypass': 'பைபாஸ்', 'byepass': 'பைபாஸ்', 'flat': 'பிளாட்', 'floor': 'தளம்', 'apartment': 'அடுக்குமாடி', 'apartments': 'அடுக்குமாடி', 'building': 'கட்டிடம்', 'shop': 'கடை', 'stores': 'ஸ்டோர்ஸ்', 'tower': 'டவர்', 'residency': 'ரெசிடென்சி', 'avenue': 'அவென்யூ', 'circle': 'வட்டம்', 'signal': 'சிக்னல்', 'bridge': 'பாலம்', 'river': 'ஆறு', 'lake': 'ஏரி', 'tank': 'குளம்',
    'mill': 'மில்', 'mills': 'மில்ஸ்', 'company': 'கம்பெனி', 'factory': 'தொழிற்சாலை', 'office': 'அலுவலகம்', 'bank': 'வங்கி', 'college': 'கல்லூரி', 'panchayat': 'பஞ்சாயத்து', 'panchayath': 'பஞ்சாயத்து', 'revenue': 'வருவாய்', 'corporation': 'மாநகராட்சி', 'municipality': 'நகராட்சி', 'pin': 'PIN', 'pincode': 'PIN', 'phone': 'தொலைபேசி', 'mobile': 'கைபேசி', 'cell': 'கைபேசி',
    'mecheri': 'மேச்சேரி', 'karaikudi': 'காரைக்குடி', 'krishnagiri': 'கிருஷ்ணகிரி', 'kaveripattinam': 'காவேரிப்பட்டினம்', 'keeranur': 'கீரனூர்', 'pothanur': 'பொத்தனூர்', 'vadugam': 'வடுகம்', 'ammapalayam': 'அம்மாபாளையம்', 'veppilaipatti': 'வெப்பிலைப்பட்டி', 'odapalli': 'ஓடப்பள்ளி', 'kurumbapatti': 'குறும்பப்பட்டி', 'malayampalayam': 'மலையம்பாளையம்', 'thokkavadi': 'தொக்கவாடி',
    'erumaipatti': 'எருமைப்பட்டி', 'puduppatti': 'புதுப்பட்டி', 'mavureddipatti': 'மாவுரெட்டிப்பட்டி', 'singilipatti': 'சிங்கிலிப்பட்டி', 'kolakkudi': 'கோலக்குடி', 'kanakkampalayam': 'கனக்கம்பாளையம்', 'semmedu': 'செம்மேடு', 'kallakurichi': 'கள்ளக்குறிச்சி', 'palappatti': 'பாலப்பட்டி', 'chettipatti': 'செட்டிப்பட்டி', 'pillanallur': 'பிள்ளாநல்லூர்', 'singaram': 'சிங்காரம்', 'singaravelu': 'சிங்காரவேலு', 'singaravel': 'சிங்காரவேல்',
    'satheesh': 'சதீஷ்', 'sneha': 'சினேகா', 'shyam': 'ஷ்யாம்', 'bro': 'பிரிவு', 'police': 'காவல்', 'plot': 'மனை', 'park': 'பூங்கா', 'saradha': 'சாரதா', 'pvt': 'பிரைவேட்', 'ltd': 'லிமிடெட்', 'private': 'பிரைவேட்', 'limited': 'லிமிடெட்', 'palaniappn': 'பழனியப்பன்', 'singalanthapurm': 'சிங்காளந்தபுரம்',
    'periyakkal': 'பெரியக்காள்', 'chinnakkal': 'சின்னக்காள்', 'pongiyannan': 'பொங்கியண்ணன்', 'pongianna': 'பொங்கியண்ணா', 'pongiannan': 'பொங்கியண்ணன்', 'ammasai': 'அம்மாசை', 'valliammai': 'வள்ளியம்மை', 'poovathal': 'பூவாத்தாள்', 'selvaganapathy': 'செல்வகணபதி', 'ganapathi': 'கணபதி', 'ganapathy': 'கணபதி', 'vinayagam': 'விநாயகம்', 'vinayagamoorthy': 'விநாயகமூர்த்தி', 'vinayaga': 'விநாயக',
    'karuppanan': 'கருப்பணன்', 'pavadai': 'பாவாடை', 'pavadaisamy': 'பாவாடைசாமி', 'rajeshkanna': 'ராஜேஷ்கண்ணா', 'kanna': 'கண்ணா', 'kolandasamy': 'குழந்தைசாமி', 'kolanthasamy': 'குழந்தைசாமி', 'ilamaran': 'இளமாறன்', 'ilamparithi': 'இளம்பரிதி', 'elamparithi': 'இளம்பரிதி', 'elavarasi': 'இளவரசி', 'priyadarshini': 'பிரியதர்ஷினி', 'sivakolundu': 'சிவக்கொழுந்து', 'sivakozhundu': 'சிவக்கொழுந்து',
    'boopalan': 'பூபாலன்', 'bhoopalan': 'பூபாலன்', 'boopathy': 'பூபதி', 'nithyananthan': 'நித்யானந்தன்', 'nithyanandam': 'நித்யானந்தம்', 'muthaiyammal': 'முத்தையம்மாள்', 'kandaiyammal': 'கந்தையம்மாள்', 'periyanayagi': 'பெரியநாயகி', 'sengeniammal': 'செங்கேணியம்மாள்', 'thulasiammal': 'துளசியம்மாள்', 'muthayee': 'முத்தாயி', 'sellayee': 'செல்லாயி', 'chinnayee': 'சின்னாயி', 'rangayee': 'ரங்காயி', 'kuppayee': 'குப்பாயி', 'thangayee': 'தங்காயி', 'pappayi': 'பாப்பாயி', 'rakkayi': 'ராக்காயி', 'mariyayi': 'மாரியாயி',
    // ---- male names ----
    'anand': 'ஆனந்த்', 'anandan': 'ஆனந்தன்', 'anandh': 'ஆனந்த்', 'anandhan': 'ஆனந்தன்', 'arumugam': 'ஆறுமுகம்', 'arumugham': 'ஆறுமுகம்', 'annadurai': 'அண்ணாதுரை', 'ashok': 'அசோக்', 'asokan': 'அசோகன்', 'ashokan': 'அசோகன்',
    'ajit': 'அஜித்', 'ajith': 'அஜித்', 'arun': 'அருண்', 'anbu': 'அன்பு', 'anbalagan': 'அன்பழகன்', 'anbazhagan': 'அன்பழகன்', 'anbarasan': 'அன்பரசன்', 'anbarasu': 'அன்பரசு', 'ayyappan': 'ஐயப்பன்', 'iyyappan': 'ஐயப்பன்', 'iyappan': 'ஐயப்பன்',
    'alagu': 'அழகு', 'azhagu': 'அழகு', 'alagar': 'அழகர்', 'azhagar': 'அழகர்', 'alagarsamy': 'அழகர்சாமி', 'alagesan': 'அழகேசன்', 'azhagesan': 'அழகேசன்', 'arul': 'அருள்', 'arulsamy': 'அருள்சாமி', 'arumugasamy': 'ஆறுமுகசாமி',
    'aswin': 'அஸ்வின்', 'ashwin': 'அஸ்வின்', 'annamalai': 'அண்ணாமலை', 'annadhurai': 'அண்ணாதுரை', 'arjun': 'அர்ஜுன்', 'arjunan': 'அர்ஜுனன்', 'aravind': 'அரவிந்த்', 'aravindan': 'அரவிந்தன்', 'ayyanar': 'அய்யனார்', 'ayyasamy': 'அய்யாசாமி', 'ayyavu': 'அய்யாவு',
    'annan': 'அண்ணன்', 'appu': 'அப்பு', 'adhi': 'ஆதி', 'aadhi': 'ஆதி', 'adhithya': 'ஆதித்யா', 'aditya': 'ஆதித்யா', 'akash': 'ஆகாஷ்', 'ananth': 'அனந்த்', 'anantha': 'அனந்த', 'ananthan': 'அனந்தன்', 'angamuthu': 'அங்கமுத்து', 'arasu': 'அரசு', 'arasan': 'அரசன்', 'andi': 'ஆண்டி', 'andiappan': 'ஆண்டியப்பன்', 'anjalai': 'அஞ்சலை',
    'balaji': 'பாலாஜி', 'balu': 'பாலு', 'babu': 'பாபு', 'balan': 'பாலன்', 'bala': 'பாலா', 'balasubramani': 'பாலசுப்பிரமணி', 'balasubramaniam': 'பாலசுப்பிரமணியம்', 'balasubramanian': 'பாலசுப்பிரமணியன்', 'balakrishnan': 'பாலகிருஷ்ணன்', 'balamurugan': 'பாலமுருகன்', 'balamurali': 'பாலமுரளி',
    'baskar': 'பாஸ்கர்', 'bhaskar': 'பாஸ்கர்', 'baskaran': 'பாஸ்கரன்', 'bhaskaran': 'பாஸ்கரன்', 'bharath': 'பரத்', 'bharathi': 'பாரதி', 'bharathiyar': 'பாரதியார்', 'bharathiar': 'பாரதியார்', 'boopathi': 'பூபதி', 'boopathy': 'பூபதி', 'bhoopathi': 'பூபதி', 'boominathan': 'பூமிநாதன்', 'bose': 'போஸ்',
    'chandran': 'சந்திரன்', 'chandra': 'சந்திரா', 'chandrasekar': 'சந்திரசேகர்', 'chandrasekaran': 'சந்திரசேகரன்', 'chandrasekhar': 'சந்திரசேகர்', 'chellam': 'செல்லம்', 'chelladurai': 'செல்லத்துரை', 'chellappan': 'செல்லப்பன்', 'chellamuthu': 'செல்லமுத்து', 'chinnasamy': 'சின்னசாமி', 'chinnadurai': 'சின்னத்துரை', 'chinnathambi': 'சின்னத்தம்பி', 'chinnappan': 'சின்னப்பன்', 'chinna': 'சின்ன', 'chinnaiyan': 'சின்னையன்', 'chinnu': 'சின்னு', 'chitravel': 'சித்திரவேல்', 'chithiravel': 'சித்திரவேல்',
    'dhanapal': 'தனபால்', 'dhanabal': 'தனபால்', 'dhanapalan': 'தனபாலன்', 'dhana': 'தனா', 'dhanasekaran': 'தனசேகரன்', 'dhanasekar': 'தனசேகர்', 'dhanaraj': 'தனராஜ்', 'dhandapani': 'தண்டபாணி', 'dinesh': 'தினேஷ்', 'dhinesh': 'தினேஷ்', 'durai': 'துரை', 'duraisamy': 'துரைசாமி', 'duraiswamy': 'துரைசாமி', 'durairaj': 'துரைராஜ்', 'duraipandi': 'துரைப்பாண்டி', 'duraikannu': 'துரைக்கண்ணு', 'devaraj': 'தேவராஜ்', 'devarajan': 'தேவராஜன்', 'devan': 'தேவன்', 'deva': 'தேவா', 'devendran': 'தேவேந்திரன்', 'dhas': 'தாஸ்', 'das': 'தாஸ்', 'dass': 'தாஸ்', 'damodaran': 'தாமோதரன்', 'dharman': 'தர்மன்', 'dharma': 'தர்மா', 'dharmalingam': 'தர்மலிங்கம்', 'dharmaraj': 'தர்மராஜ்', 'deepak': 'தீபக்', 'dhinakaran': 'தினகரன்', 'dinakaran': 'தினகரன்',
    'elango': 'இளங்கோ', 'ilango': 'இளங்கோ', 'elangovan': 'இளங்கோவன்', 'ilangovan': 'இளங்கோவன்', 'elumalai': 'ஏழுமலை', 'ezhumalai': 'ஏழுமலை', 'eswaran': 'ஈஸ்வரன்', 'easwaran': 'ஈஸ்வரன்', 'ekambaram': 'ஏகாம்பரம்', 'ellappan': 'எல்லப்பன்', 'ezhil': 'எழில்', 'ezhilarasan': 'எழிலரசன்', 'elavarasan': 'இளவரசன்', 'ilavarasan': 'இளவரசன்', 'ilayaraja': 'இளையராஜா', 'ilaiyaraja': 'இளையராஜா', 'ilamurugu': 'இளமுருகு',
    'ganesan': 'கணேசன்', 'ganesh': 'கணேஷ்', 'ganeshan': 'கணேசன்', 'gandhi': 'காந்தி', 'gopal': 'கோபால்', 'gopalan': 'கோபாலன்', 'gopalakrishnan': 'கோபாலகிருஷ்ணன்', 'gopalsamy': 'கோபால்சாமி', 'gopinath': 'கோபிநாத்', 'govindan': 'கோவிந்தன்', 'govindasamy': 'கோவிந்தசாமி', 'govindaraj': 'கோவிந்தராஜ்', 'govindarajan': 'கோவிந்தராஜன்', 'govindaraju': 'கோவிந்தராஜு', 'gurusamy': 'குருசாமி', 'guruswamy': 'குருசாமி', 'gurunathan': 'குருநாதன்', 'gunasekaran': 'குணசேகரன்', 'gunasekar': 'குணசேகர்', 'guna': 'குணா', 'gnanam': 'ஞானம்', 'gnanasekaran': 'ஞானசேகரன்', 'gnanavel': 'ஞானவேல்', 'gnanaprakasam': 'ஞானபிரகாசம்', 'gokul': 'கோகுல்', 'gowtham': 'கௌதம்', 'gautham': 'கௌதம்', 'gopu': 'கோபு', 'gunaseelan': 'குணசீலன்',
    'hari': 'ஹரி', 'harish': 'ஹரிஷ்', 'harikrishnan': 'ஹரிகிருஷ்ணன்', 'hariharan': 'ஹரிஹரன்',
    'jayaraman': 'ஜெயராமன்', 'jeyaraman': 'ஜெயராமன்', 'jaya': 'ஜெயா', 'jeya': 'ஜெயா', 'jayakumar': 'ஜெயக்குமார்', 'jeyakumar': 'ஜெயக்குமார்', 'jayapal': 'ஜெயபால்', 'jeyapal': 'ஜெயபால்', 'jayaprakash': 'ஜெயபிரகாஷ்', 'jothi': 'ஜோதி', 'jyothi': 'ஜோதி', 'jagadeesh': 'ஜெகதீஷ்', 'jagadeesan': 'ஜெகதீசன்', 'jagan': 'ஜெகன்', 'jagannathan': 'ஜெகந்நாதன்', 'jeeva': 'ஜீவா', 'jeevanantham': 'ஜீவானந்தம்', 'jeevanandham': 'ஜீவானந்தம்', 'jeyaraj': 'ஜெயராஜ்', 'jayaraj': 'ஜெயராஜ்', 'john': 'ஜான்', 'joseph': 'ஜோசப்', 'jancy': 'ஜான்சி', 'janaki': 'ஜானகி', 'jayanthi': 'ஜெயந்தி', 'jeyanthi': 'ஜெயந்தி', 'jothimani': 'ஜோதிமணி', 'jayabal': 'ஜெயபால்', 'jayavel': 'ஜெயவேல்', 'jeyavel': 'ஜெயவேல்', 'jayabalan': 'ஜெயபாலன்', 'jayashree': 'ஜெயஸ்ரீ', 'jayasri': 'ஜெயஸ்ரீ', 'jayalakshmi': 'ஜெயலட்சுமி', 'jeyalakshmi': 'ஜெயலட்சுமி',
    'kathirvel': 'கதிர்வேல்', 'kathirvelu': 'கதிர்வேலு', 'kathir': 'கதிர்', 'kathiresan': 'கதிரேசன்', 'kathiravan': 'கதிரவன்', 'kandasamy': 'கந்தசாமி', 'kandhasamy': 'கந்தசாமி', 'kandan': 'கந்தன்', 'kandhan': 'கந்தன்', 'kandavel': 'கந்தவேல்', 'kannan': 'கண்ணன்', 'kannadasan': 'கண்ணதாசன்', 'kannaiyan': 'கண்ணையன்', 'kannu': 'கண்ணு', 'kannusamy': 'கண்ணுசாமி', 'karthik': 'கார்த்திக்', 'karthick': 'கார்த்திக்', 'karthi': 'கார்த்தி', 'karthikeyan': 'கார்த்திகேயன்', 'kamal': 'கமல்', 'kamalasan': 'கமலஹாசன்', 'kamaraj': 'காமராஜ்', 'kamarajar': 'காமராஜர்', 'kala': 'கலா', 'kalai': 'கலை', 'kalaiselvan': 'கலைச்செல்வன்', 'kalaiselvi': 'கலைச்செல்வி', 'kalaivani': 'கலைவாணி', 'kalaiarasi': 'கலையரசி', 'kalaiyarasi': 'கலையரசி', 'kalaiarasan': 'கலையரசன்', 'kalaimani': 'கலைமணி', 'kalaichelvan': 'கலைச்செல்வன்',
    'kumar': 'குமார்', 'kumaran': 'குமரன்', 'kumarasamy': 'குமாரசாமி', 'kumaravel': 'குமரவேல்', 'kumaresan': 'குமரேசன்', 'kumari': 'குமாரி', 'krishnan': 'கிருஷ்ணன்', 'krishna': 'கிருஷ்ணா', 'krishnamoorthy': 'கிருஷ்ணமூர்த்தி', 'krishnamurthy': 'கிருஷ்ணமூர்த்தி', 'krishnasamy': 'கிருஷ்ணசாமி', 'krishnaveni': 'கிருஷ்ணவேணி', 'krishnakumar': 'கிருஷ்ணகுமார்', 'kousalya': 'கௌசல்யா', 'gowsalya': 'கௌசல்யா', 'kulandaivel': 'குழந்தைவேல்', 'kulanthaivel': 'குழந்தைவேல்', 'kulandaisamy': 'குழந்தைசாமி', 'kokila': 'கோகிலா', 'kathirvelan': 'கதிர்வேலன்',
    'kaliyappan': 'காளியப்பன்', 'kaliappan': 'காளியப்பன்', 'kalimuthu': 'காளிமுத்து', 'kaliyamoorthy': 'காளியமூர்த்தி', 'kali': 'காளி', 'kalidas': 'காளிதாஸ்', 'kaliyaperumal': 'காளியபெருமாள்', 'kaliaperumal': 'காளியபெருமாள்', 'kanagaraj': 'கனகராஜ்', 'kanagarajan': 'கனகராஜன்', 'kanaga': 'கனக', 'kanagavel': 'கனகவேல்', 'karuppusamy': 'கருப்புசாமி', 'karuppasamy': 'கருப்பசாமி', 'karuppan': 'கருப்பன்', 'karuppannan': 'கருப்பண்ணன்', 'karuppaiah': 'கருப்பையா', 'karuppiah': 'கருப்பையா', 'karunanidhi': 'கருணாநிதி', 'karunakaran': 'கருணாகரன்', 'karuna': 'கருணா', 'kesavan': 'கேசவன்', 'kolanji': 'கொலஞ்சி', 'kolandaivel': 'குழந்தைவேல்', 'kuppusamy': 'குப்புசாமி', 'kuppuswamy': 'குப்புசாமி', 'kuppan': 'குப்பன்', 'kuppu': 'குப்பு', 'kuppuraj': 'குப்புராஜ்', 'kanthasamy': 'கந்தசாமி', 'kannappan': 'கண்ணப்பன்', 'kanniyappan': 'கன்னியப்பன்', 'kasi': 'காசி', 'kasinathan': 'காசிநாதன்', 'kasiviswanathan': 'காசிவிஸ்வநாதன்', 'kathamuthu': 'காத்தமுத்து', 'kathan': 'காத்தான்', 'kavin': 'கவின்', 'kiran': 'கிரண்', 'kishore': 'கிஷோர்', 'kumaraguru': 'குமரகுரு', 'kuppuraju': 'குப்புராஜு', 'kandaswamy': 'கந்தசாமி',
    'lakshmanan': 'லட்சுமணன்', 'lakshman': 'லட்சுமணன்', 'lingam': 'லிங்கம்', 'lingesan': 'லிங்கேசன்', 'lingeswaran': 'லிங்கேஸ்வரன்', 'loganathan': 'லோகநாதன்', 'logeswaran': 'லோகேஸ்வரன்', 'logesh': 'லோகேஷ்', 'lokesh': 'லோகேஷ்', 'logu': 'லோகு',
    'mani': 'மணி', 'manikandan': 'மணிகண்டன்', 'manikanda': 'மணிகண்ட', 'manimaran': 'மணிமாறன்', 'manivannan': 'மணிவண்ணன்', 'manivel': 'மணிவேல்', 'manivasagam': 'மணிவாசகம்', 'manimegalai': 'மணிமேகலை', 'manimekalai': 'மணிமேகலை', 'murugan': 'முருகன்', 'murugesan': 'முருகேசன்', 'murugavel': 'முருகவேல்', 'murugaiyan': 'முருகையன்', 'murugaiah': 'முருகையா', 'murugaiya': 'முருகையா', 'murugu': 'முருகு', 'muruganantham': 'முருகானந்தம்', 'muthu': 'முத்து', 'muthusamy': 'முத்துசாமி', 'muthuswamy': 'முத்துசாமி', 'muthukumar': 'முத்துக்குமார்', 'muthukumaran': 'முத்துக்குமரன்', 'muthuvel': 'முத்துவேல்', 'muthaiyan': 'முத்தையன்', 'muthaiah': 'முத்தையா', 'muthiah': 'முத்தையா', 'muthukrishnan': 'முத்துகிருஷ்ணன்', 'muthupandi': 'முத்துப்பாண்டி', 'muthulakshmi': 'முத்துலட்சுமி', 'muthumani': 'முத்துமணி', 'muthumari': 'முத்துமாரி', 'muthuraj': 'முத்துராஜ்', 'muthuraman': 'முத்துராமன்', 'muthuselvi': 'முத்துச்செல்வி', 'muthulingam': 'முத்துலிங்கம்', 'madhan': 'மதன்', 'madhavan': 'மாதவன்', 'mahesh': 'மகேஷ்', 'maheswaran': 'மகேஸ்வரன்', 'maheshwaran': 'மகேஸ்வரன்', 'maheswari': 'மகேஸ்வரி', 'maheshwari': 'மகேஸ்வரி', 'mahendran': 'மகேந்திரன்', 'mahalingam': 'மகாலிங்கம்', 'mahalakshmi': 'மகாலட்சுமி', 'mahadevan': 'மகாதேவன்', 'maha': 'மகா', 'mathi': 'மதி', 'mathivanan': 'மதிவாணன்', 'mathiyalagan': 'மதியழகன்', 'mathiazhagan': 'மதியழகன்', 'mathan': 'மதன்', 'mohan': 'மோகன்', 'mohanraj': 'மோகன்ராஜ்', 'mohana': 'மோகனா', 'mohanasundaram': 'மோகனசுந்தரம்', 'mohankumar': 'மோகன்குமார்', 'mohanavel': 'மோகனவேல்', 'manoharan': 'மனோகரன்', 'manohar': 'மனோகர்', 'mari': 'மாரி', 'mariappan': 'மாரியப்பன்', 'marimuthu': 'மாரிமுத்து', 'mariyappan': 'மாரியப்பன்', 'mariyammal': 'மாரியம்மாள்', 'mariammal': 'மாரியம்மாள்', 'marudhu': 'மருது', 'maruthu': 'மருது', 'maruthamuthu': 'மருதமுத்து', 'marudhamuthu': 'மருதமுத்து', 'maran': 'மாறன்', 'mayilsamy': 'மயில்சாமி', 'mayil': 'மயில்', 'mayilvaganan': 'மயில்வாகனன்', 'mayilvahanan': 'மயில்வாகனன்', 'minnal': 'மின்னல்', 'mookan': 'மூக்கன்', 'mookkan': 'மூக்கன்', 'moorthy': 'மூர்த்தி', 'murthy': 'மூர்த்தி', 'moorthi': 'மூர்த்தி', 'murali': 'முரளி', 'muralidharan': 'முரளிதரன்', 'muniyappan': 'முனியப்பன்', 'muniappan': 'முனியப்பன்', 'muniyandi': 'முனியாண்டி', 'muniandi': 'முனியாண்டி', 'muni': 'முனி', 'munusamy': 'முனுசாமி', 'munuswamy': 'முனுசாமி', 'madasamy': 'மாடசாமி', 'madhesh': 'மதேஷ்', 'mathesh': 'மதேஷ்', 'manjunath': 'மஞ்சுநாத்',
    'natarajan': 'நடராஜன்', 'nataraj': 'நடராஜ்', 'natesan': 'நடேசன்', 'nathan': 'நாதன்', 'narayanan': 'நாராயணன்', 'narayanasamy': 'நாராயணசாமி', 'narayanaswamy': 'நாராயணசாமி', 'narayana': 'நாராயணா', 'nithya': 'நித்யா', 'nithiya': 'நித்யா', 'naveen': 'நவீன்', 'nagaraj': 'நாகராஜ்', 'nagarajan': 'நாகராஜன்', 'nagaraju': 'நாகராஜு', 'naga': 'நாக', 'nag': 'நாக்', 'nagappan': 'நாகப்பன்', 'nagamani': 'நாகமணி', 'nagammal': 'நாகம்மாள்', 'nagendran': 'நாகேந்திரன்', 'nagarathinam': 'நாகரத்தினம்', 'nallusamy': 'நல்லுசாமி', 'nalluswamy': 'நல்லுசாமி', 'nallasamy': 'நல்லசாமி', 'nallappan': 'நல்லப்பன்', 'nallathambi': 'நல்லத்தம்பி', 'nandhakumar': 'நந்தகுமார்', 'nandakumar': 'நந்தகுமார்', 'nandhini': 'நந்தினி', 'nandini': 'நந்தினி', 'nandhan': 'நந்தன்', 'nanjappan': 'நஞ்சப்பன்', 'nanjundan': 'நஞ்சுண்டன்', 'neelakandan': 'நீலகண்டன்', 'neelamegam': 'நீலமேகம்', 'nesamani': 'நேசமணி', 'nirmal': 'நிர்மல்', 'nithish': 'நிதிஷ்',
    'palanisamy': 'பழனிசாமி', 'palaniswamy': 'பழனிசாமி', 'palani': 'பழனி', 'pazhani': 'பழனி', 'palanivel': 'பழனிவேல்', 'palanivelu': 'பழனிவேலு', 'palanikumar': 'பழனிக்குமார்', 'palanimuthu': 'பழனிமுத்து', 'palaniammal': 'பழனியம்மாள்', 'palaniyammal': 'பழனியம்மாள்', 'palanichamy': 'பழனிச்சாமி', 'palaniandi': 'பழனியாண்டி', 'palaniyandi': 'பழனியாண்டி', 'prakash': 'பிரகாஷ்', 'prakasam': 'பிரகாசம்', 'prabhu': 'பிரபு', 'prabu': 'பிரபு', 'prabhakaran': 'பிரபாகரன்', 'prabakaran': 'பிரபாகரன்', 'pradeep': 'பிரதீப்', 'prasanth': 'பிரசாந்த்', 'prasath': 'பிரசாத்', 'prasad': 'பிரசாத்', 'pandian': 'பாண்டியன்', 'pandiyan': 'பாண்டியன்', 'pandi': 'பாண்டி', 'pandidurai': 'பாண்டித்துரை', 'pandiarajan': 'பாண்டியராஜன்', 'pandiyarajan': 'பாண்டியராஜன்', 'periyasamy': 'பெரியசாமி', 'periasamy': 'பெரியசாமி', 'periyannan': 'பெரியண்ணன்', 'periyakaruppan': 'பெரியகருப்பன்', 'periya': 'பெரிய', 'ponnusamy': 'பொன்னுசாமி', 'ponnuswamy': 'பொன்னுசாமி', 'ponnan': 'பொன்னன்', 'ponnu': 'பொன்னு', 'ponnusami': 'பொன்னுசாமி', 'ponnambalam': 'பொன்னம்பலம்', 'ponraj': 'பொன்ராஜ்', 'ponnurangam': 'பொன்னுரங்கம்', 'ponmudi': 'பொன்முடி', 'paul': 'பால்', 'perumal': 'பெருமாள்', 'perumalsamy': 'பெருமாள்சாமி', 'perumalu': 'பெருமாளு', 'pachaiyappan': 'பச்சையப்பன்', 'pachaiappan': 'பச்சையப்பன்', 'pachaimuthu': 'பச்சைமுத்து', 'pachaiyammal': 'பச்சையம்மாள்', 'pachaiammal': 'பச்சையம்மாள்', 'pachai': 'பச்சை', 'palanikumaran': 'பழனிக்குமரன்', 'parthiban': 'பார்த்திபன்', 'parthipan': 'பார்த்திபன்', 'parthasarathy': 'பார்த்தசாரதி', 'pattusamy': 'பட்டுசாமி', 'pattu': 'பட்டு', 'paramasivam': 'பரமசிவம்', 'paramasivan': 'பரமசிவன்', 'paramanandham': 'பரமானந்தம்', 'parameswaran': 'பரமேஸ்வரன்', 'parameshwaran': 'பரமேஸ்வரன்', 'parameswari': 'பரமேஸ்வரி', 'pavithra': 'பவித்ரா', 'pichaimuthu': 'பிச்சைமுத்து', 'pichai': 'பிச்சை', 'pitchai': 'பிச்சை', 'pitchaimuthu': 'பிச்சைமுத்து', 'poomalai': 'பூமாலை', 'poovarasan': 'பூவரசன்', 'poovan': 'பூவன்', 'poovai': 'பூவை', 'pugazhendhi': 'புகழேந்தி', 'pugalendhi': 'புகழேந்தி', 'punniyamoorthy': 'புண்ணியமூர்த்தி', 'periyathambi': 'பெரியத்தம்பி', 'palanikumar': 'பழனிக்குமார்',
    'raghu': 'ரகு', 'rahul': 'ராகுல்', 'raj': 'ராஜ்', 'raja': 'ராஜா', 'rajan': 'ராஜன்', 'rajasekaran': 'ராஜசேகரன்', 'rajasekar': 'ராஜசேகர்', 'rajendran': 'ராஜேந்திரன்', 'rajendiran': 'ராஜேந்திரன்', 'rajesh': 'ராஜேஷ்', 'raju': 'ராஜு', 'ram': 'ராம்', 'raman': 'ராமன்', 'rama': 'ராமா', 'ramasamy': 'ராமசாமி', 'ramaswamy': 'ராமசாமி', 'ramesh': 'ரமேஷ்', 'ramachandran': 'ராமச்சந்திரன்', 'ramakrishnan': 'ராமகிருஷ்ணன்', 'ramalingam': 'ராமலிங்கம்', 'ramamoorthy': 'ராமமூர்த்தி', 'ramamurthy': 'ராமமூர்த்தி', 'ramu': 'ராமு', 'ramar': 'ராமர்', 'ramaiah': 'ராமையா', 'ramaiya': 'ராமையா', 'ramya': 'ரம்யா', 'ranganathan': 'ரங்கநாதன்', 'rangasamy': 'ரங்கசாமி', 'rangaswamy': 'ரங்கசாமி', 'rengasamy': 'ரெங்கசாமி', 'rengaswamy': 'ரெங்கசாமி', 'ranga': 'ரங்கா', 'rangan': 'ரங்கன்', 'rengan': 'ரெங்கன்', 'ravi': 'ரவி', 'ravichandran': 'ரவிச்சந்திரன்', 'ravikumar': 'ரவிக்குமார்', 'ravindran': 'ரவீந்திரன்', 'raveendran': 'ரவீந்திரன்', 'radha': 'ராதா', 'radhakrishnan': 'ராதாகிருஷ்ணன்', 'rajalakshmi': 'ராஜலட்சுமி', 'rajeswari': 'ராஜேஸ்வரி', 'rajeshwari': 'ராஜேஸ்வரி', 'rathinam': 'ரத்தினம்', 'rathinasamy': 'ரத்தினசாமி', 'rathinavel': 'ரத்தினவேல்', 'rathina': 'ரத்தின', 'rajmohan': 'ராஜ்மோகன்', 'rajkumar': 'ராஜ்குமார்', 'rajkumari': 'ராஜ்குமாரி', 'rajagopal': 'ராஜகோபால்', 'rajamani': 'ராஜமணி', 'rajamanickam': 'ராஜமாணிக்கம்', 'rajangam': 'ராஜாங்கம்', 'rajaram': 'ராஜாராம்', 'rajaraman': 'ராஜாராமன்', 'rajapandi': 'ராஜபாண்டி', 'rasu': 'ராசு', 'rasappan': 'ராசப்பன்', 'rasathi': 'ராசாத்தி', 'rathi': 'ரதி', 'rajini': 'ரஜினி', 'rajinikanth': 'ரஜினிகாந்த்', 'rani': 'ராணி', 'rahman': 'ரகுமான்', 'rahim': 'ரகீம்',
    'sabari': 'சபரி', 'sachin': 'சச்சின்', 'sakthivel': 'சக்திவேல்', 'sakthi': 'சக்தி', 'shakthi': 'சக்தி', 'sakthikumar': 'சக்திக்குமார்', 'samy': 'சாமி', 'sami': 'சாமி', 'swamy': 'சாமி', 'swami': 'சுவாமி', 'swaminathan': 'சுவாமிநாதன்', 'sampath': 'சம்பத்', 'sampathkumar': 'சம்பத்குமார்', 'sankar': 'சங்கர்', 'shankar': 'சங்கர்', 'sankaran': 'சங்கரன்', 'shankaran': 'சங்கரன்', 'santhosh': 'சந்தோஷ்', 'santhoshkumar': 'சந்தோஷ்குமார்', 'saravanan': 'சரவணன்', 'saravana': 'சரவணா', 'saravanakumar': 'சரவணக்குமார்', 'sasi': 'சசி', 'sasikumar': 'சசிக்குமார்', 'sasikala': 'சசிகலா', 'sathish': 'சதீஷ்', 'satish': 'சதீஷ்', 'sathishkumar': 'சதீஷ்குமார்', 'sathya': 'சத்யா', 'sathiya': 'சத்யா', 'sathyamoorthy': 'சத்தியமூர்த்தி', 'sathiyamoorthy': 'சத்தியமூர்த்தி', 'sathyaraj': 'சத்யராஜ்', 'sathiyaraj': 'சத்யராஜ்', 'sathyanarayanan': 'சத்யநாராயணன்', 'sathyaseelan': 'சத்தியசீலன்', 'sekar': 'சேகர்', 'sekaran': 'சேகரன்', 'sekhar': 'சேகர்', 'selvam': 'செல்வம்', 'selvan': 'செல்வன்', 'selvaraj': 'செல்வராஜ்', 'selvarajan': 'செல்வராஜன்', 'selvaraju': 'செல்வராஜு', 'selvakumar': 'செல்வக்குமார்', 'selvamani': 'செல்வமணி', 'selvi': 'செல்வி', 'selvy': 'செல்வி', 'selvarani': 'செல்வராணி', 'selvanayagam': 'செல்வநாயகம்', 'selvamuthu': 'செல்வமுத்து', 'selvakumari': 'செல்வக்குமாரி', 'senthil': 'செந்தில்', 'senthilkumar': 'செந்தில்குமார்', 'senthilvel': 'செந்தில்வேல்', 'senthilnathan': 'செந்தில்நாதன்', 'senthilvelan': 'செந்தில்வேலன்', 'senthamarai': 'செந்தாமரை', 'sengodan': 'செங்கோடன்', 'sengottaiyan': 'செங்கோட்டையன்', 'sengottuvel': 'செங்கோட்டுவேல்', 'sengottuvelu': 'செங்கோட்டுவேலு', 'sengottayan': 'செங்கோட்டையன்', 'sellappan': 'செல்லப்பன்', 'sellamuthu': 'செல்லமுத்து', 'sellam': 'செல்லம்', 'sellammal': 'செல்லம்மாள்', 'sellathurai': 'செல்லத்துரை', 'sellathambi': 'செல்லத்தம்பி', 'sellaiyan': 'செல்லையன்', 'sellakumar': 'செல்லக்குமார்', 'sennimalai': 'சென்னிமலை', 'shanmugam': 'சண்முகம்', 'shanmugham': 'சண்முகம்', 'sanmugam': 'சண்முகம்', 'shanmugavel': 'சண்முகவேல்', 'shanmugasundaram': 'சண்முகசுந்தரம்', 'shanmuga': 'சண்முக', 'shanmugavadivu': 'சண்முகவடிவு', 'shanmugapriya': 'சண்முகப்பிரியா', 'siva': 'சிவா', 'shiva': 'சிவா', 'sivakumar': 'சிவகுமார்', 'sivaraman': 'சிவராமன்', 'sivaraj': 'சிவராஜ்', 'sivasamy': 'சிவசாமி', 'sivasankar': 'சிவசங்கர்', 'sivasankaran': 'சிவசங்கரன்', 'sivalingam': 'சிவலிங்கம்', 'sivanandham': 'சிவானந்தம்', 'sivanandam': 'சிவானந்தம்', 'sivagami': 'சிவகாமி', 'sivagurunathan': 'சிவகுருநாதன்', 'sivakami': 'சிவகாமி', 'sivan': 'சிவன்', 'sivaprakasam': 'சிவபிரகாசம்', 'sivaprakash': 'சிவபிரகாஷ்', 'sivanesan': 'சிவநேசன்', 'sivasubramanian': 'சிவசுப்பிரமணியன்', 'sivasubramani': 'சிவசுப்பிரமணி', 'sivamani': 'சிவமணி', 'sivakumari': 'சிவகுமாரி', 'subramani': 'சுப்பிரமணி', 'subramanian': 'சுப்பிரமணியன்', 'subramaniam': 'சுப்பிரமணியம்', 'subramaniyan': 'சுப்பிரமணியன்', 'subbu': 'சுப்பு', 'subbaiyan': 'சுப்பையன்', 'subbaiah': 'சுப்பையா', 'subbiah': 'சுப்பையா', 'subban': 'சுப்பன்', 'subbulakshmi': 'சுப்புலட்சுமி', 'subburaj': 'சுப்புராஜ்', 'sudhakar': 'சுதாகர்', 'sudhagar': 'சுதாகர்', 'sundaram': 'சுந்தரம்', 'sundar': 'சுந்தர்', 'sundaramoorthy': 'சுந்தரமூர்த்தி', 'sundaramurthy': 'சுந்தரமூர்த்தி', 'sundararajan': 'சுந்தரராஜன்', 'sundararaj': 'சுந்தரராஜ்', 'sundari': 'சுந்தரி', 'sundaravel': 'சுந்தரவேல்', 'suresh': 'சுரேஷ்', 'sureshkumar': 'சுரேஷ்குமார்', 'surya': 'சூர்யா', 'suriya': 'சூர்யா', 'suriyakumar': 'சூர்யகுமார்', 'sudalaimuthu': 'சுடலைமுத்து', 'sudalai': 'சுடலை', 'srinivasan': 'ஸ்ரீனிவாசன்', 'sreenivasan': 'ஸ்ரீனிவாசன்', 'sridhar': 'ஸ்ரீதர்', 'sri': 'ஸ்ரீ', 'shri': 'ஸ்ரீ', 'sriram': 'ஸ்ரீராம்', 'srikanth': 'ஸ்ரீகாந்த்', 'sadasivam': 'சதாசிவம்', 'sadhasivam': 'சதாசிவம்', 'sadaiyan': 'சடையன்', 'sadayan': 'சடையன்', 'sadaiyandi': 'சடையாண்டி', 'saminathan': 'சாமிநாதன்', 'samikannu': 'சாமிக்கண்ணு', 'samiappan': 'சாமியப்பன்', 'samiyappan': 'சாமியப்பன்', 'samidurai': 'சாமித்துரை', 'samuel': 'சாமுவேல்', 'sam': 'சாம்', 'sanjay': 'சஞ்சய்', 'sanjai': 'சஞ்சய்', 'sangeetha': 'சங்கீதா', 'sangili': 'சங்கிலி', 'seenivasan': 'சீனிவாசன்', 'seeni': 'சீனி', 'seenu': 'சீனு', 'seetharaman': 'சீதாராமன்', 'seetha': 'சீதா', 'sita': 'சீதா', 'seethalakshmi': 'சீதாலட்சுமி', 'sekaran': 'சேகரன்', 'seran': 'சேரன்', 'sethu': 'சேது', 'sethupathi': 'சேதுபதி', 'sethuraman': 'சேதுராமன்', 'sethumadhavan': 'சேதுமாதவன்', 'shankari': 'சங்கரி', 'sankari': 'சங்கரி', 'shobana': 'சோபனா', 'sobana': 'சோபனா', 'sivasakthi': 'சிவசக்தி', 'solaimalai': 'சோலைமலை', 'solai': 'சோலை', 'soundar': 'சௌந்தர்', 'soundarrajan': 'சௌந்தரராஜன்', 'soundararajan': 'சௌந்தரராஜன்', 'soundarapandian': 'சௌந்தரபாண்டியன்', 'sowmya': 'சௌம்யா', 'soumya': 'சௌம்யா', 'stephen': 'ஸ்டீபன்', 'stalin': 'ஸ்டாலின்', 'susai': 'சூசை', 'susaimanickam': 'சூசைமாணிக்கம்',
    'thangam': 'தங்கம்', 'thangadurai': 'தங்கத்துரை', 'thangavel': 'தங்கவேல்', 'thangavelu': 'தங்கவேலு', 'thangarasu': 'தங்கராசு', 'thangaraj': 'தங்கராஜ்', 'thangarajan': 'தங்கராஜன்', 'thangaraju': 'தங்கராஜு', 'thangamani': 'தங்கமணி', 'thangamuthu': 'தங்கமுத்து', 'thangammal': 'தங்கம்மாள்', 'thangappan': 'தங்கப்பன்', 'thangapandi': 'தங்கப்பாண்டி', 'thangapandian': 'தங்கப்பாண்டியன்', 'thangaiyan': 'தங்கையன்', 'thangaiah': 'தங்கையா', 'thanga': 'தங்க', 'thangamalai': 'தங்கமலை', 'thangamariappan': 'தங்கமாரியப்பன்', 'thangavelan': 'தங்கவேலன்', 'thirumoorthi': 'திருமூர்த்தி', 'thirumoorthy': 'திருமூர்த்தி', 'thirumurthy': 'திருமூர்த்தி', 'thirumalai': 'திருமலை', 'thirumal': 'திருமால்', 'thirumalaisamy': 'திருமலைசாமி', 'thirunavukkarasu': 'திருநாவுக்கரசு', 'thirunavukarasu': 'திருநாவுக்கரசு', 'thiru': 'திரு', 'thiruvenkatam': 'திருவேங்கடம்', 'thiruppathi': 'திருப்பதி', 'thirupathi': 'திருப்பதி', 'thirupathy': 'திருப்பதி', 'thirugnanam': 'திருஞானம்', 'thirugnanasambandam': 'திருஞானசம்பந்தம்', 'thyagarajan': 'தியாகராஜன்', 'thiyagarajan': 'தியாகராஜன்', 'thiagarajan': 'தியாகராஜன்', 'thyagaraj': 'தியாகராஜ்', 'thiyagu': 'தியாகு', 'thenmozhi': 'தேன்மொழி', 'thendral': 'தென்றல்', 'thilagavathi': 'திலகவதி', 'thilagavathy': 'திலகவதி', 'thilagam': 'திலகம்', 'thilaga': 'திலகா', 'tamil': 'தமிழ்', 'tamilselvan': 'தமிழ்ச்செல்வன்', 'thamilselvan': 'தமிழ்ச்செல்வன்', 'tamilselvi': 'தமிழ்ச்செல்வி', 'thamilselvi': 'தமிழ்ச்செல்வி', 'tamilarasan': 'தமிழரசன்', 'thamilarasan': 'தமிழரசன்', 'tamilarasi': 'தமிழரசி', 'thamilarasi': 'தமிழரசி', 'thamizharasi': 'தமிழரசி', 'thamizh': 'தமிழ்', 'thamizhselvan': 'தமிழ்ச்செல்வன்', 'tamilmani': 'தமிழ்மணி', 'thamilmani': 'தமிழ்மணி', 'thamilvanan': 'தமிழ்வாணன்', 'tamilvanan': 'தமிழ்வாணன்', 'thanikachalam': 'தணிகாசலம்', 'thanigachalam': 'தணிகாசலம்', 'thanigaivel': 'தணிகைவேல்', 'thangavadivel': 'தங்கவடிவேல்', 'thamotharan': 'தாமோதரன்', 'thamodharan': 'தாமோதரன்', 'thavamani': 'தவமணி', 'thavasi': 'தவசி', 'thevar': 'தேவர்', 'thomas': 'தாமஸ்', 'thulasi': 'துளசி', 'thulasimani': 'துளசிமணி', 'thulasiraman': 'துளசிராமன்', 'thirumangai': 'திருமங்கை',
    'umashankar': 'உமாசங்கர்', 'uma': 'உமா', 'umamaheswari': 'உமாமகேஸ்வரி', 'umapathi': 'உமாபதி', 'umapathy': 'உமாபதி', 'udhayakumar': 'உதயகுமார்', 'udayakumar': 'உதயகுமார்', 'udhay': 'உதய்', 'uday': 'உதய்', 'udhaya': 'உதயா', 'udaya': 'உதயா', 'udhayasuriyan': 'உதயசூரியன்', 'usha': 'உஷா', 'usharani': 'உஷாராணி',
    'vadivel': 'வடிவேல்', 'vadivelu': 'வடிவேலு', 'vadivelan': 'வடிவேலன்', 'vadivu': 'வடிவு', 'vadivukkarasi': 'வடிவுக்கரசி', 'varadharajan': 'வரதராஜன்', 'varadarajan': 'வரதராஜன்', 'varadhan': 'வரதன்', 'vasanth': 'வசந்த்', 'vasanthi': 'வசந்தி', 'vasantha': 'வசந்தா', 'vasanthakumar': 'வசந்தகுமார்', 'vasudevan': 'வாசுதேவன்', 'vasu': 'வாசு', 'vasuki': 'வாசுகி', 'vasugi': 'வாசுகி', 'veeran': 'வீரன்', 'veerasamy': 'வீராசாமி', 'veeraswamy': 'வீராசாமி', 'veera': 'வீரா', 'veerappan': 'வீரப்பன்', 'veeramani': 'வீரமணி', 'veeraiyan': 'வீரையன்', 'veerakumar': 'வீரகுமார்', 'veerabahu': 'வீரபாகு', 'veeraraghavan': 'வீரராகவன்', 'veeramuthu': 'வீரமுத்து', 'vel': 'வேல்', 'velu': 'வேலு', 'velan': 'வேலன்', 'velmurugan': 'வேல்முருகன்', 'velusamy': 'வேலுசாமி', 'veluswamy': 'வேலுசாமி', 'velayutham': 'வேலாயுதம்', 'velayudham': 'வேலாயுதம்', 'velayudam': 'வேலாயுதம்', 'velappan': 'வேலப்பன்', 'velammal': 'வேலம்மாள்', 'velavan': 'வேலவன்', 'vellaisamy': 'வெள்ளைசாமி', 'vellaiswamy': 'வெள்ளைசாமி', 'vellai': 'வெள்ளை', 'vellaiyan': 'வெள்ளையன்', 'vellaiammal': 'வெள்ளையம்மாள்', 'vellaiyammal': 'வெள்ளையம்மாள்', 'vellingiri': 'வெள்ளிங்கிரி', 'vengatesan': 'வெங்கடேசன்', 'venkat': 'வெங்கட்', 'venkatesan': 'வெங்கடேசன்', 'venkatesh': 'வெங்கடேஷ்', 'venkatraman': 'வெங்கட்ராமன்', 'venkataraman': 'வெங்கட்ராமன்', 'venkatachalam': 'வெங்கடாசலம்', 'venkatachalapathy': 'வெங்கடாசலபதி', 'venkatesa': 'வெங்கடேச', 'venkatesaperumal': 'வெங்கடேசபெருமாள்', 'venkatajalapathy': 'வெங்கடாஜலபதி', 'venu': 'வேணு', 'venugopal': 'வேணுகோபால்', 'vijay': 'விஜய்', 'vijaya': 'விஜயா', 'vijayakumar': 'விஜயகுமார்', 'vijayan': 'விஜயன்', 'vijayalakshmi': 'விஜயலட்சுமி', 'vijayaraj': 'விஜயராஜ்', 'vijayaraghavan': 'விஜயராகவன்', 'vijayarani': 'விஜயராணி', 'vijayasree': 'விஜயஸ்ரீ', 'vijayashanthi': 'விஜயசாந்தி', 'vignesh': 'விக்னேஷ்', 'vigneshwaran': 'விக்னேஸ்வரன்', 'vigneswaran': 'விக்னேஸ்வரன்', 'viji': 'விஜி', 'vimal': 'விமல்', 'vimala': 'விமலா', 'vinoth': 'வினோத்', 'vinothkumar': 'வினோத்குமார்', 'vinodh': 'வினோத்', 'vinod': 'வினோத்', 'vinu': 'வினு', 'vivek': 'விவேக்', 'vishnu': 'விஷ்ணு', 'viswanathan': 'விஸ்வநாதன்', 'vishwanathan': 'விஸ்வநாதன்', 'vaishnavi': 'வைஷ்ணவி', 'vandana': 'வந்தனா', 'valli': 'வள்ளி', 'valliammal': 'வள்ளியம்மாள்', 'valliyammal': 'வள்ளியம்மாள்', 'valarmathi': 'வளர்மதி', 'vanitha': 'வனிதா', 'vani': 'வாணி', 'vanaja': 'வனஜா', 'varalakshmi': 'வரலட்சுமி', 'vairam': 'வைரம்', 'vairamuthu': 'வைரமுத்து', 'vaiyapuri': 'வையாபுரி', 'vasagam': 'வாசகம்', 'velmani': 'வேல்மணி', 'vennila': 'வெண்ணிலா', 'vetrivel': 'வெற்றிவேல்', 'vetri': 'வெற்றி', 'vetriselvan': 'வெற்றிச்செல்வன்', 'vetriselvi': 'வெற்றிச்செல்வி', 'venmani': 'வெண்மணி',
    'yadav': 'யாதவ்', 'yuvan': 'யுவன்', 'yuvaraj': 'யுவராஜ்', 'yuvarani': 'யுவராணி', 'yesu': 'யேசு', 'yesudas': 'யேசுதாஸ்', 'yogesh': 'யோகேஷ்', 'yogeswaran': 'யோகேஸ்வரன்', 'yoga': 'யோகா', 'yogalakshmi': 'யோகலட்சுமி', 'yasodha': 'யசோதா', 'yasotha': 'யசோதா', 'yasodhai': 'யசோதை', 'yasodaji': 'யசோதா',
    // ---- female names ----
    'anitha': 'அனிதா', 'anita': 'அனிதா', 'ambika': 'அம்பிகா', 'amala': 'அமலா', 'anusuya': 'அனுசுயா', 'anusiya': 'அனுசியா', 'anu': 'அனு', 'anjali': 'அஞ்சலி', 'anjalai': 'அஞ்சலை', 'anjala': 'அஞ்சலா', 'anjammal': 'அஞ்சம்மாள்', 'amsavalli': 'அம்சவள்ளி', 'amsa': 'அம்சா', 'amudha': 'அமுதா', 'amutha': 'அமுதா', 'amudhavalli': 'அமுதவள்ளி', 'anandhi': 'ஆனந்தி', 'anandi': 'ஆனந்தி', 'angammal': 'அங்கம்மாள்', 'annakili': 'அன்னக்கிளி', 'annalakshmi': 'அன்னலட்சுமி', 'annam': 'அன்னம்', 'annammal': 'அன்னம்மாள்', 'anbukarasi': 'அன்புக்கரசி', 'anbarasi': 'அன்பரசி', 'arockiamary': 'அரோக்கியமேரி', 'arokiamary': 'அரோக்கியமேரி', 'arukkani': 'அருக்காணி', 'asha': 'ஆஷா', 'aruna': 'அருணா', 'arunadevi': 'அருணாதேவி', 'archana': 'அர்ச்சனா', 'agila': 'அகிலா', 'akila': 'அகிலா', 'akilandeswari': 'அகிலாண்டேஸ்வரி', 'alamelu': 'அலமேலு', 'alagammal': 'அழகம்மாள்', 'azhagammal': 'அழகம்மாள்', 'alamelumangai': 'அலமேலுமங்கை', 'angayarkanni': 'அங்கயற்கண்ணி', 'anjugam': 'அஞ்சுகம்', 'abirami': 'அபிராமி', 'ammu': 'அம்மு', 'ammani': 'அம்மணி', 'ammasi': 'அம்மாசி',
    'bhavani': 'பவானி', 'bavani': 'பவானி', 'banu': 'பானு', 'banumathi': 'பானுமதி', 'bhanumathi': 'பானுமதி', 'bhagya': 'பாக்யா', 'bhagyalakshmi': 'பாக்யலட்சுமி', 'bhuvana': 'புவனா', 'bhuvaneswari': 'புவனேஸ்வரி', 'buvaneswari': 'புவனேஸ்வரி', 'bhuvaneshwari': 'புவனேஸ்வரி', 'brindha': 'பிருந்தா', 'brinda': 'பிருந்தா',
    'chitrakala': 'சித்ரகலா', 'chitradevi': 'சித்ராதேவி', 'chithradevi': 'சித்ராதேவி', 'chinnammal': 'சின்னம்மாள்', 'chinnaponnu': 'சின்னப்பொண்ணு', 'chinnapillai': 'சின்னப்பிள்ளை', 'chandrakala': 'சந்திரகலா', 'chandrika': 'சந்திரிகா', 'chellammal': 'செல்லம்மாள்', 'chellamma': 'செல்லம்மா', 'chinnakannu': 'சின்னக்கண்ணு', 'chellathai': 'செல்லத்தாய்',
    'devi': 'தேவி', 'deepa': 'தீபா', 'deepika': 'தீபிகா', 'divya': 'திவ்யா', 'dhivya': 'திவ்யா', 'devika': 'தேவிகா', 'dhanalakshmi': 'தனலட்சுமி', 'dhanam': 'தனம்', 'dhanammal': 'தனம்மாள்', 'dhanabakiyam': 'தனபாக்கியம்', 'dhanabagyam': 'தனபாக்கியம்', 'dhanalatchumi': 'தனலட்சுமி', 'dhanapakkiyam': 'தனபாக்கியம்', 'durga': 'துர்கா', 'durgadevi': 'துர்காதேவி', 'dhanavathi': 'தனவதி', 'dhanasri': 'தனஸ்ரீ',
    'eswari': 'ஈஸ்வரி', 'easwari': 'ஈஸ்வரி', 'elizabeth': 'எலிசபெத்', 'elakkiya': 'இலக்கியா', 'ilakkiya': 'இலக்கியா', 'ezhilarasi': 'எழிலரசி', 'ellammal': 'எல்லம்மாள்',
    'geetha': 'கீதா', 'gita': 'கீதா', 'geeta': 'கீதா', 'gomathi': 'கோமதி', 'gomathy': 'கோமதி', 'gowri': 'கௌரி', 'gouri': 'கௌரி', 'gayathri': 'காயத்ரி', 'gayatri': 'காயத்ரி', 'girija': 'கிரிஜா', 'ganga': 'கங்கா', 'gangadevi': 'கங்காதேவி', 'gandhimathi': 'காந்திமதி', 'gnanambal': 'ஞானாம்பாள்', 'gnanasoundari': 'ஞானசௌந்தரி', 'gowsalya': 'கௌசல்யா', 'gunavathi': 'குணவதி', 'gunasundari': 'குணசுந்தரி',
    'hema': 'ஹேமா', 'hemalatha': 'ஹேமலதா', 'hemavathi': 'ஹேமாவதி',
    'indira': 'இந்திரா', 'indhira': 'இந்திரா', 'indrani': 'இந்திராணி', 'indhumathi': 'இந்துமதி', 'indumathi': 'இந்துமதி', 'indhu': 'இந்து', 'indu': 'இந்து', 'ilavarasi': 'இளவரசி', 'isakkiammal': 'இசக்கியம்மாள்',
    'jaya': 'ஜெயா', 'jayalakshmi': 'ஜெயலட்சுமி', 'jayanthi': 'ஜெயந்தி', 'jothi': 'ஜோதி', 'jothika': 'ஜோதிகா', 'janaki': 'ஜானகி', 'jansi': 'ஜான்சி', 'jamuna': 'ஜமுனா', 'jegadeeswari': 'ஜெகதீஸ்வரி', 'jagadeeswari': 'ஜெகதீஸ்வரி', 'jeevitha': 'ஜீவிதா', 'jenifer': 'ஜெனிபர்', 'jothilakshmi': 'ஜோதிலட்சுமி', 'jayamani': 'ஜெயமணி', 'jayarani': 'ஜெயராணி',
    'kalpana': 'கல்பனா', 'kamala': 'கமலா', 'kamalam': 'கமலம்', 'kamalambal': 'கமலாம்பாள்', 'kamalaveni': 'கமலவேணி', 'kamatchi': 'காமாட்சி', 'kamakshi': 'காமாட்சி', 'kamachi': 'காமாட்சி', 'kanmani': 'கண்மணி', 'kanchana': 'காஞ்சனா', 'kanaka': 'கனகா', 'kanagavalli': 'கனகவள்ளி', 'kanagammal': 'கனகம்மாள்', 'kannagi': 'கண்ணகி', 'kannaki': 'கண்ணகி', 'kannammal': 'கண்ணம்மாள்', 'kanniyammal': 'கன்னியம்மாள்', 'kanniammal': 'கன்னியம்மாள்', 'karpagam': 'கற்பகம்', 'karpagavalli': 'கற்பகவள்ளி', 'karpagavalli': 'கற்பகவள்ளி', 'kasthuri': 'கஸ்தூரி', 'kasturi': 'கஸ்தூரி', 'kaliyammal': 'காளியம்மாள்', 'kaliammal': 'காளியம்மாள்', 'kalyani': 'கல்யாணி', 'kalaimagal': 'கலைமகள்', 'kalavathi': 'கலாவதி', 'kanagalakshmi': 'கனகலட்சுமி', 'karuppayee': 'கருப்பாயி', 'karuppayi': 'கருப்பாயி', 'karuppammal': 'கருப்பம்மாள்', 'kavya': 'காவ்யா', 'kavitha': 'கவிதா', 'kaveri': 'காவேரி', 'kavery': 'காவேரி', 'keerthana': 'கீர்த்தனா', 'keerthi': 'கீர்த்தி', 'kiruba': 'கிருபா', 'kripa': 'கிருபா', 'kokilavani': 'கோகிலவாணி', 'komala': 'கோமளா', 'komalavalli': 'கோமளவள்ளி', 'kowsalya': 'கௌசல்யா', 'krishnammal': 'கிருஷ்ணம்மாள்', 'kumudha': 'குமுதா', 'kumutha': 'குமுதா', 'kuppammal': 'குப்பம்மாள்', 'kuzhali': 'குழலி', 'kanniga': 'கன்னிகா', 'kannika': 'கன்னிகா',
    'latha': 'லதா', 'lalitha': 'லலிதா', 'leela': 'லீலா', 'leelavathi': 'லீலாவதி', 'lavanya': 'லாவண்யா', 'lakshmipriya': 'லட்சுமிப்பிரியா', 'logeswari': 'லோகேஸ்வரி', 'logambal': 'லோகாம்பாள்',
    'meena': 'மீனா', 'meenakshi': 'மீனாட்சி', 'meenatchi': 'மீனாட்சி', 'meenal': 'மீனாள்', 'malathi': 'மாலதி', 'mala': 'மாலா', 'malar': 'மலர்', 'malarkodi': 'மலர்க்கொடி', 'malarvizhi': 'மலர்விழி', 'malliga': 'மல்லிகா', 'mallika': 'மல்லிகா', 'manjula': 'மஞ்சுளா', 'manju': 'மஞ்சு', 'mangai': 'மங்கை', 'mangalam': 'மங்களம்', 'mangayarkarasi': 'மங்கையர்க்கரசி', 'mahalakshmi': 'மகாலட்சுமி', 'mariyayee': 'மாரியாயி', 'mariayee': 'மாரியாயி', 'maragatham': 'மரகதம்', 'maragathavalli': 'மரகதவள்ளி', 'megala': 'மேகலா', 'mekala': 'மேகலா', 'menaka': 'மேனகா', 'muniyammal': 'முனியம்மாள்', 'muniammal': 'முனியம்மாள்', 'muthammal': 'முத்தம்மாள்', 'muthulakshmi': 'முத்துலட்சுமி', 'muthumariammal': 'முத்துமாரியம்மாள்', 'muthumalar': 'முத்துமலர்', 'muthupechi': 'முத்துப்பேச்சி', 'muthuselvi': 'முத்துச்செல்வி', 'muthulaxmi': 'முத்துலட்சுமி', 'mythili': 'மைதிலி', 'mythily': 'மைதிலி', 'mohana': 'மோகனா', 'mohanapriya': 'மோகனப்பிரியா', 'mohanambal': 'மோகனாம்பாள்', 'monisha': 'மோனிஷா', 'muthumani': 'முத்துமணி',
    'nagalakshmi': 'நாகலட்சுமி', 'nagavalli': 'நாகவள்ளி', 'nallammal': 'நல்லம்மாள்', 'nalini': 'நளினி', 'nandhini': 'நந்தினி', 'natchiyar': 'நாச்சியார்', 'nachiyar': 'நாச்சியார்', 'neela': 'நீலா', 'neelavathi': 'நீலாவதி', 'nirmala': 'நிர்மலா', 'nithya': 'நித்யா', 'nithyakalyani': 'நித்யகல்யாணி', 'nisha': 'நிஷா', 'nila': 'நிலா', 'nagajothi': 'நாகஜோதி', 'nagarani': 'நாகராணி',
    'padma': 'பத்மா', 'padmavathi': 'பத்மாவதி', 'padmini': 'பத்மினி', 'pappa': 'பாப்பா', 'pappathi': 'பாப்பாத்தி', 'pappathy': 'பாப்பாத்தி', 'pappal': 'பாப்பாள்', 'pappammal': 'பாப்பம்மாள்', 'parvathi': 'பார்வதி', 'parvathy': 'பார்வதி', 'parimala': 'பரிமளா', 'parameswari': 'பரமேஸ்வரி', 'pavithra': 'பவித்ரா', 'pechiammal': 'பேச்சியம்மாள்', 'pechi': 'பேச்சி', 'periyakka': 'பெரியக்கா', 'periyammal': 'பெரியம்மாள்', 'ponni': 'பொன்னி', 'ponnammal': 'பொன்னம்மாள்', 'ponnu': 'பொன்னு', 'ponnuthai': 'பொன்னுத்தாய்', 'ponnuthayee': 'பொன்னுத்தாயி', 'ponnammal': 'பொன்னம்மாள்', 'poongodi': 'பூங்கொடி', 'poonkodi': 'பூங்கொடி', 'poongothai': 'பூங்கோதை', 'poongavanam': 'பூங்காவனம்', 'poornima': 'பூர்ணிமா', 'poorani': 'பூரணி', 'pooranam': 'பூரணம்', 'pushpa': 'புஷ்பா', 'pushpam': 'புஷ்பம்', 'pushpalatha': 'புஷ்பலதா', 'pushpavalli': 'புஷ்பவள்ளி', 'punitha': 'புனிதா', 'punithavathi': 'புனிதவதி', 'prema': 'பிரேமா', 'premalatha': 'பிரேமலதா', 'premavathi': 'பிரேமாவதி', 'priya': 'பிரியா', 'priyanka': 'பிரியங்கா', 'priyadharshini': 'பிரியதர்ஷினி', 'pavai': 'பாவை', 'pandiammal': 'பாண்டியம்மாள்', 'pandiyammal': 'பாண்டியம்மாள்', 'panchavarnam': 'பஞ்சவர்ணம்', 'pankajam': 'பங்கஜம்', 'papathi': 'பாப்பாத்தி', 'pattammal': 'பட்டம்மாள்', 'pavunammal': 'பவுனம்மாள்', 'pavunu': 'பவுனு', 'pavun': 'பவுன்', 'porkodi': 'பொற்கொடி', 'porselvi': 'பொற்செல்வி',
    'radha': 'ராதா', 'radhika': 'ராதிகா', 'rajammal': 'ராஜம்மாள்', 'rajam': 'ராஜம்', 'rajathi': 'ராஜாத்தி', 'rajakumari': 'ராஜகுமாரி', 'rajarajeswari': 'ராஜராஜேஸ்வரி', 'rajeswari': 'ராஜேஸ்வரி', 'rajalakshmi': 'ராஜலட்சுமி', 'rakkammal': 'ராக்கம்மாள்', 'rakku': 'ராக்கு', 'ramani': 'ரமணி', 'ramalakshmi': 'ராமலட்சுமி', 'ramayee': 'ராமாயி', 'ramuthai': 'ராமுத்தாய்', 'rani': 'ராணி', 'ranjitha': 'ரஞ்சிதா', 'ranjani': 'ரஞ்சனி', 'rasammal': 'ராசம்மாள்', 'rasathi': 'ராசாத்தி', 'rathinam': 'ரத்தினம்', 'rathinammal': 'ரத்தினம்மாள்', 'rathna': 'ரத்னா', 'ratna': 'ரத்னா', 'renuka': 'ரேணுகா', 'renugadevi': 'ரேணுகாதேவி', 'revathi': 'ரேவதி', 'revathy': 'ரேவதி', 'rekha': 'ரேகா', 'rukmani': 'ருக்மணி', 'rukmini': 'ருக்மிணி', 'rukku': 'ருக்கு', 'rukkumani': 'ருக்குமணி', 'rosy': 'ரோஸி', 'roja': 'ரோஜா', 'ramya': 'ரம்யா',
    'saroja': 'சரோஜா', 'sarojini': 'சரோஜினி', 'saraswathi': 'சரஸ்வதி', 'saraswathy': 'சரஸ்வதி', 'sarasu': 'சரசு', 'saranya': 'சரண்யா', 'sarala': 'சரளா', 'sarada': 'சாரதா', 'saratha': 'சாரதா', 'sarathambal': 'சாரதாம்பாள்', 'sasikala': 'சசிகலா', 'sathiyavani': 'சத்தியவாணி', 'sathyavani': 'சத்தியவாணி', 'sathiyavathi': 'சத்தியவதி', 'sathya': 'சத்யா', 'sathiyapriya': 'சத்யப்பிரியா', 'savithri': 'சாவித்திரி', 'savithiri': 'சாவித்திரி', 'savitha': 'சவிதா', 'seetha': 'சீதா', 'seethalakshmi': 'சீதாலட்சுமி', 'selvi': 'செல்வி', 'selvarani': 'செல்வராணி', 'selvambal': 'செல்வாம்பாள்', 'selvakumari': 'செல்வக்குமாரி', 'sellammal': 'செல்லம்மாள்', 'sellathai': 'செல்லத்தாய்', 'senthamarai': 'செந்தாமரை', 'sengeni': 'செங்கேணி', 'shanthi': 'சாந்தி', 'santhi': 'சாந்தி', 'shanthakumari': 'சாந்தகுமாரி', 'shantha': 'சாந்தா', 'santha': 'சாந்தா', 'shakila': 'ஷகிலா', 'shakeela': 'ஷகீலா', 'sharmila': 'ஷர்மிளா', 'sarmila': 'சர்மிளா', 'shobana': 'சோபனா', 'shenbagam': 'செண்பகம்', 'senbagam': 'செண்பகம்', 'shenbagavalli': 'செண்பகவள்ளி', 'sindhu': 'சிந்து', 'sinthu': 'சிந்து', 'sivagami': 'சிவகாமி', 'sivakami': 'சிவகாமி', 'sivasankari': 'சிவசங்கரி', 'sobana': 'சோபனா', 'soundarya': 'சௌந்தர்யா', 'soundari': 'சௌந்தரி', 'sowmiya': 'சௌமியா', 'sridevi': 'ஸ்ரீதேவி', 'sreedevi': 'ஸ்ரீதேவி', 'sripriya': 'ஸ்ரீபிரியா', 'subbulakshmi': 'சுப்புலட்சுமி', 'subbammal': 'சுப்பம்மாள்', 'sudha': 'சுதா', 'sugantha': 'சுகந்தா', 'suganthi': 'சுகந்தி', 'sugandhi': 'சுகந்தி', 'suguna': 'சுகுணா', 'sujatha': 'சுஜாதா', 'suja': 'சுஜா', 'sumathi': 'சுமதி', 'sumathy': 'சுமதி', 'sumithra': 'சுமித்ரா', 'sundari': 'சுந்தரி', 'sundarambal': 'சுந்தராம்பாள்', 'sunitha': 'சுனிதா', 'suseela': 'சுசீலா', 'susila': 'சுசீலா', 'sushila': 'சுசீலா', 'swarnalatha': 'சுவர்ணலதா', 'swarnam': 'சுவர்ணம்', 'saral': 'சரள்', 'sarala': 'சரளா', 'sangeetha': 'சங்கீதா', 'sangeeta': 'சங்கீதா', 'saratha': 'சாரதா', 'sathiyabama': 'சத்தியபாமா', 'sathyabama': 'சத்தியபாமா', 'sathyapriya': 'சத்யப்பிரியா', 'sasirekha': 'சசிரேகா', 'seeniyammal': 'சீனியம்மாள்',
    'thangam': 'தங்கம்', 'thangammal': 'தங்கம்மாள்', 'thangamani': 'தங்கமணி', 'thamarai': 'தாமரை', 'thamaraiselvi': 'தாமரைச்செல்வி', 'thayammal': 'தாயம்மாள்', 'thaiyalnayagi': 'தையல்நாயகி', 'thayalnayaki': 'தையல்நாயகி', 'thavamani': 'தவமணி', 'thenmozhi': 'தேன்மொழி', 'thilagavathi': 'திலகவதி', 'thulasi': 'துளசி',
    'umadevi': 'உமாதேவி', 'umamaheswari': 'உமாமகேஸ்வரி', 'uma': 'உமா', 'unnamalai': 'உண்ணாமலை',
    'valli': 'வள்ளி', 'valliammal': 'வள்ளியம்மாள்', 'valarmathi': 'வளர்மதி', 'vanitha': 'வனிதா', 'vasanthi': 'வசந்தி', 'vasantha': 'வசந்தா', 'vasanthamani': 'வசந்தமணி', 'vedhavalli': 'வேதவள்ளி', 'vedavalli': 'வேதவள்ளி', 'veeralakshmi': 'வீரலட்சுமி', 'vellaiyammal': 'வெள்ளையம்மாள்', 'vennila': 'வெண்ணிலா', 'vijayalakshmi': 'விஜயலட்சுமி', 'vijaya': 'விஜயா', 'vimala': 'விமலா', 'vinitha': 'வினிதா', 'visalakshi': 'விசாலாட்சி', 'visalatchi': 'விசாலாட்சி', 'vasuki': 'வாசுகி',
    'yasodha': 'யசோதா',
    // ---- caste / honorific suffixes ----
    'pillai': 'பிள்ளை', 'gounder': 'கவுண்டர்', 'goundar': 'கவுண்டர்', 'kounder': 'கவுண்டர்', 'chettiar': 'செட்டியார்', 'chetty': 'செட்டி', 'mudaliar': 'முதலியார்', 'naicker': 'நாயக்கர்', 'nayakar': 'நாயக்கர்', 'naidu': 'நாயுடு', 'nadar': 'நாடார்', 'thevar': 'தேவர்', 'reddy': 'ரெட்டி', 'reddiar': 'ரெட்டியார்', 'iyer': 'ஐயர்', 'iyengar': 'ஐயங்கார்', 'ammal': 'அம்மாள்', 'ammaal': 'அம்மாள்', 'amma': 'அம்மா', 'appa': 'அப்பா', 'ayya': 'ஐயா', 'aiya': 'ஐயா', 'akka': 'அக்கா', 'thambi': 'தம்பி', 'thai': 'தாய்', 'thayee': 'தாயி', 'ayee': 'ஆயி', 'aachi': 'ஆச்சி', 'achi': 'ஆச்சி', 'kannu': 'கண்ணு', 'mary': 'மேரி', 'antony': 'அந்தோணி', 'anthony': 'அந்தோணி', 'arokiasamy': 'அரோக்கியசாமி', 'arockiasamy': 'அரோக்கியசாமி', 'arokiadass': 'அரோக்கியதாஸ்', 'sebastian': 'செபாஸ்டியன்', 'xavier': 'சேவியர்', 'michael': 'மைக்கேல்', 'peter': 'பீட்டர்', 'james': 'ஜேம்ஸ்', 'david': 'டேவிட்', 'daniel': 'டேனியல்', 'abdul': 'அப்துல்', 'mohamed': 'முகமது', 'mohammed': 'முகமது', 'muhammad': 'முகமது', 'ahamed': 'அகமது', 'ahmed': 'அகமது', 'ibrahim': 'இப்ராகிம்', 'ismail': 'இஸ்மாயில்', 'kadar': 'காதர்', 'basha': 'பாஷா', 'fathima': 'பாத்திமா', 'fatima': 'பாத்திமா', 'ayesha': 'ஆயிஷா', 'jainulabdeen': 'ஜைனுலாப்தீன்', 'sheik': 'ஷேக்', 'sheikh': 'ஷேக்', 'syed': 'சையத்', 'rasool': 'ரசூல்',
    // ---- address words ----
    'address': 'முகவரி', 'anna': 'அண்ணா', 'annadanapatti': 'அன்னதானப்பட்டி', 'attaiyampatti': 'அட்டையம்பட்டி', 'attayampatti': 'அட்டையம்பட்டி', 'attur': 'ஆத்தூர்', 'asokapuram': 'அசோகபுரம்', 'ayothiapattinam': 'அயோத்தியாபட்டினம்', 'ammapet': 'அம்மாபேட்டை', 'ammapettai': 'அம்மாபேட்டை', 'andipatti': 'ஆண்டிபட்டி', 'agraharam': 'அக்ரஹாரம்', 'alampalayam': 'ஆலம்பாளையம்', 'alamarathur': 'ஆலமரத்தூர்', 'anaipalayam': 'ஆனைப்பாளையம்', 'ariyur': 'அரியூர்', 'athanur': 'ஆத்தனூர்', 'avinashi': 'அவிநாசி',
    'bazaar': 'பஜார்', 'bazar': 'பஜார்', 'belukur': 'பேளூர்', 'belukurichi': 'பேளூக்குறிச்சி', 'block': 'பிரிவு', 'bharathiyar': 'பாரதியார்', 'bharathiar': 'பாரதியார்', 'bhavani': 'பவானி', 'bodinayakkanur': 'போடிநாயக்கனூர்', 'bommidi': 'பொம்மிடி', 'bangalore': 'பெங்களூரு', 'bengaluru': 'பெங்களூரு',
    'chennai': 'சென்னை', 'coimbatore': 'கோயம்புத்தூர்', 'colony': 'காலனி', 'cross': 'குறுக்கு', 'cut': 'குறுக்கு', 'complex': 'வளாகம்', 'city': 'நகரம்', 'chinnasalem': 'சின்னசேலம்', 'chinnappampatti': 'சின்னப்பம்பட்டி', 'church': 'தேவாலயம்',
    'district': 'மாவட்டம்', 'dist': 'மாவட்டம்', 'dt': 'மாவட்டம்', 'dharapuram': 'தாராபுரம்', 'div': 'பிரிவு', 'dharmapuri': 'தர்மபுரி', 'dindigul': 'திண்டுக்கல்', 'devanankurichi': 'தேவனாங்குறிச்சி', 'door': 'கதவு',
    'edappadi': 'இடப்பாடி', 'elampillai': 'இளம்பிள்ளை', 'erode': 'ஈரோடு', 'extension': 'விரிவாக்கம்', 'extn': 'விரிவாக்கம்', 'east': 'கிழக்கு', 'erumapalayam': 'எருமாப்பாளையம்', 'elachipalayam': 'இளச்சிப்பாளையம்',
    'gandhi': 'காந்தி', 'gate': 'கேட்', 'gurusamypalayam': 'குருசாமிபாளையம்', 'gh': 'அரசு மருத்துவமனை', 'gate': 'கேட்', 'garden': 'தோட்டம்', 'gramam': 'கிராமம்', 'gudalur': 'கூடலூர்',
    'hospital': 'மருத்துவமனை', 'house': 'இல்லம்', 'hsg': 'வீட்டுவசதி', 'high': 'மேல்', 'home': 'இல்லம்', 'hills': 'மலை',
    'illam': 'இல்லம்', 'idappadi': 'இடப்பாடி',
    'junction': 'சந்திப்பு', 'jn': 'சந்திப்பு', 'jedarpalayam': 'ஜேடர்பாளையம்',
    'kamaraj': 'காமராஜ்', 'kamarajar': 'காமராஜர்', 'kannankurichi': 'கன்னங்குறிச்சி', 'kabilarmalai': 'கபிலர்மலை', 'karur': 'கரூர்', 'kongu': 'கொங்கு', 'kottai': 'கோட்டை', 'kovil': 'கோவில்', 'kurukku': 'குறுக்கு', 'kollimalai': 'கொல்லிமலை', 'kollihills': 'கொல்லிமலை', 'koil': 'கோவில்', 'kurichi': 'குறிச்சி', 'kadu': 'காடு', 'kalangani': 'களங்கணி', 'kalappanaickenpatti': 'களப்பநாயக்கன்பட்டி', 'kalapanaickenpatti': 'களப்பநாயக்கன்பட்டி', 'komarapalayam': 'கோமாரபாளையம்', 'kumarapalayam': 'கோமாரபாளையம்', 'konganapuram': 'கொங்கணாபுரம்', 'kondalampatti': 'கொண்டலாம்பட்டி', 'kottapalayam': 'கோட்டப்பாளையம்', 'kodi': 'கொடி', 'kalvi': 'கல்வி', 'karungalpalayam': 'கருங்கல்பாளையம்', 'kannurpatti': 'கண்ணூர்பட்டி', 'kavundampalayam': 'கவுண்டம்பாளையம்', 'kavuntampalayam': 'கவுண்டம்பாளையம்', 'kandampalayam': 'கண்டம்பாளையம்', 'kolathur': 'கோளத்தூர்', 'kumbakonam': 'கும்பகோணம்', 'koneripatti': 'கோனேரிப்பட்டி', 'kuppandapalayam': 'குப்பாண்டபாளையம்', 'kulathur': 'குளத்தூர்',
    'lane': 'சந்து', 'layout': 'லேஅவுட்', 'line': 'லைன்',
    'main': 'மெயின்', 'mainroad': 'மெயின் ரோடு', 'mallasamudram': 'மல்லசமுத்திரம்', 'mavelipalayam': 'மாவெலிபாளையம்', 'mohanur': 'மோகனூர்', 'muncipal': 'நகராட்சி', 'municipal': 'நகராட்சி', 'market': 'சந்தை', 'mettur': 'மேட்டூர்', 'mettupatti': 'மேட்டுப்பட்டி', 'mettupalayam': 'மேட்டுப்பாளையம்', 'mettu': 'மேட்டு', 'malai': 'மலை', 'mangalapuram': 'மங்களபுரம்', 'mangalam': 'மங்கலம்', 'muthugapatti': 'முத்துகாப்பட்டி', 'madurai': 'மதுரை', 'mount': 'மலை', 'melur': 'மேலூர்', 'mel': 'மேல்', 'melapalayam': 'மேலப்பாளையம்', 'minnampalli': 'மின்னாம்பள்ளி', 'mudalaipatti': 'முதலைப்பட்டி', 'mangalapatti': 'மங்களப்பட்டி',
    'nagar': 'நகர்', 'nallipalayam': 'நல்லிபாளையம்', 'nh': 'தேசிய நெடுஞ்சாலை', 'new': 'புது', 'no': 'எண்', 'north': 'வடக்கு', 'namagiripettai': 'நாமகிரிப்பேட்டை', 'namagiripet': 'நாமகிரிப்பேட்டை', 'nadupatti': 'நடுப்பட்டி', 'nadu': 'நடு', 'nagarasampatti': 'நாகராசம்பட்டி', 'nangavalli': 'நங்கவள்ளி', 'nallur': 'நல்லூர்',
    'old': 'பழைய', 'omalur': 'ஓமலூர்', 'opp': 'எதிரில்', 'opposite': 'எதிரில்', 'odai': 'ஓடை', 'oor': 'ஊர்',
    'palai': 'பாளையம்', 'palaiym': 'பாளையம்', 'palaiyam': 'பாளையம்', 'palayam': 'பாளையம்', 'paramathi': 'பரமத்தி', 'perumbalur': 'பெரம்பலூர்', 'perambalur': 'பெரம்பலூர்', 'pattanam': 'பட்டினம்', 'patti': 'பட்டி', 'patty': 'பட்டி', 'pettai': 'பேட்டை', 'pet': 'பேட்டை', 'pillaiyar': 'பிள்ளையார்', 'pirivu': 'பிரிவு', 'privu': 'பிரிவு', 'post': 'அஞ்சல்', 'po': 'அஞ்சல்', 'pudur': 'புதூர்', 'puthur': 'புதூர்', 'pudupatti': 'புதுப்பட்டி', 'puthupatti': 'புதுப்பட்டி', 'pudupalayam': 'புதுப்பாளையம்', 'puthupalayam': 'புதுப்பாளையம்', 'pudu': 'புது', 'puthu': 'புது', 'puram': 'புரம்', 'pallipalayam': 'பள்ளிபாளையம்', 'palakkad': 'பாலக்காடு', 'pallapatti': 'பள்ளப்பட்டி', 'pillanallur': 'பிள்ளநல்லூர்', 'pachal': 'பச்சல்', 'pattukottai': 'பட்டுக்கோட்டை', 'puliyampatti': 'புளியம்பட்டி', 'periyapatti': 'பெரியபட்டி', 'periyakoundanpalayam': 'பெரியகவுண்டன்பாளையம்', 'pudukottai': 'புதுக்கோட்டை', 'pudukkottai': 'புதுக்கோட்டை', 'pillaikalathur': 'பிள்ளைக்களத்தூர்',
    'quarter': 'குடியிருப்பு', 'quarters': 'குடியிருப்புகள்', 'qtrs': 'குடியிருப்புகள்',
    'road': 'ரோடு', 'rd': 'ரோடு', 'rajaji': 'ராஜாஜி', 'railway': 'ரயில்வே', 'reddipatty': 'ரெட்டிப்பட்டி', 'reddipatti': 'ரெட்டிப்பட்டி', 'roundana': 'ரவுண்டானா', 'rasipuram': 'இராசிபுரம்', 'r.s': 'ஆர்.எஸ்',
    'salem': 'சேலம்', 'sankagiri': 'சங்ககிரி', 'sankari': 'சங்கரி', 'school': 'பள்ளி', 'shevapet': 'செவ்வாய்ப்பேட்டை', 'street': 'தெரு', 'st': 'தெரு', 'south': 'தெற்கு', 'seelanaickenpatti': 'சீலநாயக்கன்பட்டி', 'sendamangalam': 'சேந்தமங்கலம்', 'senthamangalam': 'சேந்தமங்கலம்', 'sengarai': 'செங்கரை', 'siruvachur': 'சிறுவாச்சூர்', 'sivagiri': 'சிவகிரி', 'sowdapuram': 'சௌடாபுரம்', 'sathiyamangalam': 'சத்தியமங்கலம்', 'sathyamangalam': 'சத்தியமங்கலம்', 'sarkar': 'சர்க்கார்', 'seeragapadi': 'சீரகப்பாடி', 'sankarapuram': 'சங்கராபுரம்', 'sendarapatti': 'சேந்தராப்பட்டி', 'suramangalam': 'சூரமங்கலம்', 'sathipalayam': 'சாத்திப்பாளையம்',
    'tamilnadu': 'தமிழ்நாடு', 'taluk': 'வட்டம்', 'tk': 'வட்டம்', 'thiruchengode': 'திருச்செங்கோடு', 'tiruchengode': 'திருச்செங்கோடு', 'temple': 'கோவில்', 'town': 'நகரம்', 'thiruvalluvar': 'திருவள்ளுவர்', 'textiles': 'டெக்ஸ்டைல்ஸ்', 'theru': 'தெரு', 'thottam': 'தோட்டம்', 'thoppu': 'தோப்பு', 'thidal': 'திடல்', 'thottiyam': 'தொட்டியம்', 'tharamangalam': 'தாரமங்கலம்', 'thammampatti': 'தம்மம்பட்டி', 'thalaivasal': 'தலைவாசல்', 'thedavur': 'தேடவூர்', 'thiruppur': 'திருப்பூர்', 'tiruppur': 'திருப்பூர்', 'tirupur': 'திருப்பூர்', 'trichy': 'திருச்சி', 'tiruchirappalli': 'திருச்சிராப்பள்ளி', 'thuraiyur': 'துறையூர்', 'turaiyur': 'துறையூர்', 'thottipatti': 'தொட்டிப்பட்டி',
    'union': 'ஒன்றியம்', 'ur': 'ஊர்',
    'velur': 'வேலூர்', 'valappady': 'வாழப்பாடி', 'valapady': 'வாழப்பாடி', 'via': 'வழியாக', 'vill': 'கிராமம்', 'village': 'கிராமம்', 'valaham': 'வளாகம்', 'valasu': 'வலசு', 'valavu': 'வளவு', 'vennandur': 'வெண்ணந்தூர்', 'vellore': 'வேலூர்', 'veerapandi': 'வீரபாண்டி', 'vaiyappamalai': 'வையப்பமலை', 'veppadai': 'வெப்படை', 'vazhavanthi': 'வாழவந்தி', 'varagur': 'வரகூர்', 'vadugapatti': 'வடுகப்பட்டி', 'vadakku': 'வடக்கு', 'vadakkumalai': 'வடக்குமலை',
    'ward': 'வார்டு', 'west': 'மேற்கு', 'way': 'வழி', 'weavers': 'நெசவாளர்'
};

// ======================= English -> Tamil transliteration ENGINE (names & addresses) =======================
// For every Latin word:  1) exact dictionary hit (E2T_DICT)   2) compound split into known parts + Tamil sandhi
//                        3) rule-based phonetic engine (long vowels, clusters, gemination, Tamil letter choice)
// Markers used INSIDE Latin strings by the rules (never typed by users):
//   A I U E O = long vowels ஆ ஈ ஊ ஏ ஓ | ĕ ŏ = forced short எ ஒ | N=ண L=ள R=ற S=ஸ T=ட C=single ச | nh = ந

const TA_C = { k: 'க', ng: 'ங', ch: 'ச', C: 'ச', j: 'ஜ', nj: 'ஞ', t: 'ட', T: 'ட', N: 'ண', th: 'த', n: 'ந', nn: 'ன', p: 'ப', m: 'ம', y: 'ய', r: 'ர', R: 'ற', l: 'ல', L: 'ள', zh: 'ழ', v: 'வ', sh: 'ஷ', S: 'ஸ', h: 'ஹ' };
const TA_V_IND = { a: 'அ', aa: 'ஆ', i: 'இ', ii: 'ஈ', u: 'உ', uu: 'ஊ', e: 'எ', ee: 'ஏ', ai: 'ஐ', o: 'ஒ', oo: 'ஓ', au: 'ஔ' };
const TA_V_SIGN = { a: '', aa: 'ா', i: 'ி', ii: 'ீ', u: 'ு', uu: 'ூ', e: 'ெ', ee: 'ே', ai: 'ை', o: 'ொ', oo: 'ோ', au: 'ௌ' };
const PULLI = '்';
const E2T_VOWELS = 'aeiouAEIOUĕŏ';
const e2tIsV = ch => !!ch && E2T_VOWELS.indexOf(ch) >= 0;

// ---- 0) exceptions applied before everything else ----
const E2T_PRE_RULES = [
    [/^saravan/, 'saravaN'], [/^ganes/, 'gaNEs'], [/^dines/, 'dhinEs'], [/^rajini/, 'raJini'], [/^(pichai|pitchai|pichchai)/, 'pichchai'], [/^vetri/, 'veRRi'], [/^thiruchengod/, 'thiruchchengkOd'], [/(yaken|yakan|yakken|yakkan)pat/, 'yakkanpat'], [/^anand/, 'Anandh'], [/^rathin/, 'raththin'], [/pechi/, 'pEchchi'], [/akshi$/, 'ATchi'], [/atchi$/, 'ATchi'], [/kri(?=[a-z])/, 'kiru'], [/^brin/, 'pirun'], [/^sw/, 'suv'], [/^myth/, 'maith'], [/^ash(?=[oO]k)/, 'as']
];
// ---- 1) name endings: [regex, replacement, minLettersBefore(when the word stands alone)] ----
const E2T_SUFFIX_RULES = [
    [/(samy|swamy|sami|swami|saamy|saami)$/, 'saami', 0], [/(chamy|chami)$/, 'chchaami', 3],
    [/kumar$/, 'kumAr', 0], [/kumari$/, 'kumAri', 0], [/raj$/, 'rAj', 0], [/raja$/, 'rAjA', 0], [/rajan$/, 'rAjan', 0], [/raju$/, 'rAju', 0], [/rayan$/, 'rAyan', 0], [/rayar$/, 'rAyar', 0],
    [/nathan$/, 'nAthan', 0], [/nath$/, 'nAth', 0], [/natham$/, 'nAtham', 0], [/vel$/, 'vEl', 0], [/velu$/, 'vElu', 0], [/velan$/, 'vElan', 0], [/(ammal|ammaal|ammaL)$/, 'ammAL', 0], [/mal$/, 'mAL', 3],
    [/valli$/, 'vaLLi', 0], [/(pillai|pillay|pilli)$/, 'piLLai', 0], [/(palli|pally)$/, 'paLLi', 0], [/pallam$/, 'paLLam', 0], [/kulam$/, 'kuLam', 0], [/kalam$/, 'kaLam', 0], [/salai$/, 'sAlai', 0],
    [/eesan$/, 'Isan', 0], [/esan$/, 'Esan', 0], [/eesh$/, 'Ish', 0], [/tish$/, 'thIsh', 0], [/ish$/, 'Ish', 0], [/esh$/, 'Esh', 0], [/(eswari|eshwari|eswary|eshvari|esvari)$/, 'Esvari', 0], [/(eswaran|eshwaran|eshvaran|esvaran)$/, 'Esvaran', 0], [/(eswara|eshwara)$/, 'Esvara', 0], [/(shwar|swar)$/, 'Svar', 0],
    [/(eendran|eendiran)$/, 'Indhiran', 0], [/(endran|endiran|enthiran)$/, 'Endhiran', 0], [/(endhi|enthi)$/, 'Endhi', 0], [/(pal|bal)$/, 'pAl', 2], [/(palan|balan)$/, 'pAlan', 2],
    [/(nayagam|nayakam)$/, 'nAyagam', 0], [/(nayagi|nayaki)$/, 'nAyagi', 0], [/(nayagan|nayakan|naicken|naickan)$/, 'nAyakkan', 0], [/mani$/, 'maNi', 2], [/rani$/, 'rANi', 0], [/vani$/, 'vANi', 0], [/vanan$/, 'vANan', 0], [/veni$/, 'vENi', 0], [/yani$/, 'yANi', 0],
    [/(moorthy|murthy|moorthi|murthi|murthee|moorthee)$/, 'mUrthi', 0], [/(gounder|goundar|kounder|koundar|gowder)$/, 'kavuNdar', 0], [/(chetty|chettiar|chettiyar)$/, 'settiyAr', 0],
    [/appa$/, 'appA', 0], [/amma$/, 'ammA', 0], [/akka$/, 'akkA', 0], [/(ayya|aiya|aiah|aiyah|iah|ayyah)$/, 'aiyA', 0], [/(ayyan|aiyan|iyan)$/, 'aiyan', 0], [/anni$/, 'aNNi', 0],
    [/othai$/, 'Othai', 0], [/([^oO])thai$/, '$1thAy', 2], [/(thayee|thayi|thaai)$/, 'thAyi', 0], [/(ayee|ayi)$/, 'Ayi', 0], [/(thal|thaal)$/, 'ththAL', 2], [/ranam$/, 'raNam', 0], [/rnam$/, 'rNam', 0], [/kannu$/, 'kaNNu', 0], [/kanni$/, 'kaNNi', 0],
    [/(dhurai|durai|thurai)$/, 'ththurai', 2], [/(andi|aandi)$/, 'ANdi', 3], [/(vathi|vathy|vathee)$/, 'vathi', 0], [/(ur|oor)$/, 'Ur', 0], [/(nar|naar)$/, 'nAr', 0],
    [/(sekar|sekhar)$/, 'sEkar', 2], [/(sekaran|sekharan)$/, 'sEkaran', 0], [/akar$/, 'Akar', 2], [/akaran$/, 'Akaran', 2], [/dasan$/, 'thAsan', 0], [/manan$/, 'maNan', 0], [/(vaganan|vahanan)$/, 'vAkanan', 0],
    [/(gami|kami)$/, 'kAmi', 0], [/vasan$/, 'vAsan', 0], [/kash$/, 'kAsh', 0], [/bash$/, 'bAsh', 0], [/kasam$/, 'kAsam', 0], [/shanth$/, 'shAnth', 0], [/kanth$/, 'kAnth', 0], [/(sath|sad|sadh)$/, 'sAth', 3], [/deep$/, 'thIp', 0],
    [/ok$/, 'Ok', 0], [/osh$/, 'Osh', 0], [/(oth|odh|od)$/, 'Oth', 0], [/ek$/, 'Ek', 0], [/eer$/, 'Ir', 0], [/([aiu])ta$/, '$1thA', 0], [/([aeiou])t$/, '$1th', 0],
    [/(achalam|achala)$/, 'ACalam', 0], [/(kodi|godi)$/, 'kŏdi', 0], [/podi$/, 'pŏdi', 0], [/(kili|kizhi)$/, 'kiLi', 0], [/(pandi|pandy)$/, 'pANdi', 0], [/(pandian|pandiyan)$/, 'pANdiyan', 0], [/dayalan$/, 'thayALan', 0],
    [/(lingam|lingham)$/, 'lingam', 0], [/(dass|das|dhas)$/, 'dAS', 2], [/(kutty|kutti)$/, 'kutti', 2], [/thambi$/, 'ththambi', 2], [/(nidhi|nithi)$/, 'nidhi', 0], [/kannan$/, 'kkaNNan', 2], [/(kalai|kalay)$/, 'kalai', 2], [/(arasu|arasan|arasi)$/, '$1', 0], [/pani$/, 'pANi', 0], [/(nithi|nidhi)$/, 'nidhi', 0], [/(mala|malai)$/, '$1', 0], [/thi$/, 'thi', 0], [/eelan$/, 'Ilan', 0], [/(ambaram)$/, 'Ambaram', 0], [/(nandham|nantham|nandam)$/, 'nandham', 0], [/ammai$/, 'ammai', 0], [/(mayi|mai)$/, 'mAyi', 2], [/maran$/, 'mARan', 2], [/(akkal|akal)$/, 'akkAL', 3], [/kanna$/, 'kaNNA', 2], [/una$/, 'uNA', 2], [/oorani$/, 'UraNi', 0], [/magal$/, 'magaL', 0], [/ambal$/, 'AmbAL', 2], [/(bakiyam|bagyam|bhagyam|pakkiyam|bakkiyam|bagiyam|bakkyam)$/, 'pAkkiyam', 0], [/(iyar|iar)$/, 'iyAr', 2], [/(sthuri|sturi)$/, 'SthUri', 0], [/mila$/, 'miLA', 2]
];
function e2tApplySuffix(x, isTail) {
    for (let k = 0; k < E2T_SUFFIX_RULES.length; k++) {
        const r = E2T_SUFFIX_RULES[k], m = r[0].exec(x);
        if (!m) continue;
        if (!isTail && m.index < (r[2] || 0)) continue;
        x = x.slice(0, m.index) + m[0].replace(r[0], r[1]);
    }
    return x;
}
function e2tIsSuffixWord(x) {   // whole piece is a known name-ending
    for (let k = 0; k < E2T_SUFFIX_RULES.length; k++) { const m = E2T_SUFFIX_RULES[k][0].exec(x); if (m && m.index === 0) return true; }
    return false;
}
// ---- 2) word-start / anywhere spelling normalisations ----
const E2T_PREFIX_RULES = [
    [/^raj(?=[aeiouAEIOU])(?!ini)/, 'rAj'], [/^ram(?=[aeiouAEIOU])/, 'rAm'], [/^ras(?=[aeiouAEIOU])/, 'rAs'], [/^rah/, 'rAh'], [/^radh/, 'rAdh'], [/^gna/, 'gnA'], [/^(maha|mahaa)/, 'mahA'], [/^saha/, 'sahA'], [/^(shiva|siva)/, 'siva'], [/^(sri|shri|sree|shree)/, 'srI'],
    [/^kali(?=[ymdpa])/, 'kALi'], [/^vel(?=[aeiouAEIOU])/, 'vEl'], [/^nag(?=[aeiouAEIOU])/, 'nAg'], [/^kasi/, 'kAsi'], [/^mari/, 'mAri'], [/^vasu/, 'vAsu'], [/^mani(?=[a-zA-Z])/, 'maNi'], [/^kanni/, 'kaNNi'], [/^kann(?=[au])/, 'kaNN'],
    [/^muthu/, 'muththu'], [/^muth(?=[aeiouAEIOU])/, 'muthth'], [/^(bala|baala)/, 'bAla'], [/^balaj/, 'bAlAj'], [/^(krish|kris)/, 'kirush'], [/^(ratna|rathina|rathna)/, 'raththina'], [/^and(?=[aiu])/, 'ANd'], [/^iyy(?=[aeiouAEIOU])/, 'aiy'], [/^iy(?=[aeiouAEIOU])/, 'aiy'], [/^ayy(?=[aA]?[pmdkn])/, 'aiy'],
    [/^(ila|ela)(?![kv])/, 'iLa'], [/^ilav/, 'iLav'], [/^vell/, 'veLL'], [/^(palani|pazhani)/, 'pazhani'], [/^(tamil|thamil|thamizh|tamizh)/, 'thamizh'], [/alag(?=[aeiouAEIOU])/, 'azhag'], [/^arul/, 'aruL'], [/^arumug/, 'ARumug'], [/^anna(?=[dm])/, 'aNNA'], [/^ashok/, 'asOk'],
    [/^(kolandai|kulandai|kulanthai|kolanthai|kuzhandai|kuzhanthai|kulanthe)/, 'kuzhandhai'], [/^karth/, 'kArth'], [/^parth/, 'pArth'], [/^kamar/, 'kAmar'], [/^(madhav|madav)/, 'mAthav'], [/^naraya/, 'nArAyaN'], [/^jan(?=[ac])/, 'jAn'], [/^mural/, 'muraL'],
    [/^t(?=[aeiouAEIOU])/, 'th'], [/^d(?=[aeiouAEIOU])/, 'dh'], [/^je(?=[bgn])/, 'jĕ'], [/^esakki/, 'ĕsakki'], [/^peth/, 'pĕth'], [/^ben(?=[aeiouAEIOU])/, 'bĕn'], [/^kod(?=[aeiu])/, 'kŏd'], [/^poth/, 'pŏth'], [/^(jega|jaga)/, 'jĕga'], [/^gun(?=[aeiouAEIOU])/, 'guN'], [/^gan(?=[aeiouAEIOU])(?!ga)/, 'gaN'], [/^karun/, 'karuN'],
    [/^singar/, 'singkAr'], [/^pud(?=[aeiu])/, 'puth'], [/^pudh/, 'puth'], [/^(dei|dey)v/, 'theyv'], [/^sha(?=n[kmt]|kth)/, 'sa'], [/^shob/, 'sOb'], [/^sur(?=[iy])/, 'sUr'], [/^varad/, 'varath'], [/^sadasiv/, 'sathAsiv'], [/^damodar/, 'thAmOthar'], [/^uday/, 'udhay'], [/^(sudha|suda)/, 'suthA'],
    // anywhere
    [/pandi/, 'pANdi'], [/(gound|kound)/, 'kavuNd'], [/(naicken|naickan|naikkan|nayakkan|nayakan)/, 'nAyakkan'], [/(naicker|nayakkar|nayakar)/, 'nAyakkar'], [/nathan(?=[a-z])/, 'nAthan'], [/lakshm/, 'laTchum'], [/laxm/, 'laTchum'], [/(le|la)tchum/, '$1Tchum'],
    [/anan(?=[dt])/, 'Anan'], [/(ond)(?=[aeiouAEIOU])/, 'oNd'], [/kund/, 'kuNd'], [/mund/, 'muNd'], [/thand(?=[aiu])/, 'thaNd'], [/nanjund/, 'nanjuNd'], [/lakand/, 'lakaNd'], [/ann(?=[aeiouAEIOU])/, 'aNN'], [/anm/, 'aNm'], [/kurichi|kuruchi|kurichy/, 'kuRichchi'], [/([a-z])ngh$/, '$1ng'],
    [/ravind/, 'ravInd'], [/(k|g)ott/, '$1Ott'], [/thottam$/, 'thOttam'],
    [/^aravInd/, 'aravind'], [/^(bhar|bar)ath/, 'pArath'], [/^(bhas|bas)k/, 'pASk'], [/^dhandap/, 'thaNdap'], [/^dandap/, 'thaNdap'], [/^(ezhu|elu)malai/, 'Ezhumalai'], [/^(eswar|eshwar)/, 'Isvar'], [/^ekamb/, 'EkAmb'], [/^(ilay|elay)/, 'iLaiy'], [/^(elav|ilav)/, 'iLav'],
    [/^gandh/, 'gAndh'], [/^gopal/, 'gOpAl'], [/^harih/, 'harih'], [/^jaya/, 'jĕya'], [/^jeya/, 'jĕya'], [/^jyo/, 'jO'], [/^jagan+Ath/, 'jĕgannAth'], [/^jeevan/, 'jIvAn'], [/^josep/, 'jOsap'], [/^(kamal|kamalasan)/, 'kamal'], [/^kamalasan/, 'kamalahAsan'], [/^kanaga/, 'kanaga'], [/^kanniy/, 'kanniy'], [/^kath(?=[aA])/, 'kAthth'], [/^kiran$/, 'kiraN'],
    [/^kumaras/, 'kumAras'], [/^lakshman$/, 'latchumaNan'], [/^maran$/, 'mARan'], [/^mad(?=[aA]s)/, 'mAd'], [/^narayana/, 'nArAyaNa'], [/^neelak/, 'nIlak'], [/^nirmal$/, 'nirmal'], [/^pandiy/, 'pANdiy'], [/^perum(?=[aA]l)/, 'perumA'], [/^parth(?=[aA]s)/, 'pArthth'], [/^poomal/, 'pUmAl'], [/^pugal/, 'pugazh'], [/^punniy/, 'puNNiy'],
    [/^ramesh$/, 'ramEsh'], [/^rajang/, 'rAjAng'], [/^rajaram/, 'rAjArAm'], [/^rasathi$/, 'rAsAththi'], [/^rahman$/, 'rakumAn'], [/^rahim$/, 'rakIm'], [/^swami$/, 'suvAmi'], [/^sathiya/, 'saththiya'], [/^sathya(?=[a-z]{3})/, 'saththiya'], [/^senthamar/, 'senthAmar'], [/^subraman/, 'suppiramaN'], [/^sundaram$/, 'sundharam'], [/^sudalai/, 'sudalai'], [/^sriniv/, 'srIniv'], [/^seeniv/, 'sIniv'],
    [/^annadurai/, 'aNNAdhurai'], [/^annadhurai/, 'aNNAdhurai'], [/^ashwin/, 'aSvin'], [/^aditya/, 'Adhithya'], [/^akash/, 'AkAsh'], [/^balaji/, 'bAlAji'], [/^chithira/, 'siththira'], [/^chitra(?=v)/, 'siththira'], [/^damodar/, 'thAmOthar'], [/^dhinakar/, 'dhinakar'], [/^dinakar/, 'dhinakar'], [/^ganesh/, 'gaNEs'], [/^harish$/, 'harish'], [/^kamaraj/, 'kAmarAj'], [/^kalaichel/, 'kalaichchel'],
    [/^kolanji/, 'kŏlanji'], [/^(kolanda|kulanda|kolantha|kulantha)(?=s)/, 'kuzhandhai'], [/kolundu|kozhundu|kolunthu/, 'kkozhundhu'], [/ganapath/, 'gaNapath'], [/vinayag/, 'vinAyag'], [/darsh/, 'tharsh'], [/vidy/, 'vithy'], [/esh(?=[kmpv])/, 'Esh'], [/^pavadai/, 'pAvAdai'], [/^marapp/, 'mArapp'], [/^valli(?=[a-z])/, 'vaLLi'], [/^lechum/, 'latchum'], [/^letchum/, 'latchum'], [/^manikand/, 'maNikaNd'], [/^manimek/, 'maNimEk'], [/^nithiya/, 'nithya'], [/^nithish/, 'nithish'], [/^prasanth/, 'pirasAnth'], [/^suriya$/, 'sUryA'], [/^sudhakar/, 'suthAkar'], [/^kirubakar/, 'kirupAkar'], [/^iyyanar|^iyanar/, 'aiyanAr'], [/^ayyanar/, 'ayyanAr'], [/^ayyav/, 'ayyAv'],
    [/^(arunachal|arunaachal)/, 'aruNAchal'], [/^chatram/, 'saththiram'], [/^puduchatram/, 'puthuchchaththiram'], [/^kaikol/, 'kaikkOL'], [/^mook/, 'mUkk'], [/^(nachi|natchi)muthu/, 'nAchchimuthu'], [/^(picha|pitcha)muthu/, 'pichchaimuthu'], [/^deivanai/, 'theyvAnai'], [/^(karuppa|kuppa|kanna)thal/, '$1Athal'], [/^pavai/, 'pAvai'], [/^pavayee/, 'pAvAyi'],
    [/^thillaikk/, 'thillaikk'], [/^(vishwa|viswa|vishva)/, 'viSva'], [/^balamb/, 'bAlAmb'], [/^vennai/, 'veNNai'], [/^alavai/, 'alavAy'], [/^andagal/, 'ANdagaL'], [/^perumap/, 'perumAp'], [/^puliy(?=[aA])/, 'puLiy'], [/^muthukali/, 'muththukkALi'], [/^thottak/, 'thottakk'], [/^seerap/, 'sIrapp'], [/^sowndarr/, 'sowndharar'],
    [/^manik(?=[ak])/, 'mANikk'], [/^manic/, 'mANic'], [/^pelluku/, 'pellukku'], [/^(podi|bodi)nay/, 'pŏdinAy'], [/^(podi|bodi)naick/, 'pŏdinAyakk'], [/^kuthich/, 'kuththich'], [/^kakkav/, 'kAkkAv'], [/^koner/, 'kOnEr'], [/^thammanay/, 'thammanAy'], [/^singal/, 'singkAL'], [/^rasipur/, 'irAsipur'], [/^namak/, 'nAmak'], [/^pill(?=[aeiy])/, 'piLL'],
    [/^venkat$/, 'vengkat'], [/^kaver/, 'kAvEr'], [/^papp/, 'pApp'], [/^papathi$/, 'pAppAththi'], [/^thay(?=[ae])/, 'thAy'], [/^thamar/, 'thAmar'], [/^(sh|s)anth(?=[ai])/, 'sAnth'], [/^sAnthan/, 'santhAn'], [/^(sh|s)enbag/, 'seNbag'], [/^sujath/, 'sujAth'], [/^su(sh|s)il/, 'susIl'],
    [/^kanch/, 'kAnch'], [/^karpag/, 'kaRpag'], [/^por(?=[ks])/, 'poR'], [/^unnam/, 'uNNAm'], [/^ved(?=[aA])/, 'vEdh'], [/^renu/, 'rENu'], [/^gayath/, 'gAyath'], [/^savith/, 'sAviththi'], [/^(bhav|bav)ani/, 'pavAni'], [/^(bhanu|banu)/, 'pAnu'], [/^(bhag|bag)y/, 'pAkkiy'], [/^abira/, 'apirA'], [/^ammas/, 'ammAs'],
    [/^malath/, 'mAlath'], [/^parvath/, 'pArvath'], [/^rajathi$/, 'rAjAththi'], [/^rakk/, 'rAkk'], [/^ramani$/, 'ramaNi'], [/^sarad|^sarath(?=[aA]$)/, 'sArath'], [/^sarala$/, 'saraLA'], [/^komal/, 'kOmaL'], [/^manjul/, 'manjuL'], [/^parimal/, 'parimaL'], [/^nalini/, 'naLini'], [/^rukmin/, 'rukmiN'], [/^suguna/, 'suguNa'],
    [/^kannig|^kannik/, 'kannik'], [/^kanniy/, 'kanniy'], [/^kanniam/, 'kanniyam'], [/^visal/, 'visAlA'], [/^meena/, 'mIna'], [/^mInal$/, 'mInAL'], [/^lavany/, 'lAvaNy'], [/^kavya/, 'kAvya'], [/^kripa|^kirupa/, 'kirupA'], [/^ammap/, 'ammAp'], [/^attur/, 'AththUr'], [/^athanur/, 'Aththanur'], [/^alam(?=[bp])/, 'Alam'], [/^anaip/, 'Anaip'], [/^avinas/, 'avinAs'], [/^bazar/, 'bajAr'],
    [/^(mudali|mudaly)/, 'muthali'], [/^naidu/, 'nAyudu'], [/^nadar/, 'nAdAr'], [/^nayak/, 'nAyakk'], [/^iyeng/, 'aiyangk'], [/^(antony|anthony)/, 'anthONi'], [/^(arokia|arockia|arogya)/, 'arOkkiya'], [/^(sebast)/, 'sepAst'], [/^xavier/, 'sEviyar'], [/^michael/, 'maikkEl'], [/^peter/, 'pIttar'], [/^james/, 'jEmS'], [/^david/, 'dEvid'], [/^daniel/, 'dEniyal'],
    [/^(mohamed|mohammed|muhammad|mohammad|muhammed)/, 'mukamathu'], [/^(ahamed|ahmed|ahamad)/, 'akamathu'], [/^ibrahim/, 'ipRAkim'], [/^ismail/, 'iSmAyil'], [/^kadar/, 'kAthar'], [/^basha/, 'pAshA'], [/^(fathima|fatima)/, 'pAththimA'], [/^ayesha/, 'AyishA'], [/^sheik/, 'shEk'], [/^rasool/, 'rasUl'], [/^jainul/, 'jainul'], [/^abdul/, 'apthul'], [/^rahman/, 'rakumAn'],
    [/^(jaga|jega)dee/, 'jĕgathI'], [/^jegadee/, 'jĕgathI'], [/^elizab/, 'elisap'], [/^(elakk|ilakk)/, 'ilakk'], [/^geeta$/, 'gIthA'], [/^jenif/, 'jenip'], [/^jansi|^jancy/, 'jAnsi'], [/^hema(?=v)/, 'hEmA'], [/^prema(?=v)/, 'pirEmA'], [/^neela(?=v)/, 'nIlA'], [/^padma(?=v)/, 'pathmA'], [/^leela(?=v)/, 'lIlA'], [/^kamalamb/, 'kamalAmb'], [/^log(?=amb)/, 'lOk'], [/^mohanamb/, 'mOkanAmb'], [/^sundaramb/, 'sundharAmb'], [/^selvamb/, 'selvAmb'], [/^sarathamb/, 'sArathAmb'],
    [/^kamatch|^kamach|^kamaksh/, 'kAmATch'], [/^angayar/, 'angkayaR'], [/^mangayar/, 'mangkaiyaR'], [/^akiland/, 'akilANd'], [/^archan/, 'archchan'], [/^arukk/, 'arukk'], [/^annak/, 'annak'], [/^annal/, 'annal'], [/^annam/, 'annam'], [/^anbuk/, 'anbukk'], [/^sangeet/, 'sangkIth'], [/^dhanab|^dhanap/, 'dhanap']
];

// ---- tokeniser: Latin (with markers) -> [{t:'C',c,dead}|{t:'V',v}] ----
function e2tTokenize(w) {
    const toks = [];
    const push = t => toks.push(t);
    const V = { A: 'aa', I: 'ii', U: 'uu', E: 'ee', O: 'oo' };
    let i = 0;
    while (i < w.length) {
        const ch = w[i], nx = w[i + 1] || '', nx2 = w[i + 2] || '';
        // ---------- vowels ----------
        if (e2tIsV(ch)) {
            let v, len = 1;
            if (V[ch]) v = V[ch];
            else if (ch === 'ĕ') v = 'e!';                      // forced short
            else if (ch === 'ŏ') v = 'o!';
            else {
                const two = ch + nx;
                if (two === 'aa') { v = 'aa'; len = 2; }
                else if (two === 'ai') { v = 'ai'; len = 2; }
                else if (two === 'ay' && nx2 && !e2tIsV(nx2) && nx2 !== 'y') { v = 'ai'; len = 2; }     // "Kaythi"
                else if (two === 'au' || two === 'ou' || (two === 'ow' && nx2 && !e2tIsV(nx2))) { v = 'au'; len = 2; }
                else if (two === 'ee' || two === 'ii' || two === 'ea') { v = 'ii'; len = 2; }
                else if (two === 'ie') { v = (i + 2 >= w.length) ? 'i' : 'ii'; len = 2; }
                else if (two === 'oo' || two === 'uu') { v = 'uu'; len = 2; }
                else if (two === 'ae') { v = 'ee'; len = 2; }
                else if (two === 'oa') { v = 'oo'; len = 2; }
                else if (two === 'ei') { push({ t: 'V', v: 'e' }); push({ t: 'C', c: 'y', dead: true }); i += 2; continue; }   // Deivam -> தெய்வம்
                else if (two === 'eu') { push({ t: 'C', c: 'y' }); v = 'uu'; len = 2; }
                else v = ch;
            }
            push({ t: 'V', v }); i += len; continue;
        }
        // ---------- consonants (longest match first) ----------
        const rest = w.slice(i);
        let m;
        const C2 = (a, b, n) => { push({ t: 'C', c: a, dead: true }); push({ t: 'C', c: b }); i += n; };
        if ((m = /^nh/.exec(rest)))                          { push({ t: 'C', c: 'n' }); i += 2; continue; }        // forced ந
        if ((m = /^(ksh|x)/.exec(rest)))                     { C2('k', m[1] === 'x' ? 'S' : 'sh', m[0].length); continue; }
        if ((m = /^ks(?!h)/.exec(rest)))                     { C2('k', 'S', 2); continue; }
        if ((m = /^(chch|cch|tch)/.exec(rest)))              { C2('ch', 'ch', m[0].length); continue; }
        if ((m = /^(nch|nj)/.exec(rest)))                    { C2('nj', 'ch', m[0].length); continue; }
        if ((m = /^(ndr|ndhr|nthr)/.exec(rest)))             { push({ t: 'C', c: 'n', dead: true }); push({ t: 'C', c: 'th' }); push({ t: 'V', v: 'i' }); push({ t: 'C', c: 'r' }); i += m[0].length; continue; }
        if ((m = /^(ndh|nth|nd|nt)/.exec(rest)))             { C2('n', 'th', m[0].length); continue; }
        if ((m = /^Nd/.exec(rest)))                          { C2('N', 't', 2); continue; }
        if ((m = /^(ngk|nkh|ngg|nk|ngh|ng)/.exec(rest))) {
            const atEnd = i + m[0].length >= w.length;
            if (atEnd && (m[1] === 'ng' || m[1] === 'ngh')) { push({ t: 'C', c: 'ng', dead: true }); i += m[0].length; continue; }     // "Sing" -> சிங்
            C2('ng', 'k', m[0].length); continue;
        }
        if ((m = /^Nm/.exec(rest)))                          { C2('N', 'm', 2); continue; }
        if ((m = /^NN/.exec(rest)))                          { C2('N', 'N', 2); continue; }
        if ((m = /^LL/.exec(rest)))                          { C2('L', 'L', 2); continue; }
        if ((m = /^(rth|rdh)/.exec(rest)))                   { push({ t: 'C', c: 'r', dead: true }); C2('th', 'th', 3); continue; }
        if ((m = /^rk(?=[aeiouAEIOU])/.exec(rest)))          { push({ t: 'C', c: 'r', dead: true }); C2('k', 'k', 2); continue; }
        if ((m = /^rpp?(?=[aeiouAEIOU])/.exec(rest)))        { push({ t: 'C', c: 'r', dead: true }); C2('p', 'p', m[0].length); continue; }
        if ((m = /^rn/.exec(rest)))                          { C2('r', 'N', 2); continue; }
        if ((m = /^(kth|kt)/.exec(rest)))                    { C2('k', 'th', m[0].length); continue; }
        if ((m = /^sth/.exec(rest)))                         { C2('S', 'th', 3); continue; }
        if ((m = /^st/.exec(rest)))                          { C2('S', i === 0 ? 't' : 'th', 2); continue; }        // Stalin ஸ்ட, Kasturi ஸ்த
        if ((m = /^(sw|sv)/.exec(rest)))                     { C2('S', 'v', 2); continue; }
        if ((m = /^(shr|sr)/.exec(rest)))                    { C2('S', 'r', m[0].length); continue; }
        if ((m = /^(sm|sn|sk|sp|sl)/.exec(rest)))            { C2('S', m[0][1], 2); continue; }
        if ((m = /^(shm|shn|sht|shp|shk)/.exec(rest)))       { C2('sh', m[0][2] === 'n' ? 'N' : m[0][2], 3); continue; }
        if ((m = /^(pr|br)/.exec(rest)))                     { push({ t: 'C', c: 'p' }); push({ t: 'V', v: 'i' }); push({ t: 'C', c: 'r' }); i += 2; continue; }
        if ((m = /^(kr|gr)/.exec(rest)))                     { push({ t: 'C', c: 'k' }); push({ t: 'V', v: 'i' }); push({ t: 'C', c: 'r' }); i += 2; continue; }
        if ((m = /^(thr|dhr|tr|dr)/.exec(rest)))             { C2('th', 'r', m[0].length); continue; }
        if ((m = /^(thy|dhy|ty|dy)(?=[aeiouAEIOU])/.exec(rest))) { C2('th', 'y', m[0].length); continue; }
        if ((m = /^(tth|thth|ddh|dhdh)/.exec(rest)))         { C2('th', 'th', m[0].length); continue; }
        if ((m = /^(tm|dm|thm|dhm)/.exec(rest)))             { C2('th', 'm', m[0].length); continue; }
        if ((m = /^(tn|dn|thn|dhn)/.exec(rest)))             { C2('th', 'n', m[0].length); continue; }
        if ((m = /^(tv|dv|thv|dhv|tw|dw)/.exec(rest)))       { C2('th', 'v', m[0].length); continue; }
        if ((m = /^(bd|bdh)/.exec(rest)))                    { C2('p', 'th', m[0].length); continue; }
        if ((m = /^(gn|jn)/.exec(rest)))                     { if (i === 0) { push({ t: 'C', c: 'nj' }); } else { C2('k', 'n', 0); } i += 2; continue; }
        if ((m = /^ny/.exec(rest)))                          { C2('N', 'y', 2); continue; }
        if ((m = /^(kk|ck|cc|gg|kg|tt|dd|pp|bb|mm|nn|ll|rr|ss|yy|vv|jj|zz)/.exec(rest))) {
            const map = { kk: 'k', ck: 'k', cc: 'k', gg: 'k', kg: 'k', tt: 't', dd: 't', pp: 'p', bb: 'p', mm: 'm', nn: 'nn', ll: 'l', rr: 'r', ss: 'S', yy: 'y', vv: 'v', jj: 'j', zz: 'j' };
            C2(map[m[0]], map[m[0]], 2); continue;
        }
        if ((m = /^(th|dh|sh|ch|bh|kh|gh|ph|zh|jh|wh)/.exec(rest))) {
            const map = { th: 'th', dh: 'th', sh: 'sh', ch: 'ch', bh: 'p', kh: 'k', gh: 'k', ph: 'p', zh: 'zh', jh: 'j', wh: 'v' };
            const c = map[m[0]];
            if (c === 'ch' && i > 0 && e2tIsV(w[i - 1]) && e2tIsV(nx2) && !/[AIUEO]/.test(w[i - 1])) push({ t: 'C', c: 'ch', dead: true });   // Pachai -> பச்சை
            push({ t: 'C', c }); i += 2; continue;
        }
        // singles
        let c = ch;
        if (c === 'c') c = /[eiy]/.test(nx) ? 'ch' : 'k';
        else if (c === 'q') c = 'k';
        else if (c === 'g') c = 'k';
        else if (c === 'd') c = 't';
        else if (c === 'b') c = 'p';
        else if (c === 'f') c = 'p';
        else if (c === 'w') c = 'v';
        else if (c === 'z') c = 'j';
        else if (c === 'J') c = 'j';
        else if (c === 's') c = 'ch';
        else if (c === 'h') c = (i === 0) ? 'h' : 'k';                                   // Mohan -> மோகன்
        else if (c === 'n') c = (i === 0 || nx === 'A' || nx + nx2 === 'aa') ? 'n' : 'nn';   // initial ந, medial ன, before long ā -> ந (நாதன்)
        else if (c === 'y' && i > 0 && !e2tIsV(w[i - 1]) && !e2tIsV(nx)) { push({ t: 'V', v: 'i' }); i += 1; continue; }   // Murthy -> ி
        if (!TA_C[c]) { i += 1; continue; }
        push({ t: 'C', c }); i += 1;
    }
    return toks;
}

// ---- renderer: tokens -> Tamil. mode 'word' (name end) | 'prefix' (first part of a compound) ----
function e2tRender(toks, mode) {
    let out = '', prevC = false, lastV = null;
    const n = toks.length;
    const openSyl = idx => { const c1 = toks[idx + 1], v2 = toks[idx + 2]; return !!(c1 && c1.t === 'C' && !c1.dead && v2 && v2.t === 'V'); };
    for (let k = 0; k < n; k++) {
        const tk = toks[k];
        if (tk.t === 'C') {
            if (prevC) out += PULLI;
            out += TA_C[tk.c];
            prevC = true; lastV = null;
            if (tk.dead) { out += PULLI; prevC = false; }
            continue;
        }
        let v = tk.v;
        const atEnd = (k === n - 1);
        if (v === 'e!') v = 'e'; else if (v === 'o!') v = 'o';
        else {
            if (v === 'a' && atEnd && mode === 'word' && prevC) v = 'aa';                                        // Latha -> லதா
            if (v === 'e') {
                if (atEnd) {
                    if (mode === 'word' && prevC && k >= 3) { const pc = toks[k - 1]; if (pc.c === 't') v = 'u'; else continue; }   // Erode -> ஈரோடு, Bose -> போஸ்
                    else v = 'ee';
                }
                else { const c1 = toks[k + 1]; if (openSyl(k) && !/^(r|y|zh|L|R)$/.test(c1.c)) v = 'ee'; }   // Devi -> தேவி
            }
            if (v === 'o' && (atEnd || openSyl(k))) v = 'oo';                                                  // Gopal -> கோபால்
        }
        if (prevC) out += TA_V_SIGN[v];
        else if (lastV !== null) out += (/^(i|ii|e|ee|ai)$/.test(lastV) ? 'ய' : 'வ') + TA_V_SIGN[v];         // glide between vowels
        else out += TA_V_IND[v];
        prevC = false; lastV = v;
    }
    if (prevC) out += PULLI;
    return out;
}

function e2tEngine(w, mode, isTail) {
    let x = w;
    E2T_PRE_RULES.forEach(r => { x = x.replace(r[0], r[1]); });
    if (mode === 'word') x = e2tApplySuffix(x, !!isTail);
    E2T_PREFIX_RULES.forEach(r => { x = x.replace(r[0], r[1]); });
    x = x.replace(/aA/g, 'A').replace(/eE/g, 'I').replace(/iI/g, 'I').replace(/oO/g, 'O').replace(/uU/g, 'U').replace(/eI/g, 'I');
    if (mode === 'prefix') x = x.replace(/ng$/, 'ngk');
    return e2tRender(e2tTokenize(x), mode);
}

// ---- compound handling ----
const E2T_KEEP_LONG = /^(ayya|aiya|amma|appa|akka|anna|maha|radha|seetha|sita|uma|karuna|sada|saha|thatha|kala|leela|nila|meena|durga|ganga|renuga|renuka|amsa|pooja|puja|ambika|usha|asha)$/;
const E2T_ADJ_PREFIX = /^(chinna|sinna|periya|nalla|thanga|sella|chella|karuppa|pazhaya|palaya|puthiya|valla|vella|kula)$/;
const E2T_DOUBLE_AFTER_IU = /^(kumar|kumari|kumaran|kannan|kannu|kanni|priya|pandi|pandian|pandiyan|patti|patty|palayam|palaiyam|kulam|kovil|koil|kottai|kodi|thambi|thurai|durai|dhurai|selv|pillai|pillay|kutty|kutti|kuttan|ponnu|thai|thal|kili|pattinam|thottam|theru|kadai|kudi|chandran|chandiran|chettiar|chetty|kali|thevar|pettai|koundar|gounder|kounder)/;
const E2T_DOUBLE_AFTER_A = /^(durai|thurai|dhurai|thambi|kannu|kannan|kanni|patti|patty|pillai|pillay|priya|thai|thal|kutty|kutti|kodi|ponnu|chandran|chandiran|thevar|kottai|thottam)/;

function e2tDictPart(latin, mode, rLat) {
    let t = E2T_DICT[latin];
    if (t === undefined) return null;
    if (mode === 'prefix' && t.endsWith('ா') && /a$/.test(latin) && !/aa$/.test(latin)) {
        if (!(E2T_KEEP_LONG.test(latin) || /^dev/.test(rLat || ''))) t = t.slice(0, -1);                          // Prema+latha -> பிரேமலதா ; Chitra+devi -> சித்ராதேவி
    }
    return t;
}

// join two Tamil parts with sandhi; lLat/rLat = Latin spellings of the parts
function e2tJoin(a, b, lLat, rLat) {
    if (!a) return b; if (!b) return a;
    const IND = { 'அ': '', 'ஆ': 'ா', 'இ': 'ி', 'ஈ': 'ீ', 'உ': 'ு', 'ஊ': 'ூ', 'எ': 'ெ', 'ஏ': 'ே', 'ஐ': 'ை', 'ஒ': 'ொ', 'ஓ': 'ோ', 'ஔ': 'ௌ' };
    // nasal assimilation across the boundary: ன் + j/ch -> ஞ், ன் + th/d -> ந்
    if (a.endsWith('ன்') && /^(j|ch|c[ei])/.test(rLat)) a = a.slice(0, -2) + 'ஞ்';
    else if (a.endsWith('ன்') && /^(th|dh|t|d)(?!r)/.test(rLat)) a = a.slice(0, -2) + 'ந்';
    const first = b[0], last = a[a.length - 1];
    if (IND[first] !== undefined) {                                                   // right part starts with a vowel
        const sign = IND[first], rest = b.slice(1);
        if (a.endsWith(PULLI)) return a.slice(0, -1) + sign + rest;                    // சின்ன் + அம்மாள் -> சின்னம்மாள்
        if (last === 'ு') return a.slice(0, -1) + sign + rest;                          // முத்து + ஐயன் -> முத்தையன்
        if (/[ிீெேை]/.test(last)) return a + 'ய' + sign + rest;                       // பழனி + அம்மாள் -> பழனியம்மாள்
        if (/[ூொோௌா]/.test(last)) return a + 'வ' + sign + rest;                      // பூ + அரசன் -> பூவரசன்
        if (/[\u0B95-\u0BB9]/.test(last)) return a + sign + rest;                       // சின்ன + அம்மாள் -> சின்னம்மாள் (inherent a merges)
        return a + b;
    }
    // gemination (doubling) of க ச த ப at the boundary
    const dbl = { 'க': 'க்', 'ச': 'ச்', 'த': 'த்', 'ப': 'ப்' }[first];
    if (dbl && b[1] !== PULLI) {
        const afterShort = /[ிீுூைெே]/.test(last);
        const afterA = /[\u0B95-\u0BB9]/.test(last) || last === 'ா';
        if (afterShort && E2T_DOUBLE_AFTER_IU.test(rLat)) return a + dbl + b;
        if (afterA && E2T_DOUBLE_AFTER_A.test(rLat)) return a + dbl + b;
    }
    return a + b;
}

const E2T_NO_SPLIT_VV = /^(ai|au|aa|ee|oo|ii|ei|ou|ea|ie|ae|oa|ay|ey|oy|uy)$/;
const E2T_SHORT_L_OK = /^(sri|ram|raj|vel|uma|pon|nag|sel|sen|nal|kal|mal|bal|pal)$/;
const E2T_SHORT_R_OK = /^(vel|das|pal|bal|mal|nar|ayi|dev|sri|mani|rani|vani)$/;
function e2tWord(wl) {
    if (E2T_DICT[wl]) return E2T_DICT[wl];
    let best = null;
    for (let i = 3; i <= wl.length - 3; i++) {
        const L = wl.slice(0, i), Rr = wl.slice(i);
        if (E2T_NO_SPLIT_VV.test(wl[i - 1] + wl[i])) continue;                            // never split inside a vowel pair
        if (/^h/.test(Rr)) continue;                                                     // never split before the 'h' of a digraph
        let dl = e2tDictPart(L, 'prefix', Rr), dr = e2tDictPart(Rr, 'word');
        if (dl !== null && L.length <= 3 && !E2T_SHORT_L_OK.test(L)) dl = null;
        if (dr !== null && Rr.length <= 3 && !E2T_SHORT_R_OK.test(Rr)) dr = null;
        if (dl === null && dr === null) continue;
        if (dl === null && L.length < 4) continue;
        if (dr === null && Rr.length < 4) continue;
        const both = dl !== null && dr !== null;
        if (!both && (dr === null || Rr.length < 5 || L.length < 4)) continue;                     // split only when both halves are known, or a long known tail
        let score = both ? 100 + wl.length : Rr.length;
        const lEndsV = /[aeiou]$/.test(L), rStartsV = /^[aeiou]/.test(Rr);
        if (!lEndsV && rStartsV) score -= both ? 10 : 40;                                 // consonant|vowel boundary breaks a syllable
        if (lEndsV && rStartsV) score -= both ? 5 : 15;                                   // vowel|vowel (Latin would normally show a glide)
        if (/^(nn|ll|mm|pp|tt|kk|rr|ss|yy|vv|dd|bb|gg)/.test(Rr)) score -= 60;             // right part starting with a doubled consonant
        if (/^[^aeiou]{2}/.test(Rr) && !/^(th|dh|sh|ch|kr|pr|br|tr|dr|sr|sw|st|gn|kn|ks|ph|bh|kh|gh|zh|nj)/.test(Rr)) score -= 40;
        if (/^(y|w)/.test(Rr) && dr === null) score -= 5;
        if (dl === null && /e$/.test(L)) score -= 20;
        if (dr === null && dl !== null && dl.endsWith(PULLI) && /^[aeiou]/.test(Rr) === false && !/^(k|p|th|ch|s|m|n|v|r|l)/.test(Rr)) score -= 40;   // ராஜேஷ்|wari
        if (dr === null && dl !== null && /(sh|s|j|z)$/.test(L) && /^[wvy]/.test(Rr)) score -= 60;                  // never split ..esh|wari
        if (dl === null && dr !== null && /(sh|j)$/.test(L)) score -= 30;
        if (score <= 0) continue;
        if (!best || score > best.score) best = { score, L, R: Rr, dl, dr };
    }
    if (best) {
        const left = best.dl !== null ? best.dl : e2tEngine(best.L, 'prefix');
        let right = best.dr !== null ? best.dr : e2tEngine(best.R, 'word', true);
        if (best.dr !== null && /^e(?!e)/.test(best.R) && right.charAt(0) === 'ஈ') right = 'ஏ' + right.slice(1);   // Mah+eswaran -> மகேஸ்வரன்
        return e2tJoin(left, right, best.L, best.R);
    }
    return e2tEngine(wl, 'word', false);
}

const E2T_ACRONYMS = /^(SBI|KVB|IOB|UBI|BOB|BOI|HDFC|ICICI|IDBI|PNB|CUB|TMB|LVB|UCO|IFSC|NEFT|RTGS|UPI|UAN|ESI|EPF|PF|DN|DNO|HNO|PO|TK|DT|VIA|NH|SH|GH|PHC|LIG|MIG|EWS|TNHB|TNEB|EB|RS|BSNL|ATM|PIN|NGO|KVK|CSI|RC|LKG|UKG|MGR|DMK|ADMK|PMK|MDMK|VCK|DMDK|TVS|CBE|SLM|NMK)$/;
function englishToTamil(str) {
    if (!str) return '';
    let s = String(str).trim();
    if (typeof E2T_USER_PHRASES !== 'undefined') E2T_USER_PHRASES.forEach(m => { s = s.replace(m[0], m[1]); });
    E2T_PHRASES.forEach(m => { s = s.replace(m[0], m[1]); });
    s = s.replace(/(\d+)\s*(st|nd|rd|th)\b/gi, '$1வது');
    s = s.replace(/\b(s|d)\s*\/\s*o\b\.?/gi, 'த/பெ').replace(/\bw\s*\/\s*o\b\.?/gi, 'க/பெ').replace(/\bc\s*\/\s*o\b\.?/gi, 'C/o');
    s = s.replace(/\b(mr|thiru|sri|shri|tr)\.\s*(?=[A-Za-z])/gi, 'திரு. ').replace(/\b(mrs|smt|tmt|thirumathi)\.\s*(?=[A-Za-z])/gi, 'திருமதி. ').replace(/\bselvi\.\s*(?=[A-Za-z])/gi, 'செல்வி. ').replace(/\bselvan\.\s*(?=[A-Za-z])/gi, 'செல்வன். ').replace(/\blate\.?\s+(?=[A-Za-z])/gi, 'மறைந்த ');
    s = s.replace(/\s*[\[\(]\s*H\s*[\]\)]/g, ' (கணவர்)').replace(/\s*[\[\(]\s*F\s*[\]\)]/g, ' (தந்தை)').replace(/\s*[\[\(]\s*W\s*[\]\)]/g, ' (மனைவி)').replace(/\s*[\[\(]\s*M\s*[\]\)]/g, ' (தாய்)');
    return s.replace(/[A-Za-z]+/g, function (match) {
        if (match.length === 1) return match.toUpperCase();                            // initials: D, K, R
        const wl = match.toLowerCase();
        if (typeof E2T_USER !== 'undefined' && E2T_USER[wl]) return E2T_USER[wl];       // user's own fixes win
        if (E2T_DICT[wl]) return E2T_DICT[wl];
        if (E2T_ACRONYMS.test(match.toUpperCase()) && (match === match.toUpperCase() || match.length <= 3)) return match.toUpperCase();
        if (/^[A-Z]{2,3}$/.test(match)) return match;                                  // unknown short all-caps -> keep (initials like "DN", "MS")
        return e2tWord(wl);
    });
}


export { englishToTamil, E2T_DICT, E2T_PHRASES };
