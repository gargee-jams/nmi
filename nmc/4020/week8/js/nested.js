var asteroid = {

"links": {
"self": "https://api.nasa.gov/neo/rest/v1/neo/3012393?api_key=6GkozFBru8KqBfF32aHkxtVoL1QpwAsDWU5T5ltz"
},
"neo_reference_id": "3012393",
"name": "Helen",
"designation": "1979 XB",
"nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3012393",
"absolute_magnitude_h": 18.6,
"estimated_diameter": {
"kilometers": {
"estimated_diameter_min": 0.5064714588,
"estimated_diameter_max": 1.1325046106
},
"meters": {
"estimated_diameter_min": 506.4714588346,
"estimated_diameter_max": 1132.5046106177
},
"miles": {
"estimated_diameter_min": 0.3147066768,
"estimated_diameter_max": 0.7037055224
},
"feet": {
"estimated_diameter_min": 1661.651821003,
"estimated_diameter_max": 3715.566426699
}
},
"is_potentially_hazardous_asteroid": true,
"close_approach_data": [
{
"close_approach_date": "1979-12-17",
"epoch_date_close_approach": 314265600000,
"relative_velocity": {
"kilometers_per_second": "23.0264467551",
"kilometers_per_hour": "82895.208318346",
"miles_per_hour": "51507.8587464745"
},
"miss_distance": {
"astronomical": "0.0365907087",
"lunar": "14.2337865829",
"kilometers": "5473892.5",
"miles": "3401319"
},
"orbiting_body": "Earth"
}
],
"orbital_data": {
"orbit_id": "12",
"orbit_determination_date": "2017-04-06 09:18:28",
"first_observation_date": "1979-12-11",
"last_observation_date": "1979-12-15",
"data_arc_in_days": 4,
"observations_used": 18,
"orbit_uncertainty": "9",
"minimum_orbit_intersection": ".023863",
"jupiter_tisserand_invariant": "3.174",
"epoch_osculation": "2444221.5",
"eccentricity": ".7084572219505028",
"semi_major_axis": "2.228139446564493",
"inclination": "24.73433191482803",
"ascending_node_longitude": "86.05548731492976",
"orbital_period": "1214.820124987756",
"perihelion_distance": ".6495979641330815",
"perihelion_argument": "75.57980383566122",
"aphelion_distance": "3.806680928995904",
"perihelion_time": "2444267.666752772366",
"mean_anomaly": "346.3189367247112",
"mean_motion": ".2963401680587308",
"equinox": "J2000",
"orbit_class": {
"orbit_class_type": "APO",
"orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
"orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
}
},
"is_sentry_object": true,
"sentry_data": "https://api.nasa.gov/neo/rest/v1/neo/sentry/3012393?api_key=6GkozFBru8KqBfF32aHkxtVoL1QpwAsDWU5T5ltz"
}

document.querySelector('#asteroid').innerHTML = "The asteroid named " + asteroid.name + " is between " + asteroid.estimated_diameter.miles.estimated_diameter_min + " and " + asteroid.estimated_diameter.miles.estimated_diameter_max + " miles wide, and will miss striking Earth by approximately " + asteroid.close_approach_data[0].miss_distance.miles + " miles.";
var a = document.getElementById('asteroidLink');
a.setAttribute('href', asteroid.links.self);