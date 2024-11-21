const Dropdown = ({ selectedPlace, setSelectedPlace }) => {
    const handleChange = (event) => {
        setSelectedPlace(event.target.value);
    };

    return (
        <select id="select-dropdown" value={selectedPlace} onChange={handleChange}>
            <option value="hospital">Hospitais</option>
            <option value="police">Delegacias</option>
            <option value="hotel">Hotéis</option>
            <option value="restaurant">Restaurantes</option>
            <option value="bank">Bancos</option>
        </select>
    );
};

export default Dropdown;