import React from 'react';

class CategoriesComponent extends React.Component {
    constructor() {
        this.categories = [ 'Textiles', 'Furniture', 'Leather' ];
    }

    render() {
        return (
            <select class="selectpicker">
                {this.categories.map((category, index) => <option value={index}>{category}</option>)}
            </select>
        );
    }
}

export { CategoriesComponent }