var categories = ['ASSAULT', 'SEX OFFENSES, FORCIBLE', 'KIDNAPPING', 'ARSON'];
var dict = new Array();

for(var j=0; j < categories.length; j++)
{
    dict[categories[j]] = [];
}
dict["houses"] = [];
dict["rent"] = [];
dict["condo"] = [];
dict["hprices"] = [];
dict["rprices"] = [];
dict['cprices'] = [];
dict["haddress"] = [];
dict["raddress"] = [];
dict['caddress'] = [];
dict["hbd"] = [];
dict["rbd"] = [];
dict['cbd'] = [];
dict["hba"] = [];
dict["rba"] = [];
dict['cba'] = [];
$(document).ready(function(){
var geocoder = new google.maps.Geocoder();
$.get("home", function(res){
  for(var i =0; i<res.length; i++){
    var x = res[i].x;
    var y = res[i].y;
    var address = res[i].Address;
    var price = res[i].Price;
    var bd = res[i].BD;
    var ba = res[i].BA;
    var hlatLng = new google.maps.LatLng(x, y);
    var houseMarker = new google.maps.Marker({
      position: hlatLng,
      map: map,
      icon:'static/images/houses/house.png'
    });
    var button = '<button class="details" id='+i+'>See the Details</button>';
    // button.data("address", address);
    var disc = '<h4>'+ address +'</h4>'+ button;
    var infowindow = new google.maps.InfoWindow();
    google.maps.event.addListener(houseMarker, 'click', (function (houseMarker,disc,infowindow) {
      return function () {
          infowindow.setContent(disc);


          infowindow.open(map, houseMarker);
      };
    })(houseMarker, disc, infowindow));
    houseMarker.setVisible(false);
    dict["houses"].push(houseMarker);
    price = price.replace(/,/g, "");
    price = price.replace('$', "");

    //  console.log(price);
     dict['hprices'].push(parseInt(price));
     dict["haddress"].push(address);
     dict['hbd'].push(parseInt(bd));
     dict['hba'].push(parseInt(ba));
    }
    $(document).on('click', '.details', function(){
      $('#content').html("<div class='container'><h2>House's Info</h2><h4>Address: "+ dict['haddress'][$(this).attr("id")] +"</h4><h4>Price: $"+ dict['hprices'][$(this).attr("id")] +"</h4><h4>Beds: "+ dict['hbd'][$(this).attr("id")] +"</h4><h4>Baths: " + dict['hba'][$(this).attr('id')] + "</h4></div>");
      console.log($(this).data('address'));
    })
}, "json");

$.get("rent", function(res){
  for(var j =0; j<res.length; j++)
  {
    var x = res[j].x;
    var y = res[j].y;
    var address = res[j].Address;
    var price = res[j].Price;
    var bd = res[j].BD;
    var ba = res[j].BA;
    var hlatLng = new google.maps.LatLng(x, y);
    // console.log(rows[i]['x'], rows[i]['y']);
    var rentMarker = new google.maps.Marker({
      position: hlatLng,
      map: map,
      icon:'static/images/houses/rent.png'
    });
    var button = '<button class="rdetails" id='+j+'>See the Details</button>';
    // button.data("address", address);
    var disc = '<h4>'+ address +'</h4>'+ button;

    var infowindow = new google.maps.InfoWindow();
    google.maps.event.addListener(rentMarker, 'click', (function (rentMarker,disc,infowindow) {
      return function () {
          infowindow.setContent(disc);


          infowindow.open(map, rentMarker);
      };
    })(rentMarker, disc, infowindow));
    rentMarker.setVisible(false);
    dict["rent"].push(rentMarker);
    price = price.replace(',', "");
    price = price.replace('$', "");
    price = price.replace('/mo', "");
    // console.log(price);
    dict['rprices'].push(parseInt(price));
    dict["raddress"].push(address);
    dict['rbd'].push(parseInt(bd));
    dict['rba'].push(parseInt(ba));
  }
  $(document).on('click', '.rdetails', function(){
      $('#content').html("<div class='container'><h2>Rent's Info</h2><h4>Address: "+ dict['raddress'][$(this).attr("id")] +"</h4><h4>Price: $"+ dict['rprices'][$(this).attr("id")] +"</h4><h4>Beds: "+ dict['rbd'][$(this).attr("id")] +"</h4><h4>Baths: " + dict['rba'][$(this).attr('id')] + "</h4></div>");
      console.log(dict['rbd'][$(this).attr("id")]);
    })
}, "json");

$.get("condo", function(res){
  for(var i =0; i<res.length; i++)
  {
    var x = res[i].x;
    var y = res[i].y;
    var address = res[i].Address;
    var price = res[i].Price;
    var bd = res[i].BD;
    var ba = res[i].BA;
    var hlatLng = new google.maps.LatLng(x, y);
    // console.log(rows[i]['x'], rows[i]['y']);
    var condoMarker = new google.maps.Marker({
      position: hlatLng,
      map: map,
      icon:'static/images/houses/condo.png'
    });
    var button = '<button class="cdetails" id='+i+'>See the Details</button>';
    // button.data("address", address);
    var disc = '<h4>'+ address +'</h4>'+ button;

    var infowindow = new google.maps.InfoWindow();
    google.maps.event.addListener(condoMarker, 'click', (function (condoMarker,disc,infowindow) {
      return function () {
          infowindow.setContent(disc);


          infowindow.open(map, condoMarker);
      };
    })(condoMarker, disc, infowindow));
    condoMarker.setVisible(false);
    dict["condo"].push(condoMarker);
    price = price.replace(/,/g, "");
    price = price.replace('$', "");
    // console.log(price);
    dict['cprices'].push(parseInt(price));
    dict["caddress"].push(address);
    dict['cbd'].push(parseInt(bd));
    dict['cba'].push(parseInt(ba));
  }
  $(document).on('click', '.cdetails', function(){
      $('#content').html("<div class='container'><h2>Condo's Info</h2><h4>Address: "+ dict['caddress'][$(this).attr("id")] +"</h4><h4>Price: $"+ dict['cprices'][$(this).attr("id")] +"</h4><h4>Beds: "+ dict['cbd'][$(this).attr("id")] +"</h4><h4>Baths: " + dict['cba'][$(this).attr('id')] + "</h4></div>");
      console.log($(this).data('address'));
  })
}, "json");
  // $.get("https://data.sfgov.org/resource/cuks-n6tp.json", function(res){
  //     console.log("in function");
  //     console.log(res);
  //     alert('hi');
  // }, "json");

  //BEGIN QUERY FOR CRIMES
  var consumer = new soda.Consumer("data.sfgov.org");
  for(var j=0; j < categories.length; j++)
  {
    consumer.query()
    .withDataset('cuks-n6tp')
    .where({category: categories[j],})
    .order('date desc')
    .limit(100)
    .getRows()
    .on('success', function(rows){
      for(var i in rows)
      {
        if(rows[i]['date'].search('2016-') != -1)
        {
          //EACH ROW MAKE A MARKER
          var latLng = new google.maps.LatLng(rows[i]['y'], rows[i]['x']);
          // console.log(rows[i]['x'], rows[i]['y']);
          var crimeMarker = new google.maps.Marker({
            position: latLng,
            map: map,
            icon:'static/images/crimes/' + rows[i]['category'] + '.png'
          });
          crimeMarker.setVisible(false);
          var disc = '<h4>'+ rows[i]['descript'] +'</h4>';
          var infowindow = new google.maps.InfoWindow();

          // google.maps.event.addListener(crimeMarker,'click', (function(crimeMarker,disc,infowindow){
          //   return function() {
          //     infowindow.setContent(disc);
          //     infowindow.open(map,crimeMarker);
          //   };
          // })(crimeMarker,disc,infowindow));

          google.maps.event.addListener(crimeMarker, 'mouseover', (function (crimeMarker,disc,infowindow) {
            return function () {
                infowindow.setContent(disc);
                infowindow.open(map, crimeMarker);
            };
          })(crimeMarker, disc, infowindow));

          google.maps.event.addListener(crimeMarker, 'mouseout', (function (crimeMarker,disc,infowindow) {
            return function() {
                infowindow.close();
            };
          })(crimeMarker, disc, infowindow));

          // crimeMarker.addListener('click', function() {
          //   infowindow.open(map, crimeMarker);
          // });
          // var infostorage = [];
          // crimeMarker.addListener('click', function() {
          //   for (var k in infostorage){
          //     k.close();
          //   }
          //   infostorage.push(infowindow)
          //   infowindow.open(map, crimeMarker);
          // });

          dict[rows[i]['category']].push(crimeMarker);

        }

      }
    })
    .on('error', function(error){console.log(error);});
  }
  //END QUERY ASSAULT




  var mapInit = {
    center: new google.maps.LatLng(37.773972, -122.431297),
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.TERRAIN,
  };
  var map = new google.maps.Map(document.getElementById('map'), mapInit);


  var marker;

  var circle = new google.maps.Circle({
    strokeColor: '#4285F4 ',
    strokeOpacity: 0.3,
    strokeWeight: 3,
    fillColor: '#4285F4 ',
    fillOpacity: 0.35,
    map: map,
    radius: 1000
  });


  // Creating our cool search box and link it to the  UI element(input)
  var input = document.getElementById('pac-input');
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  // the SearchBox results suppose to go towards current map's viewport.
  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });

  //implementing our result to the google maps by our cool
  searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }
    // markers.forEach(function(marker) {
    //   marker.setMap(null);
    // });
    // markers = [];
    // For each place, get the icon, name and location.
    deleteMarker();
    var bounds = new google.maps.LatLngBounds();
    var place = null;
    var viewport = null;
    for (var i = 0; place = places[i]; i++) {

      // Create a marker for each place.
      addMarker(place.geometry.location);
      viewport = place.geometry.viewport;
      //markers.push(marker);
      //circle.bindTo('center', marker, 'position');
      bounds.extend(place.geometry.location);
    }
    map.setCenter(bounds.getCenter());
  })


  map.addListener('click', function(event) {
    deleteMarker();
    addMarker(event.latLng);
    //circle.bindTo('center', marker, 'position');
  });


  var infostorage = [];
  // crimeMarker.addListener('click', function() {
  //   for (var k in infostorage){
  //     k.close();
  //   }
  //   infostorage.push(infowindow)
  //   infowindow.open(map, crimeMarker);
  // });


  function addMarker(location) {
    marker = new google.maps.Marker({
      position: location,
      map: map,
      animation: google.maps.Animation.DROP
      //icon:'static/images/house.png'
    });
    map.setZoom(15);
    map.panTo(marker.position);

  };

  function deleteMarker() {
    if (marker){
      marker.setMap(null)
      marker = null
      circle.setMap(null)
    }
  }
  // This is called with the results from from FB.getLoginStatus().
  function statusChangeCallback(response) {
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      testAPI();
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into Facebook.';
    }
  }

  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  window.fbAsyncInit = function() {
  FB.init({
    appId      : '1811471909131716',
    cookie     : true,  // enable cookies to allow the server to access
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.5' // use graph api version 2.5
  });

  // Now that we've initialized the JavaScript SDK, we call
  // FB.getLoginStatus().  This function gets the state of the
  // person visiting this page and can return one of three states to
  // the callback you provide.  They can be:
  //
  // 1. Logged into your app ('connected')
  // 2. Logged into Facebook, but not your app ('not_authorized')
  // 3. Not logged into Facebook and can't tell if they are logged into
  //    your app or not.
  //
  // These three cases are handled in the callback function.

  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });

  };

  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';
    });
  }
});
