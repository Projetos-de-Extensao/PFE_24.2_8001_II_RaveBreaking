
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Corrigir ícones padrão do Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const MapView = ({ userLocation, places }) => {
    return (
        <MapContainer center={[userLocation.lat, userLocation.lon]} zoom={13} style={{ height: "400px", width: "100%" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; OpenStreetMap contributors' />

            {/* Marcador para a posição do usuário */}
            <Marker position={[userLocation.lat, userLocation.lon]}>
                <Popup>Você está aqui</Popup>
            </Marker>

            {/* Marcadores para os locais encontrados */}
            {places.map(place => (
                <Marker key={place.id} position={[place.lat, place.lon]}>
                    <Popup>
                        <strong>{place.tags.name || 'Nome não disponível'}</strong><br />
                        {place.tags['addr:street'] || 'Endereço não disponível'}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default MapView;