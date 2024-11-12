import React from 'react';
import { useSelect } from 'downshift';
import { Form, ListGroup } from 'react-bootstrap';

function BuscadorSelect({ items, onSelectedItem }) {
    const {
        isOpen,
        getToggleButtonProps,
        selectedItem,
        inputValue,
        setInputValue,
        highlightedIndex,
        getItemProps,
    } = useSelect({
        items,
        onSelectedItemChange: ({ selectedItem }) => {
            onSelectedItem(selectedItem);
        },
    });

    // Filtrar los items en función de la entrada del usuario
    const filteredItems = items.filter(item =>
        item.toLowerCase().includes(inputValue.toLowerCase())
    );

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div className="buscador-form-group">
            <Form.Control
                {...getToggleButtonProps()}
                className="buscador-input-text"
                type="text"
                placeholder="Localidad"
                value={inputValue || ''}
                onChange={handleInputChange}
                id="buscador-select"
            />
            {/* Mostrar las sugerencias solo cuando hay una entrada y hay coincidencias */}
            {isOpen && inputValue && filteredItems.length > 0 && (
                <ListGroup className="buscador-suggestions">
                    {filteredItems.map((item, index) => (
                        <ListGroup.Item
                            {...getItemProps({ item, index })}
                            key={index}
                            active={highlightedIndex === index} // Resalta el ítem seleccionado
                            className="buscador-suggestion-item"
                        >
                            {item}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            )}
        </div>
    );
}

export { BuscadorSelect };