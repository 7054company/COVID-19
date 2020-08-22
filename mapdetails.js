-1
// outline of harris county

var latlngs = [
  [30.161901, -95.960175],
  [29.789000, -95.826000],
  [29.580269, -95.424062],
  [29.496671, -95.161948],
  [29.827036, -94.909025],
  [30.166693, -95.096316],
  [30.027669, -95.289097],
  [30.167868, -95.543156],
  [30.085911, -95.760136],
  [30.161901, -95.960175]];

var outline = L.polygon(latlngs, {color: 'red'}, {fillOpacity: 0.5}).addTo(mymap);
mymap.fitBounds(outline.getBounds());


// grocery stores

var groceryIcon = L.icon({
    iconUrl: 'grocery.png',
    iconSize: [25, 25],
    iconAnchor: [0, 0],
    popupAnchor: [0, 0]
});
var grocery1 = L.marker([29.7526335749, -95.5014641208], {icon: groceryIcon}).addTo(mymap);
grocery1.bindPopup("<b>Trader Joe's</b><br>Senior Hours: 8:00 a.m - 9:00 a.m<br>Address: 1440 South Voss Road, Houston, Texas 77057<br>Price Level: $$").openPopup();
var grocery2 = L.marker([29.773727000, -95.560256000], {icon: groceryIcon}).addTo(mymap);
grocery2.bindPopup("<b>Walgreens</b><br>Senior Hours: Tuesdays 8:00 a.m - 9:00 a.m<br>Address: 12850 Memorial Dr, Houston, TX 77024<br>Price Level: $$").openPopup();
var grocery3 = L.marker([29.739463000, -95.418153000], {icon:groceryIcon}).addTo(mymap);
grocery3.bindPopup("<b>Whole Foods</b><br>Senior Hours: 7:00 a.m - 8:00 a.m<br>Address: 2955 Kirby Dr, Houston, TX 77098<br>Price Level: $$$").openPopup();
var grocery4 = L.marker([29.967840000, -95.530709000], {icon: groceryIcon}).addTo(mymap);
grocery4.bindPopup("<b>Target</b><br>Senior Hours: Tuesdays & Wednesdays 8:00 a.m - 9:00 a.m<br>Address: 6801 FM 1960 W, Houston, TX 77069<br>Price Level: $$").openPopup();
var grocery5 = L.marker([29.772877000, -95.401322000], {icon: groceryIcon}).addTo(mymap);
grocery5.bindPopup("<b>Walmart</b><br>Senior Hours: Tuesdays 6:00 a.m - 7:00 a.m<br>Address: 111 Yale St, Houston, TX 77007<br>Price Level: $").openPopup();
var grocery6 = L.marker([29.602564, -95.252348], {icon: groceryIcon}).addTo(mymap);
grocery6.bindPopup("<b>H-E-B</b><br>Hours: 7:00am - 11:00pm<br>Address: 9828 Blackhawk Boulevard, Houston, TX 77075<br>*heb has extended their hours instead of supplying special snior hours*</b><b>Price Level: $$").openPopup();
var grocery7 = L.marker([29.662480, -95.206834], {icon: groceryIcon}).addTo(mymap);
grocery7.bindPopup("<b>Foodtown</b><br>Senior Hours: 7:00am - 8:00am Everyday<br>Address: 3316 Shaver Street, South Houston, TX 77587<br>Price Level: $").openPopup();
var grocery8 = L.marker([29.892428, -95.061983], {icon: groceryIcon}).addTo(mymap);
grocery8.bindPopup("<b>Aldi</b><br>Senior Hours: Tuesdays & Thursdays 8:30 a.m - 9:30 a.m<br>Address: 11114130 FM 2100, Crosby, TX 77532<br>Price Level: $").openPopup();


// test sites

var testIcon = L.icon({
    iconUrl: 'test.png',
    iconSize: [25, 25],
    iconAnchor: [0, 0],
    popupAnchor: [0, 0]
});
var site1 = L.marker([29.770140, -95.603554], {icon: testIcon}).addTo(mymap);
site1.bindPopup("<b>CareNow Urgent Care</b><br>Address: 14045 Memorial Dr., Houston, TX 77079").openPopup();
var site2 = L.marker([29.773780, -95.233990], {icon: testIcon}).addTo(mymap);
site2.bindPopup("<b>CVS Pharmacy</b><br>Address: 10222 East Freeway, Houston, TX 77029</br><b>*Appointment needed*").openPopup();
var site3 = L.marker([29.649290, -95.171997], {icon: testIcon}).addTo(mymap);
site3.bindPopup("<b>MedExpress Urgent Care</b><br>Address: 4750 Fairmont Parkway, Pasadena, TX 77504").openPopup();
var site4 = L.marker([29.754060, -95.340690], {icon: testIcon}).addTo(mymap);
site4.bindPopup("<b>Amex Pharmacy</b><br>Address: 3030 Canal Street, Houston, TX 77003").openPopup();
var site5 = L.marker([29.9108060, -95.480680], {icon: testIcon}).addTo(mymap);
site5.bindPopup("<b>CVS Pharmacy</b><br>Address: 12601 Tomball Parkway, Houston, TX 77086</br><b>*Appointment needed*").openPopup();
var site6 = L.marker([29.914549, -95.610224], {icon: testIcon}).addTo(mymap);
site6.bindPopup("<b>Nightlight Pediatric Urgent Care</b><br>Address: 19708 Northwest Freeway #500, Houston, TX 77065</br><b>*Appointment needed*").openPopup();
var site7 = L.marker([29.935654, -95.271126], {icon: testIcon}).addTo(mymap);
site7.bindPopup("<b>Minute Clinic</b><br>Address: 8000 North Sam Houston Parkway East, Humble, TX 77396").openPopup();
var site8 = L.marker([29.895061, -95.066813], {icon: testIcon}).addTo(mymap);
site8.bindPopup("<b>Urgent Care Mds - Crosby</b><br>Address: 14405 FM 2100b, Crosby, TX 77532").openPopup();


// resource centers

var resourceIcon = L.icon({
  iconUrl: 'hands.png',
  iconSize: [25, 25],
  iconAnchor: [0, 0],
  popupAnchor: [0, 0]
});
var resource1 = L.marker([30.003764, -95.461975],{icon: resourceIcon}).addTo(mymap);
resource1.bindPopup("<b>NW Assistance Ministries Food Distribution Center</b><br>Hours: Weekdays 8:00 a.m - 3:00 p.m<br>Address: 15555 Kuykendahl Road  Houston TX 77090").openPopup();
var resource2 = L.marker([29.829889, -95.394078], {icon: resourceIcon}).addTo(mymap);
resource2.bindPopup("<b>Greater First MBC Food Distribution Center</b><br>Hours: Undefined<br>Address: 4441 Haygood St Houston, TX 77022").openPopup();
var resource3 = L.marker([29.734564, -95.290885], {icon: resourceIcon}).addTo(mymap);
resource3.bindPopup("<b>Community Family Ctr. Food Distribution Center</b><br>Hours: Tuesdays and Thursdays 8:00 a.m - 12:00 p.m<br>Address: 7524 Ave E  Houston TX 77012").openPopup();
var resource4 = L.marker([29.799931, -95.329812], {icon: resourceIcon}).addTo(mymap);
resource4.bindPopup("<b>Kashmere Garden Food Distribution Center</b><br>Hours: Saturdays 9:00 a.m - 11:00 a.m<br>Address: 4315 Leffingwell Street  Houston TX 77026").openPopup();
var resource5 = L.marker([29.687434, -95.419567], {icon: resourceIcon}).addTo(mymap);
resource5.bindPopup("<b>NRG Neighborhood Super Site Food Distribution Center</b><br>Hours: Fridays 2:00 p.m - 7:00 p.m<br>Address: 9001 S. Main St  Houston TX 77025").openPopup();
var resource6 = L.marker([29.910544000, -95.692366000], {icon: resourceIcon}).addTo(mymap);
resource6.bindPopup("<b>Lone Star College Cypress Food Distribution Center</b><br>Hours: Fridays 11:00 a.m - 3:00 p.m<br>Address: 9191 Barker Cypress Rd  Cypress TX 77433").openPopup();
var resource7 = L.marker([29.828571500, -95.718071500], {icon: resourceIcon}).addTo(mymap);
resource7.bindPopup("<b>RCCG Penecostal Life Assembly</b><br>Hours: Thursdays 4:00 p.m - 6:00 p.m<br>Address: 19910 Westfield Parkway  Katy TX 77449").openPopup();
var resource8 = L.marker([30.101389, -95.649164], {icon: resourceIcon}).addTo(mymap);
resource8.bindPopup("<b>Lydias Pantry</b><br>Hours: Wednesdays 10:00 a.m - 12:00 p.m<br>Address: 14847 Brown Road  Tomball TX 77377").openPopup();
var resource9 = L.marker([29.790969, -95.126816], {icon: resourceIcon}).addTo(mymap);
resource9.bindPopup("<b>St Andrew Catholic Ch SVDP</b><br>Hours: Tuesdays 6:00 p.m - 7:00 p.m<br>Address: 827 Sheldon Road  Channelview TX 77530").openPopup();
var resource10 = L.marker([29.889911, -95.396011], {icon: resourceIcon}).addTo(mymap);
resource10.bindPopup("<b>Memorial Baptist Church</b><br>Hours: By Appointment<br>Address: 9101 Airline Dr.  Houston TX 77037").openPopup();


// restaurants

var restaurantIcon = L.icon({
  iconUrl: 'restaurant.png',
  iconSize: [25, 25],
  iconAnchor: [0, 0],
  popupAnchor: [0, 0]
});
var restaurant1 = L.marker([29.962642000, -95.167710000], {icon: restaurantIcon}).addTo(mymap);
restaurant1.bindPopup("<b>New York Grand Pizza</b><br>Hours: Monday-Wednesday 11:00 a.m - 9:30 p.m, Fridays and Saturdays 11:00 a.m - 10:00 p.m, Sundays 11:00 a.m - 9:00 p.m<br>Address: 16430 W Lake Houston Pkwy #800, Houston, TX 77044<br>Price Level: $").openPopup();
var restaurant2 = L.marker([29.997035000, -95.599552000], {icon: restaurantIcon}).addTo(mymap);
restaurant2.bindPopup("<b>Pho Ton Vietnamese Restaurant-Louetta</b><br>Hours: Monday-Friday 10:00 a.m - 8:00 p.m, Saturdays 10:00 a.m - 4:00 p.m<br>Address: 11910 Louetta Rd, Houston, TX 77070<br>Price Level: $").openPopup();
var restaurant3 = L.marker([29.859187000, -95.336087000],{icon: restaurantIcon}).addTo(mymap);
restaurant3.bindPopup("<b>Mamas Seafood</b><br>Hours: Monday-Thursday and Saturday 11:00 a.m - 7:00 p.m, Fridays 11:00 a.m - 9:00 p.m<br>Address: 10196 Jensen Dr, Houston, TX 77093<br>Price Level: $").openPopup();
var restaurant4 = L.marker([29.819135000, -95.302331000], {icon: restaurantIcon}).addTo(mymap);
restaurant4.bindPopup("<b>Triple Js Smokehouse</b><br>Hours: Tuesday-Thursday 11:00 a.m - 3:00 p.m, Fridays and Saturdays 11:00 a.m - 6:00 p.m<br>Address: 6715 Homestead Rd, Houston, TX 77028<br>Price Level: $").openPopup();
var restaurant5 = L.marker([30.016760000, -95.118051000], {icon: restaurantIcon}).addTo(mymap);
restaurant5.bindPopup("<b>The Chedar</b><br>Hours: Wednesdays and Thursdays 4:30 p.m - 9:00 p.m, Friday- Sunday 11:00 a.m - 9:00 p.m<br>Address: 10614 FM 1960, Huffman, TX 77336<br>Price Level: $$").openPopup();
var restaurant6 = L.marker([29.988777000, -95.555898000], {icon: restaurantIcon}).addTo(mymap);
restaurant6.bindPopup("<b>Perry's Steakhouse and Grille</b><br>Hours: Weekdays 11:00 a.m - 9:00 p.m and Weekends 11:00 a.m - 10:00 p.m<br>Address: 9730 Cypresswood Dr, Houston, TX 77070<br>Price Level: $$$").openPopup();
var restaurant7 = L.marker([30.061176000, -95.910847000], {icon: restaurantIcon}).addTo(mymap);
restaurant7.bindPopup("<b>Subway</b><br>Hours: 10:00 a.m - 8:00 p.m<br>Address: 31100 Farm to Market 2920 Suite F, Waller, TX 77484<br>Price Level: $").openPopup();
var restaurant8 = L.marker([29.935488000, -95.681102000], {icon: restaurantIcon}).addTo(mymap);
restaurant8.bindPopup("<b>Hailey's Italian Restaurant</b><br>Hours: Monday-Thursday 4:00 p.m - 9:00 p.m, Friday-Saturday 4:00 p.m - 10:00 p.m<br>Address: 10730 Barker Cypress Rd suite e, Cypress, TX 77433<br>Price Level: undefined").openPopup();
var restaurant9 = L.marker([29.597866, -95.266936], {icon: restaurantIcon}).addTo(mymap);
restaurant9.bindPopup("<b>Whataburger</b><br>Hours: Open 24/7<br>Address: 11510 Pearland Pkwy, Houston, TX 77089<br>Price Level: $").openPopup();
var restaurant10 = L.marker([29.657826, -95.355010], {icon: restaurantIcon}).addTo(mymap);
restaurant10.bindPopup("<b>American Deli</b><br>Hours: Monday-Thursday 11:00 a.m - 9:00 p.m, Fridays and Saturdays 11:00 a.m - 10:00 p.m<br>Address: 9209 Cullen Blvd, Houston, TX 77051<br>Price Level: $").openPopup();
var restaurant11 = L.marker([29.701280, -95.365080], {icon: restaurantIcon}).addTo(mymap);
restaurant11.bindPopup("<b>Stuffd Wings</b><br>Hours: Tuesday-Friday 11:00 a.m - 5:00 p.m, Saturdays 12:00 p.m - 6:00 p.m<br>Address: 6402 Tierwester St, Houston, TX 77021<br>Price Level: undefined").openPopup();
var restaurant12 = L.marker([29.786117, -95.535683], {icon: restaurantIcon}).addTo(mymap);
restaurant12.bindPopup("<b>Olive Gardens</b><br>Hours: Sunday-Thursday 11:00 a.m - 10:00 p.m, Fridays and Saturdays 11:00 a.m - 11:00 p.m<br>Address: 9750 Katy Fwy, Houston, TX 77055<br>Price Level: $$");
var restaurant13 = L.marker([29.859512, -95.527422], {icon: restaurantIcon}).addTo(mymap);
restaurant13.bindPopup("<b>Wing Stop</b><br>Hours: 10:30 a.m - 12:00 a.m<br>Address: 14165 Northwest Fwy, Houston, TX 77040<br>Price Level: $$");
var restaurant14 = L.marker([29.994013, -95.741413], {icon: restaurantIcon}).addTo(mymap);
restaurant14.bindPopup("<b>Hot Wok</b><br>Hours: Sunday-Thursday 11:00 a.m - 9:00 p.m, Fridays and Saturdays 11:00 a.m - 9:30 p.m<br>Address: 15103 Mason Rd, Cypress, TX 77433<br>Price Level: undefined").openPopup();
var restaurant15 = L.marker([29.814685, -95.165140], {icon: restaurantIcon}).addTo(mymap);
restaurant15.bindPopup("<b>Longhorn Steakhouse</b><br>Hours: Sunday-Thursday 11:00 a.m - 9:00 p.m, Fridays and Saturdays 11:00 a.m - 10:00 p.m<br>Address: 6201 East Sam Houston Pkwy N, Houston, TX 77049<br>Price Level: $$").openPopup();
var restaurant16 = L.marker([29.924779, -95.413191], {icon: restaurantIcon}).addTo(mymap);
restaurant16.bindPopup("<b>Chilis</b><br>Hours: Monday-Thursday 10:45 a.m - 11:00 p.m, Fridays and Saturdays 10:45 a.m - 12:00 a.m, Sundays 10:45 a.m - 10:30 p.m<br>Address: 10955 North Fwy, Houston, TX 77037<br>Price Level: $$").openPopup();
var restaurant17 = L.marker([29.941430, -95.281165], {icon: restaurantIcon}).addTo(mymap);
restaurant17.bindPopup("<b>Jack in the Box</b><br>Hours: Open 24/7<br>Address: 7019 N Sam Houston Pkwy E, Humble, TX 77396<br>Price Level: $").openPopup();

// financial aid

var moneyIcon = L.icon({
  iconUrl: 'dollar2.png',
  iconSize: [9, 14],
  iconAnchor: [0, 0],
  popupAnchor: [0, 0]
});
var financialAid1 = L.marker([29.769835, -95.614369], {icon: moneyIcon}).addTo(mymap);
financialAid1.bindPopup("<b>St. John Vianney Catholic Church</b><br>Hours: Monday, Wednesday, and Friday from 9:00am to 12:00pm<br>Address: 625 Nottingham Oaks Trail, Houston, TX 77079").openPopup();
var financialAid2 = L.marker([29.730540, -95.560490], {icon: moneyIcon}).addTo(mymap);
financialAid2.bindPopup("<b>West Houston Assistance Ministries</b><br>Hours: Monday through Friday 10:00am - 2:00pm<br>Address: 10501 Meadowglen Lane, Houston, TX 77042").openPopup();
var financialAid3 = L.marker([29.736706, -95.522575], {icon: moneyIcon}).addTo(mymap);
financialAid3.bindPopup("<b>Westheimer Career Office</b><br>Hours: Monday through Friday 8:00am - 5:00pm<br>Address: 8373 Westheimer Road, Houston, TX 77063</br><b>this location also connects you to job opportuities!").openPopup();
var financialAid4 = L.marker([29.836536, -95.402124], {icon: moneyIcon}).addTo(mymap);
financialAid4.bindPopup("<b>Volunteers of Texas America</b><br>Hours: Saturday and Sunday 8:30am - 4:30pm<br>Address: 4808 Yale Street, Houston, TX 77018").openPopup();
var financialAid5 = L.marker([29.847156, -95.348436], {icon: moneyIcon}).addTo(mymap);
financialAid5.bindPopup("<b>Harris County Center</b><br>Hours: Monday through Friday 8:00am - 5:00pm<br>Address: 9418 Jensen Drive, Houston, TX 77093</br><b>*service is only offered in english here*").openPopup();

// case count (the map immediately opens the last popup so let's keep the case count last so it opens first)

var star = L.icon({
    iconUrl: 'star.png',
    iconSize:     [25, 25],
    iconAnchor:   [0, 0],
    popupAnchor:  [0, 0]
});

var caseCount = L.marker([29.789000, -95.856000], {icon: star}).addTo(mymap);
caseCount.bindPopup("<b>Threat Level: Red</b><br>Total Cases: 90,574").openPopup();
