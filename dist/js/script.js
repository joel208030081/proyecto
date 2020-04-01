function iniciarMap(){
    var coord = {lat:10.007451 ,lng: -84.217188};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
} 