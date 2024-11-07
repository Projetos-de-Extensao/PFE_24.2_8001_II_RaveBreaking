import { useState, useEffect } from 'react';
import Dropdown from './Dropdown.jsx';
import MapView from './Mapview.jsx';

function ContGps() {
    const [userLocation, setUserLocation] = useState(null);
    const [selectedPlace, setSelectedPlace] = useState('hospital');
    const [places, setPlaces] = useState([]);

    // Obter a localização do usuário
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    setUserLocation({
                        lat: -23.70350,
                        lon: -46.69924,
                    });
                },
                () => alert('Não foi possível obter a localização.')
            );
        }
    }, []);

    // Buscar locais próximos usando Overpass API
    useEffect(() => {
        if (userLocation) {
            const fetchPlaces = async () => {
                const url = `https://overpass-api.de/api/interpreter?data=[out:json];node["amenity"="${selectedPlace}"](around:3000,-23.70350,-46.69924);out;`;
                const response = await fetch(url);
                const data = await response.json();
                setPlaces(data.elements || []);
            };
            fetchPlaces();
        }
    }, [userLocation, selectedPlace]);
    
    return (
        <div>
            <h1>Encontre Locais Próximos</h1>
            <Dropdown selectedPlace={selectedPlace} setSelectedPlace={setSelectedPlace} />
            {userLocation && <MapView userLocation={userLocation} places={places} />}
        </div>
    )
}
export default ContGps