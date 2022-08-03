import React from 'react';
import './App.css';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            id: 0,
            // user: "",
            // rememberMe: false,
            name_input: "Имя",
            name: "",
            surname_input: "Фамилия",
            surname: "",
            age_input: "Год рождения",
            age: "",
            town_input: "Город проживания",
            town: "",
            specialization_input: "Специализация",
            specialization: "",
            potential_input: "Лучшее качество",
            potential: "",
            cards: []
        }
    }

    updateInput(key, value) {
        this.setState({
            [key]: value
        })
    }


    // setItem(key, value) {
    //     this.setState({
    //         [key]: value
    //     })
    // }

    addCard() {
        const newCard = {
            id: 1 + this.state.id,
            value: {
                name_input: this.state.name_input.slice(),
                name: this.state.name.slice(),
                surname_input: this.state.surname_input.slice(),
                surname: this.state.surname.slice(),
                age_input: this.state.age_input.slice(),
                age: this.state.age.slice(),
                town_input: this.state.town_input.slice(),
                town: this.state.town.slice(),
                specialization_input: this.state.specialization_input.slice(),
                specialization: this.state.specialization.slice(),
                potential_input: this.state.potential_input.slice(),
                potential: this.state.potential.slice(),
                overturned: false
            }
        };

        this.setState({
            id: newCard.id,
            name_input: "",
            name: "",
            surname_input: "",
            surname: "",
            age_input: "",
            age: "",
            town_input: "",
            town: "",
            specialization_input: "",
            specialization: "",
            potential_input: "",
            potential: "",
            cards: [...this.state.cards, newCard]
        })
    }

    turnCard(id) {
        const cards = [...this.state.cards];

        let index = cards.findIndex((card) => {
            return card.id === id
        });

        cards[index].value.overturned = !cards[index].value.overturned;

        this.updateInput("cards", cards);
    }


    state = {
        user: "",
        name: ""
      };

    handleNameChange = (e) => {   
        this.updateInput("name", e.target.value);
        this.setState({ name: e.target.value });
    }
    handleSurnameChange = (e) => {
        this.updateInput("surname", e.target.value);
        this.setState({ surname: e.target.value });
    }
    handleAgeChange = (e) => {
        this.updateInput("age", e.target.value);
        this.setState({ age: e.target.value });
    }
    handleTownChange = (e) => {
        this.updateInput("town", e.target.value);
        this.setState({ town: e.target.value });
    }
    handleSpecializationChange = (e) => {
        this.updateInput("specialization", e.target.value);
        this.setState({ specialization: e.target.value });
    }
    handlePotentialChange = (e) => {
        this.updateInput("potential", e.target.value);
        this.setState({ potential: e.target.value });
    }

    handleFormSubmit = () => {
        // e.preventDefault()
        // const {user} = this.state;
        const {name} = this.state;
        // localStorage.setItem('user', user);
        localStorage.setItem('name', JSON.stringify(name));
        // localStorage.getItem('name')

    }
    // componentDidMount = () => {
    //     // const name = localStorage.getItem('name')
    //     // this.setState({name})
    //     // const {name} = this.state;
    //     localStorage.getItem('name')
    // }


    render() {
        const { name, surname, age, town, specialization, potential } = this.state;
        const enabled =
            name.length > 0 &&
            surname.length > 0 &&
            age.length > 0 &&
            town.length > 0 &&
            specialization.length > 0 &&
            potential.length > 0;

            // localStorage.getItem('name')
    //          componentDidMount = () => {
    //              const name = localStorage.getItem('name')
    //              this.setState({name})
    //              this.addCard()
    //     // const {name} = this.state;
    //     // localStorage.getItem('name')
    // }
        return (
            <div className="App">

                <h1 className="app-title">Анкета</h1>
                <div className="container" onSubmit={this.handleSubmit}>
                    <form onSubmit={this.handleFormSubmit}>
                    <p>Добавить анкету</p>
                    <input
                        // ref={inp => this.inp = inp}
                        name="name"
                        // type="text"
                        placeholder="Имя"
                        value={this.state.name}
                        // onChange={(e) => this.updateInput("name", e.target.value)}
                        onChange={this.handleNameChange}
                    />
                    <input
                        name="surname"
                        type="text"
                        placeholder="Фамилия"
                        value={this.state.surname}
                        // onChange={(e) => this.updateInput("surname", e.target.value)}
                        onChange={this.handleSurnameChange}
                        />
                    <input
                        name="user"
                        type="text"
                        placeholder="Год рождения"
                        value={this.state.age}
                        // onChange={(e) => this.updateInput("age", e.target.value)}
                        onChange={this.handleAgeChange}
                    />
                    <input
                        name="user"
                        type="text"
                        placeholder="Город проживания"
                        value={this.state.town}
                        // onChange={(e) => this.updateInput("town", e.target.value)}
                        onChange={this.handleTownChange}
                    />
                    <input
                        name="user"
                        type="text"
                        placeholder="Специализация"
                        value={this.state.specialization}
                        // onChange={(e) => this.updateInput("specialization", e.target.value)}
                        onChange={this.handleSpecializationChange}
                    />
                    <input
                        name="user"
                        type="text"
                        placeholder="Лучшее качество"
                        value={this.state.potential}
                        // onChange={(e) => this.updateInput("potential", e.target.value)}
                        onChange={this.handlePotentialChange}
                    />
                    <button
                        type="submit"
                        disabled={!enabled}
                        className="btn add-btn"
                        // onClick={this.componentDidMount}
                        onClick={() => this.addCard()}
                    >
                        Добавить
                    </button>
                    </form>
                    <div>
                        {this.state.cards.map(card => {
                            return (
                                <div
                                    key={card.id}
                                    className={"card" + (card.value.overturned ? " overturned" : "")}
                                    onClick={() => this.turnCard(card.id)}
                                >
                                    {card.value.overturned ? card.value.name : card.value.name_input}
                                </div>

                            )
                        })}
                    </div>
                    <div>
                        {this.state.cards.map(card => {
                            return (
                                <div
                                    key={card.id}
                                    className={"card" + (card.value.overturned ? " overturned" : "")}
                                    onClick={() => this.turnCard(card.id)}
                                >
                                    {card.value.overturned ? card.value.surname : card.value.surname_input}
                                </div>

                            )
                        })}
                    </div>
                    <div>
                        {this.state.cards.map(card => {
                            return (
                                <div
                                    key={card.id}
                                    className={"card" + (card.value.overturned ? " overturned" : "")}
                                    onClick={() => this.turnCard(card.id)}
                                >
                                    {card.value.overturned ? card.value.age : card.value.age_input}
                                </div>

                            )
                        })}
                    </div>
                    <div>
                        {this.state.cards.map(card => {
                            return (
                                <div
                                    key={card.id}
                                    className={"card" + (card.value.overturned ? " overturned" : "")}
                                    onClick={() => this.turnCard(card.id)}
                                >
                                    {card.value.overturned ? card.value.town : card.value.town_input}
                                </div>

                            )
                        })}
                    </div>
                    <div>
                        {this.state.cards.map(card => {
                            return (
                                <div
                                    key={card.id}
                                    className={"card" + (card.value.overturned ? " overturned" : "")}
                                    onClick={() => this.turnCard(card.id)}
                                >
                                    {card.value.overturned ? card.value.specialization : card.value.specialization_input}
                                </div>

                            )
                        })}
                    </div>
                    <div>
                        {this.state.cards.map(card => {
                            return (
                                <div
                                    key={card.id}
                                    className={"card" + (card.value.overturned ? " overturned" : "")}
                                    onClick={() => this.turnCard(card.id)}
                                >
                                    {card.value.overturned ? card.value.potential : card.value.potential_input}
                                </div>

                            )
                        })}
                    </div>
                    </div>
                </div>
        );
    }
    componentDidMount() {
        // const name = localStorage.getItem('name')
        // this.setState({name})
        const {name} = this.state;
        // const {name} = this.addCard()
        localStorage.getItem('name', name)
    }
}

export default App;








// import React from 'react';
// import './App.css';

// class App extends React.Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             id: 0,
//             // user: "",
//             // rememberMe: false,
//             name_input: "Имя",
//             name: "",
//             surname_input: "Фамилия",
//             surname: "",
//             age_input: "Год рождения",
//             age: "",
//             town_input: "Город проживания",
//             town: "",
//             specialization_input: "Специализация",
//             specialization: "",
//             potential_input: "Лучшее качество",
//             potential: "",
//             cards: []
//         }
//     }

//     updateInput(key, value) {
//         this.setState({
//             [key]: value
//         })
//     }


//     // setItem(key, value) {
//     //     this.setState({
//     //         [key]: value
//     //     })
//     // }

//     addCard() {
//         const newCard = {
//             id: 1 + this.state.id,
//             value: {
//                 name_input: this.state.name_input.slice(),
//                 name: this.state.name.slice(),
//                 surname_input: this.state.surname_input.slice(),
//                 surname: this.state.surname.slice(),
//                 age_input: this.state.age_input.slice(),
//                 age: this.state.age.slice(),
//                 town_input: this.state.town_input.slice(),
//                 town: this.state.town.slice(),
//                 specialization_input: this.state.specialization_input.slice(),
//                 specialization: this.state.specialization.slice(),
//                 potential_input: this.state.potential_input.slice(),
//                 potential: this.state.potential.slice(),
//                 overturned: false
//             }
//         };

//         this.setState({
//             id: newCard.id,
//             name_input: "",
//             name: "",
//             surname_input: "",
//             surname: "",
//             age_input: "",
//             age: "",
//             town_input: "",
//             town: "",
//             specialization_input: "",
//             specialization: "",
//             potential_input: "",
//             potential: "",
//             cards: [...this.state.cards, newCard]
//         })
//     }

//     turnCard(id) {
//         const cards = [...this.state.cards];

//         let index = cards.findIndex((card) => {
//             return card.id === id
//         });

//         cards[index].value.overturned = !cards[index].value.overturned;

//         this.updateInput("cards", cards);
//     }


//     state = {
//         user: "",
//         name: ""
//       };

//     handleNameChange = (e) => {   
//         this.updateInput("name", e.target.value);
//         this.setState({ name: e.target.value });
//     }
//     handleSurnameChange = (e) => {
//         this.updateInput("surname", e.target.value);
//         this.setState({ surname: e.target.value });
//     }
//     handleAgeChange = (e) => {
//         this.updateInput("age", e.target.value);
//         this.setState({ age: e.target.value });
//     }
//     handleTownChange = (e) => {
//         this.updateInput("town", e.target.value);
//         this.setState({ town: e.target.value });
//     }
//     handleSpecializationChange = (e) => {
//         this.updateInput("specialization", e.target.value);
//         this.setState({ specialization: e.target.value });
//     }
//     handlePotentialChange = (e) => {
//         this.updateInput("potential", e.target.value);
//         this.setState({ potential: e.target.value });
//     }

//     handleFormSubmit = () => {
//         // e.preventDefault()
//         // const {user} = this.state;
//         const {name} = this.state;
//         // localStorage.setItem('user', user);
//         localStorage.setItem('name', JSON.stringify(name));
//         // localStorage.getItem('name')

//     }
//     // componentDidMount = () => {
//     //     // const name = localStorage.getItem('name')
//     //     // this.setState({name})
//     //     // const {name} = this.state;
//     //     localStorage.getItem('name')
//     // }


//     render() {
//         const { name, surname, age, town, specialization, potential } = this.state;
//         const enabled =
//             name.length > 0 &&
//             surname.length > 0 &&
//             age.length > 0 &&
//             town.length > 0 &&
//             specialization.length > 0 &&
//             potential.length > 0;

//             // localStorage.getItem('name')
//     //          componentDidMount = () => {
//     //              const name = localStorage.getItem('name')
//     //              this.setState({name})
//     //              this.addCard()
//     //     // const {name} = this.state;
//     //     // localStorage.getItem('name')
//     // }
//         return (
//             <div className="App">

//                 <h1 className="app-title">Анкета</h1>
//                 <div className="container" onSubmit={this.handleSubmit}>
//                     <form onSubmit={this.handleFormSubmit}>
//                     <p>Добавить анкету</p>
//                     <input
//                         // ref={inp => this.inp = inp}
//                         name="name"
//                         // type="text"
//                         placeholder="Имя"
//                         value={this.state.name}
//                         // onChange={(e) => this.updateInput("name", e.target.value)}
//                         onChange={this.handleNameChange}
//                     />
//                     <input
//                         name="surname"
//                         type="text"
//                         placeholder="Фамилия"
//                         value={this.state.surname}
//                         // onChange={(e) => this.updateInput("surname", e.target.value)}
//                         onChange={this.handleSurnameChange}
//                         />
//                     <input
//                         name="user"
//                         type="text"
//                         placeholder="Год рождения"
//                         value={this.state.age}
//                         // onChange={(e) => this.updateInput("age", e.target.value)}
//                         onChange={this.handleAgeChange}
//                     />
//                     <input
//                         name="user"
//                         type="text"
//                         placeholder="Город проживания"
//                         value={this.state.town}
//                         // onChange={(e) => this.updateInput("town", e.target.value)}
//                         onChange={this.handleTownChange}
//                     />
//                     <input
//                         name="user"
//                         type="text"
//                         placeholder="Специализация"
//                         value={this.state.specialization}
//                         // onChange={(e) => this.updateInput("specialization", e.target.value)}
//                         onChange={this.handleSpecializationChange}
//                     />
//                     <input
//                         name="user"
//                         type="text"
//                         placeholder="Лучшее качество"
//                         value={this.state.potential}
//                         // onChange={(e) => this.updateInput("potential", e.target.value)}
//                         onChange={this.handlePotentialChange}
//                     />
//                     <button
//                         type="submit"
//                         disabled={!enabled}
//                         className="btn add-btn"
//                         // onClick={this.componentDidMount}
//                         onClick={() => this.addCard()}
//                     >
//                         Добавить
//                     </button>
//                     </form>
//                     <div>
//                         {this.state.cards.map(card => {
//                             return (
//                                 <div
//                                     key={card.id}
//                                     className={"card" + (card.value.overturned ? " overturned" : "")}
//                                     onClick={() => this.turnCard(card.id)}
//                                 >
//                                     {card.value.overturned ? card.value.name : card.value.name_input}
//                                 </div>

//                             )
//                         })}
//                     </div>
//                     <div>
//                         {this.state.cards.map(card => {
//                             return (
//                                 <div
//                                     key={card.id}
//                                     className={"card" + (card.value.overturned ? " overturned" : "")}
//                                     onClick={() => this.turnCard(card.id)}
//                                 >
//                                     {card.value.overturned ? card.value.surname : card.value.surname_input}
//                                 </div>

//                             )
//                         })}
//                     </div>
//                     <div>
//                         {this.state.cards.map(card => {
//                             return (
//                                 <div
//                                     key={card.id}
//                                     className={"card" + (card.value.overturned ? " overturned" : "")}
//                                     onClick={() => this.turnCard(card.id)}
//                                 >
//                                     {card.value.overturned ? card.value.age : card.value.age_input}
//                                 </div>

//                             )
//                         })}
//                     </div>
//                     <div>
//                         {this.state.cards.map(card => {
//                             return (
//                                 <div
//                                     key={card.id}
//                                     className={"card" + (card.value.overturned ? " overturned" : "")}
//                                     onClick={() => this.turnCard(card.id)}
//                                 >
//                                     {card.value.overturned ? card.value.town : card.value.town_input}
//                                 </div>

//                             )
//                         })}
//                     </div>
//                     <div>
//                         {this.state.cards.map(card => {
//                             return (
//                                 <div
//                                     key={card.id}
//                                     className={"card" + (card.value.overturned ? " overturned" : "")}
//                                     onClick={() => this.turnCard(card.id)}
//                                 >
//                                     {card.value.overturned ? card.value.specialization : card.value.specialization_input}
//                                 </div>

//                             )
//                         })}
//                     </div>
//                     <div>
//                         {this.state.cards.map(card => {
//                             return (
//                                 <div
//                                     key={card.id}
//                                     className={"card" + (card.value.overturned ? " overturned" : "")}
//                                     onClick={() => this.turnCard(card.id)}
//                                 >
//                                     {card.value.overturned ? card.value.potential : card.value.potential_input}
//                                 </div>

//                             )
//                         })}
//                     </div>
//                     </div>
//                 </div>
//         );
//     }
//     componentDidMount() {
//         // const name = localStorage.getItem('name')
//         // this.setState({name})
//         const {name} = this.state;
//         // const {name} = this.addCard()
//         localStorage.getItem('name', name)
//     }
// }

// export default App;