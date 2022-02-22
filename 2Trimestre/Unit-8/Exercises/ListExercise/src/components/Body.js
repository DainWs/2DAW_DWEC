import React from 'react';

class Body  extends React.Component {
    constructor(properties) {
        super();
        this.state = {
            nombres: properties.nombres
        };
    }

    addNombre(instance) {
        instance.setState({
            nombres: [...instance.state.nombres, 'Nuevo Nombre']
        })
    }

    changeTitle(instance) {
        instance.props.onChangeTitle();
    }

    render() {
        let nombresViews = [];
        for (const index in this.state.nombres) {
            nombresViews.push(<li key={index}>{this.state.nombres[index]}</li>);
        }

        return (
            <main>
                <ul>
                    {nombresViews}
                </ul>
                <div>
                    <button type="button" onClick={() => {this.addNombre(this)}}>A&ntilde;ade Nombre a lista</button>
                    <button type="button" onClick={() => {this.changeTitle(this)}}>Cambia titulo de cabecera</button>
                </div>
            </main>
        );
    }
}

export default Body;