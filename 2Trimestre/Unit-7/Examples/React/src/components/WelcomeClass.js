import React from 'react';

class WelcomeClass extends React.Component {
    constructor(properties) {
        super();
        this.name = properties.name;
    }

    getName() {
        return this.name;
    }

    pulsa() {
        console.log('hola');
    }

    render() {
        return (
            <div>
                <span>hola</span>
                <button onClick={this.pulsa}>
                    Activate Lasers
                </button>
            </div>
        );
    }
}

export { WelcomeClass }